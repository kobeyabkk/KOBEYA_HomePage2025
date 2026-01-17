import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const m5LabPage = () => (
  <>
    <head>
      <title>テノヒラメキ！M5ラボ｜KOBEYA（コベヤ）プログラミング教室</title>
      <meta name="description" content="手のひらサイズのマイコン『M5Stick』でプログラミング。光る・鳴る・反応する自分だけのガジェットを発明しよう。バンコクのプログラミング教室KOBEYA新講座。" />
      <meta name="keywords" content="M5Stick,マイコン,プログラミング,電子工作,KOBEYA,バンコク,プログラミング教室,IoT,発明" />
      <meta property="og:title" content="テノヒラメキ！M5ラボ｜KOBEYA" />
      <meta property="og:description" content="手のひらサイズのひらめきが、動き出す。M5Stickでプログラミング。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/m5-lab" />
      <meta property="og:image" content="https://kobeyabkk-homepage.pages.dev/images/m5-lab-announcement.jpg" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/m5-lab" />
    </head>
    
    <style>{`
      :root {
        --main-yellow: #FFD700;
        --accent-yellow: #FFA500;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --text-light: #A0AEC0;
        --primary-blue: #4A90E2;
        --tech-purple: #9B59B6;
        --tech-cyan: #00D9FF;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
      }

      .hero-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        padding: 4rem 1.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        animation: grid-move 20s linear infinite;
      }

      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }

      .hero-content {
        max-width: 1000px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }

      .hero-image {
        max-width: 500px;
        width: 100%;
        margin: 0 auto 2rem;
        border-radius: 1.5rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }

      .hero-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1rem;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.95);
        margin-bottom: 2rem;
        font-weight: 500;
      }

      .hero-description {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        max-width: 800px;
        margin: 0 auto 2rem;
        line-height: 1.8;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .section {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 3rem;
        color: var(--text-dark);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .feature-card {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .feature-title {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: var(--text-dark);
      }

      .feature-description {
        color: var(--text-gray);
        line-height: 1.7;
      }

      .workshop-banner {
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        border-radius: 1.5rem;
        padding: 3rem;
        margin: 3rem 0;
        box-shadow: 0 10px 40px rgba(255, 165, 0, 0.3);
      }

      .workshop-title {
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .workshop-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
      }

      .workshop-info {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
      }

      .workshop-subtitle {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .workshop-details {
        font-size: 1rem;
        color: var(--text-gray);
        line-height: 1.8;
      }

      .workshop-details strong {
        color: var(--text-dark);
      }

      .price-highlight {
        background: linear-gradient(135deg, #e53e3e 0%, #f56565 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 1rem;
        text-align: center;
        margin-top: 1.5rem;
      }

      .price-highlight .price {
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0.5rem 0;
      }

      .cta-button {
        display: inline-block;
        background: var(--primary-blue);
        color: white;
        padding: 1rem 2.5rem;
        border-radius: 2rem;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
        margin-top: 2rem;
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
      }

      .tech-specs {
        background: #f7fafc;
        border-radius: 1rem;
        padding: 2rem;
        margin: 2rem 0;
      }

      .tech-specs h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
      }

      .tech-specs ul {
        list-style: none;
        padding: 0;
      }

      .tech-specs li {
        padding: 0.75rem 0;
        border-bottom: 1px solid #e2e8f0;
        color: var(--text-gray);
      }

      .tech-specs li:last-child {
        border-bottom: none;
      }

      .tech-specs li strong {
        color: var(--text-dark);
        display: inline-block;
        min-width: 150px;
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 1.8rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
        }

        .workshop-content {
          grid-template-columns: 1fr;
        }

        .section-title {
          font-size: 1.5rem;
        }
      }
    `}</style>

    <body>
      <Header />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="hero-content">
          <img src="/images/m5-lab-announcement.jpg" alt="テノヒラメキ！M5ラボ" class="hero-image" />
          <h1 class="hero-title">💡 テノヒラメキ！M5ラボ</h1>
          <p class="hero-subtitle">― テノヒラサイズのひらめきが、動き出す ―</p>
          <p class="hero-description">
            君のひらめきが、手のひらサイズのマシンで動き出す！ 小さな『M5Stick』をプログラミングして、光る・鳴る・反応する自分だけのガジェットを発明しよう。<br />
            <strong>求む、未来の発明家！</strong>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">🚀 M5ラボで何ができる？</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">💡</div>
              <h3 class="feature-title">光って動く！</h3>
              <p class="feature-description">
                LEDを光らせたり、画面に絵や文字を表示させたり。プログラミングで視覚的な表現を自由自在に。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔊</div>
              <h3 class="feature-title">音を鳴らす！</h3>
              <p class="feature-description">
                ブザーで音楽を演奏したり、効果音を鳴らしたり。音でコミュニケーションするガジェットを作ろう。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📡</div>
              <h3 class="feature-title">センサーで反応！</h3>
              <p class="feature-description">
                ボタン、加速度センサー、温度センサー。環境の変化に反応するスマートなデバイスを発明！
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⌚</div>
              <h3 class="feature-title">ウェアラブル作品！</h3>
              <p class="feature-description">
                スマートウォッチ、活動量計、アラームデバイス。身につけられる電子工作にチャレンジ。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎮</div>
              <h3 class="feature-title">ゲームも作れる！</h3>
              <p class="feature-description">
                小さな画面でミニゲームを開発。タイマーゲーム、反射神経ゲームなど、アイデア次第で無限大。
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🌐</div>
              <h3 class="feature-title">IoTにも挑戦！</h3>
              <p class="feature-description">
                Wi-Fi機能で、インターネットと連携。天気予報を表示したり、リモート操作したり。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section class="section" style="background: #f7fafc;">
        <div class="container">
          <div class="workshop-banner">
            <h2 class="workshop-title">🎪 開講記念ワークショップ開催！</h2>
            <p style="text-align: center; font-size: 1.2rem; color: var(--text-dark); margin-bottom: 2rem;">
              キミだけの「スマートウォッチ」発明ワークショップ
            </p>
            
            <div class="workshop-content">
              <div class="workshop-info">
                <h3 class="workshop-subtitle">📅 開催情報</h3>
                <div class="workshop-details">
                  <p><strong>日時：</strong>近日公開予定</p>
                  <p><strong>対象：</strong>小学3年生〜中学生</p>
                  <p><strong>定員：</strong>各回8名（先着順）</p>
                  <p><strong>所要時間：</strong>約90分</p>
                  <p><strong>持ち物：</strong>なし（すべて教室で準備します）</p>
                </div>
              </div>
              
              <div class="workshop-info">
                <h3 class="workshop-subtitle">💻 ワークショップ内容</h3>
                <div class="workshop-details">
                  <p>✅ M5Stickの使い方を学ぶ</p>
                  <p>✅ 時計プログラムを作成</p>
                  <p>✅ LEDで光るエフェクト追加</p>
                  <p>✅ アラーム機能を実装</p>
                  <p>✅ バンドをつけて完成！</p>
                  <p style="margin-top: 1rem; font-weight: 600;">
                    作ったスマートウォッチは持ち帰れます！
                  </p>
                </div>
              </div>
            </div>

            <div class="price-highlight">
              <p style="font-size: 1.1rem; margin: 0;">M5Stick本体代込み</p>
              <div class="price">1,800 THB</div>
              <p style="font-size: 0.95rem; opacity: 0.9;">通常価格より超お得！</p>
            </div>

            <div style="text-align: center;">
              <a href="/contact" class="cta-button">
                📧 お問い合わせ・お申し込みはこちら
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">🔧 M5Stick について</h2>
          <div class="tech-specs">
            <h3>📱 仕様</h3>
            <ul>
              <li><strong>サイズ：</strong>手のひらサイズ（約48mm × 24mm × 14mm）</li>
              <li><strong>ディスプレイ：</strong>0.96インチ カラーLCD（80×160ピクセル）</li>
              <li><strong>プロセッサ：</strong>ESP32（Wi-Fi/Bluetooth搭載）</li>
              <li><strong>センサー：</strong>6軸IMU（加速度・ジャイロ）、温度センサー</li>
              <li><strong>バッテリー：</strong>内蔵リチウム電池（USB充電式）</li>
              <li><strong>プログラミング：</strong>Arduino IDE、MicroPython、UIFlow対応</li>
              <li><strong>拡張性：</strong>Groveコネクタで様々なセンサー追加可能</li>
            </ul>
          </div>
          
          <div class="tech-specs">
            <h3>🎯 こんな人におすすめ</h3>
            <ul>
              <li>プログラミングで実際に動くものを作りたい</li>
              <li>電子工作に興味がある</li>
              <li>自分だけのガジェットを発明したい</li>
              <li>IoTやスマートデバイスに興味がある</li>
              <li>ゲームを作るだけじゃなく、ハードウェアも学びたい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="container" style="text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">
            君のひらめきを、現実にしよう！
          </h2>
          <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.95;">
            テノヒラメキ！M5ラボで、未来の発明家を目指そう。
          </p>
          <a href="/contact" class="cta-button" style="background: var(--main-yellow); color: var(--text-dark);">
            📧 お問い合わせ・体験申込み
          </a>
        </div>
      </section>

      <Footer />
    </body>
  </>
)
