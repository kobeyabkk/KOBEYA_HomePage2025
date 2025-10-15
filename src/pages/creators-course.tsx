export function creatorsCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>クリエイターズコース - AI & プログラミングのKOBEYA</title>
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
          --creator-purple: #9C27B0;
          --creator-pink: #E91E63;
          --creator-orange: #FF5722;
          --creator-green: #4CAF50;
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
          background: linear-gradient(135deg, var(--creator-purple) 0%, var(--creator-pink) 30%, var(--creator-orange) 70%, var(--main-yellow) 100%);
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
          color: var(--creator-purple);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Creative Areas */
        .areas-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .area-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 16px;
          border: 3px solid transparent;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .area-card:nth-child(1) {
          border-color: var(--creator-purple);
        }

        .area-card:nth-child(2) {
          border-color: var(--creator-pink);
        }

        .area-card:nth-child(3) {
          border-color: var(--creator-orange);
        }

        .area-card:nth-child(4) {
          border-color: var(--creator-green);
        }

        .area-card:nth-child(5) {
          border-color: var(--main-yellow);
        }

        .area-card:nth-child(6) {
          border-color: var(--creator-purple);
        }

        .area-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .area-card:nth-child(1)::before { background: var(--creator-purple); }
        .area-card:nth-child(2)::before { background: var(--creator-pink); }
        .area-card:nth-child(3)::before { background: var(--creator-orange); }
        .area-card:nth-child(4)::before { background: var(--creator-green); }
        .area-card:nth-child(5)::before { background: var(--main-yellow); }
        .area-card:nth-child(6)::before { background: var(--creator-purple); }

        .area-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .area-card i {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .area-card:nth-child(1) i { color: var(--creator-purple); }
        .area-card:nth-child(2) i { color: var(--creator-pink); }
        .area-card:nth-child(3) i { color: var(--creator-orange); }
        .area-card:nth-child(4) i { color: var(--creator-green); }
        .area-card:nth-child(5) i { color: var(--main-yellow); }
        .area-card:nth-child(6) i { color: var(--creator-purple); }

        .area-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .area-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Tools & Software */
        .tools-section {
          padding: 80px 0;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .tool-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .tool-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
          color: var(--base-white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 20px;
        }

        .tool-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .tool-category {
          color: var(--creator-purple);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .tool-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Learning Process */
        .process-section {
          background: var(--hover-gray);
          padding: 60px 0;
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
          top: 40px;
          right: -20px;
          width: 40px;
          height: 2px;
          background: var(--creator-purple);
          opacity: 0.3;
        }

        .process-step:last-child::after {
          display: none;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: var(--base-white);
          position: relative;
        }

        .process-step:nth-child(1) .step-icon {
          background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
        }

        .process-step:nth-child(2) .step-icon {
          background: linear-gradient(135deg, var(--creator-pink), var(--creator-orange));
        }

        .process-step:nth-child(3) .step-icon {
          background: linear-gradient(135deg, var(--creator-orange), var(--creator-green));
        }

        .process-step:nth-child(4) .step-icon {
          background: linear-gradient(135deg, var(--creator-green), var(--main-yellow));
        }

        .process-step:nth-child(5) .step-icon {
          background: linear-gradient(135deg, var(--main-yellow), var(--creator-purple));
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

        /* Portfolio Section */
        .portfolio-section {
          padding: 80px 0;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .portfolio-card {
          background: var(--base-white);
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .portfolio-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--base-white);
          font-size: 3rem;
          position: relative;
        }

        .portfolio-card:nth-child(1) .portfolio-image {
          background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
        }

        .portfolio-card:nth-child(2) .portfolio-image {
          background: linear-gradient(135deg, var(--creator-pink), var(--creator-orange));
        }

        .portfolio-card:nth-child(3) .portfolio-image {
          background: linear-gradient(135deg, var(--creator-orange), var(--creator-green));
        }

        .portfolio-card:nth-child(4) .portfolio-image {
          background: linear-gradient(135deg, var(--creator-green), var(--main-yellow));
        }

        .portfolio-card:nth-child(5) .portfolio-image {
          background: linear-gradient(135deg, var(--main-yellow), var(--creator-purple));
        }

        .portfolio-card:nth-child(6) .portfolio-image {
          background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
        }

        .portfolio-content {
          padding: 24px;
        }

        .portfolio-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .portfolio-type {
          color: var(--creator-purple);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .portfolio-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Benefits */
        .benefits-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .benefit-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
        }

        .benefit-card i {
          font-size: 2.5rem;
          color: var(--creator-purple);
          margin-bottom: 16px;
        }

        .benefit-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .benefit-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Schedule & Pricing */
        .info-section {
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
          color: var(--creator-purple);
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
          color: var(--creator-purple) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--creator-purple) 0%, var(--creator-pink) 30%, var(--creator-orange) 70%, var(--main-yellow) 100%);
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

          .areas-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .tools-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .process-step::after {
            display: none;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 20px;
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
              <i class="fas fa-paint-brush"></i>
            </div>
            <h1 class="hero-title">クリエイターズコース</h1>
            <p class="hero-subtitle">
              デジタルクリエイション全般を学ぶ<br>
              総合的なクリエイティブスキル習得コース
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
                <h2>創造力を形にする総合学習</h2>
                <p>
                  クリエイターズコースは、デジタル時代に必要なクリエイティブスキルを総合的に学ぶコースです。動画編集、グラフィックデザイン、ウェブサイト制作、音楽制作、3Dモデリングなど、幅広い分野を体験できます。
                </p>
                <p>
                  「作りたい」という気持ちを大切にし、プロが使用するツールを使って本格的な作品制作を行います。将来のクリエイター、デザイナー、エンジニアを目指す方に最適なコースです。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-video"></i>
                  <span>動画編集・映像制作</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-palette"></i>
                  <span>グラフィックデザイン</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-code"></i>
                  <span>ウェブサイト制作</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-music"></i>
                  <span>音楽・サウンド制作</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-cube"></i>
                  <span>3Dモデリング・アニメーション</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-camera"></i>
                  <span>写真編集・加工</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Creative Areas -->
        <section class="areas-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">学習分野</h2>
            <div class="areas-grid">
              <div class="area-card">
                <i class="fas fa-video"></i>
                <h3>動画編集・映像制作</h3>
                <p>YouTubeやTikTokで使える動画編集スキル。カット、エフェクト、音楽同期などの基本から応用まで。</p>
              </div>

              <div class="area-card">
                <i class="fas fa-palette"></i>
                <h3>グラフィックデザイン</h3>
                <p>ポスター、チラシ、ロゴデザインなど。デザインの基本原則と実践的な制作スキルを習得。</p>
              </div>

              <div class="area-card">
                <i class="fas fa-globe"></i>
                <h3>ウェブサイト制作</h3>
                <p>HTML、CSS、JavaScriptを使った本格的なウェブサイト制作。レスポンシブデザインにも対応。</p>
              </div>

              <div class="area-card">
                <i class="fas fa-music"></i>
                <h3>音楽・サウンド制作</h3>
                <p>楽曲制作、効果音作成、ポッドキャスト編集など。音の世界での表現技術を学習。</p>
              </div>

              <div class="area-card">
                <i class="fas fa-cubes"></i>
                <h3>3Dモデリング</h3>
                <p>Blenderを使った3Dオブジェクト制作。アニメーション、レンダリングまでの一連の流れ。</p>
              </div>

              <div class="area-card">
                <i class="fas fa-camera"></i>
                <h3>写真編集・加工</h3>
                <p>写真の補正、合成、アーティスティックな加工。SNS映えする画像制作技術。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Tools & Software -->
        <section class="tools-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">使用ツール・ソフトウェア</h2>
            <div class="tools-grid">
              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-cut"></i>
                </div>
                <h4>DaVinci Resolve</h4>
                <div class="tool-category">動画編集</div>
                <p>プロレベルの動画編集・カラーグレーディングソフト</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-image"></i>
                </div>
                <h4>GIMP / Photoshop</h4>
                <div class="tool-category">画像編集</div>
                <p>本格的な画像編集・デザインツール</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-vector-square"></i>
                </div>
                <h4>Inkscape / Illustrator</h4>
                <div class="tool-category">ベクターデザイン</div>
                <p>ロゴ・イラスト制作用ベクターグラフィックツール</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-cube"></i>
                </div>
                <h4>Blender</h4>
                <div class="tool-category">3D制作</div>
                <p>3Dモデリング・アニメーション・レンダリング統合ソフト</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-code"></i>
                </div>
                <h4>VS Code</h4>
                <div class="tool-category">ウェブ開発</div>
                <p>HTML、CSS、JavaScript開発環境</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-music"></i>
                </div>
                <h4>Audacity</h4>
                <div class="tool-category">音声編集</div>
                <p>音楽制作・ポッドキャスト編集ソフト</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-palette"></i>
                </div>
                <h4>Canva</h4>
                <div class="tool-category">デザイン</div>
                <p>初心者でも使いやすいデザインプラットフォーム</p>
              </div>

              <div class="tool-card">
                <div class="tool-icon">
                  <i class="fas fa-laptop"></i>
                </div>
                <h4>Figma</h4>
                <div class="tool-category">UI/UXデザイン</div>
                <p>ウェブサイト・アプリのデザインツール</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Process -->
        <section class="process-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">学習プロセス</h2>
            <div class="process-grid">
              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <h4 class="step-title">アイデア発想</h4>
                <p class="step-description">自分の興味や体験から作品のアイデアを見つけます</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-pencil-ruler"></i>
                </div>
                <h4 class="step-title">企画・設計</h4>
                <p class="step-description">作品の構成や必要な技術を計画します</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-tools"></i>
                </div>
                <h4 class="step-title">制作・実装</h4>
                <p class="step-description">適切なツールを使って実際に作品を制作します</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <h4 class="step-title">改良・完成</h4>
                <p class="step-description">フィードバックを受けて作品をブラッシュアップします</p>
              </div>

              <div class="process-step">
                <div class="step-icon">
                  <i class="fas fa-share-alt"></i>
                </div>
                <h4 class="step-title">発表・共有</h4>
                <p class="step-description">完成した作品を発表し、経験を共有します</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Portfolio Examples -->
        <section class="portfolio-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">制作作品例</h2>
            <div class="portfolio-grid">
              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-play"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">オリジナル動画作品</h4>
                  <div class="portfolio-type">動画制作</div>
                  <p class="portfolio-description">
                    ストーリー構成から撮影、編集まで一貫して制作したショートムービー作品。
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-globe"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">個人ウェブサイト</h4>
                  <div class="portfolio-type">ウェブ制作</div>
                  <p class="portfolio-description">
                    レスポンシブデザインで作成した自分だけのポートフォリオサイト。
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-image"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">デジタルアート</h4>
                  <div class="portfolio-type">グラフィック</div>
                  <p class="portfolio-description">
                    デジタルツールを駆使して制作したオリジナルイラスト・ポスター作品。
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-cube"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">3Dアニメーション</h4>
                  <div class="portfolio-type">3D制作</div>
                  <p class="portfolio-description">
                    Blenderで制作した3Dキャラクターとアニメーション作品。
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-music"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">オリジナル楽曲</h4>
                  <div class="portfolio-type">音楽制作</div>
                  <p class="portfolio-description">
                    作詞・作曲から録音・ミックスまで一人で手がけたオリジナル楽曲。
                  </p>
                </div>
              </div>

              <div class="portfolio-card">
                <div class="portfolio-image">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="portfolio-content">
                  <h4 class="portfolio-title">アプリUI デザイン</h4>
                  <div class="portfolio-type">UI/UX</div>
                  <p class="portfolio-description">
                    スマートフォンアプリの使いやすいユーザーインターフェースデザイン。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits -->
        <section class="benefits-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">身につく能力</h2>
            <div class="benefits-grid">
              <div class="benefit-card">
                <i class="fas fa-lightbulb"></i>
                <h4>創造性・発想力</h4>
                <p>新しいアイデアを生み出し、独創的な作品を創造する力を育てます。</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-tools"></i>
                <h4>技術的スキル</h4>
                <p>プロが使用するツールを習得し、実践的な制作技術を身につけます。</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-eye"></i>
                <h4>デザイン思考</h4>
                <p>美しく機能的なデザインを考える審美眼と設計能力を養います。</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-puzzle-piece"></i>
                <h4>問題解決能力</h4>
                <p>技術的な課題に直面した時の解決策を考える力を伸ばします。</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-users"></i>
                <h4>コミュニケーション力</h4>
                <p>作品を通して自分の考えを他者に伝える表現力を育てます。</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-trophy"></i>
                <h4>ポートフォリオ構築</h4>
                <p>将来の進学・就職で活用できる作品集を制作します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Schedule & Pricing -->
        <section class="info-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">スケジュール・料金</h2>
            <div class="info-grid">
              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-calendar-alt"></i>
                  クラススケジュール
                </h3>
                <div class="info-item">
                  <span>ベーシッククラス</span>
                  <span>土 10:00-12:00</span>
                </div>
                <div class="info-item">
                  <span>アドバンスクラス</span>
                  <span>日 10:00-12:00</span>
                </div>
                <div class="info-item">
                  <span>平日クラス</span>
                  <span>水・金 17:00-19:00</span>
                </div>
                <div class="info-item">
                  <span>個別指導</span>
                  <span>月〜金 予約制</span>
                </div>
                <div class="info-item">
                  <span>授業時間</span>
                  <span>2時間 / 回</span>
                </div>
              </div>

              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="info-item">
                  <span>入会金</span>
                  <span>6,000 THB</span>
                </div>
                <div class="info-item">
                  <span>ベーシック（月4回）</span>
                  <span class="price-highlight">4,200 THB</span>
                </div>
                <div class="info-item">
                  <span>アドバンス（月4回）</span>
                  <span class="price-highlight">5,200 THB</span>
                </div>
                <div class="info-item">
                  <span>個別指導（1回）</span>
                  <span class="price-highlight">1,800 THB</span>
                </div>
                <div class="info-item">
                  <span>ソフトウェア使用料</span>
                  <span>なし</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">あなたの創造性を形にしよう</h2>
              <p class="cta-description">
                クリエイターズコースで多様なデジタル表現技術を学び、自分だけの作品を世界に発信しませんか？プロが使うツールで本格的な制作体験を始めましょう。
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-palette"></i>
                  無料体験に参加する
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-question-circle"></i>
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