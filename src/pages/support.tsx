import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const supportPage = () => (
  <>
    <head>
      <title>サポート・お問い合わせ｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYAプログラミング教室のサポートページ。LINE、メールでのお問い合わせ方法、営業時間のご案内。FAQ、スケジュール確認もこちらから。" />
      <meta name="keywords" content="サポート,お問い合わせ,LINE,メール,営業時間,FAQ,スケジュール,バンコク" />
      <meta property="og:title" content="サポート｜KOBEYA" />
      <meta property="og:description" content="お問い合わせ方法、営業時間のご案内" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/support" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/support" />
    </head>
    
    
    <style dangerouslySetInnerHTML={{__html: `
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD54F;
        --light-yellow: #FFF9E6;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --text-light: #A0AEC0;
        --border-gray: #E2E8F0;
      }

      .support-hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 5rem 0 3rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .support-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path fill="%23ffffff" fill-opacity="0.1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7L1200,56L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>') no-repeat bottom;
        background-size: cover;
      }

      .support-hero-title {
        font-size: 3rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
      }

      .support-hero-subtitle {
        font-size: 1.25rem;
        color: white;
        opacity: 0.95;
        position: relative;
        z-index: 1;
      }

      .support-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .support-intro {
        text-align: center;
        margin-bottom: 4rem;
      }

      .support-intro-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .support-intro-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
        max-width: 800px;
        margin: 0 auto;
      }

      .support-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .support-card {
        background: var(--base-white);
        border-radius: 16px;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        border: 2px solid transparent;
      }

      .support-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        border-color: #667eea;
      }

      .support-card-icon {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }

      .support-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .support-card-text {
        font-size: 1rem;
        color: var(--text-gray);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      .support-card-button {
        display: inline-block;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 0.875rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .support-card-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }

      .contact-section {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 20px;
        padding: 3rem;
        margin-bottom: 4rem;
      }

      .contact-section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 2rem;
        text-align: center;
      }

      .contact-methods {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .contact-method {
        background: var(--base-white);
        border-radius: 12px;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
      }

      .contact-method:hover {
        transform: translateX(5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      }

      .contact-method-icon {
        font-size: 3rem;
        flex-shrink: 0;
      }

      .contact-method-content {
        flex: 1;
      }

      .contact-method-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 0.5rem;
      }

      .contact-method-detail {
        font-size: 1rem;
        color: var(--text-gray);
        line-height: 1.6;
      }

      .contact-method-link {
        color: #667eea;
        text-decoration: none;
        font-weight: 600;
      }

      .contact-method-link:hover {
        text-decoration: underline;
      }

      .hours-section {
        background: var(--base-white);
        border-radius: 20px;
        padding: 3rem;
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
      }

      .hours-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 2rem;
        text-align: center;
      }

      .hours-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        max-width: 700px;
        margin: 0 auto;
      }

      .hours-item {
        display: flex;
        justify-content: space-between;
        padding: 1.25rem 1.5rem;
        background: #f8f9fa;
        border-radius: 10px;
        border-left: 4px solid #667eea;
      }

      .hours-day {
        font-weight: 600;
        color: var(--text-dark);
      }

      .hours-time {
        color: var(--text-gray);
      }

      .hours-note {
        text-align: center;
        margin-top: 2rem;
        padding: 1.5rem;
        background: #fff3cd;
        border-radius: 10px;
        color: #856404;
        font-size: 1rem;
      }

      @media (max-width: 1024px) {
        .support-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .contact-methods {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .support-hero-title {
          font-size: 2rem;
        }

        .support-container {
          padding: 2rem 1rem;
        }

        .support-grid {
          grid-template-columns: 1fr;
        }

        .hours-grid {
          grid-template-columns: 1fr;
        }
      }
    `}} />

    <Header />

    {/* Hero Section */}
    <section className="support-hero">
      <div className="support-hero-title">サポート</div>
      <div className="support-hero-subtitle">Support - 安心のサポート体制</div>
    </section>

    {/* Support Content */}
    <div className="support-container">
      
      {/* Intro */}
      <div className="support-intro">
        <h1 className="support-intro-title">充実のサポートで安心の学習環境</h1>
        <p className="support-intro-text">
          KOBEYAでは、お子様の学習を全力でサポートします。<br/>
          わからないことがあれば、いつでもお気軽にご相談ください。
        </p>
      </div>

      {/* Support Cards */}
      <div className="support-grid">
        <div className="support-card">
          <div className="support-card-icon">💬</div>
          <div className="support-card-title">よくある質問</div>
          <div className="support-card-text">
            入会方法や料金、カリキュラムなど、<br/>
            よくいただく質問をまとめています。
          </div>
          <a href="/faq" className="support-card-button">
            FAQを見る
          </a>
        </div>

        <div className="support-card">
          <div className="support-card-icon">📧</div>
          <div className="support-card-title">お問い合わせ</div>
          <div className="support-card-text">
            ご質問やご相談は、<br/>
            お問い合わせフォームからお気軽にどうぞ。
          </div>
          <a href="/contact" className="support-card-button">
            お問い合わせ
          </a>
        </div>

        <div className="support-card">
          <div className="support-card-icon">📅</div>
          <div className="support-card-title">授業スケジュール</div>
          <div className="support-card-text">
            2025年度の授業時間割を<br/>
            ご確認いただけます。
          </div>
          <a href="/schedule" className="support-card-button">
            時間割を見る
          </a>
        </div>

        <div className="support-card">
          <div className="support-card-icon">🎓</div>
          <div className="support-card-title">無料体験予約</div>
          <div className="support-card-text">
            実際の授業を体験できます。<br/>
            お子様に合うか確認してください。
          </div>
          <a href="/contact" className="support-card-button">
            体験予約
          </a>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="contact-section">
        <h2 className="contact-section-title">お問い合わせ方法</h2>
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-method-icon">📞</div>
            <div className="contact-method-content">
              <div className="contact-method-title">お電話</div>
              <div className="contact-method-detail">
                <a href="tel:021036708" className="contact-method-link">02-103-6708</a><br/>
                営業時間内にお気軽にお電話ください
              </div>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-method-icon">✉️</div>
            <div className="contact-method-content">
              <div className="contact-method-title">メール</div>
              <div className="contact-method-detail">
                <a href="mailto:kobeyabkk@gmail.com" className="contact-method-link">kobeyabkk@gmail.com</a><br/>
                24時間受付（返信は営業時間内）
              </div>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-method-icon">💬</div>
            <div className="contact-method-content">
              <div className="contact-method-title">LINE公式アカウント</div>
              <div className="contact-method-detail">
                <a href="https://line.me/R/ti/p/@kobeya" className="contact-method-link" target="_blank" rel="noopener noreferrer">
                  @kobeya
                </a><br/>
                チャットで気軽にご相談いただけます
              </div>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-method-icon">📍</div>
            <div className="contact-method-content">
              <div className="contact-method-title">教室窓口</div>
              <div className="contact-method-detail">
                フジスーパー2号店2階<br/>
                直接お越しいただいてもOKです
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="hours-section">
        <h2 className="hours-title">営業時間・サポート時間</h2>
        <div className="hours-grid">
          <div className="hours-item">
            <span className="hours-day">月曜日</span>
            <span className="hours-time">9:00 - 21:00</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">火曜日</span>
            <span className="hours-time">9:00 - 21:00</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">水曜日</span>
            <span className="hours-time">9:00 - 21:00</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">木曜日</span>
            <span className="hours-time">9:00 - 21:00</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">金曜日</span>
            <span className="hours-time">9:00 - 21:00</span>
          </div>
          <div className="hours-item">
            <span className="hours-day">土曜日</span>
            <span className="hours-time">9:00 - 18:00</span>
          </div>
          <div className="hours-item" style={{gridColumn: 'span 2'}}>
            <span className="hours-day">日曜日・祝日</span>
            <span className="hours-time">定休日</span>
          </div>
        </div>
        <div className="hours-note">
          <strong>⚠️ 注意事項</strong><br/>
          営業時間は変更になる場合があります。来校前にお電話またはLINEでご確認いただくことをお勧めします。
        </div>
      </div>
    </div>

    <Footer />
  </>
)
