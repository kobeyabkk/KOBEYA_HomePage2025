import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aiConsultPage = () => (
  <>
    <head>
      <title>KOBEYA AIコンサル｜既存AIを"仕事で使える"にする最短1か月の伴走支援</title>
      <meta name="description" content="ChatGPT・Gemini・Genspark等を業務/副業に実装。教材・販促・問い合わせ・レポートの自動化/半自動化。非エンジニアOK、オンライン/対面対応。" />
      <meta property="og:title" content="KOBEYA AIコンサル｜既存AIを仕事で使える化する伴走支援" />
      <meta property="og:description" content="ChatGPT・Gemini・Genspark等を業務/副業に実装。教材・販促・問い合わせ・レポートの自動化/半自動化。非エンジニアOK、オンライン/対面対応。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/ai-consult" />
      <meta property="og:image" content="https://kobeya-programming.pages.dev/static/images/og-image-ai-consult.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="KOBEYA AIコンサル｜既存AIを仕事で使える化する伴走支援" />
      <meta name="twitter:description" content="ChatGPT・Gemini・Genspark等を業務/副業に実装。非エンジニアOK、オンライン/対面対応。" />
      <meta name="twitter:image" content="https://kobeya-programming.pages.dev/static/images/og-image-ai-consult.jpg" />
    </head>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
      }
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
      }

      .ai-consult-hero {
        position: relative;
        overflow: hidden;
        background: linear-gradient(to bottom, white, rgb(248 250 252));
      }

      .hero-accent-circle-1 {
        pointer-events: none;
        position: absolute;
        top: -6rem;
        right: -6rem;
        height: 18rem;
        width: 18rem;
        border-radius: 9999px;
        background-color: rgb(224 231 255);
        filter: blur(64px);
        opacity: 0.6;
      }

      .hero-accent-circle-2 {
        pointer-events: none;
        position: absolute;
        bottom: -6rem;
        left: -6rem;
        height: 18rem;
        width: 18rem;
        border-radius: 9999px;
        background-color: rgb(207 250 254);
        filter: blur(64px);
        opacity: 0.6;
      }

      .hero-header {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 1.25rem 0;
      }

      .hero-logo-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .hero-logo-icon {
        height: 2.25rem;
        width: 2.25rem;
        border-radius: 0.75rem;
        background-color: rgb(79 70 229);
      }

      .hero-logo-text {
        font-size: 1.125rem;
        font-weight: 600;
        letter-spacing: -0.025em;
      }

      .hero-nav {
        display: none;
        gap: 1.5rem;
        font-size: 0.875rem;
        color: var(--text-gray);
      }

      @media (min-width: 768px) {
        .hero-nav {
          display: flex;
        }
      }

      .hero-nav a:hover {
        color: var(--text-dark);
      }

      .hero-section {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: 2.5rem;
        padding: 2.5rem 1.25rem 3.5rem;
      }

      @media (min-width: 768px) {
        .hero-section {
          grid-template-columns: repeat(2, 1fr);
          gap: 3.5rem;
          padding-top: 4rem;
          padding-bottom: 5rem;
        }
      }

      .hero-badge {
        margin-bottom: 1rem;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 9999px;
        border: 1px solid rgb(226 232 240);
        background-color: white;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        color: var(--text-gray);
      }

      .hero-badge-dot {
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 9999px;
        background-color: rgb(16 185 129);
      }

      .hero-title {
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 1.25;
        letter-spacing: -0.025em;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      @media (min-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }
      }

      .hero-title-gradient {
        background: linear-gradient(to right, rgb(79 70 229), rgb(192 38 211), rgb(8 145 178));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .hero-description {
        margin-top: 1rem;
        max-width: 36rem;
        color: var(--text-gray);
      }

      @media (min-width: 768px) {
        .hero-description {
          font-size: 1.125rem;
        }
      }

      .hero-features {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
        max-width: 36rem;
        font-size: 0.875rem;
        color: rgb(51 65 85);
      }

      @media (min-width: 768px) {
        .hero-features {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .hero-feature-item {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .hero-feature-dot {
        margin-top: 0.25rem;
        display: inline-block;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 9999px;
        background-color: rgb(79 70 229);
      }

      .hero-cta-group {
        margin-top: 1.75rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }

      @media (min-width: 640px) {
        .hero-cta-group {
          flex-direction: row;
        }
      }

      .btn-cta-primary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        background-color: rgb(79 70 229);
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: white;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        transition: all 0.2s;
        text-decoration: none;
      }

      .btn-cta-primary:hover {
        background-color: rgb(67 56 202);
      }

      .btn-cta-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        border: 1px solid rgb(226 232 240);
        background-color: white;
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text-dark);
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        transition: all 0.2s;
        text-decoration: none;
      }

      .btn-cta-secondary:hover {
        background-color: rgb(248 250 252);
      }

      .hero-email-form {
        margin-top: 1.25rem;
        display: flex;
        max-width: 28rem;
        align-items: center;
        gap: 0.5rem;
      }

      .hero-email-input {
        width: 100%;
        border-radius: 0.75rem;
        border: 1px solid rgb(226 232 240);
        background-color: white;
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        outline: none;
      }

      .hero-email-input:focus {
        ring: 2px;
        ring-color: rgb(199 210 254);
      }

      .hero-email-input::placeholder {
        color: rgb(148 163 184);
      }

      .hero-email-submit {
        display: inline-flex;
        align-items: center;
        border-radius: 0.75rem;
        background-color: rgb(15 23 42);
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: white;
        transition: all 0.2s;
        border: none;
        cursor: pointer;
      }

      .hero-email-submit:hover {
        background-color: rgb(30 41 59);
      }

      .hero-trust-text {
        margin-top: 1.5rem;
        font-size: 0.75rem;
        color: var(--text-light);
      }

      .hero-mock-card {
        position: relative;
      }

      .hero-mock-card-inner {
        border-radius: 1.5rem;
        border: 1px solid rgb(226 232 240);
        background-color: rgb(255 255 255 / 0.8);
        padding: 1rem;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
        backdrop-filter: blur(8px);
      }

      @media (min-width: 768px) {
        .hero-mock-card-inner {
          padding: 1.5rem;
        }
      }

      .hero-mock-label {
        margin-bottom: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--text-light);
      }

      .hero-mock-grid {
        display: grid;
        gap: 0.75rem;
      }

      @media (min-width: 768px) {
        .hero-mock-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .hero-mock-item {
        border-radius: 1rem;
        border: 1px solid rgb(226 232 240);
        padding: 1rem;
      }

      .hero-mock-item-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      .hero-mock-item-desc {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: var(--text-gray);
      }

      .hero-mock-note {
        margin-top: 1rem;
        border-radius: 1rem;
        background-color: rgb(248 250 252);
        padding: 1rem;
        font-size: 0.75rem;
        color: var(--text-gray);
      }

      .trust-section {
        max-width: 80rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0 1.25rem 4rem;
      }

      .trust-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        border-radius: 1.5rem;
        border: 1px solid rgb(226 232 240);
        background-color: white;
        padding: 1.5rem;
      }

      @media (min-width: 768px) {
        .trust-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .trust-item {
        text-align: center;
      }

      .trust-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
      }

      .trust-label {
        font-size: 0.75rem;
        color: var(--text-light);
      }

      .icon-calendar {
        display: inline-block;
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
      }

      .icon-play {
        display: inline-block;
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
      }

      .icon-chevron {
        display: inline-block;
        margin-left: 0.25rem;
        height: 1rem;
        width: 1rem;
      }
    `}</style>

    <Header />

    <div class="ai-consult-hero">
      <div class="hero-accent-circle-1" />
      <div class="hero-accent-circle-2" />

      <section class="hero-section">
        <div>
          <div class="hero-badge">
            <span class="hero-badge-dot" />
            はじめてのAI活用でも安心｜伴走型で確実に定着
          </div>

          <h1 class="hero-title">
            既存AIを"仕事で使える"にする。
            <br class="hidden md:block" />
            <span class="hero-title-gradient">最短1か月の伴走支援</span>
          </h1>

          <p class="hero-description">
            ChatGPT・Gemini・Gensparkなどを、日々の業務／副業に実装。教材・資料作成、SNS運用、顧客対応、レポート作成を自動化・半自動化します。
            コーディング不要でもOK。必要に応じて軽い連携ツールも制作します。
          </p>

          <ul class="hero-features">
            <li class="hero-feature-item">
              <span class="hero-feature-dot" />
              業務テンプレ＆プロンプト設計
            </li>
            <li class="hero-feature-item">
              <span class="hero-feature-dot" />
              Googleスプレッドシート連携
            </li>
            <li class="hero-feature-item">
              <span class="hero-feature-dot" />
              LINE/フォーム自動返信
            </li>
            <li class="hero-feature-item">
              <span class="hero-feature-dot" />
              Canva×AIで販促強化
            </li>
          </ul>

          <div class="hero-cta-group">
            <a
              id="ai-consult-booking-cta"
              data-cta="booking"
              href="https://line.me/R/ti/p/@093dagwm"
              class="btn-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINEで無料相談を予約"
            >
              <svg class="icon-calendar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              無料相談を予約
            </a>
            <a
              id="ai-consult-video-cta"
              data-cta="video"
              href="#intro-video"
              class="btn-cta-secondary"
              aria-label="2分で概要を見る"
            >
              <svg class="icon-play" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              2分で概要を見る
            </a>
          </div>

          <form class="hero-email-form">
            <input
              type="email"
              placeholder="仕事でAIを使いこなすヒントを受け取る"
              class="hero-email-input"
            />
            <button type="button" class="hero-email-submit">
              登録
              <svg class="icon-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </form>

          <div class="hero-trust-text">
            教育機関｜個人事業主｜小規模企業のご相談が増えています（バンコク・オンライン対応可）
          </div>
        </div>

        <div class="hero-mock-card">
          <div class="hero-mock-card-inner">
            <div class="hero-mock-label">例：ChatGPTで"教室運営"を自動化</div>
            <div class="hero-mock-grid">
              <div class="hero-mock-item">
                <p class="hero-mock-item-title">集客文の自動作成</p>
                <p class="hero-mock-item-desc">Canva×ChatGPTでLP/チラシ文案を生成→修正→即デザイン</p>
              </div>
              <div class="hero-mock-item">
                <p class="hero-mock-item-title">問い合わせ自動返信</p>
                <p class="hero-mock-item-desc">LINE/フォームで一次対応→見学予約まで自動化</p>
              </div>
              <div class="hero-mock-item">
                <p class="hero-mock-item-title">教材の半自動生成</p>
                <p class="hero-mock-item-desc">小テスト/ワークシート/台本をテンプレ＋AIで量産</p>
              </div>
              <div class="hero-mock-item">
                <p class="hero-mock-item-title">レポート自動化</p>
                <p class="hero-mock-item-desc">日報/保護者向け連絡をスプレッドシート連携で</p>
              </div>
            </div>
            <div class="hero-mock-note">
              <p>※ 実装は"既存AIの活用"が前提。必要時のみ軽いGAS/簡易ツール制作にも対応します。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-section">
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-number">1か月伴走</div>
            <div class="trust-label">毎週60分×4回＋チャットサポート</div>
          </div>
          <div class="trust-item">
            <div class="trust-number">非エンジニアOK</div>
            <div class="trust-label">既存AIだけで"できる化"を目指す</div>
          </div>
          <div class="trust-item">
            <div class="trust-number">オンライン/対面</div>
            <div class="trust-label">バンコク拠点・日本語で対応</div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>
)
