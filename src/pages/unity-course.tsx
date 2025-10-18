export function unityCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Unityコース - AI & プログラミングのKOBEYA</title>
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
          --unity-blue: #1976D2;
          --unity-cyan: #00BCD4;
          --unity-purple: #673AB7;
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
          background: linear-gradient(135deg, var(--unity-blue) 0%, var(--unity-cyan) 50%, var(--main-yellow) 100%);
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
          color: var(--unity-blue);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Unity Skills */
        .skills-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 3px solid var(--unity-blue);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--unity-blue), var(--unity-cyan), var(--unity-purple));
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .skill-card i {
          font-size: 3rem;
          color: var(--unity-blue);
          margin-bottom: 20px;
        }

        .skill-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--text-dark);
        }

        .skill-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Learning Path */
        .path-section {
          padding: 80px 0;
        }

        .path-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--unity-blue), var(--unity-cyan), var(--unity-purple));
          border-radius: 2px;
        }

        .path-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .path-step:nth-child(even) {
          flex-direction: row-reverse;
        }

        .step-content {
          flex: 1;
          background: var(--base-white);
          padding: 30px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          margin: 0 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .step-number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: var(--unity-blue);
          color: var(--base-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          z-index: 2;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .step-description {
          color: var(--text-gray);
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .step-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .skill-tag {
          background: var(--unity-cyan);
          color: var(--base-white);
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Project Gallery */
        .projects-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--base-white);
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, var(--unity-blue), var(--unity-cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--base-white);
          font-size: 3rem;
        }

        .project-content {
          padding: 24px;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .project-level {
          color: var(--unity-blue);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .project-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Target Students */
        .target-section {
          padding: 80px 0;
        }

        .target-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .target-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          text-align: center;
          position: relative;
        }

        .target-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--unity-blue), var(--unity-cyan), var(--unity-purple), var(--main-yellow));
          border-radius: 16px;
          z-index: -1;
        }

        .target-card i {
          font-size: 3rem;
          color: var(--unity-blue);
          margin-bottom: 20px;
        }

        .target-card h4 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .target-age {
          color: var(--unity-cyan);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .target-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Requirements */
        .requirements-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .requirements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .requirements-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .requirements-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .requirements-title i {
          color: var(--unity-blue);
        }

        .requirement-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          padding: 12px;
          background: var(--hover-gray);
          border-radius: 8px;
        }

        .requirement-item i {
          color: var(--unity-blue);
          margin-top: 4px;
          width: 16px;
        }

        .requirement-item span {
          color: var(--text-gray);
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
          color: var(--unity-blue);
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
          color: var(--unity-blue) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--unity-blue) 0%, var(--unity-cyan) 50%, var(--main-yellow) 100%);
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
          .requirements-grid,
          .info-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .timeline-line {
            left: 30px;
            transform: none;
          }

          .step-number {
            left: 30px;
            transform: translateX(-50%);
          }

          .path-step {
            flex-direction: row !important;
            margin-left: 60px;
          }

          .path-step:nth-child(even) {
            flex-direction: row !important;
          }

          .step-content {
            margin: 0 0 0 20px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .target-grid {
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
              <i class="fas fa-gamepad"></i>
            </div>
            <h1 class="hero-title">Unityコース</h1>
            <p class="hero-subtitle">
              世界標準のゲームエンジンで<br>
              本格的なゲーム開発とプログラミングを学ぶ
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
                <h2>プロが使うツールで本格ゲーム開発</h2>
                <p>
                  Unityは世界中のゲーム開発者が使用する本格的なゲームエンジンです。任天堂Switch、PlayStation、スマートフォンなど、様々なプラットフォームで動作するゲームを作ることができます。
                </p>
                <p>
                  プログラミング（C#）、3Dモデリング、アニメーション、サウンドなど、ゲーム開発に必要な技術を総合的に学び、将来のゲーム開発者やプログラマーを目指します。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-code"></i>
                  <span>C#プログラミング習得</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-cube"></i>
                  <span>3Dゲーム開発技術</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-mobile-alt"></i>
                  <span>マルチプラットフォーム対応</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-paint-brush"></i>
                  <span>グラフィック・アニメーション</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>チーム開発経験</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-trophy"></i>
                  <span>ポートフォリオ作成</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Unity Skills -->
        <section class="skills-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">身につく技術スキル</h2>
            <div class="skills-grid">
              <div class="skill-card">
                <i class="fas fa-laptop-code"></i>
                <h3>C#プログラミング</h3>
                <p>Unityで使用するC#言語を基礎から学習。変数、条件分岐、ループ、関数など、本格的なプログラミング技術を習得します。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-cubes"></i>
                <h3>3Dモデリング・アニメーション</h3>
                <p>3Dオブジェクトの作成、テクスチャの適用、キャラクターアニメーションなど、視覚的な表現技術を学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-cogs"></i>
                <h3>ゲームシステム設計</h3>
                <p>ゲームの仕組み、ルール設計、バランス調整など、面白いゲームを作るための企画・設計能力を育てます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-bug"></i>
                <h3>デバッグ・テスト</h3>
                <p>バグの発見と修正、テストプレイを通した品質向上など、開発プロセスの重要な技術を身につけます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-mobile-alt"></i>
                <h3>マルチプラットフォーム開発</h3>
                <p>PC、スマートフォン、ゲーム機など、様々な機器で動作するゲームの開発技術を学習します。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-project-diagram"></i>
                <h3>プロジェクト管理</h3>
                <p>開発計画の立て方、進捗管理、チームでの協力作業など、プロジェクトを成功に導く管理能力を養います。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Path -->
        <section class="path-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習ロードマップ</h2>
            <div class="path-timeline">
              <div class="timeline-line"></div>
              
              <div class="path-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4 class="step-title">Unity基礎・C#入門</h4>
                  <p class="step-description">
                    Unityエディターの使い方を覚え、C#プログラミングの基本文法を学習します。簡単な2Dゲームを作りながら基礎を固めます。
                  </p>
                  <div class="step-skills">
                    <span class="skill-tag">Unity操作</span>
                    <span class="skill-tag">C#基礎</span>
                    <span class="skill-tag">2Dゲーム</span>
                  </div>
                </div>
              </div>

              <div class="path-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4 class="step-title">ゲームシステム開発</h4>
                  <p class="step-description">
                    キャラクター操作、当たり判定、スコアシステムなど、ゲームに必要な基本システムの作り方を学習します。
                  </p>
                  <div class="step-skills">
                    <span class="skill-tag">物理演算</span>
                    <span class="skill-tag">UI設計</span>
                    <span class="skill-tag">イベント処理</span>
                  </div>
                </div>
              </div>

              <div class="path-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4 class="step-title">3Dゲーム制作</h4>
                  <p class="step-description">
                    3D空間でのゲーム制作に挑戦。3Dモデルの配置、カメラワーク、ライティングなどの技術を習得します。
                  </p>
                  <div class="step-skills">
                    <span class="skill-tag">3Dモデリング</span>
                    <span class="skill-tag">カメラ制御</span>
                    <span class="skill-tag">ライティング</span>
                  </div>
                </div>
              </div>

              <div class="path-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4 class="step-title">高度な機能実装</h4>
                  <p class="step-description">
                    AI、ネットワーク通信、データベース連携など、より高度な機能を持つゲームの開発技術を学びます。
                  </p>
                  <div class="step-skills">
                    <span class="skill-tag">AI制御</span>
                    <span class="skill-tag">ネットワーク</span>
                    <span class="skill-tag">データ管理</span>
                  </div>
                </div>
              </div>

              <div class="path-step">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4 class="step-title">オリジナルゲーム制作</h4>
                  <p class="step-description">
                    学んだ技術を活用して、完全オリジナルのゲームを企画から完成まで制作します。ポートフォリオとして活用できます。
                  </p>
                  <div class="step-skills">
                    <span class="skill-tag">企画設計</span>
                    <span class="skill-tag">総合制作</span>
                    <span class="skill-tag">プレゼン</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Project Examples -->
        <section class="projects-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">制作作品例</h2>
            <div class="projects-grid">
              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-running"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">2Dアクションゲーム</h4>
                  <div class="project-level">初級レベル</div>
                  <p class="project-description">
                    横スクロール型のアクションゲーム。ジャンプ、攻撃、アイテム収集などの基本要素を学習。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">パズルゲーム</h4>
                  <div class="project-level">初中級レベル</div>
                  <p class="project-description">
                    論理的思考が必要なパズルゲーム。ゲームロジックとUI設計の基礎を習得。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-car"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">3Dレーシングゲーム</h4>
                  <div class="project-level">中級レベル</div>
                  <p class="project-description">
                    3D空間での車両操作ゲーム。物理演算とカメラワークの応用技術を学習。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-rocket"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">シューティングゲーム</h4>
                  <div class="project-level">中上級レベル</div>
                  <p class="project-description">
                    敵AI、爆発エフェクト、サウンドシステムなど、総合的なゲーム開発技術を習得。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-globe"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">オープンワールドゲーム</h4>
                  <div class="project-level">上級レベル</div>
                  <p class="project-description">
                    広大な世界を自由に探索できるゲーム。高度な技術と大規模開発の経験を積む。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-users"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">マルチプレイヤーゲーム</h4>
                  <div class="project-level">上級レベル</div>
                  <p class="project-description">
                    ネットワーク技術を使った複数人同時プレイゲーム。最新技術への挑戦。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Target Students -->
        <section class="target-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">対象生徒・推奨レベル</h2>
            <div class="target-grid">
              <div class="target-card">
                <i class="fas fa-seedling"></i>
                <h4>Unity入門クラス</h4>
                <div class="target-age">12〜15歳</div>
                <p>
                  プログラミング初心者歓迎。パソコンの基本操作ができれば、ゼロからUnityとC#を学習できます。
                </p>
              </div>

              <div class="target-card">
                <i class="fas fa-rocket"></i>
                <h4>Unity応用クラス</h4>
                <div class="target-age">14〜17歳</div>
                <p>
                  基本的なプログラミング経験がある方向け。より高度なゲーム開発技術を習得します。
                </p>
              </div>

              <div class="target-card">
                <i class="fas fa-crown"></i>
                <h4>Unity上級クラス</h4>
                <div class="target-age">16歳〜大人</div>
                <p>
                  将来のゲーム業界就職を目指す方向け。プロレベルの技術とポートフォリオ制作を行います。
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Requirements -->
        <section class="requirements-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">受講要件・推奨環境</h2>
            <div class="requirements-grid">
              <div class="requirements-card">
                <h3 class="requirements-title">
                  <i class="fas fa-user-check"></i>
                  受講要件
                </h3>
                <div class="requirement-item">
                  <i class="fas fa-check"></i>
                  <span>パソコンの基本操作（マウス・キーボード）ができること</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-check"></i>
                  <span>英数字の入力ができること</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-check"></i>
                  <span>プログラミングへの興味と学習意欲があること</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-check"></i>
                  <span>継続的な学習への取り組み意識</span>
                </div>
              </div>

              <div class="requirements-card">
                <h3 class="requirements-title">
                  <i class="fas fa-desktop"></i>
                  推奨PC環境
                </h3>
                <div class="requirement-item">
                  <i class="fas fa-microchip"></i>
                  <span>CPU: Intel i5以上 / AMD Ryzen 5以上</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-memory"></i>
                  <span>メモリ: 8GB RAM以上（16GB推奨）</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-hdd"></i>
                  <span>ストレージ: 5GB以上の空き容量</span>
                </div>
                <div class="requirement-item">
                  <i class="fas fa-paint-brush"></i>
                  <span>グラフィック: DirectX 11対応</span>
                </div>
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
                  <span>Unity入門クラス</span>
                  <span>土 14:00-16:00</span>
                </div>
                <div class="info-item">
                  <span>Unity応用クラス</span>
                  <span>日 14:00-16:00</span>
                </div>
                <div class="info-item">
                  <span>Unity上級クラス</span>
                  <span>土 16:30-18:30</span>
                </div>
                <div class="info-item">
                  <span>平日個別指導</span>
                  <span>月〜金 18:00-20:00</span>
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
                  <span>8,000 THB</span>
                </div>
                <div class="info-item">
                  <span>入門クラス（月4回）</span>
                  <span class="price-highlight">4,800 THB</span>
                </div>
                <div class="info-item">
                  <span>応用クラス（月4回）</span>
                  <span class="price-highlight">5,600 THB</span>
                </div>
                <div class="info-item">
                  <span>上級クラス（月4回）</span>
                  <span class="price-highlight">6,400 THB</span>
                </div>
                <div class="info-item">
                  <span>個別指導（1回）</span>
                  <span class="price-highlight">2,000 THB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">プロのゲーム開発者への第一歩を踏み出そう</h2>
              <p class="cta-description">
                世界標準のUnityで本格的なゲーム開発を学び、将来の可能性を大きく広げませんか？プログラミングスキルと創造性を同時に育てて、夢の実現に向けてスタートしましょう。
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-gamepad"></i>
                  無料体験を申し込む
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-question-circle"></i>
                  詳細を相談する
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