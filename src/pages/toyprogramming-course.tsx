export function toyprogrammingCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>トイプロ - AI & プログラミングのKOBEYA</title>
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
          --toy-blue: #4A90E2;
          --toy-pink: #FF6B9D;
          --toy-purple: #8B5CF6;
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
          background: linear-gradient(135deg, var(--toy-blue) 0%, var(--toy-pink) 50%, var(--main-yellow) 100%);
          color: var(--base-white);
          text-align: center;
          padding: 100px 0;
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
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .feature-item i {
          color: var(--toy-blue);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Toy Tools Section */
        .tools-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .tool-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 16px;
          border: 3px solid var(--toy-blue);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--toy-blue), var(--toy-pink), var(--toy-purple));
        }

        .tool-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .tool-card i {
          font-size: 3rem;
          color: var(--toy-blue);
          margin-bottom: 20px;
        }

        .tool-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .tool-card .tool-age {
          color: var(--toy-pink);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .tool-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Learning Process */
        .process-section {
          padding: 80px 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .process-step {
          text-align: center;
          position: relative;
        }

        .process-step::after {
          content: '';
          position: absolute;
          top: 50px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: var(--toy-blue);
          opacity: 0.3;
        }

        .process-step:last-child::after {
          display: none;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--toy-blue), var(--toy-pink));
          color: var(--base-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
        }

        .step-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .step-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Age Groups */
        .age-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .age-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .age-card {
          background: var(--base-white);
          padding: 40px 30px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          text-align: center;
          position: relative;
        }

        .age-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--toy-blue), var(--toy-pink), var(--toy-purple), var(--main-yellow));
          border-radius: 16px;
          z-index: -1;
        }

        .age-card i {
          font-size: 3rem;
          color: var(--toy-blue);
          margin-bottom: 20px;
        }

        .age-card h4 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .age-card .age-range {
          color: var(--toy-pink);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .age-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Benefits */
        .benefits-section {
          padding: 80px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .benefit-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--toy-blue), var(--toy-pink));
          color: var(--base-white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .benefit-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .benefit-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Schedule & Pricing */
        .info-section {
          background: var(--hover-gray);
          padding: 80px 0;
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
          color: var(--toy-blue);
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
          color: var(--toy-blue) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--toy-blue) 0%, var(--toy-pink) 50%, var(--main-yellow) 100%);
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

          .tools-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .process-step::after {
            display: none;
          }

          .age-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 30px;
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
            <div class="hero-icon">
              <i class="fas fa-puzzle-piece"></i>
            </div>
            <h1 class="hero-title">トイプロ</h1>
            <p class="hero-subtitle">
              おもちゃとプログラミングの融合<br>
              遊びながら学ぶ未来型学習コース
            </p>
            <a href="#details" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              コース詳細を見る
            </a>
          </div>
        </section>

        <!-- Course Overview -->
        <section class="section" id="details">
          <div class="container">
            <div class="overview-grid">
              <div class="overview-content">
                <h2>遊びが学びに変わる新体験</h2>
                <p>
                  トイプロ（Toy Programming）は、様々なおもちゃやロボット教材を使ってプログラミングを学ぶ革新的なコースです。LEGO、Ozobot、Sphero、micro:bitなど、楽しい教材で遊びながら自然にプログラミングの概念を身につけます。
                </p>
                <p>
                  手を動かし、目で見て、体で感じるアクティブラーニングで、抽象的なプログラミングの概念を具体的に理解できます。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-robot"></i>
                  <span>豊富なロボット教材</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-hands"></i>
                  <span>手を動かして学ぶ体験型学習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-eye"></i>
                  <span>視覚的・直感的な理解</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>チームでの協働学習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-star"></i>
                  <span>創造性と論理性の両方を育成</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-smile"></i>
                  <span>楽しみながら自然に学習</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Toy Tools -->
        <section class="tools-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">使用する教材・ツール</h2>
            <div class="tools-grid">
              <div class="tool-card">
                <i class="fas fa-cubes"></i>
                <h3>LEGO WeDo / Spike</h3>
                <div class="tool-age">6歳〜12歳</div>
                <p>ブロックを組み立ててロボットを作り、プログラムで動かします。創造力とエンジニアリング思考を育てます。</p>
              </div>

              <div class="tool-card">
                <i class="fas fa-circle"></i>
                <h3>Ozobot</h3>
                <div class="tool-age">5歳〜10歳</div>
                <p>線を描くだけで動く小さなロボット。色のコードでプログラミングの基礎を学びます。</p>
              </div>

              <div class="tool-card">
                <i class="fas fa-dot-circle"></i>
                <h3>Sphero</h3>
                <div class="tool-age">8歳〜15歳</div>
                <p>球体ロボットをスマートフォンアプリでプログラミング。数学と物理を楽しく学習できます。</p>
              </div>

              <div class="tool-card">
                <i class="fas fa-microchip"></i>
                <h3>micro:bit</h3>
                <div class="tool-age">10歳〜16歳</div>
                <p>小さなコンピューターで電子工作とプログラミング。センサーやLEDを使った作品を作ります。</p>
              </div>

              <div class="tool-card">
                <i class="fas fa-gamepad"></i>
                <h3>Makey Makey</h3>
                <div class="tool-age">7歳〜14歳</div>
                <p>身の回りのものをコントローラーに変身させる魔法の基板。創造性を無限に広げます。</p>
              </div>

              <div class="tool-card">
                <i class="fas fa-car"></i>
                <h3>mBot</h3>
                <div class="tool-age">8歳〜14歳</div>
                <p>組み立て式のロボットカー。センサーを使った自動運転やゲームを作って楽しめます。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Process -->
        <section class="process-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習プロセス</h2>
            <div class="process-grid">
              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-play"></i>
                </div>
                <h4 class="step-title">遊んで探索</h4>
                <p class="step-description">まずは自由に触って遊び、教材の特徴を発見します</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h4 class="step-title">仕組みを理解</h4>
                <p class="step-description">どうやって動くのか、基本的な仕組みを学びます</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-code"></i>
                </div>
                <h4 class="step-title">プログラム作成</h4>
                <p class="step-description">簡単なプログラムから始めて徐々にレベルアップ</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-cog"></i>
                </div>
                <h4 class="step-title">改良・改善</h4>
                <p class="step-description">うまくいかない部分を見つけて改善していきます</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <h4 class="step-title">作品完成・発表</h4>
                <p class="step-description">完成した作品をみんなに発表して達成感を味わいます</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Age Groups -->
        <section class="age-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">年齢別コース</h2>
            <div class="age-grid">
              <div class="age-card">
                <i class="fas fa-seedling"></i>
                <h4>はじめてクラス</h4>
                <div class="age-range">5〜7歳</div>
                <p>色や線で動くOzobotや簡単なLEGOを使って、プログラミングの基礎概念に触れます。</p>
              </div>

              <div class="age-card">
                <i class="fas fa-child"></i>
                <h4>ベーシッククラス</h4>
                <div class="age-range">8〜10歳</div>
                <p>LEGO WeDo、Spheroなどを使って、ブロック型プログラミングの基本を学習します。</p>
              </div>

              <div class="age-card">
                <i class="fas fa-user-graduate"></i>
                <h4>アドバンスクラス</h4>
                <div class="age-range">11〜14歳</div>
                <p>micro:bit、mBotなどの高度な教材で、センサーやモーターを制御するプログラムを作成します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits -->
        <section class="benefits-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">身につく力</h2>
            <div class="benefits-grid">
              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-brain"></i>
                </div>
                <h3>論理的思考力</h3>
                <p>順序立てて考える力、原因と結果の関係を理解する力が自然と身につきます。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <h3>問題解決能力</h3>
                <p>うまく動かない時の原因を探り、解決策を考える力を養います。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-palette"></i>
                </div>
                <h3>創造力・想像力</h3>
                <p>自由な発想で新しいアイデアを生み出し、形にする力を育てます。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h3>協調性・チームワーク</h3>
                <p>仲間と一緒に作品を作ることで、協力する力とコミュニケーション能力を伸ばします。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-eye"></i>
                </div>
                <h3>観察力・集中力</h3>
                <p>細かな変化に気づく観察力と、作業に集中して取り組む力を養います。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-heart"></i>
                </div>
                <h3>自信・達成感</h3>
                <p>作品完成の喜びを通して、自分でできることへの自信を育てます。</p>
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
                  スケジュール
                </h3>
                <div class="info-item">
                  <span>はじめてクラス</span>
                  <span>土 9:00-10:00</span>
                </div>
                <div class="info-item">
                  <span>ベーシッククラス</span>
                  <span>土 10:30-12:00</span>
                </div>
                <div class="info-item">
                  <span>アドバンスクラス</span>
                  <span>日 14:00-15:30</span>
                </div>
                <div class="info-item">
                  <span>平日クラス</span>
                  <span>月・水 16:30-18:00</span>
                </div>
                <div class="info-item">
                  <span>定員</span>
                  <span>4名 / クラス</span>
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
                  <span>はじめて（月4回）</span>
                  <span class="price-highlight">2,400 THB</span>
                </div>
                <div class="info-item">
                  <span>ベーシック（月4回）</span>
                  <span class="price-highlight">3,000 THB</span>
                </div>
                <div class="info-item">
                  <span>アドバンス（月4回）</span>
                  <span class="price-highlight">3,600 THB</span>
                </div>
                <div class="info-item">
                  <span>教材利用料</span>
                  <span>月300 THB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">遊びながら未来のスキルを身につけよう</h2>
              <p class="cta-description">
                トイプロで楽しく学べば、プログラミングがもっと身近に感じられます。お子様の「やってみたい！」という気持ちを大切に、一緒に未来への一歩を踏み出しませんか？
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-rocket"></i>
                  無料体験を予約する
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-phone"></i>
                  詳細を問い合わせる
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