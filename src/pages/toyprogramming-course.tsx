import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const toyprogrammingCoursePage = () => (
  <>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <style>{`
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
        background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
        transition: left 0.8s;
      }

      .feature-item:hover::before {
        left: 100%;
      }

      .feature-item:hover {
        transform: translateY(-15px);
        box-shadow: 0 40px 80px rgba(255, 215, 0, 0.15);
        border-color: var(--main-yellow);
      }

      .feature-item:nth-child(1) {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(2) {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(2) .feature-content {
        order: 2;
      }

      .feature-item:nth-child(2) .feature-visual {
        order: 1;
      }

      .feature-item:nth-child(3) {
        background: linear-gradient(135deg, rgba(244, 164, 96, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(4) {
        background: linear-gradient(135deg, rgba(159, 122, 234, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-item:nth-child(5) {
        background: linear-gradient(135deg, rgba(72, 187, 120, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
      }

      .feature-visual {
        position: relative;
        min-height: 300px;
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
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
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
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
        border-left: 5px solid var(--main-yellow);
        transition: all 0.3s;
      }

      .highlight-item:hover {
        background: rgba(255, 215, 0, 0.1);
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

        .btn-toypro,
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
          <h1 className="hero-title">TOYPRO</h1>
          <p className="hero-subtitle">
            競技プログラミングでPythonを学ぶ学習プラットフォーム
          </p>
          <div className="hero-description">
            TOYPROは、競技プログラミングを通じてPythonを学びます。子どもたちはゲーム感覚で問題を解きながら、プログラミングスキルを身につけられます。<br/>
            <strong>コードを書いてPythonを学ぶ。TOYPROで新しい学びを体験しよう！</strong><br/>
            競技プログラミング形式の学習システムなので、必ず答えが存在します。Pythonを使って「何か」をするというアイデアが必要ありません。
          </div>
          <div className="hero-cta">
            <a href="/contact" className="btn-toypro">
              <span>無料体験に参加</span>
            </a>
            <a href="#details" className="btn-outline">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Python Learning Benefits Section */}
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Pythonを学ぶメリット</h2>
        <p className="section-subtitle">子どもたちの未来を拓く5つの力</p>
        
        <div className="features-grid">
          
          <div className="feature-item">
            <div className="feature-number">1</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🧠</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>論理的思考</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>論理的思考力の向上</h3>
              <p>
                子どもたちがPythonを学ぶことで、論理的思考力と問題解決能力が身につきます。
                プログラミングを通じて順序立てて考える力を養い、複雑な問題も段階的に解決できるようになります。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">問題解決スキルの向上</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔄</div>
                  <div className="highlight-text">順序立てて考える力</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">効率的な思考プロセス</div>
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
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎨</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>創造性</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>創造性の発達</h3>
              <p>
                Pythonは読みやすく、初心者にも理解しやすい言語で、創造性やコンピューターへの興味を育てます。
                クリエイティブな表現手段を得て創造力を発展させることが可能になります。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div className="highlight-text">アイデアの実現力</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎭</div>
                  <div className="highlight-text">表現手段の多様化</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-text">想像力の具現化</div>
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
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>成就感</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>達成感と自信</h3>
              <p>
                TOYPROの問題は読解力の向上を目的に、物語調の文章問題になっています。
                抽象的な算数の問題を、より親しみやすい形で提供することにより、楽しみながら数学・プログラミングの両方の力を養います。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📚</div>
                  <div className="highlight-text">読解力向上</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎮</div>
                  <div className="highlight-text">ゲーム感覚で学習</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌟</div>
                  <div className="highlight-text">自信の構築</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">4</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>💼</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>キャリアの準備</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>将来のキャリアパス</h3>
              <p>
                Pythonは世界中で広く使われているプログラミング言語で、その汎用性の高さが特徴です。
                Pythonの知識は、データサイエンス、人工知能、アプリ開発など、将来の様々なキャリアに役立ちます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🌍</div>
                  <div className="highlight-text">グローバルスキル</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔬</div>
                  <div className="highlight-text">AI・データサイエンス対応</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📱</div>
                  <div className="highlight-text">アプリ開発の基礎</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">5</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📖</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>リテラシー強化</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>デジタルリテラシー</h3>
              <p>
                テクノロジーが重要となる未来の職業に向けて、早期からの基礎スキル獲得が可能となります。
                将来的に多様なキャリアパスにつながる貴重なスキルを提供します。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">💻</div>
                  <div className="highlight-text">IT基礎スキル</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎓</div>
                  <div className="highlight-text">学習の土台作り</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔮</div>
                  <div className="highlight-text">未来への投資</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* TOYPRO Features Section */}
    <section className="features-section" style={{background: 'linear-gradient(135deg, #fff 0%, var(--light-yellow) 50%, #f8f9fa 100%)'}}>
      <div className="container">
        <h2 className="section-title">TOYPROの機能</h2>
        <p className="section-subtitle">充実した学習環境を提供する5つの機能</p>
        
        <div className="features-grid">
          
          <div className="feature-item">
            <div className="feature-number">①</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📚</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>Pythonレッスン</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>Pythonレッスン</h3>
              <p>
                プログラミングが初めての方向けに、書き方・概念をわかりやすく解説。
                基礎から応用まで段階的に学習できるカリキュラムを提供します。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📖</div>
                  <div className="highlight-text">わかりやすい解説</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📈</div>
                  <div className="highlight-text">段階的学習</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">初心者フレンドリー</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">②</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🤖</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>エラーアドバイザー</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>エラーアドバイザー</h3>
              <p>
                プログラムにミスがある場合、エラーの内容がわかるように日本語＆AIがアドバイス。
                つまずきを素早く解決して学習を継続できます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🇯🇵</div>
                  <div className="highlight-text">日本語エラー解説</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <div className="highlight-text">AIサポート</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">即座の問題解決</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">③</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📝</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>練習問題</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>練習問題</h3>
              <p>
                ユニークな練習問題を多数用意しています。
                読解力向上を目的とした物語調の文章問題で、楽しみながら実力をつけることができます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📚</div>
                  <div className="highlight-text">物語調の問題文</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎭</div>
                  <div className="highlight-text">ユニークな内容</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📖</div>
                  <div className="highlight-text">読解力向上</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">④</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏆</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>成績・ランキング</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>成績・ランキング</h3>
              <p>
                自分とライバルのランキングを比較したり、ポイントの推移を確認できます。
                全国の仲間と競い合いながらモチベーションを維持できます。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <div className="highlight-text">成績の可視化</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🥇</div>
                  <div className="highlight-text">全国ランキング</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔥</div>
                  <div className="highlight-text">競争でモチベーションUP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">⑤</div>
            <div className="feature-visual">
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✅</div>
                <h4 style={{fontSize: '1.8rem', fontWeight: '700', margin: 0}}>確認テスト</h4>
              </div>
            </div>
            <div className="feature-content">
              <h3>確認テスト</h3>
              <p>
                少しでも多くコードに触れるための確認テストが多数用意されています。
                定期的な理解度チェックで確実なスキルアップをサポートします。
              </p>
              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">💻</div>
                  <div className="highlight-text">コーディング機会増加</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📋</div>
                  <div className="highlight-text">理解度チェック</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📈</div>
                  <div className="highlight-text">確実なスキルアップ</div>
                </div>
              </div>
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

    {/* Problem Example Section */}
    <section className="features-section" style={{background: 'var(--base-white)'}}>
      <div className="container">
        <h2 className="section-title">TOYPRO練習問題例</h2>
        <p className="section-subtitle">C-080 256810885 10</p>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem',
          background: 'linear-gradient(135deg, var(--light-yellow) 0%, var(--base-white) 100%)',
          borderRadius: '30px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
          border: '3px solid var(--main-yellow)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '30px',
            background: 'var(--main-yellow)',
            padding: '0.5rem 2rem',
            borderRadius: '20px',
            fontWeight: '800',
            fontSize: '1.1rem',
            color: 'var(--text-dark)'
          }}>
            問題例
          </div>
          
          <div style={{
            fontSize: '1.3rem',
            lineHeight: '2',
            color: 'var(--text-dark)',
            marginTop: '1rem'
          }}>
            <p><strong>TOYPROの問題は読解力の向上を目的に、物語調の文章問題になっています。</strong></p>
            <p>抽象的な算数の問題（中学受験で出題されるような問題）を、より親しみやすい形で提供することにより、楽しみながら数学・プログラミングの両方の力を養います。</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              border: '2px solid var(--accent-yellow)'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>📚</div>
              <h4 style={{fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0'}}>読解力</h4>
              <p style={{fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0}}>物語調の問題文</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              border: '2px solid var(--accent-yellow)'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🧮</div>
              <h4 style={{fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0'}}>算数・数学</h4>
              <p style={{fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0}}>抽象的思考力</p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              border: '2px solid var(--accent-yellow)'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💻</div>
              <h4 style={{fontSize: '1.2rem', fontWeight: '700', margin: '0 0 0.5rem 0'}}>プログラミング</h4>
              <p style={{fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0}}>実装スキル</p>
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