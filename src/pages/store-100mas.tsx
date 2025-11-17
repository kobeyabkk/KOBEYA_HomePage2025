import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const store100masPage = () => (
  <>
    <head>
      <title>100マス計算ジェネレーター｜アプリストア｜KOBEYA</title>
      <meta name="description" content="算数の基礎力を鍛える100マス計算を自動生成。印刷もデジタル入力もできるハイブリッド型。小学1年生から中学生まで対応。" />
      <meta name="keywords" content="100マス計算,算数,学習アプリ,教材,KOBEYA,バンコク" />
      <meta property="og:title" content="100マス計算ジェネレーター｜KOBEYA" />
      <meta property="og:description" content="算数の基礎力を鍛える100マス計算アプリ。印刷もデジタル入力も可能。" />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/store/100mas-calculator" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/store/100mas-calculator" />
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
        background: linear-gradient(135deg, var(--store-primary-light) 0%, var(--store-accent) 100%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8rem;
        color: white;
        box-shadow: 0 20px 50px rgba(30, 136, 229, 0.2);
        position: relative;
        overflow: hidden;
      }

      .product-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .product-icon {
        position: relative;
        z-index: 2;
      }

      .product-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: white;
        color: var(--store-primary);
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: 700;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3;
      }

      .product-info {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      }

      .product-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
        line-height: 1.3;
      }

      .product-subtitle {
        font-size: 1.2rem;
        color: var(--text-gray);
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .product-meta {
        display: flex;
        gap: 30px;
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 2px solid var(--border-color);
        flex-wrap: wrap;
      }

      .product-meta-item {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .product-meta-label {
        font-size: 0.85rem;
        color: var(--text-gray);
        font-weight: 500;
      }

      .product-meta-value {
        font-size: 1.1rem;
        color: var(--text-dark);
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .product-meta-value i {
        color: var(--store-primary);
      }

      .product-price {
        font-size: 3rem;
        font-weight: 700;
        color: var(--store-primary);
        margin-bottom: 10px;
      }

      .product-price-unit {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--text-gray);
      }

      .product-price-note {
        color: var(--text-gray);
        font-size: 0.9rem;
        margin-bottom: 30px;
      }

      .purchase-section {
        background: var(--store-bg);
        padding: 30px;
        border-radius: 15px;
        margin-bottom: 30px;
      }

      .purchase-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .purchase-methods {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 25px;
      }

      .purchase-method {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 15px;
        background: white;
        border-radius: 10px;
        border: 2px solid var(--border-color);
      }

      .purchase-method i {
        font-size: 1.5rem;
        color: var(--store-primary);
      }

      .purchase-method-name {
        font-weight: 600;
        color: var(--text-dark);
      }

      .purchase-button {
        display: block;
        width: 100%;
        padding: 20px;
        background: var(--store-primary);
        color: white;
        text-align: center;
        text-decoration: none;
        border-radius: 15px;
        font-weight: 700;
        font-size: 1.3rem;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(30, 136, 229, 0.3);
      }

      .purchase-button:hover {
        background: var(--store-primary-dark);
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(30, 136, 229, 0.4);
      }

      .purchase-button i {
        margin-right: 10px;
      }

      .purchase-note {
        margin-top: 20px;
        padding: 15px;
        background: #FFF4E5;
        border-left: 4px solid #FF9800;
        border-radius: 8px;
        font-size: 0.9rem;
        color: var(--text-dark);
        line-height: 1.6;
      }

      .product-details {
        margin-top: 60px;
      }

      .detail-section {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        margin-bottom: 30px;
      }

      .detail-section-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .detail-section-title i {
        color: var(--store-primary);
      }

      .detail-content {
        color: var(--text-gray);
        line-height: 1.8;
        font-size: 1.05rem;
      }

      .detail-content p {
        margin-bottom: 15px;
      }

      .detail-content ul {
        margin: 20px 0;
        padding-left: 25px;
      }

      .detail-content li {
        margin-bottom: 12px;
        line-height: 1.7;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
        margin-top: 30px;
      }

      .feature-card {
        padding: 25px;
        background: var(--store-bg);
        border-radius: 15px;
        border: 2px solid var(--border-color);
        transition: all 0.3s ease;
      }

      .feature-card:hover {
        border-color: var(--store-primary-light);
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(30, 136, 229, 0.1);
      }

      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 15px;
      }

      .feature-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 10px;
      }

      .feature-description {
        color: var(--text-gray);
        font-size: 0.95rem;
        line-height: 1.6;
      }

      .back-to-store {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--store-primary);
        text-decoration: none;
        font-weight: 600;
        padding: 12px 24px;
        border: 2px solid var(--store-primary);
        border-radius: 10px;
        transition: all 0.3s ease;
        margin-top: 40px;
      }

      .back-to-store:hover {
        background: var(--store-primary);
        color: white;
        transform: translateX(-5px);
      }

      @media (max-width: 968px) {
        .product-header {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .product-image-section {
          position: static;
        }

        .product-image {
          font-size: 6rem;
        }

        .product-title {
          font-size: 2rem;
        }

        .product-price {
          font-size: 2.5rem;
        }

        .product-info,
        .detail-section {
          padding: 25px;
        }
      }
    `}</style>

    <Header />

    <main>
      {/* Breadcrumb */}
      <div class="breadcrumb">
        <a href="/">ホーム</a>
        <span>/</span>
        <a href="/store">アプリストア</a>
        <span>/</span>
        <span>100マス計算ジェネレーター</span>
      </div>

      <div class="product-container">
        {/* Product Header */}
        <div class="product-header">
          {/* Product Image */}
          <div class="product-image-section">
            <div class="product-image">
              <span class="product-badge">NEW</span>
              <span class="product-icon">🔢</span>
            </div>
          </div>

          {/* Product Info */}
          <div class="product-info">
            <h1 class="product-title">100マス計算ジェネレーター</h1>
            <p class="product-subtitle">
              算数の基礎力を鍛える100マス計算を自動生成。印刷もデジタル入力もできるハイブリッド型。
            </p>

            <div class="product-meta">
              <div class="product-meta-item">
                <span class="product-meta-label">対象年齢</span>
                <span class="product-meta-value">
                  <i class="fas fa-users"></i>
                  小1〜中学生
                </span>
              </div>
              <div class="product-meta-item">
                <span class="product-meta-label">種類</span>
                <span class="product-meta-value">
                  <i class="fas fa-globe"></i>
                  Webアプリ
                </span>
              </div>
              <div class="product-meta-item">
                <span class="product-meta-label">利用期限</span>
                <span class="product-meta-value">
                  <i class="fas fa-infinity"></i>
                  無制限
                </span>
              </div>
            </div>

            <div class="product-price">
              250<span class="product-price-unit">バーツ</span>
            </div>
            <p class="product-price-note">※ 買い切り型（追加料金なし）</p>

            {/* Purchase Section */}
            <div class="purchase-section">
              <h3 class="purchase-title">
                <i class="fas fa-shopping-cart"></i>
                購入方法
              </h3>
              
              <div class="purchase-methods">
                <div class="purchase-method">
                  <i class="fas fa-mobile-alt"></i>
                  <div>
                    <div class="purchase-method-name">Prompt Pay</div>
                    <div style="font-size: 0.85rem; color: var(--text-gray);">タイの電子決済</div>
                  </div>
                </div>
                <div class="purchase-method">
                  <i class="fas fa-university"></i>
                  <div>
                    <div class="purchase-method-name">銀行振込</div>
                    <div style="font-size: 0.85rem; color: var(--text-gray);">タイ国内の銀行口座</div>
                  </div>
                </div>
              </div>

              <a href="/contact" class="purchase-button">
                <i class="fas fa-envelope"></i>
                購入について問い合わせる
              </a>

              <div class="purchase-note">
                <strong>📧 購入の流れ</strong><br/>
                1. お問い合わせフォームから購入希望をご連絡<br/>
                2. お支払い方法とご請求書をメールで送信<br/>
                3. お支払い完了後、ダウンロードリンクをメールで送信<br/>
                4. すぐにご利用いただけます
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div class="product-details">
          {/* Description */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-info-circle"></i>
              アプリの説明
            </h2>
            <div class="detail-content">
              <p>
                <strong>100マス計算ジェネレーター</strong>は、算数の基礎力を効率的に鍛えるための学習アプリです。
                ボタン一つで新しい問題を自動生成し、毎日違う問題で練習することができます。
              </p>
              <p>
                このアプリは、伝統的な紙ベースの100マス計算と、最新のデジタル技術を組み合わせた「ハイブリッド型」。
                印刷して紙に書き込むこともでき、画面上で直接入力することもできます。
              </p>
              <p>
                <em>※ 詳細な機能説明は購入後にマニュアルをご確認ください。</em>
              </p>
            </div>
          </div>

          {/* Features */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-star"></i>
              主な機能
            </h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🎲</div>
                <h3 class="feature-title">自動生成</h3>
                <p class="feature-description">
                  ボタン一つで新しい問題を無限に生成。毎日違う問題で飽きずに練習できます。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🖨️</div>
                <h3 class="feature-title">印刷対応</h3>
                <p class="feature-description">
                  PDFで出力して紙に印刷可能。従来の学習スタイルでも使えます。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">💻</div>
                <h3 class="feature-title">デジタル入力</h3>
                <p class="feature-description">
                  画面上で直接答えを入力。自動採点機能で即座に結果がわかります。
                </p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">⏱️</div>
                <h3 class="feature-title">タイマー機能</h3>
                <p class="feature-description">
                  計測機能で学習時間を記録。継続的な練習で計算速度が向上します。
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-bullseye"></i>
              こんな方におすすめ
            </h2>
            <div class="detail-content">
              <ul>
                <li><strong>計算力を基礎から鍛えたい小学生</strong> - 繰り返し練習で自然と計算が速くなります</li>
                <li><strong>中学受験を控えた生徒</strong> - 計算ミスを減らし、試験での得点力アップ</li>
                <li><strong>毎日の学習習慣をつけたい方</strong> - 短時間で取り組める内容で継続しやすい</li>
                <li><strong>保護者の方</strong> - お子様の学習をサポートしたい方に最適</li>
                <li><strong>教室や塾の先生</strong> - 生徒の宿題や小テストとして活用可能</li>
              </ul>
            </div>
          </div>

          {/* System Requirements */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-laptop"></i>
              動作環境
            </h2>
            <div class="detail-content">
              <p><strong>Webアプリ（ブラウザで動作）</strong></p>
              <ul>
                <li>Windows、Mac、Chromebook対応</li>
                <li>スマートフォン・タブレットでも利用可能</li>
                <li>Google Chrome、Safari、Edge、Firefoxなど主要ブラウザ対応</li>
                <li>インターネット接続必須</li>
              </ul>
              <p style="margin-top: 20px;">
                <em>※ 購入後はアカウント登録不要で、すぐにご利用いただけます。</em>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Store */}
        <a href="/store" class="back-to-store">
          <i class="fas fa-arrow-left"></i>
          アプリストアに戻る
        </a>
      </div>
    </main>

    <Footer />
  </>
)
