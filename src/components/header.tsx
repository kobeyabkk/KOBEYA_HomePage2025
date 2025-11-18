export const Header = () => (
  <>
    <style>{`
      .header {
        background: #FFC107;
        border-bottom: 3px solid #F57C00;
        position: sticky;
        top: 0;
        z-index: 50;
        box-shadow: 0 2px 12px rgba(255, 193, 7, 0.3);
        opacity: 1;
      }
      
      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 4rem;
      }
      
      .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .logo-icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 0.2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .logo-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
      
      .nav {
        display: flex;
        gap: 1.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      .nav a {
        color: var(--text-dark);
        text-decoration: none;
        font-weight: 600;
        padding: 0.5rem 0;
        transition: color 0.2s;
        position: relative;
      }
      
      .nav a:hover,
      .nav a.active {
        color: #8B4513;
      }
      
      .nav a:hover::after,
      .nav a.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 3px;
        background: #8B4513;
        border-radius: 2px;
      }
      
      .header-cta {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      
      .btn-line {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-weight: 600;
        font-size: 0.875rem;
        text-decoration: none;
        transition: all 0.2s;
        border: 2px solid #06C755;
        white-space: nowrap;
        background: #06C755;
        color: white;
      }
      
      .btn-line:hover {
        background: #05B04D;
        border-color: #05B04D;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(6, 199, 85, 0.3);
      }
      
      .btn-header {
        background: var(--base-white);
        color: var(--text-dark);
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s;
        border: 2px solid #8B4513;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .btn-header:hover {
        background: #8B4513;
        color: var(--base-white);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
      }
      
      .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-dark);
        cursor: pointer;
      }
      
      .mobile-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #FFC107;
        border-bottom: 3px solid #F57C00;
        padding: 1rem 2rem;
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .mobile-nav.active {
        display: block;
      }
      
      .mobile-nav .nav {
        flex-direction: column;
        gap: 1rem;
      }
      
      .mobile-nav .header-cta {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
      }
      
      .mobile-nav .btn-line {
        width: 100%;
        justify-content: center;
      }
      
      .mobile-nav .btn-header {
        width: 100%;
        text-align: center;
      }
      
      @media (max-width: 768px) {
        .nav,
        .header-cta {
          display: none;
        }
        
        .mobile-menu-btn {
          display: block;
        }
        
        .header-container {
          padding: 0 1rem;
        }
        
        .btn-line {
          font-size: 0.8125rem;
          padding: 0.4rem 0.75rem;
        }
        
        .btn-header {
          font-size: 0.8125rem;
          padding: 0.5rem 1rem;
        }
      }
    `}</style>
    
    <header class="header">
      <div class="header-container">
        <a href="/" class="logo">
          <div class="logo-icon">
            <img src="/images/kobeya-logo.png" alt="KOBEYA Logo" />
          </div>
          AI & プログラミングのKOBEYA
        </a>
        
        <nav class="nav">
          <a href="/">ホーム</a>
          <a href="/#courses">コース</a>
          <a href="/about">教室について</a>
          <a href="/contact">お問い合わせ</a>
        </nav>
        
        <div class="header-cta">
          <a href="https://line.me/R/ti/p/@093dagwm" class="btn-line" target="_blank" rel="noopener noreferrer">
            💬 LINE
          </a>
          <a href="/contact" class="btn-header">無料体験</a>
        </div>
        
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
      </div>
      
      <div id="mobileNav" class="mobile-nav">
        <nav class="nav">
          <a href="/">ホーム</a>
          <a href="/#courses">コース</a>
          <a href="/about">教室について</a>
          <a href="/contact">お問い合わせ</a>
        </nav>
        <div class="header-cta">
          <a href="https://line.me/R/ti/p/@093dagwm" class="btn-line" target="_blank" rel="noopener noreferrer">
            💬 LINEで相談
          </a>
          <a href="/contact" class="btn-header">無料体験</a>
        </div>
      </div>
    </header>
    
    <script>{`
      function toggleMobileMenu() {
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.classList.toggle('active');
      }
    `}</script>
  </>
)