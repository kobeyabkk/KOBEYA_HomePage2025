import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/thinkthink-course.css'

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
              お子様の発達段階に最適な思考力育成を提供します。スケジュール、料金についてはお問い合わせください。
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