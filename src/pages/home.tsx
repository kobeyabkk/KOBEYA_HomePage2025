import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { getAllCoursesSorted } from '../data/courses'

export const homePage = () => (
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
      
      .btn-primary {
        background: var(--main-yellow);
        color: var(--text-dark);
        font-weight: 600;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        border: 2px solid transparent;
      }
      
      .btn-primary:hover {
        background: var(--accent-yellow);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .btn-secondary {
        background: var(--base-white);
        color: var(--text-dark);
        font-weight: 500;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        border: 2px solid var(--main-yellow);
      }
      
      .btn-secondary:hover {
        background: var(--main-yellow);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .course-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border: 1px solid #f7fafc;
        transition: all 0.3s;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .course-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
        border-color: var(--main-yellow);
      }
      
      .course-icon {
        width: 4rem;
        height: 4rem;
        background: var(--main-yellow);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
      }
      
      .section {
        padding: 5rem 0;
      }
      
      .section-alt {
        background: #fafafa;
        padding: 5rem 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .grid {
        display: grid;
        gap: 2rem;
      }
      
      .grid-2 {
        grid-template-columns: 1fr 1fr;
      }
      
      .grid-3 {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .grid-4 {
        grid-template-columns: repeat(4, 1fr);
      }
      
      @media (max-width: 1024px) {
        .grid-4 { grid-template-columns: repeat(2, 1fr); }
        .grid-3 { grid-template-columns: repeat(2, 1fr); }
        .grid-2 { grid-template-columns: 1fr; }
      }
      
      @media (max-width: 640px) {
        .grid-4,
        .grid-3,
        .grid-2 { 
          grid-template-columns: 1fr; 
        }
        
        .container {
          padding: 0 1rem;
        }
        
        .section,
        .section-alt {
          padding: 3rem 0;
        }
      }
      
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      }
      
      h2 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 640px) {
        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.25rem; }
      }
      
      .hero-section {
        background: linear-gradient(135deg, var(--base-white) 0%, #fffef7 100%);
        padding: 6rem 0 5rem;
        min-height: 70vh;
        display: flex;
        align-items: center;
      }
      
      .stats-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border: 1px solid #f7fafc;
      }
      
      .stats-number {
        font-size: 3rem;
        font-weight: 700;
        color: var(--main-yellow);
        margin-bottom: 0.5rem;
      }
      
      .stats-label {
        color: var(--text-gray);
        font-weight: 500;
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center;">
          <div>
            <h1>バンコクで学ぶ<br />プログラミング教室</h1>
            <p style="font-size: 1.25rem; color: var(--text-gray); margin-bottom: 2.5rem; line-height: 1.7;">
              AI・プログラミングのKOBEYAでは、お子様の興味と能力に合わせた8つの専門コースをご用意。<br />
              楽しく学んで、未来のスキルを身につけましょう！
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/contact" class="btn-primary">無料体験を申し込む</a>
              <a href="#courses" class="btn-secondary">コースを見る</a>
            </div>
            <div style="margin-top: 2.5rem; display: flex; gap: 2rem; flex-wrap: wrap; color: var(--text-light); font-size: 0.9rem;">
              <div>フジスーパー2号店2階</div>
              <div>BTS プロンポン駅徒歩5分</div>
              <div>駐車場完備</div>
            </div>
          </div>
          <div style="text-align: center;">
            <div style="background: var(--main-yellow); border-radius: 1rem; padding: 3rem; color: var(--text-dark); box-shadow: 0 8px 24px rgba(255, 193, 7, 0.3);">
              <h3 style="margin-bottom: 2rem;">🤖 AI & プログラミングのKOBEYA</h3>
              <div style="background: var(--base-white); border-radius: 0.75rem; padding: 2rem;">
                <div style="font-size: 3rem; font-weight: 700; color: var(--main-yellow); margin-bottom: 0.5rem;">8</div>
                <div style="color: var(--text-gray); font-weight: 600; font-size: 1.1rem;">専門コース</div>
                <div style="margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">5歳〜高校生まで対応</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* Courses Section */}
    <section id="courses" class="section-alt">
      <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h2>8つの専門コース</h2>
          <p style="font-size: 1.125rem; color: var(--text-gray); margin-top: 1rem;">
            お子様の年齢・興味・目標に合わせて最適なコースをお選びいただけます
          </p>
        </div>
        
        <div class="grid grid-4">
          ${getAllCoursesSorted().map(course => {
            // コースアイコンを最初の文字から生成
            const getIcon = (title: string): string => {
              if (title.includes('STEAM')) return 'S';
              if (title.includes('マインクラフト')) return 'M';
              if (title.includes('トイ')) return 'P';
              if (title.includes('Think')) return 'T';
              if (title.includes('Unity')) return 'U';
              if (title.includes('クリエイター')) return 'C';
              if (title.includes('AI')) return 'A';
              if (title.includes('算数') || title.includes('数学')) return '数';
              return title.charAt(0);
            };
            
            return `
              <div class="course-card">
                <div class="course-icon">${getIcon(course.title)}</div>
                <h3>${course.shortTitle}</h3>
                <p style="color: var(--text-gray); margin-bottom: 1.5rem; flex-grow: 1;">
                  ${course.description}
                </p>
                <a href="${course.ctaUrl}" class="btn-primary" style="width: 100%; text-align: center;">${course.ctaText}</a>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 4rem;">
          <div>
            <h2>充実した学習環境</h2>
            <p style="color: var(--text-gray); margin-bottom: 2rem; font-size: 1.125rem; line-height: 1.7;">
              フジスーパー2号店2階の明るく清潔な教室で、最新の機材と教材を使用した質の高いプログラミング教育を提供しています。
              経験豊富な講師陣が、お子様一人ひとりの個性と能力に合わせて丁寧に指導いたします。
            </p>
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">教室の特徴</h3>
              <ul style="list-style: none; padding: 0; color: var(--text-gray);">
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  BTS プロンポン駅から徒歩5分の好立地
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  最新のPC・タブレット完備
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  少人数制による丁寧な指導
                </li>
                <li style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  保護者様への定期的な進捗報告
                </li>
              </ul>
            </div>
            <a href="/about" class="btn-secondary">教室についてもっと見る</a>
          </div>
          <div>
            <div style="background: #f8f9fa; border-radius: 1rem; padding: 3rem; text-align: center;">
              <div style="font-size: 4rem; margin-bottom: 1rem;">🏢</div>
              <h3>アクセス良好</h3>
              <p style="color: var(--text-gray); margin-bottom: 2rem;">
                フジスーパー2号店2階<br />
                お買い物ついでに通学可能
              </p>
              <div style="background: var(--main-yellow); border-radius: 0.5rem; padding: 1rem; color: var(--text-dark); font-weight: 600;">
                駐車場完備
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="section-alt">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
          <h2>まずは無料体験から</h2>
          <p style="color: var(--text-gray); font-size: 1.125rem; margin: 1.5rem 0 2.5rem;">
            お子様に最適なコースを見つけるため、まずは無料体験レッスンにお越しください。<br />
            経験豊富な講師が丁寧にご相談をお受けします。
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/contact" class="btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">無料体験を申し込む</a>
            <a href="tel:066-123-4567" class="btn-secondary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">電話で相談する</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)