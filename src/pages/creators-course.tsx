import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const creatorsCoursePage = () => (
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
        --creator-purple: #9C27B0;
        --creator-pink: #E91E63;
        --creator-orange: #FF5722;
        --creator-teal: #00BCD4;
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
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--creator-orange) 50%, var(--creator-pink) 100%);
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
        background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 25h50v50h-50z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E") repeat;
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
        color: var(--base-white);
        opacity: 0.9;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
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
        color: var(--base-white);
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--base-white);
        margin-bottom: 15px;
        opacity: 0.95;
      }

      .hero-description {
        font-size: 1.2rem;
        color: var(--base-white);
        margin-bottom: 40px;
        opacity: 0.9;
        line-height: 1.7;
      }

      .cta-button {
        display: inline-block;
        background: var(--base-white);
        color: var(--text-dark);
        padding: 20px 45px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(255, 255, 255, 0.4);
        background: var(--hover-gray);
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

      .highlight-features {
        background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
        padding: 50px;
        border-radius: 25px;
        color: var(--base-white);
        box-shadow: 0 20px 40px rgba(156, 39, 176, 0.2);
      }

      .feature-list {
        list-style: none;
        padding: 0;
      }

      .feature-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 1.1rem;
        font-weight: 500;
      }

      .feature-item i {
        margin-right: 15px;
        font-size: 1.3rem;
        color: var(--main-yellow);
      }

      /* Learning Styles */
      .styles-section {
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

      .styles-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
      }

      .style-card {
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

      .style-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--creator-purple), var(--creator-pink), var(--creator-orange));
      }

      .style-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        border-color: var(--main-yellow);
      }

      .style-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--creator-purple), var(--creator-pink));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: var(--base-white);
        margin: 0 auto 25px;
      }

      .style-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .style-description {
        color: var(--text-gray);
        line-height: 1.7;
        font-size: 1.05rem;
      }

      /* Output Focus */
      .output-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .output-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .output-text h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        line-height: 1.3;
      }

      .output-text p {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 20px;
      }

      .comparison-box {
        background: var(--main-yellow);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2);
      }

      .comparison-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
      }

      .comparison-item:last-child {
        margin-bottom: 0;
      }

      .comparison-item i {
        margin-right: 15px;
        font-size: 1.3rem;
      }

      .input-icon { color: var(--creator-teal); }
      .output-icon { color: var(--creator-pink); }
      .synergy-icon { color: var(--creator-purple); }

      /* Skills Section */
      .skills-section {
        background: linear-gradient(135deg, var(--creator-purple) 0%, var(--creator-pink) 50%, var(--creator-orange) 100%);
        color: var(--base-white);
        padding: 100px 0;
      }

      .skills-content {
        text-align: center;
      }

      .skills-header h2 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 30px;
      }

      .skills-header p {
        font-size: 1.3rem;
        margin-bottom: 60px;
        opacity: 0.9;
        line-height: 1.7;
      }

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 60px;
      }

      .skill-item {
        background: rgba(255, 255, 255, 0.1);
        padding: 40px 30px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }

      .skill-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-5px);
      }

      .skill-icon {
        font-size: 3rem;
        margin-bottom: 20px;
        color: var(--main-yellow);
      }

      .skill-name {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .skill-desc {
        opacity: 0.9;
        line-height: 1.6;
      }

      .benefits-list {
        background: rgba(255, 255, 255, 0.1);
        padding: 50px;
        border-radius: 25px;
        backdrop-filter: blur(10px);
        text-align: left;
        max-width: 800px;
        margin: 0 auto;
      }

      .benefit-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 25px;
        font-size: 1.1rem;
      }

      .benefit-item:last-child {
        margin-bottom: 0;
      }

      .benefit-item i {
        margin-right: 15px;
        margin-top: 2px;
        color: var(--main-yellow);
        font-size: 1.2rem;
      }

      /* Schedule Info */
      .schedule-section {
        background: var(--hover-gray);
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
        background: linear-gradient(90deg, var(--creator-purple), var(--creator-pink), var(--creator-orange));
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
        .output-content {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .styles-grid,
        .skills-grid {
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
                <i class="fas fa-paint-brush"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-video"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-trophy"></i>
              </div>
            </div>
            <h1 class="hero-title">クリエイターズ</h1>
            <p class="hero-subtitle">スクラッチ、マインクラフト、映像作品・・・</p>
            <p class="hero-description">
              オリジナル作品を作ってコンテストに応募しよう！<br/>
              アイデアを形にして、上位入賞を目指すクリエイティブなクラスです。
            </p>
            <a href="#overview" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              コース詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section class="overview-section" id="overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-text">
              <h2>オリジナル作品制作で<br/>コンテスト入賞を目指す</h2>
              <p>
                クリエイターズでは、自分のアイデアを形にしてオリジナル作品を制作し、各種コンテストでの上位入賞を目指します。
              </p>
              <p>
                スクラッチ、ロブロックス、映像制作、YouTuber活動など、あらゆるクリエイティブな挑戦を歓迎します。個人でもチームでも、自分に合ったスタイルで参加できます。
              </p>
            </div>
            
            <div class="highlight-features">
              <ul class="feature-list">
                <li class="feature-item">
                  <i class="fas fa-user"></i>
                  個人制作・チーム制作どちらもOK
                </li>
                <li class="feature-item">
                  <i class="fas fa-clock"></i>
                  毎週参加でなくても大丈夫
                </li>
                <li class="feature-item">
                  <i class="fas fa-laptop"></i>
                  オンライン受講も可能
                </li>
                <li class="feature-item">
                  <i class="fas fa-palette"></i>
                  どんなジャンルでも歓迎
                </li>
                <li class="feature-item">
                  <i class="fas fa-award"></i>
                  コンテスト入賞実績多数
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Styles */}
      <section class="styles-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">選べる学習スタイル</h2>
            <p class="section-subtitle">
              一人ひとりの創作スタイルに合わせて、柔軟な学習環境を提供します
            </p>
          </div>
          
          <div class="styles-grid">
            <div class="style-card">
              <div class="style-icon">
                <i class="fas fa-user"></i>
              </div>
              <h3 class="style-title">個人制作</h3>
              <p class="style-description">
                自分のペースで集中して取り組む。アイデアを深く追求し、こだわりの作品を制作できます。
              </p>
            </div>

            <div class="style-card">
              <div class="style-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="style-title">チーム制作</h3>
              <p class="style-description">
                数名でチームを組んで協力して制作。役割分担により大規模な作品制作が可能になります。
              </p>
            </div>

            <div class="style-card">
              <div class="style-icon">
                <i class="fas fa-calendar-check"></i>
              </div>
              <h3 class="style-title">柔軟な参加</h3>
              <p class="style-description">
                土曜夕方の時間帯で、毎週参加でなくてもOK。オンライン受講も可能で、自分のスケジュールに合わせられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output Focus */}
      <section class="output-section">
        <div class="container">
          <div class="output-content">
            <div class="output-text">
              <h2>アウトプット重視の<br/>実践学習</h2>
              <p>
                KOBEYAの通常授業は知識のインプットが中心ですが、クリエイターズはアウトプットがメインです。
              </p>
              <p>
                学習効果を最大化するインプット×アウトプットの相乗効果で、理解が深まり、新たな興味と創造力が育まれます。
              </p>
            </div>
            
            <div class="comparison-box">
              <div class="comparison-item">
                <i class="fas fa-download input-icon"></i>
                通常授業：知識のインプット
              </div>
              <div class="comparison-item">
                <i class="fas fa-upload output-icon"></i>
                クリエイターズ：作品のアウトプット
              </div>
              <div class="comparison-item">
                <i class="fas fa-sync synergy-icon"></i>
                相乗効果で理解が深まる！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Benefits */}
      <section class="skills-section">
        <div class="container">
          <div class="skills-content">
            <div class="skills-header">
              <h2>目標設定による実践力育成</h2>
              <p>
                コンテスト出品や上位入賞といった明確な目標設定により、<br/>
                創作活動を通じて実践的なスキルが身につきます。
              </p>
            </div>

            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <div class="skill-name">創造力・発想力</div>
                <p class="skill-desc">独自のアイデアを生み出し、形にする力</p>
              </div>

              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <div class="skill-name">問題解決能力</div>
                <p class="skill-desc">制作過程で生じる課題を解決する力</p>
              </div>

              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fas fa-tasks"></i>
                </div>
                <div class="skill-name">プロジェクト完遂力</div>
                <p class="skill-desc">最後まで作品を完成させる責任感</p>
              </div>

              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fas fa-presentation"></i>
                </div>
                <div class="skill-name">プレゼンテーション力</div>
                <p class="skill-desc">作品を魅力的に伝える表現力</p>
              </div>
            </div>

            <div class="benefits-list">
              <div class="benefit-item">
                <i class="fas fa-calendar-alt"></i>
                <span><strong>期限管理能力</strong> - コンテスト締切に向けた計画的な制作進行</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-star"></i>
                <span><strong>品質向上への意識</strong> - より良い作品を目指す向上心</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-check-circle"></i>
                <span><strong>完成までのプロジェクト管理</strong> - 企画から完成まで一貫した管理能力</span>
              </div>
              <div class="benefit-item">
                <i class="fas fa-medal"></i>
                <span><strong>自信と達成感</strong> - 作品完成とコンテスト挑戦による成功体験</span>
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
              オリジナル作品制作に興味がある生徒や、<br/>
              アウトプットの時間を作りたい方には最適のクラスです。
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
              <span class="schedule-label">参加頻度</span>
              <span class="schedule-value">自由選択制</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">受講方法</span>
              <span class="schedule-value">対面・オンライン対応</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">制作スタイル</span>
              <span class="schedule-value">個人・チーム選択可</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">対象ジャンル</span>
              <span class="schedule-value">プログラミング・映像・YouTube等</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">あなたのアイデアを作品にして、コンテストで輝こう！</h2>
            <p class="cta-description">
              創造力を発揮し、オリジナル作品でコンテスト入賞を目指しませんか？<br/>
              まずは無料体験で、クリエイターズの魅力を体感してください。
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-paint-brush"></i>
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