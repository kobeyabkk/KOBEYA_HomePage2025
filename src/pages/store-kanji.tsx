import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const storeKanjiPage = () => (
  <>
    <head>
      <title>漢字テストジェネレーター｜KOBEYAアプリストア｜KOBEYA</title>
      <meta name="description" content="小学校1〜6年生の全1026漢字を完全収録。練習モード・テストモード搭載で、親の準備5秒、子供は毎日5分で漢字力アップ。買い切り型350バーツ。" />
      <meta name="keywords" content="漢字,漢字テスト,漢字練習,小学生,学習アプリ,教材,KOBEYA,バンコク" />
      <meta property="og:title" content="漢字テストジェネレーター｜KOBEYA" />
      <meta property="og:description" content="小学校1〜6年生の全1026漢字を完全収録。練習→テストで定着。親の準備5秒、買い切り型350バーツ。" />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/store/kanji-test" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/store/kanji-test" />
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

      .product-image-simple {
        background: #E8E8E8 !important;
      }

      .product-image-simple::before {
        display: none !important;
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

      .detail-content h3 {
        margin-top: 25px;
        margin-bottom: 15px;
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
        <a href="/store">KOBEYAアプリストア</a>
        <span>/</span>
        <span>漢字テストジェネレーター</span>
      </div>

      <div class="product-container">
        {/* Product Header */}
        <div class="product-header">
          {/* Product Image */}
          <div class="product-image-section">
            <div class="product-image product-image-simple">
              <img src="/images/kanji-test-icon.png" alt="漢字テストジェネレーター" style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px; position: relative; z-index: 10;" />
            </div>
            
            {/* YouTube Video - 準備中 */}
            <div style="margin-top: 30px;">
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white;">
                  <i class="fas fa-video" style="font-size: 4rem; margin-bottom: 15px; opacity: 0.8;"></i>
                  <p style="font-size: 1.5rem; font-weight: 700; margin-bottom: 10px;">紹介動画 準備中</p>
                  <p style="font-size: 1rem; opacity: 0.9;">Coming Soon...</p>
                </div>
              </div>
              <p style="text-align: center; margin-top: 15px; color: var(--text-gray); font-size: 0.9rem;">
                📹 使い方動画を準備中です
              </p>
            </div>
          </div>

          {/* Product Info */}
          <div class="product-info">
            <h1 class="product-title">漢字テストジェネレーター</h1>
            <p class="product-subtitle">
              小学校1〜6年生の全1026漢字を完全収録。親の準備5秒、子供は毎日5分で継続できる漢字学習。
            </p>

            <div class="product-meta">
              <div class="product-meta-item">
                <span class="product-meta-label">対象年齢</span>
                <span class="product-meta-value">
                  <i class="fas fa-users"></i>
                  小1〜小6
                </span>
              </div>
              <div class="product-meta-item">
                <span class="product-meta-label">種類</span>
                <span class="product-meta-value">
                  <i class="fas fa-pen"></i>
                  全デバイス対応（手書き・プリント）
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

            <div style="display: flex; align-items: baseline; gap: 15px; margin-bottom: 10px;">
              <div class="product-price" style="margin-bottom: 0;">
                250<span class="product-price-unit">バーツ</span>
              </div>
              <div style="font-size: 1.3rem; color: var(--text-gray); text-decoration: line-through;">
                350バーツ
              </div>
            </div>
            <div style="display: inline-block; background: #FF5722; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 700; margin-bottom: 15px;">
              🔥 期間限定！100バーツOFF
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

              <div style="margin-top: 20px; text-align: center;">
                <p style="font-size: 0.9rem; color: var(--text-gray); margin-bottom: 12px;">
                  こちらからでもご購入できます
                </p>
                <div 
                  class="gumroad-button"
                  style="display: inline-flex; align-items: center; gap: 10px; padding: 15px 30px; background: #E0E0E0; color: #757575; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); cursor: not-allowed; opacity: 0.7;"
                >
                  <i class="fas fa-clock"></i>
                  Gumroad 準備中
                </div>
                <p style="font-size: 0.8rem; color: var(--text-gray); margin-top: 8px;">
                  🔜 まもなく開始予定
                </p>
              </div>

              <div class="purchase-note">
                <strong>📧 購入の流れ</strong><br/>
                1. お問い合わせフォームから購入希望をご連絡<br/>
                2. お支払い方法とご請求書をメールで送信<br/>
                3. お支払い完了後、ダウンロードリンクをメールで送信<br/>
                4. すぐにご利用いただけます
              </div>
            </div>

            {/* License Information */}
            <div style="margin-top: 30px; padding: 30px; background: linear-gradient(135deg, #FFF9E6 0%, #FFE9D6 100%); border-radius: 15px; border: 2px solid #FF9800;">
              <h3 style="font-size: 1.4rem; font-weight: 700; color: #E65100; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                ⚠️ ライセンスと利用範囲について
              </h3>
              
              <p style="font-size: 1rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 25px;">
                本アプリは<strong>「買い切り・ライセンスフリー」</strong>に近い形でお届けしていますが、以下のルールのみお守りください。
              </p>

              {/* OK Section */}
              <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #4CAF50;">
                <h4 style="font-size: 1.2rem; font-weight: 700; color: #2E7D32; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                  ✅ OK（ご家族で使い放題）
                </h4>
                <p style="font-size: 1rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 12px;">
                  ご購入いただいた<strong>1家族（同一世帯）内</strong>であれば、PC・スマホ・タブレットなど、<strong>何台にインストールしても構いません</strong>。
                </p>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-gray);">
                  リビングのiPad、お父様のPC、お子様のスマホなど、ご家族皆様で自由にご活用ください。
                </p>
              </div>

              {/* NG Section */}
              <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #F44336;">
                <h4 style="font-size: 1.2rem; font-weight: 700; color: #C62828; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                  🚫 NG（第三者への譲渡・配布）
                </h4>
                <p style="font-size: 1rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 12px;">
                  利用範囲はあくまで<strong>「ご購入者様のご家庭」</strong>に限ります。
                </p>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-dark); margin-bottom: 15px;">
                  友人へのファイル送信、USBでの譲渡、SNSやインターネット上へのアップロード（二次配布）は固くお断りいたします。
                </p>
                <div style="background: #FFF3E0; padding: 15px; border-radius: 8px; border-left: 3px solid #FF9800;">
                  <p style="font-size: 0.9rem; font-weight: 600; color: #E65100; margin-bottom: 8px;">
                    ※ 教育関係者様へ：
                  </p>
                  <p style="font-size: 0.9rem; line-height: 1.7; color: var(--text-dark);">
                    先生がご自身で購入し、ご自身の管理するクラス・教室内で生徒に使わせることは問題ありません（大歓迎です）。ただし、生徒や保護者にアプリのデータそのものを配布・送信することは禁止です（生徒様ご自身での購入をお願いしてください）。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div class="product-details">
          {/* Hero Message */}
          <div class="detail-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 700; margin-bottom: 20px; color: white;">
              漢字力と「学習の自信」を引き出す
            </h2>
            <p style="font-size: 1.5rem; font-weight: 500; color: rgba(255,255,255,0.95);">
              次世代百ます計算アプリ
            </p>
          </div>

          {/* 3つの理由 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-bolt"></i>
              このアプリが選ばれる5つの理由
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【1. 親の負担ゼロ】
              </h3>
              <p>
                準備時間5秒。学年と問題数を選ぶだけで、あとは子供が自分で練習→テスト→完了。プリント作成・丸付けの手間がゼロになります。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【2. 練習→テストで定着】
              </h3>
              <p>
                4マスで漢字をなぞって練習 → テストで確認。繰り返し学習で記憶に定着します。書き順確認機能付きで、正しい書き方が身につきます。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【3. 書き順確認機能】
              </h3>
              <p>
                ワンタップで書き順を確認できます。正しい書き方が身につくから、学校のテストでも自信が持てます。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【4. スクショで学習記録】
              </h3>
              <p>
                子供だけで学習しても、スクリーンショット機能で後から親が確認できます。学習の進捗が一目でわかります。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【5. 例文カスタマイズ】
              </h3>
              <p>
                子供に最適な例文に変更可能。身近な例文にすることで記憶に定着しやすくなります。
              </p>
            </div>
          </div>

          {/* 百ます計算とは */}
          <div class="detail-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              📝 漢字テストジェネレーターとは？
            </h2>
            <p style="font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: white;">
              小学校1〜6年生の全1026漢字を完全収録
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
              学年と問題数を選ぶだけで、わずか5秒で準備完了。練習モード・テストモード・練習+テストモードの3つのモードを搭載。手書き練習、書き順確認、例文カスタマイズなど充実の機能で、漢字学習をサポートします。
            </p>
          </div>

          {/* 毎日5分の効果 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-fire"></i>
              毎日5分で、漢字力が着実に身につく
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                🚀 毎日5分の習慣が未来を変える
              </h3>
              <p style="font-size: 1.1rem; margin-bottom: 20px; color: var(--text-gray);">
                漢字力・記憶力・学習習慣が"自然に"身につく設計
              </p>
              
              <div class="features-grid">
                <div class="feature-card">
                  <div class="feature-icon">✍️</div>
                  <h3 class="feature-title">正しい書き順が身につく</h3>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">🎯</div>
                  <h3 class="feature-title">漢字テストのミスが減る</h3>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">🧠</div>
                  <h3 class="feature-title">記憶力が上がる</h3>
                </div>
              </div>

              <p style="font-size: 1.1rem; margin-top: 30px; font-weight: 600; color: var(--store-primary);">
                1ヶ月続ければ、誰でもはっきりと成長を実感できます。
              </p>
            </div>
          </div>


          {/* 手書き練習 × プリント学習 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-layer-group"></i>
              手書き練習 × プリント学習、両方に完全対応
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-bottom: 20px;">
                ✍️ 手書き練習モード
              </h3>
              <p style="margin-bottom: 15px; font-size: 1.05rem;">書き順を確認しながら正しく書けるようになる</p>
              <ul style="font-size: 1.05rem; line-height: 1.8;">
                <li>PC、iPad、スマホで手書き練習</li>
                <li>4マスをなぞって書き順を覚える</li>
                <li>ペン設定（太さ・色）や消しゴム機能</li>
                <li>スクショ保存で学習記録を残せる</li>
              </ul>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 40px; margin-bottom: 20px;">
                🖨️ プリント生成モード
              </h3>
              <p style="margin-bottom: 15px; font-size: 1.05rem;">A4に問題＋解答を自動レイアウト</p>
              <ul style="font-size: 1.05rem; line-height: 1.8;">
                <li>紙で練習したい派にも最適</li>
                <li>読み仮名・例文も一緒にプリント</li>
                <li>学校や塾の課題プリントにもそのまま使える</li>
              </ul>
            </div>
          </div>



          {/* 最強コスパ */}
          <div class="detail-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              💰 買い切り・無限生成 "最強コスパ"
            </h2>
            <p style="font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: white;">
              🏫 家庭用・学校用どちらもこの1つでOK
            </p>
            <p style="font-size: 1.1rem; margin-bottom: 20px; line-height: 1.8; color: rgba(255,255,255,0.95);">
              市販ドリルとは比べものにならない自由度と耐久性
            </p>
            
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 15px;">
              <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 2;">
                <li>✅ 無限に問題を生成</li>
                <li>✅ 家族全員で共有OK</li>
                <li>✅ 授業・塾・家庭教師でも利用可能</li>
                <li>✅ アプリのようにホーム画面にも追加できる（PWA対応）</li>
                <li>✅ もちろんオフラインOK</li>
              </ul>
            </div>
          </div>

          {/* 教育者が作った */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-graduation-cap"></i>
              教育者が本気で作った、最高レベルの学習ツール
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-bottom: 20px;">
                🏫 制作：AI＆プログラミングのKOBEYA
              </h3>
              <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                20年以上の教育現場の経験から誕生
              </p>
              <p style="font-size: 1.05rem; line-height: 1.8;">
                実際に教室で使いながら改良を重ね、<br/>
                「子どもが続ける」「保護者が楽」「先生がすぐ使える」<br/>
                この3点を最優先に設計しました。
              </p>
            </div>
          </div>

          {/* 使い方 */}
          <div class="detail-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              💻 使い方はたったの3ステップ
            </h2>
            
            <div style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 15px; margin-top: 25px;">
              <div style="font-size: 1.1rem; line-height: 2.5;">
                <p><strong>1️⃣</strong> ZIPをダウンロード</p>
                <p><strong>2️⃣</strong> 解凍して index.html または START.html を開く</p>
                <p><strong>3️⃣</strong> 学年と出題数を選んで「問題を生成」</p>
              </div>
            </div>

            <p style="font-size: 1.1rem; margin-top: 25px; font-weight: 600; color: white;">
              インストール不要・オフラインOK・デバイス無制限。
            </p>
          </div>

          {/* 購入すると手に入るもの */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-gift"></i>
              購入すると手に入るもの
            </h2>
            <div class="detail-content">
              <div style="background: var(--store-bg); padding: 30px; border-radius: 15px;">
                <ul style="font-size: 1.05rem; line-height: 2.2;">
                  <li>✅ 漢字テストジェネレーター（全デバイス対応完全版）</li>
                  <li>✅ 手書き練習モード</li>
                  <li>✅ テストモード</li>
                  <li>✅ プリント生成モード</li>
                  <li>✅ 書き順確認機能</li>
                  <li>✅ 例文カスタマイズ機能</li>
                  <li>✅ スクショ保存機能</li>
                  <li>✅ 無制限の問題生成</li>
                  <li>✅ 生涯使用権</li>
                  <li>✅ 無料アップデート（スマホ・タブレットは自動更新、PCは自己更新）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 最後のメッセージ */}
          <div class="detail-section" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; text-align: center;">
            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 20px; color: white;">
              🎉 努力に勝る才能なし。毎日5分の努力が、お子さまの未来を変える
            </h2>
            <p style="font-size: 1.2rem; line-height: 1.8; color: rgba(255,255,255,0.95); margin-bottom: 25px;">
              才能ではなく「続けた量」が力になる。<br/>
              その環境を、このアプリがすべて用意しています。
            </p>
            <p style="font-size: 1.3rem; font-weight: 700; color: white;">
              今すぐ始めましょう。
            </p>
          </div>

          {/* Target Audience */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-bullseye"></i>
              こんな方におすすめ
            </h2>
            <div class="detail-content">
              <ul>
                <li><strong>漢字力を基礎から鍛えたい小学生</strong> - 繰り返し練習で自然と漢字が書けるようになります</li>
                <li><strong>中学受験を控えた生徒</strong> - 漢字の書き間違いを減らし、試験での得点力アップ</li>
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
              <p><strong>全デバイス対応（デジタル & 印刷）</strong></p>
              <ul>
                <li><strong>デジタル学習:</strong> PC・iPad・スマホで手書き練習可能</li>
                <li><strong>印刷学習:</strong> PDFで書き込み式プリントを生成</li>
                <li>Windows、Mac、Chromebook、iOS、Android対応</li>
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
          KOBEYAアプリストアに戻る
        </a>
      </div>
    </main>

    <Footer />
  </>
)
