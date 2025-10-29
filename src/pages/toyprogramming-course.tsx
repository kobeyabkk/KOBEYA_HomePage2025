import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/toyprogramming-course.css'

export const toyprogrammingCoursePage = () => (
  <>
    <head>
      <title>TOYPROプログラミングコース｜KOBEYA（コベヤ）- Python×競技プログラミング</title>
      <meta name="description" content="KOBEYA（コベヤ）のTOYPROコース。Pythonで競技プログラミングに挑戦。読解力・算数数学・プログラミングを同時に学習。小学生から中学生対応。バンコクのプログラミング教室。" />
      <meta name="keywords" content="Python,競技プログラミング,TOYPRO,コベヤ,KOBEYA,小学生,中学生,バンコク,プログラミング教室,算数,読解力" />
      <meta property="og:title" content="TOYPROコース｜KOBEYA" />
      <meta property="og:description" content="Pythonで学ぶ競技プログラミング" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/courses/toyprogramming" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/courses/toyprogramming" />
    </head>
    
    
    
    
    <Header />
    
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">TOYPRO</h1>
          <p className="hero-subtitle">
            競技プログラミングでPythonを学ぶ学習プラットフォーム
          </p>
          <div className="hero-description">
            TOYPROは、競技プログラミングを通じてPythonを学びます。子どもたちはゲーム感覚で問題を解きながら、プログラミングスキルを身につけられます。<br/>
            <strong>コードを書いてPythonを学ぶ。TOYPROで新しい学びを体験しよう！</strong><br/>
            競技プログラミング形式の学習システムなので、必ず答えが存在します。Pythonを使って「何か」をするというアイデアが必要ありません。
          </div>
          <div className="hero-info-badges">
            <div className="info-badge">
              <span className="info-badge-icon">🎓</span>
              <span>対象：小学校中学年以上</span>
            </div>
            <div className="info-badge">
              <span className="info-badge-icon">🏠</span>
              <span>オンライン完結・家庭学習</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="/contact" className="btn-toypro">
              <span>無料体験に参加</span>
            </a>
            <a href="#benefits" className="btn-outline">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Python Learning Benefits Section */}
    <section id="benefits" className="features-section">
      <div className="container">
        <h2 className="section-title">Pythonを学ぶメリット</h2>
        <p className="section-subtitle">子どもたちの未来を拓く力</p>
        
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">🧠</div>
            <h3>論理的思考力</h3>
            <p>
              順序立てて考える力を養い、複雑な問題も段階的に解決できる力を身につけます。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">🎨</div>
            <h3>創造性の発達</h3>
            <p>
              読みやすく初心者にも優しいPythonで、クリエイティブな表現手段を獲得します。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">🏆</div>
            <h3>達成感と自信</h3>
            <p>
              物語調の問題で楽しく学び、成功体験を積み重ねながら自信を構築します。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">💼</div>
            <h3>将来のキャリア</h3>
            <p>
              AI、データサイエンス、アプリ開発など、幅広い分野で活躍できるスキルを習得。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">📖</div>
            <h3>読解力の向上</h3>
            <p>
              物語調の問題文を通じて、プログラミングと同時に読解力も養います。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">🌍</div>
            <h3>グローバルスキル</h3>
            <p>
              世界中で使われるPythonで、国際的に通用する技術力を身につけます。
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* TOYPRO Features Section - Alternating Layout */}
    <section className="features-section" style={{background: 'var(--base-white)', padding: '6rem 0'}}>
      <div className="container">
        <h2 className="section-title">TOYPROの学習システム</h2>
        <p className="section-subtitle">充実した学習環境で確実にスキルアップ</p>
        
        <div className="learning-items-grid">
          
          <div className="learning-item">
            <div className="learning-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📚</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>レッスン</h4>
              </div>
            </div>
            <div className="learning-content">
              <h3>わかりやすいPythonレッスン</h3>
              <p>
                プログラミング初心者でも安心。書き方から概念まで丁寧に解説し、基礎から応用まで段階的に学習できます。
              </p>
            </div>
          </div>

          <div className="learning-item">
            <div className="learning-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🤖</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>AIサポート</h4>
              </div>
            </div>
            <div className="learning-content">
              <h3>エラーアドバイザー</h3>
              <p>
                エラーが発生しても大丈夫。日本語とAIがわかりやすくアドバイスし、つまずきを素早く解決します。
              </p>
            </div>
          </div>

          <div className="learning-item">
            <div className="learning-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📝</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>練習問題</h4>
              </div>
            </div>
            <div className="learning-content">
              <h3>物語調の練習問題</h3>
              <p>
                読解力向上を目的とした物語調の問題で、楽しみながらプログラミングと読解力の両方を養います。
              </p>
            </div>
          </div>

          <div className="learning-item">
            <div className="learning-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏆</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>ランキング</h4>
              </div>
            </div>
            <div className="learning-content">
              <h3>成績・ランキングシステム</h3>
              <p>
                全国の仲間と競い合い、成績を可視化。ライバルと比較しながらモチベーションを維持できます。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* University Entrance Exam Section */}
    <section id="details" className="info-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>大学入試とTOYPRO</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>
              <div className="info-card-icon">🎓</div>
              2025年大学入試「情報」科目
            </h3>
            <div style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
              <p><strong>2025年以降の大学入試</strong>の共通テストで「情報」が新たな試験科目として追加されます。</p>
              <p><strong>試験内容</strong>：</p>
              <ul style={{paddingLeft: '1.5rem'}}>
                <li>コンピューター知識</li>
                <li>プログラミング</li>
                <li>データ分析</li>
              </ul>
              <p style={{color: 'var(--main-yellow)', fontWeight: '800'}}>※TOYPROはこれらすべてをカバー</p>
            </div>
          </div>
          <div className="info-card">
            <h3>
              <div className="info-card-icon">🚀</div>
              TOYPROの優位性
            </h3>
            <div style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
              <p><strong>TOYPROでは</strong>、これらの分野を楽しく学びながら、大学入試での成功へと導く基礎を築きます。</p>
              <p><strong>特徴</strong>：</p>
              <ul style={{paddingLeft: '1.5rem'}}>
                <li>中学受験レベルの抽象的問題</li>
                <li>読解力向上を重視</li>
                <li>競技プログラミング形式</li>
              </ul>
              <p style={{color: 'var(--main-yellow)', fontWeight: '800'}}>子どもたちの未来のための最適なステップです。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">TOYPRO体験会随時開催中！</h2>
          <div className="cta-description">
            競技プログラミングで楽しく学ぶPython！<br />
            2025年大学入試「情報」科目にも対応。<br />
            論理的思考力・創造性・問題解決能力を育てる<br />
            次世代学習プラットフォームTOYPROで<br />
            お子様の未来を切り拓きませんか？<br />
            <strong>体験会の日程はお問い合わせください。</strong>
          </div>
          <div className="cta-buttons">
            <a href="/contact" className="btn-cta-primary">
              <span>📅 体験会の日程を問い合わせる</span>
            </a>
            <a href="https://line.me/R/ti/p/@093dagwm" className="btn-cta-primary" target="_blank" rel="noopener noreferrer">
              <span>💬 LINEで相談</span>
            </a>
          </div>
          <div className="contact-info">
            <p>📍 フジスーパー2号店 2階</p>
            <p>✉️ kobeyabkk@gmail.com</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
