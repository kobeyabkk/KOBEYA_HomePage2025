import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const contactPage = () => (
  <>
    <Header />
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        --border-gray: #E2E8F0;
      }
      
      .contact-section {
        padding: 5rem 0;
      }
      
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-bottom: 5rem;
      }
      
      .contact-info {
        background: #f8f9fa;
        padding: 2.5rem;
        border-radius: 1rem;
        border: 2px solid #e2e8f0;
      }
      
      .contact-info h3 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .contact-info h3 i {
        color: var(--main-yellow);
      }
      
      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: var(--base-white);
        border-radius: 0.5rem;
        border: 1px solid #e2e8f0;
      }
      
      .contact-item i {
        color: var(--main-yellow);
        font-size: 1.2rem;
        width: 24px;
        flex-shrink: 0;
        margin-top: 4px;
      }
      
      .contact-item-content h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 0.25rem;
      }
      
      .contact-item-content p {
        color: var(--text-gray);
        line-height: 1.6;
      }
      
      .contact-item-content a {
        color: var(--main-yellow);
        text-decoration: none;
        font-weight: 500;
      }
      
      .contact-item-content a:hover {
        text-decoration: underline;
      }
      
      .contact-form {
        background: var(--base-white);
        padding: 2.5rem;
        border-radius: 1rem;
        border: 2px solid #e2e8f0;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
      }
      
      .contact-form h3 {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .contact-form h3 i {
        color: var(--main-yellow);
      }
      
      .form-cta-button {
        background: var(--main-yellow);
        color: var(--text-dark);
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-decoration: none;
      }
      
      .form-cta-button:hover {
        background: var(--accent-yellow);
        transform: translateY(-2px);
      }
      
      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .contact-section {
          padding: 2.5rem 0;
        }
        
        .contact-info,
        .contact-form {
          padding: 1.5rem;
        }
      }
    `}</style>

    <section class="contact-section">
      <div class="container">
        <h1 style="text-align: center; font-size: 2.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 1rem;">
          お問い合わせ
        </h1>
        <p style="text-align: center; font-size: 1.2rem; color: var(--text-gray); margin-bottom: 3rem;">
          プログラミング教室へのご質問・お申込みはこちらからお気軽にどうぞ
        </p>

        <div class="contact-grid">
          {/* Contact Information */}
          <div class="contact-info">
            <h3><i class="fas fa-info-circle"></i>教室情報</h3>

            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div class="contact-item-content">
                <h4>住所</h4>
                <p>
                  フジスーパー2号店 2階<br />
                  693 Sukhumvit Road, Wattana,<br />
                  Bangkok 10110, Thailand
                </p>
              </div>
            </div>

            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div class="contact-item-content">
                <h4>電話番号</h4>
                <p><a href="tel:02-103-6708">02-103-6708</a></p>
              </div>
            </div>

            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div class="contact-item-content">
                <h4>メールアドレス</h4>
                <p><a href="mailto:kobeyabkk@gmail.com">kobeyabkk@gmail.com</a></p>
              </div>
            </div>

            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div class="contact-item-content">
                <h4>受付時間</h4>
                <p>
                  平日: 9:00〜21:00<br />
                  土曜: 9:00〜18:00
                </p>
              </div>
            </div>

            <div class="contact-item" style="display: block;">
              <div style="margin-bottom: 12px;">
                <i class="fas fa-share-alt" style="margin-right: 8px;"></i>
                <strong>SNS でもつながりましょう</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 16px;">
                <div style="text-align: center;">
                  <a href="https://line.me/R/ti/p/@kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                    <img src="/images/social/line-qr.png" alt="LINE" 
                         style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid #e2e8f0;" />
                    <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">LINE</div>
                  </a>
                </div>
                <div style="text-align: center;">
                  <a href="https://twitter.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                    <img src="/images/social/twitter-qr.png" alt="Twitter" 
                         style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid #e2e8f0;" />
                    <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Twitter</div>
                  </a>
                </div>
                <div style="text-align: center;">
                  <a href="https://instagram.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                    <img src="/images/social/instagram-qr.png" alt="Instagram" 
                         style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid #e2e8f0;" />
                    <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Instagram</div>
                  </a>
                </div>
                <div style="text-align: center;">
                  <a href="https://facebook.com/kobeya" target="_blank" rel="noopener noreferrer" style="display: block;">
                    <img src="/images/social/facebook-qr.png" alt="Facebook" 
                         style="width: 100%; max-width: 120px; height: auto; border-radius: 8px; border: 2px solid #e2e8f0;" />
                    <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-gray);">Facebook</div>
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 0.875rem; color: var(--text-gray);">
                ※ QRコードをスキャンしてフォローしてください
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div class="contact-form">
            <h3><i class="fas fa-paper-plane"></i>お問い合わせフォーム</h3>
            
            <div style="text-align: center; padding: 2.5rem 1.25rem;">
              <div style="margin-bottom: 2rem;">
                <i class="fas fa-edit" style="font-size: 4rem; color: var(--main-yellow); margin-bottom: 1.5rem;"></i>
                <p style="color: var(--text-gray); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                  体験授業のお申込み、コースに関するご質問など、<br />
                  お気軽にお問い合わせください。<br />
                  以下のボタンからフォームを開きます。
                </p>
              </div>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftpEbrx-DPE1gvzaDzKy46Zsqq5i9FR9LlY4bEjqMy6WAHfw/viewform?usp=dialog" 
                target="_blank"
                rel="noopener noreferrer"
                class="form-cta-button"
                style="max-width: 400px; margin: 0 auto;">
                <i class="fas fa-external-link-alt"></i>
                お問い合わせフォームを開く
              </a>

              <p style="color: var(--text-gray); font-size: 0.9rem; margin-top: 1.5rem;">
                ※ 新しいウィンドウでGoogle フォームが開きます
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
