import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const productsPage = () => (
  <>
    <head>
      <title>ビジネスツール・システム開発｜KOBEYA - はやい！安い！上手い！</title>
      <meta name="description" content="90点の品質を、3倍の速さと1/10の価格で。SNS自動投稿、格安ホームページ制作、請求書＆領収書自動発行など、実用的な日常業務を効率化する小規模システムを提供。" />
      <meta name="keywords" content="システム開発,格安,ホームページ制作,SNS自動投稿,請求書発行,領収書発行,業務効率化,バンコク,KOBEYA" />
      <meta property="og:title" content="ビジネスツール・システム開発｜KOBEYA" />
      <meta property="og:description" content="90点の品質を、3倍の速さと1/10の価格で実現。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/products" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/products" />
    </head>
    
    <style>{`
      :root {
        --primary-orange: #FF5722;
        --primary-blue: #2196F3;
        --primary-purple: #9C27B0;
        --navy-dark: #0f172a;
        --navy-medium: #1e293b;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --slate-50: #f8fafc;
        --slate-100: #f1f5f9;
      }
      
      body {
        font-family: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
        background: var(--slate-50);
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Hero Section */
      .hero-section {
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 100%);
        padding: 6rem 0 4rem;
        color: white;
        text-align: center;
      }

      .hero-badge {
        display: inline-block;
        background: rgba(255, 87, 34, 0.2);
        border: 1px solid rgba(255, 87, 34, 0.4);
        border-radius: 100px;
        padding: 0.5rem 1.5rem;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: #FFB74D;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }

      .hero-highlight {
        color: #FF5722;
        display: block;
        font-size: 2.5rem;
        margin-top: 1rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 3rem;
        font-weight: 500;
      }

      .hero-cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-hero-primary {
        background: linear-gradient(135deg, #FF5722 0%, #FF7043 100%);
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1rem;
        transition: all 0.3s;
        box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
      }

      .btn-hero-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(255, 87, 34, 0.4);
      }

      .btn-hero-secondary {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s;
      }

      .btn-hero-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
      }

      /* Value Proposition Section */
      .value-section {
        padding: 5rem 0;
        background: white;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 3rem;
        color: var(--text-dark);
      }

      .value-image-container {
        max-width: 1000px;
        margin: 0 auto 4rem;
        text-align: center;
      }

      .value-image {
        width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      }

      .value-points {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .value-card {
        background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        padding: 2rem;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        transition: all 0.3s;
      }

      .value-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        border-color: #FF5722;
      }

      .value-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .value-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: var(--text-dark);
      }

      .value-description {
        color: var(--text-gray);
        line-height: 1.8;
      }

      /* Products Section */
      .products-section {
        padding: 5rem 0;
        background: var(--slate-50);
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
        margin-top: 3rem;
      }

      .product-card {
        background: white;
        border-radius: 20px;
        padding: 2.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        transition: all 0.3s;
        border: 2px solid transparent;
      }

      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        border-color: var(--primary-orange);
      }

      .product-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #FF5722 0%, #FF7043 100%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 8px 20px rgba(255, 87, 34, 0.3);
      }

      .product-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-dark);
      }

      .product-description {
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 1.5rem;
      }

      .product-features {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }

      .product-features li {
        padding: 0.5rem 0;
        color: var(--text-gray);
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .product-features li:before {
        content: '✓';
        color: #4CAF50;
        font-weight: bold;
        font-size: 1.2rem;
      }

      .product-button {
        display: inline-block;
        background: linear-gradient(135deg, #FF5722 0%, #FF7043 100%);
        color: white;
        padding: 0.875rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;
        margin-top: 1rem;
      }

      .product-button:hover {
        transform: translateX(5px);
        box-shadow: 0 8px 20px rgba(255, 87, 34, 0.3);
      }

      /* CTA Section */
      .cta-section {
        background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy-medium) 100%);
        padding: 5rem 0;
        color: white;
        text-align: center;
      }

      .cta-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
      }

      .cta-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cta-button {
        padding: 1.25rem 3rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1rem;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
      }

      .cta-button-primary {
        background: white;
        color: var(--navy-dark);
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
      }

      .cta-button-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);
      }

      .cta-button-secondary {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
      }

      .cta-button-secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .hero-highlight {
          font-size: 2rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
        }

        .section-title {
          font-size: 2rem;
        }

        .products-grid {
          grid-template-columns: 1fr;
        }

        .hero-cta-buttons,
        .cta-buttons {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `}</style>

    <Header />

    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">💼 ビジネスツール・システム開発</div>
          <h1 class="hero-title">
            はやい！安い！上手い！
            <span class="hero-highlight">90点の品質を、3倍の速さと1/10の価格で。</span>
          </h1>
          <p class="hero-subtitle">
            圧倒的なコストパフォーマンスの実現。<br />
            実用的な日常業務の負担を少しだけ減らす小規模システム。
          </p>
          <div class="hero-cta-buttons">
            <a href="#products" class="btn-hero-primary">
              🚀 商品を見る
            </a>
            <a href="/contact" class="btn-hero-secondary">
              ✉️ お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Value Proposition Section */}
    <section class="value-section">
      <div class="container">
        <h2 class="section-title">KOBEYAの3つの強み</h2>
        
        <div class="value-image-container">
          <img src="/images/products-value-proposition.png" alt="90点の品質を、3倍の速さと1/10の価格で" class="value-image" />
        </div>

        <div class="value-points">
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3 class="value-title">スピード：3倍「はやい！」</h3>
            <p class="value-description">
              平均的な業者の30点に対し、当社は90点のスピードで迅速に納品。<br />
              無駄を省いた効率的な開発プロセスで、お待たせしません。
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">💰</div>
            <h3 class="value-title">価格：1/10で「安い！」</h3>
            <p class="value-description">
              大手業者のコストを10とした場合、当社は100（最高評価の安さ）を実現。<br />
              高品質でありながら、圧倒的なコストパフォーマンス。
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">✓</div>
            <h3 class="value-title">品質：十分に「上手い！」</h3>
            <p class="value-description">
              大手の100点に対し、90点の品質を維持し、実用性とコストのベストバランスを提供。<br />
              必要十分な機能で、無駄なく業務を効率化。
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Products Section */}
    <section class="products-section" id="products">
      <div class="container">
        <h2 class="section-title">提供サービス</h2>

        <div class="products-grid">
          {/* SNSスパークルスケジューラー */}
          <div class="product-card">
            <div class="product-icon">📱</div>
            <h3 class="product-title">SNSスパークルスケジューラー</h3>
            <p class="product-description">
              Instagram・Facebookへの投稿を完全自動化。教室運営・個人事業主様向けのSNS自動投稿システム。
            </p>
            <ul class="product-features">
              <li>2つのSNSに同時投稿</li>
              <li>予約投稿で運用自動化</li>
              <li>画像・コメント自動選択</li>
              <li>初年度 8,000バーツ〜</li>
            </ul>
            <a href="/store/sns-scheduler" class="product-button">
              詳細を見る →
            </a>
          </div>

          {/* 格安ホームページ制作 */}
          <div class="product-card">
            <div class="product-icon">🌐</div>
            <h3 class="product-title">格安ホームページ制作</h3>
            <p class="product-description">
              教室・事業主様向けの格安ホームページ制作サービス。レスポンシブ対応・SEO最適化・お問い合わせフォーム標準装備。
            </p>
            <ul class="product-features">
              <li>全デバイス対応</li>
              <li>SEO最適化済み</li>
              <li>高速表示</li>
              <li>10,000バーツ〜</li>
            </ul>
            <a href="/store/website-creation" class="product-button">
              詳細を見る →
            </a>
          </div>

          {/* 請求書＆領収書自動発行 */}
          <div class="product-card">
            <div class="product-icon">📄</div>
            <h3 class="product-title">請求書＆領収書自動発行</h3>
            <p class="product-description">
              月謝・受講料の請求書・領収書を自動生成。生徒管理と連携して効率的な請求業務を実現。
            </p>
            <ul class="product-features">
              <li>自動発行・自動送信</li>
              <li>生徒管理と連携</li>
              <li>PDF自動生成</li>
              <li>開発中・近日公開</li>
            </ul>
            <a href="/contact" class="product-button">
              お問い合わせ →
            </a>
          </div>

          {/* その他小規模システム */}
          <div class="product-card">
            <div class="product-icon">🔧</div>
            <h3 class="product-title">その他小規模システム</h3>
            <p class="product-description">
              日常業務の「ちょっとした手間」を自動化。Excel作業、データ入力、レポート生成など、あなたの業務に合わせたシステムを開発。
            </p>
            <ul class="product-features">
              <li>業務効率化ツール</li>
              <li>データ自動処理</li>
              <li>レポート自動生成</li>
              <li>お見積もり・ご相談</li>
            </ul>
            <a href="/contact" class="product-button">
              お問い合わせ →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">まずはお気軽にご相談ください</h2>
        <p class="cta-subtitle">
          「こんなツールが欲しい」「この作業を自動化したい」<br />
          どんな小さなことでも、お気軽にお問い合わせください。
        </p>
        <div class="cta-buttons">
          <a href="/contact" class="cta-button cta-button-primary">
            ✉️ お問い合わせフォーム
          </a>
          <a href="https://lin.ee/6xMf5qG" class="cta-button cta-button-secondary" target="_blank" rel="noopener noreferrer">
            💬 LINEで相談
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
