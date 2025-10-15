export function thinkthinkCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>シンクシンク - AI & プログラミングのKOBEYA</title>
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
          --think-blue: #00BCD4;
          --think-green: #4CAF50;
          --think-orange: #FF9800;
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
          background: linear-gradient(135deg, var(--think-blue) 0%, var(--think-green) 50%, var(--main-yellow) 100%);
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
          color: var(--think-blue);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Thinking Skills */
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
          border-radius: 16px;
          border: 3px solid transparent;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .skill-card:nth-child(1) {
          border-color: var(--think-blue);
        }

        .skill-card:nth-child(2) {
          border-color: var(--think-green);
        }

        .skill-card:nth-child(3) {
          border-color: var(--think-orange);
        }

        .skill-card:nth-child(4) {
          border-color: var(--main-yellow);
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .skill-card i {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .skill-card:nth-child(1) i { color: var(--think-blue); }
        .skill-card:nth-child(2) i { color: var(--think-green); }
        .skill-card:nth-child(3) i { color: var(--think-orange); }
        .skill-card:nth-child(4) i { color: var(--main-yellow); }

        .skill-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .skill-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* App Features */
        .features-section {
          padding: 80px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--think-blue), var(--think-green));
          color: var(--base-white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .feature-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Age & Levels */
        .levels-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .levels-timeline {
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
          background: linear-gradient(to bottom, var(--think-blue), var(--think-green), var(--think-orange));
          border-radius: 2px;
        }

        .level-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .level-step:nth-child(even) {
          flex-direction: row-reverse;
        }

        .level-content {
          flex: 1;
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          margin: 0 40px;
        }

        .level-number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 2;
          color: var(--base-white);
        }

        .level-step:nth-child(1) .level-number { background: var(--think-blue); }
        .level-step:nth-child(2) .level-number { background: var(--think-green); }
        .level-step:nth-child(3) .level-number { background: var(--think-orange); }

        .level-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .level-age {
          font-weight: 600;
          margin-bottom: 12px;
        }

        .level-step:nth-child(1) .level-age { color: var(--think-blue); }
        .level-step:nth-child(2) .level-age { color: var(--think-green); }
        .level-step:nth-child(3) .level-age { color: var(--think-orange); }

        .level-description {
          color: var(--text-gray);
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
          color: var(--think-blue);
          margin-bottom: 8px;
        }

        .stat-label {
          color: var(--text-gray);
          font-weight: 500;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .benefit-card {
          background: var(--hover-gray);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
        }

        .benefit-card i {
          font-size: 2.5rem;
          color: var(--think-blue);
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

        /* Class Schedule */
        .schedule-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .schedule-card {
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
          color: var(--think-blue);
        }

        .schedule-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-gray);
        }

        .schedule-item:last-child {
          border-bottom: none;
        }

        .schedule-item span:first-child {
          font-weight: 500;
          color: var(--text-dark);
        }

        .schedule-item span:last-child {
          color: var(--text-gray);
        }

        .price-highlight {
          color: var(--think-blue) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--think-blue) 0%, var(--think-green) 50%, var(--main-yellow) 100%);
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
          .schedule-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .skills-grid,
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .timeline-line {
            left: 30px;
            transform: none;
          }

          .level-number {
            left: 30px;
            transform: translateX(-50%);
          }

          .level-step {
            flex-direction: row !important;
            margin-left: 60px;
          }

          .level-step:nth-child(even) {
            flex-direction: row !important;
          }

          .level-content {
            margin: 0 0 0 20px;
          }

          .benefits-stats {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
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
              <i class="fas fa-brain"></i>
            </div>
            <h1 class="hero-title">シンクシンク</h1>
            <p class="hero-subtitle">
              思考力を鍛えるアプリで<br>
              楽しく論理的思考力とIQを向上させる
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
                <h2>科学的根拠に基づいた思考力育成</h2>
                <p>
                  シンクシンクは、世界的に有名な思考力育成アプリを使用した、科学的根拠に基づく学習コースです。ゲーム感覚で楽しみながら、論理的思考力、空間認識能力、試行錯誤力を効果的に伸ばします。
                </p>
                <p>
                  慶應義塾大学との共同研究でも効果が実証されており、IQや学力の向上が科学的に証明されています。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-graduation-cap"></i>
                  <span>科学的根拠に基づいた教材</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-gamepad"></i>
                  <span>ゲーム感覚で楽しく学習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-chart-line"></i>
                  <span>IQ・学力向上効果を実証</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-puzzle-piece"></i>
                  <span>多様な思考力問題</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-target"></i>
                  <span>個人の習熟度に合わせた学習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-trophy"></i>
                  <span>国際的な賞を多数受賞</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Thinking Skills -->
        <section class="skills-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">身につく思考力</h2>
            <div class="skills-grid">
              <div class="skill-card">
                <i class="fas fa-sitemap"></i>
                <h3>論理的思考力</h3>
                <p>筋道を立てて考える力、原因と結果の関係を理解する力を育てます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-cube"></i>
                <h3>空間認識能力</h3>
                <p>立体的に物事を捉え、空間的な関係性を理解する力を養います。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-sync-alt"></i>
                <h3>試行錯誤力</h3>
                <p>失敗を恐れず、何度でもチャレンジする粘り強さを身につけます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-eye"></i>
                <h3>観察力・洞察力</h3>
                <p>細かな違いに気づき、パターンや法則を見つける力を伸ばします。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- App Features -->
        <section class="features-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">アプリの特徴</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>多様な問題形式</h3>
                <p>図形、迷路、パズル、論理問題など、100種類以上の多様な問題で飽きずに学習できます。</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-user-cog"></i>
                </div>
                <h3>個別適応学習</h3>
                <p>AIが一人ひとりの習熟度を分析し、最適な難易度の問題を自動で出題します。</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <h3>短時間集中学習</h3>
                <p>1日10-15分の短時間集中学習で、効果的に思考力を鍛えます。</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-award"></i>
                </div>
                <h3>進捗可視化</h3>
                <p>学習進捗や成長が一目でわかる仕組みで、やる気を持続させます。</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-globe"></i>
                </div>
                <h3>世界基準の品質</h3>
                <p>Google Play Awards受賞など、国際的にも高く評価されているアプリです。</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                  <i class="fas fa-heart"></i>
                </div>
                <h3>楽しい学習体験</h3>
                <p>ゲーミフィケーション要素で、子どもが夢中になって取り組みます。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Age & Levels -->
        <section class="levels-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">年齢別コース設定</h2>
            <div class="levels-timeline">
              <div class="timeline-line"></div>
              
              <div class="level-step">
                <div class="level-number">1</div>
                <div class="level-content">
                  <h4 class="level-title">スタータークラス</h4>
                  <div class="level-age">4〜6歳</div>
                  <p class="level-description">
                    色や形の識別、簡単なパターン認識から始めます。直感的に操作できる問題で思考力の土台を作ります。
                  </p>
                </div>
              </div>

              <div class="level-step">
                <div class="level-number">2</div>
                <div class="level-content">
                  <h4 class="level-title">ベーシッククラス</h4>
                  <div class="level-age">7〜9歳</div>
                  <p class="level-description">
                    論理的な推論や空間認識の基礎を学習。迷路や図形問題で段階的に思考力を向上させます。
                  </p>
                </div>
              </div>

              <div class="level-step">
                <div class="level-number">3</div>
                <div class="level-content">
                  <h4 class="level-title">アドバンスクラス</h4>
                  <div class="level-age">10〜12歳</div>
                  <p class="level-description">
                    複雑な論理問題や立体図形にチャレンジ。高度な思考力と問題解決能力を養います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits & Research -->
        <section class="benefits-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">効果・実績</h2>
            
            <div class="benefits-stats">
              <div class="stat-card">
                <div class="stat-number">150万</div>
                <div class="stat-label">ユーザー数</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">100+</div>
                <div class="stat-label">問題種類</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">15ヵ国</div>
                <div class="stat-label">利用国・地域</div>
              </div>

              <div class="stat-card">
                <div class="stat-number">95%</div>
                <div class="stat-label">継続率</div>
              </div>
            </div>

            <div class="benefits-grid">
              <div class="benefit-card">
                <i class="fas fa-brain"></i>
                <h4>IQ向上</h4>
                <p>慶応大学との研究でIQの有意な向上が実証されています</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-chart-line"></i>
                <h4>学力向上</h4>
                <p>算数・数学の成績向上効果が確認されています</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-hourglass-half"></i>
                <h4>集中力向上</h4>
                <p>短時間集中学習で、集中して取り組む習慣が身につきます</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-trophy"></i>
                <h4>自信向上</h4>
                <p>できた問題の積み重ねで自信と達成感を得られます</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-puzzle-piece"></i>
                <h4>問題解決力</h4>
                <p>様々な角度から問題にアプローチする力が身につきます</p>
              </div>

              <div class="benefit-card">
                <i class="fas fa-smile"></i>
                <h4>学習意欲</h4>
                <p>楽しく取り組めるため、自発的な学習習慣が育ちます</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Schedule & Pricing -->
        <section class="schedule-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">スケジュール・料金</h2>
            <div class="schedule-grid">
              <div class="schedule-card">
                <h3 class="card-title">
                  <i class="fas fa-calendar-alt"></i>
                  クラススケジュール
                </h3>
                <div class="schedule-item">
                  <span>スタータークラス</span>
                  <span>土 9:00-9:45</span>
                </div>
                <div class="schedule-item">
                  <span>ベーシッククラス</span>
                  <span>土 10:00-10:45</span>
                </div>
                <div class="schedule-item">
                  <span>アドバンスクラス</span>
                  <span>土 11:00-11:45</span>
                </div>
                <div class="schedule-item">
                  <span>平日個別指導</span>
                  <span>月〜金 16:00-17:00</span>
                </div>
                <div class="schedule-item">
                  <span>授業時間</span>
                  <span>45分 / 回</span>
                </div>
              </div>

              <div class="schedule-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="schedule-item">
                  <span>入会金</span>
                  <span>3,000 THB</span>
                </div>
                <div class="schedule-item">
                  <span>グループクラス（月4回）</span>
                  <span class="price-highlight">2,000 THB</span>
                </div>
                <div class="schedule-item">
                  <span>個別指導（月4回）</span>
                  <span class="price-highlight">3,200 THB</span>
                </div>
                <div class="schedule-item">
                  <span>アプリ利用料</span>
                  <span>なし</span>
                </div>
                <div class="schedule-item">
                  <span>体験授業</span>
                  <span style="color: var(--think-green); font-weight: 600;">無料</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">科学的に証明された思考力育成を始めよう</h2>
              <p class="cta-description">
                シンクシンクで楽しく思考力を鍛えて、お子様の可能性を最大限に引き出しませんか？世界中で愛用されている思考力アプリで、確実な成長を実感してください。
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-brain"></i>
                  無料体験を試す
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