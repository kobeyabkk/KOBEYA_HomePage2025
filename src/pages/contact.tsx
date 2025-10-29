import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/contact.css'

export const contactPage = () => (
  <>
    <head>
      <title>お問い合わせ・無料体験申込｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYA（コベヤ）プログラミング教室へのお問い合わせ・無料体験レッスンのお申し込み。LINE、メール、お電話で受付中。バンコクのフジスーパー2号店2階。お気軽にご相談ください。" />
      <meta name="keywords" content="お問い合わせ,無料体験,申込,相談,LINE,メール,バンコク,プログラミング教室,KOBEYA,コベヤ,プログラミング コベヤ" />
      <meta property="og:title" content="お問い合わせ｜KOBEYA" />
      <meta property="og:description" content="無料体験レッスン受付中。LINEやメールでお気軽にご相談ください。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/contact" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/contact" />
    </head>
    
    
    

<script src="/js/contact-form.js" defer></script>

    <Header />

    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <h1>お問い合わせ</h1>
        <p>
          体験レッスン・入会のご相談・カリキュラムのご質問など、お気軽にどうぞ。<br />
          バンコクの日本人家庭のプログラミング教育をサポートします。
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section class="content-section">
      <div class="container">
        <div class="grid-2">
          {/* 教室情報カード */}
          <div class="info-card">
            <h2 class="card-title">
              <span class="card-icon">📍</span>
              教室情報
            </h2>
            <ul class="info-list">
              <li class="info-item">
                <span class="info-label">LINE</span>
                <span class="info-value">
                  <a href="https://line.me/R/ti/p/@093dagwm" target="_blank" rel="noopener noreferrer">@093dagwm で友だち追加</a>
                </span>
              </li>
              <li class="info-item">
                <span class="info-label">メール</span>
                <span class="info-value">
                  <a href="mailto:kobeyabkk@gmail.com">kobeyabkk@gmail.com</a>
                </span>
              </li>
              <li class="info-item">
                <span class="info-label">電話</span>
                <span class="info-value">
                  02-103-6708
                </span>
              </li>
              <li class="info-item">
                <span class="info-label">所在地</span>
                <span class="info-value">
                  フジスーパー2号店 2階<br />
                  BTS プロンポン駅から徒歩5分
                </span>
              </li>
              <li class="info-item">
                <span class="info-label">受付時間</span>
                <span class="info-value">
                  平日 9:00-21:00<br />
                  土曜 9:00-18:00
                </span>
              </li>
            </ul>

            <div class="map-container">
              <iframe
                title="KOBEYA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5920567890875!2d100.56944!3d13.730934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269b1d89f%3A0x9e5e1c6e6c5e5c5e!2sFuji%20Super%202!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                loading="lazy"
                allowfullscreen="true"
              />
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div class="form-card">
            <h2 class="card-title">
              <span class="card-icon">✉️</span>
              お問い合わせフォーム
            </h2>
            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">
                  お名前 <span style="color: #e53e3e;">*</span>
                </label>
                <input
                  id="contact-name"
                  class="form-input"
                  type="text"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">
                  メールアドレス <span style="color: #e53e3e;">*</span>
                </label>
                <input
                  id="contact-email"
                  class="form-input"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-phone">
                  電話番号
                </label>
                <input
                  id="contact-phone"
                  class="form-input"
                  type="tel"
                  placeholder="02-123-4567"
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">
                  お問い合わせ内容 <span style="color: #e53e3e;">*</span>
                </label>
                <textarea
                  id="contact-message"
                  class="form-textarea"
                  placeholder="体験レッスンのご希望、コースについてのご質問など、お気軽にご記入ください。"
                  required
                />
              </div>
              <div id="status-message" style="margin-bottom: 1rem; padding: 1rem; border-radius: 0.5rem; display: none;"></div>
              <button type="submit" id="submit-btn" class="btn-submit">
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-title">まずは無料体験から！</h2>
        <p class="cta-text">
          実際の授業を体験して、お子様に合ったコースを見つけましょう。<br />
          オンラインでの体験も可能です。
        </p>
        <div class="cta-buttons">
          <a href="https://line.me/R/ti/p/@093dagwm" class="btn-cta btn-cta-line" target="_blank" rel="noopener noreferrer">
            💬 LINEで相談
          </a>
          <a href="#contact-form" class="btn-cta btn-cta-form">
            📝 お問い合わせ
          </a>
        </div>
      </div>
    </section>

    <Footer />
    
    <script>{`
      // Smooth scroll to form when clicking お問い合わせ button
      document.addEventListener('DOMContentLoaded', function() {
        const formButtons = document.querySelectorAll('a[href="#contact-form"]');
        formButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const form = document.getElementById('contact-form');
            if (form) {
              form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Focus on first input after scroll
              setTimeout(() => {
                const firstInput = form.querySelector('input');
                if (firstInput) firstInput.focus();
              }, 500);
            }
          });
        });
      });
    `}</script>
  </>
)
