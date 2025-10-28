import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { BreadcrumbSchema } from '../components/structured-data'

export const schedulePage = () => (
  <>
    <head>
      <title>2025年度スケジュール｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYAプログラミング教室の2025年度開講スケジュール。各コースの授業時間、開講日を確認いただけます。バンコクの日本語対応プログラミング教室。" />
      <meta name="keywords" content="スケジュール,2025年,開講日,時間割,カレンダー,バンコク,プログラミング教室" />
      <meta property="og:title" content="2025年度スケジュール｜KOBEYA" />
      <meta property="og:description" content="2025年度の開講スケジュールを確認いただけます" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/schedule" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/schedule" />
    </head>
    
    <BreadcrumbSchema items={[
      { name: "ホーム", url: "https://kobeya-programming.pages.dev/" },
      { name: "スケジュール", url: "https://kobeya-programming.pages.dev/schedule" }
    ]} />
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD54F;
        --light-yellow: #FFF9E6;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --text-light: #A0AEC0;
        --border-gray: #E2E8F0;
      }

      .schedule-hero {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        padding: 5rem 0 3rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .schedule-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path fill="%23ffffff" fill-opacity="0.1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7L1200,56L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>') no-repeat bottom;
        background-size: cover;
      }

      .schedule-hero-title {
        font-size: 3rem;
        font-weight: 800;
        color: white;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
      }

      .schedule-hero-subtitle {
        font-size: 1.25rem;
        color: white;
        opacity: 0.95;
        position: relative;
        z-index: 1;
      }

      .schedule-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .schedule-notice {
        background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%);
        border-left: 5px solid #ffc107;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        margin-bottom: 3rem;
        box-shadow: 0 4px 15px rgba(255, 193, 7, 0.2);
      }

      .schedule-notice-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #856404;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .schedule-notice-text {
        font-size: 1rem;
        color: #856404;
        line-height: 1.7;
        margin: 0;
      }

      .schedule-intro {
        text-align: center;
        margin-bottom: 3rem;
      }

      .schedule-intro-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .schedule-intro-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
      }

      .schedule-image-container {
        background: var(--base-white);
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        margin-bottom: 4rem;
      }

      .schedule-image {
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      }

      .schedule-legend {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 10px;
      }

      .legend-color {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .legend-color.steam {
        background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
      }

      .legend-color.individual {
        background: linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%);
      }

      .legend-color.creators {
        background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);
      }

      .legend-text {
        font-weight: 600;
        color: var(--text-dark);
      }

      .schedule-info-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .info-card {
        background: var(--base-white);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        border: 2px solid transparent;
        transition: all 0.3s ease;
      }

      .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        border-color: #4facfe;
      }

      .info-card-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .info-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .info-card-text {
        font-size: 1rem;
        color: var(--text-gray);
        line-height: 1.7;
      }

      .info-card-text ul {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
      }

      .info-card-text li {
        margin-bottom: 0.5rem;
      }

      .schedule-cta {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        color: white;
      }

      .schedule-cta-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .schedule-cta-text {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.95;
      }

      .schedule-cta-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .schedule-cta-button {
        display: inline-block;
        background: white;
        color: #4facfe;
        padding: 1.25rem 3rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .schedule-cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      .schedule-cta-button.secondary {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
      }

      @media (max-width: 768px) {
        .schedule-hero-title {
          font-size: 2rem;
        }

        .schedule-container {
          padding: 2rem 1rem;
        }

        .schedule-image-container {
          padding: 1rem;
        }

        .schedule-legend {
          grid-template-columns: 1fr;
        }

        .schedule-cta-buttons {
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>

    <Header />

    {/* Hero Section */}
    <section className="schedule-hero">
      <div className="schedule-hero-title">授業時間割</div>
      <div className="schedule-hero-subtitle">2025年度 Class Schedule</div>
    </section>

    {/* Schedule Content */}
    <div className="schedule-container">
      
      {/* Notice */}
      <div className="schedule-notice">
        <div className="schedule-notice-title">
          <span>⚠️</span>
          <span>重要なお知らせ</span>
        </div>
        <div className="schedule-notice-text">
          ※通常時の時間割です。8月、12月、3月、4月などと特別時間割に変更されます。<br/>
          ※毎週日曜は休校日です。<br/>
          ※2025年4月現在の時間割です。状況により変更される可能性があります。
        </div>
      </div>

      {/* Intro */}
      <div className="schedule-intro">
        <h1 className="schedule-intro-title">2025年度 授業時間割</h1>
        <p className="schedule-intro-text">
          お子様のスケジュールに合わせて、様々な時間帯で授業を開講しています。<br/>
          下記の時間割をご確認の上、ご都合の良い時間帯をお選びください。
        </p>
      </div>

      {/* Schedule Image */}
      <div className="schedule-image-container">
        <img 
          src="https://page.gensparksite.com/v1/base64_upload/6c6d0dde8272453b9cf70f5d27c27206" 
          alt="2025年度 授業時間割" 
          className="schedule-image"
        />
        
        {/* Legend */}
        <div className="schedule-legend">
          <div className="legend-item">
            <div className="legend-color steam"></div>
            <div className="legend-text">STEAMコース・マイクラッチ</div>
          </div>
          <div className="legend-item">
            <div className="legend-color individual"></div>
            <div className="legend-text">個別指導</div>
          </div>
          <div className="legend-item">
            <div className="legend-color creators"></div>
            <div className="legend-text">クリエイターズ</div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="schedule-info-cards">
        <div className="info-card">
          <div className="info-card-icon">📅</div>
          <div className="info-card-title">開講曜日・時間</div>
          <div className="info-card-text">
            <strong>平日（月〜金）：</strong><br/>
            午前〜夜間まで幅広く開講<br/>
            <br/>
            <strong>土曜日：</strong><br/>
            午前〜夕方まで開講<br/>
            <br/>
            <strong>日曜日：</strong><br/>
            休校日
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">⏰</div>
          <div className="info-card-title">授業時間</div>
          <div className="info-card-text">
            <ul>
              <li><strong>STEAMコース・マイクラッチ：</strong>60分</li>
              <li><strong>個別指導：</strong>60〜90分</li>
              <li><strong>クリエイターズ：</strong>90分</li>
            </ul>
            ※コースによって異なります
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">👥</div>
          <div className="info-card-title">クラス編成</div>
          <div className="info-card-text">
            <ul>
              <li><strong>少人数制：</strong>4〜8名</li>
              <li><strong>個別指導：</strong>1〜2名</li>
              <li><strong>年齢別クラス：</strong>発達段階に応じた編成</li>
            </ul>
            一人ひとりに目が届く環境です
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">🔄</div>
          <div className="info-card-title">振替制度</div>
          <div className="info-card-text">
            <strong>事前連絡で振替可能</strong><br/>
            前日までにご連絡いただければ、別の日時に振替できます。<br/>
            <br/>
            <small>※月2回まで / 空席状況による</small>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="schedule-cta">
        <div className="schedule-cta-title">体験レッスンのご予約</div>
        <div className="schedule-cta-text">
          実際の授業を体験してみませんか？<br/>
          お子様に合ったクラスをご提案いたします。
        </div>
        <div className="schedule-cta-buttons">
          <a href="/contact" className="schedule-cta-button">
            無料体験を予約する
          </a>
          <a href="/faq" className="schedule-cta-button secondary">
            よくある質問を見る
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </>
)
