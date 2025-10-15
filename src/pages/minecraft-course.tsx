import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const minecraftCoursePage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        --minecraft-green: #5F8A5F;
        --minecraft-brown: #8B4513;
      }
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .hero-section {
        background: linear-gradient(135deg, var(--minecraft-green) 0%, var(--main-yellow) 100%);
        padding: 6rem 0 4rem;
        color: var(--text-dark);
      }
      
      .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }
      
      .hero-text h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        color: var(--text-gray);
        font-weight: 500;
      }
      
      .hero-description {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-gray);
        margin-bottom: 2rem;
      }
      
      .hero-cta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      
      .btn-primary {
        background: var(--text-dark);
        color: var(--base-white);
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s;
        border: 2px solid var(--text-dark);
        box-shadow: 0 4px 12px rgba(45, 55, 72, 0.3);
      }
      
      .btn-primary:hover {
        background: transparent;
        color: var(--text-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(45, 55, 72, 0.4);
      }
      
      .btn-secondary {
        background: transparent;
        color: var(--text-dark);
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s;
        border: 2px solid var(--text-dark);
      }
      
      .btn-secondary:hover {
        background: var(--text-dark);
        color: var(--base-white);
        transform: translateY(-2px);
      }
      
      .section {
        padding: 5rem 0;
      }
      
      .section-alt {
        background: #fafafa;
        padding: 5rem 0;
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 3rem;
        color: var(--text-dark);
      }
      
      .grid {
        display: grid;
        gap: 2rem;
      }
      
      .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
      .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
      
      .feature-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
        transition: all 0.3s;
      }
      
      .feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(95, 138, 95, 0.15);
        border-color: var(--minecraft-green);
      }
      
      .feature-icon {
        width: 4rem;
        height: 4rem;
        background: var(--minecraft-green);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        color: var(--base-white);
        box-shadow: 0 4px 12px rgba(95, 138, 95, 0.3);
      }
      
      @media (max-width: 768px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .hero-text h1 {
          font-size: 2.5rem;
        }
        .section-title {
          font-size: 2rem;
        }
        .container {
          padding: 0 1rem;
        }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>マイクラッチコース</h1>
            <p className="hero-subtitle">
              Minecraftでプログラミングを楽しく学習
            </p>
            <p className="hero-description">
              子どもたちに大人気のマインクラフトを使ってプログラミングを学習していくコースです。
              大規模な建物を作ったり、TNTを降らせるミニゲームを制作したり、自分だけのダンジョンを完成させていきます。
              デジタネが独自に開発したソフト「マイクラッチ」を使用し、マインクラフトやプログラミングが初めてのお子様でも楽しめます。
            </p>
            <div className="hero-cta">
              <a href="/contact" className="btn-primary">無料体験を申し込む</a>
              <a href="#details" className="btn-secondary">詳細を見る</a>
            </div>
          </div>
          <div className="hero-video" style={{textAlign: 'center'}}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--text-dark)',
              marginBottom: '1rem'
            }}>マイクラッチ学習の様子</h3>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}>
              <img 
                src="/images/minecraft-sample.jpg" 
                alt="マイクラッチ学習画面" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="section">
      <div className="container">
        <h2 className="section-title">マイクラッチコース 3つのポイント</h2>
        <div className="grid grid-3">
          <div className="feature-card">
            <div className="feature-icon">😊</div>
            <h3>ポイント1: コンテンツの楽しさ</h3>
            <p>マイクラッチコースのテーマは「楽しく学ぶ」です。子どもたちは好きなことには圧倒的な集中力で取り組むので、他のどんな方法よりも学習効率が上がり、理解が進みます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧒</div>
            <h3>ポイント2: 小学1年生から対応！</h3>
            <p>マイクラに興味を持ちはじめる小学校低学年から、中学生までが推奨学年となっています。小学校入学と同時にプログラミング学習がスタートできます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>ポイント3: コンテストの開催</h3>
            <p>作った作品は、日本全国のマイクラッチ学習者が集うコミュニティに投稿することで、たくさんの仲間たちに見てもらうことができます。プログラミングコンテストも毎年開催しています。</p>
          </div>
        </div>
      </div>
    </section>

    {/* Learning Content Section */}
    <section id="details" className="section-alt">
      <div className="container">
        <h2 className="section-title">学習できる内容</h2>
        <div className="grid grid-3">
          <div className="feature-card">
            <div className="feature-icon">💥</div>
            <h3>TNT爆発プログラム</h3>
            <p>TNTブロックを配置して爆発させるプログラムを作成。繰り返し処理や座標の概念を学びます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>大規模建築の自動化</h3>
            <p>ピラミッドや城などの大きな建物を自動で建築するプログラムを作成。効率的なアルゴリズムを学びます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚂</div>
            <h3>レール・トロッコシステム</h3>
            <p>レッドストーン回路とトロッコを組み合わせた自動輸送システムを構築。論理回路の基礎を学びます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏃</div>
            <h3>アスレチックコース</h3>
            <p>ジャンプやパズル要素を含むアスレチックコースを設計。ゲーム制作の基本を学びます。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏰</div>
            <h3>ダンジョン制作</h3>
            <p>敵やトラップを配置したオリジナルダンジョンを作成。条件分岐とランダム要素を活用します。</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>キャラクター制御</h3>
            <p>エージェント（キャラクター）を動かして自動作業をさせるプログラムを作成。基本的なAIの概念を学びます。</p>
          </div>
        </div>
      </div>
    </section>

    {/* Schedule & Price Section */}
    <section className="section">
      <div className="container">
        <h2 className="section-title">受講情報</h2>
        <div className="grid grid-2">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>スケジュール・対象年齢</h3>
            <div style={{textAlign: 'left', marginTop: '1rem'}}>
              <p><strong>対象年齢</strong>：小学1年生〜中学生</p>
              <p><strong>平日</strong>：火・木 16:00-17:30</p>
              <p><strong>土曜</strong>：10:00-11:30 / 14:00-15:30</p>
              <p><strong>日曜</strong>：13:00-14:30</p>
              <p><strong>授業時間</strong>：90分 / 回</p>
              <p style={{color: 'var(--minecraft-green)', fontWeight: '600'}}>※初心者歓迎・マイクラ未経験でもOK</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>料金プラン</h3>
            <div style={{textAlign: 'left', marginTop: '1rem'}}>
              <p><strong>入会金</strong>：5,000 THB</p>
              <p><strong>月4回コース</strong>：2,800 THB</p>
              <p><strong>月8回コース</strong>：5,200 THB</p>
              <p><strong>教材費</strong>：なし</p>
              <p><strong>定員</strong>：6名 / クラス</p>
              <p style={{color: 'var(--minecraft-green)', fontWeight: '600'}}>※無料体験授業実施中</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-alt">
      <div className="container">
        <div style={{
          textAlign: 'center', 
          background: 'var(--minecraft-green)', 
          padding: '3rem', 
          borderRadius: '1rem', 
          boxShadow: '0 8px 25px rgba(95, 138, 95, 0.3)',
          color: 'var(--base-white)'
        }}>
          <h2 style={{marginBottom: '1rem', color: 'var(--base-white)'}}>マイクラッチ体験会随時開催中！</h2>
          <p style={{
            fontSize: '1.125rem', 
            marginBottom: '2rem', 
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            ゲーム感覚で楽しく学べるマイクラッチコース。<br />
            お子様の「好き」を「学び」に変えて、プログラミングの世界への第一歩を踏み出しませんか？<br />
            <strong>体験会の日程はお問い合わせください。</strong>
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'}}>
            <a href="/contact" className="btn-primary" style={{
              fontSize: '1.125rem', 
              padding: '1rem 2.5rem',
              backgroundColor: 'var(--base-white)',
              color: 'var(--text-dark)',
              border: '2px solid var(--base-white)'
            }}>
              📅 体験会の日程を問い合わせる
            </a>
            <a href="tel:095-969-4100" className="btn-secondary" style={{
              fontSize: '1.125rem', 
              padding: '1rem 2.5rem',
              backgroundColor: 'transparent',
              color: 'var(--base-white)',
              border: '2px solid var(--base-white)'
            }}>
              📞 095-969-4100
            </a>
          </div>
          <div style={{
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.3)',
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            <p style={{marginBottom: '8px'}}>
              📍 フジスーパー2号店 2階 | ✉️ kobeyabkk@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)