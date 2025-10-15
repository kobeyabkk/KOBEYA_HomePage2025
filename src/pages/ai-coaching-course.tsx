export function aiCoachingCoursePage() {
  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AIコーチング・ラボ - AI & プログラミングのKOBEYA</title>
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
          --ai-blue: #1E88E5;
          --ai-purple: #8E24AA;
          --ai-cyan: #00ACC1;
          --ai-green: #43A047;
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
          background: linear-gradient(135deg, var(--ai-blue) 0%, var(--ai-purple) 30%, var(--ai-cyan) 70%, var(--main-yellow) 100%);
          color: var(--base-white);
          text-align: center;
          padding: 100px 0;
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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.1;0.3;0.1"/></circle><circle cx="80" cy="80" r="3" fill="white" opacity="0.1"><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.1;0.4;0.1"/></circle></svg>');
        }

        .hero-content {
          position: relative;
          z-index: 1;
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
          position: relative;
        }

        .overview-features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--ai-blue), var(--ai-purple), var(--ai-cyan));
          border-radius: 16px 16px 0 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .feature-item i {
          color: var(--ai-blue);
          font-size: 1.2rem;
          width: 20px;
        }

        .feature-item span {
          font-weight: 500;
        }

        /* AI Technologies */
        .tech-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .tech-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 3px solid transparent;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-card:nth-child(1) {
          border-color: var(--ai-blue);
        }

        .tech-card:nth-child(2) {
          border-color: var(--ai-purple);
        }

        .tech-card:nth-child(3) {
          border-color: var(--ai-cyan);
        }

        .tech-card:nth-child(4) {
          border-color: var(--ai-green);
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .tech-card:nth-child(1)::before { background: var(--ai-blue); }
        .tech-card:nth-child(2)::before { background: var(--ai-purple); }
        .tech-card:nth-child(3)::before { background: var(--ai-cyan); }
        .tech-card:nth-child(4)::before { background: var(--ai-green); }

        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .tech-card i {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .tech-card:nth-child(1) i { color: var(--ai-blue); }
        .tech-card:nth-child(2) i { color: var(--ai-purple); }
        .tech-card:nth-child(3) i { color: var(--ai-cyan); }
        .tech-card:nth-child(4) i { color: var(--ai-green); }

        .tech-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--text-dark);
        }

        .tech-card p {
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
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--ai-blue), var(--ai-purple), var(--ai-cyan), var(--ai-green));
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
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          margin: 0 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .step-number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          z-index: 2;
          color: var(--base-white);
        }

        .journey-step:nth-child(1) .step-number { background: var(--ai-blue); }
        .journey-step:nth-child(2) .step-number { background: var(--ai-purple); }
        .journey-step:nth-child(3) .step-number { background: var(--ai-cyan); }
        .journey-step:nth-child(4) .step-number { background: var(--ai-green); }

        .step-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .step-description {
          color: var(--text-gray);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .step-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .tool-tag {
          background: var(--ai-blue);
          color: var(--base-white);
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .journey-step:nth-child(2) .tool-tag { background: var(--ai-purple); }
        .journey-step:nth-child(3) .tool-tag { background: var(--ai-cyan); }
        .journey-step:nth-child(4) .tool-tag { background: var(--ai-green); }

        /* Projects & Applications */
        .projects-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--base-white);
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .project-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--base-white);
          font-size: 3rem;
          position: relative;
        }

        .project-card:nth-child(1) .project-image {
          background: linear-gradient(135deg, var(--ai-blue), var(--ai-purple));
        }

        .project-card:nth-child(2) .project-image {
          background: linear-gradient(135deg, var(--ai-purple), var(--ai-cyan));
        }

        .project-card:nth-child(3) .project-image {
          background: linear-gradient(135deg, var(--ai-cyan), var(--ai-green));
        }

        .project-card:nth-child(4) .project-image {
          background: linear-gradient(135deg, var(--ai-green), var(--main-yellow));
        }

        .project-card:nth-child(5) .project-image {
          background: linear-gradient(135deg, var(--main-yellow), var(--ai-blue));
        }

        .project-card:nth-child(6) .project-image {
          background: linear-gradient(135deg, var(--ai-blue), var(--ai-cyan));
        }

        .project-content {
          padding: 24px;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .project-level {
          color: var(--ai-blue);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .project-description {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Benefits & Skills */
        .benefits-section {
          padding: 80px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .benefit-card {
          background: var(--base-white);
          padding: 30px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .benefit-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: var(--base-white);
        }

        .benefit-card:nth-child(1) .benefit-icon {
          background: linear-gradient(135deg, var(--ai-blue), var(--ai-purple));
        }

        .benefit-card:nth-child(2) .benefit-icon {
          background: linear-gradient(135deg, var(--ai-purple), var(--ai-cyan));
        }

        .benefit-card:nth-child(3) .benefit-icon {
          background: linear-gradient(135deg, var(--ai-cyan), var(--ai-green));
        }

        .benefit-card:nth-child(4) .benefit-icon {
          background: linear-gradient(135deg, var(--ai-green), var(--main-yellow));
        }

        .benefit-card:nth-child(5) .benefit-icon {
          background: linear-gradient(135deg, var(--main-yellow), var(--ai-blue));
        }

        .benefit-card:nth-child(6) .benefit-icon {
          background: linear-gradient(135deg, var(--ai-blue), var(--ai-cyan));
        }

        .benefit-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .benefit-card p {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Target & Prerequisites */
        .target-section {
          background: var(--hover-gray);
          padding: 60px 0;
        }

        .target-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .target-card {
          background: var(--base-white);
          padding: 40px;
          border-radius: 16px;
          border: 2px solid var(--border-gray);
        }

        .target-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .target-title i {
          color: var(--ai-blue);
        }

        .target-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          padding: 12px;
          background: var(--hover-gray);
          border-radius: 8px;
        }

        .target-item i {
          color: var(--ai-blue);
          margin-top: 4px;
          width: 16px;
        }

        .target-item span {
          color: var(--text-gray);
          line-height: 1.6;
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
          color: var(--ai-blue);
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
          color: var(--ai-blue) !important;
          font-weight: 700 !important;
          font-size: 1.2rem !important;
        }

        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, var(--ai-blue) 0%, var(--ai-purple) 30%, var(--ai-cyan) 70%, var(--main-yellow) 100%);
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
          .target-grid,
          .info-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .tech-grid {
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

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .benefits-grid {
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
            <div class="hero-content">
              <div class="hero-icon">
                <i class="fas fa-robot"></i>
              </div>
              <h1 class="hero-title">AIコーチング・ラボ</h1>
              <p class="hero-subtitle">
                最先端のAI技術を学び<br>
                未来を創造するAIエンジニアを目指す
              </p>
              <a href="#details" class="cta-button">
                <i class="fas fa-arrow-down"></i>
                コース詳細を見る
              </a>
            </div>
          </div>
        </section>

        <!-- Course Overview -->
        <section class="section" id="details">
          <div class="container">
            <div class="overview-grid">
              <div class="overview-content">
                <h2>AI時代のリーダーを育成</h2>
                <p>
                  AIコーチング・ラボは、人工知能（AI）の基礎から応用まで幅広く学習できる最先端のコースです。機械学習、深層学習、自然言語処理、コンピュータビジョンなど、現代のAI技術の核心を体系的に学びます。
                </p>
                <p>
                  理論だけでなく、PythonとTensorFlowを使った実践的なプロジェクトを通じて、実際にAIアプリケーションを開発する能力を身につけます。将来のAI研究者やエンジニアを目指す方に最適なコースです。
                </p>
              </div>

              <div class="overview-features">
                <div class="feature-item">
                  <i class="fas fa-brain"></i>
                  <span>機械学習・深層学習の基礎</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-code"></i>
                  <span>Python・TensorFlow実習</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-eye"></i>
                  <span>コンピュータビジョン</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-comments"></i>
                  <span>自然言語処理（NLP）</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-project-diagram"></i>
                  <span>実践的AIプロジェクト</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-graduation-cap"></i>
                  <span>研究・論文読解力</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- AI Technologies -->
        <section class="tech-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">学習するAI技術</h2>
            <div class="tech-grid">
              <div class="tech-card">
                <i class="fas fa-chart-line"></i>
                <h3>機械学習</h3>
                <p>教師あり学習、教師なし学習、強化学習の基本概念と、scikit-learnを使った実装技術を習得します。</p>
              </div>

              <div class="tech-card">
                <i class="fas fa-network-wired"></i>
                <h3>深層学習（ディープラーニング）</h3>
                <p>ニューラルネットワークの仕組みから、CNN、RNN、TransformerなどのモデルまでTensorFlowで実装します。</p>
              </div>

              <div class="tech-card">
                <i class="fas fa-camera"></i>
                <h3>コンピュータビジョン</h3>
                <p>画像認識、物体検出、顔認証など、視覚データを処理するAI技術を学習します。</p>
              </div>

              <div class="tech-card">
                <i class="fas fa-language"></i>
                <h3>自然言語処理</h3>
                <p>テキスト分析、翻訳、チャットボットなど、言語を理解するAI技術を開発します。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Learning Journey -->
        <section class="journey-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">学習ロードマップ</h2>
            <div class="journey-timeline">
              <div class="timeline-line"></div>
              
              <div class="journey-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4 class="step-title">AI・機械学習の基礎</h4>
                  <p class="step-description">
                    AIの歴史、種類、応用分野を理解し、機械学習の基本概念（教師あり・なし学習、評価指標など）を学習します。
                  </p>
                  <div class="step-tools">
                    <span class="tool-tag">Python基礎</span>
                    <span class="tool-tag">NumPy</span>
                    <span class="tool-tag">Pandas</span>
                    <span class="tool-tag">Matplotlib</span>
                  </div>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4 class="step-title">機械学習アルゴリズム実装</h4>
                  <p class="step-description">
                    線形回帰、決定木、SVM、クラスタリングなどの代表的なアルゴリズムをscikit-learnで実装し、実データで実験します。
                  </p>
                  <div class="step-tools">
                    <span class="tool-tag">scikit-learn</span>
                    <span class="tool-tag">回帰分析</span>
                    <span class="tool-tag">分類</span>
                    <span class="tool-tag">クラスタリング</span>
                  </div>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4 class="step-title">深層学習・ニューラルネットワーク</h4>
                  <p class="step-description">
                    ニューラルネットワークの仕組みを理解し、TensorFlowを使ってCNN、RNNなどの高度なモデルを構築します。
                  </p>
                  <div class="step-tools">
                    <span class="tool-tag">TensorFlow</span>
                    <span class="tool-tag">Keras</span>
                    <span class="tool-tag">CNN</span>
                    <span class="tool-tag">RNN</span>
                  </div>
                </div>
              </div>

              <div class="journey-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4 class="step-title">専門分野・実践プロジェクト</h4>
                  <p class="step-description">
                    コンピュータビジョンや自然言語処理などの専門分野を選択し、実際のデータを使った本格的なAIプロジェクトを実施します。
                  </p>
                  <div class="step-tools">
                    <span class="tool-tag">OpenCV</span>
                    <span class="tool-tag">NLTK</span>
                    <span class="tool-tag">Transformer</span>
                    <span class="tool-tag">プロジェクト開発</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects & Applications -->
        <section class="projects-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">実践プロジェクト例</h2>
            <div class="projects-grid">
              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-image"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">画像分類AI</h4>
                  <div class="project-level">初中級レベル</div>
                  <p class="project-description">
                    CNNを使って犬・猫の画像を分類するAIモデルを開発。データ収集から学習、評価まで一貫して実施。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-comments"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">感情分析チャットボット</h4>
                  <div class="project-level">中級レベル</div>
                  <p class="project-description">
                    自然言語処理を使って、ユーザーの感情を理解して適切に応答するチャットボットを作成。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">株価予測システム</h4>
                  <div class="project-level">中上級レベル</div>
                  <p class="project-description">
                    時系列データと機械学習を組み合わせて、株価の動向を予測するシステムを構築。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-user-check"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">顔認証システム</h4>
                  <div class="project-level">上級レベル</div>
                  <p class="project-description">
                    コンピュータビジョン技術を使った高精度な顔認証・顔検出システムの開発。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-language"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">多言語翻訳AI</h4>
                  <div class="project-level">上級レベル</div>
                  <p class="project-description">
                    Transformerモデルを使った高精度な機械翻訳システムの構築とファインチューニング。
                  </p>
                </div>
              </div>

              <div class="project-card">
                <div class="project-image">
                  <i class="fas fa-gamepad"></i>
                </div>
                <div class="project-content">
                  <h4 class="project-title">強化学習ゲームAI</h4>
                  <div class="project-level">最上級レベル</div>
                  <p class="project-description">
                    強化学習アルゴリズムでゲームをプレイするAIエージェントを開発。人間を超える戦略を学習。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits & Skills -->
        <section class="benefits-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center;">身につく能力・スキル</h2>
            <div class="benefits-grid">
              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-brain"></i>
                </div>
                <h4>AI・機械学習の理論理解</h4>
                <p>アルゴリズムの数学的背景から実装まで、理論と実践の両面を理解します。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-code"></i>
                </div>
                <h4>Python・AI開発スキル</h4>
                <p>TensorFlow、PyTorchなどのフレームワークを使った実践的な開発能力を習得します。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-chart-bar"></i>
                </div>
                <h4>データ分析・可視化</h4>
                <p>大量のデータから有益な洞察を得て、わかりやすく可視化する技術を身につけます。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <h4>問題解決・論理的思考</h4>
                <p>複雑な問題を分解し、AIで解決するためのアプローチを設計する能力を養います。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-search"></i>
                </div>
                <h4>研究・論文読解力</h4>
                <p>最新のAI研究論文を理解し、新しい技術を自身の研究に応用する力を育てます。</p>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <h4>創造性・イノベーション</h4>
                <p>AIの可能性を活かして、社会課題を解決する革新的なアイデアを生み出す力を培います。</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Target & Prerequisites -->
        <section class="target-section">
          <div class="container">
            <h2 class="section-title" style="text-align: center; color: var(--text-dark);">対象者・受講要件</h2>
            <div class="target-grid">
              <div class="target-card">
                <h3 class="target-title">
                  <i class="fas fa-users"></i>
                  対象者
                </h3>
                <div class="target-item">
                  <i class="fas fa-check"></i>
                  <span>中学3年生〜大学生・大人の方</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-check"></i>
                  <span>AI・機械学習に興味がある方</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-check"></i>
                  <span>将来AI関連の職業を目指す方</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-check"></i>
                  <span>データサイエンティストを目指す方</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-check"></i>
                  <span>IT業界でのキャリアアップを考える方</span>
                </div>
              </div>

              <div class="target-card">
                <h3 class="target-title">
                  <i class="fas fa-graduation-cap"></i>
                  受講要件
                </h3>
                <div class="target-item">
                  <i class="fas fa-laptop"></i>
                  <span>基本的なPC操作ができること</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-calculator"></i>
                  <span>高校数学（数学III程度）の基礎知識</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-code"></i>
                  <span>プログラミング経験（推奨、必須ではない）</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-book"></i>
                  <span>英語の技術文献を読む意欲</span>
                </div>
                <div class="target-item">
                  <i class="fas fa-clock"></i>
                  <span>継続的な学習への取り組み意欲</span>
                </div>
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
                  クラススケジュール
                </h3>
                <div class="info-item">
                  <span>基礎クラス</span>
                  <span>土 15:00-17:30</span>
                </div>
                <div class="info-item">
                  <span>応用クラス</span>
                  <span>日 15:00-17:30</span>
                </div>
                <div class="info-item">
                  <span>研究クラス</span>
                  <span>土 18:00-20:30</span>
                </div>
                <div class="info-item">
                  <span>個別指導</span>
                  <span>月〜金 18:00-21:00</span>
                </div>
                <div class="info-item">
                  <span>授業時間</span>
                  <span>2.5時間 / 回</span>
                </div>
              </div>

              <div class="info-card">
                <h3 class="card-title">
                  <i class="fas fa-tag"></i>
                  料金プラン
                </h3>
                <div class="info-item">
                  <span>入会金</span>
                  <span>10,000 THB</span>
                </div>
                <div class="info-item">
                  <span>基礎クラス（月4回）</span>
                  <span class="price-highlight">6,000 THB</span>
                </div>
                <div class="info-item">
                  <span>応用クラス（月4回）</span>
                  <span class="price-highlight">7,200 THB</span>
                </div>
                <div class="info-item">
                  <span>研究クラス（月4回）</span>
                  <span class="price-highlight">8,400 THB</span>
                </div>
                <div class="info-item">
                  <span>個別指導（1回）</span>
                  <span class="price-highlight">2,500 THB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section">
          <div class="container">
            <div class="cta-content">
              <h2 class="cta-title">AI時代のパイオニアになろう</h2>
              <p class="cta-description">
                AIコーチング・ラボで最先端の人工知能技術を学び、未来を切り拓く力を身につけませんか？理論と実践の両面から学べる本格的なAI教育で、あなたの可能性を最大限に引き出します。
              </p>
              <div class="cta-buttons">
                <a href="/contact" class="cta-primary">
                  <i class="fas fa-robot"></i>
                  無料体験を申し込む
                </a>
                <a href="/contact" class="cta-secondary">
                  <i class="fas fa-phone"></i>
                  詳細を相談する
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `
}