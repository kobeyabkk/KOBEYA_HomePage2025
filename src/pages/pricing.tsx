import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const pricingPage = () => (
  <>
    <head>
      <title>料金案内｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYAプログラミング教室の料金案内。詳しい料金プランはパンフレットをダウンロードしてご確認ください。" />
      <meta name="keywords" content="料金,授業料,月謝,入塾金,料金プラン,バンコク,プログラミング教室" />
      <meta property="og:title" content="料金案内｜KOBEYA" />
      <meta property="og:description" content="詳しい料金プランはパンフレットをご確認ください" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/pricing" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/pricing" />
    </head>
    
    <style>{`
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

      .pricing-hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 5rem 0 3rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .pricing-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path fill="%23ffffff" fill-opacity="0.1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7L1200,56L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>') no-repeat bottom;
        background-size: cover;
      }

      .pricing-hero-title {
        font-size: 3rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
      }

      .pricing-hero-subtitle {
        font-size: 1.25rem;
        color: white;
        opacity: 0.95;
        position: relative;
        z-index: 1;
      }

      .pricing-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .pricing-intro {
        text-align: center;
        margin-bottom: 3rem;
      }

      .pricing-intro-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .pricing-intro-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
      }

      .download-card {
        background: linear-gradient(135deg, #f8f9fa 0%, var(--light-yellow) 100%);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        margin-bottom: 3rem;
      }

      .download-icon {
        font-size: 5rem;
        margin-bottom: 1.5rem;
      }

      .download-title {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .download-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        margin-bottom: 2rem;
        line-height: 1.8;
      }

      .download-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1.25rem 3rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      }

      .download-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
      }

      .download-button-icon {
        font-size: 1.5rem;
      }

      .info-section {
        background: var(--base-white);
        border-radius: 16px;
        padding: 2.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      }

      .info-section-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .info-section-icon {
        font-size: 2rem;
      }

      .info-section-content {
        font-size: 1.05rem;
        color: var(--text-gray);
        line-height: 1.8;
      }

      .info-section-content ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }

      .info-section-content li {
        margin-bottom: 0.75rem;
      }

      .info-section-content strong {
        color: var(--text-dark);
      }

      .contact-cta {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        color: white;
      }

      .contact-cta-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .contact-cta-text {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.95;
      }

      .contact-cta-button {
        display: inline-block;
        background: white;
        color: #667eea;
        padding: 1.25rem 3rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .contact-cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        .pricing-hero-title {
          font-size: 2rem;
        }

        .pricing-container {
          padding: 2rem 1rem;
        }

        .download-card {
          padding: 2rem;
        }
      }
    `}</style>

    <Header />

    {/* Hero Section */}
    <section className="pricing-hero">
      <div className="pricing-hero-title">料金案内</div>
      <div className="pricing-hero-subtitle">Pricing - コース別料金プラン</div>
    </section>

    {/* Pricing Content */}
    <div className="pricing-container">
      
      {/* Intro */}
      <div className="pricing-intro">
        <h1 className="pricing-intro-title">詳しい料金はパンフレットをご確認ください</h1>
        <p className="pricing-intro-text">
          各コースの詳しい料金プラン、入塾金、教材費などの情報は<br/>
          パンフレットに記載しております。
        </p>
      </div>

      {/* Download Card */}
      <div className="download-card">
        <div className="download-icon">📄</div>
        <div className="download-title">2025年度パンフレット</div>
        <div className="download-text">
          KOBEYAプログラミング教室の全コース紹介、料金プラン、<br/>
          時間割などの詳細情報をご覧いただけます。
        </div>
        <a 
          href="https://page.gensparksite.com/get_upload_url/f5b0ad4ddf0de3a3cb51e3a48b06e4640e0361c8cce5a6260053cb337dc112ef/default/a1833c6f-f544-453f-841d-0e5dcf84de4c" 
          className="download-button"
          download="KOBEYAプログラミング教室2025パンフレット.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="download-button-icon">⬇️</span>
          <span>パンフレットをダウンロード</span>
        </a>
      </div>

      {/* Basic Info Sections */}
      <div className="info-section">
        <div className="info-section-title">
          <span className="info-section-icon">💰</span>
          <span>基本料金について</span>
        </div>
        <div className="info-section-content">
          <ul>
            <li><strong>入塾金：</strong>2,000バーツ</li>
            <li><strong>月謝：</strong>コースによって異なります（パンフレット参照）</li>
            <li><strong>教材費：</strong>テキストが必要な講座のみ</li>
            <li><strong>兄弟割引：</strong>ご兄弟で受講される場合は30%割引</li>
          </ul>
        </div>
      </div>

      <div className="info-section">
        <div className="info-section-title">
          <span className="info-section-icon">💳</span>
          <span>お支払い方法</span>
        </div>
        <div className="info-section-content">
          <ul>
            <li>Prompt Payによる振込（タイ国内）</li>
            <li>銀行振込（タイ国内）</li>
            <li>現金払い（教室窓口）</li>
          </ul>
          <p>原則として月初めにその月のご請求書を発行します。</p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <div className="contact-cta-title">料金についてご質問はありますか？</div>
        <div className="contact-cta-text">
          お気軽にお問い合わせください。<br/>
          スタッフが丁寧にご説明いたします。
        </div>
        <a href="/contact" className="contact-cta-button">
          お問い合わせはこちら
        </a>
      </div>
    </div>

    <Footer />
  </>
)
