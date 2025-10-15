export function minecraftCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>マイクラッチコース - AI & プログラミングのKOBEYA</title>
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
      <style>
        :root {
          --main-yellow: #FFC107;
          --accent-yellow: #FFD700;
          --base-white: #FFFFFF;
          --text-dark: #2D3748;
          --text-gray: #718096;
          --border-gray: #E2E8F0;
          --hover-gray: #F7FAFC;
          --minecraft-green: #5F8A5F;
          --minecraft-brown: #8B4513;
          --explosion-orange: #FF6B35;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          background-color: var(--base-white);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section {
          padding: 80px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-gray);
          margin-bottom: 60px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--minecraft-green) 0%, var(--main-yellow) 100%);
          color: var(--base-white);
          text-align: center;
          padding: 100px 0;
        }

        .hero-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-block;
          background: var(--base-white);
          color: var(--text-dark);
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--hover-gray);
          transform: translateY(-2px);
        }

        /* Course Overview */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .overview-content h2 {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-dark);
        }

        .overview-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-gray);
          margin-bottom: 20px;
        }

        .overview-features {
          background: var(--hover-gray);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .feature-item i {
          color: var(--minecraft-green);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* Minecraft Skills */
        .skills-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .skill-card i {
          font-size: 2.5rem;
          color: var(--minecraft-green);
          margin-bottom: 16px;
        }

        .skill-card .fa-explosion {
          color: var(--explosion-orange);
        }

        .skill-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .skill-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Learning Journey */
        .journey-section {
          padding: 80px 0;
        }

        .journey-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--minecraft-green), var(--main-yellow));
          border-radius: 2px;
        }

        .journey-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .journey-step:nth-child(even) {
          flex-direction: row-reverse;
        }

        .step-content {
          flex: 1;
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 2px solid var(--border-gray);
          margin: 0 40px;
        }

        .step-number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: var(--minecraft-green);
          color: var(--base-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          z-index: 2;
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .step-description {
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Age & Levels */
        .levels-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .level-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 12px;
          border: 3px solid var(--minecraft-green);
          text-align: center;
        }

        .level-card i {
          font-size: 2.5rem;
          color: var(--minecraft-green);
          margin-bottom: 16px;
        }

        .level-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .level-card .age {
          color: var(--minecraft-green);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .level-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
        }

        /* Schedule & Pricing */
        .info-section {
          padding: 80px 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .info-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-title i {
          color: var(--minecraft-green);
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-gray);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-item span:first-child {
          font-weight: 500;
          color: var(--text-dark);
        }

        .info-item span:last-child {
          color: var(--text-gray);
        }

        .price-highlight {
          color: var(--minecraft-green) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--minecraft-green) 0%, var(--main-yellow) 100%);
          color: var(--base-white);
          padding: 80px 0;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 40px;
          line-height: 1.7;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cta-primary {
          background: var(--base-white);
          color: var(--text-dark);
        }

        .cta-primary:hover {
          background: var(--hover-gray);
          transform: translateY(-2px);
        }

        .cta-secondary {
          background: transparent;
          color: var(--base-white);
          border: 2px solid var(--base-white);
        }

        .cta-secondary:hover {
          background: var(--base-white);
          color: var(--text-dark);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section {
            padding: 40px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .overview-grid,
          .info-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .timeline-line {
            left: 30px;
            transform: none;
          }

          .step-number {
            left: 30px;
            transform: translateX(-50%);
          }

          .journey-step {
            flex-direction: row !important;
            margin-left: 60px;
          }

          .journey-step:nth-child(even) {
            flex-direction: row !important;
          }

          .step-content {
            margin: 0 0 0 20px;
          }

          .levels-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      </style>
    </head>
    <body>
      <main>
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="hero-icon">
              <i class="fas fa-cube"></i>
            </div>
            <h1 class="hero-title">マイクラッチコース</h1>
            <p class="hero-subtitle">
              大人気のマインクラフトで楽しく学ぶ<br>
              プログラミングの基礎とクリエイティブ思考
            </p>
            <a href="#details" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              コース詳細を見る
            </a>
          </div>
        </section>

        <!-- Course Overview -->
        <section class="section" id="details">
          <div class="container">
            <div class="overview-grid">
              <div class="overview-content">
                <h2>マイクラッチで始めるプログラミング</h2>
                <p>
                  子どもたちに大人気のマインクラフトを使ってプログラミングを学習していくコースです。大規模な建物を作ったり、アスレチックやTNTを降らせるミニゲームを制作したり、自分だけのダンジョンを完成させていきます。
                </p>
                <p>
                  デジタネが独自に開発したソフト「マイクラッチ」を使用し、ブロックを組み合わせて直感的にプログラミングを学べます。マインクラフトやプログラミングが初めてのお子様でも楽しめるコースです。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-gamepad"></i>
                  <span>マインクラフトでプログラミング</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-explosion"></i>
                  <span>TNT・アスレチック・ダンジョン作成</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-building"></i>
                  <span>大規模建物の自動建築</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-puzzle-piece"></i>
                  <span>ブロック型ビジュアルプログラミング</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-brain"></i>
                  <span>論理的思考力の育成</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-trophy"></i>
                  <span>全国コンテスト参加</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Three Key Points -->
        <section class="section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">マイクラッチコース 3つのポイント</h2>
            <div class="skills-grid">
              <div class="skill-card" style="border: 3px solid var(--main-yellow);">
                <i class="fas fa-smile" style="color: var(--main-yellow);"></i>
                <h3>ポイント1: コンテンツの楽しさ</h3>
                <p>
                  マイクラッチコースのテーマは「楽しく学ぶ」です。子どもたちは好きなことには圧倒的な集中力で取り組むので、他のどんな方法よりも学習効率が上がり、理解が進みます。
                </p>
              </div>

              <div class="skill-card" style="border: 3px solid var(--minecraft-green);">
                <i class="fas fa-child" style="color: var(--minecraft-green);"></i>
                <h3>ポイント2: 小学1年生から対応！</h3>
                <p>
                  マイクラに興味を持ちはじめる小学校低学年から、中学生までが推奨学年となっています。小学校入学と同時にプログラミング学習がスタートできます。どの学年にも対応しています。
                </p>
              </div>

              <div class="skill-card" style="border: 3px solid var(--minecraft-brown);">
                <i class="fas fa-trophy" style="color: var(--minecraft-brown);"></i>
                <h3>ポイント3: コンテストの開催</h3>
                <p>
                  作った作品は、日本全国のマイクラッチ学習者が集うコミュニティに投稿することで、たくさんの仲間たちに見てもらうことができます。学びのアウトプットをする場を提供することを目的に、プログラミングコンテストを毎年開催しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Programming Skills -->
        <section class="skills-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">学習できる内容</h2>
            <div class="skills-grid">
              <div class="skill-card">
                <i class="fas fa-explosion"></i>
                <h3>TNT爆発プログラム</h3>
                <p>TNTブロックを配置して爆発させるプログラムを作成。繰り返し処理や座標の概念を学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-home"></i>
                <h3>大規模建築の自動化</h3>
                <p>ピラミッドや城などの大きな建物を自動で建築するプログラムを作成。効率的なアルゴリズムを学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-subway"></i>
                <h3>レール・トロッコシステム</h3>
                <p>レッドストーン回路とトロッコを組み合わせた自動輸送システムを構築。論理回路の基礎を学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-running"></i>
                <h3>アスレチックコース</h3>
                <p>ジャンプやパズル要素を含むアスレチックコースを設計。ゲーム制作の基本を学びます。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-dungeon"></i>
                <h3>ダンジョン制作</h3>
                <p>敵やトラップを配置したオリジナルダンジョンを作成。条件分岐とランダム要素を活用します。</p>
              </div>

              <div class="skill-card">
                <i class="fas fa-robot"></i>
                <h3>キャラクター制御</h3>
                <p>エージェント（キャラクター）を動かして自動作業をさせるプログラムを作成。基本的なAIの概念を学びます。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Journey -->
        <section class="journey-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習の流れ</h2>
            <div class="journey-timeline">
              <div class="timeline-line"></div>
              
              <div class="journey-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4 class="step-title">マインクラフトの基本操作</h4>
                  <p class="step-description">ブロックの配置、アイテムの使い方など、マインクラフトの基本的な操作方法を学びます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4 class="step-title">マイクラッチの使い方</h4>
                  <p class="step-description">ブロックを組み合わせてプログラムを作る「マイクラッチ」の操作方法を覚えます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4 class="step-title">簡単なプログラム作成</h4>
                  <p class="step-description">キャラクターを動かしたり、ブロックを自動で配置したりする簡単なプログラムを作ります。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4 class="step-title">条件分岐と繰り返し</h4>
                  <p class="step-description">「もし〜なら」「〜を繰り返す」などの基本的なプログラミング構造を学びます。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4 class="step-title">オリジナル作品制作</h4>
                  <p class="step-description">学んだ技術を活かして、自分だけの建物や装置を作ります。</p>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">6</div>
                <div class="step-content">
                  <h4 class="step-title">作品発表・共有</h4>
                  <p class="step-description">完成した作品をクラスメイトに発表し、お互いの作品を鑑賞し合います。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Levels -->
        <section class="levels-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">対象年齢・推奨学年</h2>
            <div class="levels-grid">
              <div class="level-card">
                <i class="fas fa-child"></i>
                <h4>小学1年生〜</h4>
                <div class="age">6〜12歳</div>
                <p>マイクラに興味を持ちはじめる小学校低学年から対応。マインクラフトとプログラミングの基礎から丁寧に学習します。</p>
              </div>

              <div class="level-card">
                <i class="fas fa-user-graduate"></i>
                <h4>中学生</h4>
                <div class="age">13〜15歳</div>
                <p>より高度なプログラミング概念と論理的思考力を身につけ、複雑な作品制作に挑戦します。</p>
              </div>

              <div class="level-card">
                <i class="fas fa-heart"></i>
                <h4>初心者歓迎</h4>
                <div class="age">全年齢</div>
                <p>マインクラフトやプログラミングが初めてのお子様でも安心して楽しめるカリキュラムです。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Schedule & Pricing -->
        <section class="info-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">スケジュール・料金</h2>
            <div class="info-grid">
              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-calendar-alt"></i>
                  スケジュール
                </h3>
                <div class="info-item">
                  <span>平日クラス</span>
                  <span>火・木 16:00-17:30</span>
                </div>
                <div class="info-item">
                  <span>土曜クラス</span>
                  <span>土 10:00-11:30 / 14:00-15:30</span>
                </div>
                <div class="info-item">
                  <span>日曜クラス</span>
                  <span>日 13:00-14:30</span>
                </div>
                <div class="info-item">
                  <span>授業時間</span>
                  <span>90分 / 回</span>
                </div>
                <div class="info-item">
                  <span>定員</span>
                  <span>6名 / クラス</span>
                </div>
              </div>

              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="info-item">
                  <span>入会金</span>
                  <span>5,000 THB</span>
                </div>
                <div class="info-item">
                  <span>月4回コース</span>
                  <span class="price-highlight">2,800 THB</span>
                </div>
                <div class="info-item">
                  <span>月8回コース</span>
                  <span class="price-highlight">5,200 THB</span>
                </div>
                <div class="info-item">
                  <span>教材費</span>
                  <span>なし</span>
                </div>
                <div class="info-item">
                  <span>体験授業</span>
                  <span style="color: var(--minecraft-green); font-weight: 600;">無料</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Why Programming Education -->
        <section class="section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">なぜ今、プログラミング教育が重要なのか</h2>
            
            <div class="overview-grid" style="margin-bottom: 60px;">
              <div class="overview-content">
                <h3 style="color: var(--minecraft-green); margin-bottom: 16px;">2020年からプログラミング必修化決定！</h3>
                <p>
                  あらゆるものが今以上にインターネットでつながる時代（Internet of Things）が進む中、機械に仕事をしてもらうためにはその仕組みや構造を理解しておくことがとても重要です。
                </p>
                <p>
                  プログラミング教育やアプリ開発教育は、その基礎学習となり次世代において非常に重要な"学び"となってきています。
                </p>
              </div>

              <div class="overview-content">
                <h3 style="color: var(--main-yellow); margin-bottom: 16px;">論理的思考力の育成</h3>
                <p>
                  児童期にピアノなど音楽を習うことが基礎的音感を発達させるように、水泳や球技などスポーツすることが基礎体力を養うように、プログラミングやアプリ開発教育は、暗記教育とは一線を画した物事を順序立てて論理的に捉える思考力（考える力）を楽しく養うのにとても効果的です。
                </p>
              </div>
            </div>

            <div class="info-card" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); text-align: center;">
              <h3 style="color: var(--minecraft-brown); margin-bottom: 20px;">雇用の未来、これから必要なのは知識ではなく知恵と問題解決能力</h3>
              <p style="margin-bottom: 16px;">
                2013年の英国オックスフォードマーティン大学の調査結果によれば、2034年には、現在存在している仕事の約47%がコンピューターテクノロジーの進化により機械に置き換わると発表しています。
              </p>
              <p>
                これから必要な人材は、知識ではなく自らの知恵を使ったり、ロボットやIT、人工知能をうまく使いこなして問題解決ができる人間です。そのために、まずはロボットやITの仕組みを理解することから始めましょう。
              </p>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">マイクラッチ体験会随時開催中！</h2>
              <p class="cta-description">
                ゲーム感覚で楽しく学べるマイクラッチコース。お子様の「好き」を「学び」に変えて、プログラミングの世界への第一歩を踏み出しませんか？<br>
                <strong>体験会の日程はお問い合わせください。</strong>
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-calendar-check"></i>
                  体験会の日程を問い合わせる
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-phone"></i>
                  お電話でのお問い合わせ
                </a>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
                <p style="margin-bottom: 8px;">
                  <i class="fas fa-map-marker-alt"></i> フジスーパー2号店 2階
                </p>
                <p style="margin-bottom: 8px;">
                  <i class="fas fa-phone"></i> 095-969-4100
                </p>
                <p>
                  <i class="fas fa-envelope"></i> kobeyabkk@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `
}