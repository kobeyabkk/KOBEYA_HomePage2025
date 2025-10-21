export function contactPage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>お問い合わせ - AI & プログラミングのKOBEYA</title>
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
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 60px;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-gray);
          margin-bottom: 40px;
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 80px;
        }

        .contact-info {
          background: var(--hover-gray);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .contact-info h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-info h3 i {
          color: var(--main-yellow);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px;
          background: var(--base-white);
          border-radius: 8px;
          border: 1px solid var(--border-gray);
        }

        .contact-item i {
          color: var(--main-yellow);
          font-size: 1.2rem;
          width: 24px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .contact-item-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .contact-item-content p {
          color: var(--text-gray);
          line-height: 1.6;
        }

        .contact-item-content a {
          color: var(--main-yellow);
          text-decoration: none;
          font-weight: 500;
        }

        .contact-item-content a:hover {
          text-decoration: underline;
        }

        /* Contact Form */
        .contact-form {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .contact-form h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-form h3 i {
          color: var(--main-yellow);
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--border-gray);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--main-yellow);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: var(--main-yellow);
          color: var(--text-dark);
          padding: 16px 32px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover {
          background: var(--accent-yellow);
          transform: translateY(-2px);
        }

        /* Access Map */
        .access-section {
          background: var(--hover-gray);
          padding: 60px 0;
          margin-top: 80px;
        }

        .map-container {
          background: var(--base-white);
          border-radius: 16px;
          padding: 40px;
          border: 2px solid var(--border-gray);
          text-align: center;
        }

        .map-placeholder {
          background: var(--border-gray);
          height: 300px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-gray);
          margin: 20px 0;
        }

        /* FAQ Section */
        .faq-section {
          margin-top: 80px;
        }

        .faq-item {
          background: var(--base-white);
          border: 2px solid var(--border-gray);
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .faq-question {
          padding: 24px;
          background: var(--hover-gray);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: between;
          gap: 16px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .faq-question i {
          color: var(--main-yellow);
          flex-shrink: 0;
        }

        .faq-answer {
          padding: 24px;
          color: var(--text-gray);
          line-height: 1.7;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section {
            padding: 40px 0;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-info,
          .contact-form {
            padding: 24px;
          }

          .access-section {
            padding: 40px 0;
            margin-top: 40px;
          }

          .map-container {
            padding: 24px;
          }
        }
      </style>
    </head>
    <body>
      <main>
        <!-- Contact Section -->
        <section class="section">
          <div class="container">
            <h1 class="section-title">お問い合わせ</h1>
            <p class="section-subtitle">
              プログラミング教室へのご質問・お申込みはこちらからお気軽にどうぞ
            </p>

            <div class="contact-grid">
              <!-- Contact Information -->
              <div class="contact-info">
                <h3><i class="fas fa-info-circle"></i>教室情報</h3>

                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="contact-item-content">
                    <h4>住所</h4>
                    <p>
                      フジスーパー2号店 2階<br>
                      693 Sukhumvit Road, Wattana,<br>
                      Bangkok 10110, Thailand
                    </p>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <div class="contact-item-content">
                    <h4>電話番号</h4>
                    <p><a href="tel:02-103-6708">02-103-6708</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <div class="contact-item-content">
                    <h4>メールアドレス</h4>
                    <p><a href="mailto:kobeyabkk@gmail.com">kobeyabkk@gmail.com</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <i class="fas fa-clock"></i>
                  <div class="contact-item-content">
                    <h4>受付時間</h4>
                    <p>
                      平日: 9:00〜21:00<br>
                      土曜: 9:00〜18:00
                    </p>
                  </div>
                </div>

                <div class="contact-item" style="display: block;">
                  <div style="margin-bottom: 12px;">
                    <i class="fas fa-share-alt" style="margin-right: 8px;"></i>
                    <strong>SNS でもつながりましょう</strong>
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 16px;">
                    <div style="text-align: center;">
                      <a href="https://line.me/R/ti/p/@kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                        <img src="/images/social/line-qr.png" alt="LINE" 
                             style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid var(--border-gray);" />
                        <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">LINE</div>
                      </a>
                    </div>
                    <div style="text-align: center;">
                      <a href="https://twitter.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                        <img src="/images/social/twitter-qr.png" alt="Twitter" 
                             style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid var(--border-gray);" />
                        <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Twitter</div>
                      </a>
                    </div>
                    <div style="text-align: center;">
                      <a href="https://instagram.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                        <img src="/images/social/instagram-qr.png" alt="Instagram" 
                             style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid var(--border-gray);" />
                        <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Instagram</div>
                      </a>
                    </div>
                    <div style="text-align: center;">
                      <a href="https://facebook.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                        <img src="/images/social/facebook-qr.png" alt="Facebook" 
                             style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid var(--border-gray);" />
                        <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Facebook</div>
                      </a>
                    </div>
                  </div>
                  <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-gray); font-size: 0.875rem; color: var(--text-gray);">
                    ※ QRコードをスキャンしてフォローしてください
                  </div>
                </div>
              </div>

              <!-- Contact Form -->
              <div class="contact-form">
                <h3><i class="fas fa-paper-plane"></i>お問い合わせフォーム</h3>
                
                <div style="text-align: center; padding: 40px 20px;">
                  <div style="margin-bottom: 32px;">
                    <i class="fas fa-edit" style="font-size: 4rem; color: var(--main-yellow); margin-bottom: 24px;"></i>
                    <p style="color: var(--text-gray); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">
                      体験授業のお申込み、コースに関するご質問など、<br>
                      お気軽にお問い合わせください。<br>
                      以下のボタンからフォームを開きます。
                    </p>
                  </div>

                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSftpEbrx-DPE1gvzaDzKy46Zsqq5i9FR9LlY4bEjqMy6WAHfw/viewform?usp=dialog" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="submit-btn"
                    style="text-decoration: none; max-width: 400px; margin: 0 auto;">
                    <i class="fas fa-external-link-alt"></i>
                    お問い合わせフォームを開く
                  </a>

                  <p style="color: var(--text-gray); font-size: 0.9rem; margin-top: 24px;">
                    ※ 新しいウィンドウでGoogle フォームが開きます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Access Map -->
        <section class="access-section">
          <div class="container">
            <div class="map-container">
              <h3><i class="fas fa-map"></i> アクセスマップ</h3>
              <div class="map-placeholder">
                <div>
                  <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: var(--main-yellow);"></i>
                  <p style="margin-top: 16px; font-size: 1.1rem;">
                    フジスーパー2号店 2階<br>
                    BTS アソーク駅・MRT スクンビット駅より徒歩5分
                  </p>
                </div>
              </div>
              <p style="color: var(--text-gray); margin-top: 20px;">
                ※ 詳細な地図は Google Maps で「フジスーパー2号店」を検索してください
              </p>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="section faq-section">
          <div class="container">
            <h2 class="section-title">よくあるご質問</h2>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>体験授業は受けられますか？</span>
              </div>
              <div class="faq-answer">
                はい、各コースで体験授業をご用意しています。お子様の興味や適性を確認していただけるよう、実際の授業内容をお試しいただけます。体験授業は無料ですので、お気軽にお申し込みください。
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>何歳から受講できますか？</span>
              </div>
              <div class="faq-answer">
                コースによって対象年齢は異なりますが、STEAMコースは5歳から、その他多くのコースは小学生から受講いただけます。算数数学個別指導は小学生から高校生まで対応しています。詳細は各コースページをご確認ください。
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>オンライン授業はありますか？</span>
              </div>
              <div class="faq-answer">
                はい、リアル授業とオンライン授業の両方を提供しています。お住まいの場所やご都合に合わせてお選びいただけます。オンライン授業でも対面授業と同様の高品質な指導を提供いたします。
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>日本語での授業ですか？</span>
              </div>
              <div class="faq-answer">
                はい、すべて日本語で行います。在タイ日本人のお子様向けに特化した教室ですので、日本の教育スタイルに慣れたお子様にも安心してご受講いただけます。
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>月謝制ですか？</span>
              </div>
              <div class="faq-answer">
                はい、基本的に月謝制となっています。コースや受講回数によって料金が異なりますので、詳細は直接お問い合わせください。体験授業後に詳しい料金プランをご案内いたします。
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <i class="fas fa-question-circle"></i>
                <span>駐車場はありますか？</span>
              </div>
              <div class="faq-answer">
                フジスーパー2号店の駐車場をご利用いただけます。授業時間中は駐車料金サービスもございますので、お車でお越しの際も安心です。
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `
}