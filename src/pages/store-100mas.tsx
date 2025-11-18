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
        <a href="/store">アプリストア</a>
        <span>/</span>
        <span>100マス計算ジェネレーター</span>
      </div>

      <div class="product-container">
        {/* Product Header */}
        <div class="product-header">
          {/* Product Image */}
          <div class="product-image-section">
            <div class="product-image" style="background: #E8E8E8;">
              <img src="/images/100mas-calculator-icon.png" alt="100マス計算" style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px;" />
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

            <div style="display: flex; align-items: baseline; gap: 15px; margin-bottom: 10px;">
              <div class="product-price" style="margin-bottom: 0;">
                250<span class="product-price-unit">バーツ</span>
              </div>
              <div style="font-size: 1.3rem; color: var(--text-gray); text-decoration: line-through;">
                300バーツ
              </div>
            </div>
            <div style="display: inline-block; background: #FF5722; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 700; margin-bottom: 15px;">
              🔥 期間限定！50バーツOFF
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
          {/* Hero Message */}
          <div class="detail-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
            <h2 style="font-size: 2.2rem; font-weight: 700; margin-bottom: 20px; color: white;">
              計算力と「学習の自信」を引き出す
            </h2>
            <p style="font-size: 1.5rem; font-weight: 500; color: rgba(255,255,255,0.95);">
              次世代百ます計算アプリ
            </p>
          </div>

          {/* 3つの理由 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-bolt"></i>
              このアプリが選ばれる3つの理由
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【1. 圧倒的な高機能 × 使いやすさ】
              </h3>
              <p>
                四則演算・負の数・長方形グリッド（3×3〜15×15）・数値範囲の自由設定に完全対応。印刷モードは問題と解答を一発生成。先生や保護者の準備時間はわずか5秒で完了します。デジタル入力モードではタイマー・自動採点・直近10回分の成績記録機能を搭載。もう、ドリルの買い足しや丸付けの手間に時間を割く必要はありません。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【2. 1日5分で計算力が2倍に】
              </h3>
              <p>
                タイムアタック方式で「昨日の自分」と競争。成長が見える化されるから、子どもが自ら机に向かう。1ヶ月後には驚くほどの成長を実感できます。
              </p>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 30px; margin-bottom: 15px;">
                【3. 他アプリと比べて圧倒的な高コスパ】
              </h3>
              <p>
                月額課金なし・買い切り12.99ドル・無限に問題生成・16言語対応・家族全員＆教室OK。市販ドリル($10-30/冊)や月額アプリ($10-20/月)と比べて圧倒的コスパ。アプリ購入後の返金はできません。（GUMROADでご購入の方は、30日間返金保証が付いています）
              </p>
            </div>
          </div>

          {/* 百ます計算とは */}
          <div class="detail-section" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              🧮 百ます計算とは？
            </h2>
            <p style="font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: white;">
              40年以上、日本の小学校で愛される「計算力強化メソッド」
            </p>
            <p style="font-size: 1.1rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
              10×10マスで100問の計算を素早く解く、シンプルで最強の学習法。
              日本の小学校で40年以上使われ続け、数百万人の子どもの計算力を劇的に伸ばしてきました。
            </p>
          </div>

          {/* 毎日5分の効果 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-fire"></i>
              毎日5分で、計算力・正確性・集中力が驚くほど伸びる
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                🚀 毎日5分の習慣が未来を変える
              </h3>
              <p style="font-size: 1.1rem; margin-bottom: 20px; color: var(--text-gray);">
                計算力・正確性・集中力が"自然に"伸びる設計
              </p>
              
              <div class="features-grid">
                <div class="feature-card">
                  <div class="feature-icon">⚡</div>
                  <h3 class="feature-title">計算速度が速くなる</h3>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">🎯</div>
                  <h3 class="feature-title">ケアレスミスが減る</h3>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">🧠</div>
                  <h3 class="feature-title">集中力が上がる</h3>
                </div>
              </div>

              <p style="font-size: 1.1rem; margin-top: 30px; font-weight: 600; color: var(--store-primary);">
                1ヶ月続ければ、誰でもはっきりと成長を実感できます。
              </p>
            </div>
          </div>

          {/* ゲーム感覚 */}
          <div class="detail-section" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              🎮 ゲーム感覚で続けられるから、子どもがやめない
            </h2>
            <p style="font-size: 1.3rem; font-weight: 600; margin-bottom: 25px; color: white;">
              🏆 自己ベスト更新が楽しい
            </p>
            <p style="font-size: 1.1rem; margin-bottom: 15px; line-height: 1.8; color: rgba(255,255,255,0.95);">
              タイムアタック × 見える化でモチベが続く
            </p>
            
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 15px; margin-top: 25px;">
              <ul style="list-style: none; padding: 0; font-size: 1.05rem; line-height: 2;">
                <li>✅ 「昨日の自分」と勝負</li>
                <li>✅ ベストタイムを金色バッジで表彰</li>
                <li>✅ 履歴グラフで成長がわかる</li>
              </ul>
            </div>

            <p style="font-size: 1.1rem; margin-top: 25px; font-weight: 600; color: white;">
              気づけば、お子さまが"自分から"机に向かう習慣が身につきます。
            </p>
          </div>

          {/* デジタル × 紙 */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-layer-group"></i>
              デジタル学習 × 紙の学習、どちらにも完璧対応
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-bottom: 20px;">
                🖥️ デジタル入力モード
              </h3>
              <p style="margin-bottom: 15px; font-size: 1.05rem;">自動採点・タイマー・履歴保存つき</p>
              <ul style="font-size: 1.05rem; line-height: 1.8;">
                <li>PC、iPad、スマホで直接入力</li>
                <li>全デバイスに最適化（スマホ横でテンキー表示）</li>
                <li>Enterキーの移動方向も設定可能</li>
                <li>全角→半角自動変換で入力ミス防止</li>
              </ul>

              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-top: 40px; margin-bottom: 20px;">
                🖨️ 印刷モード
              </h3>
              <p style="margin-bottom: 15px; font-size: 1.05rem;">A4に問題＋解答を自動レイアウト</p>
              <ul style="font-size: 1.05rem; line-height: 1.8;">
                <li>問題は紙で練習したい派にも最適</li>
                <li>折れば問題と解答が1枚に</li>
                <li>学校や塾の課題プリントにもそのまま使える</li>
              </ul>
            </div>
          </div>

          {/* 16言語対応 */}
          <div class="detail-section" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white;">
            <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px;">
              🌍 世界72%の人が母国語で学べる 16言語対応
            </h2>
            <p style="font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: white;">
              🇯🇵🇺🇸🇨🇳🇹🇭 … 全16言語完全対応
            </p>
            <p style="font-size: 1.1rem; margin-bottom: 15px; line-height: 1.8; color: rgba(255,255,255,0.95);">
              家庭でも、学校でも、世界中どこでも使える
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
              英語・日本語・中国語・韓国語・タイ語・スペイン語…<br/>
              合計16言語で表示され、UIも完全ローカライズ。
            </p>
            <p style="font-size: 1.1rem; margin-top: 20px; font-weight: 600; color: white;">
              学校・塾・インターナショナルスクールでもすぐ使えます。
            </p>
          </div>

          {/* カスタマイズ */}
          <div class="detail-section">
            <h2 class="detail-section-title">
              <i class="fas fa-sliders-h"></i>
              3×3〜15×15まで、完全自由なカスタマイズ
            </h2>
            <div class="detail-content">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--store-primary); margin-bottom: 20px;">
                🔢 すべての子に最適な問題を作れる
              </h3>
              <p style="margin-bottom: 15px; font-size: 1.05rem;">グリッド・範囲・難易度をフルカスタマイズ</p>
              <ul style="font-size: 1.05rem; line-height: 1.8;">
                <li>3×3〜15×15の正方形／長方形に対応</li>
                <li>数値範囲を自由設定（-999〜999）</li>
                <li>固定値モードで九九の反復練習も</li>
                <li>負の数50%ランダム生成にも対応</li>
                <li>割り算は自動で"割り切れる問題だけ"を生成（解答できるマス6割以上）</li>
              </ul>
              <p style="font-size: 1.1rem; margin-top: 25px; font-weight: 600; color: var(--store-primary);">
                初心者から中学生まで、これ1つで全学年カバー。
              </p>
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
                <p><strong>3️⃣</strong> 言語を選んで「問題を生成」</p>
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
                  <li>✅ 100マス計算ジェネレーター（全デバイス対応完全版）</li>
                  <li>✅ 16言語対応UI</li>
                  <li>✅ デジタル入力モード</li>
                  <li>✅ 印刷モード</li>
                  <li>✅ 自動採点・タイマー・履歴保存</li>
                  <li>✅ 無制限の問題生成</li>
                  <li>✅ 多言語マニュアル</li>
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
