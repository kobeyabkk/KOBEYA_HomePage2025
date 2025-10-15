export function steamCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>STEAMコース - AI & プログラミングのKOBEYA</title>
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
          --success-green: #48BB78;
          --info-blue: #4299E1;
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
          background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
          color: var(--text-dark);
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
          opacity: 0.8;
        }

        .cta-button {
          display: inline-block;
          background: var(--text-dark);
          color: var(--base-white);
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #1A202C;
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
          color: var(--main-yellow);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Course Details */
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .detail-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .detail-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .detail-card i {
          font-size: 3rem;
          color: var(--main-yellow);
          margin-bottom: 20px;
        }

        .detail-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--text-dark);
        }

        .detail-card p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Learning Path */
        .learning-path {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .path-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .step-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          position: relative;
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 30px;
          background: var(--main-yellow);
          color: var(--text-dark);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .step-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
          margin-top: 10px;
        }

        .step-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Target Age */
        .target-section {
          text-align: center;
        }

        .age-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .age-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--main-yellow);
        }

        .age-card i {
          font-size: 2.5rem;
          color: var(--main-yellow);
          margin-bottom: 16px;
        }

        .age-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .age-card p {
          color: var(--text-gray);
        }

        /* Schedule & Pricing */
        .schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 60px;
        }

        .schedule-card,
        .pricing-card {
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
          color: var(--main-yellow);
        }

        .schedule-item,
        .pricing-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-gray);
        }

        .schedule-item:last-child,
        .pricing-item:last-child {
          border-bottom: none;
        }

        .schedule-item span:first-child,
        .pricing-item span:first-child {
          font-weight: 500;
          color: var(--text-dark);
        }

        .schedule-item span:last-child,
        .pricing-item span:last-child {
          color: var(--text-gray);
        }

        .price-highlight {
          color: var(--main-yellow) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: var(--hover-gray);
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
          color: var(--text-dark);
        }

        .cta-description {
          font-size: 1.1rem;
          color: var(--text-gray);
          margin-bottom: 40px;
          line-height: 1.7;
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
          background: var(--main-yellow);
          color: var(--text-dark);
        }

        .cta-primary:hover {
          background: var(--accent-yellow);
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: var(--text-dark);
          color: var(--base-white);
        }

        .cta-secondary:hover {
          background: #1A202C;
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

          .details-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .path-steps {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .age-cards {
            grid-template-columns: 1fr 1fr;
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
              <i class="fas fa-atom"></i>
            </div>
            <h1 class="hero-title">STEAMコース</h1>
            <p class="hero-subtitle">
              Science・Technology・Engineering・Art・Mathematicsを<br>
              総合的に学ぶ創造力育成コース
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
                <h2>未来を創る力を育む総合学習</h2>
                <p>
                  STEAMコースは、科学（Science）・技術（Technology）・工学（Engineering）・芸術（Art）・数学（Mathematics）を統合した教育アプローチで、21世紀に必要な創造力と問題解決能力を育成します。
                </p>
                <p>
                  実験、工作、プログラミング、デザインなど多様な活動を通じて、子どもたちの好奇心を刺激し、自ら考え、創造する力を養います。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-flask"></i>
                  <span>科学実験・観察</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-robot"></i>
                  <span>ロボット・プログラミング</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-tools"></i>
                  <span>工作・エンジニアリング</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-palette"></i>
                  <span>アート・デザイン</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-calculator"></i>
                  <span>数学的思考</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-lightbulb"></i>
                  <span>創造的問題解決</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Course Details -->
        <section class="section" style="background: var(--hover-gray);">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">コースの特徴</h2>
            <div class="details-grid">
              <div class="detail-card">
                <i class="fas fa-microscope"></i>
                <h3>実験・観察</h3>
                <p>身近な現象から科学の原理を学び、観察力と仮説検証の思考プロセスを身につけます。安全で楽しい実験を通じて科学への興味を育てます。</p>
              </div>

              <div class="detail-card">
                <i class="fas fa-cogs"></i>
                <h3>工学・技術</h3>
                <p>レゴやロボット教材を使って機械の仕組みを理解し、プログラミングで動かします。論理的思考と創造力を同時に育成します。</p>
              </div>

              <div class="detail-card">
                <i class="fas fa-paint-brush"></i>
                <h3>アート・表現</h3>
                <p>デザイン思考やアート制作を通じて美的感性を養い、自分の考えを形にする表現力を育てます。</p>
              </div>

              <div class="detail-card">
                <i class="fas fa-chart-line"></i>
                <h3>数学・論理</h3>
                <p>遊びの中で数学的概念に触れ、パターン認識や論理的推論の基礎を楽しく学習します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Path -->
        <section class="learning-path">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習の流れ</h2>
            <div class="path-steps">
              <div class="step-card">
                <div class="step-number">1</div>
                <h4>観察・発見</h4>
                <p>身の回りの現象を観察し、「なぜ？」「どうして？」という疑問を見つけます。</p>
              </div>

              <div class="step-card">
                <div class="step-number">2</div>
                <h4>仮説・計画</h4>
                <p>疑問に対する予想を立て、確かめる方法を考えます。</p>
              </div>

              <div class="step-card">
                <div class="step-number">3</div>
                <h4>実験・制作</h4>
                <p>実験や工作を通じて仮説を検証し、新しいものを創り出します。</p>
              </div>

              <div class="step-card">
                <div class="step-number">4</div>
                <h4>分析・改善</h4>
                <p>結果を分析し、より良い解決策を考えて改善を重ねます。</p>
              </div>

              <div class="step-card">
                <div class="step-number">5</div>
                <h4>発表・共有</h4>
                <p>学んだことや作ったものを発表し、仲間と知識を共有します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Target Age -->
        <section class="section target-section">
          <div class="container">
            <h2 class="section-title">対象年齢・レベル</h2>
            <div class="age-cards">
              <div class="age-card">
                <i class="fas fa-seedling"></i>
                <h4>5〜6歳</h4>
                <p>好奇心を育てる<br>基礎コース</p>
              </div>

              <div class="age-card">
                <i class="fas fa-child"></i>
                <h4>7〜9歳</h4>
                <p>探究心を深める<br>発展コース</p>
              </div>

              <div class="age-card">
                <i class="fas fa-user-graduate"></i>
                <h4>10〜12歳</h4>
                <p>創造力を活かす<br>応用コース</p>
              </div>
            </div>

            <!-- Schedule & Pricing -->
            <div class="schedule-grid">
              <div class="schedule-card">
                <h3 class="card-title">
                  <i class="fas fa-calendar-alt"></i>
                  スケジュール
                </h3>
                <div class="schedule-item">
                  <span>平日クラス</span>
                  <span>月・水・金 16:00-17:30</span>
                </div>
                <div class="schedule-item">
                  <span>土曜日クラス</span>
                  <span>土 10:00-11:30 / 14:00-15:30</span>
                </div>
                <div class="schedule-item">
                  <span>日曜日クラス</span>
                  <span>日 10:00-11:30</span>
                </div>
                <div class="schedule-item">
                  <span>授業時間</span>
                  <span>90分 / 回</span>
                </div>
              </div>

              <div class="pricing-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="pricing-item">
                  <span>入会金</span>
                  <span>5,000 THB</span>
                </div>
                <div class="pricing-item">
                  <span>月4回コース</span>
                  <span class="price-highlight">3,200 THB</span>
                </div>
                <div class="pricing-item">
                  <span>月8回コース</span>
                  <span class="price-highlight">5,600 THB</span>
                </div>
                <div class="pricing-item">
                  <span>教材費</span>
                  <span>月500 THB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">STEAMコースで創造力を育もう</h2>
              <p class="cta-description">
                科学・技術・工学・芸術・数学の総合学習で、お子様の可能性を広げませんか？まずは無料体験授業で、楽しく学ぶSTEAM教育を体感してください。
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-calendar-check"></i>
                  無料体験申込み
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-question-circle"></i>
                  詳細お問い合わせ
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