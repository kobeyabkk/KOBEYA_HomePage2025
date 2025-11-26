import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { getAllCoursesSorted } from '../data/courses'

// コースアイコンを生成する関数（文字列またはJSX要素を返す）
const getCourseIcon = (title: string): string | JSX.Element => {
  if (title.includes('STEAM')) return <img src="/images/scratch-cat.png" alt="STEAM" />;
  if (title.includes('マインクラフト')) return <img src="/images/minecraft-character.png" alt="マインクラフト" />;
  if (title.includes('トイ')) return <img src="/images/toypro-logo.png" alt="トイプロ" />;
  if (title.includes('Think')) return 'T';
  if (title.includes('Unity')) return 'U';
  if (title.includes('クリエイター')) return 'C';
  if (title.includes('AI')) return 'A';
  if (title.includes('算数') || title.includes('数学')) return '数';
  return title.charAt(0);
}

export const homePage = () => {
  const courses = getAllCoursesSorted();
  
  return (
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
        overflow: hidden;
        padding: 0.5rem;
      }
      
      .course-icon img {
        background: white;
        border-radius: 0.5rem;
        padding: 0.5rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
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
        font-size: 2.25rem;
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
        h2 { font-size: 1.75rem; }
        h3 { font-size: 1.25rem; }
      }
      
      .hero-section {
        background: linear-gradient(135deg, var(--base-white) 0%, #fffef7 100%);
        padding: 6rem 0 5rem;
        min-height: 70vh;
        display: flex;
        align-items: center;
      }
      
      .hero-logo-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
      }
      
      .hero-logo {
        width: 150px;
        height: 150px;
        animation: fadeInScale 0.8s ease-out;
        background: transparent;
        border-radius: 50%;
        padding: 0.5rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        mix-blend-mode: multiply;
      }
      
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .hero-title-center {
        text-align: center;
        margin-bottom: 3rem;
      }
      
      .hero-title-center h1 {
        font-size: 4rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }
      
      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-gray);
        margin-top: 0.5rem;
      }
      
      .consulting-target {
        background: #f3e8ff;
        border-radius: 0.75rem;
        padding: 0.875rem 1.25rem;
        margin-bottom: 1.25rem;
        border: 2px solid #7c3aed;
        text-align: center;
      }
      
      .consulting-target strong {
        font-size: 1rem;
        color: #7c3aed;
      }
      
      @media (max-width: 768px) {
        .hero-logo {
          width: 100px;
          height: 100px;
          padding: 0.35rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .hero-title-center h1 {
          font-size: 2.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
        }
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
      
      .consulting-card {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
        color: var(--text-dark);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 3px solid #7c3aed;
        height: 100%;
      }
      
      .consulting-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .consulting-text {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 1.25rem;
        color: var(--text-gray);
      }
      
      .consulting-problems {
        background: #f3e8ff;
        border-radius: 0.75rem;
        padding: 1.25rem;
        margin-bottom: 1.25rem;
        border: 1px solid #7c3aed;
      }
      
      .consulting-problems ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .consulting-problems li {
        margin-bottom: 0.65rem;
        padding-left: 1.5rem;
        position: relative;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      
      .consulting-problems li:last-child {
        margin-bottom: 0;
      }
      
      .consulting-problems li:before {
        content: "💡";
        position: absolute;
        left: 0;
        top: 0;
      }
      
      .btn-consulting {
        background: white;
        color: #7c3aed;
        font-weight: 600;
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: block;
        text-align: center;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 2px solid transparent;
      }
      
      .btn-consulting:hover {
        background: #f3e8ff;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }
      
      .btn-consulting-secondary {
        background: white;
        color: #7c3aed;
        font-weight: 600;
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: block;
        text-align: center;
        transition: all 0.3s;
        border: 2px solid #7c3aed;
      }
      
      .btn-consulting-secondary:hover {
        background: #f3e8ff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        {/* Logo and Title Section */}
        <div class="hero-logo-container">
          <img src="https://page.gensparksite.com/v1/base64_upload/12ceead4f987a2269b4144a32d086adb" alt="KOBEYA Logo" class="hero-logo" />
        </div>
        <div class="hero-title-center">
          <h1>AI＆プログラミングのKOBEYA</h1>
          <div class="hero-subtitle">バンコクで学ぶプログラミング教室</div>
        </div>
        
        {/* Content Grid */}
        <div class="grid grid-2" style="align-items: stretch; gap: 3rem;">
          <div>
            <div style="background: white; border-radius: 1rem; padding: 2rem; color: var(--text-dark); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); border: 3px solid #fbbf24; height: 100%;">
              <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">🎓</span>
                お子様向けプログラミング教室
              </h3>
              <div style="background: #fff9e6; border-radius: 0.75rem; padding: 0.875rem 1.25rem; margin-bottom: 1.25rem; border: 2px solid #fbbf24; text-align: center;">
                <strong style="font-size: 1rem; color: #f59e0b;">小学生〜中学生対象・8つの専門コース</strong>
              </div>
              <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.25rem; color: var(--text-gray);">
                お子様の興味と能力に合わせた多彩なコースで、楽しく学んで未来のスキルを身につけましょう！
              </p>
              <div style="background: #fff9e6; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1.25rem; border: 1px solid #fbbf24;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 0.65rem; padding-left: 1.5rem; position: relative; font-size: 0.9rem; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0;">🎮</span>
                    Scratch、マイクラッチでゲーム作り
                  </li>
                  <li style="margin-bottom: 0.65rem; padding-left: 1.5rem; position: relative; font-size: 0.9rem; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0;">🐍</span>
                    PythonでAI・本格プログラミング
                  </li>
                  <li style="margin-bottom: 0.65rem; padding-left: 1.5rem; position: relative; font-size: 0.9rem; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0;">🎨</span>
                    動画編集・デザイン・クリエイティブ
                  </li>
                  <li style="margin-bottom: 0; padding-left: 1.5rem; position: relative; font-size: 0.9rem; line-height: 1.5;">
                    <span style="position: absolute; left: 0; top: 0;">🧠</span>
                    思考力育成・算数数学個別指導
                  </li>
                </ul>
              </div>
              <div style="display: flex; gap: 0.75rem; flex-direction: column; margin-bottom: 1.25rem;">
                <a href="/contact" style="background: white; color: #f59e0b; font-weight: 600; padding: 0.75rem 1.75rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); text-align: center;">
                  🎓 無料体験を申し込む
                </a>
                <a href="#courses" style="background: white; color: #f59e0b; font-weight: 600; padding: 0.75rem 1.75rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all 0.3s; border: 2px solid #fbbf24; text-align: center;">
                  📚 コースを見る
                </a>
              </div>
              <div style="font-size: 0.85rem; color: var(--text-gray); display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
                <div>📍 フジスーパー2号店2階</div>
                <div>🚗 駐車場完備</div>
              </div>
            </div>
          </div>
          <div>
            <div class="consulting-card">
              <h3 class="consulting-title">
                <span style="font-size: 1.5rem;">🤝</span>
                大人向けAIコンサルティング
              </h3>
              <div class="consulting-target">
                <strong>個人事業主、中小企業、教育関係、教育ママなど</strong>
              </div>
              <p class="consulting-text">
                AIがすごい！便利！と耳にしますが、みなさま使いこなせていますか?<br />
                仕事、副業、趣味、教育と様々な分野で利用できます。
              </p>
              <div class="consulting-problems">
                <ul>
                  <li>AIの使い方が分からない</li>
                  <li>AIを業務にどう活かせるか分からない</li>
                  <li>既存のAIを自分の仕事・副業などに取り入れたい</li>
                  <li>カスタムされた学習プリント作成システムを作ってほしい</li>
                </ul>
              </div>
              <div style="display: flex; gap: 0.75rem; flex-direction: column; margin-top: 1.5rem;">
                <a 
                  id="ai-consult-cta" 
                  data-cta="ai-consult" 
                  href="/ai-consult" 
                  class="btn-consulting" 
                  aria-label="AIコンサルの詳細ページへ移動"
                >
                  🤝 AIコンサルはこちら
                </a>
                <a 
                  href="/store" 
                  class="btn-consulting-secondary" 
                  aria-label="販売中のアプリを見る"
                >
                  📱 KOBEYAアプリストアはこちら
                </a>
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
          {courses.map(course => {
            // Check if URL is external
            const isExternal = course.ctaUrl.startsWith('http://') || course.ctaUrl.startsWith('https://');
            return (
              <div class="course-card" key={course.id}>
                <div class="course-icon">{getCourseIcon(course.title)}</div>
                <h3>{course.shortTitle}</h3>
                <p style="color: var(--text-gray); margin-bottom: 1.5rem; flex-grow: 1;">
                  {course.description}
                </p>
                <a 
                  href={course.ctaUrl} 
                  class="btn-primary" 
                  style="width: 100%; text-align: center;"
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {course.ctaText}
                  {isExternal && <i class="fas fa-external-link-alt" style="margin-left: 8px; font-size: 0.85em;"></i>}
                </a>
              </div>
            );
          })}
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
              フジスーパー2号店2階にある小部屋のような教室です。様々な分野の質の高い教材を使ったプログラミング教育を提供しています。授業自体はレッスン動画で進みますが、日本人講師が教室にいるので安心です。

            </p>
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">教室の特徴</h3>
              <ul style="list-style: none; padding: 0; color: var(--text-gray);">
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  フジスーパー2号店2階の便利な立地
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  PC・タブレット完備
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  自分のペースで進められるレッスン
                </li>
                <li style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  オンライン授業で自宅からの受講もOK
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
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-secondary" style="font-size: 1.125rem; padding: 1rem 2.5rem;" target="_blank" rel="noopener noreferrer">💬 LINEで相談する</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
  )
}
