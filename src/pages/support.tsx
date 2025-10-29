import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/support.css'

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
