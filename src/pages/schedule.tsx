import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/schedule.css'

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
