import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const contactPage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-gray: #E2E8F0;
        --hover-gray: #F7FAFC;
      }

      .max-w-7xl {
        max-width: 80rem;
        width: 100%;
      }

      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }

      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
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

      .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

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

      .contact-item.contact-social {
        display: block;
      }

      .contact-social-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 12px;
      }

      .contact-social-header i {
        margin-right: 0;
        width: auto;
        margin-top: 0;
      }

      .contact-social-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin-top: 16px;
      }

      .contact-social-item {
        text-align: center;
      }

      .contact-social-link {
        display: block;
        text-decoration: none;
      }

      .contact-social-qr {
        width: 100%;
        max-width: 120px;
        height: auto;
        border-radius: 8px;
        border: 2px solid var(--border-gray);
        margin: 0 auto;
      }

      .contact-social-label {
        margin-top: 8px;
        font-size: 0.875rem;
        color: var(--text-gray);
      }

      .contact-social-note {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--border-gray);
        font-size: 0.875rem;
        color: var(--text-gray);
      }

      .contact-form {
        background: var(--base-white);
        padding: 40px;
        border-radius: 16px;
        border: 2px solid var(--border-gray);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
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
        text-decoration: none;
      }

      .submit-btn:hover {
        background: var(--accent-yellow);
        transform: translateY(-2px);
      }

      .contact-form-content {
        text-align: center;
        padding: 40px 20px;
      }

      .contact-form-intro {
        margin-bottom: 32px;
      }

      .contact-form-icon {
        font-size: 4rem;
        color: var(--main-yellow);
        margin-bottom: 24px;
      }

      .contact-form-description {
        color: var(--text-gray);
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 24px;
      }

      .contact-form-button {
        max-width: 400px;
        margin: 0 auto;
      }

      .contact-form-note {
        color: var(--text-gray);
        font-size: 0.9rem;
        margin-top: 24px;
      }

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

      .map-placeholder-icon {
        font-size: 3rem;
        color: var(--main-yellow);
      }

      .map-description {
        margin-top: 16px;
        font-size: 1.1rem;
      }

      .map-note {
        color: var(--text-gray);
        margin-top: 20px;
      }

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
        justify-content: space-between;
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

      @media (max-width: 1024px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }

      @media (max-width: 768px) {
        .section {
          padding: 40px 0;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 40px;
        }

        .contact-info,
        .contact-form {
          padding: 24px;
        }

        .contact-container {
          padding: 0;
        }

        .contact-social-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .access-section {
          padding: 40px 0;
          margin-top: 40px;
        }

        .map-container {
          padding: 24px;
        }
      }

      @media (max-width: 480px) {
        .contact-social-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <Header />

    <main class="max-w-7xl mx-auto px-4">
      <section class="section">
        <div class="contact-container">
          <h1 class="section-title">お問い合わせ</h1>
          <p class="section-subtitle">
            プログラミング教室へのご質問・お申込みはこちらからお気軽にどうぞ
          </p>

          <div class="contact-grid">
            <div class="contact-info">
              <h3>
                <i class="fas fa-info-circle" />
                <span>教室情報</span>
              </h3>

              <div class="contact-item">
                <i class="fas fa-map-marker-alt" />
                <div class="contact-item-content">
                  <h4>住所</h4>
                  <p>
                    フジスーパー2号店 2階<br />
                    693 Sukhumvit Road, Wattana,<br />
                    Bangkok 10110, Thailand
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-phone" />
                <div class="contact-item-content">
                  <h4>電話番号</h4>
                  <p>
                    <a href="tel:02-103-6708">02-103-6708</a>
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-envelope" />
                <div class="contact-item-content">
                  <h4>メールアドレス</h4>
                  <p>
                    <a href="mailto:kobeyabkk@gmail.com">kobeyabkk@gmail.com</a>
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <i class="fas fa-clock" />
                <div class="contact-item-content">
                  <h4>受付時間</h4>
                  <p>
                    平日: 9:00〜21:00
                    <br />
                    土曜: 9:00〜18:00
                  </p>
                </div>
              </div>

              <div class="contact-item contact-social">
                <div class="contact-social-header">
                  <i class="fas fa-share-alt" />
                  <strong>SNS でもつながりましょう</strong>
                </div>
                <div class="contact-social-grid">
                  <div class="contact-social-item">
                    <a
                      href="https://line.me/R/ti/p/@kobeya"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-social-link"
                    >
                      <img src="/images/social/line-qr.png" alt="LINE" class="contact-social-qr" />
                      <div class="contact-social-label">LINE</div>
                    </a>
                  </div>
                  <div class="contact-social-item">
                    <a
                      href="https://twitter.com/kobeya"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-social-link"
                    >
                      <img src="/images/social/twitter-qr.png" alt="Twitter" class="contact-social-qr" />
                      <div class="contact-social-label">Twitter</div>
                    </a>
                  </div>
                  <div class="contact-social-item">
                    <a
                      href="https://instagram.com/kobeya"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-social-link"
                    >
                      <img src="/images/social/instagram-qr.png" alt="Instagram" class="contact-social-qr" />
                      <div class="contact-social-label">Instagram</div>
                    </a>
                  </div>
                  <div class="contact-social-item">
                    <a
                      href="https://facebook.com/kobeya"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-social-link"
                    >
                      <img src="/images/social/facebook-qr.png" alt="Facebook" class="contact-social-qr" />
                      <div class="contact-social-label">Facebook</div>
                    </a>
                  </div>
                </div>
                <div class="contact-social-note">※ QRコードをスキャンしてフォローしてください</div>
              </div>
            </div>

            <div class="contact-form">
              <h3>
                <i class="fas fa-paper-plane" />
                <span>お問い合わせフォーム</span>
              </h3>

              <div class="contact-form-content">
                <div class="contact-form-intro">
                  <i class="fas fa-edit contact-form-icon" />
                  <p class="contact-form-description">
                    体験授業のお申込み、コースに関するご質問など、
                    <br />
                    お気軽にお問い合わせください。
                    <br />
                    以下のボタンからフォームを開きます。
                  </p>
                </div>

                <div class="contact-form-button">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSftpEbrx-DPE1gvzaDzKy46Zsqq5i9FR9LlY4bEjqMy6WAHfw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="submit-btn"
                  >
                    <i class="fas fa-external-link-alt" />
                    お問い合わせフォームを開く
                  </a>
                </div>

                <p class="contact-form-note">
                  ※ 新しいウィンドウでGoogle フォームが開きます
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="access-section">
        <div class="contact-container">
          <div class="map-container">
            <h3>
              <i class="fas fa-map" /> アクセスマップ
            </h3>
            <div class="map-placeholder">
              <div>
                <i class="fas fa-map-marked-alt map-placeholder-icon" />
                <p class="map-description">
                  フジスーパー2号店 2階
                  <br />
                  BTS アソーク駅・MRT スクンビット駅より徒歩5分
                </p>
              </div>
            </div>
            <p class="map-note">
              ※ 詳細な地図は Google Maps で「フジスーパー2号店」を検索してください
            </p>
          </div>
        </div>
      </section>

      <section class="section faq-section">
        <div class="contact-container">
          <h2 class="section-title">よくあるご質問</h2>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>体験授業は受けられますか？</span>
            </div>
            <div class="faq-answer">
              はい、各コースで体験授業をご用意しています。お子様の興味や適性を確認していただけるよう、実際の授業内容を
              お試しいただけます。体験授業は無料ですので、お気軽にお申し込みください。
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>何歳から受講できますか？</span>
            </div>
            <div class="faq-answer">
              コースによって対象年齢は異なりますが、STEAMコースは5歳から、その他多くのコースは小学生から受講いただけます。
              算数学個別指導は小学生から高校生まで対応しています。詳細は各コースページをご確認ください。
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>オンライン授業はありますか？</span>
            </div>
            <div class="faq-answer">
              はい、リアル授業とオンライン授業の両方を提供しています。お住まいの場所やご都合に合わせてお選びいただけます。
              オンライン授業でも対面授業と同様の高品質な指導を提供いたします。
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>日本語での授業ですか？</span>
            </div>
            <div class="faq-answer">
              はい、すべて日本語で行います。在タイ日本人のお子様向けに特化した教室ですので、日本の教育スタイルに慣れたお子様に
              も安心してご受講いただけます。
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>月謝制ですか？</span>
            </div>
            <div class="faq-answer">
              はい、基本的に月謝制となっています。コースや受講回数によって料金が異なりますので、詳細は直接お問い合わせください。
              体験授業後に詳しい料金プランをご案内いたします。
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-question">
              <i class="fas fa-question-circle" />
              <span>駐車場はありますか？</span>
            </div>
            <div class="faq-answer">
              フジスーパー2号店の駐車場をご利用いただけます。授業時間中は駐車料金サービスもございますので、お車でお越しの際も安心です。
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
)
