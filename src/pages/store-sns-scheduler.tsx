import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const storeSnsSchedulerPage = () => (
  <>
    <head>
      <title>SNSスパークルスケジューラー｜KOBEYAアプリストア｜KOBEYA</title>
      <meta name="description" content="Instagram・Facebook・Twitter への投稿を完全自動化。教室・個人事業主向けSNS自動投稿システム。月額わずか$5で3つのSNSに同時投稿。" />
      <meta name="keywords" content="SNS自動投稿,Instagram,Facebook,Twitter,教室運営,BtoB,スケジューラー,KOBEYA,バンコク" />
      <meta property="og:title" content="SNSスパークルスケジューラー｜KOBEYA" />
      <meta property="og:description" content="Instagram・Facebook・Twitter への投稿を完全自動化。月額$5で教室運営をもっと楽に。" />
      <meta property="og:type" content="product" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/store/sns-scheduler" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/store/sns-scheduler" />
    </head>
    
    <style>{`
      :root {
        --store-primary: #E91E63;
        --store-primary-dark: #C2185B;
        --store-primary-light: #F06292;
        --store-secondary: #9C27B0;
        --store-accent: #00BCD4;
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
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
        position: relative;
        overflow: hidden;
      }

      .product-image::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: shimmer 3s infinite;
      }

      @keyframes shimmer {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
      }

      .product-info-section {
        padding-top: 20px;
      }

      .product-badge {
        display: inline-block;
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-secondary) 100%);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .product-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .product-subtitle {
        font-size: 1.2rem;
        color: var(--text-gray);
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .product-meta {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 30px;
      }

      .product-meta-item {
        background: var(--store-card-bg);
        padding: 20px;
        border-radius: 12px;
        border: 2px solid var(--border-color);
      }

      .product-meta-label {
        display: block;
        font-size: 0.85rem;
        color: var(--text-gray);
        margin-bottom: 8px;
      }

      .product-meta-value {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      .product-meta-value i {
        color: var(--store-primary);
      }

      .product-price {
        font-size: 3rem;
        font-weight: 800;
        color: var(--store-primary);
        margin: 30px 0 10px;
      }

      .product-price-unit {
        font-size: 1.2rem;
        color: var(--text-gray);
        margin-left: 10px;
      }

      .product-price-note {
        color: var(--text-gray);
        font-size: 0.9rem;
        margin-bottom: 15px;
      }

      .demo-button {
        display: inline-block;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%);
        color: white;
        padding: 18px 40px;
        border-radius: 12px;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 700;
        box-shadow: 0 4px 12px rgba(16,185,129,0.3);
        transition: all 0.3s ease;
        margin: 30px 0;
      }

      .demo-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16,185,129,0.4);
      }

      .demo-note {
        margin-top: 12px;
        font-size: 0.9rem;
        color: var(--text-gray);
      }

      .purchase-section {
        background: var(--store-card-bg);
        border-radius: 16px;
        padding: 30px;
        margin: 30px 0;
        border: 2px solid var(--border-color);
      }

      .purchase-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .purchase-title i {
        color: var(--store-primary);
      }

      .purchase-methods {
        display: grid;
        gap: 15px;
      }

      .purchase-method {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        background: var(--store-bg);
        border-radius: 12px;
        border: 2px solid var(--border-color);
        transition: all 0.3s;
      }

      .purchase-method:hover {
        border-color: var(--store-primary);
        transform: translateX(5px);
      }

      .purchase-method i {
        font-size: 1.8rem;
        color: var(--store-primary);
      }

      .purchase-method-name {
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--text-dark);
      }

      .contact-button {
        display: inline-block;
        background: linear-gradient(135deg, var(--store-primary) 0%, var(--store-secondary) 100%);
        color: white;
        padding: 16px 40px;
        border-radius: 12px;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 700;
        margin-top: 20px;
        transition: all 0.3s;
      }

      .contact-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(233, 30, 99, 0.4);
      }

      .detail-sections {
        display: grid;
        gap: 60px;
      }

      .detail-section {
        background: var(--store-card-bg);
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      }

      .detail-section-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text-dark);
      }

      .detail-section-title i {
        color: var(--store-primary);
      }

      .detail-content {
        line-height: 1.8;
        color: var(--text-dark);
      }

      .detail-content ul {
        list-style: none;
        padding: 0;
      }

      .detail-content ul li {
        padding: 12px 0;
        padding-left: 30px;
        position: relative;
      }

      .detail-content ul li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--success-green);
        font-weight: 700;
        font-size: 1.2rem;
      }

      .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }

      .feature-card {
        background: var(--store-bg);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid var(--border-color);
        transition: all 0.3s;
      }

      .feature-card:hover {
        border-color: var(--store-primary);
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }

      .feature-icon {
        font-size: 2.5rem;
        margin-bottom: 15px;
      }

      .feature-title {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: var(--text-dark);
      }

      .feature-description {
        color: var(--text-gray);
        line-height: 1.6;
        font-size: 0.95rem;
      }

      .use-case-grid {
        display: grid;
        gap: 30px;
        margin-top: 30px;
      }

      .use-case-card {
        background: var(--store-bg);
        padding: 30px;
        border-radius: 12px;
        border-left: 4px solid var(--store-primary);
      }

      .use-case-title {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--text-dark);
      }

      .use-case-details {
        display: grid;
        gap: 12px;
        margin-bottom: 20px;
      }

      .use-case-detail {
        display: flex;
        gap: 10px;
      }

      .use-case-detail strong {
        min-width: 120px;
        color: var(--store-primary);
      }

      .use-case-result {
        background: white;
        padding: 15px;
        border-radius: 8px;
        border: 2px solid var(--border-color);
        margin-top: 15px;
      }

      .use-case-result strong {
        color: var(--success-green);
      }

      .pricing-highlight {
        background: linear-gradient(135deg, var(--store-primary-light) 0%, var(--store-accent) 100%);
        color: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        margin: 40px 0;
      }

      .pricing-highlight h3 {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .pricing-highlight .price {
        font-size: 4rem;
        font-weight: 800;
        margin: 20px 0;
      }

      .pricing-features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 30px;
        text-align: left;
      }

      .pricing-features li {
        padding-left: 30px;
      }

      @media (max-width: 768px) {
        .product-header {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .product-image-section {
          position: relative;
          top: 0;
        }

        .product-title {
          font-size: 2rem;
        }

        .product-meta {
          grid-template-columns: 1fr;
        }

        .feature-grid {
          grid-template-columns: 1fr;
        }

        .pricing-features {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
    
    <Header />
    
    <div class="breadcrumb">
      <a href="/">ホーム</a>
      <span>›</span>
      <a href="/store">アプリストア</a>
      <span>›</span>
      <span>SNSスパークルスケジューラー</span>
    </div>
    
    <div class="product-container">
      {/* Product Header */}
      <div class="product-header">
        <div class="product-image-section">
          <div class="product-image">
            <img src="/images/sns-scheduler-icon.png" alt="SNSスパークルスケジューラー" style="width: 100%; height: 100%; object-fit: contain; border-radius: 20px; position: relative; z-index: 10;" />
          </div>
        </div>
        
        <div class="product-info-section">
          <span class="product-badge">🚀 BtoB システム</span>
          <h1 class="product-title">SNSスパークルスケジューラー</h1>
          <p class="product-subtitle">
            Instagram・Facebook・Twitter への投稿を完全自動化。教室運営・個人事業主向けの次世代マルチプラットフォーム投稿システム。
          </p>
          
          <div class="product-meta">
            <div class="product-meta-item">
              <span class="product-meta-label">対象</span>
              <span class="product-meta-value">
                <i class="fas fa-building"></i>
                教室・個人事業主
              </span>
            </div>
            <div class="product-meta-item">
              <span class="product-meta-label">種類</span>
              <span class="product-meta-value">
                <i class="fas fa-cloud"></i>
                Webシステム（BtoB）
              </span>
            </div>
            <div class="product-meta-item">
              <span class="product-meta-label">対応SNS</span>
              <span class="product-meta-value">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                3つのSNS
              </span>
            </div>
            <div class="product-meta-item">
              <span class="product-meta-label">料金</span>
              <span class="product-meta-value">
                <i class="fas fa-tag"></i>
                8,000バーツ
              </span>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; color: white;">
            <h3 style="font-size: 1.3rem; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
              <i class="fas fa-tag"></i>
              特別キャンペーン価格
            </h3>
            <div style="display: flex; align-items: baseline; gap: 15px; margin: 20px 0;">
              <span style="text-decoration: line-through; opacity: 0.7; font-size: 1.5rem;">10,000バーツ</span>
              <span style="font-size: 3rem; font-weight: 800;">8,000</span>
              <span style="font-size: 1.3rem;">バーツ</span>
            </div>
            <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 15px;">
              🎉 実績作りキャンペーン！通常10,000バーツのところ、<br/>
              <strong style="font-size: 1.2rem;">今なら8,000バーツ</strong>でご提供いたします。
            </p>
            <p style="font-size: 0.95rem; opacity: 0.9;">
              ※ パッケージ料金（買い切り型）<br/>
              ※ 初期設定サポート・導入支援込み
            </p>
          </div>

          {/* Demo Button */}
          <div style="margin: 30px 0;">
            <a 
              href="https://kobeyabkk.github.io/sns-sparkle-scheduler/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="demo-button"
            >
              🎮 デモページを見る
              <i class="fas fa-external-link-alt" style="margin-left: 8px; font-size: 0.9rem;"></i>
            </a>
            <p class="demo-note">
              ※ システムの詳細情報と機能をご覧いただけます
            </p>
          </div>

          {/* Purchase Section */}
          <div class="purchase-section">
            <h3 class="purchase-title">
              <i class="fas fa-envelope"></i>
              お問い合わせ・導入相談
            </h3>
            
            <p style="margin-bottom: 20px; color: var(--text-gray);">
              導入をご希望の方は、お気軽にお問い合わせください。初期設定から運用開始まで、丁寧にサポートいたします。
            </p>
            
            <div class="purchase-methods">
              <div class="purchase-method">
                <i class="fab fa-line"></i>
                <div>
                  <div class="purchase-method-name">LINE 公式アカウント</div>
                  <div style="font-size: 0.85rem; color: var(--text-gray);">@kobeya で検索</div>
                </div>
              </div>
              <div class="purchase-method">
                <i class="fas fa-envelope"></i>
                <div>
                  <div class="purchase-method-name">メール</div>
                  <div style="font-size: 0.85rem; color: var(--text-gray);">kobeyabkk@gmail.com</div>
                </div>
              </div>
            </div>
            
            <a href="/contact" class="contact-button">
              お問い合わせフォーム →
            </a>
          </div>
        </div>
      </div>

      {/* Detail Sections */}
      <div class="detail-sections">
        {/* 5つの理由 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-star"></i>
            このシステムが選ばれる5つの理由
          </h2>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3 class="feature-title">投稿作業からの完全解放</h3>
              <p class="feature-description">
                毎週・毎日のSNS投稿を完全自動化。予約設定後は放置するだけで、Instagram・Facebook・Twitterに自動投稿されます。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3 class="feature-title">3つのSNSに同時投稿</h3>
              <p class="feature-description">
                Instagram、Facebook、Twitter (X) に一度の設定で同時投稿。それぞれのSNSを個別に操作する手間が不要になります。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🌏</div>
              <h3 class="feature-title">バンコク時間で簡単設定</h3>
              <p class="feature-description">
                時刻入力はバンコク時間でOK。システムが自動的にUTCに変換して正確に投稿します。時差計算の心配はありません。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✅</div>
              <h3 class="feature-title">リアルタイム文字数チェック</h3>
              <p class="feature-description">
                Twitterの文字数制限を自動チェック。投稿前にプレビュー画面で確認でき、投稿失敗を防ぎます。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3 class="feature-title">テンプレートでコメント作成不要</h3>
              <p class="feature-description">
                Excelにコメントテンプレートを登録しておけば、毎回自動でランダム選択。コメントを考える時間が不要になります。
              </p>
            </div>
          </div>
        </div>

        {/* 使い方の具体例 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-book"></i>
            使い方の具体例
          </h2>
          <div class="use-case-grid">
            <div class="use-case-card">
              <h3 class="use-case-title">📚 ケース1: 毎週の講座案内</h3>
              <div class="use-case-details">
                <div class="use-case-detail">
                  <strong>スケジュール:</strong>
                  <span>毎週木曜日 20:00 (バンコク時間)</span>
                </div>
                <div class="use-case-detail">
                  <strong>投稿先:</strong>
                  <span>Instagram、Facebook、Twitter</span>
                </div>
                <div class="use-case-detail">
                  <strong>コメント:</strong>
                  <span>テンプレートからランダム選択</span>
                </div>
                <div class="use-case-detail">
                  <strong>画像:</strong>
                  <span>講座の画像フォルダからランダム</span>
                </div>
              </div>
              <div class="use-case-result">
                <strong>結果:</strong> 毎週木曜日の夜8時に、自動的に3つのSNSに投稿されます。
              </div>
            </div>

            <div class="use-case-card">
              <h3 class="use-case-title">🎉 ケース2: イベント告知</h3>
              <div class="use-case-details">
                <div class="use-case-detail">
                  <strong>スケジュール:</strong>
                  <span>毎日 10:00 (バンコク時間)</span>
                </div>
                <div class="use-case-detail">
                  <strong>投稿先:</strong>
                  <span>Instagram、Facebook、Twitter</span>
                </div>
                <div class="use-case-detail">
                  <strong>コメント:</strong>
                  <span>「生成AIワークショップ開催！」</span>
                </div>
                <div class="use-case-detail">
                  <strong>画像:</strong>
                  <span>イベント用フォルダから毎日違う画像</span>
                </div>
              </div>
              <div class="use-case-result">
                <strong>結果:</strong> イベント前の1週間、毎朝10時に自動投稿されます。
              </div>
            </div>

            <div class="use-case-card">
              <h3 class="use-case-title">📅 ケース3: 曜日ごとに違う投稿</h3>
              <div class="use-case-details">
                <div class="use-case-detail">
                  <strong>月曜:</strong>
                  <span>スクラッチ講座案内 (10:00)</span>
                </div>
                <div class="use-case-detail">
                  <strong>水曜:</strong>
                  <span>ロブロックス講座案内 (10:00)</span>
                </div>
                <div class="use-case-detail">
                  <strong>金曜:</strong>
                  <span>100マス計算イベント案内 (10:00)</span>
                </div>
              </div>
              <div class="use-case-result">
                <strong>結果:</strong> 曜日ごとに異なる内容を自動投稿。週3回の投稿が完全自動化されます。
              </div>
            </div>
          </div>
        </div>

        {/* 基本機能 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-list-check"></i>
            このシステムでできること
          </h2>
          <div class="detail-content">
            <h3 style="margin-bottom: 20px; color: var(--store-primary);">✅ 基本機能</h3>
            <ul>
              <li>Instagram・Facebook・Twitter 同時投稿</li>
              <li>毎日・毎週・毎月のスケジュール設定</li>
              <li>テンプレートからコメント自動選択</li>
              <li>画像フォルダから自動選択</li>
              <li>プレビュー機能で投稿前確認</li>
            </ul>

            <h3 style="margin: 30px 0 20px; color: var(--store-primary);">✅ 便利機能</h3>
            <ul>
              <li>バンコク時間で入力 (自動UTC変換)</li>
              <li>Twitter文字数リアルタイムチェック</li>
              <li>画像自動リサイズ (Twitter対応)</li>
              <li>URL自動短縮 (Twitter)</li>
              <li>ハッシュタグ管理</li>
            </ul>

            <h3 style="margin: 30px 0 20px; color: var(--store-primary);">✅ 管理機能</h3>
            <ul>
              <li>予約一覧表示</li>
              <li>投稿履歴確認</li>
              <li>画像使用履歴</li>
              <li>エラー通知</li>
            </ul>
          </div>
        </div>

        {/* 使い方 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-laptop"></i>
            使い方はたったの3ステップ
          </h2>
          <div class="detail-content">
            <div style="display: grid; gap: 30px;">
              <div style="display: flex; gap: 20px; align-items: start;">
                <div style="min-width: 50px; height: 50px; background: linear-gradient(135deg, var(--store-primary), var(--store-secondary)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">1</div>
                <div>
                  <h3 style="margin-bottom: 10px; color: var(--text-dark);">Web UIにアクセス</h3>
                  <p style="color: var(--text-gray);">ブラウザから管理画面を開きます</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px; align-items: start;">
                <div style="min-width: 50px; height: 50px; background: linear-gradient(135deg, var(--store-primary), var(--store-secondary)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">2</div>
                <div>
                  <h3 style="margin-bottom: 10px; color: var(--text-dark);">投稿内容とスケジュールを設定</h3>
                  <p style="color: var(--text-gray);">コメント、画像、投稿時刻を設定します</p>
                </div>
              </div>
              <div style="display: flex; gap: 20px; align-items: start;">
                <div style="min-width: 50px; height: 50px; background: linear-gradient(135deg, var(--store-primary), var(--store-secondary)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 700;">3</div>
                <div>
                  <h3 style="margin-bottom: 10px; color: var(--text-dark);">保存して完了</h3>
                  <p style="color: var(--text-gray);">あとは自動で投稿されます</p>
                </div>
              </div>
            </div>
            <p style="margin-top: 30px; padding: 20px; background: var(--store-bg); border-radius: 12px; color: var(--text-gray);">
              <strong>デバイス・ブラウザ問わず、どこからでもアクセス可能。</strong>
            </p>
          </div>
        </div>

        {/* 技術仕様 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-code"></i>
            技術仕様
          </h2>
          <div class="detail-content">
            <h3 style="margin-bottom: 15px; color: var(--store-primary);">バックエンド技術</h3>
            <ul style="margin-bottom: 30px;">
              <li><strong>フレームワーク:</strong> FastAPI (Python 3.12)</li>
              <li><strong>スケジューラー:</strong> APScheduler</li>
              <li><strong>データベース:</strong> SQLite + SQLAlchemy</li>
            </ul>

            <h3 style="margin-bottom: 15px; color: var(--store-primary);">SNS API 統合</h3>
            <ul style="margin-bottom: 30px;">
              <li><strong>Instagram:</strong> Graph API (Instagram Business)</li>
              <li><strong>Facebook:</strong> Graph API</li>
              <li><strong>Twitter:</strong> API v2 with OAuth 1.0a</li>
            </ul>

            <h3 style="margin-bottom: 15px; color: var(--store-primary);">インフラ技術</h3>
            <ul style="margin-bottom: 30px;">
              <li><strong>ホスティング:</strong> Railway</li>
              <li><strong>稼働率:</strong> 99.9% 保証</li>
              <li><strong>セキュリティ:</strong> HTTPS通信、環境変数による暗号化</li>
            </ul>

            <h3 style="margin-bottom: 15px; color: var(--store-primary);">オープンソース</h3>
            <ul>
              <li><strong>GitHub:</strong> <a href="https://github.com/kobeyabkk/sns-sparkle-scheduler" target="_blank" rel="noopener noreferrer" style="color: var(--store-primary); text-decoration: none;">kobeyabkk/sns-sparkle-scheduler</a></li>
              <li><strong>ライセンス:</strong> MIT License</li>
              <li><strong>ドキュメント:</strong> 完全英語・日本語対応</li>
            </ul>
          </div>
        </div>

        {/* System Requirements */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-desktop"></i>
            動作環境
          </h2>
          <div class="detail-content">
            <p><strong>全デバイス対応（Webベース）</strong></p>
            <ul>
              <li><strong>アクセス:</strong> PC・iPad・スマホのブラウザから</li>
              <li><strong>OS:</strong> Windows、Mac、Chromebook、iOS、Android対応</li>
              <li><strong>ブラウザ:</strong> Chrome、Safari、Edge、Firefoxなど主要ブラウザ対応</li>
              <li><strong>インターネット:</strong> 接続必須</li>
            </ul>
            <p style="margin-top: 20px;">
              <em>※ アカウント登録後、すぐにご利用いただけます。</em>
            </p>
          </div>
        </div>

        {/* こんな方におすすめ */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-users"></i>
            こんな方におすすめ
          </h2>
          <div class="detail-content">
            <ul>
              <li><strong>毎週の投稿が負担になっている教室運営者</strong> - 投稿作業を完全自動化できます</li>
              <li><strong>複数のSNSを運用している事業主</strong> - 3つのSNSに同時投稿で時間節約</li>
              <li><strong>投稿を忘れがちな方</strong> - スケジュール設定で投稿忘れを防止</li>
              <li><strong>投稿内容を考えるのが苦手な方</strong> - テンプレートで自動選択</li>
              <li><strong>文字数制限で失敗したことがある方</strong> - リアルタイムチェックで安心</li>
            </ul>
          </div>
        </div>

        {/* 導入までの流れ */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-rocket"></i>
            導入までの流れ
          </h2>
          <div class="detail-content">
            <div style="display: grid; gap: 20px;">
              <div style="padding: 20px; background: var(--store-bg); border-radius: 12px; border-left: 4px solid var(--store-primary);">
                <h3 style="margin-bottom: 10px; color: var(--text-dark);">1. お問い合わせ</h3>
                <p style="color: var(--text-gray);">KOBEYAプログラミング教室までご連絡ください</p>
              </div>
              <div style="padding: 20px; background: var(--store-bg); border-radius: 12px; border-left: 4px solid var(--store-primary);">
                <h3 style="margin-bottom: 10px; color: var(--text-dark);">2. アカウント設定</h3>
                <p style="color: var(--text-gray);">SNSのAPIキーを設定します（サポートあり）</p>
              </div>
              <div style="padding: 20px; background: var(--store-bg); border-radius: 12px; border-left: 4px solid var(--store-primary);">
                <h3 style="margin-bottom: 10px; color: var(--text-dark);">3. 初期設定サポート</h3>
                <p style="color: var(--text-gray);">使い方を丁寧にご説明します</p>
              </div>
              <div style="padding: 20px; background: var(--store-bg); border-radius: 12px; border-left: 4px solid var(--store-primary);">
                <h3 style="margin-bottom: 10px; color: var(--text-dark);">4. 運用開始</h3>
                <p style="color: var(--text-gray);">予約設定後は自動投稿が開始されます</p>
              </div>
            </div>
          </div>
        </div>

        {/* 制作者情報 */}
        <div class="detail-section">
          <h2 class="detail-section-title">
            <i class="fas fa-award"></i>
            教育者が本気で作った、最高レベルの運営ツール
          </h2>
          <div class="detail-content">
            <h3 style="margin-bottom: 15px; color: var(--store-primary);">🏫 制作：AI＆プログラミングのKOBEYA</h3>
            <p style="margin-bottom: 20px; font-size: 1.1rem; line-height: 1.8;">
              20年以上の教育現場の経験から誕生。実際に教室運営で使いながら改良を重ね、<br/>
              <strong>「投稿が続く」「設定が楽」「失敗しない」</strong><br/>
              この3点を最優先に設計しました。
            </p>
            <p style="padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; font-size: 1.15rem; line-height: 1.8; text-align: center;">
              <strong>🎉 SNS運営に勝る宣伝なし。毎日の投稿が、教室の未来を変える</strong><br/><br/>
              才能ではなく「続けた量」が集客につながる。<br/>
              その環境を、このシステムがすべて用意しています。
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </>
)
