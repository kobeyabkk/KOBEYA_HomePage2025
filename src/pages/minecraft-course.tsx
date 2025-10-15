export function minecraftCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>マイクラッチコース - AI & プログラミングのKOBEYA</title>
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
          --minecraft-green: #5F8A5F;
          --minecraft-brown: #8B4513;
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
          background: linear-gradient(135deg, var(--minecraft-green) 0%, var(--main-yellow) 100%);
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
          color: var(--minecraft-green);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Minecraft Skills */
        .skills-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .skill-card i {
          font-size: 2.5rem;
          color: var(--minecraft-green);
          margin-bottom: 16px;
        }

        .skill-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .skill-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Learning Journey */
        .journey-section {
          padding: 80px 0;
        }

        .journey-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--minecraft-green), var(--main-yellow));
          border-radius: 2px;
        }

        .journey-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .journey-step:nth-child(even) {
          flex-direction: row-reverse;
        }

        .step-content {
          flex: 1;
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          margin: 0 40px;
        }

        .step-number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: var(--minecraft-green);
          color: var(--base-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 2;
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .step-description {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Age & Levels */
        .levels-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .level-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 3px solid var(--minecraft-green);
          text-align: center;
        }

        .level-card i {
          font-size: 2.5rem;
          color: var(--minecraft-green);
          margin-bottom: 16px;
        }

        .level-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .level-card .age {
          color: var(--minecraft-green);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .level-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
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
          color: var(--minecraft-green);
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
          color: var(--minecraft-green) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--minecraft-green) 0%, var(--main-yellow) 100%);
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

          .journey-step {
            flex-direction: row !important;
            margin-left: 60px;
          }

          .journey-step:nth-child(even) {
            flex-direction: row !important;
          }

          .step-content {
            margin: 0 0 0 20px;
          }

          .levels-grid {
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
              <i class="fas fa-cube"></i>
            </div>
            <h1 class="hero-title">マイクラッチコース</h1>
            <p class="hero-subtitle">
              大人気のマインクラフトで楽しく学ぶ<br>
              プログラミングの基礎とクリエイティブ思考
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
                <h2>遊びながら学ぶプログラミング</h2>
                <p>
                  子どもたちに大人気のマインクラフトを使って、楽しみながらプログラミングの基礎を学びます。ブロックを組み合わせてコードを作る「マイクラッチ」で、論理的思考力と創造性を同時に育てます。
                </p>
                <p>
                  ゲームの世界で自分だけの作品を作りながら、プログラミングの概念を自然に身につけられる、初心者に最適なコースです。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-gamepad"></i>
                  <span>ゲーム感覚で楽しく学習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-puzzle-piece"></i>
                  <span>ブロック型プログラミング</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-building"></i>
                  <span>3D空間での創作活動</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-brain"></i>
                  <span>論理的思考力の育成</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>チームワークと協力</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-trophy"></i>
                  <span>達成感と自信の獲得</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Programming Skills -->
        <section class="skills-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">身につくスキル</h2>
            <div class="skills-grid">
              <div class="skill-card">
                <i class="fas fa-code"></i>
                <h3>プログラミング基礎</h3>
                <p>順次処理、条件分岐、繰り返しなど、プログラミングの基本的な考え方を学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-sitemap"></i>
                <h3>アルゴリズム思考</h3>
                <p>問題を分解し、効率的な解決手順を考える論理的思考力を育てます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-lightbulb"></i>
                <h3>創造力・想像力</h3>
                <p>自由な発想でマインクラフトの世界に独自の作品を創り出します。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-search"></i>
                <h3>問題解決能力</h3>
                <p>バグの発見や修正を通じて、試行錯誤しながら解決策を見つける力を養います。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-cubes"></i>
                <h3>空間認識能力</h3>
                <p>3次元空間でのブロック配置を通じて、立体的な思考力を発達させます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-comments"></i>
                <h3>プレゼンテーション</h3>
                <p>作った作品を発表し、他の人に伝える表現力とコミュニケーション能力を育てます。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Journey -->
        <section class="journey-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習の流れ</h2>
            <div class="journey-timeline">
              <div class="timeline-line"></div>
              
              <div class="journey-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4 class="step-title">マインクラフトの基本操作</h4>
                  <p class="step-description">ブロックの配置、アイテムの使い方など、マインクラフトの基本的な操作方法を学びます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4 class="step-title">マイクラッチの使い方</h4>
                  <p class="step-description">ブロックを組み合わせてプログラムを作る「マイクラッチ」の操作方法を覚えます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4 class="step-title">簡単なプログラム作成</h4>
                  <p class="step-description">キャラクターを動かしたり、ブロックを自動で配置したりする簡単なプログラムを作ります。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4 class="step-title">条件分岐と繰り返し</h4>
                  <p class="step-description">「もし〜なら」「〜を繰り返す」などの基本的なプログラミング構造を学びます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4 class="step-title">オリジナル作品制作</h4>
                  <p class="step-description">学んだ技術を活かして、自分だけの建物や装置を作ります。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">6</div>
                <div class="step-content">
                  <h4 class="step-title">作品発表・共有</h4>
                  <p class="step-description">完成した作品をクラスメイトに発表し、お互いの作品を鑑賞し合います。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Levels -->
        <section class="levels-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">レベル・対象年齢</h2>
            <div class="levels-grid">
              <div class="level-card">
                <i class="fas fa-baby"></i>
                <h4>ビギナー</h4>
                <div class="age">7〜9歳</div>
                <p>マインクラフトとプログラミングの基礎から丁寧に学習します。</p>
              </div>

              <div class="level-card">
                <i class="fas fa-child"></i>
                <h4>スタンダード</h4>
                <div class="age">10〜12歳</div>
                <p>条件分岐や繰り返しを使った、より複雑なプログラムに挑戦します。</p>
              </div>

              <div class="level-card">
                <i class="fas fa-user-graduate"></i>
                <h4>アドバンス</h4>
                <div class="age">13歳〜</div>
                <p>関数や変数を使った高度なプログラミングテクニックを習得します。</p>
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
                  スケジュール
                </h3>
                <div class="info-item">
                  <span>平日クラス</span>
                  <span>火・木 16:00-17:30</span>
                </div>
                <div class="info-item">
                  <span>土曜クラス</span>
                  <span>土 10:00-11:30 / 14:00-15:30</span>
                </div>
                <div class="info-item">
                  <span>日曜クラス</span>
                  <span>日 13:00-14:30</span>
                </div>
                <div class="info-item">
                  <span>授業時間</span>
                  <span>90分 / 回</span>
                </div>
                <div class="info-item">
                  <span>定員</span>
                  <span>6名 / クラス</span>
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
                  <span>月4回コース</span>
                  <span class="price-highlight">2,800 THB</span>
                </div>
                <div class="info-item">
                  <span>月8回コース</span>
                  <span class="price-highlight">5,200 THB</span>
                </div>
                <div class="info-item">
                  <span>教材費</span>
                  <span>なし</span>
                </div>
                <div class="info-item">
                  <span>体験授業</span>
                  <span style="color: var(--minecraft-green); font-weight: 600;">無料</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">マインクラフトでプログラミングを始めよう</h2>
              <p class="cta-description">
                ゲーム感覚で楽しく学べるマイクラッチコース。お子様の「好き」を「学び」に変えて、プログラミングの世界への第一歩を踏み出しませんか？
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-play"></i>
                  無料体験に参加する
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-info-circle"></i>
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