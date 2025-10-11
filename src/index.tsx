import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

// Cloudflare Bindings の型定義
type Bindings = {
  OPENAI_API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

// 開発モード設定
const USE_MOCK_RESPONSES = false

// 学習セッション管理（インメモリ）
const learningSessions = new Map()

// 生徒情報データベース（必要最小限追加）
interface StudentInfo {
  studentId: string
  name: string
  grade: number
  subjects: string[]
  weakSubjects: string[]
  lastLogin: string
}

const studentDatabase: Record<string, StudentInfo> = {
  'JS2-04': {
    studentId: 'JS2-04',
    name: '田中太郎',
    grade: 2,
    subjects: ['数学', '理科'],
    weakSubjects: ['英語'],
    lastLogin: new Date().toISOString()
  },
  'test123': {
    studentId: 'test123',
    name: 'テスト生徒',
    grade: 1,
    subjects: ['国語'],
    weakSubjects: ['数学'],
    lastLogin: new Date().toISOString()
  }
}

console.log('🚀 Study Partner server starting...')

// CORS設定
app.use('/api/*', (c, next) => {
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  c.header('Access-Control-Allow-Headers', '*')
  return next()
})

app.options('/api/*', (c) => {
  return c.text('', 200)
})

// 静的ファイル配信
app.use('/static/*', serveStatic({ root: './public' }))

// Health check endpoint
app.get('/api/health', (c) => {
  console.log('🏥 Health check endpoint called')
  
  const response = {
    ok: true,
    status: 'OK',
    mode: USE_MOCK_RESPONSES ? 'development' : 'production',
    timestamp: new Date().toISOString()
  }
  
  console.log('🏥 Health check response:', response)
  return c.json(response, 200)
})

// ログインAPI（最小限追加）
app.post('/api/login', async (c) => {
  try {
    const { appKey, studentId } = await c.req.json()
    console.log('🔑 Login attempt:', { appKey, studentId })
    
    const validAppKeys = ['KOBEYA2024', '180418']
    if (!validAppKeys.includes(appKey)) {
      return c.json({ success: false, message: 'APP_KEYが正しくありません' }, 401)
    }
    
    const studentInfo = studentDatabase[studentId]
    if (!studentInfo) {
      return c.json({ success: false, message: '生徒IDが見つかりません' }, 404)
    }
    
    studentInfo.lastLogin = new Date().toISOString()
    
    return c.json({ 
      success: true, 
      message: 'ログインに成功しました', 
      studentInfo: {
        studentId: studentInfo.studentId,
        name: studentInfo.name,
        grade: studentInfo.grade,
        subjects: studentInfo.subjects,
        weakSubjects: studentInfo.weakSubjects
      }
    })
  } catch (error) {
    console.error('❌ Login error:', error)
    return c.json({ success: false, message: 'ログイン処理でエラーが発生しました' }, 500)
  }
})

// 画像解析 + 段階学習開始 endpoint
app.post('/api/analyze-and-learn', async (c) => {
  console.log('📸 Analyze and learn endpoint called')
  
  try {
    const formData = await c.req.formData()
    const appkey = formData.get('appkey')?.toString() || '180418'
    const sid = formData.get('sid')?.toString() || 'JS2-04'
    const imageField = formData.get('image')
    const userMessage = formData.get('message')?.toString() || ''
    
    console.log('📸 Image analysis request:', { appkey, sid, hasImage: !!imageField, hasMessage: !!userMessage })
    
    if (!imageField || !(imageField instanceof File)) {
      throw new Error('画像ファイルが必要です')
    }
    
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // 生徒情報の取得
    const studentInfo = studentDatabase[sid]
    console.log('👨‍🎓 Student info:', studentInfo ? `${studentInfo.name} (中学${studentInfo.grade}年)` : 'Not found')
    
    // OpenAI API Key の確認
    const apiKey = c.env.OPENAI_API_KEY?.trim()
    console.log('🔑 API Key check:', apiKey ? 'Present (length: ' + apiKey.length + ')' : 'Missing')
    
    if (!apiKey) {
      console.error('❌ OPENAI_API_KEY not found - using fallback')
      // フォールバック: ダミーデータを使用
      const problemTypes = ['quadratic_equation', 'english_grammar']
      const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)]
      let learningData = generateLearningData(problemType)
      learningData.analysis = `【AI学習アシスタント】\n\n⚠️ AI接続でエラーが発生しました。サンプル問題で学習を開始します。\n\n🎯 **段階的学習を開始します**\n一緒に問題を解いていきましょう。各ステップで丁寧に説明しながら進めます！`
      
      // 学習セッションを保存（フォールバック）
      const learningSession = {
        sessionId,
        appkey,
        sid,
        problemType,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: 0,
        status: 'learning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      learningSessions.set(sessionId, learningSession)
      
      return c.json({
        ok: true,
        sessionId,
        analysis: learningData.analysis,
        subject: problemType === 'quadratic_equation' ? '数学' : '英語',
        grade: studentInfo ? studentInfo.grade : 2,
        difficulty: 'standard',
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: learningSession.steps[0],
        totalSteps: learningSession.steps.length,
        status: 'learning',
        message: '段階学習を開始します'
      })
    }
    
    // 画像サポート形式チェック
    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(imageField.type)) {
      console.warn('⚠️ Unsupported image type:', imageField.type)
      // フォールバック処理
      const problemTypes = ['quadratic_equation', 'english_grammar']
      const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)]
      let learningData = generateLearningData(problemType)
      learningData.analysis = `【AI学習アシスタント】\n\n⚠️ サポートされていない画像形式です。サンプル問題で学習を開始します。\n\n🎯 **段階的学習を開始します**\n一緒に問題を解いていきましょう。各ステップで丁寧に説明しながら進めます！`
      
      const learningSession = {
        sessionId,
        appkey,
        sid,
        problemType,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: 0,
        status: 'learning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      learningSessions.set(sessionId, learningSession)
      
      return c.json({
        ok: true,
        sessionId,
        analysis: learningData.analysis,
        subject: problemType === 'quadratic_equation' ? '数学' : '英語',
        grade: studentInfo ? studentInfo.grade : 2,
        difficulty: 'standard',
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: learningSession.steps[0],
        totalSteps: learningSession.steps.length,
        status: 'learning',
        message: '段階学習を開始します'
      })
    }
    
    // 画像をBase64に変換（Cloudflare Workers環境対応）
    let base64Image
    try {
      const arrayBuffer = await imageField.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)
      
      if (uint8Array.length > 500000) { // 500KB制限
        throw new Error('Image too large for Base64 encoding')
      }
      
      // Cloudflare Workers環境でのBase64エンコーディング
      let binary = ''
      for (let i = 0; i < uint8Array.length; i++) {
        binary += String.fromCharCode(uint8Array[i])
      }
      base64Image = btoa(binary)
    } catch (base64Error) {
      console.error('❌ Base64 encoding failed:', base64Error)
      // フォールバック処理
      const problemTypes = ['quadratic_equation', 'english_grammar']
      const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)]
      let learningData = generateLearningData(problemType)
      learningData.analysis = `【AI学習アシスタント】\n\n⚠️ 画像処理でエラーが発生しました。サンプル問題で学習を開始します。\n\n🎯 **段階的学習を開始します**\n一緒に問題を解いていきましょう。各ステップで丁寧に説明しながら進めます！`
      
      const learningSession = {
        sessionId,
        appkey,
        sid,
        problemType,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: 0,
        status: 'learning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      learningSessions.set(sessionId, learningSession)
      
      return c.json({
        ok: true,
        sessionId,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: learningSession.steps[0],
        totalSteps: learningSession.steps.length,
        status: 'learning',
        message: '段階学習を開始します'
      })
    }
    
    const dataUrl = `data:${imageField.type};base64,${base64Image}`
    console.log('🤖 Starting OpenAI Vision API analysis...')
    
    // OpenAI Vision API 呼び出し
    try {
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `あなたは日本の中学校の先生として、バンコク「プログラミングのKOBEYA」で中学1年生〜3年生の生徒をサポートしています。

【参考：現在の生徒情報】
${studentInfo ? 
  `生徒名：${studentInfo.name}
学年：中学${studentInfo.grade}年生
得意分野：${studentInfo.subjects.join('・')}
苦手分野：${studentInfo.weakSubjects.join('・')}

※この情報は参考程度に活用し、問題の本来の難易度や内容は正確に分析してください。
説明方法や例え話で生徒に配慮した指導をお願いします。` : 
  '生徒情報なし（問題内容に基づいて適切なレベルで指導してください）'
}

【指導方針】
- 中学生向けのやさしい敬語で説明
- 海外在住への配慮：「日本でも同じ内容を学習するよ」「心配しないで大丈夫」
- 段階的思考を促す問いかけ形式
- 温かい励ましと共感を含む指導
- 生徒の得意/苦手分野を考慮した説明

【学年判定ルール（文部科学省学習指導要領準拠）】
■数学
- 中学1年：正負の数、文字式、一次方程式、比例・反比例、平面図形、空間図形
- 中学2年：連立方程式、一次関数、図形の性質（合同）、確率
- 中学3年：二次方程式、二次関数、図形の相似、三平方の定理、標本調査

■英語
- 中学1年：be動詞、一般動詞、現在形、過去形、疑問文・否定文の基本
- 中学2年：未来形、助動詞、不定詞、動名詞、比較級・最上級
- 中学3年：現在完了、受動態、関係代名詞、分詞

■国語
- 中学1年：品詞、文の組み立て、説明文・物語文の読解、漢字・語彙
- 中学2年：文章の構成と要約、古典入門、表現技法、作文・小論文の基礎
- 中学3年：論理的文章、古文・漢文、小論文、高校入試対策

■理科
- 中学1年：生物（植物・動物）、地学（地層・地震）、物理（光・音・力）
- 中学2年：化学（原子・分子・化学変化）、生物（消化・呼吸・血液）、物理（電流）
- 中学3年：物理（運動・エネルギー）、化学（イオン・酸アルカリ）、生物（遺伝）、地学（太陽系）

■社会
- 中学1年：地理（世界・日本の地形・気候・産業）
- 中学2年：歴史（古代〜近世）
- 中学3年：歴史（近現代）、公民（憲法・政治・経済）

【分析と学習コンテンツ作成の要求】

【段階学習ステップ生成ルール】
- 問題の複雑さに応じて4-7ステップを動的生成してください
- 基礎問題：4-5ステップ（基本概念確認→練習→応用）
- 標準問題：5-6ステップ（概念確認→基本練習→発展練習→総合）  
- 応用問題：6-7ステップ（概念分解→段階的練習→複合練習→応用→総合）
- 各ステップは前のステップの理解を前提とした段階的構成
- 最終ステップは必ず元問題レベルの総合演習にしてください

【類似問題生成ルール】
- 元画像の問題内容を分析し、5-8問の類似問題を動的生成してください
- 難易度段階：easy(2-3問)→medium(2-3問)→hard(1-2問)
- 数値や文字を変更した同パターン問題
- 解法は同じで表現形式を変えた問題
- 一歩発展させた応用問題を含める
- 各問題は独立して解けるよう設計してください

【回答形式】
以下のJSON形式で回答してください：
{
  "subject": "数学|英語|プログラミング|その他",
  "problemType": "custom",
  "difficulty": "basic|intermediate|advanced", 
  "analysis": "【詳細分析】\\n\\n①問題の整理\\n（どんな問題か、何を求めるかを整理）\\n\\n②使う知識\\n（この問題を解くために必要な基礎知識）\\n\\n③解法のポイント\\n（解き方の流れと重要なポイント）\\n\\n④解答例\\n（解答と計算過程）\\n\\n⑤確認・振り返り\\n（解答の確認方法、類似問題への応用）\\n\\n※中学生向けのやさしい言葉で、励ましの言葉も含めて詳細に説明してください",
  "confidence": 0.0-1.0,
  "steps": [
    {
      "stepNumber": 0,
      "instruction": "ステップ1の指導内容（問いかけ形式で思考を促す）",
      "type": "choice|input",
      "options": ["A) 選択肢1", "B) 選択肢2", "C) 選択肢3", "D) 選択肢4"],
      "correctAnswer": "A",
      "explanation": "励ましを含む詳細解説"
    },
    {
      "stepNumber": 1,
      "instruction": "ステップ2の指導内容",
      "type": "choice|input",
      "options": ["A) 選択肢1", "B) 選択肢2", "C) 選択肢3", "D) 選択肢4"],
      "correctAnswer": "B",
      "explanation": "前ステップを踏まえた詳細解説"
    }
    // 問題の複雑さに応じて4-7ステップまで動的生成
  ],
  "confirmationProblem": {
    "question": "確認問題の内容（元問題と同レベル）",
    "type": "choice|input",
    "options": ["A) 選択肢1", "B) 選択肢2", "C) 選択肢3", "D) 選択肢4"],
    "correctAnswer": "A",
    "explanation": "中学生向けの確認問題解説"
  },
  "similarProblems": [
    {
      "problemNumber": 1,
      "question": "類似問題1（easy）",
      "type": "choice|input",
      "options": ["A) 選択肢1", "B) 選択肢2", "C) 選択肢3", "D) 選択肢4"],
      "correctAnswer": "A",
      "explanation": "類似問題1の詳細解説",
      "difficulty": "easy"
    },
    {
      "problemNumber": 2,
      "question": "類似問題2（easy）",
      "type": "choice|input", 
      "options": ["A) 選択肢1", "B) 選択肢2", "C) 選択肢3", "D) 選択肢4"],
      "correctAnswer": "B",
      "explanation": "類似問題2の詳細解説",
      "difficulty": "easy"
    }
    // 5-8問まで動的生成（easy→medium→hardの順）
  ]
}

【重要な指示】
- ChatGPT学習支援モードで回答してください
- 画像を正確に詳細分析し、教科・難易度を精密判定してください
- 生徒情報は参考程度に活用（問題本来の難易度は維持）
- analysisには従来通り高品質な詳細分析を記載（表示制御は別途実装）
- 段階学習の品質は最高レベルを維持してください

【動的コンテンツ生成の必須要件】
- **段階学習**：問題分析に基づき4-7ステップを適切に生成してください
- **類似問題**：元画像内容を詳細分析し、5-8問を段階的難易度で生成してください
- 固定パターンではなく、各問題に最適化されたコンテンツを作成してください
- 段階的な問いかけで生徒の思考を促進
- 即答せず、考えさせる指導スタイル
- 温かく励ましの言葉を多用
- 各ステップは前のステップの理解を前提とした構成
- 解説は詳細で分かりやすく、温かい励ましを含める
- すべて日本語で作成

【品質保証】
- stepsは最低4個、最大7個まで生成してください（固定1-3個は禁止）
- similarProblemsは最低5個、最大8個まで生成してください（固定3個は禁止）
- 各コンテンツは問題の内容・難易度・教科特性に完全に対応させてください`
            },
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: userMessage ? 
                    `ユーザーからの質問・要望: ${userMessage}\n\n上記の内容を踏まえて、この画像を分析し、適切な学習内容を提案してください。` :
                    'この画像を分析して、適切な学習内容を提案してください。'
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: dataUrl,
                    detail: 'high'
                  }
                }
              ]
            }
          ],
          max_tokens: 2000,
          temperature: 0.3
        })
      })
      
      if (!openaiResponse.ok) {
        const errorText = await openaiResponse.text()
        console.error('❌ OpenAI API error:', openaiResponse.status, errorText)
        throw new Error(`OpenAI API Error: ${openaiResponse.status}`)
      }
      
      const aiContent = (await openaiResponse.json())?.choices?.[0]?.message?.content || ''
      const jsonMatch = aiContent.match(/\{[\s\S]*\}/)
      let aiAnalysis
      
      if (jsonMatch) {
        try {
          aiAnalysis = JSON.parse(jsonMatch[0])
          console.log('🤖 AI分析成功:', {
            subject: aiAnalysis.subject,
            problemType: aiAnalysis.problemType,
            difficulty: aiAnalysis.difficulty,
            confidence: aiAnalysis.confidence
          })
        } catch (parseError) {
          console.error('❌ AI分析結果のJSON解析エラー:', parseError)
          throw new Error('AI分析結果の解析に失敗しました')
        }
      } else {
        console.error('❌ AI分析結果にJSONが見つかりません:', aiContent.substring(0, 200))
        throw new Error('AI分析結果の形式が不正です')
      }
      
      // AI分析結果から学習データを構築
      const selectedProblemType = aiAnalysis.problemType || 'custom'
      
      // AIが生成した学習データを使用（カスタムコンテンツ）
      let learningData
      if (aiAnalysis.steps && Array.isArray(aiAnalysis.steps)) {
        // AIが完全な学習データを生成した場合
        learningData = {
          analysis: `【AI学習アシスタント分析結果】<br><br>${aiAnalysis.analysis.replace(/。/g, '。<br>').replace(/！/g, '！<br>').replace(/<br><br>+/g, '<br><br>')}<br><br>🎯 **段階的学習を開始します**<br>一緒に問題を解いていきましょう。<br>各ステップで丁寧に説明しながら進めます！`,
          steps: aiAnalysis.steps.map(step => ({
            ...step,
            completed: false,
            attempts: []
          })),
          confirmationProblem: aiAnalysis.confirmationProblem || {
            question: "確認問題: 学習内容を理解できましたか？",
            type: "choice",
            options: ["A) よく理解できた", "B) 少し理解できた", "C) もう一度説明が欲しい", "D) 全く分からない"],
            correctAnswer: "A",
            explanation: "素晴らしい！理解が深まりましたね。",
            attempts: []
          },
          similarProblems: aiAnalysis.similarProblems || []
        }
      } else {
        // AIが部分的なデータしか生成しなかった場合のフォールバック
        console.log('⚠️ AI did not generate complete steps, using fallback')
        learningData = generateLearningData('quadratic_equation')
        learningData.analysis = `【AI学習アシスタント分析結果】<br><br>${aiAnalysis.analysis.replace(/。/g, '。<br>').replace(/！/g, '！<br>').replace(/<br><br>+/g, '<br><br>')}<br><br>🎯 **段階的学習を開始します**<br>一緒に問題を解いていきましょう。<br>各ステップで丁寧に説明しながら進めます！`
      }
      
      // 学習セッションを保存（AI分析成功）
      const learningSession = {
        sessionId,
        appkey,
        sid,
        problemType: selectedProblemType,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: 0,
        status: 'learning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      learningSessions.set(sessionId, learningSession)
      
      console.log('✅ AI analysis completed successfully')
      
      return c.json({
        ok: true,
        sessionId,
        analysis: learningData.analysis,
        subject: aiAnalysis.subject || '学習',
        grade: aiAnalysis.grade || (studentInfo ? studentInfo.grade : 2),
        difficulty: aiAnalysis.difficulty || 'standard',
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: learningSession.steps[0],
        totalSteps: learningSession.steps.length,
        status: 'learning',
        message: 'AI解析完了 - 段階学習を開始します'
      })
      
    } catch (aiError) {
      console.error('❌ OpenAI API呼び出しエラー:', aiError)
      
      // AI分析に失敗した場合の安全なフォールバック
      const problemTypes = ['quadratic_equation', 'english_grammar']
      const selectedProblemType = problemTypes[Math.floor(Math.random() * problemTypes.length)]
      let learningData = generateLearningData(selectedProblemType)
      learningData.analysis = '【AI学習アシスタント】\n\n⚠️ AI分析でエラーが発生しました。画像の内容を推測してサンプル問題で学習を開始します。\n\n🎯 **段階的学習を開始します**\n一緒に問題を解いていきましょう。各ステップで丁寧に説明しながら進めます！'
      
      // 学習セッションを保存（AI分析エラーフォールバック）
      const learningSession = {
        sessionId,
        appkey,
        sid,
        problemType: selectedProblemType,
        analysis: learningData.analysis,
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: 0,
        status: 'learning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      learningSessions.set(sessionId, learningSession)
      
      return c.json({
        ok: true,
        sessionId,
        analysis: learningData.analysis,
        subject: selectedProblemType === 'quadratic_equation' ? '数学' : '英語',
        grade: studentInfo ? studentInfo.grade : 2,
        difficulty: 'standard',
        steps: learningData.steps,
        confirmationProblem: learningData.confirmationProblem,
        similarProblems: learningData.similarProblems,
        currentStep: learningSession.steps[0],
        totalSteps: learningSession.steps.length,
        status: 'learning',
        message: 'フォールバック動作 - 段階学習を開始します'
      })
    }

    
  } catch (error) {
    console.error('❌ Analyze and learn error:', error)
    return c.json({
      ok: false,
      error: 'analyze_error',
      message: error.message || 'AI解析でエラーが発生しました',
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// 段階学習 - ステップ回答チェック endpoint
app.post('/api/step/check', async (c) => {
  console.log('📝 Step check endpoint called')
  
  try {
    const body = await c.req.json()
    const { sessionId, stepNumber, answer } = body
    
    console.log('📝 Step check request:', { sessionId, stepNumber, answer })
    
    // セッション取得
    const session = learningSessions.get(sessionId)
    if (!session) {
      throw new Error('学習セッションが見つかりません')
    }
    
    // 現在のステップ取得
    const currentStep = session.steps[stepNumber]
    if (!currentStep) {
      throw new Error('無効なステップ番号です')
    }
    
    // 回答評価
    const isCorrect = answer === currentStep.correctAnswer
    
    // 回答を記録
    currentStep.attempts.push({
      answer,
      isCorrect,
      timestamp: new Date().toISOString()
    })
    
    let nextAction = 'retry' // デフォルトは再挑戦
    let nextStep = null
    
    if (isCorrect) {
      currentStep.completed = true
      session.currentStep = stepNumber + 1
      
      if (session.currentStep >= session.steps.length) {
        // すべてのステップ完了 → 確認問題に移行
        session.status = 'confirmation'
        nextAction = 'confirmation'
      } else {
        // 次のステップに進む
        nextAction = 'next_step'
        nextStep = session.steps[session.currentStep]
      }
    }
    
    session.updatedAt = new Date().toISOString()
    
    const response = {
      ok: true,
      sessionId,
      stepNumber,
      isCorrect,
      feedback: isCorrect ? 
        `✅ 正解です！\n\n💡 ${currentStep.explanation}` :
        `❌ 正解は ${currentStep.correctAnswer} です。\n\n💡 ${currentStep.explanation}`,
      nextAction,
      nextStep,
      confirmationProblem: nextAction === 'confirmation' ? session.confirmationProblem : null,
      currentStepNumber: session.currentStep,
      totalSteps: session.steps.length,
      timestamp: new Date().toISOString()
    }
    
    console.log('📝 Step check response:', { isCorrect, nextAction })
    return c.json(response, 200)
    
  } catch (error) {
    console.error('❌ Step check error:', error)
    return c.json({
      ok: false,
      error: 'step_check_error',
      message: error.message || 'ステップチェックでエラーが発生しました',
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// 確認問題 - 回答チェック endpoint
app.post('/api/confirmation/check', async (c) => {
  console.log('🎯 Confirmation check endpoint called')
  
  try {
    const body = await c.req.json()
    const { sessionId, answer } = body
    
    console.log('🎯 Confirmation check request:', { sessionId, answer })
    
    // セッション取得
    const session = learningSessions.get(sessionId)
    if (!session) {
      throw new Error('学習セッションが見つかりません')
    }
    
    if (!session.confirmationProblem) {
      throw new Error('確認問題が見つかりません')
    }
    
    // 回答評価
    const isCorrect = answer === session.confirmationProblem.correctAnswer
    
    // 回答を記録
    if (!session.confirmationProblem.attempts) {
      session.confirmationProblem.attempts = []
    }
    session.confirmationProblem.attempts.push({
      answer,
      isCorrect,
      timestamp: new Date().toISOString()
    })
    
    let nextAction = 'retry'
    
    if (isCorrect) {
      session.status = 'similar_problems' // 類似問題フェーズに移行
      nextAction = 'similar_problems'
    }
    
    session.updatedAt = new Date().toISOString()
    
    const response = {
      ok: true,
      sessionId,
      isCorrect,
      feedback: isCorrect ?
        `✅ 確認問題正解！\n\n🚀 次は類似問題にチャレンジしましょう！\n\n💡 ${session.confirmationProblem.explanation}` :
        `❌ 正解は ${session.confirmationProblem.correctAnswer} です。\n\n💡 ${session.confirmationProblem.explanation}`,
      nextAction,
      timestamp: new Date().toISOString()
    }
    
    console.log('🎯 Confirmation check response:', { isCorrect, nextAction })
    return c.json(response, 200)
    
  } catch (error) {
    console.error('❌ Confirmation check error:', error)
    return c.json({
      ok: false,
      error: 'confirmation_error',
      message: error.message || '確認問題チェックでエラーが発生しました',
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// AI質問チャットAPI（画像対応）
app.post('/api/ai/chat', async (c) => {
  console.log('🤖 AI chat API called')
  
  try {
    const { sessionId, question, image } = await c.req.json()
    
    if (!sessionId || (!question?.trim() && !image)) {
      return c.json({
        ok: false,
        error: 'missing_params',
        message: 'セッションID、質問文、または画像が不足しています',
        timestamp: new Date().toISOString()
      }, 400)
    }
    
    // セッション情報を取得してコンテキストを作成
    const session = learningSessions.get(sessionId)
    let contextInfo = '学習セッションが見つかりません'
    
    if (session) {
      // 現在の学習コンテキストを構築
      let phase = '段階学習'
      if (session.status === 'similar_problems') {
        phase = '類似問題'
      } else if (session.status === 'confirmation') {
        phase = '確認問題'
      }
      
      contextInfo = `現在の学習状況：
・学習フェーズ: ${phase}
・問題タイプ: ${session.problemType === 'english_grammar' ? '英語文法' : '数学'}
・現在のステップ: ${session.currentStep + 1}
・学習内容: ${session.analysis.split('\n\n')[0]}`
    }
    
    // OpenAI APIキーの確認（型安全）
    const apiKey = c.env.OPENAI_API_KEY?.trim()
    console.log('🔑 API Key check:', apiKey ? 'Present (length: ' + apiKey.length + ')' : 'Missing')
    console.log('🔑 API Key preview:', apiKey ? apiKey.substring(0, 20) + '...' : 'No key')
    
    if (!apiKey) {
      return c.json({
        ok: false,
        error: 'api_key_missing',
        message: 'OPENAI_API_KEY環境変数が設定されていません',
        timestamp: new Date().toISOString()
      }, 500)
    }
    
    // OpenAI APIに送信
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `あなたは「プログラミングのKOBEYA」の優秀な学習サポートAIアシスタントです。生徒の質問に親身になって答える学習サポート専門AIです。

【重要】このチャット機能では確認問題や類似問題の生成は行いません。通常のChatGPTの学習サポートモードで質問に答えてください。

【あなたの役割】
・生徒の学習をサポートする頼れる先生
・分かりやすく、励ましの言葉を含めた温かい対応
・生徒のレベルに合わせた段階的な説明
・具体例や比喩を使った理解しやすい解説
・質問に対する直接的で親切な回答

【現在の学習コンテキスト】
${contextInfo}

【回答方針】
✅ 実行すべきこと：
・質問内容を理解し、分かりやすく説明する
・具体例や図式的説明で理解を促進する  
・励ましの言葉と温かい指導を提供する
・関連する学習ポイントやコツを紹介する
・「一緒に頑張りましょう！」の姿勢を保つ

❌ 実行してはいけないこと：
・確認問題や類似問題の生成
・JSON形式でのレスポンス
・「steps」や「similarProblems」の作成
・問題作成や出題機能

【回答スタイル】
通常のChatGPTのように自然で親しみやすい文章で回答してください。生徒が理解しやすいよう、必要に応じて：
・手順を分けて説明
・具体例を多用  
・図式的な説明（記号や矢印使用）
・覚え方のコツやヒント

生徒からの質問に、学習サポートに特化した温かく分かりやすい回答をしてください。`
          },
          {
            role: 'user',
            content: image ? [
              {
                type: 'text',
                text: question || '写真について教えてください。わからない部分があれば詳しく解説してください。'
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                  detail: 'high'
                }
              }
            ] : question
          }
        ],
        max_tokens: 2000,
        temperature: 0.8
      })
    })
    
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text()
      console.error('❌ OpenAI API error:', openaiResponse.status, errorText)
      
      // デバッグ用：詳細なエラー情報を返す
      return c.json({
        ok: false,
        error: 'openai_api_error',
        message: `OpenAI API Error - Status: ${openaiResponse.status}`,
        details: errorText,
        status: openaiResponse.status,
        timestamp: new Date().toISOString()
      }, 500)
    }
    
    const aiResult = await openaiResponse.json()
    const aiAnswer = aiResult.choices[0]?.message?.content || 'すみません、回答を生成できませんでした。'
    
    // 質問履歴をセッションに保存（オプション）
    if (session) {
      if (!session.aiQuestions) {
        session.aiQuestions = []
      }
      session.aiQuestions.push({
        question,
        answer: aiAnswer,
        timestamp: new Date().toISOString(),
        phase: session.status,
        currentStep: session.currentStep
      })
    }
    
    console.log('🤖 AI chat response generated successfully')
    
    return c.json({
      ok: true,
      question,
      answer: aiAnswer,
      timestamp: new Date().toISOString()
    }, 200)
    
  } catch (error) {
    console.error('❌ AI chat error:', error)
    return c.json({
      ok: false,
      error: 'ai_chat_error',
      message: 'AI質問処理でエラーが発生しました: ' + (error.message || '不明なエラー'),
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// AI質問ウインドウ用ページ
app.get('/ai-chat/:sessionId', (c) => {
  const sessionId = c.req.param('sessionId')
  console.log('🤖 AI chat window requested for session:', sessionId)
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI学習サポート - KOBEYA</title>
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        
        <!-- Cropper.js CSS -->
        <link rel="stylesheet" href="https://unpkg.com/cropperjs@1.6.1/dist/cropper.min.css">
        
        <style>
        body { 
          font-family: 'Noto Sans JP', sans-serif;
          margin: 0;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          color: #333;
        }
        
        .chat-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          overflow: hidden;
          height: calc(100vh - 2rem);
          display: flex;
          flex-direction: column;
        }
        
        .chat-header {
          background: linear-gradient(135deg, #7c3aed, #8b5cf6);
          color: white;
          padding: 1.5rem;
          text-align: center;
        }
        
        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          background: #f8fafc;
        }
        
        .message {
          margin-bottom: 1rem;
          padding: 1rem;
          border-radius: 1rem;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        
        .user-message {
          background: #e0e7ff;
          margin-left: 2rem;
          border-bottom-right-radius: 0.25rem;
        }
        
        .ai-message {
          background: white;
          margin-right: 2rem;
          border: 1px solid #e2e8f0;
          border-bottom-left-radius: 0.25rem;
        }
        
        .chat-input {
          padding: 1rem;
          background: white;
          border-top: 1px solid #e2e8f0;
        }
        
        .input-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .image-controls {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .image-btn {
          padding: 0.5rem 1rem;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #475569;
        }
        
        .image-btn:hover {
          background: #e2e8f0;
        }
        
        .image-preview {
          max-width: 100%;
          max-height: 200px;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #e2e8f0;
        }
        
        .crop-container {
          max-height: 300px;
          margin-bottom: 1rem;
        }
        
        #questionInput {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-family: inherit;
          resize: none;
          min-height: 60px;
          max-height: 120px;
        }
        
        #questionInput:focus {
          outline: none;
          border-color: #7c3aed;
        }
        
        #sendButton {
          padding: 0.75rem 1.5rem;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          align-self: flex-end;
          min-height: 60px;
        }
        
        #sendButton:hover {
          background: #6d28d9;
        }
        
        #sendButton:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }
        
        .loading {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
          font-style: italic;
        }
        
        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #7c3aed;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .close-window {
          margin-top: 1rem;
          text-align: center;
        }
        
        .close-button {
          background: #ef4444;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
        }
        
        .close-button:hover {
          background: #dc2626;
        }
        
        .welcome-message {
          text-align: center;
          color: #6b7280;
          padding: 2rem;
          font-style: italic;
        }
        
        /* Cropper.js のハンドルサイズを大きく調整 - メイン画面と同じサイズに */
        .cropper-point {
          width: 12px !important;
          height: 12px !important;
          background-color: #7c3aed !important;
          border-radius: 50% !important;
          opacity: 0.9 !important;
        }
        
        .cropper-point:hover {
          background-color: #5b21b6 !important;
          opacity: 1 !important;
        }
        
        /* 角の四角ハンドル */
        .cropper-point.point-nw,
        .cropper-point.point-ne,
        .cropper-point.point-sw,
        .cropper-point.point-se {
          width: 14px !important;
          height: 14px !important;
          border-radius: 3px !important;
        }
        
        /* 辺の中央ハンドル */
        .cropper-point.point-n,
        .cropper-point.point-s,
        .cropper-point.point-e,
        .cropper-point.point-w {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
        }
        
        /* クロップボックスのボーダーも見やすく */
        .cropper-crop-box {
          border: 2px solid #7c3aed !important;
        }
        
        .cropper-view-box {
          outline: 1px solid rgba(124, 58, 237, 0.75) !important;
        }
        </style>
    </head>
    <body>
        <div class="chat-container">
            <div class="chat-header">
                <h1 style="margin: 0; font-size: 1.5rem;">
                    <i class="fas fa-robot" style="margin-right: 0.5rem;"></i>
                    AI学習サポート
                </h1>
                <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">何でもお聞きください！一緒に学習を進めましょう 📚</p>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <div class="welcome-message">
                    <i class="fas fa-graduation-cap" style="font-size: 2rem; color: #7c3aed; margin-bottom: 1rem; display: block;"></i>
                    こんにちは！学習でわからないことがあれば、何でも質問してください。<br>
                    丁寧に説明いたします！
                </div>
            </div>
            
            <div class="chat-input">
                <!-- 画像アップロード機能 -->
                <div class="image-controls">
                    <button class="image-btn" id="cameraBtn">
                        <i class="fas fa-camera"></i> 📷 写真を撮る
                    </button>
                    <button class="image-btn" id="fileBtn">
                        <i class="fas fa-folder-open"></i> 📁 ファイル選択
                    </button>
                    <button class="image-btn" id="clearImageBtn" style="display: none; background: #fee2e2; color: #dc2626;">
                        <i class="fas fa-times"></i> 画像をクリア
                    </button>
                </div>
                
                <!-- 隠し画像入力 -->
                <input type="file" id="cameraInput" accept="image/*" capture="environment" style="display: none;">
                <input type="file" id="fileInput" accept="image/*" style="display: none;">
                
                <!-- 画像プレビューエリア -->
                <div id="imagePreviewArea" style="display: none;">
                    <img id="previewImage" class="image-preview">
                    <div style="text-align: center; margin-bottom: 1rem;">
                        <button class="image-btn" id="startCropBtn" style="background: #7c3aed; color: white;">
                            <i class="fas fa-crop"></i> 範囲を調整
                        </button>
                        <button class="image-btn" id="confirmImageBtn" style="background: #059669; color: white;">
                            <i class="fas fa-check"></i> この画像で質問
                        </button>
                    </div>
                </div>
                
                <!-- クロップエリア -->
                <div id="cropArea" style="display: none;">
                    <div class="crop-container">
                        <img id="cropImage" style="max-width: 100%; max-height: 280px;">
                    </div>
                    <div style="text-align: center; margin-bottom: 1rem;">
                        <button class="image-btn" id="cancelCropBtn">
                            <i class="fas fa-times"></i> キャンセル
                        </button>
                        <button class="image-btn" id="confirmCropBtn" style="background: #7c3aed; color: white;">
                            <i class="fas fa-check"></i> この範囲で質問
                        </button>
                    </div>
                </div>
                
                <!-- テキスト入力と送信 -->
                <div class="input-row">
                    <textarea id="questionInput" placeholder="質問を入力してください...（画像のみの場合は空白でもOK）"></textarea>
                    <button id="sendButton">
                        <i class="fas fa-paper-plane"></i><br>送信
                    </button>
                </div>
            </div>
            
            <div class="close-window">
                <button class="close-button" onclick="window.close()">
                    <i class="fas fa-times"></i> ウインドウを閉じる
                </button>
            </div>
        </div>
        
        <script src="https://unpkg.com/cropperjs@1.6.1/dist/cropper.min.js"></script>
        <script>
        const sessionId = '${sessionId}';
        const chatMessages = document.getElementById('chatMessages');
        const questionInput = document.getElementById('questionInput');
        const sendButton = document.getElementById('sendButton');
        
        // 画像関連の要素
        const cameraBtn = document.getElementById('cameraBtn');
        const fileBtn = document.getElementById('fileBtn');
        const clearImageBtn = document.getElementById('clearImageBtn');
        const cameraInput = document.getElementById('cameraInput');
        const fileInput = document.getElementById('fileInput');
        const imagePreviewArea = document.getElementById('imagePreviewArea');
        const previewImage = document.getElementById('previewImage');
        const startCropBtn = document.getElementById('startCropBtn');
        const confirmImageBtn = document.getElementById('confirmImageBtn');
        const cropArea = document.getElementById('cropArea');
        const cropImage = document.getElementById('cropImage');
        const cancelCropBtn = document.getElementById('cancelCropBtn');
        const confirmCropBtn = document.getElementById('confirmCropBtn');
        
        let cropper = null;
        let currentImageData = null;
        
        // エンターキーで送信（Shift+Enterで改行）
        questionInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendQuestion();
            }
        });
        
        sendButton.addEventListener('click', sendQuestion);
        
        // 画像機能のイベントリスナー
        cameraBtn.addEventListener('click', () => cameraInput.click());
        fileBtn.addEventListener('click', () => fileInput.click());
        clearImageBtn.addEventListener('click', clearImage);
        cameraInput.addEventListener('change', handleImageSelect);
        fileInput.addEventListener('change', handleImageSelect);
        startCropBtn.addEventListener('click', startCrop);
        confirmImageBtn.addEventListener('click', confirmImage);
        cancelCropBtn.addEventListener('click', cancelCrop);
        confirmCropBtn.addEventListener('click', confirmCrop);
        
        // 画像選択処理
        function handleImageSelect(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            console.log('🖼️ AI Chat: Image selected', file.name);
            
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.onload = function() {
                    console.log('🖼️ AI Chat: Image loaded, showing preview');
                    showImagePreview();
                    
                    // 画像読み込み完了後に自動的にクロップを開始
                    setTimeout(() => {
                        console.log('🖼️ AI Chat: Starting auto crop');
                        startCrop();
                    }, 800);
                };
            };
            reader.readAsDataURL(file);
        }
        
        function showImagePreview() {
            imagePreviewArea.style.display = 'block';
            cropArea.style.display = 'none';
            clearImageBtn.style.display = 'inline-block';
        }
        
        function startCrop() {
            if (!previewImage.src) {
                console.error('❌ AI Chat: No image source for crop');
                return;
            }
            
            console.log('✂️ AI Chat: Starting crop function');
            
            cropImage.src = previewImage.src;
            imagePreviewArea.style.display = 'none';
            cropArea.style.display = 'block';
            
            if (cropper) {
                cropper.destroy();
            }
            
            // Cropper.jsの初期化を遅延させる
            setTimeout(() => {
                if (window.Cropper && cropImage) {
                    cropper = new window.Cropper(cropImage, {
                        aspectRatio: NaN, // フリーサイズ
                        viewMode: 1,
                        dragMode: 'move', // メイン画面と同じ設定
                        autoCropArea: 0.95, // ほぼ全体を初期選択（メイン画面と同じ）
                        responsive: true,
                        restore: false,
                        guides: true,
                        center: true,
                        highlight: false,
                        cropBoxMovable: true,
                        cropBoxResizable: true,
                        toggleDragModeOnDblclick: false,
                        ready: function() {
                            console.log('✂️ AI Chat Cropper initialized with large crop area');
                        }
                    });
                }
            }, 100);
        }
        
        function cancelCrop() {
            cropArea.style.display = 'none';
            showImagePreview();
            
            if (cropper) {
                cropper.destroy();
                cropper = null;
            }
        }
        
        function confirmCrop() {
            console.log('✂️ AI Chat: ConfirmCrop called, cropper exists:', !!cropper);
            
            if (!cropper) {
                console.error('❌ AI Chat: No cropper instance available');
                alert('クロップ機能が正しく初期化されていません。再度お試しください。');
                return;
            }
            
            console.log('✂️ AI Chat: Starting crop process');
            
            let canvas;
            try {
                canvas = cropper.getCroppedCanvas({
                    maxWidth: 1024,
                    maxHeight: 1024,
                    imageSmoothingQuality: 'high'
                });
                
                console.log('✂️ AI Chat: Canvas obtained:', !!canvas);
                
                if (!canvas) {
                    console.error('❌ AI Chat: Failed to get cropped canvas');
                    alert('画像の切り取りに失敗しました。再度お試しください。');
                    return;
                }
                
            } catch (error) {
                console.error('❌ AI Chat: Error getting canvas:', error);
                alert('画像の処理中にエラーが発生しました。');
                return;
            }
            
            // 画像データをBase64に変換
            try {
                const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                console.log('✂️ AI Chat: Image converted to base64, length:', imageDataUrl.length);
                
                // グローバル変数に設定
                currentImageData = imageDataUrl;
                
                // 設定の確認
                console.log('✂️ AI Chat: currentImageData set, verify length:', currentImageData ? currentImageData.length : 'null');
                console.log('✂️ AI Chat: currentImageData starts with:', currentImageData ? currentImageData.substring(0, 30) : 'null');
                
                if (!currentImageData || currentImageData.length < 100) {
                    console.error('❌ AI Chat: Image data not properly set');
                    alert('画像データの設定に失敗しました。');
                    return;
                }
                
            } catch (error) {
                console.error('❌ AI Chat: Error converting to base64:', error);
                alert('画像の変換中にエラーが発生しました。');
                return;
            }
            
            console.log('✂️ AI Chat: Hiding crop interface');
            
            // クロップ完了後は直接画像を確定
            cropArea.style.display = 'none';
            imagePreviewArea.style.display = 'none';
            clearImageBtn.style.display = 'inline-block';
            
            // cropperを破棄
            if (cropper) {
                cropper.destroy();
                cropper = null;
                console.log('✂️ AI Chat: Cropper destroyed');
            }
            
            console.log('✂️ AI Chat: Crop completed, preparing to send question');
            console.log('✂️ AI Chat: Final check - currentImageData length:', currentImageData ? currentImageData.length : 'null');
            
            // クロップ完了後、自動的に質問を送信
            setTimeout(() => {
                console.log('✂️ AI Chat: Timeout callback - currentImageData exists:', !!currentImageData);
                console.log('✂️ AI Chat: Timeout callback - currentImageData length:', currentImageData ? currentImageData.length : 0);
                
                if (!currentImageData) {
                    console.error('❌ AI Chat: Image data lost during timeout');
                    alert('画像データが失われました。再度お試しください。');
                    return;
                }
                
                console.log('✂️ AI Chat: Calling sendQuestion() with image data');
                sendQuestion();
            }, 100); // タイムアウトを短縮
        }
        
        function confirmImage() {
            console.log('🖼️ AI Chat: Confirm image called');
            
            if (previewImage.src && !currentImageData) {
                // クロップしていない場合は元画像を使用
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                
                img.onload = function() {
                    // 1024px以下にリサイズ
                    const maxSize = 1024;
                    let { width, height } = img;
                    
                    if (width > maxSize || height > maxSize) {
                        if (width > height) {
                            height = (height * maxSize) / width;
                            width = maxSize;
                        } else {
                            width = (width * maxSize) / height;
                            height = maxSize;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    currentImageData = canvas.toDataURL('image/jpeg', 0.8);
                    
                    console.log('🖼️ AI Chat: Image processed, auto-sending question');
                    
                    // 画像設定完了後にプレビューを非表示
                    imagePreviewArea.style.display = 'none';
                    
                    // 画像確定後、自動的に質問を送信
                    setTimeout(() => {
                        sendQuestion();
                    }, 300);
                };
                
                img.src = previewImage.src;
            } else {
                // 既に画像データがある場合
                imagePreviewArea.style.display = 'none';
                
                // 自動的に質問を送信
                setTimeout(() => {
                    console.log('🖼️ AI Chat: Using existing image data, auto-sending question');
                    sendQuestion();
                }, 300);
            }
        }
        
        function clearImage() {
            currentImageData = null;
            imagePreviewArea.style.display = 'none';
            cropArea.style.display = 'none';
            clearImageBtn.style.display = 'none';
            
            if (cropper) {
                cropper.destroy();
                cropper = null;
            }
            
            // 入力要素をリセット
            cameraInput.value = '';
            fileInput.value = '';
        }

        async function sendQuestion() {
            const question = questionInput.value.trim();
            console.log('📤 AI Chat: ===== SEND QUESTION CALLED =====');
            console.log('📤 Question text:', question || '(empty)');
            console.log('📤 Has image data:', !!currentImageData);
            console.log('📤 Image data length:', currentImageData ? currentImageData.length : 0);
            console.log('📤 Image data type:', typeof currentImageData);
            
            if (currentImageData) {
                console.log('📤 Image data preview:', currentImageData.substring(0, 50) + '...');
            }
            
            if (!question && !currentImageData) {
                console.error('❌ AI Chat: Both question and image are empty');
                console.log('❌ Question value:', JSON.stringify(question));
                console.log('❌ currentImageData value:', currentImageData);
                alert('質問を入力するか、画像を選択してください');
                return;
            }
            
            console.log('📤 AI Chat: Validation passed, proceeding with request');
            
            // ユーザーメッセージを表示
            let displayMessage = question || '📷 画像について質問';
            if (currentImageData && question) {
                displayMessage = '📷 ' + question;
            }
            addMessage(displayMessage, 'user');
            
            // 画像がある場合は画像も表示
            if (currentImageData) {
                addImageMessage(currentImageData, 'user');
            }
            
            questionInput.value = '';
            const imageData = currentImageData;
            clearImage(); // 送信後は画像をクリア
            
            // 送信ボタンを無効化
            sendButton.disabled = true;
            
            // AI思考中メッセージを表示
            const thinkingMessage = addMessage('', 'ai', true);
            
            try {
                const response = await fetch('/api/ai/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        sessionId: sessionId,
                        question: question,
                        image: imageData
                    })
                });
                
                const result = await response.json();
                
                // 思考中メッセージを削除
                thinkingMessage.remove();
                
                if (result.ok) {
                    addMessage(result.answer, 'ai');
                } else {
                    addMessage('申し訳ございません。エラーが発生しました: ' + result.message, 'ai');
                }
                
            } catch (error) {
                console.error('AI Chat error:', error);
                thinkingMessage.remove();
                addMessage('申し訳ございません。通信エラーが発生しました。', 'ai');
            }
            
            // 送信ボタンを有効化
            sendButton.disabled = false;
            questionInput.focus();
        }
        
        function addMessage(text, sender, isLoading = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'ai-message');
            
            if (isLoading) {
                messageDiv.innerHTML = '<div class="loading"><div class="loading-spinner"></div>考えています...</div>';
            } else {
                messageDiv.textContent = text;
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            return messageDiv;
        }
        
        function addImageMessage(imageSrc, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'ai-message');
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.style.maxWidth = '200px';
            img.style.maxHeight = '150px';
            img.style.borderRadius = '0.5rem';
            img.style.cursor = 'pointer';
            img.onclick = () => {
                // 画像クリックで拡大表示
                const newWindow = window.open('', '_blank', 'width=800,height=600');
                newWindow.document.write('<html><head><title>画像拡大表示</title></head><body style="margin:0; display:flex; justify-content:center; align-items:center; background:#000;"><img src="' + imageSrc + '" style="max-width:100%; max-height:100%; object-fit:contain;"></body></html>');
            };
            
            messageDiv.appendChild(img);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            return messageDiv;
        }
        
        // 初期フォーカス
        questionInput.focus();
        </script>
    </body>
    </html>
  `)
})

// デバッグ用：セッションデータ確認API（一時的）
app.get('/api/debug/session/:sessionId', (c) => {
  const sessionId = c.req.param('sessionId')
  const session = learningSessions.get(sessionId)
  
  if (!session) {
    return c.json({ error: 'Session not found' }, 404)
  }
  
  // セッションデータの構造を確認
  return c.json({
    sessionId,
    hasAnalysis: !!session.analysis,
    hasSteps: !!session.steps,
    hasConfirmation: !!session.confirmationProblem,
    hasSimilarProblems: !!session.similarProblems,
    similarProblemsCount: session.similarProblems?.length || 0,
    sessionKeys: Object.keys(session),
    analysisType: typeof session.analysis,
    sessionStructure: {
      sessionId: session.sessionId,
      status: session.status,
      currentStep: session.currentStep,
      stepsLength: session.steps?.length,
      similarProblemsLength: session.similarProblems?.length
    }
  })
})

// 類似問題チェックAPI
app.post('/api/similar/check', async (c) => {
  console.log('🔥 Similar problem check API called')
  
  try {
    const { sessionId, problemNumber, answer } = await c.req.json()
    
    if (!sessionId || problemNumber === undefined || answer === undefined) {
      return c.json({
        ok: false,
        error: 'missing_params',
        message: 'セッションID、問題番号、または回答が不足しています',
        timestamp: new Date().toISOString()
      }, 400)
    }
    
    const session = learningSessions.get(sessionId)
    if (!session) {
      return c.json({
        ok: false,
        error: 'session_not_found',
        message: 'セッションが見つかりません',
        timestamp: new Date().toISOString()
      }, 404)
    }
    
    console.log('🔍 Similar check - session keys:', Object.keys(session))
    console.log('🔍 Similar check - has similarProblems:', !!session.similarProblems)
    console.log('🔍 Similar check - similarProblems type:', typeof session.similarProblems)
    console.log('🔍 Similar check - similarProblems count:', session.similarProblems?.length || 0)
    
    // 類似問題データの取得
    const problemIndex = problemNumber - 1
    const similarProblem = session.similarProblems[problemIndex]
    
    if (!similarProblem) {
      return c.json({
        ok: false,
        error: 'problem_not_found',
        message: '指定された類似問題が見つかりません',
        timestamp: new Date().toISOString()
      }, 404)
    }
    
    // 回答チェック
    let isCorrect = false
    
    if (similarProblem.type === 'choice') {
      // 選択肢問題の場合
      isCorrect = answer === similarProblem.correctAnswer
    } else if (similarProblem.type === 'input') {
      // 記述問題の場合 - 複数の正解パターンをチェック
      const normalizedAnswer = answer.trim()
      isCorrect = similarProblem.correctAnswers.some(correct => 
        normalizedAnswer === correct.trim()
      )
    }
    
    console.log('🎯 Similar problem check:', {
      problemNumber,
      type: similarProblem.type,
      userAnswer: answer,
      expected: similarProblem.type === 'choice' ? similarProblem.correctAnswer : similarProblem.correctAnswers,
      isCorrect
    })
    
    // 回答履歴を記録（attemptsが未定義の場合は初期化）
    if (!similarProblem.attempts) {
      similarProblem.attempts = [];
    }
    similarProblem.attempts.push({
      answer,
      isCorrect,
      timestamp: new Date().toISOString()
    })
    
    // 全体の進捗をチェック
    if (!session.similarProblems) {
      console.error('❌ No similarProblems in session:', session);
      return c.json({
        ok: false,
        error: 'missing_similar_problems',
        message: '類似問題データが見つかりません',
        timestamp: new Date().toISOString()
      }, 500);
    }
    
    const completedProblems = session.similarProblems.filter(p => 
      p.attempts && p.attempts.some(attempt => attempt.isCorrect)
    ).length
    
    let nextAction = 'continue'
    let feedback = ''
    
    if (isCorrect) {
      feedback = `✅ 類似問題${problemNumber}正解！\n\n💡 ${similarProblem.explanation}`
      
      if (completedProblems === session.similarProblems.length) {
        session.status = 'fully_completed'
        nextAction = 'all_completed'
        feedback += '\n\n🎉 すべての類似問題が完了しました！お疲れ様でした！'
      } else {
        nextAction = 'next_problem'
      }
    } else {
      if (similarProblem.type === 'choice') {
        feedback = `❌ 正解は ${similarProblem.correctAnswer} です。\n\n💡 ${similarProblem.explanation}`
      } else {
        feedback = `❌ 正解例: ${similarProblem.correctAnswers[0]}\n\n💡 ${similarProblem.explanation}`
      }
      nextAction = 'retry'
    }
    
    session.updatedAt = new Date().toISOString()
    
    const response = {
      ok: true,
      sessionId,
      problemNumber,
      isCorrect,
      feedback,
      nextAction,
      completedProblems,
      totalProblems: session.similarProblems.length,
      timestamp: new Date().toISOString()
    }
    
    console.log('🎯 Similar check response:', { isCorrect, nextAction, completedProblems })
    return c.json(response, 200)
    
  } catch (error) {
    console.error('❌ Similar check error:', error)
    return c.json({
      ok: false,
      error: 'similar_check_error',
      message: error.message || '類似問題チェックでエラーが発生しました',
      timestamp: new Date().toISOString()
    }, 500)
  }
})

// 段階学習データ生成関数（フォールバック用 - 動的生成失敗時のみ使用）
function generateLearningData(problemType) {
  console.log('⚠️ フォールバックデータを使用中 - AI動的生成が推奨されます')
  
  if (problemType === 'english_grammar') {
    return {
      analysis: '【AI学習アシスタント分析結果】\n\n📋 **検出内容**\nこの画像には中学英語の現在完了形の問題が含まれています。\n\n📝 **問題内容**\nI have ( ) in Tokyo for three years.\n空欄に入る適切な語を選びなさい。\n\n🎯 **段階的学習を開始します**\n現在完了形の使い方を一緒に学んでいきましょう！',
      
      steps: [
        {
          stepNumber: 0,
          instruction: "まず文の構造を見てみましょう。「for three years」は何を表していますか？",
          type: "choice",
          options: [
            "A) 未来の時間を表している",
            "B) 過去の一点を表している", 
            "C) 継続期間を表している",
            "D) 習慣を表している"
          ],
          correctAnswer: "C",
          explanation: "「for three years」は「3年間」という継続期間を表しています。現在完了形でよく使われる期間の表現です。",
          completed: false,
          attempts: []
        },
        {
          stepNumber: 1,
          instruction: "継続期間「for three years」があるときに使う動詞の form は何ですか？",
          type: "choice",
          options: [
            "A) 現在形 (live)",
            "B) 過去形 (lived)",
            "C) 現在完了形 (have lived)",
            "D) 未来形 (will live)"
          ],
          correctAnswer: "C",
          explanation: "継続期間を表す「for」があるときは現在完了形を使います。「have + 過去分詞」の形になります。",
          completed: false,
          attempts: []
        },
        {
          stepNumber: 2,
          instruction: "「live」の過去分詞は何ですか？",
          type: "choice",
          options: [
            "A) live",
            "B) lived", 
            "C) living",
            "D) lives"
          ],
          correctAnswer: "B",
          explanation: "「live」は規則動詞なので、過去分詞は「lived」になります。不規則動詞ではないので注意しましょう。",
          completed: false,
          attempts: []
        }
      ],
      
      confirmationProblem: {
        question: "確認問題: She has ( ) English since she was ten years old.",
        type: "choice",
        options: [
          "A) study",
          "B) studied",
          "C) studying", 
          "D) studies"
        ],
        correctAnswer: "B",
        explanation: "「since she was ten years old」があるので現在完了形を使います。have + 過去分詞で「studied」が正解です。",
        attempts: []
      },
      
      similarProblems: [
        {
          problemNumber: 1,
          question: "類似問題1: They have ( ) here for five years.",
          type: "choice",
          options: [
            "A) live",
            "B) lived",
            "C) living",
            "D) lives"
          ],
          correctAnswer: "B",
          explanation: "「for five years」は継続期間を表すので、現在完了形「have lived」が正解です。",
          difficulty: "basic",
          attempts: []
        },
        {
          problemNumber: 2,
          question: "類似問題2: 現在完了形を使って「彼は3年間ここで働いています」を英語にしなさい。\n\n※「He has」で始めて、「worked」を使ってください。",
          type: "input",
          correctAnswers: ["He has worked here for three years.", "He has worked here for 3 years."],
          explanation: "現在完了形は「主語 + have/has + 過去分詞」の形です。期間を表すときは「for + 期間」を使います。",
          difficulty: "intermediate",
          attempts: []
        },
        {
          problemNumber: 3,
          question: "類似問題3: I have ( ) this book ( ) last week.",
          type: "choice",
          options: [
            "A) read / since",
            "B) read / for",
            "C) been reading / since",
            "D) been reading / for"
          ],
          correctAnswer: "C",
          explanation: "「last week」は過去の一点なので「since」を使います。また、継続的な動作なので現在完了進行形「have been reading」が適切です。",
          difficulty: "advanced",
          attempts: []
        }
      ]
    }
  } else {
    // 数学問題（デフォルト）
    return {
      analysis: '【AI学習アシスタント分析結果】\n\n📋 **検出内容**\nこの画像には数学の二次方程式の問題が含まれています。\n\n📝 **問題内容**\nx² + 2x - 3 = 0 を解きなさい\n\n🎯 **段階的学習を開始します**\n一緒に解いていきましょう！各ステップで答えを考えてから次に進みます。',
      
      steps: [
        {
          stepNumber: 0,
          instruction: "まずは因数分解を試してみましょう。x² + 2x - 3 を因数分解するとどうなりますか？",
          type: "choice",
          options: [
            "A) (x + 1)(x + 3) = 0",
            "B) (x + 3)(x - 1) = 0", 
            "C) (x - 3)(x + 1) = 0",
            "D) (x + 2)(x - 1) = 0"
          ],
          correctAnswer: "B",
          explanation: "x² + 2x - 3 は、-3と1の積が-3、和が2になるので (x + 3)(x - 1) = 0 と因数分解できます。",
          completed: false,
          attempts: []
        },
        {
          stepNumber: 1,
          instruction: "(x + 3)(x - 1) = 0 になりましたね。この式からxの値はどうなりますか？",
          type: "choice",
          options: [
            "A) x = 3, x = 1",
            "B) x = -3, x = 1",
            "C) x = 3, x = -1", 
            "D) x = -3, x = -1"
          ],
          correctAnswer: "B",
          explanation: "(x + 3)(x - 1) = 0 なので、x + 3 = 0 または x - 1 = 0 となります。よって x = -3 または x = 1 です。",
          completed: false,
          attempts: []
        },
        {
          stepNumber: 2,
          instruction: "素晴らしい！x = -3, x = 1 が正解です。では検算をしてみましょう。x = -3 を元の式に代入すると？",
          type: "choice",
          options: [
            "A) (-3)² + 2(-3) - 3 = 9 - 6 - 3 = 0",
            "B) (-3)² + 2(-3) - 3 = 9 + 6 - 3 = 12",
            "C) (-3)² + 2(-3) - 3 = -9 - 6 - 3 = -18",
            "D) (-3)² + 2(-3) - 3 = 9 - 6 + 3 = 6"
          ],
          correctAnswer: "A",
          explanation: "x = -3: (-3)² + 2(-3) - 3 = 9 - 6 - 3 = 0 ✓\\nx = 1: 1² + 2(1) - 3 = 1 + 2 - 3 = 0 ✓\\n両方とも0になるので正解です！",
          completed: false,
          attempts: []
        }
      ],
      
      confirmationProblem: {
        question: "確認問題: x² - 4x - 5 = 0 を解くと答えはどうなりますか？",
        type: "choice",
        options: [
          "A) x = 5, x = -1",
          "B) x = -5, x = 1", 
          "C) x = 4, x = -5",
          "D) x = -4, x = 5"
        ],
        correctAnswer: "A",
        explanation: "因数分解すると (x - 5)(x + 1) = 0 となるので、x = 5, x = -1 が正解です。",
        attempts: []
      },
      
      similarProblems: [
        {
          problemNumber: 1,
          question: "類似問題1: x² - 2x - 8 = 0 を解きなさい。",
          type: "choice",
          options: [
            "A) x = 4, x = -2",
            "B) x = -4, x = 2",
            "C) x = 8, x = -1",
            "D) x = -8, x = 1"
          ],
          correctAnswer: "A",
          explanation: "因数分解すると (x - 4)(x + 2) = 0 となるので、x = 4, x = -2 が正解です。",
          difficulty: "basic",
          attempts: []
        },
        {
          problemNumber: 2,
          question: "類似問題2: x² + x - 6 = 0 を解きなさい。\n\n※答えは「x=□,△」の形式で答えよ。（小さい値から順に）",
          type: "input",
          correctAnswers: ["x=-3,2", "x = -3, 2", "x=-3, 2", "x= -3,2"],
          explanation: "因数分解すると (x + 3)(x - 2) = 0 となるので、x = -3, x = 2 が正解です。小さい値から順に書きます。",
          difficulty: "intermediate",
          attempts: []
        },
        {
          problemNumber: 3,
          question: "類似問題3: 二次方程式 2x² - 8x + 6 = 0 を解きなさい。\n\n※答えは「x=□,△」の形式で答えよ。（小さい値から順に）",
          type: "input",
          correctAnswers: ["x=1,3", "x = 1, 3", "x=1, 3", "x= 1,3"],
          explanation: "まず2で割って x² - 4x + 3 = 0 にします。因数分解すると (x - 1)(x - 3) = 0 となるので、x = 1, x = 3 が正解です。",
          difficulty: "intermediate",
          attempts: []
        }
      ]
    }
  }
}

// ルートパスハンドラー
app.get('/', (c) => {
  return c.redirect('/study-partner', 302)
})

// Study Partner SPA - 完全復元版
app.get('/study-partner', (c) => {
  console.log('📱 Study Partner SPA requested')
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>KOBEYA Study Partner</title>
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        
        <!-- Cropper.js CSS -->
        <link rel="stylesheet" href="https://unpkg.com/cropperjs@1.6.1/dist/cropper.min.css">
        
        <style>
        /* Study Partner Styles */
        body { 
          font-family: 'Noto Sans JP', sans-serif; 
          margin: 0;
          padding: 0;
        }
        
        .container { 
          max-width: 680px; 
          margin: 0 auto; 
          padding: 1rem;
        }
        
        input, button { 
          padding: 0.75rem; 
          margin: 0.5rem 0; 
          width: 100%; 
          border-radius: 0.5rem;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        
        button {
          background: #374151;
          color: white;
          cursor: pointer;
          font-weight: 500;
        }
        
        button:hover {
          background: #4b5563;
        }
        
        button.secondary {
          background: #6b7280;
        }
        
        button.contrast {
          background: #7c3aed;
        }
        
        button.success {
          background: #059669;
        }
        
        button.ai-question {
          background: #7c3aed;
          position: fixed;
          bottom: 20px;
          right: 20px;
          border-radius: 50px;
          padding: 1rem 1.5rem;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          z-index: 1000;
          font-weight: 600;
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        button.ai-question:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
        }
        
        @media (max-width: 768px) {
          button.ai-question {
            bottom: 15px;
            right: 15px;
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
          }
        }
        
        pre { 
          background: #f5f5f5; 
          padding: 1rem; 
          border-radius: 4px; 
          overflow: auto;
          font-size: 0.875rem;
        }
        
        .grid {
          display: grid;
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        /* Image preview styles */
        #imagePreviewArea {
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background: #f9fafb;
          overflow: hidden;
        }
        
        #previewImage {
          max-width: 100%;
          max-height: 350px;
          border-radius: 0.25rem;
          object-fit: contain;
        }
        
        /* Loading spinner */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-top: 2px solid #7c3aed;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Crop area styles */
        #cropArea {
          border: 1px solid #7c3aed;
          border-radius: 0.5rem;
          background: #f3f4f6;
          overflow: hidden;
        }
        
        #cropperContainer {
          max-height: 400px;
          overflow: hidden;
        }
        
        /* Cropper.js customization */
        .cropper-point {
          width: 16px !important;
          height: 16px !important;
          background-color: #7c3aed !important;
          border: 3px solid white !important;
          border-radius: 3px !important;
          box-shadow: 0 0 6px rgba(0,0,0,0.3) !important;
        }
        
        .cropper-line {
          background-color: #7c3aed !important;
          height: 2px !important;
        }
        
        .cropper-line.cropper-line-v {
          width: 2px !important;
          height: auto !important;
        }
        
        .cropper-view-box {
          outline: 2px solid #7c3aed !important;
          outline-color: rgba(124, 58, 237, 0.8) !important;
        }
        
        .cropper-crop-box {
          border: 2px solid #7c3aed !important;
        }
        
        /* Mobile optimization */
        @media (max-width: 768px) {
          .cropper-point {
            width: 20px !important;
            height: 20px !important;
            background-color: #7c3aed !important;
            border: 4px solid white !important;
            border-radius: 4px !important;
            box-shadow: 0 0 10px rgba(0,0,0,0.4) !important;
          }
          
          .cropper-line {
            background-color: #7c3aed !important;
            height: 3px !important;
          }
          
          .cropper-line.cropper-line-v {
            width: 3px !important;
            height: auto !important;
          }
          
          .cropper-crop-box {
            border: 3px solid #7c3aed !important;
          }
        }


        </style>
    </head>
    <body>
        <main class="container">
            <section style="text-align: center; margin-bottom: 1rem; padding: 2rem 1.5rem; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 1rem; color: white;">
                <h1 style="margin-bottom: 1rem; color: white;">
                    <i class="fas fa-robot" style="margin-right: 0.5rem;"></i>
                    KOBEYA Study Partner
                </h1>
                <p style="font-size: 1rem; margin-bottom: 1.5rem; opacity: 0.9;">
                    AI学習パートナーで効果的な個別学習を体験してください
                </p>
                <div style="background-color: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <p style="margin: 0; font-size: 0.875rem;">
                        <i class="fas fa-info-circle" style="margin-right: 0.5rem;"></i>
                        APP_KEY と 生徒IDを入力してログインしてください
                    </p>
                </div>
            </section>

            <section style="margin-bottom: 2.5rem;">
                <!-- 入力欄 -->
                <div class="grid" style="margin-bottom: 1rem;">
                    <div>
                        <label for="appkey">APP_KEY</label>
                        <input id="appkey" value="180418">
                    </div>
                    <div>
                        <label for="sid">学生ID</label>
                        <input id="sid" value="JS2-04">
                    </div>
                </div>

                <!-- ログインボタン -->
                <div style="margin-bottom: 1rem;">
                    <button id="btnLogin" class="contrast" style="width: 100%; margin: 0;">
                        <i class="fas fa-key" style="margin-right: 0.5rem;"></i>
                        ログイン/認証して開始
                    </button>
                </div>

                <!-- AIに質問ボタン -->
                <div style="margin-bottom: 1rem;">
                    <button id="aiQuestionMainButton" style="width: 100%; border-radius: 0.5rem; padding: 1rem; background-color: #7c3aed; color: white; font-weight: 500; border: none; cursor: pointer; min-height: 56px; font-size: 16px;">
                        <i class="fas fa-robot" style="margin-right: 0.5rem;"></i>
                        🤖 AIに質問
                    </button>
                </div>

                <!-- 写真アップロード -->
                <div style="margin-bottom: 2.5rem;">
                    <!-- カメラ撮影ボタン -->
                    <div style="margin-bottom: 1rem;">
                        <button type="button" id="cameraButton" style="width: 100%; border-radius: 0.5rem; padding: 1rem; background-color: #374151; color: white; font-weight: 500; border: none; cursor: pointer; min-height: 56px; font-size: 16px;">
                            <i class="fas fa-camera" style="margin-right: 0.5rem;"></i>
                            📷 カメラで撮影
                        </button>
                        <input id="cameraInput" type="file" accept="image/*" capture="environment" style="display: none;">
                    </div>
                    
                    <!-- ファイル選択ボタン -->
                    <div>
                        <button type="button" id="fileButton" style="width: 100%; border-radius: 0.5rem; padding: 1rem; background-color: #6b7280; color: white; font-weight: 500; border: none; cursor: pointer; min-height: 56px; font-size: 16px;">
                            <i class="fas fa-folder-open" style="margin-right: 0.5rem;"></i>
                            📁 ファイルから選択
                        </button>
                        <input id="fileInput" type="file" accept="image/*" style="display: none;">
                    </div>
                </div>

                <!-- 画像プレビューエリア -->
                <div id="imagePreviewArea" style="display: none; margin-bottom: 1rem;">
                    <div style="padding: 1rem; border-bottom: 1px solid #d1d5db; background: #f9fafb;">
                        <p style="margin: 0; font-size: 0.875rem; font-weight: 500;">
                            📸 選択された画像
                        </p>
                    </div>
                    
                    <div style="padding: 1rem; text-align: center; max-height: 400px; overflow: hidden;">
                        <img id="previewImage" style="max-width: 100%; max-height: 350px; border-radius: 0.25rem; object-fit: contain;">
                    </div>
                    
                    <!-- 画像付きメッセージ入力エリア -->
                    <div style="padding: 1rem; border-top: 1px solid #d1d5db;">
                        <div style="margin-bottom: 1rem;">
                            <label for="imageMessageInput" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #374151;">
                                💬 この画像について質問や説明を入力してください（任意）
                            </label>
                            <textarea id="imageMessageInput" placeholder="例: この問題の解き方を教えてください。特に○○の部分が分からないので詳しく説明してください。" 
                                style="width: 100%; padding: 0.75rem; border: 2px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; line-height: 1.5; min-height: 80px; resize: vertical; box-sizing: border-box; font-family: inherit;"></textarea>
                        </div>
                        
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <button id="btnStartCrop" class="secondary" style="flex: 1; min-width: 150px; margin: 0;">
                                <i class="fas fa-crop" style="margin-right: 0.5rem;"></i>
                                🔲 範囲を調整して送信
                            </button>
                            <button id="btnSendDirect" class="contrast" style="flex: 1; min-width: 150px; margin: 0;">
                                <i class="fas fa-paper-plane" style="margin-right: 0.5rem;"></i>
                                📤 この画像で送信
                            </button>
                        </div>
                    </div>
                </div>

                <!-- クロップエリア -->
                <div id="cropArea" style="display: none; margin-bottom: 1rem;">
                    <div style="padding: 1rem; border-bottom: 1px solid #7c3aed; background: #f3f4f6;">
                        <p style="margin: 0; font-size: 0.875rem; font-weight: 500;">
                            ✂️ 解析範囲を選択してください
                        </p>
                    </div>
                    
                    <div style="padding: 1rem; text-align: center;">
                        <div id="cropperContainer">
                            <img id="cropImage" style="max-width: 100%; max-height: 350px;">
                        </div>
                    </div>
                    
                    <div style="padding: 1rem; border-top: 1px solid #7c3aed;">
                        <div style="margin-bottom: 1rem;">
                            <label for="cropMessageInput" style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #374151;">
                                💬 この画像について質問や説明を入力してください（任意）
                            </label>
                            <textarea id="cropMessageInput" placeholder="例: この問題の解き方を教えてください。特に○○の部分が分からないので詳しく説明してください。" 
                                style="width: 100%; padding: 0.75rem; border: 2px solid #e9d5ff; border-radius: 0.5rem; font-size: 1rem; line-height: 1.5; min-height: 80px; resize: vertical; box-sizing: border-box; font-family: inherit;"></textarea>
                        </div>
                        
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <button id="btnCancelCrop" class="secondary" style="flex: 1; min-width: 120px; margin: 0;">
                                <i class="fas fa-times" style="margin-right: 0.5rem;"></i>
                                キャンセル
                            </button>
                            <button id="btnConfirmCrop" class="contrast" style="flex: 2; min-width: 150px; margin: 0;">
                                <i class="fas fa-check" style="margin-right: 0.5rem;"></i>
                                ✅ この範囲で送信
                            </button>
                        </div>
                    </div>
                </div>

                <!-- アップロード中インジケーター -->
                <div id="uploadingIndicator" style="display: none; text-align: center; padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem; margin-bottom: 1rem; border: 1px solid #7c3aed;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem;">
                        <div class="loading-spinner"></div>
                        <span style="font-weight: 500;">写真を解析中...</span>
                    </div>
                    <div style="font-size: 0.875rem; opacity: 0.8;">
                        大きな画像の場合、しばらく時間がかかることがあります
                    </div>
                </div>

                <!-- 解析結果表示エリア -->
                <div id="analysisResult" style="display: none; margin-bottom: 1rem; padding: 1rem; border: 1px solid #059669; border-radius: 0.5rem; background: #ecfdf5;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.75rem;">
                        <i class="fas fa-check-circle" style="color: #059669; margin-right: 0.5rem;"></i>
                        <span style="font-weight: 500;">解析完了</span>
                    </div>
                    <div id="analysisContent" style="font-size: 0.875rem; line-height: 1.6;">
                        <!-- 解析結果がここに表示されます -->
                    </div>
                </div>

                <!-- API応答の表示先 -->
                <div id="out" style="background: #f5f5f5; padding: 1rem; margin-top: 1rem; border-radius: 0.5rem; min-height: 160px; width: 100%; max-width: 100%; box-sizing: border-box; overflow-x: hidden; word-wrap: break-word; font-family: inherit;"></div>
            </section>
            
            <!-- フローティングAI質問ボタン -->
            <button id="aiQuestionButton" class="ai-question" onclick="openAIChat()" style="display: none;">
                <i class="fas fa-robot" style="margin-right: 0.5rem;"></i>
                🤔 AIに質問する
            </button>
        </main>

        <!-- Scripts -->
        <script src="https://unpkg.com/cropperjs@1.6.1/dist/cropper.min.js"></script>
        
        <script>
        console.log('📱 Study Partner JavaScript loading...');
        
        // DOM要素の取得
        let cameraInput, fileInput, previewImage, imagePreviewArea, cropArea, cropImage;
        let cropper = null;
        let authenticated = false;
        
        // 初期化
        document.addEventListener('DOMContentLoaded', function() {
          console.log('📱 Study Partner initialized');
          
          // DOM要素を取得
          cameraInput = document.getElementById('cameraInput');
          fileInput = document.getElementById('fileInput');
          previewImage = document.getElementById('previewImage');
          imagePreviewArea = document.getElementById('imagePreviewArea');
          cropArea = document.getElementById('cropArea');
          cropImage = document.getElementById('cropImage');
          
          // イベントリスナーを設定
          setupEventListeners();
        });
        
        function setupEventListeners() {
          // カメラ入力
          if (cameraInput) {
            cameraInput.addEventListener('change', handlePhotoSelect);
          }
          
          // ファイル入力
          if (fileInput) {
            fileInput.addEventListener('change', handlePhotoSelect);
          }
          
          // ログインボタン
          const btnLogin = document.getElementById('btnLogin');
          if (btnLogin) {
            btnLogin.addEventListener('click', handleLogin);
          }
          
          // メインのAIに質問ボタン
          const aiQuestionMainButton = document.getElementById('aiQuestionMainButton');
          if (aiQuestionMainButton) {
            aiQuestionMainButton.addEventListener('click', function() {
              console.log('🤖 Main AI question button clicked');
              openAIChatDirect();
            });
          }
          
          // カメラボタン
          const cameraButton = document.getElementById('cameraButton');
          if (cameraButton) {
            cameraButton.addEventListener('click', function() {
              console.log('📷 Camera button clicked');
              if (cameraInput) {
                cameraInput.click();
              }
            });
          }
          
          // ファイル選択ボタン
          const fileButton = document.getElementById('fileButton');
          if (fileButton) {
            fileButton.addEventListener('click', function() {
              console.log('📁 File button clicked');
              if (fileInput) {
                fileInput.click();
              }
            });
          }
          
          // クロップボタン
          const btnStartCrop = document.getElementById('btnStartCrop');
          if (btnStartCrop) {
            btnStartCrop.addEventListener('click', startCrop);
          }
          
          const btnConfirmCrop = document.getElementById('btnConfirmCrop');
          if (btnConfirmCrop) {
            btnConfirmCrop.addEventListener('click', confirmCrop);
          }
          
          const btnCancelCrop = document.getElementById('btnCancelCrop');
          if (btnCancelCrop) {
            btnCancelCrop.addEventListener('click', cancelCrop);
          }
          
          // 送信ボタン
          const btnSendDirect = document.getElementById('btnSendDirect');
          if (btnSendDirect) {
            btnSendDirect.addEventListener('click', sendDirectly);
          }
        }
        
        // 写真選択処理
        function handlePhotoSelect(event) {
          const file = event.target.files[0];
          if (!file) return;
          
          console.log('📸 Photo selected:', file.name, file.type);
          
          // 画像プレビュー表示
          const reader = new FileReader();
          reader.onload = function(e) {
            if (previewImage) {
              previewImage.src = e.target.result;
              showImagePreview();
              
              // 短時間待ってから自動的にクロップ画面に移行
              setTimeout(() => {
                console.log('🔲 Auto starting crop after photo selection');
                startCrop();
              }, 800); // 0.8秒後に自動移行（画像表示確認のため）
            }
          };
          reader.readAsDataURL(file);
        }
        
        // 画像プレビュー表示
        function showImagePreview() {
          if (imagePreviewArea) {
            imagePreviewArea.style.display = 'block';
            
            // 自動移行メッセージを表示
            const btnStartCrop = document.getElementById('btnStartCrop');
            const btnSendDirect = document.getElementById('btnSendDirect');
            
            if (btnStartCrop) {
              btnStartCrop.innerHTML = '<i class="fas fa-hourglass-half" style="margin-right: 0.5rem;"></i>🔲 クロップ画面に移行中...';
              btnStartCrop.disabled = true;
              btnStartCrop.style.opacity = '0.7';
            }
            
            if (btnSendDirect) {
              btnSendDirect.style.display = 'none'; // 自動移行中は非表示
            }
          }
          hideArea(cropArea);
        }
        
        // クロップ開始
        function startCrop() {
          if (!previewImage || !previewImage.src) return;
          
          console.log('✂️ Starting crop');
          
          // プレビュー画像をクロップエリアにコピー
          if (cropImage) {
            cropImage.src = previewImage.src;
          }
          
          // メッセージもコピー
          const imageMessageInput = document.getElementById('imageMessageInput');
          const cropMessageInput = document.getElementById('cropMessageInput');
          if (imageMessageInput && cropMessageInput) {
            cropMessageInput.value = imageMessageInput.value;
          }
          
          showArea(cropArea);
          hideArea(imagePreviewArea);
          
          // Cropper.js初期化
          if (window.Cropper && cropImage) {
            if (cropper) {
              cropper.destroy();
            }
            
            cropper = new Cropper(cropImage, {
              aspectRatio: NaN, // フリーサイズ
              viewMode: 1,
              dragMode: 'move',
              autoCropArea: 0.95, // ほぼ全体を初期選択（0.8 → 0.95）
              restore: false,
              guides: true,
              center: true,
              highlight: false,
              cropBoxMovable: true,
              cropBoxResizable: true,
              toggleDragModeOnDblclick: false,
              ready: function() {
                console.log('✂️ Cropper initialized with almost full area selection');
              }
            });
          }
        }
        
        // クロップ確定
        function confirmCrop() {
          console.log('✅ Confirming crop');
          
          let croppedImageData = null;
          
          if (cropper) {
            // Cropper.js を使用してクロップ
            const canvas = cropper.getCroppedCanvas({
              maxWidth: 2000,
              maxHeight: 2000,
              fillColor: '#fff',
              imageSmoothingEnabled: true,
              imageSmoothingQuality: 'high',
            });
            
            croppedImageData = canvas.toDataURL('image/jpeg', 0.8);
          } else {
            // Cropper.js が利用できない場合は元画像を使用
            croppedImageData = previewImage.src;
          }
          
          // メッセージ入力欄から値を取得
          const messageInput = document.getElementById('cropMessageInput');
          const userMessage = messageInput ? messageInput.value.trim() : '';
          
          // 画像を送信
          sendAnalysisRequest(croppedImageData, true, userMessage);
        }
        
        // クロップキャンセル
        function cancelCrop() {
          console.log('❌ Canceling crop');
          
          if (cropper) {
            cropper.destroy();
            cropper = null;
          }
          
          hideArea(cropArea);
          
          // プレビューボタンを元の状態に戻す
          const btnStartCrop = document.getElementById('btnStartCrop');
          const btnSendDirect = document.getElementById('btnSendDirect');
          
          if (btnStartCrop) {
            btnStartCrop.innerHTML = '<i class="fas fa-crop" style="margin-right: 0.5rem;"></i>🔲 この範囲で解析';
            btnStartCrop.disabled = false;
            btnStartCrop.style.opacity = '1';
          }
          
          if (btnSendDirect) {
            btnSendDirect.innerHTML = '<i class="fas fa-paper-plane" style="margin-right: 0.5rem;"></i>📤 そのまま送信';
            btnSendDirect.style.display = 'flex'; // 再表示
          }
          
          // メッセージも戻す
          const imageMessageInput = document.getElementById('imageMessageInput');
          const cropMessageInput = document.getElementById('cropMessageInput');
          if (imageMessageInput && cropMessageInput) {
            imageMessageInput.value = cropMessageInput.value;
          }
          
          showImagePreview();
        }
        
        // エリア表示/非表示ヘルパー
        function showArea(element) {
          if (element) {
            element.style.display = 'block';
          }
        }
        
        function hideArea(element) {
          if (element) {
            element.style.display = 'none';
          }
        }
        
        // 直接送信
        function sendDirectly() {
          console.log('📤 Sending directly');
          
          if (previewImage && previewImage.src) {
            // メッセージ入力欄から値を取得
            const messageInput = document.getElementById('imageMessageInput');
            const userMessage = messageInput ? messageInput.value.trim() : '';
            
            sendAnalysisRequest(previewImage.src, false, userMessage);
          }
        }
        
        // ログイン処理
        async function handleLogin() {
          console.log('🔑 Login attempt started');
          
          try {
            const appkey = document.getElementById('appkey')?.value || '180418';
            const sid = document.getElementById('sid')?.value || 'JS2-04';
            
            console.log('🔍 Credentials:', { appkey, sid });
            
            // Health endpoint を呼び出してログイン確認
            const response = await fetch('/api/health', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
              }
            });
            
            console.log('📡 Health check response:', response.status, response.statusText);
            
            if (response.ok) {
              const data = await response.json();
              console.log('📋 Health check data:', data);
              
              if (data.ok && data.status === 'OK') {
                authenticated = true;
                alert('✅ ログイン成功!\\n' + 
                      'Mode: ' + data.mode + '\\n' + 
                      'APP_KEY: ' + appkey + '\\n' + 
                      'Student ID: ' + sid);
              } else {
                authenticated = false;
                alert('❌ ログイン失敗: サーバー応答が無効です');
              }
            } else {
              authenticated = false;
              alert('❌ ログイン失敗: HTTP ' + response.status);
            }
          } catch (error) {
            console.error('❌ Login error:', error);
            authenticated = false;
            alert('❌ ログインエラー: ' + error.message);
          }
        }
        
        // 解析リクエスト送信（段階学習システム対応版）
        async function sendAnalysisRequest(imageData, cropped, userMessage = '') {
          console.log('📤 Sending analysis request, cropped:', cropped, 'message:', userMessage);
          
          if (!authenticated) {
            alert('❌ ログインが必要です。最初にログインボタンをクリックしてください。');
            return;
          }
          
          showUploadingIndicator(true);
          
          try {
            // DataURLから実際のファイルデータを取得
            const response = await fetch(imageData);
            const blob = await response.blob();
            
            // FormDataを作成
            const formData = new FormData();
            const appkey = document.getElementById('appkey')?.value || '180418';
            const sid = document.getElementById('sid')?.value || 'JS2-04';
            
            formData.append('image', blob, 'image.jpg');
            formData.append('appkey', appkey);
            formData.append('sid', sid);
            if (userMessage) {
              formData.append('message', userMessage);
            }
            
            console.log('📤 Sending to /api/analyze-and-learn with FormData');
            
            // 段階学習APIエンドポイントに送信
            const apiResponse = await fetch('/api/analyze-and-learn', {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            });
            
            console.log('📡 API Response:', apiResponse.status, apiResponse.statusText);
            
            if (!apiResponse.ok) {
              throw new Error('HTTP ' + apiResponse.status + ': ' + apiResponse.statusText);
            }
            
            const result = await apiResponse.json();
            console.log('📋 Analysis result:', result);
            
            if (result.ok) {
              // 段階学習システムを開始
              startLearningSystem(result);
            } else {
              throw new Error(result.message || 'API解析でエラーが発生しました');
            }
            
            showUploadingIndicator(false);
            
          } catch (error) {
            console.error('❌ Analysis error:', error);
            alert('❌ 解析エラー: ' + error.message);
            showUploadingIndicator(false);
          }
        }
        
        // 解析結果表示（生徒向け簡潔表示）
        function displayAnalysisResult(result) {
          const analysisResult = document.getElementById('analysisResult');
          const analysisContent = document.getElementById('analysisContent');
          
          if (analysisContent) {
            // 生徒向けの簡潔で励ましのメッセージのみ表示
            const studentMessage = 
              '<div style="font-size: 0.9rem; color: #374151;">' +
                '<strong>📋 問題を分析しました！</strong><br>' +
                (result.subject || '学習') + 'の問題ですね。<br>' +
                '段階的に一緒に解いていきましょう！' +
              '</div>';
            analysisContent.innerHTML = studentMessage;
            
            if (analysisResult) {
              analysisResult.style.display = 'block';
            }
          }
          
          // 詳細分析は内部ログのみ（生徒には非表示）
          if (result.analysis) {
            console.log('🔍 詳細分析結果（内部用）:', result.analysis);
          }
        }
        
        // アップロード中インジケーター
        function showUploadingIndicator(show) {
          const indicator = document.getElementById('uploadingIndicator');
          if (indicator) {
            indicator.style.display = show ? 'block' : 'none';
          }
        }
        
        // === 段階学習システム ===
        
        let currentSession = null;
        
        // 段階学習システム開始
        function startLearningSystem(result) {
          console.log('📚 Starting learning system with session:', result.sessionId);
          
          currentSession = result;
          
          // 解析結果を表示
          displayAnalysisResult(result);
          
          // 最初のステップを表示
          displayLearningStep(result);
          
          // AI質問ボタンを表示
          showAIQuestionButton();
        }
        
        // 段階学習ステップ表示
        function displayLearningStep(result) {
          console.log('📚 Displaying learning step:', result.currentStep.stepNumber);
          
          const out = document.getElementById('out');
          if (!out) return;
          
          const step = result.currentStep;
          
          let stepHtml = '<div style="padding: 1.5rem; background: linear-gradient(135deg, #f0f9ff, #ffffff); border: 2px solid #0369a1; border-radius: 0.75rem; margin-bottom: 1.5rem;">';
          stepHtml += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
          stepHtml += '<div style="background: #0369a1; color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 0.75rem;">' + (step.stepNumber + 1) + '</div>';
          stepHtml += '<h3 style="margin: 0; color: #0369a1;">📚 Step ' + (step.stepNumber + 1) + ' / ' + result.totalSteps + '</h3>';
          stepHtml += '</div>';
          
          stepHtml += '<p style="margin: 0 0 1.5rem 0; line-height: 1.6; font-size: 1rem;">' + step.instruction + '</p>';
          
          if (step.type === 'choice') {
            stepHtml += '<div style="margin-bottom: 1.5rem;">';
            for (let i = 0; i < step.options.length; i++) {
              stepHtml += '<label style="display: block; margin-bottom: 0.75rem; padding: 0.75rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s; line-height: 1.5; word-wrap: break-word;">';
              stepHtml += '<input type="radio" name="stepChoice" value="' + step.options[i].charAt(0) + '" style="margin-right: 0.5rem; vertical-align: top;">';
              stepHtml += '<span style="display: inline; font-weight: 500;">' + step.options[i] + '</span>';
              stepHtml += '</label>';
              stepHtml += '</label>';
            }
            stepHtml += '</div>';
            
            stepHtml += '<button onclick="submitStepAnswer()" ';
            stepHtml += 'style="background: #0369a1; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500; font-size: 1rem;">';
            stepHtml += '📝 回答する</button>';
          }
          
          stepHtml += '</div>';
          
          out.innerHTML = stepHtml;
        }
        
        // ステップ回答送信
        async function submitStepAnswer() {
          const selectedOption = document.querySelector('input[name="stepChoice"]:checked');
          if (!selectedOption) {
            alert('❌ 選択肢を選んでください');
            return;
          }
          
          const answer = selectedOption.value;
          const currentStep = currentSession.currentStep;
          
          console.log('📝 Step answer submitted:', answer, 'stepNumber:', currentStep.stepNumber);
          
          try {
            // ステップ回答チェックAPIを呼び出し
            const response = await fetch('/api/step/check', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                sessionId: currentSession.sessionId,
                stepNumber: currentStep.stepNumber,
                answer: answer
              })
            });
            
            console.log('📡 Step check response:', response.status);
            
            if (!response.ok) {
              throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            
            const result = await response.json();
            console.log('📋 Step check result:', result);
            
            if (result.ok) {
              // 回答結果に応じて次のアクションを決定
              if (result.isCorrect) {
                displayStepResult(true, result.feedback, answer);
                
                // 次のアクションに応じて処理を分岐
                if (result.nextAction === 'next_step') {
                  // 次のステップがある場合
                  setTimeout(() => {
                    currentSession.currentStep = result.nextStep;
                    displayLearningStep(currentSession);
                  }, 3000);
                } else if (result.nextAction === 'confirmation') {
                  // 確認問題に進む場合
                  setTimeout(() => {
                    currentSession.confirmationProblem = result.confirmationProblem;
                    startConfirmationProblem();
                  }, 3000);
                }
              } else {
                // 不正解の場合
                displayStepResult(false, result.feedback, answer);
              }
            } else {
              throw new Error(result.message || 'ステップチェックでエラーが発生しました');
            }
            
          } catch (error) {
            console.error('❌ Step check error:', error);
            alert('❌ ステップチェックエラー: ' + error.message);
          }
        }
        
        // ステップ結果表示
        function displayStepResult(isCorrect, explanation, userAnswer) {
          const out = document.getElementById('out');
          if (!out) return;
          
          let resultHtml = '<div style="padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem; border: 2px solid ';
          
          if (isCorrect) {
            resultHtml += '#16a34a; background: linear-gradient(135deg, #dcfce7, #ffffff);">';
            resultHtml += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            resultHtml += '<div style="background: #16a34a; color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">✓</div>';
            resultHtml += '<h4 style="margin: 0; color: #16a34a; font-size: 1.25rem;">🎉 正解です！よくできました！</h4>';
            resultHtml += '</div>';
          } else {
            resultHtml += '#dc2626; background: linear-gradient(135deg, #fee2e2, #ffffff);">';
            resultHtml += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            resultHtml += '<div style="background: #dc2626; color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">✗</div>';
            resultHtml += '<h4 style="margin: 0; color: #dc2626; font-size: 1.25rem;">📖 もう一度考えてみましょう</h4>';
            resultHtml += '</div>';
            resultHtml += '<p style="margin: 0 0 1rem 0; color: #dc2626; font-weight: 500;">あなたの答え: ' + userAnswer + '</p>';
            resultHtml += '<p style="margin: 0 0 1rem 0; color: #dc2626; font-weight: 500;">正解: ' + currentSession.currentStep.correctAnswer + '</p>';
          }
          
          resultHtml += '<div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">';
          resultHtml += '<p style="margin: 0; line-height: 1.6;"><strong>💡 解説:</strong><br>' + explanation + '</p>';
          resultHtml += '</div>';
          
          if (isCorrect) {
            // 正解時は既にsubmitStepAnswerでAPIからの指示に従って自動処理されている
            resultHtml += '<div style="text-align: center;">';
            resultHtml += '<div style="display: inline-flex; align-items: center; gap: 0.5rem; color: #16a34a; font-weight: 500;">';
            resultHtml += '<div class="loading-spinner" style="width: 16px; height: 16px;"></div>';
            resultHtml += '<span>次のステップを準備しています...</span>';
            resultHtml += '</div>';
            resultHtml += '</div>';
          } else {
            resultHtml += '<div style="text-align: center;">';
            resultHtml += '<button onclick="retryCurrentStep()" style="background: #dc2626; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">🔄 もう一度挑戦</button>';
            resultHtml += '</div>';
          }
          
          resultHtml += '</div>';
          out.innerHTML = resultHtml;
        }
        
        // 次のステップに進む（APIレスポンスから自動的に処理される）
        function goToNextStep() {
          console.log('📚 Moving to next step - handled by API response');
          // この関数はAPIレスポンスで自動的に処理されるため、
          // 特別な処理は不要（既にsubmitStepAnswerで処理済み）
        }
        
        // 現在のステップを再試行
        function retryCurrentStep() {
          console.log('🔄 Retrying current step');
          displayLearningStep(currentSession);
        }
        
        // 確認問題開始
        function startConfirmationProblem() {
          console.log('🎯 Starting confirmation problem');
          displayConfirmationProblem();
        }
        
        // 確認問題表示
        function displayConfirmationProblem() {
          const out = document.getElementById('out');
          if (!out) return;
          
          const problem = currentSession.confirmationProblem;
          
          let html = '<div style="padding: 1.5rem; background: linear-gradient(135deg, #fef3c7, #ffffff); border: 2px solid #d97706; border-radius: 0.75rem; margin-bottom: 1.5rem;">';
          html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
          html += '<div style="background: #d97706; color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 0.75rem;">?</div>';
          html += '<h3 style="margin: 0; color: #d97706; font-size: 1.25rem;">🎯 確認問題</h3>';
          html += '</div>';
          
          html += '<p style="margin: 0 0 1.5rem 0; line-height: 1.6; font-size: 1rem;">' + problem.question + '</p>';
          
          if (problem.type === 'choice') {
            html += '<div style="margin-bottom: 1.5rem;">';
            for (let i = 0; i < problem.options.length; i++) {
              html += '<label style="display: block; margin-bottom: 0.75rem; padding: 0.75rem; background: #fefce8; border: 2px solid #fde68a; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s; line-height: 1.5; word-wrap: break-word;">';
              html += '<input type="radio" name="confirmChoice" value="' + problem.options[i].charAt(0) + '" style="margin-right: 0.5rem; vertical-align: top;">';
              html += '<span style="display: inline; font-weight: 500;">' + problem.options[i] + '</span>';
              html += '</label>';
              html += '</label>';
            }
            html += '</div>';
            
            html += '<button onclick="submitConfirmationAnswer()" ';
            html += 'style="background: #d97706; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500; font-size: 1rem;">';
            html += '🎯 確認問題を解く</button>';
          }
          
          html += '</div>';
          out.innerHTML = html;
        }
        
        // 確認問題回答送信
        async function submitConfirmationAnswer() {
          const selectedOption = document.querySelector('input[name="confirmChoice"]:checked');
          if (!selectedOption) {
            alert('❌ 選択肢を選んでください');
            return;
          }
          
          const answer = selectedOption.value;
          
          console.log('🎯 Confirmation answer submitted:', answer);
          
          try {
            // 確認問題回答チェックAPIを呼び出し
            const response = await fetch('/api/confirmation/check', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                sessionId: currentSession.sessionId,
                answer: answer
              })
            });
            
            console.log('📡 Confirmation check response:', response.status);
            
            if (!response.ok) {
              throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            
            const result = await response.json();
            console.log('📋 Confirmation check result:', result);
            
            if (result.ok) {
              displayConfirmationResult(result.isCorrect, result.feedback, answer, result.nextAction);
            } else {
              throw new Error(result.message || '確認問題チェックでエラーが発生しました');
            }
            
          } catch (error) {
            console.error('❌ Confirmation check error:', error);
            alert('❌ 確認問題チェックエラー: ' + error.message);
          }
        }
        
        // 確認問題結果表示
        function displayConfirmationResult(isCorrect, explanation, userAnswer, nextAction) {
          const out = document.getElementById('out');
          if (!out) return;
          
          let html = '<div style="padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem; border: 2px solid ';
          
          if (isCorrect) {
            html += '#16a34a; background: linear-gradient(135deg, #dcfce7, #ffffff);">';
            html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            html += '<div style="background: #16a34a; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem; font-size: 1.25rem;">🎉</div>';
            html += '<h4 style="margin: 0; color: #16a34a; font-size: 1.25rem;">🏆 確認問題正解！素晴らしいです！</h4>';
            html += '</div>';
          } else {
            html += '#dc2626; background: linear-gradient(135deg, #fee2e2, #ffffff);">';
            html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            html += '<div style="background: #dc2626; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">❌</div>';
            html += '<h4 style="margin: 0; color: #dc2626; font-size: 1.25rem;">📚 確認問題：もう少し復習しましょう</h4>';
            html += '</div>';
            html += '<p style="margin: 0 0 1rem 0; color: #dc2626; font-weight: 500;">あなたの答え: ' + userAnswer + '</p>';
            html += '<p style="margin: 0 0 1rem 0; color: #dc2626; font-weight: 500;">正解: ' + currentSession.confirmationProblem.correctAnswer + '</p>';
          }
          
          html += '<div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">';
          html += '<p style="margin: 0; line-height: 1.6;"><strong>💡 解説:</strong><br>' + explanation + '</p>';
          html += '</div>';
          
          if (isCorrect) {
            if (nextAction === 'similar_problems') {
              // 類似問題フェーズに移行
              html += '<div style="text-align: center;">';
              html += '<p style="margin-bottom: 1rem; color: #16a34a;">🚀 次は類似問題にチャレンジしましょう！</p>';
              html += '<button onclick="startSimilarProblems()" style="background: #7c3aed; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">📚 類似問題を始める</button>';
              html += '</div>';
            } else {
              // 従来の完了メッセージ
              html += '<div style="text-align: center;">';
              html += '<p style="margin-bottom: 1rem; color: #16a34a;">🎊 学習完了！お疲れさまでした！</p>';
              html += '<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">';
              html += '<button onclick="location.reload()" style="background: #16a34a; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">🔄 新しい問題に挑戦</button>';
              html += '</div>';
            }
          } else {
            html += '<div style="text-align: center;">';
            html += '<button onclick="displayConfirmationProblem()" style="background: #dc2626; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">🔄 もう一度挑戦</button>';
            html += '</div>';
          }
          
          html += '</div>';
          out.innerHTML = html;
        }
        
        // === 類似問題システム ===
        
        let currentSimilarProblem = 0;
        
        // 類似問題開始
        async function startSimilarProblems() {
          console.log('🔥 Starting similar problems');
          console.log('📋 Current session:', currentSession);
          
          if (!currentSession) {
            console.error('❌ No current session found');
            alert('❌ セッションが見つかりません。最初からやり直してください。');
            return;
          }
          
          // デバッグ用：サーバーからセッションデータを確認
          try {
            const debugResponse = await fetch('/api/debug/session/' + currentSession.sessionId);
            const debugData = await debugResponse.json();
            console.log('🔍 Server session debug:', debugData);
          } catch (error) {
            console.error('❌ Debug fetch error:', error);
          }
          
          // セッションデータの構造をチェック
          console.log('📋 Session keys:', Object.keys(currentSession));
          console.log('📋 Has similarProblems:', !!currentSession.similarProblems);
          console.log('📋 similarProblems type:', typeof currentSession.similarProblems);
          console.log('📋 similarProblems value:', currentSession.similarProblems);
          
          if (!currentSession.analysis) {
            console.error('❌ No analysis data found');
            alert('❌ 学習データが見つかりません。最初からやり直してください。');
            return;
          }
          
          if (!currentSession.similarProblems) {
            console.error('❌ No similar problems found');
            console.log('📋 Session structure:', currentSession);
            alert('❌ 類似問題データが見つかりません。最初からやり直してください。');
            return;
          }
          
          console.log('📚 Similar problems found:', currentSession.similarProblems.length);
          currentSimilarProblem = 0;
          displaySimilarProblem(1);
        }
        
        // 類似問題表示
        function displaySimilarProblem(problemNumber) {
          const out = document.getElementById('out');
          if (!out) return;
          
          const problems = currentSession.similarProblems;
          const problem = problems[problemNumber - 1];
          
          if (!problem) {
            console.error('❌ Similar problem not found:', problemNumber);
            return;
          }
          
          currentSimilarProblem = problemNumber;
          
          let html = '<div style="padding: 1.5rem; background: linear-gradient(135deg, #f3e8ff, #ffffff); border: 2px solid #7c3aed; border-radius: 0.75rem; margin-bottom: 1.5rem;">';
          html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
          html += '<div style="background: #7c3aed; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 0.75rem;">' + problemNumber + '</div>';
          html += '<h3 style="margin: 0; color: #7c3aed; font-size: 1.25rem;">📚 類似問題 ' + problemNumber + '/' + problems.length + '</h3>';
          html += '</div>';
          
          html += '<p style="margin: 0 0 1.5rem 0; line-height: 1.6; font-size: 1rem; white-space: pre-wrap;">' + problem.question + '</p>';
          
          if (problem.type === 'choice') {
            // 選択肢問題
            html += '<div style="margin-bottom: 1.5rem;">';
            for (let i = 0; i < problem.options.length; i++) {
              html += '<label style="display: block; margin-bottom: 0.75rem; padding: 0.75rem; background: #faf5ff; border: 2px solid #e9d5ff; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s; line-height: 1.5; word-wrap: break-word;">';
              html += '<input type="radio" name="similarChoice" value="' + problem.options[i].charAt(0) + '" style="margin-right: 0.5rem; vertical-align: top;">';
              html += '<span style="display: inline; font-weight: 500;">' + problem.options[i] + '</span>';
              html += '</label>';
            }
            html += '</div>';
            
            html += '<button onclick="submitSimilarAnswer()" ';
            html += 'style="background: #7c3aed; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500; font-size: 1rem;">';
            html += '📝 答えを送信</button>';
            
          } else if (problem.type === 'input') {
            // 記述問題
            html += '<div style="margin-bottom: 1.5rem;">';
            html += '<textarea id="similarInput" placeholder="ここに答えを入力してください..." ';
            html += 'style="width: 100%; padding: 1rem; border: 2px solid #e9d5ff; border-radius: 0.5rem; font-size: 1rem; line-height: 1.5; min-height: 80px; resize: vertical; box-sizing: border-box;"></textarea>';
            html += '</div>';
            
            html += '<button onclick="submitSimilarAnswer()" ';
            html += 'style="background: #7c3aed; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500; font-size: 1rem;">';
            html += '📝 答えを送信</button>';
          }
          
          html += '</div>';
          out.innerHTML = html;
        }
        
        // 類似問題回答送信
        async function submitSimilarAnswer() {
          const problems = currentSession.similarProblems;
          const problem = problems[currentSimilarProblem - 1];
          let answer = '';
          
          if (problem.type === 'choice') {
            const selectedOption = document.querySelector('input[name="similarChoice"]:checked');
            if (!selectedOption) {
              alert('❌ 選択肢を選んでください');
              return;
            }
            answer = selectedOption.value;
          } else if (problem.type === 'input') {
            const inputElement = document.getElementById('similarInput');
            if (!inputElement || !inputElement.value.trim()) {
              alert('❌ 答えを入力してください');
              return;
            }
            answer = inputElement.value.trim();
          }
          
          console.log('📚 Similar answer submitted:', { problemNumber: currentSimilarProblem, answer });
          
          try {
            // 類似問題回答チェックAPIを呼び出し
            const response = await fetch('/api/similar/check', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                sessionId: currentSession.sessionId,
                problemNumber: currentSimilarProblem,
                answer: answer
              })
            });
            
            console.log('📡 Similar check response:', response.status);
            
            if (!response.ok) {
              throw new Error('HTTP ' + response.status + ': ' + response.statusText);
            }
            
            const result = await response.json();
            console.log('📋 Similar check result:', result);
            
            if (result.ok) {
              displaySimilarResult(result.isCorrect, result.feedback, answer, result.nextAction, result.completedProblems, result.totalProblems);
            } else {
              throw new Error(result.message || '類似問題チェックでエラーが発生しました');
            }
            
          } catch (error) {
            console.error('❌ Similar check error:', error);
            alert('❌ 類似問題チェックエラー: ' + error.message);
          }
        }
        
        // 類似問題結果表示
        function displaySimilarResult(isCorrect, explanation, userAnswer, nextAction, completedProblems, totalProblems) {
          const out = document.getElementById('out');
          if (!out) return;
          
          let html = '<div style="padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem; border: 2px solid ';
          
          if (isCorrect) {
            html += '#16a34a; background: linear-gradient(135deg, #dcfce7, #ffffff);">';
            html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            html += '<div style="background: #16a34a; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem; font-size: 1.25rem;">✅</div>';
            html += '<h4 style="margin: 0; color: #16a34a; font-size: 1.25rem;">🎉 類似問題' + currentSimilarProblem + '正解！</h4>';
            html += '</div>';
          } else {
            html += '#dc2626; background: linear-gradient(135deg, #fee2e2, #ffffff);">';
            html += '<div style="display: flex; align-items: center; margin-bottom: 1rem;">';
            html += '<div style="background: #dc2626; color: white; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">❌</div>';
            html += '<h4 style="margin: 0; color: #dc2626; font-size: 1.25rem;">📚 類似問題' + currentSimilarProblem + '：もう一度考えてみましょう</h4>';
            html += '</div>';
            html += '<p style="margin: 0 0 1rem 0; color: #dc2626; font-weight: 500;">あなたの答え: ' + userAnswer + '</p>';
          }
          
          html += '<div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">';
          html += '<p style="margin: 0; line-height: 1.6; white-space: pre-wrap;"><strong>💡 解説:</strong><br>' + explanation + '</p>';
          html += '</div>';
          
          // 進捗表示
          html += '<div style="background: rgba(124,58,237,0.1); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">';
          html += '<p style="margin: 0; font-weight: 500; color: #7c3aed;">📊 進捗: ' + completedProblems + '/' + totalProblems + '問正解</p>';
          html += '</div>';
          
          if (isCorrect) {
            if (nextAction === 'next_problem') {
              // 次の類似問題に進む
              html += '<div style="text-align: center;">';
              html += '<button onclick="displaySimilarProblem(' + (currentSimilarProblem + 1) + ')" style="background: #7c3aed; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">➡️ 次の類似問題へ</button>';
              html += '</div>';
            } else if (nextAction === 'all_completed') {
              // すべての類似問題完了
              html += '<div style="text-align: center;">';
              html += '<p style="margin-bottom: 1rem; color: #16a34a; font-weight: 600; font-size: 1.1rem;">🎊 すべての類似問題が完了しました！お疲れ様でした！</p>';
              html += '<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">';
              html += '<button onclick="location.reload()" style="background: #16a34a; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">🔄 新しい問題に挑戦</button>';
              html += '</div>';
              html += '</div>';
            }
          } else {
            html += '<div style="text-align: center;">';
            html += '<button onclick="displaySimilarProblem(' + currentSimilarProblem + ')" style="background: #dc2626; color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500;">🔄 もう一度挑戦</button>';
            html += '</div>';
          }
          
          html += '</div>';
          out.innerHTML = html;
        }

        // === AI質問システム ===
        
        // AI質問ボタンの表示制御
        function showAIQuestionButton() {
          const aiButton = document.getElementById('aiQuestionButton');
          if (aiButton && currentSession) {
            aiButton.style.display = 'block';
          }
        }
        
        function hideAIQuestionButton() {
          const aiButton = document.getElementById('aiQuestionButton');
          if (aiButton) {
            aiButton.style.display = 'none';
          }
        }
        
        // AI質問ウインドウを開く
        function openAIChat() {
          if (!currentSession) {
            alert('❌ 学習セッションが見つかりません');
            return;
          }
          
          console.log('🤖 Opening AI chat window for session:', currentSession.sessionId);
          
          // 新しいウインドウでAIチャットを開く
          const windowFeatures = 'width=600,height=700,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no';
          const aiWindow = window.open('/ai-chat/' + currentSession.sessionId, 'ai-chat', windowFeatures);
          
          if (!aiWindow) {
            alert('❌ ポップアップがブロックされました。ポップアップを許可してください。');
          } else {
            // ウインドウにフォーカスを移す
            aiWindow.focus();
          }
        }
        
        // 学習セッション無しでAIチャットを開く（メインボタン用）
        function openAIChatDirect() {
          console.log('🤖 Opening direct AI chat window');
          
          // 汎用的なセッションIDを生成
          const directSessionId = 'direct_' + Date.now() + '_' + Math.random().toString(36).substring(7);
          
          // 新しいウインドウでAIチャットを開く
          const windowFeatures = 'width=600,height=700,scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no';
          const aiWindow = window.open('/ai-chat/' + directSessionId, 'ai-chat', windowFeatures);
          
          if (!aiWindow) {
            alert('❌ ポップアップがブロックされました。ポップアップを許可してください。');
          } else {
            // ウインドウにフォーカスを移す
            aiWindow.focus();
          }
        }

        console.log('✅ Study Partner JavaScript loaded successfully');
        </script>
    </body>
    </html>
  `)
})

// Favicon ハンドラー
app.get('/favicon.ico', (c) => {
  return c.text('', 204)  // No Content
})

// 404ハンドラー
app.notFound((c) => {
  return c.text('404 Not Found', 404)
})

export default app