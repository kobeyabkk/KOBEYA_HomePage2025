export const Footer = () => (
  <>
    <style>{`
      .footer {
        background: #f8f9fa;
        border-top: 1px solid #e2e8f0;
        padding: 3rem 0 1.5rem;
      }
      
      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .footer-content {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 3rem;
        margin-bottom: 2rem;
      }
      
      .footer-section h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }
      
      .footer-section p,
      .footer-section ul {
        color: var(--text-gray);
        line-height: 1.6;
      }
      
      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-section li {
        margin-bottom: 0.5rem;
      }
      
      .footer-section a {
        color: var(--text-gray);
        text-decoration: none;
        transition: color 0.2s;
      }
      
      .footer-section a:hover {
        color: var(--text-dark);
      }
      
      .footer-logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .footer-logo-icon {
        width: 2rem;
        height: 2rem;
        background: var(--main-yellow);
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: var(--text-dark);
      }
      
      .footer-bottom {
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
        text-align: center;
        color: var(--text-light);
        font-size: 0.875rem;
      }
      
      .contact-info {
        background: var(--base-white);
        border-radius: 0.75rem;
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
      }
      
      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        color: var(--text-gray);
      }
      
      .contact-item:last-child {
        margin-bottom: 0;
      }
      
      .contact-icon {
        width: 1.25rem;
        text-align: center;
        color: var(--main-yellow);
      }
      
      @media (max-width: 1024px) {
        .footer-content {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
      }
      
      @media (max-width: 640px) {
        .footer-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .footer-container {
          padding: 0 1rem;
        }
        
        .footer {
          padding: 2rem 0 1rem;
        }
      }
    `}</style>
    
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          {/* 教室情報 */}
          <div class="footer-section">
            <div class="footer-logo">
              <div class="footer-logo-icon">K</div>
              AI & プログラミングのKOBEYA
            </div>
            <p style="margin-bottom: 1.5rem;">
              バンコクの日本人小中学生を対象としたプログラミング教室。
              一人ひとりの個性と能力に合わせた質の高い教育を提供しています。
            </p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <div style="font-weight: 500;">フジスーパー2号店2階</div>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>02-103-6708</div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>kobeyabkk@gmail.com</div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div>
                  <div>平日 9:00-21:00</div>
                  <div>土曜 9:00-18:00</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* コース一覧 */}
          <div class="footer-section">
            <h3>コース</h3>
            <ul>
              <li><a href="/courses/steam">STEAMコース</a></li>
              <li><a href="/courses/minecraft">マイクラッチ</a></li>
              <li><a href="/courses/toyprogramming">トイプロ</a></li>
              <li><a href="/courses/thinkthink">シンクシンク</a></li>
              <li><a href="/courses/unity">Unity</a></li>
              <li><a href="/courses/creators">クリエイターズ</a></li>
              <li><a href="/courses/ai-coaching">AIコーチング・ラボ</a></li>
              <li><a href="/courses/math">算数数学個別指導</a></li>
            </ul>
          </div>
          
          {/* 教室案内 */}
          <div class="footer-section">
            <h3>教室案内</h3>
            <ul>
              <li><a href="/about">教室について</a></li>
              <li><a href="/about#instructor">講師紹介</a></li>
              <li><a href="/about#facility">設備・環境</a></li>
              <li><a href="/about#access">アクセス</a></li>
              <li><a href="/contact">無料体験申込</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </div>
          
          {/* サポート */}
          <div class="footer-section">
            <h3>サポート</h3>
            <ul>
              <li><a href="/contact#faq">よくある質問</a></li>
              <li><a href="/contact#schedule">授業スケジュール</a></li>
              <li><a href="/contact#price">料金案内</a></li>
              <li><a href="/contact#policy">入会案内</a></li>
            </ul>
            
            <div style="margin-top: 1.5rem;">
              <h4 style="font-size: 0.875rem; font-weight: 600; color: var(--text-dark); margin-bottom: 0.75rem;">
                フォロー
              </h4>
              <div style="display: flex; gap: 0.75rem;">
                <a href="https://line.me/R/ti/p/@kobeya" target="_blank" 
                   style="display: inline-block; width: 2rem; height: 2rem; background: var(--main-yellow); 
                          border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; 
                          color: var(--text-dark); text-decoration: none; font-weight: 600;">
                  L
                </a>
                <a href="mailto:kobeyabkk@gmail.com" 
                   style="display: inline-block; width: 2rem; height: 2rem; background: var(--main-yellow); 
                          border-radius: 0.375rem; display: flex; align-items: center; justify-content: center; 
                          color: var(--text-dark); text-decoration: none; font-weight: 600;">
                  @
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 AI & プログラミングのKOBEYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>
)