import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const m5LabPage = () => (
  <>
    <head>
      <title>テノヒラメキ！M5ラボ｜KOBEYA（コベヤ）プログラミング教室</title>
      <meta name="description" content="手のひらサイズのマイコン『M5Stick』で楽しくプログラミング！光る・鳴る・動くガジェットを作ろう。Lv.1からLv.3まで36回の充実カリキュラム。バンコクのプログラミング教室KOBEYA。" />
      <meta name="keywords" content="M5Stick,マイコン,プログラミング,電子工作,KOBEYA,バンコク,プログラミング教室,IoT,子ども,小学生,中学生" />
      <meta property="og:title" content="テノヒラメキ！M5ラボ｜KOBEYA" />
      <meta property="og:description" content="手のひらサイズのひらめきが、動き出す。M5Stickで楽しくプログラミング！" />
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
        --primary-blue: #4A90E2;
        --tech-purple: #9B59B6;
        --tech-orange: #FF6B35;
        --tech-green: #27AE60;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
        color: var(--text-dark);
        line-height: 1.7;
      }

      .hero-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        padding: 3rem 1.5rem;
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
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 3rem;
      }

      .hero-image-wrapper {
        flex: 0 0 auto;
      }

      .hero-image {
        max-width: 400px;
        width: 400px;
        border-radius: 1.5rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: float 3s ease-in-out infinite;
        display: block;
      }

      .hero-text {
        flex: 1;
        text-align: left;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }

      .hero-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1rem;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        letter-spacing: 0.05em;
        text-align: left;
      }

      .hero-subtitle {
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.95);
        margin-bottom: 2rem;
        font-weight: 500;
        font-style: italic;
        text-align: left;
      }

      .hero-description {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        line-height: 2;
        background: rgba(255, 255, 255, 0.1);
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        backdrop-filter: blur(10px);
        text-align: left;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .section {
        padding: 3.5rem 1.5rem;
      }

      .section-title {
        font-size: 1.8rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        color: var(--text-dark);
      }

      .section-subtitle {
        text-align: center;
        font-size: 1rem;
        color: var(--text-gray);
        margin-bottom: 2.5rem;
      }

      .intro-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        margin-bottom: 2rem;
      }

      .intro-image {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      }

      .intro-text h3 {
        font-size: 1.5rem;
        color: var(--tech-purple);
        margin-bottom: 1rem;
        font-weight: 700;
      }

      .intro-text p {
        font-size: 1rem;
        line-height: 1.8;
        color: var(--text-gray);
        margin-bottom: 1rem;
      }

      .highlight-box {
        background: linear-gradient(135deg, #fff9e6 0%, #ffe4b5 100%);
        border-left: 5px solid var(--main-yellow);
        padding: 1.5rem;
        border-radius: 0.75rem;
        margin: 2rem 0;
      }

      .highlight-box h4 {
        font-size: 1.2rem;
        color: var(--tech-orange);
        margin-bottom: 0.75rem;
        font-weight: 700;
      }

      .highlight-box p {
        font-size: 1rem;
        color: var(--text-dark);
        line-height: 1.7;
        margin-bottom: 0.5rem;
      }

      .course-levels {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin: 3rem 0;
      }

      .level-card {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        border-top: 5px solid var(--primary-blue);
      }

      .level-card:nth-child(2) {
        border-top-color: var(--tech-orange);
      }

      .level-card:nth-child(3) {
        border-top-color: var(--tech-green);
      }

      .level-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }

      .level-badge {
        display: inline-block;
        background: var(--primary-blue);
        color: white;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      .level-card:nth-child(2) .level-badge {
        background: var(--tech-orange);
      }

      .level-card:nth-child(3) .level-badge {
        background: var(--tech-green);
      }

      .level-title {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-dark);
      }

      .level-description {
        font-size: 0.95rem;
        color: var(--text-gray);
        line-height: 1.7;
        margin-bottom: 1rem;
      }

      .level-details {
        font-size: 0.9rem;
        color: var(--text-dark);
        background: #f8f9fa;
        padding: 0.75rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
      }

      .level-details strong {
        color: var(--primary-blue);
      }

      .lessons-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .lesson-card {
        background: white;
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        border-left: 4px solid var(--tech-purple);
        transition: transform 0.3s;
      }

      .lesson-card:hover {
        transform: translateX(5px);
      }

      .lesson-number {
        background: var(--tech-purple);
        color: white;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        margin-bottom: 0.75rem;
        font-size: 1.1rem;
      }

      .lesson-title {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--text-dark);
      }

      .lesson-description {
        font-size: 0.9rem;
        color: var(--text-gray);
        line-height: 1.6;
      }

      .workshop-banner {
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        border-radius: 1.5rem;
        padding: 3rem;
        margin: 3rem 0;
        box-shadow: 0 10px 40px rgba(255, 165, 0, 0.3);
        text-align: center;
      }

      .workshop-title {
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .workshop-subtitle {
        font-size: 1.1rem;
        color: var(--text-dark);
        margin-bottom: 2rem;
      }

      .workshop-image {
        max-width: 350px;
        width: 100%;
        margin: 0 auto 2rem;
        border-radius: 1rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      }

      .price-highlight {
        background: linear-gradient(135deg, #e53e3e 0%, #f56565 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 1rem;
        text-align: center;
        margin: 2rem auto;
        max-width: 400px;
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
        margin-top: 1rem;
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
      }

      @media (max-width: 768px) {
        .hero-content {
          flex-direction: column;
          gap: 2rem;
        }

        .hero-image {
          max-width: 100%;
          width: 100%;
        }

        .hero-text {
          text-align: center;
        }

        .hero-title {
          font-size: 1.6rem;
          text-align: center;
        }

        .hero-subtitle {
          font-size: 1rem;
          text-align: center;
        }

        .hero-description {
          text-align: center;
        }

        .intro-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .course-levels {
          grid-template-columns: 1fr;
        }

        .section-title {
          font-size: 1.5rem;
        }

        .lessons-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <body>
      <Header />

      {/* Hero Section */}
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-image-wrapper">
            <img src="/images/m5-lab-logo-square.jpg" alt="テノヒラメキ！M5ラボ" class="hero-image" />
          </div>
          <div class="hero-text">
            <h1 class="hero-title">💡 テノヒラメキ！M5ラボ</h1>
            <p class="hero-subtitle">― テノヒラサイズのひらめきが、動き出す ―</p>
            <p class="hero-description">
              手のひらサイズの小さなマシンで、君のアイデアを形にしよう！<br />
              プログラミングで光らせたり、音を鳴らしたり、動かしたり。<br />
              楽しく作って、すごいものを生み出そう！
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section class="section">
        <div class="container">
          <div class="intro-grid">
            <div>
              <img src="/images/m5-lab-student.jpg" alt="プログラミングを楽しむ子ども" class="intro-image" />
            </div>
            <div class="intro-text">
              <h3>🎮 ブロックを組み合わせて作るから簡単！</h3>
              <p>
                M5ラボでは、<strong>UIFlow</strong>という道具を使って、ブロックをパズルのように組み合わせてプログラミングします。
              </p>
              <p>
                難しいコードを書く必要はありません！<br />
                マウスで操作するだけで、誰でも楽しく作品が作れます。
              </p>
              <p style="font-size: 1.1rem; color: var(--tech-orange); font-weight: 600; margin-top: 1.5rem;">
                パソコンが初めてでも大丈夫！<br />
                一緒に楽しく作りながら学んでいきましょう！
              </p>
            </div>
          </div>

          <div class="intro-grid" style="margin-top: 3rem;">
            <div class="intro-text">
              <h3>⌚ こんなものが作れちゃう！</h3>
              <p>
                <strong>スマートウォッチ、ゲーム、センサーで反応する装置…</strong><br />
                自分だけのオリジナル作品を発明できます！
              </p>
              <p>
                M5Stickという手のひらサイズのマシンには、<br />
                <strong>画面、ボタン、センサー</strong>がついています。
              </p>
              <p style="color: var(--tech-green); font-weight: 600; font-size: 1.05rem; margin-top: 1rem;">
                プログラミングで、これらを自由に動かして、<br />
                世界に一つだけの作品を作ろう！
              </p>
            </div>
            <div>
              <img src="/images/m5stick-watch.jpg" alt="M5Stickスマートウォッチ" class="intro-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Box */}
      <section class="section" style="background: #f8f9fa; padding: 2rem 1.5rem;">
        <div class="container">
          <div class="highlight-box">
            <h4>🌟 M5Stickってなに？</h4>
            <p>
              <strong>M5Stick</strong>は、手のひらに乗る小さなコンピューター。<br />
              画面がついていて、ボタンで操作できて、センサーで動きや傾きも感じ取れます。
            </p>
            <p>
              電池で動くから、腕時計みたいに身につけたり、持ち歩いたりできるよ！
            </p>
            <p style="margin-top: 1rem;">
              <img src="/images/m5stick-parts.jpg" alt="M5Stickの各部説明" style="width: 100%; max-width: 600px; border-radius: 0.75rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />
            </p>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section class="section">
        <div class="container">
          <h2 class="section-title">📚 3つのレベルで、ステップアップ！</h2>
          <p class="section-subtitle">全36回の充実したカリキュラムで、初心者から上級者まで楽しく学べます</p>
          
          <div class="course-levels">
            <div class="level-card">
              <span class="level-badge">Lv.1 入門</span>
              <h3 class="level-title">M5StickC PLUS2</h3>
              <p class="level-description">
                手のひらサイズの小さなマシンで、プログラミングの基礎を学びます。時計やゲーム、センサーを使った作品を作りながら、楽しく学んでいきます。
              </p>
              <div class="level-details">
                <strong>全12回</strong> | 初めてでも安心
              </div>
            </div>
            
            <div class="level-card">
              <span class="level-badge">Lv.2 中級</span>
              <h3 class="level-title">M5Stack Core2 / CoreS3</h3>
              <p class="level-description">
                少し大きな画面とタッチパネルで、もっと本格的な作品に挑戦！より複雑なプログラミングを学びます。
              </p>
              <div class="level-details">
                <strong>全12回</strong> | じっくり学ぼう
              </div>
            </div>
            
            <div class="level-card">
              <span class="level-badge">Lv.3 上級</span>
              <h3 class="level-title">M5Stack CoreS3</h3>
              <p class="level-description">
                高度な機能を使って、プロレベルの作品作りに挑戦！自分のアイデアを形にする力を身につけます。
              </p>
              <div class="level-details">
                <strong>全12回</strong> | 発明家への道
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons (Lv.1) */}
      <section class="section" style="background: #f8f9fa;">
        <div class="container">
          <h2 class="section-title">🎯 Lv.1で作るもの（全12回）</h2>
          <p class="section-subtitle">楽しく作りながら、プログラミングの力がついていきます！</p>
          
          <div class="lessons-grid">
            <div class="lesson-card">
              <div class="lesson-number">1</div>
              <div class="lesson-title">時計を作る</div>
              <div class="lesson-description">
                デジタル時計を作って、プログラミングの基本を学ぼう！変数や計算の使い方が分かります。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">2</div>
              <div class="lesson-title">絵を描くプログラム</div>
              <div class="lesson-description">
                画面にカラフルな図形を描くプログラムを作ります。座標やランダムな動きを学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">3</div>
              <div class="lesson-title">動きを感じ取るセンサー</div>
              <div class="lesson-description">
                M5Stickを振ったり傾けたりすると反応するプログラムを作ります。加速度センサーの使い方を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">4</div>
              <div class="lesson-title">デジタル名刺</div>
              <div class="lesson-description">
                自分の名前や好きなものを表示する名刺プログラム。ボタンで画面を切り替える方法を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">5</div>
              <div class="lesson-title">玉よけゲーム</div>
              <div class="lesson-description">
                傾けて操作するゲームを作ります！ゲームの仕組みやキャラクターの動かし方を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">6</div>
              <div class="lesson-title">ストップウォッチ</div>
              <div class="lesson-description">
                タイム測定ができるストップウォッチを作ります。時間の計算やボタン操作を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">7</div>
              <div class="lesson-title">電子サイコロ</div>
              <div class="lesson-description">
                振るとランダムに数字が出るサイコロプログラム。センサーと乱数の組み合わせを学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">8</div>
              <div class="lesson-title">アラーム時計</div>
              <div class="lesson-description">
                設定した時刻にアラームが鳴る時計を作ります。音の出し方や条件判定を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">9</div>
              <div class="lesson-title">歩数計</div>
              <div class="lesson-description">
                歩いた歩数をカウントするプログラム。センサーのデータを使った計算方法を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">10</div>
              <div class="lesson-title">傾き計測器</div>
              <div class="lesson-description">
                物の傾きを測る道具を作ります。センサーデータの視覚化を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">11</div>
              <div class="lesson-title">反応速度ゲーム</div>
              <div class="lesson-description">
                ボタンを素早く押すゲームを作ります。タイミングの測定や結果の表示を学びます。
              </div>
            </div>
            
            <div class="lesson-card">
              <div class="lesson-number">12</div>
              <div class="lesson-title">オリジナル作品</div>
              <div class="lesson-description">
                今まで学んだことを組み合わせて、自分だけのオリジナル作品を作ります！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section class="section">
        <div class="container">
          <div class="workshop-banner">
            <h2 class="workshop-title">🎪 開講記念ワークショップ開催！</h2>
            <p class="workshop-subtitle">キミだけの「スマートウォッチ」を作ろう</p>
            
            <img src="/images/m5stick-watch.jpg" alt="スマートウォッチ" class="workshop-image" />
            
            <p style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 1.5rem; line-height: 1.8;">
              M5Stickをプログラミングして、時計の機能を作ります。<br />
              完成したらバンドをつけて、そのまま腕時計として持って帰れます！
            </p>

            <div class="price-highlight">
              <p style="font-size: 1.1rem; margin: 0;">M5Stick本体代（約1200B）込み</p>
              <div class="price">1,800 THB</div>
              <p style="font-size: 0.95rem; opacity: 0.9;">超お得な特別価格！</p>
            </div>

            <div style="background: white; border-radius: 1rem; padding: 1.5rem; margin-top: 2rem; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto;">
              <h4 style="font-size: 1.2rem; color: var(--tech-purple); margin-bottom: 1rem; text-align: center;">📅 ワークショップ内容</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">✅ M5Stickの使い方を学ぶ</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">✅ 時計プログラムを作る</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">✅ LEDで光るエフェクトを追加</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">✅ アラーム機能を作る</li>
                <li style="padding: 0.5rem 0;">✅ バンドをつけて完成！</li>
              </ul>
              <p style="margin-top: 1.5rem; text-align: center; font-weight: 600; color: var(--tech-orange);">
                対象：小学3年生〜中学生<br />
                所要時間：約90分
              </p>
            </div>

            <div style="text-align: center; margin-top: 2rem;">
              <a href="/contact" class="cta-button">
                📧 お問い合わせ・お申し込み
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UIFlow Screenshot */}
      <section class="section" style="background: #f8f9fa;">
        <div class="container">
          <h2 class="section-title">🎨 こんな感じでプログラミングします</h2>
          <p class="section-subtitle">ブロックを組み合わせるだけ！楽しくて簡単です</p>
          
          <div style="text-align: center;">
            <img src="/images/m5-uiflow-screen.jpg" alt="UIFlowプログラミング画面" style="max-width: 800px; width: 100%; border-radius: 1rem; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);" />
          </div>
          
          <div style="max-width: 800px; margin: 2rem auto; background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h3 style="font-size: 1.3rem; color: var(--tech-purple); margin-bottom: 1rem; text-align: center;">💡 プログラミングが初めてでも大丈夫！</h3>
            <p style="font-size: 1rem; line-height: 1.8; color: var(--text-gray); text-align: center;">
              カラフルなブロックをマウスで動かして組み合わせるだけ。<br />
              まるでパズルやレゴで遊ぶように、楽しくプログラミングできます！
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="container" style="text-align: center;">
          <h2 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 1.5rem;">
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
