import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const thinkthinkCoursePage = () => (
  <>
    <head>
      <title>Think!Think!思考力育成コース｜KOBEYA（コベヤ）プログラミング教室</title>
      <meta name="description" content="KOBEYA（コベヤ）のThink!Think!コース。6-12歳対象の思考力育成アプリ。空間認識、論理的思考、試行錯誤を楽しくトレーニング。バンコクのプログラミング教室。" />
      <meta name="keywords" content="Think!Think!,思考力,コベヤ,KOBEYA,6歳,小学生,バンコク,プログラミング教室,論理的思考" />
      <meta property="og:title" content="Think!Think!コース｜KOBEYA" />
      <meta property="og:description" content="思考力を楽しく育成するアプリ学習" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/courses/thinkthink" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/courses/thinkthink" />
    </head>
    
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-gray: #E2E8F0;
        --hover-gray: #F7FAFC;
        --think-purple: #9C27B0;
        --think-blue: #2196F3;
        --think-green: #4CAF50;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
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

      /* Hero Section */
      .hero-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, var(--base-white) 100%);
        padding: 120px 0;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .hero-content {
        position: relative;
        z-index: 2;
      }

      .hero-icon {
        font-size: 5rem;
        color: var(--text-dark);
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--text-dark);
      }

      .hero-subtitle {
        font-size: 1.4rem;
        color: var(--text-gray);
        margin-bottom: 40px;
        line-height: 1.8;
      }

      .cta-button {
        display: inline-block;
        background: var(--text-dark);
        color: var(--base-white);
        padding: 18px 40px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(45, 55, 72, 0.15);
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(45, 55, 72, 0.25);
      }

      /* App Overview */
      .app-overview {
        background: var(--base-white);
        padding: 100px 0;
      }

      .overview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .overview-text h2 {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        line-height: 1.3;
      }

      .overview-text p {
        font-size: 1.2rem;
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 25px;
      }

      .highlight-box {
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        transform: rotate(0deg);
        box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2);
      }

      .highlight-number {
        font-size: 4rem;
        font-weight: 900;
        color: var(--text-dark);
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .highlight-text {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      /* Thinking Sense Section */
      .thinking-sense {
        background: var(--hover-gray);
        padding: 100px 0;
      }

      .section-header {
        text-align: center;
        margin-bottom: 80px;
      }

      .section-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
      }

      .section-subtitle {
        font-size: 1.2rem;
        color: var(--text-gray);
        line-height: 1.7;
      }

      .sense-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
      }

      .sense-card {
        background: var(--base-white);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        border: 3px solid transparent;
      }

      .sense-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
      }

      .sense-card:nth-child(1) {
        border-color: var(--think-purple);
      }

      .sense-card:nth-child(2) {
        border-color: var(--think-blue);
      }

      .sense-card:nth-child(3) {
        border-color: var(--think-green);
      }

      .sense-card:nth-child(4) {
        border-color: var(--main-yellow);
      }

      .sense-card:nth-child(5) {
        border-color: var(--text-gray);
      }

      .sense-icon {
        font-size: 3.5rem;
        margin-bottom: 25px;
      }

      .sense-card:nth-child(1) .sense-icon { color: var(--think-purple); }
      .sense-card:nth-child(2) .sense-icon { color: var(--think-blue); }
      .sense-card:nth-child(3) .sense-icon { color: var(--think-green); }
      .sense-card:nth-child(4) .sense-icon { color: var(--main-yellow); }
      .sense-card:nth-child(5) .sense-icon { color: var(--text-gray); }

      .sense-title {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .sense-description {
        color: var(--text-gray);
        line-height: 1.6;
      }

      /* Features Section */
      .features-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .features-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 80px;
        align-items: start;
      }

      .features-intro h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
      }

      .features-intro p {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .features-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }

      .feature-item {
        background: var(--hover-gray);
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        transition: all 0.3s ease;
      }

      .feature-item:hover {
        background: var(--main-yellow);
        transform: translateY(-5px);
      }

      .feature-number {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: var(--main-yellow);
        color: var(--text-dark);
        border-radius: 50%;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 20px;
      }

      .feature-item:hover .feature-number {
        background: var(--base-white);
      }

      .feature-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 10px;
      }

      .feature-desc {
        color: var(--text-gray);
        font-size: 0.95rem;
        line-height: 1.5;
      }

      /* Research Results */
      .research-section {
        background: linear-gradient(135deg, var(--think-blue) 0%, var(--think-purple) 100%);
        color: var(--base-white);
        padding: 100px 0;
        text-align: center;
      }

      .research-header h2 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 30px;
      }

      .research-header p {
        font-size: 1.2rem;
        margin-bottom: 60px;
        opacity: 0.9;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-bottom: 60px;
      }

      .stat-item {
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
      }

      .stat-number {
        font-size: 3.5rem;
        font-weight: 900;
        margin-bottom: 10px;
      }

      .stat-label {
        font-size: 1.1rem;
        opacity: 0.9;
      }

      .research-details {
        background: rgba(255, 255, 255, 0.1);
        padding: 50px;
        border-radius: 25px;
        backdrop-filter: blur(10px);
        text-align: left;
        max-width: 800px;
        margin: 0 auto;
      }

      .research-partner {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 20px;
        color: var(--main-yellow);
      }

      .research-description {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 30px;
      }

      .result-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }

      .result-item {
        text-align: center;
      }

      .result-value {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--main-yellow);
        margin-bottom: 5px;
      }

      .result-label {
        font-size: 1rem;
        opacity: 0.9;
      }

      /* Professional Team */
      .team-section {
        background: var(--hover-gray);
        padding: 100px 0;
      }

      .team-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .team-text h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
      }

      .team-text p {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .team-highlight {
        background: var(--main-yellow);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        transform: rotate(0deg);
        box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2);
      }

      .team-logo {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .team-description {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
        line-height: 1.5;
      }

      /* Schedule & Pricing */
      .schedule-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .schedule-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        margin-top: 60px;
      }

      .schedule-card {
        background: var(--hover-gray);
        padding: 50px;
        border-radius: 25px;
        border: 3px solid var(--main-yellow);
      }

      .card-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .card-title i {
        color: var(--main-yellow);
      }

      .schedule-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 2px solid var(--border-gray);
      }

      .schedule-item:last-child {
        border-bottom: none;
      }

      .schedule-label {
        font-weight: 600;
        color: var(--text-dark);
      }

      .schedule-value {
        color: var(--text-gray);
        font-weight: 500;
      }

      .price-highlight {
        color: var(--think-blue) !important;
        font-weight: 700 !important;
        font-size: 1.3rem !important;
      }

      /* CTA Section */
      .cta-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
        padding: 100px 0;
        text-align: center;
      }

      .cta-content {
        max-width: 700px;
        margin: 0 auto;
      }

      .cta-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 25px;
        line-height: 1.3;
      }

      .cta-description {
        font-size: 1.2rem;
        color: var(--text-gray);
        margin-bottom: 40px;
        line-height: 1.7;
      }

      .cta-buttons {
        display: flex;
        gap: 25px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-primary,
      .btn-secondary {
        padding: 18px 40px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .btn-primary {
        background: var(--text-dark);
        color: var(--base-white);
        box-shadow: 0 8px 25px rgba(45, 55, 72, 0.15);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(45, 55, 72, 0.25);
      }

      .btn-secondary {
        background: var(--base-white);
        color: var(--text-dark);
        border: 3px solid var(--text-dark);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }

      .btn-secondary:hover {
        background: var(--text-dark);
        color: var(--base-white);
        transform: translateY(-3px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .section {
          padding: 60px 0;
        }

        .overview-grid,
        .features-container,
        .team-content,
        .schedule-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .features-grid,
        .sense-grid,
        .stats-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .result-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }

        .btn-primary,
        .btn-secondary {
          width: 100%;
          max-width: 300px;
          justify-content: center;
        }

        .highlight-box,
        .team-highlight {
          transform: rotate(0deg);
        }
      }
    `}</style>

    <Header />

    <main>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-icon">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h1 class="hero-title">シンクシンク</h1>
            <p class="hero-subtitle">
              空間認識や論理思考といった、考えるための土台となる力＝「思考センス」を育むアプリです。<br/>
              1日10分で、考える力が楽しく自然と育ちます。
            </p>
            <a href="#overview" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* App Overview */}
      <section class="app-overview" id="overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-text">
              <h2>問題は120種類<br/>20,000題以上を収録</h2>
              <p>
                問題は3分のミニゲーム形式で構成されており、集中力が続く短時間で効果的に思考力を鍛えることができます。
              </p>
              <p>
                世界的な算数大会への問題提供などを手がける思考力教材のパイオニア「ワンダーファイ」による高品質な良問を、120種20,000問以上収録しています。
              </p>
            </div>
            <div class="highlight-box">
              <div class="highlight-number">120+</div>
              <div class="highlight-text">種類の良問<br/>20,000題以上</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thinking Sense */}
      <section class="thinking-sense">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">思考センスとは？</h2>
            <p class="section-subtitle">
              抽象的な思考力の土台となるイメージ力を5分野に分類し、<br/>
              それぞれのカテゴリにフォーカスしたカリキュラムを提供します。
            </p>
          </div>
          <div class="sense-grid">
            <div class="sense-card">
              <div class="sense-icon">
                <i class="fas fa-cube"></i>
              </div>
              <h3 class="sense-title">空間認識</h3>
              <p class="sense-description">
                立体的に物事を捉える力。10歳くらいまでに大きく伸びる重要な能力です。
              </p>
            </div>
            
            <div class="sense-card">
              <div class="sense-icon">
                <i class="fas fa-shapes"></i>
              </div>
              <h3 class="sense-title">平面認識</h3>
              <p class="sense-description">
                図形や模様のパターンを理解し、平面上での関係性を把握する力を育てます。
              </p>
            </div>

            <div class="sense-card">
              <div class="sense-icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <h3 class="sense-title">試行錯誤</h3>
              <p class="sense-description">
                何事に取り組むにも重要な要素。粘り強くチャレンジする力を身につけます。
              </p>
            </div>

            <div class="sense-card">
              <div class="sense-icon">
                <i class="fas fa-sitemap"></i>
              </div>
              <h3 class="sense-title">論理</h3>
              <p class="sense-description">
                筋道を立てて考える力、因果関係を理解し推論する能力を養います。
              </p>
            </div>

            <div class="sense-card">
              <div class="sense-icon">
                <i class="fas fa-calculator"></i>
              </div>
              <h3 class="sense-title">数的処理</h3>
              <p class="sense-description">
                数量感覚や計算処理能力、数学的な思考パターンを育成します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="features-section">
        <div class="container">
          <div class="features-container">
            <div class="features-intro">
              <h2>楽しんで続けられる<br/>3つのポイント</h2>
              <p>
                シンクシンクは単なる学習アプリではありません。子どもたちが夢中になって取り組める工夫と、科学的根拠に基づいた効果的な学習システムを兼ね備えています。
              </p>
              <p>
                時間が限られているからこそ集中力もアップし、確実な成長を実感できます。
              </p>
            </div>
            
            <div class="features-grid">
              <div class="feature-item">
                <div class="feature-number">1</div>
                <h4 class="feature-title">高品質な良問を<br/>120種類以上収録！</h4>
                <p class="feature-desc">世界的な算数大会への問題提供を手がける「ワンダーファイ」による高品質な良問</p>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">2</div>
                <h4 class="feature-title">1回10分で<br/>安心して続けられる！</h4>
                <p class="feature-desc">時間が限られているからこそ、集中力もアップします！</p>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">3</div>
                <h4 class="feature-title">学ぶ力やIQにも<br/>大きな効果！</h4>
                <p class="feature-desc">カンボジアで行った1,500人規模の実証実験で効果が確認されています</p>
              </div>
              
              <div class="feature-item">
                <div class="feature-number">+</div>
                <h4 class="feature-title">非認知能力への効果</h4>
                <p class="feature-desc">学ぶ意欲や自己肯定感といった非認知能力にもポジティブな影響を及ぼします</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Results */}
      <section class="research-section">
        <div class="container">
          <div class="research-header">
            <h2>算数・IQにも大きな効果が確認されています</h2>
            <p>JICA・慶應義塾大学と共同で行った実証実験の結果</p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">1,500</div>
              <div class="stat-label">人規模の実証実験</div>
            </div>
            
            <div class="stat-item">
              <div class="stat-number">3</div>
              <div class="stat-label">ヶ月間の取り組み</div>
            </div>
            
            <div class="stat-item">
              <div class="stat-number">120+</div>
              <div class="stat-label">種類の問題</div>
            </div>
            
            <div class="stat-item">
              <div class="stat-number">10</div>
              <div class="stat-label">分/日の学習時間</div>
            </div>
          </div>

          <div class="research-details">
            <div class="research-partner">JICA・慶應義塾大学 共同実証実験</div>
            <p class="research-description">
              シンクシンクに3ヶ月取り組んだ児童は、そうでない児童に比べて、算数・IQの偏差値が大きく伸びたことが確認されています。
            </p>
            
            <div class="result-grid">
              <div class="result-item">
                <div class="result-value">+5.6pts</div>
                <div class="result-label">算数の成績(平均値)</div>
              </div>
              
              <div class="result-item">
                <div class="result-value">+7.0pts</div>
                <div class="result-label">IQスコア(平均値)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section class="team-section">
        <div class="container">
          <div class="team-content">
            <div class="team-text">
              <h2>教育のプロが作る！<br/>だから高品質！</h2>
              <p>
                シンクシンクは、教育コンテンツ制作のプロチーム「ワンダーファイ」によって制作されています。
              </p>
              <p>
                ワンダーファイは、優れた教育コンテンツを生み出すため、各領域のプロフェッショナルによって構成されたチームです。
              </p>
              <p>
                シンクシンクは、5年間にわたる研究授業で子どもたちの反応を徹底的に観察しながら、今も開発・改良が続けられています。
              </p>
            </div>
            
            <div class="team-highlight">
              <div class="team-logo">WonderFi</div>
              <p class="team-description">
                教育コンテンツ制作の<br/>
                プロフェッショナルチーム<br/>
                5年間の研究開発継続中
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section class="schedule-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">スケジュール・料金</h2>
            <p class="section-subtitle">
              6歳から12歳まで、年齢に応じたクラス設定で<br/>
              お子様の発達段階に最適な思考力育成を提供します。<br/>
              スケジュールについては<a href="/schedule" style="color: var(--main-yellow); text-decoration: underline;">授業時間割ページ</a>、料金については<a href="/pricing" style="color: var(--main-yellow); text-decoration: underline;">料金案内ページ</a>をご確認ください。
            </p>
          </div>
          

        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">科学的に効果が実証された思考力育成を始めませんか？</h2>
            <p class="cta-description">
              シンクシンクで楽しく思考センスを育てて、お子様の学習能力とIQを向上させましょう。
              まずは無料体験で効果を実感してください。
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-lightbulb"></i>
                無料体験を申し込む
              </a>
              <a href="/contact" class="btn-secondary">
                <i class="fas fa-phone"></i>
                詳細を問い合わせる
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
)