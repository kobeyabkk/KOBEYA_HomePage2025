import { raw } from 'hono/html'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const contactPage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
      }
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .hero-section {
        background: linear-gradient(135deg, var(--base-white) 0%, #fffef7 100%);
        padding: 4rem 0;
        text-align: center;
      }
      
      .hero-section h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }
      
      .hero-section p {
        font-size: 1.25rem;
        color: var(--text-gray);
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.7;
      }
      
      .content-section {
        padding: 4rem 0;
        background: var(--base-white);
      }
      
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }
      
      .info-card, .form-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border: 1px solid #f7fafc;
        transition: all 0.3s;
      }
      
      .info-card:hover, .form-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
        border-color: var(--main-yellow);
      }
      
      .card-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .card-icon {
        width: 2.5rem;
        height: 2.5rem;
        background: var(--main-yellow);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
      }
      
      .info-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .info-item {
        padding: 1rem 0;
        border-bottom: 1px solid #f7fafc;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
      }
      
      .info-item:last-child {
        border-bottom: none;
      }
      
      .info-label {
        font-weight: 600;
        color: var(--text-dark);
        min-width: 100px;
        flex-shrink: 0;
      }
      
      .info-value {
        color: var(--text-gray);
        line-height: 1.6;
      }
      
      .info-value a {
        color: var(--main-yellow);
        text-decoration: none;
        transition: color 0.2s;
      }
      
      .info-value a:hover {
        color: var(--accent-yellow);
        text-decoration: underline;
      }
      
      .map-container {
        margin-top: 2rem;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .map-container iframe {
        width: 100%;
        height: 300px;
        border: none;
        display: block;
      }
      
      .form-group {
        margin-bottom: 1.5rem;
      }
      
      .form-label {
        display: block;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
      }
      
      .form-input,
      .form-textarea {
        width: 100%;
        padding: 0.875rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 0.5rem;
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.2s;
        background: var(--base-white);
      }
      
      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: var(--main-yellow);
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
      }
      
      .form-textarea {
        min-height: 150px;
        resize: vertical;
      }
      
      .btn-submit {
        background: var(--main-yellow);
        color: var(--text-dark);
        font-weight: 600;
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
        width: 100%;
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .btn-submit:hover {
        background: var(--accent-yellow);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
      }
      
      .cta-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
        padding: 4rem 0;
        text-align: center;
      }
      
      .cta-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }
      
      .cta-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .btn-cta {
        background: var(--text-dark);
        color: var(--base-white);
        font-weight: 600;
        padding: 1rem 2.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s;
        display: inline-block;
        box-shadow: 0 4px 12px rgba(45, 55, 72, 0.3);
      }
      
      .btn-cta:hover {
        background: var(--base-white);
        color: var(--text-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(45, 55, 72, 0.4);
      }
      
      @media (max-width: 768px) {
        .grid-2 {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .hero-section h1 {
          font-size: 2.25rem;
        }
        
        .hero-section p {
          font-size: 1.1rem;
        }
        
        .container {
          padding: 0 1rem;
        }
        
        .info-card, .form-card {
          padding: 1.5rem;
        }
        
        .card-title {
          font-size: 1.5rem;
        }
        
        .cta-title {
          font-size: 1.75rem;
        }
        
        .info-item {
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .info-label {
          min-width: auto;
        }
      }

      /* Status message styles */
      #status-message {
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
      }

      #status-message.status-loading {
        display: block !important;
        background: #f0f4f8;
        color: var(--text-gray);
        border: 2px solid #cbd5e0;
      }

      #status-message.status-success {
        display: block !important;
        background: #f0fdf4;
        color: #166534;
        border: 2px solid #86efac;
      }

      #status-message.status-error {
        display: block !important;
        background: #fef2f2;
        color: #991b1b;
        border: 2px solid #fca5a5;
      }

      .btn-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}</style>

{raw(`<script>
      (function() {
        console.log('Contact form script loaded');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initForm);
        } else {
          initForm();
        }
        
        function initForm() {
          const form = document.getElementById('contact-form');
          const submitBtn = document.getElementById('submit-btn');
          const statusMessage = document.getElementById('status-message');
          
          console.log('Form elements:', { form, submitBtn, statusMessage });
          
          if (!form || !submitBtn || !statusMessage) {
            console.error('Required form elements not found');
            return;
          }
          
          form.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            const formData = {
              name: document.getElementById('contact-name').value,
              email: document.getElementById('contact-email').value,
              phone: document.getElementById('contact-phone').value,
              message: document.getElementById('contact-message').value
            };
            
            console.log('Form data:', formData);
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = '送信中...';
            statusMessage.className = 'status-message status-loading';
            statusMessage.textContent = 'メールを送信しています...';
            
            try {
              console.log('Sending request to /api/contact');
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              
              console.log('Response status:', response.status);
              const result = await response.json();
              console.log('Response data:', result);
              
              if (result.success) {
                statusMessage.className = 'status-message status-success';
                statusMessage.textContent = result.message;
                form.reset();
              } else {
                statusMessage.className = 'status-message status-error';
                statusMessage.textContent = result.message;
              }
            } catch (error) {
              console.error('Error submitting form:', error);
              statusMessage.className = 'status-message status-error';
              statusMessage.textContent = 'エラーが発生しました。しばらくしてから再度お試しください。';
            } finally {
              submitBtn.disabled = false;
              submitBtn.textContent = '送信する';
            }
          });
        }
      })();
    </script>`)}

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
                <span class="info-label">電話</span>
                <span class="info-value">
                  <a href="tel:021036708">02-103-6708</a>
                </span>
              </li>
              <li class="info-item">
                <span class="info-label">メール</span>
                <span class="info-value">
                  <a href="mailto:kobeyabkk@gmail.com">kobeyabkk@gmail.com</a>
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
        <a href="tel:021036708" class="btn-cta">
          📞 今すぐ電話で申し込む
        </a>
      </div>
    </section>

    <Footer />
  </>
)
