import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const toyprogrammingCoursePage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --light-yellow: #FFF8DC;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        --python-blue: #3776AB;
        --python-yellow: #FFD43B;
        --purple-accent: #9F7AEA;
        --green-accent: #48BB78;
        --orange-accent: #ED8936;
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
        background: linear-gradient(135deg, var(--python-blue) 0%, var(--python-yellow) 50%, var(--main-yellow) 100%);
        padding: 8rem 0 6rem;
        color: var(--text-dark);
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '🐍';
        position: absolute;
        top: 10%;
        right: 10%;
        font-size: 8rem;
        opacity: 0.1;
        z-index: 1;
        animation: float 6s ease-in-out infinite;
      }

      .hero-section::after {
        content: '🎯';
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
        background: linear-gradient(45deg, var(--text-dark), var(--python-blue));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
      }

      .hero-title::after {
        content: 'ToyPro';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(45deg, var(--python-yellow), var(--orange-accent));
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
        margin-bottom: 3rem;
        background: rgba(255, 255, 255, 0.9);
        padding: 2.5rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
      }
      
      .hero-cta {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      /* Python-style Button */
      .btn-python {
        background: linear-gradient(45deg, var(--python-blue), var(--python-yellow));
        color: var(--text-dark);
        font-weight: 800;
        padding: 1.8rem 3.5rem;
        border-radius: 60px;
        text-decoration: none;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 3px solid transparent;
        box-shadow: 0 10px 30px rgba(55, 118, 171, 0.3);
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.1rem;
      }

      .btn-python::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.6s;
      }

      .btn-python:hover::before {
        left: 100%;
      }
      
      .btn-python:hover {
        transform: translateY(-8px) scale(1.08);
        box-shadow: 0 20px 50px rgba(55, 118, 171, 0.4);
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
        background: linear-gradient(90deg, var(--python-blue), var(--python-yellow), var(--main-yellow));
        margin: 1.5rem auto;
        border-radius: 3px;
      }

      .features-grid {
        display: grid;
        gap: 4rem;
        position: relative;
        z-index: 2;
      }

      .feature-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        padding: 4rem;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        border: 2px solid rgba(255, 193, 7, 0.1);
        position: relative;
        overflow: hidden;
      }

      .feature-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(55, 118, 171, 0.05), transparent);
        transition: left 0.8s;
      }

      .feature-item:hover::before {
        left: 100%;
      }

      .feature-item:hover {
        transform: translateY(-15px);
        box-shadow: 0 40px 80px rgba(55, 118, 171, 0.15);
        border-color: var(--python-blue);
      }

      .feature-item:nth-child(1) {
        background: linear-gradient(135deg, rgba(55, 118, 171, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(2) {
        background: linear-gradient(135deg, rgba(255, 212, 59, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(2) .feature-content {
        order: 2;
      }

      .feature-item:nth-child(2) .feature-visual {
        order: 1;
      }

      .feature-item:nth-child(3) {
        background: linear-gradient(135deg, rgba(159, 122, 234, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-visual {
        position: relative;
        min-height: 300px;
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient(135deg, var(--python-blue), var(--python-yellow));
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 20px 40px rgba(55, 118, 171, 0.2);
      }

      .feature-visual img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        transition: transform 0.5s ease;
      }

      .feature-item:hover .feature-visual img {
        transform: scale(1.05);
      }

      .feature-number {
        position: absolute;
        top: -20px;
        left: 20px;
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, var(--orange-accent), var(--main-yellow));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 900;
        color: white;
        box-shadow: 0 10px 30px rgba(237, 137, 54, 0.3);
        z-index: 10;
      }

      .feature-content h3 {
        font-size: 2.8rem;
        font-weight: 800;
        margin-bottom: 2rem;
        color: var(--text-dark);
        position: relative;
        padding-left: 30px;
      }

      .feature-content h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 60px;
        background: linear-gradient(135deg, var(--python-blue), var(--python-yellow));
        border-radius: 4px;
      }

      .feature-content p {
        font-size: 1.3rem;
        line-height: 1.9;
        color: var(--text-gray);
        margin-bottom: 2rem;
      }

      .feature-highlights {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .highlight-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 15px;
        border-left: 5px solid var(--python-blue);
        transition: all 0.3s;
      }

      .highlight-item:hover {
        background: rgba(55, 118, 171, 0.1);
        transform: translateX(10px);
      }

      .highlight-icon {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, var(--green-accent), var(--main-yellow));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        color: white;
        flex-shrink: 0;
      }

      .highlight-text {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      /* Info Section */
      .info-section {
        padding: 8rem 0;
        background: linear-gradient(135deg, var(--text-dark) 0%, var(--python-blue) 100%);
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
        background: radial-gradient(ellipse, rgba(255, 212, 59, 0.1) 0%, transparent 70%);
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
        border-color: var(--python-yellow);
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
        background: linear-gradient(45deg, var(--python-yellow), var(--main-yellow));
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 25px rgba(255, 212, 59, 0.3);
      }

      /* CTA Section */
      .cta-section {
        padding: 8rem 0;
        background: linear-gradient(135deg, var(--python-yellow) 0%, var(--main-yellow) 50%, var(--accent-yellow) 100%);
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
          radial-gradient(circle at 20% 20%, rgba(55, 118, 171, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(159, 122, 234, 0.1) 0%, transparent 50%);
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
        background: linear-gradient(45deg, var(--text-dark), var(--python-blue));
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
        background: linear-gradient(45deg, var(--purple-accent), var(--python-yellow));
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
        
        .feature-item {
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem;
        }
        
        .feature-item:nth-child(2) .feature-content,
        .feature-item:nth-child(2) .feature-visual {
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

        .btn-python,
        .btn-outline {
          padding: 1.5rem 2.5rem;
          font-size: 1rem;
        }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">ToyPro</h1>
          <p className="hero-subtitle">
            基礎から応用まで本格的にPythonを学ぶプログラミングコース
          </p>
          <div className="hero-description">
            おもちゃ・ロボット教材を使った体験型プログラミングで、5歳から14歳まで幅広く対応。
            「ToyPro」では255個のクエスト、1000問以上の練習問題、全国ランキング機能で楽しく本格的なプログラミングスキルを身につけます。
            段階的に学べる構造で、初心者でも安心してPythonプログラミングをマスターできます。
          </div>
          <div className="hero-cta">
            <a href="/contact" className="btn-python">
              <span>無料体験に参加</span>
            </a>
            <a href="#details" className="btn-outline">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">ToyPro 3つの学習システム</h2>
        <p className="section-subtitle">段階的で確実なスキルアップを実現する3つの柱</p>
        
        <div className="features-grid">
          
          <div className="feature-item">
            <div className="feature-number">1</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎯</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>255個のクエスト</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>クエストシステム</h3>
              <p>
                一本道の学習コースで、はじめてでも安心！簡単なものから順番に学ぶことができ、迷うことなくステップアップできます。
                255個の豊富なクエストで基礎力を着実に向上させます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📈</div>
                  <div className="highlight-text">段階的な難易度設計</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🛤️</div>
                  <div className="highlight-text">一本道で迷わない学習</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💪</div>
                  <div className="highlight-text">255個のクエストで基礎力UP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">2</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🌳</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>機能別ツリー構造</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>スタディシステム</h3>
              <p>
                Pythonの機能別にツリー化された学習システム！問題を解いていて分からない時や、
                クエストで理解しきれない時に、詳しく学び直すことができます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🌿</div>
                  <div className="highlight-text">機能別ツリー構造</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔍</div>
                  <div className="highlight-text">詳細解説で理解深化</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔄</div>
                  <div className="highlight-text">復習・補強学習対応</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">3</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏆</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>1000問+ & ランキング</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>練習・テスト・ランキング</h3>
              <p>
                問題数は1000問以上で毎週新しい問題が追加！確認テストで理解度をチェックし、
                全国・都道府県・月間ランキングでモチベーションを維持できます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <div className="highlight-text">1000問以上の豊富な問題</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">✅</div>
                  <div className="highlight-text">確認テストで理解度チェック</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🥇</div>
                  <div className="highlight-text">全国ランキングで競争</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Info Section */}
    <section id="details" className="info-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>受講情報</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>
              <div className="info-card-icon">📅</div>
              スケジュール・対象年齢
            </h3>
            <div style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
              <p><strong>対象年齢</strong>：5歳〜14歳</p>
              <p><strong>推奨学年</strong>：年長〜中学2年生</p>
              <p><strong>平日</strong>：火・木 16:00-17:30</p>
              <p><strong>土曜</strong>：10:00-11:30 / 14:00-15:30</p>
              <p><strong>授業時間</strong>：90分 / 回</p>
              <p style={{color: 'var(--python-yellow)', fontWeight: '800'}}>※プログラミング未経験でも安心</p>
            </div>
          </div>
          <div className="info-card">
            <h3>
              <div className="info-card-icon">💰</div>
              料金・特徴
            </h3>
            <div style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
              <p><strong>入会金</strong>：5,000 THB</p>
              <p><strong>月4回コース</strong>：2,800 THB</p>
              <p><strong>月8回コース</strong>：5,200 THB</p>
              <p><strong>教材</strong>：おもちゃ・ロボット使用</p>
              <p><strong>定員</strong>：6名 / クラス</p>
              <p style={{color: 'var(--python-yellow)', fontWeight: '800'}}>※無料体験授業実施中</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">ToyPro体験会随時開催中！</h2>
          <div className="cta-description">
            おもちゃとロボットで楽しく学ぶPythonプログラミング。<br />
            255個のクエスト、1000問以上の練習問題、全国ランキングで<br />
            お子様のプログラミングスキルを本格的に育てませんか？<br />
            <strong>体験会の日程はお問い合わせください。</strong>
          </div>
          <div className="cta-buttons">
            <a href="/contact" className="btn-cta-primary">
              <span>📅 体験会の日程を問い合わせる</span>
            </a>
            <a href="tel:095-969-4100" className="btn-cta-primary">
              <span>📞 095-969-4100</span>
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