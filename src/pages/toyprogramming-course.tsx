import { Header } from '../components/header'
import { Footer } from '../components/footer'

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
    
    
    <style dangerouslySetInnerHTML={{__html: `
      :root {
        --main-yellow: #FFD700;
        --accent-yellow: #FFC107;
        --light-yellow: #FFFACD;
        --deep-yellow: #F4A460;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        --purple-accent: #9F7AEA;
        --green-accent: #48BB78;
        --orange-accent: #ED8936;
        --red-accent: #E53E3E;
      }
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Hero Section */
      .hero-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, var(--light-yellow) 100%);
        padding: 8rem 0 6rem;
        color: var(--text-dark);
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '🏆';
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 8rem;
        opacity: 0.1;
        z-index: 1;
        animation: float 6s ease-in-out infinite;
      }

      .hero-section::after {
        content: '💻';
        position: absolute;
        bottom: 10%;
        left: 10%;
        font-size: 6rem;
        opacity: 0.1;
        z-index: 1;
        animation: float 8s ease-in-out infinite reverse;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
      }
      
      .hero-title {
        font-size: 4.5rem;
        font-weight: 900;
        margin-bottom: 1rem;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
        background: linear-gradient(45deg, var(--text-dark), var(--orange-accent));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
      }

      .hero-title::after {
        content: 'TOYPRO';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(45deg, var(--deep-yellow), var(--orange-accent));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        z-index: -1;
        transform: translate(3px, 3px);
        opacity: 0.3;
      }
      
      .hero-subtitle {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        color: var(--text-gray);
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
      }
      
      .hero-description {
        font-size: 1.3rem;
        line-height: 1.8;
        color: var(--text-dark);
        margin-bottom: 2rem;
        background: rgba(255, 255, 255, 0.9);
        padding: 2.5rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
      }

      .hero-info-badges {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 3rem;
      }

      .info-badge {
        background: rgba(255, 255, 255, 0.95);
        padding: 1rem 2rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--text-dark);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border: 2px solid rgba(255, 193, 7, 0.3);
        transition: all 0.3s ease;
      }

      .info-badge:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(255, 193, 7, 0.3);
        border-color: var(--main-yellow);
      }

      .info-badge-icon {
        font-size: 1.5rem;
      }
      
      .hero-cta {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      /* TOYPRO-style Button */
      .btn-toypro {
        background: linear-gradient(45deg, var(--main-yellow), var(--accent-yellow));
        color: var(--text-dark);
        font-weight: 800;
        padding: 1.8rem 3.5rem;
        border-radius: 60px;
        text-decoration: none;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 3px solid transparent;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.1rem;
      }

      .btn-toypro::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.6s;
      }

      .btn-toypro:hover::before {
        left: 100%;
      }
      
      .btn-toypro:hover {
        transform: translateY(-8px) scale(1.08);
        box-shadow: 0 20px 50px rgba(255, 215, 0, 0.4);
        border-color: var(--base-white);
      }

      .btn-outline {
        background: transparent;
        color: var(--text-dark);
        font-weight: 700;
        padding: 1.8rem 3.5rem;
        border-radius: 20px;
        text-decoration: none;
        transition: all 0.4s;
        border: 4px solid var(--text-dark);
        backdrop-filter: blur(15px);
        background: rgba(255, 255, 255, 0.15);
        position: relative;
        font-size: 1.1rem;
      }

      .btn-outline::after {
        content: '→';
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        transition: all 0.3s;
        font-size: 1.5rem;
      }
      
      .btn-outline:hover {
        background: var(--text-dark);
        color: white;
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(45, 55, 72, 0.3);
      }

      .btn-outline:hover::after {
        right: 25px;
        color: white;
      }

      /* Features Section */
      .features-section {
        padding: 8rem 0;
        background: linear-gradient(135deg, #f8f9fa 0%, var(--light-yellow) 50%, #fff 100%);
        position: relative;
      }

      .features-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/toypro-flyer1.png') no-repeat center;
        background-size: 600px;
        opacity: 0.03;
        z-index: 1;
      }
      
      .section-title {
        font-size: 3.5rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 1rem;
        color: var(--text-dark);
        position: relative;
        z-index: 2;
      }

      .section-subtitle {
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 5rem;
        color: var(--text-gray);
        font-weight: 500;
        position: relative;
        z-index: 2;
      }

      .section-title::after {
        content: '';
        display: block;
        width: 150px;
        height: 6px;
        background: linear-gradient(90deg, var(--main-yellow), var(--accent-yellow), var(--deep-yellow));
        margin: 1.5rem auto;
        border-radius: 3px;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        position: relative;
        z-index: 2;
      }

      .feature-card {
        background: var(--base-white);
        border-radius: 20px;
        padding: 3rem 2rem;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        border: 2px solid rgba(255, 193, 7, 0.2);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }

      .feature-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, var(--main-yellow) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s;
        z-index: 1;
      }

      .feature-card:hover::before {
        opacity: 0.1;
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(255, 193, 7, 0.25);
        border-color: var(--main-yellow);
      }

      .feature-card * {
        position: relative;
        z-index: 2;
      }

      .feature-icon-wrapper {
        width: 100px;
        height: 100px;
        background: linear-gradient(45deg, var(--main-yellow), var(--accent-yellow));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: white;
        margin: 0 auto 2rem;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
      }

      .feature-card h3 {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
      }

      .feature-card p {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--text-gray);
      }

      /* Learning Items with alternating layout */
      .learning-items-grid {
        display: grid;
        gap: 4rem;
        margin-top: 4rem;
      }

      .learning-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        padding: 3rem;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(255, 248, 220, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
      }

      .learning-item:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
      }

      .learning-item:nth-child(even) {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, rgba(255, 255, 255, 0.8) 100%);
      }

      .learning-item:nth-child(even) .learning-content {
        order: 2;
      }

      .learning-item:nth-child(even) .learning-visual {
        order: 1;
      }

      .learning-visual {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .learning-visual img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        transition: transform 0.3s ease;
      }

      .learning-item:hover .learning-visual img {
        transform: scale(1.05);
      }

      .learning-content h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
        position: relative;
        padding-left: 20px;
      }

      .learning-content h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 40px;
        background: linear-gradient(135deg, var(--main-yellow), var(--orange-accent));
        border-radius: 3px;
      }

      .learning-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-gray);
        margin-bottom: 1.5rem;
      }

      /* Info Section */
      .info-section {
        padding: 8rem 0;
        background: linear-gradient(135deg, var(--text-dark) 0%, var(--deep-yellow) 100%);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .info-section::before {
        content: '';
        position: absolute;
        top: -30%;
        right: -20%;
        width: 50%;
        height: 160%;
        background: radial-gradient(ellipse, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        z-index: 1;
        animation: pulse 8s ease-in-out infinite;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.1; }
        50% { transform: scale(1.1); opacity: 0.15; }
      }

      .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        position: relative;
        z-index: 2;
      }

      .info-card {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(20px);
        border-radius: 25px;
        padding: 4rem;
        border: 2px solid rgba(255, 255, 255, 0.1);
        transition: all 0.5s;
        position: relative;
        overflow: hidden;
      }

      .info-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255, 212, 59, 0.05) 0%, transparent 50%);
        opacity: 0;
        transition: opacity 0.3s;
      }

      .info-card:hover::before {
        opacity: 1;
      }

      .info-card:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        border-color: var(--main-yellow);
      }

      .info-card h3 {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .info-card-icon {
        font-size: 2.5rem;
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, var(--main-yellow), var(--accent-yellow));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
      }

      /* CTA Section */
      .cta-section {
        padding: 8rem 0;
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, var(--light-yellow) 100%);
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .cta-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(244, 164, 96, 0.1) 0%, transparent 50%);
        z-index: 1;
      }

      .cta-content {
        max-width: 900px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
      }

      .cta-title {
        font-size: 3.8rem;
        font-weight: 900;
        margin-bottom: 2rem;
        color: var(--text-dark);
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
        line-height: 1.2;
      }

      .cta-description {
        font-size: 1.5rem;
        margin-bottom: 4rem;
        line-height: 1.8;
        color: var(--text-dark);
        background: rgba(255, 255, 255, 0.3);
        padding: 3rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.2);
      }

      .cta-buttons {
        display: flex;
        gap: 3rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 4rem;
      }

      .btn-cta-primary {
        background: linear-gradient(45deg, var(--text-dark), var(--orange-accent));
        color: white;
        font-weight: 800;
        padding: 2rem 4rem;
        border-radius: 25px;
        text-decoration: none;
        transition: all 0.4s;
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.3);
        position: relative;
        overflow: hidden;
        font-size: 1.3rem;
        border: 3px solid transparent;
      }

      .btn-cta-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, var(--purple-accent), var(--main-yellow));
        opacity: 0;
        transition: opacity 0.4s;
      }

      .btn-cta-primary:hover::before {
        opacity: 1;
      }

      .btn-cta-primary span {
        position: relative;
        z-index: 2;
        color: white;
      }

      .btn-cta-primary:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 25px 60px rgba(45, 55, 72, 0.4);
        border-color: var(--base-white);
      }

      .contact-info {
        padding: 3rem;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 20px;
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .contact-info p {
        margin: 0.8rem 0;
        font-size: 1.3rem;
        color: var(--text-dark);
        font-weight: 700;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.8rem;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
        }
        
        .container {
          padding: 0 1rem;
        }
        
        .hero-info-badges {
          flex-direction: column;
          gap: 1rem;
          align-items: stretch;
        }

        .info-badge {
          justify-content: center;
          padding: 1rem 1.5rem;
          font-size: 1rem;
        }

        .info-badge-icon {
          font-size: 1.3rem;
        }
        
        .features-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .learning-items-grid {
          gap: 2rem;
        }
        
        .learning-item {
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem;
        }
        
        .learning-item:nth-child(even) .learning-content,
        .learning-item:nth-child(even) .learning-visual {
          order: initial;
        }
        
        .info-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        
        .hero-cta {
          flex-direction: column;
          align-items: center;
        }
        
        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }

        .btn-toypro,
        .btn-outline {
          padding: 1.5rem 2.5rem;
          font-size: 1rem;
        }
      }
    `}} />
    
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
