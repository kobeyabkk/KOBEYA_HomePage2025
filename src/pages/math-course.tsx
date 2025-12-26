export function mathCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>算数数学個別指導｜KOBEYA プログラミング教室 - オーダーメイドプリント対応</title>
      <meta name="description" content="KOBEYA（コベヤ）の算数数学個別指導。小学生から中学生まで、一人ひとりに合わせたオーダーメイドプリントで学習。算数プリント・国語プリントも対応。バンコクのプログラミング教室。">
      <meta name="keywords" content="算数,数学,個別指導,算数 プリント,国語 プリント,オーダーメイド,小学生,中学生,バンコク,KOBEYA,コベヤ,プログラミング教室">
      <meta property="og:title" content="算数数学個別指導｜KOBEYA">
      <meta property="og:description" content="一人ひとりに合わせたオーダーメイドプリントで学ぶ算数数学個別指導">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/courses/math">
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/courses/math">
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
      <style>
        :root {
          --primary-yellow: #FFC107;
          --accent-yellow: #FFD700;
          --light-yellow: #FFF9E6;
          --dark-yellow: #FF8F00;
          --base-white: #FFFFFF;
          --text-dark: #2D3748;
          --text-gray: #718096;
          --border-gray: #E2E8F0;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.8;
          color: var(--text-dark);
          background-color: var(--base-white);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--primary-yellow) 0%, var(--accent-yellow) 100%);
          padding: 60px 0;
          text-align: center;
        }

        .hero-icon {
          font-size: 3rem;
          color: var(--text-dark);
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-dark);
          opacity: 0.8;
          margin-bottom: 32px;
        }

        .back-home {
          display: inline-block;
          background: var(--base-white);
          color: var(--text-dark);
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .back-home:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        /* Content Section */
        .content-section {
          padding: 60px 0;
        }

        .content-card {
          background: var(--base-white);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 2px solid var(--border-gray);
          margin-bottom: 40px;
        }

        .content-card h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 3px solid var(--primary-yellow);
        }

        .content-card p {
          font-size: 1.05rem;
          line-height: 2;
          color: var(--text-gray);
          margin-bottom: 16px;
        }

        .content-card ul {
          list-style: none;
          padding-left: 0;
        }

        .content-card li {
          font-size: 1.05rem;
          line-height: 2;
          color: var(--text-gray);
          margin-bottom: 12px;
          padding-left: 28px;
          position: relative;
        }

        .content-card li:before {
          content: '▸';
          color: var(--primary-yellow);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .availability-notice {
          background: var(--light-yellow);
          border-left: 4px solid var(--dark-yellow);
          padding: 20px 24px;
          margin-top: 24px;
          border-radius: 8px;
        }

        .availability-notice p {
          color: var(--text-dark);
          font-weight: 600;
          margin-bottom: 0;
        }

        .availability-date {
          font-size: 0.95rem;
          color: var(--text-gray);
          font-weight: 400;
          margin-top: 8px;
        }

        /* CTA Section */
        .cta-section {
          background: var(--light-yellow);
          padding: 60px 0;
          text-align: center;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 24px;
        }

        .cta-description {
          font-size: 1.1rem;
          color: var(--text-gray);
          margin-bottom: 32px;
        }

        .cta-button {
          display: inline-block;
          background: var(--primary-yellow);
          color: var(--text-dark);
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
        }

        .cta-button:hover {
          background: var(--accent-yellow);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 193, 7, 0.4);
        }

        .cta-button i {
          margin-right: 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .content-card {
            padding: 28px 20px;
          }

          .content-card h2 {
            font-size: 1.5rem;
          }

          .content-card p,
          .content-card li {
            font-size: 1rem;
          }

          .cta-title {
            font-size: 1.6rem;
          }
        }
      </style>
    </head>
    <body>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <h1 class="hero-title">算数数学個別指導</h1>
          <p class="hero-subtitle">小中高校生の算数・数学を丁寧に指導します</p>
          <a href="/" class="back-home">
            <i class="fas fa-home"></i>
            ホームに戻る
          </a>
        </div>
      </section>

      <!-- Content Section -->
      <section class="content-section">
        <div class="container">
          <div class="content-card">
            <h2>算数数学個別指導</h2>
            
            <p>
              小中高校生の算数・数学を指導します。iPadを使ったデジタルテキスト指導なので、リアル授業も可能ですが、オンライン受講がオススメです。生徒たちの貴重な時間を、通塾のために使わなくてもOK！
            </p>
            
            <p>
              オンラインであれば、日本への一時帰国の際も、本帰国後も継続して学習できます。
            </p>

            <div class="availability-notice">
              <p>＜現在の空きコマ状況＞</p>
              <p class="availability-date">2025.10現在</p>
              <p style="margin-top: 16px;">空きコマはありません。</p>
              <p>空き状況についてはお問い合わせください。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2 class="cta-title">お問い合わせ</h2>
          <p class="cta-description">
            空き状況やコース詳細については<br>
            お気軽にお問い合わせください
          </p>
          <a href="/contact" class="cta-button">
            <i class="fas fa-envelope"></i>
            お問い合わせフォーム
          </a>
        </div>
      </section>
    </body>
    </html>
  `
}