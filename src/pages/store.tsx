import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const storePage = () => (
  <>
    <head>
      <title>KOBEYAアプリストア｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYAが開発した学習アプリ。100マス計算ジェネレーター、漢字テストジェネレーターなど、子どもたちの学力向上をサポートするアプリを販売しています。" />
      <meta name="keywords" content="KOBEYAアプリストア,学習アプリ,100マス計算,漢字テスト,教材,KOBEYA,バンコク" />
      <meta property="og:title" content="KOBEYAアプリストア｜KOBEYA" />
      <meta property="og:description" content="学習アプリの販売。100マス計算・漢字テストジェネレーターなど。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/store" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/store" />
    </head>
    
    <style>{`
      :root {
        --store-primary: #1E88E5;
        --store-primary-dark: #1565C0;
        --store-primary-light: #42A5F5;
        --store-secondary: #0277BD;
        --store-accent: #00ACC1;
        --store-bg: #F5F7FA;
        --store-card-bg: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-color: #E2E8F0;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--text-dark);
        background: var(--store-bg);
      }

      .store-hero {
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-secondary) 100%);
        color: white;
        padding: 80px 0 60px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .store-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .store-hero-content {
        position: relative;
        z-index: 2;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .store-hero-icon {
        font-size: 4rem;
        margin-bottom: 20px;
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .store-hero-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .store-hero-subtitle {
        font-size: 1.3rem;
        opacity: 0.95;
        line-height: 1.6;
      }

      .store-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
      }

      .store-section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 40px;
        text-align: center;
      }

      .apps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 40px;
        margin-bottom: 60px;
      }

      .app-card {
        background: var(--store-card-bg);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(30, 136, 229, 0.1);
        transition: all 0.3s ease;
        border: 2px solid transparent;
        cursor: pointer;
      }

      .app-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(30, 136, 229, 0.2);
        border-color: var(--store-primary-light);
      }

      .app-card-image {
        width: 100%;
        height: 220px;
        background: linear-gradient(135deg, var(--store-primary-light) 0%, var(--store-accent) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;
        color: white;
        position: relative;
        overflow: hidden;
      }

      .app-card-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .app-card-icon {
        position: relative;
        z-index: 2;
      }

      .app-card-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.95);
        color: var(--store-primary);
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3;
      }

      .app-card-content {
        padding: 30px;
      }

      .app-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 10px;
      }

      .app-card-meta {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
        flex-wrap: wrap;
      }

      .app-card-meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--text-gray);
        font-size: 0.9rem;
      }

      .app-card-meta-item i {
        color: var(--store-primary);
      }

      .app-card-description {
        color: var(--text-gray);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .app-card-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--store-primary);
        margin-bottom: 20px;
      }

      .app-card-price-unit {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-gray);
      }

      .app-card-button {
        display: block;
        width: 100%;
        padding: 15px;
        background: var(--store-primary);
        color: white;
        text-align: center;
        text-decoration: none;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }

      .app-card-button:hover {
        background: var(--store-primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(30, 136, 229, 0.3);
      }

      .coming-soon-section {
        text-align: center;
        padding: 60px 20px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      }

      .coming-soon-icon {
        font-size: 3rem;
        margin-bottom: 20px;
        color: var(--store-primary);
      }

      .coming-soon-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .coming-soon-text {
        color: var(--text-gray);
        font-size: 1.1rem;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .store-hero-title {
          font-size: 2rem;
        }

        .store-hero-subtitle {
          font-size: 1rem;
        }

        .apps-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .store-section-title {
          font-size: 1.5rem;
        }

        .app-card-content {
          padding: 20px;
        }
      }
    `}</style>

    <Header />

    <main>
      {/* Hero Section */}
      <section class="store-hero">
        <div class="store-hero-content">
          <div class="store-hero-icon">🏪</div>
          <h1 class="store-hero-title">KOBEYAストア</h1>
          <p class="store-hero-subtitle">
            個人向け学習アプリから事業者向けビジネスツールまで<br/>
            高品質なソリューションを提供
          </p>
        </div>
      </section>

      {/* BtoC Section - 個人向け学習アプリ */}
      <div class="store-container">
        <div style="margin-bottom: 40px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; color: white;">
          <h2 style="font-size: 2rem; margin-bottom: 15px; display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 2.5rem;">🎓</span>
            個人向け学習アプリ（BtoC）
          </h2>
          <p style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
            子どもたちの学習をサポートする高品質なアプリ。買い切り型で追加料金なし。
          </p>
        </div>
        
        <div class="apps-grid">
          {/* 100マス計算ジェネレーター */}
          <div class="app-card" onclick="window.location.href='/store/100mas-calculator'">
            <div class="app-card-image" style="background: none;">
              <img src="/images/100mas-calculator-icon.png" alt="100マス計算" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">100マス計算ジェネレーター</h3>
              
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-users"></i>
                  小1〜中学生
                </span>
                <span class="app-card-meta-item">
                  <i class="fas fa-mobile-alt"></i>
                  デジタル・印刷両対応
                </span>
              </div>

              <p class="app-card-description">
                たす・ひく・かける・わるの四則計算に対応した100マス計算を自動生成。印刷もデジタル入力もできるハイブリッド型。
              </p>

              <div class="app-card-price">
                350<span class="app-card-price-unit">バーツ</span>
              </div>

              <div style="display: flex; gap: 10px; margin-top: 15px;">
                <a href="https://100-masu-generator.pages.dev/demo" target="_blank" rel="noopener noreferrer" class="app-card-button" style="flex: 1; background: #10B981; text-align: center;" onclick="event.stopPropagation();">
                  <i class="fas fa-play-circle"></i> デモを試す
                </a>
                <a href="/store/100mas-calculator" class="app-card-button" style="flex: 1; text-align: center;" onclick="event.stopPropagation();">
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>

          {/* 今後のアプリ予告（2つ表示） */}
          {/* 漢字テストジェネレーター */}
          <div class="app-card" onclick="window.location.href='/store/kanji-test'">
            <div class="app-card-image" style="background: none;">
              <span class="app-card-badge" style="background: #FF5722; color: white; font-weight: 700; font-size: 0.9rem;">🔥 期間限定！</span>
              <img src="/images/kanji-test-icon-optimized.png" alt="漢字テスト" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">漢字テストジェネレーター</h3>
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-users"></i>
                  小1〜小6
                </span>
                <span class="app-card-meta-item">
                  <i class="fas fa-pen"></i>
                  手書き・プリント対応
                </span>
              </div>
              <p class="app-card-description">
                小学校1〜6年生の全1026漢字を完全収録。練習モード・テストモードで効率的に漢字学習。
              </p>
              <div class="app-card-price">
                <span style="text-decoration: line-through; color: #999; font-size: 0.9rem; margin-right: 8px;">350</span>
                <span style="color: #FF5722; font-weight: 700; font-size: 1.3rem;">250</span><span class="app-card-price-unit">バーツ</span>
              </div>
              <p style="margin: 8px 0 0; font-size: 0.9rem; color: #FF5722; font-weight: 600;">🔥 今だけ100バーツOFF!</p>
              <div style="display: flex; gap: 10px; margin-top: 12px;">
                <a href="https://kanji-test-generator-demo.pages.dev/" class="app-card-button" style="flex: 1; background: #10B981; color: white; text-align: center;" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">
                  🎮 デモを試す
                </a>
                <a href="/store/kanji-test" class="app-card-button" style="flex: 1; text-align: center;" onclick="event.stopPropagation();">
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BtoB Section - 事業者向けビジネスツール */}
      <div class="store-container" style="margin-top: 80px;">
        <div style="margin-bottom: 40px; padding: 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 20px; color: white;">
          <h2 style="font-size: 2rem; margin-bottom: 15px; display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 2.5rem;">💼</span>
            事業者向けビジネスツール（BtoB）
          </h2>
          <p style="font-size: 1.1rem; line-height: 1.7; opacity: 0.95;">
            教室運営・個人事業主様向けの業務効率化ツール。カスタマイズ対応・お見積もり承ります。
          </p>
        </div>
        
        <div class="apps-grid">
          {/* SNSスパークルスケジューラー */}
          <div class="app-card" onclick="window.location.href='/store/sns-scheduler'">
            <div class="app-card-image" style="background: none;">
              <span class="app-card-badge" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 700; font-size: 0.9rem;">🚀 BtoB</span>
              <img src="/images/sns-scheduler-icon-optimized.png" alt="SNSスパークルスケジューラー" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">SNSスパークルスケジューラー</h3>
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-building"></i>
                  教室・事業主向け
                </span>
                <span class="app-card-meta-item">
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  3つのSNS
                </span>
              </div>
              <p class="app-card-description">
                Instagram・Facebook・Twitter への投稿を完全自動化。教室運営をもっと楽に。
              </p>
              <div class="app-card-price">
                <span style="text-decoration: line-through; color: #999; font-size: 0.9rem; margin-right: 8px;">10,000</span>
                <span style="color: #667eea; font-weight: 700; font-size: 1.3rem;">8,000</span><span class="app-card-price-unit">バーツ</span>
              </div>
              <p style="margin: 8px 0 0; font-size: 0.9rem; color: #667eea; font-weight: 600;">🎉 実績作りキャンペーン価格！</p>
              <div style="display: flex; gap: 10px; margin-top: 12px;">
                <a href="https://kobeyabkk.github.io/sns-sparkle-scheduler/" class="app-card-button" style="flex: 1; background: #10B981; color: white; text-align: center;" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">
                  🎮 デモを見る
                </a>
                <a href="/store/sns-scheduler" class="app-card-button" style="flex: 1; text-align: center;" onclick="event.stopPropagation();">
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>

          {/* ホームページ制作サービス */}
          <div class="app-card" onclick="window.location.href='/store/website-creation'">
            <div class="app-card-image" style="background: none;">
              <span class="app-card-badge" style="background: linear-gradient(135deg, #5B21B6 0%, #A855F7 100%); color: white; font-weight: 700; font-size: 0.9rem;">🚀 BtoB</span>
              <img src="/images/website-creation-icon-optimized.png" alt="ホームページ制作" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">ホームページ制作サービス</h3>
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-building"></i>
                  教室・事業主向け
                </span>
                <span class="app-card-meta-item">
                  <i class="fas fa-laptop-code"></i>
                  全デバイス対応
                </span>
              </div>
              <p class="app-card-description">
                格安で高品質なホームページを制作。レスポンシブデザイン・SEO対応・お問い合わせフォーム標準装備。
              </p>
              <div class="app-card-price">
                <span style="color: #5B21B6; font-weight: 700; font-size: 1.3rem;">10,000</span><span class="app-card-price-unit">バーツ 〜</span>
              </div>
              <p style="margin: 8px 0 0; font-size: 0.9rem; color: #5B21B6; font-weight: 600;">💼 お見積もり・ご相談承ります</p>
              <div style="display: flex; gap: 10px; margin-top: 12px;">
                <a href="/store/website-creation" class="app-card-button" style="flex: 1; text-align: center;" onclick="event.stopPropagation();">
                  詳細を見る →
                </a>
              </div>
            </div>
          </div>

          {/* 請求書自動発行ツール */}
          <div class="app-card" style="opacity: 0.6; cursor: default;">
            <div class="app-card-image">
              <span class="app-card-badge" style="background: #E2E8F0; color: #718096;">開発中</span>
              <span class="app-card-icon">📄</span>
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">請求書自動発行ツール</h3>
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-building"></i>
                  教室・事業主向け
                </span>
                <span class="app-card-meta-item">
                  <i class="fas fa-file-invoice"></i>
                  自動発行
                </span>
              </div>
              <p class="app-card-description">
                月謝・受講料の請求書を自動生成。生徒管理と連携して効率的な請求業務を実現。
              </p>
              <div class="app-card-price" style="color: #718096;">
                開発中
              </div>
              <button class="app-card-button" style="background: #E2E8F0; color: #718096; cursor: default;" disabled>
                近日公開
              </button>
            </div>
          </div>

          {/* 領収書自動発行ツール */}
          <div class="app-card" style="opacity: 0.6; cursor: default;">
            <div class="app-card-image">
              <span class="app-card-badge" style="background: #E2E8F0; color: #718096;">開発中</span>
              <span class="app-card-icon">🧾</span>
            </div>
            <div class="app-card-content">
              <h3 class="app-card-title">領収書自動発行ツール</h3>
              <div class="app-card-meta">
                <span class="app-card-meta-item">
                  <i class="fas fa-building"></i>
                  教室・事業主向け
                </span>
                <span class="app-card-meta-item">
                  <i class="fas fa-receipt"></i>
                  自動発行
                </span>
              </div>
              <p class="app-card-description">
                支払い確認後、自動で領収書を発行。PDF形式で保存・メール送信も可能。
              </p>
              <div class="app-card-price" style="color: #718096;">
                開発中
              </div>
              <button class="app-card-button" style="background: #E2E8F0; color: #718096; cursor: default;" disabled>
                近日公開
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div class="store-container" style="margin-top: 60px;">
        <div class="coming-soon-section">
          <div class="coming-soon-icon">🚀</div>
          <h3 class="coming-soon-title">さらに多くのアプリを開発中</h3>
          <p class="coming-soon-text">
            子どもたちの学習をサポートする様々なアプリを続々とリリース予定です。<br/>
            最新情報はLINEまたはメールでお知らせします。
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </>
)
