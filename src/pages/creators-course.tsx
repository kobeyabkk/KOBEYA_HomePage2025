import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/creators-course.css'

export const creatorsCoursePage = () => (
  <>
    

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