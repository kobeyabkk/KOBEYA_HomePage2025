export function mathCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>算数数学個別指導 - AI & プログラミングのKOBEYA</title>
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
      <style>
        :root {
          --main-yellow: #FFC107;
          --accent-yellow: #FFD700;
          --base-white: #FFFFFF;
          --text-dark: #2D3748;
          --text-gray: #718096;
          --border-gray: #E2E8F0;
          --hover-gray: #F7FAFC;
          --math-blue: #3F51B5;
          --math-green: #4CAF50;
          --math-orange: #FF9800;
          --math-red: #F44336;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          background-color: var(--base-white);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section {
          padding: 80px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-gray);
          margin-bottom: 60px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--math-blue) 0%, var(--math-green) 30%, var(--math-orange) 70%, var(--main-yellow) 100%);
          color: var(--base-white);
          text-align: center;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '∑ ∫ π √ ∞ θ α β γ δ λ μ σ φ ψ ω';
          position: absolute;
          top: 20%;
          left: -10%;
          font-size: 1.5rem;
          opacity: 0.1;
          animation: float 20s linear infinite;
        }

        .hero-section::after {
          content: 'x² + y² = z² | f(x) = ax² + bx + c | ∂f/∂x | lim | sin cos tan';
          position: absolute;
          bottom: 20%;
          right: -10%;
          font-size: 1.2rem;
          opacity: 0.1;
          animation: float 25s linear infinite reverse;
        }

        @keyframes float {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-block;
          background: var(--base-white);
          color: var(--text-dark);
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--hover-gray);
          transform: translateY(-2px);
        }

        /* Course Overview */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .overview-content h2 {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-dark);
        }

        .overview-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-gray);
          margin-bottom: 20px;
        }

        .overview-features {
          background: var(--hover-gray);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          position: relative;
        }

        .overview-features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--math-blue), var(--math-green), var(--math-orange));
          border-radius: 16px 16px 0 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .feature-item i {
          color: var(--math-blue);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Teacher Introduction */
        .teacher-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .teacher-card {
          background: var(--base-white);
          padding: 50px;
          border-radius: 20px;
          border: 3px solid var(--math-blue);
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .teacher-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, var(--math-blue), var(--math-green));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--base-white);
          margin: 0 auto 24px;
        }

        .teacher-name {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .teacher-title {
          font-size: 1.2rem;
          color: var(--math-blue);
          font-weight: 600;
          margin-bottom: 24px;
        }

        .teacher-description {
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .teacher-credentials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .credential-item {
          background: var(--hover-gray);
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }

        .credential-item i {
          color: var(--math-blue);
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .credential-item h5 {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .credential-item p {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        /* Grade Levels */
        .grades-section {
          padding: 80px 0;
        }

        .grades-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .grade-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 3px solid transparent;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .grade-card:nth-child(1) {
          border-color: var(--math-green);
        }

        .grade-card:nth-child(2) {
          border-color: var(--math-blue);
        }

        .grade-card:nth-child(3) {
          border-color: var(--math-orange);
        }

        .grade-card:nth-child(4) {
          border-color: var(--math-red);
        }

        .grade-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .grade-card:nth-child(1)::before { background: var(--math-green); }
        .grade-card:nth-child(2)::before { background: var(--math-blue); }
        .grade-card:nth-child(3)::before { background: var(--math-orange); }
        .grade-card:nth-child(4)::before { background: var(--math-red); }

        .grade-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .grade-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: var(--base-white);
        }

        .grade-card:nth-child(1) .grade-icon {
          background: linear-gradient(135deg, var(--math-green), #66BB6A);
        }

        .grade-card:nth-child(2) .grade-icon {
          background: linear-gradient(135deg, var(--math-blue), #5C6BC0);
        }

        .grade-card:nth-child(3) .grade-icon {
          background: linear-gradient(135deg, var(--math-orange), #FFB74D);
        }

        .grade-card:nth-child(4) .grade-icon {
          background: linear-gradient(135deg, var(--math-red), #EF5350);
        }

        .grade-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .grade-level {
          font-weight: 600;
          margin-bottom: 16px;
          font-size: 1.1rem;
        }

        .grade-card:nth-child(1) .grade-level { color: var(--math-green); }
        .grade-card:nth-child(2) .grade-level { color: var(--math-blue); }
        .grade-card:nth-child(3) .grade-level { color: var(--math-orange); }
        .grade-card:nth-child(4) .grade-level { color: var(--math-red); }

        .grade-topics {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Teaching Method */
        .method-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .method-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .method-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--math-blue), var(--math-green));
          color: var(--base-white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 20px;
        }

        .method-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .method-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Benefits */
        .benefits-section {
          padding: 80px 0;
        }

        .benefits-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .stat-card {
          text-align: center;
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--math-blue);
          margin-bottom: 8px;
        }

        .stat-label {
          color: var(--text-gray);
          font-weight: 500;
        }

        .benefits-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--base-white);
          padding: 24px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
        }

        .benefit-item i {
          color: var(--math-blue);
          font-size: 1.5rem;
          margin-top: 4px;
          width: 24px;
        }

        .benefit-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .benefit-content p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Schedule & Pricing */
        .info-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .info-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-title i {
          color: var(--math-blue);
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-gray);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-item span:first-child {
          font-weight: 500;
          color: var(--text-dark);
        }

        .info-item span:last-child {
          color: var(--text-gray);
        }

        .price-highlight {
          color: var(--math-blue) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--math-blue) 0%, var(--math-green) 30%, var(--math-orange) 70%, var(--main-yellow) 100%);
          color: var(--base-white);
          padding: 80px 0;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 40px;
          line-height: 1.7;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cta-primary {
          background: var(--base-white);
          color: var(--text-dark);
        }

        .cta-primary:hover {
          background: var(--hover-gray);
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: transparent;
          color: var(--base-white);
          border: 2px solid var(--base-white);
        }

        .cta-secondary:hover {
          background: var(--base-white);
          color: var(--text-dark);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section {
            padding: 40px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .overview-grid,
          .info-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .grades-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .method-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .benefits-stats {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .benefits-list {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .teacher-card {
            padding: 30px;
          }

          .teacher-credentials {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      </style>
    </head>
    <body>
      <main>
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="hero-content">
              <div class="hero-icon">
                <i class="fas fa-calculator"></i>
              </div>
              <h1 class="hero-title">算数数学個別指導</h1>
              <p class="hero-subtitle">
                一人ひとりに最適化された<br>
                わかりやすい算数・数学の個別指導
              </p>
              <a href="#details" class="cta-button">
                <i class="fas fa-arrow-down"></i>
                コース詳細を見る
              </a>
            </div>
          </div>
        </section>

        <!-- Course Overview -->
        <section class="section" id="details">
          <div class="container">
            <div class="overview-grid">
              <div class="overview-content">
                <h2>数学の楽しさを伝える個別指導</h2>
                <p>
                  算数・数学の基礎から応用まで、一人ひとりの学習レベルと理解度に合わせた完全個別指導を行います。「なぜそうなるのか」を重視し、暗記ではなく理解に基づいた学習で、確実な数学力を身につけます。
                </p>
                <p>
                  シンガポールやタイでの豊富な指導経験を持つ専門講師が、日本の教育カリキュラムに対応しながら、海外在住の特性を活かした柔軟な指導を提供します。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-user"></i>
                  <span>完全個別指導（1対1）</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-chart-line"></i>
                  <span>学習レベル完全カスタマイズ</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-lightbulb"></i>
                  <span>理解重視の指導方法</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-globe"></i>
                  <span>日本・海外カリキュラム対応</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-laptop"></i>
                  <span>オンライン・対面選択可能</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-star"></i>
                  <span>20年以上の指導実績</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Teacher Introduction -->
        <section class="teacher-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">講師紹介</h2>
            <div class="teacher-card">
              <div class="teacher-avatar">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3 class="teacher-name">鈴木 政路（すずき まさみち）</h3>
              <div class="teacher-title">数学専門講師 / 教育者</div>
              <p class="teacher-description">
                1975年宮崎県生まれ。2004年からシンガポールの進学塾で中高生の数学指導を開始し、2012年にタイへ移住。20年以上にわたり海外で日本人の子どもたちに数学を教え続けている専門講師です。「楽しく学ぶ」をモットーに、一人ひとりの理解度に寄り添った丁寧な指導で多くの生徒の数学力向上を実現してきました。
              </p>
              <div class="teacher-credentials">
                <div class="credential-item">
                  <i class="fas fa-graduation-cap"></i>
                  <h5>指導経験</h5>
                  <p>20年以上</p>
                </div>
                <div class="credential-item">
                  <i class="fas fa-globe-asia"></i>
                  <h5>指導地域</h5>
                  <p>シンガポール・タイ</p>
                </div>
                <div class="credential-item">
                  <i class="fas fa-users"></i>
                  <h5>指導生徒数</h5>
                  <p>500名以上</p>
                </div>
                <div class="credential-item">
                  <i class="fas fa-trophy"></i>
                  <h5>合格実績</h5>
                  <p>難関校多数</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Grade Levels -->
        <section class="grades-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">対象学年・学習内容</h2>
            <div class="grades-grid">
              <div class="grade-card">
                <div class="grade-icon">
                  <i class="fas fa-seedling"></i>
                </div>
                <h3>小学生</h3>
                <div class="grade-level">小学1年生〜6年生</div>
                <div class="grade-topics">
                  四則計算、分数・小数、割合・比、図形、文章問題、中学受験対策など、算数の基礎から応用まで幅広くサポート
                </div>
              </div>

              <div class="grade-card">
                <div class="grade-icon">
                  <i class="fas fa-user-graduate"></i>
                </div>
                <h3>中学生</h3>
                <div class="grade-level">中学1年生〜3年生</div>
                <div class="grade-topics">
                  代数、幾何、関数、確率・統計、高校受験対策。海外在住特有の学習環境に配慮した指導を実施
                </div>
              </div>

              <div class="grade-card">
                <div class="grade-icon">
                  <i class="fas fa-university"></i>
                </div>
                <h3>高校生</h3>
                <div class="grade-level">高校1年生〜3年生</div>
                <div class="grade-topics">
                  数学I・A、数学II・B、数学III・C、大学受験対策。日本の大学入試に完全対応した指導内容
                </div>
              </div>

              <div class="grade-card">
                <div class="grade-icon">
                  <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>成人・社会人</h3>
                <div class="grade-level">大学生〜社会人</div>
                <div class="grade-topics">
                  数学の復習、資格試験対策、統計学、微積分学など、目的に応じたオーダーメイド指導
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Teaching Method -->
        <section class="method-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">指導方法・特徴</h2>
            <div class="method-grid">
              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-search"></i>
                </div>
                <h4>理解度診断</h4>
                <p>現在の学力を正確に把握し、つまずきの原因を特定してから指導を開始します。</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-route"></i>
                </div>
                <h4>個別学習プラン</h4>
                <p>一人ひとりの目標と現状に合わせた最適な学習計画を作成します。</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h4>概念理解重視</h4>
                <p>公式の暗記ではなく、「なぜそうなるのか」の理解を大切にした指導です。</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-repeat"></i>
                </div>
                <h4>反復練習</h4>
                <p>理解した内容を確実に定着させるため、適度な反復練習を組み込みます。</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-comments"></i>
                </div>
                <h4>対話型指導</h4>
                <p>生徒との対話を通じて理解度を確認し、疑問を即座に解決します。</p>
              </div>

              <div class="method-card">
                <div class="method-icon">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <h4>進捗管理</h4>
                <p>定期的な確認テストと保護者への報告で学習進捗を可視化します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits & Results -->
        <section class="benefits-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">指導実績・効果</h2>
            
            <div class="benefits-stats">
              <div class="stat-card">
                <div class="stat-number">20+</div>
                <div class="stat-label">指導経験年数</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">指導生徒数</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">95%</div>
                <div class="stat-label">成績向上率</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">90%</div>
                <div class="stat-label">志望校合格率</div>
              </div>
            </div>

            <div class="benefits-list">
              <div class="benefit-item">
                <i class="fas fa-trophy"></i>
                <div class="benefit-content">
                  <h4>確実な成績向上</h4>
                  <p>個別指導により、ほとんどの生徒が2〜3ヶ月で明確な成績向上を実感しています。</p>
                </div>
              </div>

              <div class="benefit-item">
                <i class="fas fa-heart"></i>
                <div class="benefit-content">
                  <h4>数学への興味向上</h4>
                  <p>「数学が嫌い」だった生徒も、理解が深まることで数学の面白さを発見します。</p>
                </div>
              </div>

              <div class="benefit-item">
                <i class="fas fa-brain"></i>
                <div class="benefit-content">
                  <h4>論理的思考力の向上</h4>
                  <p>数学的思考を通じて、問題解決能力や論理的思考力が総合的に向上します。</p>
                </div>
              </div>

              <div class="benefit-item">
                <i class="fas fa-star"></i>
                <div class="benefit-content">
                  <h4>自信と達成感</h4>
                  <p>「できる」体験を積み重ねることで、学習全般への自信と意欲が高まります。</p>
                </div>
              </div>

              <div class="benefit-item">
                <i class="fas fa-graduation-cap"></i>
                <div class="benefit-content">
                  <h4>受験対策の充実</h4>
                  <p>日本の受験システムを熟知した指導で、中学・高校・大学受験をサポートします。</p>
                </div>
              </div>

              <div class="benefit-item">
                <i class="fas fa-clock"></i>
                <div class="benefit-content">
                  <h4>効率的な学習</h4>
                  <p>個別指導により無駄のない効率的な学習で、短期間での目標達成を可能にします。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Schedule & Pricing -->
        <section class="info-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">スケジュール・料金</h2>
            <div class="info-grid">
              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-calendar-alt"></i>
                  授業スケジュール
                </h3>
                <div class="info-item">
                  <span>平日（対面）</span>
                  <span>月〜金 16:00-21:00</span>
                </div>
                <div class="info-item">
                  <span>土曜日（対面）</span>
                  <span>土 9:00-18:00</span>
                </div>
                <div class="info-item">
                  <span>日曜日（対面）</span>
                  <span>日 9:00-15:00</span>
                </div>
                <div class="info-item">
                  <span>オンライン授業</span>
                  <span>毎日 8:00-22:00</span>
                </div>
                <div class="info-item">
                  <span>授業時間</span>
                  <span>60分 / 90分 選択可能</span>
                </div>
              </div>

              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="info-item">
                  <span>入会金</span>
                  <span>5,000 THB</span>
                </div>
                <div class="info-item">
                  <span>60分個別指導（1回）</span>
                  <span class="price-highlight">800 THB</span>
                </div>
                <div class="info-item">
                  <span>90分個別指導（1回）</span>
                  <span class="price-highlight">1,200 THB</span>
                </div>
                <div class="info-item">
                  <span>月8回パッケージ</span>
                  <span class="price-highlight">6,000 THB</span>
                </div>
                <div class="info-item">
                  <span>教材費</span>
                  <span>実費（月500-1,000 THB程度）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">数学の楽しさを一緒に発見しましょう</h2>
              <p class="cta-description">
                20年以上の海外指導経験を持つ専門講師が、一人ひとりのペースに合わせて丁寧に指導いたします。数学が苦手な方も得意な方も、さらなる向上を目指してみませんか？
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-calculator"></i>
                  無料体験授業申込み
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-phone"></i>
                  学習相談をする
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `
}