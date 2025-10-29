import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { getAllCoursesSorted } from '../data/courses'
import '../styles/home.css'

// コースアイコンを生成する関数
const getCourseIcon = (title: string): string => {
  if (title.includes('STEAM')) return 'S';
  if (title.includes('マインクラフト')) return 'M';
  if (title.includes('トイ')) return 'P';
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
    <head>
   <meta name="google-site-verification" content="adkZhcRqu6LT9OTpDkMRaIlWMZhol-uaYdzy7Cw-9gc" />
      <title>KOBEYA AI＆プログラミング教室｜バンコクで学ぶプログラミング・AI教育</title>
      <meta name="description" content="バンコクのプログラミング教室KOBEYA（コベヤ）。小学生から中学生向けの8つの専門コース。Scratch、Python、マイクラ、AI、Unity、動画編集など。算数・国語プリントも対応。フジスーパー2号店2階、駐車場完備。無料体験実施中。" />
      <meta name="keywords" content="バンコク,プログラミング教室,プログラミング コベヤ,KOBEYA,子ども,小学生,中学生,Scratch,Python,マイクラ,AI,Unity,STEAM教育,習い事,日本語,フジスーパー,算数 プリント,国語 プリント" />
      <meta property="og:title" content="KOBEYA AI＆プログラミング教室｜バンコクで学ぶプログラミング" />
      <meta property="og:description" content="バンコクのプログラミング教室。8つの専門コースで楽しく学べる。無料体験実施中。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/" />
      <meta property="og:image" content="https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="KOBEYA プログラミング教室" />
      <meta name="twitter:description" content="バンコクで学ぶプログラミング教室。8つの専門コース。" />
      <meta name="twitter:image" content="https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/" />
    </head>
    
    
    
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        {/* Logo and Title Section */}
        <div class="hero-logo-container">
          <img src="https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4" alt="KOBEYA Logo" class="hero-logo" />
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
                  href="#" 
                  class="btn-consulting-secondary" 
                  aria-label="販売中のアプリを見る"
                  onclick="alert('実装予定'); return false;"
                >
                  📱 販売中のアプリはこちら（実装予定）
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
