import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/ai-coaching-course.css'

export const aiCoachingCoursePage = () => (
  <>
    <head>
      <title>AI学習コーチングコース｜KOBEYA（コベヤ）- AI×個別指導</title>
      <meta name="description" content="KOBEYA（コベヤ）のAI学習コーチングコース。AIと日本人講師のハイブリッド指導。個別最適化された学習プラン、Study Partnerで効率的に学習。バンコクのプログラミング教室。" />
      <meta name="keywords" content="AI学習,コーチング,個別指導,コベヤ,KOBEYA,Study Partner,バンコク,プログラミング教室,最適化学習" />
      <meta property="og:title" content="AI学習コーチング｜KOBEYA" />
      <meta property="og:description" content="AIと講師のハイブリッド個別指導" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/ai-coaching-course" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/ai-coaching-course" />
    </head>
    
    
    

    <Header />

    <main>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-icons">
              <div class="hero-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-brain"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
            </div>
            <h1 class="hero-title">AIコーチング・ラボ</h1>
            <p class="hero-subtitle">
              「わかる」から「できる」へ。
            </p>
            <p class="hero-description">
              AIが一人ひとりの学びを導く新しい学習空間。<br/>
              最先端のAI学習支援システムで、生徒の "つまずき" を見つけ、解きほぐし、定着させます。
            </p>
            <a href="#overview" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section class="overview-section" id="overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-text">
              <h2>人とAIが協働する<br/>リアルな学び場</h2>
              <p>
                KOBEYAのAIコーチング・ラボは、生徒一人ひとりの"つまずき"を見つけ、解きほぐし、定着させるための<strong>AI学習支援システム「Study Partner」</strong>を中心に構築されています。
              </p>
              <p>
                このラボでは、AIが先生のように寄り添いながら、宿題や苦手単元を「分解 → 手順化 → 確認 → 記録」のサイクルでサポート。生徒は無理なく自分のペースで理解を深めます。
              </p>
              <p>
                ただのオンライン学習ではなく、「人とAIが協働するリアルな学び場」で、「わかったつもり」を「本当にできる」に変えていきます。
              </p>
            </div>
            
            <div class="highlight-ai-system">
              <h3 class="ai-system-title">
                <i class="fas fa-robot"></i>
                AI学習支援システム「Study Partner」
              </h3>
              <p class="ai-system-description">
                最先端のAI学習技術により、一人ひとりの学習状況を分析し、最適な学習プランを提案。生徒の思考・判断・表現のプロセスをAIが見える化します。
              </p>
              <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="study-partner-link" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
                <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">特徴</h2>
            <p class="section-subtitle">
              最先端のAI学習技術と人間の指導を組み合わせた、<br/>
              新しい学習体験を提供します
            </p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-robot"></i>
              </div>
              <h3 class="feature-title">AI学習支援システム「Study Partner」</h3>
              <p class="feature-description">
                個別学習サポートによる、一人ひとりに最適化された学習体験
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3 class="feature-title">Cloud学習ログで成長の可視化</h3>
              <p class="feature-description">
                学習の進捗と成果をリアルタイムで記録・分析し、成長を見える化
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <h3 class="feature-title">宿題・テスト対策・復習をAIが自動で最適化</h3>
              <p class="feature-description">
                個人の学習状況に応じて、自動的に最適な学習プランを生成
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="feature-title">先生のコーチング × AIの分析</h3>
              <p class="feature-description">
                人間の温かい指導とAIの精密な分析で、深い理解を実現
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Styles */}
      <section class="styles-section">
        <div class="container">
          <div class="styles-content">
            <div class="styles-text">
              <h2>学びのスタイル</h2>
              <p>
                AIコーチング・ラボでは、個別最適化された学習体験を提供します。AIが学習過程を分析し、最適な指導法を選択します。
              </p>
              <p>
                従来の一方的な授業ではなく、生徒とAIが対話しながら進める双方向型の学習スタイルです。
              </p>
            </div>
            
            <div class="learning-cycle">
              <div class="cycle-steps">
                <div class="cycle-step">
                  <i class="fas fa-search"></i>
                  <h4>分解</h4>
                  <p>問題を細かく分析</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-list-ol"></i>
                  <h4>手順化</h4>
                  <p>解決ステップを明確化</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-check-circle"></i>
                  <h4>確認</h4>
                  <p>理解度をリアルタイム検証</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-save"></i>
                  <h4>記録</h4>
                  <p>学習ログを自動保存</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ai-collaboration">
            <h3>教室でのAIサポート付き自習</h3>
            <p>
              オンラインでの宿題コーチング・AIによる学習記録の自動保存とフィードバック
            </p>
          </div>
        </div>
      </section>

      {/* Target & Benefits */}
      <section class="target-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">対象・おすすめの生徒</h2>
            <p class="section-subtitle">
              一人ひとりに合わせた最先端のAI学習を体験しませんか
            </p>
          </div>
          
          <div class="target-grid">
            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-users"></i>
                対象
              </h3>
              <div class="target-item">
                <i class="fas fa-graduation-cap"></i>
                <span>日本人学校・インター校に通う 中学生（小学生はご相談ください）</span>
              </div>
            </div>

            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-lightbulb"></i>
                こんな生徒におすすめ
              </h3>
              <div class="target-item">
                <i class="fas fa-chart-line"></i>
                <span>勉強はしているのに成果が見えにくい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-target"></i>
                <span>苦手単元を自分で克服したい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-robot"></i>
                <span>AIを使った学びに興味がある</span>
              </div>
              <div class="target-item">
                <i class="fas fa-clock"></i>
                <span>自分のペースで確実に理解を積み上げたい</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section class="schedule-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">クラス詳細</h2>
            <p class="section-subtitle">
              一人ひとりに最適化されたAI学習支援で、<br/>
              「わかる」から「できる」への成長を実現します
            </p>
          </div>
          
          <div class="schedule-card">
            <h3 class="card-title">
              <i class="fas fa-calendar-alt"></i>
              クラススケジュール
            </h3>
            <div class="schedule-item">
              <span class="schedule-label">開催日時</span>
              <span class="schedule-value">土曜日 夕方</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">学習形式</span>
              <span class="schedule-value">教室でのAIサポート付き自習</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">オンライン対応</span>
              <span class="schedule-value">宿題コーチング・学習記録</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">使用システム</span>
              <span class="schedule-value">Study Partner (AI学習支援)</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">対象</span>
              <span class="schedule-value">中学生（小学生要相談）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Study Partner Spotlight Section */}
      <section class="study-partner-spotlight">
        <div class="container">
          <div class="spotlight-content">
            <div class="spotlight-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h2 class="spotlight-title">AI学習支援システム「Study Partner」</h2>
            <p class="spotlight-description">
              最先端のAI技術があなたの学習をサポート。一人ひとりに最適化された学習体験で、「わかる」から「できる」へと導きます。
            </p>
            <div class="spotlight-features">
              <div class="spotlight-feature">
                <i class="fas fa-brain"></i>
                <span>個別最適化学習</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-chart-line"></i>
                <span>リアルタイム分析</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-target"></i>
                <span>弱点克服サポート</span>
              </div>
            </div>
            <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="study-partner-big-btn" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-rocket"></i>
              Study Partnerを今すぐ体験
              <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">AIと一緒に、"できた！"を積み重ねよう。</h2>
            <p class="cta-description">
              最先端のAI学習支援で、一人ひとりの「わかる」を「できる」に変える新しい学習体験。<br/>
              まずは無料体験で、AIコーチング・ラボの魅力を体感してください。
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-graduation-cap"></i>
                無料体験を申し込む
              </a>
              <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
                <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
)