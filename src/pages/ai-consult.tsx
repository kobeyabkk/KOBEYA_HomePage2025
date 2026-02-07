import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aiConsultPage = () => (
  <>
    <head>
      <title>AIコンサルティング｜KOBEYA - 大人向けAI活用支援・業務効率化</title>
      <meta name="description" content="バンコクのAIコンサルティングKOBEYA（コベヤ）。ChatGPT・Gemini等で業務効率化。個人事業主、中小企業向け。SNS自動投稿、算数・国語プリント生成、LINE連携など。現場目線のサポート。" />
      <meta name="keywords" content="AIコンサルティング,バンコク,ChatGPT,Gemini,業務効率化,個人事業主,中小企業,教育,AI導入,自動化,LINE連携,SNS運用,SNS 自動投稿,プリント生成,算数 プリント,国語 プリント,KOBEYA,コベヤ" />
      <meta property="og:title" content="AIコンサルティング｜KOBEYA - AIを、もっとあなたの味方に。" />
      <meta property="og:description" content="ChatGPT・Gemini・Gensparkなど、生成AIを仕事・教育・日常に活かすための実践サポート。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/ai-consult" />
      <meta property="og:image" content="https://page.gensparksite.com/v1/base64_upload/12ceead4f987a2269b4144a32d086adb" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AIコンサルティング｜KOBEYA" />
      <meta name="twitter:description" content="生成AIを仕事・教育・日常に活かすための実践サポート" />
      <meta name="twitter:image" content="https://page.gensparksite.com/v1/base64_upload/12ceead4f987a2269b4144a32d086adb" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/ai-consult" />
    </head>
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        
        /* Professional Dark Theme Colors */
        --navy-dark: #0f172a;
        --navy-medium: #1e293b;
        --navy-light: #334155;
        --cyan-accent: #06b6d4;
        --cyan-light: #22d3ee;
        --blue-accent: #0ea5e9;
        --gold-accent: #f59e0b;
        --slate-50: #f8fafc;
        --slate-100: #f1f5f9;
        --slate-200: #e2e8f0;
        --slate-700: #334155;
        --slate-800: #1e293b;
      }
      
      body {
        font-family: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
        background: var(--slate-50);
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Hero Section - Dark Professional */
      .hero-section {
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 50%, #1a2942 100%);
        padding: 8rem 0 6rem;
        color: white;
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%);
        pointer-events: none;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 100px;
        padding: 0.5rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 2rem;
        letter-spacing: 0.05em;
      }

      .hero-badge-dot {
        width: 8px;
        height: 8px;
        background: var(--cyan-light);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.15;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, #ffffff 0%, var(--cyan-light) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.8;
        margin-bottom: 3rem;
        color: rgba(255, 255, 255, 0.85);
        font-weight: 400;
      }

      .hero-cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-hero-primary {
        background: linear-gradient(135deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        color: white;
        font-weight: 600;
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s;
        box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        border: none;
      }

      .btn-hero-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(6, 182, 212, 0.4);
      }

      .btn-hero-secondary {
        background: transparent;
        color: white;
        font-weight: 600;
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
      }

      .btn-hero-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
      }

      /* Section Styles */
      .section {
        padding: 6rem 0;
      }

      .section-dark {
        background: var(--navy-dark);
        color: white;
        padding: 6rem 0;
      }

      .section-alt {
        background: white;
        padding: 6rem 0;
      }

      .section-title {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }

      .section-title-light {
        color: white;
      }

      .section-subtitle {
        font-size: 1.125rem;
        text-align: center;
        color: var(--text-gray);
        margin-bottom: 4rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .section-subtitle-light {
        color: rgba(255, 255, 255, 0.7);
      }

      /* Problem Section - Glass Morphism Cards */
      .problem-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
        max-width: 900px;
        margin: 0 auto 3rem;
      }

      .problem-item {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.75rem 2rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s;
      }

      .problem-item:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: var(--cyan-accent);
        transform: translateX(8px);
      }

      .problem-icon {
        font-size: 1.75rem;
        flex-shrink: 0;
      }

      .problem-text {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 400;
      }

      .problem-conclusion {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 3rem;
        padding: 2rem;
        background: linear-gradient(135deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Service Table - Modern Grid */
      .service-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1100px;
        margin: 0 auto;
      }

      .service-card {
        background: white;
        border-radius: 1rem;
        padding: 2.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        border: 1px solid var(--slate-200);
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
      }

      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
      }

      .service-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(6, 182, 212, 0.15);
      }

      .service-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .service-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--navy-dark);
      }

      .service-description {
        color: var(--text-gray);
        line-height: 1.8;
        font-size: 1rem;
      }

      /* Case Study Cards - Professional */
      .case-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }

      .case-card {
        background: white;
        border-radius: 1rem;
        padding: 2.5rem 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s;
        border: 1px solid var(--slate-200);
        position: relative;
        overflow: hidden;
      }

      .case-card::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        opacity: 0.1;
        border-radius: 0 0 0 100%;
        transition: all 0.3s;
      }

      .case-card:hover::after {
        width: 120px;
        height: 120px;
        opacity: 0.15;
      }

      .case-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(6, 182, 212, 0.2);
        border-color: var(--cyan-accent);
      }

      .case-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }

      .case-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--navy-dark);
      }

      .case-description {
        color: var(--text-gray);
        line-height: 1.8;
      }

      /* Process Steps - Timeline Style */
      .process-container {
        max-width: 1000px;
        margin: 0 auto;
      }

      .process-steps {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        position: relative;
      }

      .process-steps::before {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 10%;
        right: 10%;
        height: 2px;
        background: linear-gradient(90deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        z-index: 0;
      }

      .process-step {
        text-align: center;
        padding: 1.5rem 1rem;
        position: relative;
        z-index: 1;
      }

      .process-number {
        width: 5rem;
        height: 5rem;
        background: linear-gradient(135deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 1.25rem;
        box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
      }

      .process-title {
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--navy-dark);
        font-size: 1rem;
      }

      .process-desc {
        font-size: 0.875rem;
        color: var(--text-gray);
      }

      /* Recommendation List - Minimalist */
      .recommend-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
      }

      .recommend-item {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s;
      }

      .recommend-item:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: var(--cyan-accent);
        transform: translateY(-4px);
      }

      .recommend-icon {
        font-size: 2rem;
        flex-shrink: 0;
      }

      .recommend-text {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.05rem;
        line-height: 1.6;
      }

      /* Strength Cards - Premium Design */
      .strength-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 3rem;
      }

      .strength-card {
        background: white;
        padding: 3rem 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        text-align: center;
        transition: all 0.3s;
        border: 1px solid var(--slate-200);
        position: relative;
        overflow: hidden;
      }

      .strength-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
      }

      .strength-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(6, 182, 212, 0.2);
      }

      .strength-icon {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }

      .strength-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--navy-dark);
      }

      .strength-description {
        line-height: 1.8;
        color: var(--text-gray);
      }

      /* Contact Section - Strong CTA */
      .contact-section {
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 100%);
        padding: 6rem 0;
        color: white;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .contact-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
        pointer-events: none;
      }

      .contact-content {
        position: relative;
        z-index: 1;
      }

      .contact-title {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }

      .contact-subtitle {
        font-size: 1.25rem;
        margin-bottom: 3rem;
        color: rgba(255, 255, 255, 0.85);
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .contact-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-contact-primary {
        background: linear-gradient(135deg, var(--cyan-accent) 0%, var(--blue-accent) 100%);
        color: white;
        font-weight: 600;
        padding: 1.25rem 3rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s;
        box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        font-size: 1.125rem;
      }

      .btn-contact-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(6, 182, 212, 0.5);
      }

      .btn-contact-secondary {
        background: transparent;
        color: white;
        font-weight: 600;
        padding: 1.25rem 3rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s;
        border: 2px solid rgba(255, 255, 255, 0.3);
        font-size: 1.125rem;
        backdrop-filter: blur(10px);
      }

      .btn-contact-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
      }

      /* Tool CTA Button */}
      .tool-cta-section {
        padding: 4rem 2rem;
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        position: relative;
        overflow: hidden;
      }

      .tool-cta-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: rotate 20s linear infinite;
      }

      .tool-cta-content {
        position: relative;
        z-index: 1;
      }

      .tool-cta-title {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 1rem;
        text-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
      }

      .tool-cta-subtitle {
        color: #ffffff;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        opacity: 1;
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
      }

      .btn-tool-cta {
        background: white;
        color: #667eea;
        font-weight: 700;
        padding: 1.25rem 3rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        transition: all 0.3s;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        font-size: 1.2rem;
      }

      .btn-tool-cta:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .service-grid {
          grid-template-columns: 1fr;
        }

        .case-grid {
          grid-template-columns: 1fr;
        }

        .strength-grid {
          grid-template-columns: 1fr;
        }

        .recommend-grid {
          grid-template-columns: 1fr;
        }

        .process-steps {
          grid-template-columns: 1fr;
        }

        .process-steps::before {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1rem;
        }

        .section-title {
          font-size: 2rem;
        }

        .contact-title {
          font-size: 2rem;
        }

        .contact-subtitle {
          font-size: 1rem;
        }

        .container {
          padding: 0 1rem;
        }

        .section,
        .section-dark,
        .section-alt {
          padding: 4rem 0;
        }

        .hero-section {
          padding: 5rem 0 4rem;
        }
      }
    `}</style>

    <Header />

    {/* Hero Section - Professional Dark */}
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            PROFESSIONAL AI CONSULTING
          </div>
          <h1 class="hero-title">AIを、もっとあなたの味方に。</h1>
          <p class="hero-subtitle">
            ChatGPT・Gemini・Gensparkなど、生成AIを仕事・教育・日常に活かすための実践サポート。<br />
            現場目線で、あなたの業種・目的に合わせた最適なAI活用を提案します。
          </p>
          <div class="hero-cta-buttons">
            <a href="/contact" class="btn-hero-primary">
              ✉️ 問い合わせフォーム
            </a>
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-hero-secondary" target="_blank" rel="noopener noreferrer">
              💬 LINEはこちら
            </a>
            <a href="/store" class="btn-hero-secondary">
              📱 販売中のアプリを見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Problem Section - Dark Background */}
    <section class="section-dark">
      <div class="container">
        <h2 class="section-title section-title-light">AIがすごいのは知ってる。<br />でも、どう使えばいいの？</h2>
        <div class="problem-list">
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">AIを試してみたけれど、うまく使いこなせない</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">ChatGPTで業務改善をしたいけど、どこから手をつけていいか分からない</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">教育現場でプリント作成や教材準備を効率化したい</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">副業・小規模事業にAIを取り入れたい</div>
          </div>
        </div>
        <p class="problem-conclusion">
          KOBEYAは、そんな方々に「現場で使えるAI」の使い方を教えます。
        </p>
      </div>
    </section>

    {/* Service Section - White Background with Cards */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">サービス内容</h2>
        <p class="section-subtitle">対象者別に最適なAI活用サポートを提供します</p>
        <div class="service-grid">
          <div class="service-card">
            <div class="service-icon">💼</div>
            <h3 class="service-title">個人事業主・中小企業</h3>
            <p class="service-description">
              AIチャット導入／業務効率化／SNS自動投稿・顧客対応支援
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎓</div>
            <h3 class="service-title">教育関係者（塾・学校）</h3>
            <p class="service-description">
              カスタム学習プリント生成／生徒管理アプリ／AI教材開発支援
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">👨‍👩‍👧</div>
            <h3 class="service-title">教育ママ・ご家庭</h3>
            <p class="service-description">
              家庭学習サポートAI／子どものレベルに合わせたプリント生成システム
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">⚡</div>
            <h3 class="service-title">その他</h3>
            <p class="service-description">
              ChatGPTやGeminiなどのカスタム設定・運用代行／既存システムとの連携
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tool CTA 1 */}
    <section class="tool-cta-section">
      <div class="container">
        <div class="tool-cta-content">
          <h2 class="tool-cta-title">📱 実際に使えるツールを今すぐチェック</h2>
          <p class="tool-cta-subtitle">
            SNS自動投稿・ホームページ制作など、事業者向けのツールをご用意しています
          </p>
          <a href="/store#btob" class="btn-tool-cta">
            🛠️ ツールはこちら
          </a>
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section class="section">
      <div class="container">
        <h2 class="section-title">事例・活用イメージ</h2>
        <p class="section-subtitle">実際にどのような効果が得られるのか、具体例をご紹介します</p>
        <div class="case-grid">
          <div class="case-card">
            <div class="case-icon">📊</div>
            <h3 class="case-title">学習プリント自動生成</h3>
            <p class="case-description">
              教員が作る時間を1/10に短縮。生徒ごとに難易度自動調整。
            </p>
          </div>
          <div class="case-card">
            <div class="case-icon">💬</div>
            <h3 class="case-title">LINEからAI相談受付</h3>
            <p class="case-description">
              教室・店舗での問い合わせ対応をAIが一次対応。
            </p>
          </div>
          <div class="case-card">
            <div class="case-icon">📱</div>
            <h3 class="case-title">SNS自動投稿アプリ</h3>
            <p class="case-description">
              SNS投稿の手間を削減。AIが文章・ハッシュタグまで提案。
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tool CTA 2 */}
    <section class="tool-cta-section">
      <div class="container">
        <div class="tool-cta-content">
          <h2 class="tool-cta-title">⚡ AIで作るから、早い！安い！柔軟！</h2>
          <p class="tool-cta-subtitle">
            個人開発だからこそ実現できる価格と品質。お気軽にご相談ください
          </p>
          <a href="/store#btob" class="btn-tool-cta">
            🛠️ ツールはこちら
          </a>
        </div>
      </div>
    </section>

    {/* Process Section - White Background */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">導入までの流れ</h2>
        <p class="section-subtitle">スムーズにAI活用を始められるよう、丁寧にサポートします</p>
        <div class="process-container">
          <div class="process-steps">
            <div class="process-step">
              <div class="process-number">1</div>
              <div class="process-title">ご相談</div>
              <div class="process-desc">LINEまたはフォーム</div>
            </div>
            <div class="process-step">
              <div class="process-number">2</div>
              <div class="process-title">現状ヒアリング</div>
              <div class="process-desc">無料</div>
            </div>
            <div class="process-step">
              <div class="process-number">3</div>
              <div class="process-title">AI活用プラン提案</div>
              <div class="process-desc">最適なプランをご提案</div>
            </div>
            <div class="process-step">
              <div class="process-number">4</div>
              <div class="process-title">実装／アプリ制作</div>
              <div class="process-desc">実際の導入作業</div>
            </div>
            <div class="process-step">
              <div class="process-number">5</div>
              <div class="process-title">フォローアップ</div>
              <div class="process-desc">運用サポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Recommendation Section - Dark Background */}
    <section class="section-dark">
      <div class="container">
        <h2 class="section-title section-title-light">こんな方におすすめ</h2>
        <div class="recommend-grid">
          <div class="recommend-item">
            <div class="recommend-icon">📚</div>
            <div class="recommend-text">教育・学習をもっと効率化したい先生</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">💼</div>
            <div class="recommend-text">SNS発信に時間を取られたくない個人事業主</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">🚀</div>
            <div class="recommend-text">AIをビジネスに取り入れたいが何をすればいいか分からない方</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">🏠</div>
            <div class="recommend-text">家庭でもAI教育を始めたい方</div>
          </div>
        </div>
      </div>
    </section>

    {/* Tool CTA 3 */}
    <section class="tool-cta-section">
      <div class="container">
        <div class="tool-cta-content">
          <h2 class="tool-cta-title">💡 個人開発だからできるこの価格！</h2>
          <p class="tool-cta-subtitle">
            大手では実現できない柔軟性とスピード感で、あなたのビジネスをサポート
          </p>
          <a href="/store#btob" class="btn-tool-cta">
            🛠️ ツールはこちら
          </a>
        </div>
      </div>
    </section>

    {/* Strength Section */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">KOBEYAの強み</h2>
        <p class="section-subtitle">個人開発 × AI開発で実現する高品質・低価格</p>
        <div class="strength-grid">
          <div class="strength-card">
            <div class="strength-icon">⚡</div>
            <h3 class="strength-title">AI開発だから、早い！安い！柔軟！</h3>
            <p class="strength-description">
              AI支援により開発スピードが圧倒的に速く、その分コストを抑えられます。変更にも柔軟に対応できます。
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">💰</div>
            <h3 class="strength-title">個人開発だからできるこの価格</h3>
            <p class="strength-description">
              大手企業のような間接コストがないため、高品質なサービスを手頃な価格でご提供できます。
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">🎯</div>
            <h3 class="strength-title">教育現場での実践知</h3>
            <p class="strength-description">
              AI×教育のノウハウをそのままビジネス応用。現場で本当に使えるツールを提供します。
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">⚙️</div>
            <h3 class="strength-title">現場目線のアプリ開発力</h3>
            <p class="strength-description">
              スプレッドシート連携／自動PDF生成／LINE連携まで一気通貫で対応できます。
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">🌏</div>
            <h3 class="strength-title">バンコク発・グローバル対応</h3>
            <p class="strength-description">
              海外教育現場でも使える仕組みづくり。多言語対応も柔軟に対応します。
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">🤝</div>
            <h3 class="strength-title">直接対応で安心</h3>
            <p class="strength-description">
              開発者が直接対応するため、意思疎通がスムーズ。細かい要望にも柔軟に対応できます。
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section - Strong Dark CTA */}
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2 class="contact-title">お問い合わせ</h2>
          <p class="contact-subtitle">
            「あなたの仕事や教室に、AIをどう組み込めるか？」<br />
            まずはLINEで気軽にご相談ください。
          </p>
          <div class="contact-buttons">
            <a href="/contact" class="btn-contact-primary">
              ✉️ 問い合わせフォーム
            </a>
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-contact-secondary" target="_blank" rel="noopener noreferrer">
              📱 LINEはこちら
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
