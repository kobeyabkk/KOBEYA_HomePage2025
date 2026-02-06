import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const storeWebsiteCreationPage = () => (
  <>
    <head>
      <title>ホームページ制作サービス｜KOBEYAストア｜KOBEYA</title>
      <meta name="description" content="教室・事業主様向けのホームページ制作サービス。格安10,000バーツ〜。レスポンシブ対応、SEO最適化、お問い合わせフォーム標準装備。" />
      <meta name="keywords" content="ホームページ制作,Web制作,格安,教室,事業主,KOBEYA,バンコク,タイ" />
      <meta property="og:title" content="ホームページ制作サービス｜KOBEYA" />
      <meta property="og:description" content="教室・事業主様向けの格安ホームページ制作サービス。10,000バーツから対応。" />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/store/website-creation" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/store/website-creation" />
    </head>
    
    <style>{`
      :root {
        --store-primary: #5B21B6;
        --store-primary-dark: #4C1D95;
        --store-primary-light: #7C3AED;
        --store-secondary: #7E22CE;
        --store-accent: #A855F7;
        --store-bg: #F5F7FA;
        --store-card-bg: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-color: #E2E8F0;
        --success-green: #10B981;
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

      .breadcrumb {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 20px 0;
        display: flex;
        gap: 10px;
        align-items: center;
        color: var(--text-gray);
        font-size: 0.9rem;
      }

      .breadcrumb a {
        color: var(--store-primary);
        text-decoration: none;
        transition: color 0.2s;
      }

      .breadcrumb a:hover {
        color: var(--store-primary-dark);
        text-decoration: underline;
      }

      .product-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px 80px;
      }

      .product-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        margin-bottom: 80px;
        align-items: start;
      }

      .product-image-section {
        position: sticky;
        top: 100px;
      }

      .product-image {
        width: 100%;
        aspect-ratio: 1;
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-accent) 100%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 20px 50px rgba(91, 33, 182, 0.2);
        position: relative;
        overflow: hidden;
      }

      .product-image::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: rotate 20s linear infinite;
      }

      .product-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 20px;
        position: relative;
        z-index: 10;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .product-info {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .product-badge {
        display: inline-block;
        background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: bold;
        align-self: flex-start;
        box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
      }

      .product-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--text-dark);
        line-height: 1.2;
      }

      .product-subtitle {
        font-size: 1.2rem;
        color: var(--text-gray);
        line-height: 1.6;
      }

      .product-meta {
        display: grid;
        gap: 15px;
        background: white;
        padding: 25px;
        border-radius: 15px;
        border: 2px solid var(--border-color);
      }

      .product-meta-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid var(--border-color);
      }

      .product-meta-item:last-child {
        border-bottom: none;
      }

      .product-meta-label {
        font-weight: 600;
        color: var(--text-gray);
        font-size: 0.95rem;
      }

      .product-meta-value {
        font-weight: bold;
        color: var(--text-dark);
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .product-meta-value i {
        color: var(--store-primary);
      }

      .product-price {
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-accent) 100%);
        color: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(91, 33, 182, 0.3);
      }

      .price-label {
        font-size: 0.95rem;
        opacity: 0.9;
        margin-bottom: 10px;
      }

      .price-value {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .price-note {
        font-size: 0.85rem;
        opacity: 0.8;
      }

      .product-cta {
        display: flex;
        gap: 15px;
        margin-top: 10px;
      }

      .cta-button {
        flex: 1;
        padding: 18px 40px;
        border: none;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .cta-button.primary {
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-accent) 100%);
        color: white;
        box-shadow: 0 8px 20px rgba(91, 33, 182, 0.3);
      }

      .cta-button.primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(91, 33, 182, 0.4);
      }

      .cta-button.secondary {
        background: white;
        color: var(--store-primary);
        border: 2px solid var(--store-primary);
      }

      .cta-button.secondary:hover {
        background: var(--store-bg);
        transform: translateY(-2px);
      }

      .product-section {
        background: white;
        padding: 50px;
        border-radius: 20px;
        margin-bottom: 40px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }

      .section-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 30px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .section-title i {
        color: var(--store-primary);
        font-size: 2rem;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin-top: 30px;
      }

      .feature-card {
        padding: 30px;
        border: 2px solid var(--border-color);
        border-radius: 15px;
        text-align: center;
        transition: all 0.3s;
        background: white;
      }

      .feature-card:hover {
        border-color: var(--store-primary);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(91, 33, 182, 0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 20px;
        display: block;
      }

      .feature-title {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--text-dark);
      }

      .feature-description {
        color: var(--text-gray);
        line-height: 1.8;
      }

      .pricing-table {
        display: grid;
        gap: 25px;
        margin-top: 30px;
      }

      .pricing-row {
        display: grid;
        grid-template-columns: 2fr 3fr 2fr;
        gap: 20px;
        padding: 20px;
        background: var(--store-bg);
        border-radius: 12px;
        align-items: center;
      }

      .pricing-row.header {
        background: var(--store-primary);
        color: white;
        font-weight: bold;
      }

      .pricing-item {
        padding: 10px;
      }

      .pricing-item.highlight {
        color: var(--store-primary);
        font-weight: bold;
        font-size: 1.1rem;
      }

      .process-steps {
        display: grid;
        gap: 30px;
        margin-top: 30px;
      }

      .process-step {
        display: flex;
        gap: 30px;
        align-items: start;
        padding: 30px;
        background: var(--store-bg);
        border-radius: 15px;
        border-left: 5px solid var(--store-primary);
      }

      .step-number {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-accent) 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: bold;
        flex-shrink: 0;
      }

      .step-content h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: var(--text-dark);
      }

      .step-content p {
        color: var(--text-gray);
        line-height: 1.8;
      }

      .highlight-box {
        background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
        border-left: 5px solid #FF9800;
        padding: 25px;
        border-radius: 12px;
        margin: 30px 0;
      }

      .highlight-box h4 {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: #E65100;
      }

      .highlight-box p {
        color: var(--text-dark);
        line-height: 1.8;
      }

      .contact-section {
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-accent) 100%);
        color: white;
        padding: 50px;
        border-radius: 20px;
        text-align: center;
        margin-top: 60px;
      }

      .contact-section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .contact-section p {
        font-size: 1.1rem;
        margin-bottom: 30px;
        opacity: 0.9;
      }

      .contact-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .contact-button {
        padding: 15px 40px;
        background: white;
        color: var(--store-primary);
        border: none;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s;
      }

      .contact-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
      }

      .faq-list {
        display: grid;
        gap: 20px;
        margin-top: 30px;
      }

      .faq-item {
        background: var(--store-bg);
        padding: 25px;
        border-radius: 12px;
        border-left: 4px solid var(--store-primary);
      }

      .faq-question {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-dark);
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .faq-question i {
        color: var(--store-primary);
      }

      .faq-answer {
        color: var(--text-gray);
        line-height: 1.8;
      }

      @media (max-width: 968px) {
        .product-header {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .product-image-section {
          position: static;
        }

        .product-title {
          font-size: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
        }

        .features-grid {
          grid-template-columns: 1fr;
        }

        .pricing-row {
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .product-cta {
          flex-direction: column;
        }

        .contact-buttons {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `}</style>

    <Header />

    <div className="breadcrumb">
      <a href="/">ホーム</a>
      <span>›</span>
      <a href="/store">ストア</a>
      <span>›</span>
      <span>ホームページ制作サービス</span>
    </div>

    <div className="product-container">
      {/* ヘッダーセクション */}
      <div className="product-header">
        {/* 左側：商品画像 */}
        <div className="product-image-section">
          <div className="product-image">
            <img src="/images/website-creation-icon.png" alt="ホームページ制作サービス" />
          </div>
        </div>

        {/* 右側：商品情報 */}
        <div className="product-info">
          <div className="product-badge">🚀 BtoB サービス</div>
          
          <h1 className="product-title">
            ホームページ制作サービス
          </h1>
          
          <p className="product-subtitle">
            教室・事業主様向けの格安ホームページ制作サービス。<br />
            プロフェッショナルなデザインと機能を、<br />
            手頃な価格でご提供します。
          </p>

          {/* 商品情報 */}
          <div className="product-meta">
            <div className="product-meta-item">
              <span className="product-meta-label">対象</span>
              <span className="product-meta-value">
                <i className="fas fa-building"></i>
                教室・個人事業主
              </span>
            </div>
            <div className="product-meta-item">
              <span className="product-meta-label">種類</span>
              <span className="product-meta-value">
                <i className="fas fa-laptop-code"></i>
                ホームページ制作
              </span>
            </div>
            <div className="product-meta-item">
              <span className="product-meta-label">対応デバイス</span>
              <span className="product-meta-value">
                <i className="fas fa-mobile-alt"></i>
                全デバイス対応
              </span>
            </div>
            <div className="product-meta-item">
              <span className="product-meta-label">納期</span>
              <span className="product-meta-value">
                <i className="fas fa-clock"></i>
                2週間〜4週間
              </span>
            </div>
            <div className="product-meta-item">
              <span className="product-meta-label">料金</span>
              <span className="product-meta-value highlight">
                <i className="fas fa-tag"></i>
                10,000 バーツ 〜
              </span>
            </div>
          </div>

          {/* 価格 */}
          <div className="product-price">
            <div className="price-label">基本料金</div>
            <div className="price-value">10,000 バーツ〜</div>
            <div className="price-note">※ ページ数・機能により変動</div>
          </div>

          {/* CTA */}
          <div className="product-cta">
            <a href="#contact" className="cta-button primary">
              <i className="fas fa-envelope"></i>
              お見積もり・相談する
            </a>
            <a href="#features" className="cta-button secondary">
              <i className="fas fa-info-circle"></i>
              詳細を見る
            </a>
          </div>
        </div>
      </div>

      {/* 5つの特徴 */}
      <div className="product-section" id="features">
        <h2 className="section-title">
          <i className="fas fa-star"></i>
          5つの特徴
        </h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3 className="feature-title">格安料金</h3>
            <p className="feature-description">
              10,000バーツから対応。<br />
              教室・個人事業主様でも<br />
              手が届く価格設定。
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3 className="feature-title">完全レスポンシブ</h3>
            <p className="feature-description">
              PC・タブレット・スマホ<br />
              全てのデバイスに<br />
              完璧に対応。
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3 className="feature-title">プロのデザイン</h3>
            <p className="feature-description">
              現代的でプロフェッショナルな<br />
              デザインを実現。<br />
              ブランドイメージを向上。
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🚀</span>
            <h3 className="feature-title">高速表示</h3>
            <p className="feature-description">
              最新技術で構築。<br />
              ページの読み込みが<br />
              高速・快適。
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📧</span>
            <h3 className="feature-title">お問い合わせ機能</h3>
            <p className="feature-description">
              お問い合わせフォームを<br />
              標準装備。顧客からの<br />
              連絡を逃しません。
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔍</span>
            <h3 className="feature-title">SEO最適化</h3>
            <p className="feature-description">
              Google検索で<br />
              見つかりやすい構造。<br />
              集客力アップ。
            </p>
          </div>
        </div>
      </div>

      {/* 標準機能 */}
      <div className="product-section">
        <h2 className="section-title">
          <i className="fas fa-check-circle"></i>
          標準機能
        </h2>

        <div className="highlight-box">
          <h4>📦 基本パッケージに含まれるもの</h4>
          <p>
            トップページ、会社概要/教室紹介ページ、サービス/コース紹介ページ、
            お問い合わせページ（フォーム付き）、プライバシーポリシーページ、
            レスポンシブデザイン、SEO基本設定、Google Analytics設定、
            独自ドメイン設定サポート、無料SSL証明書設定、
            初回修正2回まで無料
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📄</span>
            <h3 className="feature-title">最大5ページ</h3>
            <p className="feature-description">
              トップ・会社概要・サービス<br />
              お問い合わせ・その他1ページ
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3 className="feature-title">カスタムデザイン</h3>
            <p className="feature-description">
              ご希望に合わせた<br />
              オリジナルデザイン
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📸</span>
            <h3 className="feature-title">画像最適化</h3>
            <p className="feature-description">
              お預かりした画像を<br />
              Web用に最適化
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔧</span>
            <h3 className="feature-title">CMSオプション</h3>
            <p className="feature-description">
              ご自身で更新可能な<br />
              CMS導入も対応可能
            </p>
          </div>
        </div>
      </div>

      {/* 料金プラン */}
      <div className="product-section">
        <h2 className="section-title">
          <i className="fas fa-dollar-sign"></i>
          料金プラン
        </h2>

        <div className="pricing-table">
          <div className="pricing-row header">
            <div className="pricing-item">プラン</div>
            <div className="pricing-item">内容</div>
            <div className="pricing-item">料金</div>
          </div>

          <div className="pricing-row">
            <div className="pricing-item">
              <strong>ベーシック</strong>
            </div>
            <div className="pricing-item">
              5ページまで、レスポンシブデザイン、お問い合わせフォーム、SEO基本設定
            </div>
            <div className="pricing-item highlight">
              10,000 B
            </div>
          </div>

          <div className="pricing-row">
            <div className="pricing-item">
              <strong>スタンダード</strong>
            </div>
            <div className="pricing-item">
              10ページまで、ブログ機能、SNS連携、Google Maps埋め込み
            </div>
            <div className="pricing-item highlight">
              18,000 B
            </div>
          </div>

          <div className="pricing-row">
            <div className="pricing-item">
              <strong>プレミアム</strong>
            </div>
            <div className="pricing-item">
              無制限ページ、予約システム、会員機能、CMS導入、月次レポート
            </div>
            <div className="pricing-item highlight">
              お見積もり
            </div>
          </div>

          <div className="pricing-row">
            <div className="pricing-item">
              <strong>オプション</strong>
            </div>
            <div className="pricing-item">
              ロゴ制作、追加ページ、多言語対応、EC機能、保守管理など
            </div>
            <div className="pricing-item highlight">
              都度見積
            </div>
          </div>
        </div>

        <div className="highlight-box">
          <h4>💡 追加料金について</h4>
          <p>
            追加ページ：1ページあたり 1,500バーツ<br />
            ロゴ制作：3,000バーツ〜<br />
            多言語対応（タイ語・英語）：5,000バーツ〜<br />
            月額保守管理：1,000バーツ/月〜
          </p>
        </div>
      </div>

      {/* 制作の流れ */}
      <div className="product-section">
        <h2 className="section-title">
          <i className="fas fa-tasks"></i>
          制作の流れ
        </h2>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>お問い合わせ・ヒアリング</h3>
              <p>
                LINE・メールでお気軽にお問い合わせください。
                ご要望、目的、予算などを詳しくお伺いします。
                必要に応じてZoomでのオンライン打ち合わせも可能です。
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>お見積もり・ご提案</h3>
              <p>
                ヒアリング内容を基に、最適なプランと料金をご提案。
                デザインのイメージ、参考サイト、スケジュールなどを
                ご提示します。内容にご納得いただけましたら、ご契約となります。
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>デザイン制作</h3>
              <p>
                トップページのデザイン案を作成し、ご確認いただきます。
                修正のご要望があれば対応いたします（2回まで無料）。
                デザイン確定後、全ページの制作に進みます。
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>開発・実装</h3>
              <p>
                確定したデザインを基に、コーディング作業を行います。
                レスポンシブ対応、お問い合わせフォーム、SEO設定など、
                必要な機能を実装します。
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>テスト・修正</h3>
              <p>
                完成したサイトをテスト環境でご確認いただきます。
                動作確認、表示確認、内容の最終チェックを行い、
                必要に応じて修正を加えます。
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>納品・公開</h3>
              <p>
                ドメイン・サーバーの設定を行い、サイトを公開します。
                Google Analyticsの設定、簡単な操作マニュアルもご提供。
                公開後も不明点があればサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* よくある質問 */}
      <div className="product-section">
        <h2 className="section-title">
          <i className="fas fa-question-circle"></i>
          よくある質問
        </h2>

        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              制作期間はどのくらいですか？
            </div>
            <div className="faq-answer">
              ベーシックプランで約2〜3週間、スタンダードプランで約3〜4週間が目安です。
              内容や修正回数により前後する場合があります。
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              ドメインやサーバーは自分で用意する必要がありますか？
            </div>
            <div className="faq-answer">
              ご自身でご用意いただくことも、弊社でサポートすることも可能です。
              初めての方には、取得方法から丁寧にご案内いたします。
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              公開後に自分で更新することはできますか？
            </div>
            <div className="faq-answer">
              CMSオプションをご利用いただければ、ご自身で簡単に更新が可能です。
              WordPress等の導入も承ります（別途料金）。
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              デザインのイメージがまだ決まっていないのですが...
            </div>
            <div className="faq-answer">
              ご安心ください。ヒアリングを通じて、業種やターゲット層に合わせた
              最適なデザインをご提案いたします。参考サイトのご紹介も可能です。
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              多言語対応は可能ですか？
            </div>
            <div className="faq-answer">
              はい、タイ語・英語への翻訳、多言語サイトの構築にも対応しております。
              別途お見積もりとなります。
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <i className="fas fa-check-circle"></i>
              予約システムやECサイトも作れますか？
            </div>
            <div className="faq-answer">
              はい、対応可能です。プレミアムプランまたはカスタムプランにて
              お見積もりいたします。お気軽にご相談ください。
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="contact-section" id="contact">
        <h2>お見積もり・ご相談はこちら</h2>
        <p>
          ご不明な点、ご要望などお気軽にお問い合わせください。<br />
          丁寧にご対応させていただきます。
        </p>
        
        <div className="contact-buttons">
          <a href="https://lin.ee/6xMf5qG" target="_blank" rel="noopener noreferrer" className="contact-button">
            <i className="fab fa-line"></i>
            LINEで相談する
          </a>
          <a href="/contact" className="contact-button">
            <i className="fas fa-envelope"></i>
            メールで相談する
          </a>
        </div>
      </div>

      {/* 制作者情報 */}
      <div className="product-section">
        <h2 className="section-title">
          <i className="fas fa-user-tie"></i>
          制作者情報
        </h2>
        
        <div style={{ lineHeight: '2' }}>
          <p>
            <strong>KOBEYA</strong><br />
            バンコクを拠点に、教室・事業主様向けのホームページ制作サービスを提供しています。<br />
            学習アプリの開発経験を活かし、使いやすく効果的なWebサイトをお作りします。
          </p>
          <br />
          <p>
            <strong>関連サイト</strong><br />
            🌐 <a href="https://kobeyabkk-homepage.pages.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--store-primary)' }}>KOBEYA 公式サイト</a><br />
            📧 <a href="mailto:info@kobeya.com" style={{ color: 'var(--store-primary)' }}>info@kobeya.com</a>
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </>
)
