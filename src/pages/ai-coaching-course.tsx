import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aiCoachingCoursePage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-gray: #E2E8F0;
        --hover-gray: #F7FAFC;
        --ai-blue: #1E88E5;
        --ai-purple: #8E24AA;
        --ai-cyan: #00ACC1;
        --ai-green: #43A047;
        --ai-orange: #FF9800;
        --ai-teal: #009688;
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
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 30%, var(--ai-orange) 70%, var(--ai-cyan) 100%);
        color: var(--text-dark);
        text-align: center;
        padding: 120px 0;
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
        background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 25h50v50h-50z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E") repeat;
      }

      .hero-content {
        position: relative;
        z-index: 2;
      }

      .hero-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }

      .hero-icon {
        font-size: 3rem;
        color: var(--text-dark);
        opacity: 0.8;
        animation: float 3s ease-in-out infinite;
      }

      .hero-icon:nth-child(1) { animation-delay: 0s; }
      .hero-icon:nth-child(2) { animation-delay: 0.5s; }
      .hero-icon:nth-child(3) { animation-delay: 1s; }
      .hero-icon:nth-child(4) { animation-delay: 1.5s; }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .hero-subtitle {
        font-size: 1.4rem;
        margin-bottom: 15px;
        font-weight: 600;
        opacity: 0.9;
      }

      .hero-description {
        font-size: 1.1rem;
        margin-bottom: 40px;
        opacity: 0.8;
        line-height: 1.7;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-button {
        display: inline-block;
        background: var(--text-dark);
        color: var(--base-white);
        padding: 20px 45px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(45, 55, 72, 0.3);
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.4);
      }

      /* Overview Section */
      .overview-section {
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

      .highlight-ai-system {
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        padding: 50px;
        border-radius: 25px;
        color: var(--text-dark);
        box-shadow: 0 20px 40px rgba(255, 193, 7, 0.3);
        position: relative;
        overflow: hidden;
      }

      .highlight-ai-system::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: var(--ai-cyan);
        border-radius: 50%;
        opacity: 0.2;
        transform: translate(30px, -30px);
      }

      .ai-system-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
      }

      .ai-system-description {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 25px;
        position: relative;
        z-index: 2;
      }

      .study-partner-link {
        display: inline-block;
        background: var(--text-dark);
        color: var(--base-white);
        padding: 15px 30px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease;
        position: relative;
        z-index: 2;
      }

      .study-partner-link:hover {
        background: var(--ai-blue);
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      /* Features Section */
      .features-section {
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
        font-size: 1.3rem;
        color: var(--text-gray);
        line-height: 1.7;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
      }

      .feature-card {
        background: var(--base-white);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        border: 3px solid transparent;
        position: relative;
        overflow: hidden;
      }

      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        border-color: var(--main-yellow);
      }

      .feature-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--main-yellow), var(--ai-orange));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: var(--text-dark);
        margin: 0 auto 25px;
      }

      .feature-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .feature-description {
        color: var(--text-gray);
        line-height: 1.7;
        font-size: 1.05rem;
      }

      /* Learning Styles */
      .styles-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .styles-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .styles-text h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        line-height: 1.3;
      }

      .styles-text p {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 20px;
      }

      .learning-cycle {
        background: var(--main-yellow);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2);
      }

      .cycle-steps {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .cycle-step {
        background: var(--base-white);
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .cycle-step i {
        font-size: 2rem;
        color: var(--ai-blue);
        margin-bottom: 10px;
      }

      .cycle-step h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 5px;
      }

      .cycle-step p {
        font-size: 0.9rem;
        color: var(--text-gray);
        line-height: 1.5;
      }

      .ai-collaboration {
        background: linear-gradient(135deg, var(--ai-cyan) 0%, var(--ai-blue) 100%);
        color: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        text-align: center;
        margin-top: 40px;
      }

      .ai-collaboration h3 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .ai-collaboration p {
        font-size: 1.1rem;
        line-height: 1.7;
        opacity: 0.9;
      }

      /* Target & Benefits */
      .target-section {
        background: var(--hover-gray);
        padding: 100px 0;
      }

      .target-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
      }

      .target-card {
        background: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        border: 3px solid var(--main-yellow);
        position: relative;
        overflow: hidden;
      }

      .target-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
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

      .target-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 15px;
        background: var(--hover-gray);
        border-radius: 10px;
      }

      .target-item i {
        color: var(--ai-blue);
        margin-right: 15px;
        font-size: 1.2rem;
      }

      .target-item span {
        color: var(--text-gray);
        font-weight: 500;
        line-height: 1.6;
      }

      /* Schedule Section */
      .schedule-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .schedule-card {
        background: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        border: 3px solid var(--main-yellow);
        position: relative;
        overflow: hidden;
        max-width: 600px;
        margin: 60px auto 0;
      }

      .schedule-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
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
        padding: 20px 45px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-primary {
        background: var(--text-dark);
        color: var(--base-white);
        box-shadow: 0 10px 30px rgba(45, 55, 72, 0.2);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.3);
      }

      .btn-secondary {
        background: var(--base-white);
        color: var(--text-dark);
        border: 3px solid var(--text-dark);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

        .hero-icons {
          gap: 15px;
        }

        .hero-icon {
          font-size: 2rem;
        }

        .section {
          padding: 60px 0;
        }

        .overview-grid,
        .styles-content,
        .target-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .features-grid {
          grid-template-columns: 1fr;
          gap: 30px;
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

        .study-partner-big-btn {
          padding: 20px 40px;
          font-size: 1.1rem;
        }

        .spotlight-features {
          flex-direction: column;
          gap: 15px;
        }

        .spotlight-feature {
          justify-content: center;
        }
      }

      /* Study Partner Spotlight Section */
      .study-partner-spotlight {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, var(--ai-orange) 100%);
        padding: 100px 0;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .study-partner-spotlight::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .spotlight-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        margin: 0 auto;
      }

      .spotlight-icon {
        font-size: 4rem;
        color: var(--text-dark);
        margin-bottom: 30px;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }

      .spotlight-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .spotlight-description {
        font-size: 1.3rem;
        color: var(--text-dark);
        margin-bottom: 40px;
        line-height: 1.6;
        opacity: 0.9;
      }

      .spotlight-features {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 50px;
        flex-wrap: wrap;
      }

      .spotlight-feature {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-dark);
        font-weight: 600;
        font-size: 1.1rem;
      }

      .spotlight-feature i {
        font-size: 1.5rem;
        color: var(--ai-blue);
      }

      .study-partner-big-btn {
        display: inline-flex;
        align-items: center;
        gap: 15px;
        background: var(--text-dark);
        color: var(--base-white);
        font-size: 1.25rem;
        font-weight: 700;
        padding: 25px 50px;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(45, 55, 72, 0.3);
        position: relative;
        overflow: hidden;
      }

      .study-partner-big-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.6s;
      }

      .study-partner-big-btn:hover::before {
        left: 100%;
      }

      .study-partner-big-btn:hover {
        background: var(--ai-blue);
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(30, 136, 229, 0.4);
      }

      .study-partner-big-btn i:first-child {
        font-size: 1.5rem;
        animation: bounce 2s infinite;
      }

      .study-partner-big-btn i:last-child {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      .study-partner-big-btn:hover i:last-child {
        transform: translateX(5px);
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-5px); }
        60% { transform: translateY(-3px); }
      }
    `}</style>

    <Header />

    <main>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-icons">
              <div class="hero-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-brain"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
            </div>
            <h1 class="hero-title">AIコーチング・ラボ</h1>
            <p class="hero-subtitle">
              「わかる」から「できる」へ。
            </p>
            <p class="hero-description">
              AIが一人ひとりの学びを導く新しい学習空間。<br/>
              最先端のAI学習支援システムで、生徒の "つまずき" を見つけ、解きほぐし、定着させます。
            </p>
            <a href="#overview" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section class="overview-section" id="overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-text">
              <h2>人とAIが協働する<br/>リアルな学び場</h2>
              <p>
                KOBEYAのAIコーチング・ラボは、生徒一人ひとりの"つまずき"を見つけ、解きほぐし、定着させるための<strong>AI学習支援システム「Study Partner」</strong>を中心に構築されています。
              </p>
              <p>
                このラボでは、AIが先生のように寄り添いながら、宿題や苦手単元を「分解 → 手順化 → 確認 → 記録」のサイクルでサポート。生徒は無理なく自分のペースで理解を深めます。
              </p>
              <p>
                ただのオンライン学習ではなく、「人とAIが協働するリアルな学び場」で、「わかったつもり」を「本当にできる」に変えていきます。
              </p>
            </div>
            
            <div class="highlight-ai-system">
              <h3 class="ai-system-title">
                <i class="fas fa-robot"></i>
                AI学習支援システム「Study Partner」
              </h3>
              <p class="ai-system-description">
                最先端のAI学習技術により、一人ひとりの学習状況を分析し、最適な学習プランを提案。生徒の思考・判断・表現のプロセスをAIが見える化します。
              </p>
              <a href="/study-partner" class="study-partner-link">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">特徴</h2>
            <p class="section-subtitle">
              最先端のAI学習技術と人間の指導を組み合わせた、<br/>
              新しい学習体験を提供します
            </p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-robot"></i>
              </div>
              <h3 class="feature-title">AI学習支援システム「Study Partner」</h3>
              <p class="feature-description">
                個別学習サポートによる、一人ひとりに最適化された学習体験
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3 class="feature-title">Cloud学習ログで成長の可視化</h3>
              <p class="feature-description">
                学習の進捗と成果をリアルタイムで記録・分析し、成長を見える化
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-sync-alt"></i>
              </div>
              <h3 class="feature-title">宿題・テスト対策・復習をAIが自動で最適化</h3>
              <p class="feature-description">
                個人の学習状況に応じて、自動的に最適な学習プランを生成
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="feature-title">先生のコーチング × AIの分析</h3>
              <p class="feature-description">
                人間の温かい指導とAIの精密な分析で、深い理解を実現
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Styles */}
      <section class="styles-section">
        <div class="container">
          <div class="styles-content">
            <div class="styles-text">
              <h2>学びのスタイル</h2>
              <p>
                AIコーチング・ラボでは、個別最適化された学習体験を提供します。AIが学習過程を分析し、最適な指導法を選択します。
              </p>
              <p>
                従来の一方的な授業ではなく、生徒とAIが対話しながら進める双方向型の学習スタイルです。
              </p>
            </div>
            
            <div class="learning-cycle">
              <div class="cycle-steps">
                <div class="cycle-step">
                  <i class="fas fa-search"></i>
                  <h4>分解</h4>
                  <p>問題を細かく分析</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-list-ol"></i>
                  <h4>手順化</h4>
                  <p>解決ステップを明確化</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-check-circle"></i>
                  <h4>確認</h4>
                  <p>理解度をリアルタイム検証</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-save"></i>
                  <h4>記録</h4>
                  <p>学習ログを自動保存</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ai-collaboration">
            <h3>教室でのAIサポート付き自習</h3>
            <p>
              オンラインでの宿題コーチング・AIによる学習記録の自動保存とフィードバック
            </p>
          </div>
        </div>
      </section>

      {/* Target & Benefits */}
      <section class="target-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">対象・おすすめの生徒</h2>
            <p class="section-subtitle">
              一人ひとりに合わせた最先端のAI学習を体験しませんか
            </p>
          </div>
          
          <div class="target-grid">
            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-users"></i>
                対象
              </h3>
              <div class="target-item">
                <i class="fas fa-graduation-cap"></i>
                <span>日本人学校・インター校に通う 中学生（小学生はご相談ください）</span>
              </div>
            </div>

            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-lightbulb"></i>
                こんな生徒におすすめ
              </h3>
              <div class="target-item">
                <i class="fas fa-chart-line"></i>
                <span>勉強はしているのに成果が見えにくい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-target"></i>
                <span>苦手単元を自分で克服したい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-robot"></i>
                <span>AIを使った学びに興味がある</span>
              </div>
              <div class="target-item">
                <i class="fas fa-clock"></i>
                <span>自分のペースで確実に理解を積み上げたい</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section class="schedule-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">クラス詳細</h2>
            <p class="section-subtitle">
              一人ひとりに最適化されたAI学習支援で、<br/>
              「わかる」から「できる」への成長を実現します
            </p>
          </div>
          
          <div class="schedule-card">
            <h3 class="card-title">
              <i class="fas fa-calendar-alt"></i>
              クラススケジュール
            </h3>
            <div class="schedule-item">
              <span class="schedule-label">開催日時</span>
              <span class="schedule-value">土曜日 夕方</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">学習形式</span>
              <span class="schedule-value">教室でのAIサポート付き自習</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">オンライン対応</span>
              <span class="schedule-value">宿題コーチング・学習記録</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">使用システム</span>
              <span class="schedule-value">Study Partner (AI学習支援)</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">対象</span>
              <span class="schedule-value">中学生（小学生要相談）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Study Partner Spotlight Section */}
      <section class="study-partner-spotlight">
        <div class="container">
          <div class="spotlight-content">
            <div class="spotlight-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h2 class="spotlight-title">AI学習支援システム「Study Partner」</h2>
            <p class="spotlight-description">
              最先端のAI技術があなたの学習をサポート。一人ひとりに最適化された学習体験で、「わかる」から「できる」へと導きます。
            </p>
            <div class="spotlight-features">
              <div class="spotlight-feature">
                <i class="fas fa-brain"></i>
                <span>個別最適化学習</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-chart-line"></i>
                <span>リアルタイム分析</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-target"></i>
                <span>弱点克服サポート</span>
              </div>
            </div>
            <a href="/study-partner" class="study-partner-big-btn">
              <i class="fas fa-rocket"></i>
              Study Partnerを今すぐ体験
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">AIと一緒に、"できた！"を積み重ねよう。</h2>
            <p class="cta-description">
              最先端のAI学習支援で、一人ひとりの「わかる」を「できる」に変える新しい学習体験。<br/>
              まずは無料体験で、AIコーチング・ラボの魅力を体感してください。
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-graduation-cap"></i>
                無料体験を申し込む
              </a>
              <a href="/study-partner" class="btn-secondary">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
)