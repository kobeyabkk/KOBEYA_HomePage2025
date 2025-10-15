import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const steamCoursePage = () => (
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
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, #FFE082 100%);
        padding: 6rem 0 4rem;
        color: var(--text-dark);
        position: relative;
        overflow: hidden;
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
      }
      
      .hero-text {
        text-align: left;
      }
      
      .hero-images {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        align-items: center;
      }
      
      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        color: var(--text-gray);
        font-weight: 500;
      }
      
      .hero-description {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-gray);
        margin-bottom: 2rem;
      }
      
      .hero-cta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;
      }
      
      .hero-image {
        border-radius: 1rem;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s;
      }
      
      .hero-image:hover {
        transform: scale(1.05);
      }
      
      .scratch-cat {
        width: 150px;
        height: auto;
        margin: 0 auto;
        display: block;
      }
      
      .classroom-photo {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      
      .btn-primary {
        background: var(--text-dark);
        color: var(--base-white);
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s;
        border: 2px solid var(--text-dark);
        box-shadow: 0 4px 12px rgba(45, 55, 72, 0.3);
      }
      
      .btn-primary:hover {
        background: transparent;
        color: var(--text-dark);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(45, 55, 72, 0.4);
      }
      
      .btn-secondary {
        background: transparent;
        color: var(--text-dark);
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        transition: all 0.3s;
        border: 2px solid var(--text-dark);
      }
      
      .btn-secondary:hover {
        background: var(--text-dark);
        color: var(--base-white);
        transform: translateY(-2px);
      }
      
      .section {
        padding: 5rem 0;
      }
      
      .section-alt {
        background: #fafafa;
        padding: 5rem 0;
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 3rem;
        color: var(--text-dark);
      }
      
      .grid {
        display: grid;
        gap: 2rem;
      }
      
      .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
      .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
      .grid-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
      
      .feature-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #f0f0f0;
        transition: all 0.3s;
      }
      
      .feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
        border-color: var(--main-yellow);
      }
      
      .feature-icon {
        width: 4rem;
        height: 4rem;
        background: var(--main-yellow);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0 auto 1.5rem;
        color: var(--text-dark);
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .course-category {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        border-left: 4px solid var(--main-yellow);
        transition: all 0.3s;
      }
      
      .course-category:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }
      
      .category-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .category-description {
        color: var(--text-gray);
        line-height: 1.7;
      }
      
      .video-section {
        background: var(--main-yellow);
        padding: 4rem 0;
        text-align: center;
      }
      
      .video-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
      }
      
      .video-embed {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .video-embed iframe {
        width: 100%;
        height: 250px;
        border-radius: 0.5rem;
        border: none;
      }
      
      .course-list {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        margin: 2rem 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
      
      .course-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
      }
      
      .course-item {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 0.9rem;
        color: var(--text-gray);
        transition: all 0.2s;
      }
      
      .course-item:hover {
        background: var(--main-yellow);
        color: var(--text-dark);
        transform: translateY(-2px);
      }
      
      @media (max-width: 768px) {
        .hero-content {
          grid-template-columns: 1fr;
          text-align: center;
        }
        .hero-text {
          text-align: center;
        }
        .hero-title { font-size: 2.5rem; }
        .section-title { font-size: 2rem; }
        .container { padding: 0 1rem; }
        .hero-cta { flex-direction: column; align-items: center; }
        .video-container { grid-template-columns: 1fr; }
        .course-grid { grid-template-columns: 1fr; }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">STEAMコース</h1>
            <p class="hero-subtitle">
              Science・Technology・Engineering・Art・Mathematics
            </p>
            <p class="hero-description">
              30以上の多彩な講座から選べる総合コース！スクラッチやロブロックスをはじめ、
              プログラミングからデジタルクリエイションまで幅広く学べます。
              初心者から上級者まで、お子様のレベルに合わせて楽しく学習できます。
            </p>
            <div class="hero-cta">
              <a href="/contact" class="btn-primary">無料体験を申し込む</a>
              <a href="#details" class="btn-secondary">詳細を見る</a>
            </div>
          </div>
          <div class="hero-images">
            <div>
              <img src="/images/scratch-cat.png" 
                   alt="スクラッチキャット" class="hero-image scratch-cat" />
            </div>
            <div>
              <img src="/images/steam-classroom1.png" 
                   alt="教室での授業風景" class="hero-image classroom-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Video Section */}
    <section class="video-section">
      <div class="container">
        <h2 style="color: var(--text-dark); margin-bottom: 1rem;">STEAMコースの授業動画</h2>
        <p style="color: var(--text-gray); margin-bottom: 2rem;">
          実際の授業の様子をご覧ください
        </p>
        <div class="video-container">
          <div class="video-embed">
            <iframe src="https://www.youtube.com/embed/TOinhWWCXVE" 
                    title="STEAM授業動画1" allowfullscreen></iframe>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-gray);">
              スクラッチでゲーム制作
            </p>
          </div>
          <div class="video-embed">
            <iframe src="https://www.youtube.com/embed/k8Mbo7xSahs" 
                    title="STEAM授業動画2" allowfullscreen></iframe>
            <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-gray);">
              プログラミング学習の様子
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Overview Section */}
    <section class="section">
      <div class="container">
        <h2 class="section-title">STEAMコースの特徴</h2>
        <div class="grid grid-3">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>豊富な講座数</h3>
            <p>スクラッチからロブロックス、Canvaまで30以上の多彩な講座から選択可能</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>実践的な学習</h3>
            <p>毎回作品を完成させることでモチベーションを維持し、確実なスキルアップを実現</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌟</div>
            <h3>個別対応</h3>
            <p>年齢やレベルに合わせたカリキュラムで、一人ひとりのペースで学習できます</p>
          </div>
        </div>
      </div>
    </section>

    {/* Course Categories Section */}
    <section id="details" class="section-alt">
      <div class="container">
        <h2 class="section-title">主な講座カテゴリー</h2>
        
        <div class="course-category">
          <h3 class="category-title">
            🎨 スクラッチ講座
          </h3>
          <div class="category-description">
            <p><strong>初心者はまずここからスタート！</strong>バンコク日本人学校をはじめ、世界で最も多くの教育機関で利用されているプログラミング学習ソフト「スクラッチ」を使った講座です。</p>
            <p>小学生でも使いやすく、コードを組み立てることはもちろん、イラストを描いたり、音楽や効果音を入れたりすることも簡単にできます。毎回ゲーム作品を作るので、初心者でも1回の授業で1つの作品を完成でき、モチベーションを維持できます。</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
              <li><strong>スクラッチ入門（小1〜2向け）</strong>：マウス操作、キーボード入力を簡単なイラストで学習</li>
              <li><strong>スクラッチ初級〜上級</strong>：段階的なスキルアップで最終的にスーパーマリオレベルのゲームを制作</li>
              <li><strong>Jr.プログラミング検定対応</strong>：教室で受験可能な資格取得サポート</li>
            </ul>
          </div>
        </div>
        
        <div class="course-category">
          <h3 class="category-title">
            🎮 ロブロックス講座
          </h3>
          <div class="category-description">
            <p><strong>世界で一番遊ばれているゲーム「Roblox」</strong>を使ったゲーム制作講座！マインクラフト・フォートナイトの約2倍の時間遊ばれている人気ゲームです。</p>
            <div class="grid grid-3" style="margin: 1.5rem 0;">
              <div>
                <h4 style="color: var(--main-yellow); font-weight: 600;">Point1 ゲーム開発体験</h4>
                <p style="font-size: 0.95rem;">制作から公開まで一通りの流れを学習</p>
              </div>
              <div>
                <h4 style="color: var(--main-yellow); font-weight: 600;">Point2 初心者も安心</h4>
                <p style="font-size: 0.95rem;">解説動画と講師サポートで自分のペースで学習</p>
              </div>
              <div>
                <h4 style="color: var(--main-yellow); font-weight: 600;">Point3 夢も膨らむ</h4>
                <p style="font-size: 0.95rem;">作品のマネタイズ（収益化）も可能</p>
              </div>
            </div>
            <p>基本操作から始めてアスレチックゲームを制作し、徐々に本格的なゲームに発展させます。小学校中学年からでもやる気次第で参加可能です。</p>
          </div>
        </div>
        
        <div class="course-category">
          <h3 class="category-title">
            🎨 Canva講座
          </h3>
          <div class="category-description">
            <p>デザインの世界で大きな影響力を持つ<strong>Canva</strong>を使った講座群です。初心者でも美しいデザインの制作物を作れるようになります。</p>
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
              <li><strong>Canva基礎講座</strong>：美しいデザインの制作方法を基礎から学習</li>
              <li><strong>自分をデザイン講座</strong>：オリジナル作品制作で個性を表現</li>
              <li><strong>Canvaで作成講座</strong>：実践的なデザインスキルの習得</li>
            </ul>
          </div>
        </div>
        
        <div class="course-category">
          <h3 class="category-title">
            💻 その他のプログラミング講座
          </h3>
          <div class="category-description">
            <div class="course-list">
              <h4 style="color: var(--text-dark); margin-bottom: 1rem;">プログラミング系</h4>
              <div class="course-grid">
                <div class="course-item">小学生から楽しむRuby</div>
                <div class="course-item">はじめてのアプリ開発</div>
                <div class="course-item">Unityあそびのデザイン</div>
                <div class="course-item">マイクラでプログラミング</div>
                <div class="course-item">はじめてのApp Sheet</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="course-category">
          <h3 class="category-title">
            🎬 クリエイティブ系講座
          </h3>
          <div class="category-description">
            <div class="course-list">
              <h4 style="color: var(--text-dark); margin-bottom: 1rem;">デジタルクリエイション</h4>
              <div class="course-grid">
                <div class="course-item">マイクラマスター</div>
                <div class="course-item">フォートナイト</div>
                <div class="course-item">メディバンペイントプロ入門</div>
                <div class="course-item">デジタルイラスト講座</div>
                <div class="course-item">LINEスタンプ制作</div>
                <div class="course-item">映像クリエイター</div>
                <div class="course-item">YouTuber体験</div>
                <div class="course-item">動画制作VFX体験</div>
                <div class="course-item">メタバース初級</div>
                <div class="course-item">動画編集byダヴィンチ</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="course-category">
          <h3 class="category-title">
            📊 Office・Google系講座
          </h3>
          <div class="category-description">
            <div class="course-list">
              <h4 style="color: var(--text-dark); margin-bottom: 1rem;">実務スキル系</h4>
              <div class="course-grid">
                <div class="course-item">はじめてのWord</div>
                <div class="course-item">はじめてのExcel</div>
                <div class="course-item">Google Sheets</div>
                <div class="course-item">Googleスライド</div>
                <div class="course-item">Googleフォーム</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background: var(--main-yellow); padding: 2rem; border-radius: 1rem; margin-top: 2rem; text-align: center;">
          <h3 style="color: var(--text-dark); margin-bottom: 1rem;">
            📞 講座の詳細についてはお問い合わせください
          </h3>
          <p style="color: var(--text-gray); margin-bottom: 0;">
            上記以外にも多数の講座をご用意しており、主に高校生以上向けの講座も充実しています。
          </p>
        </div>
      </div>
    </section>

    {/* Schedule & Price Section */}
    <section class="section">
      <div class="container">
        <h2 class="section-title">受講情報</h2>
        <div class="grid grid-2">
          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3>開講スケジュール</h3>
            <div style="text-align: left; margin-top: 1rem;">
              <p><strong>平日</strong>：16:00-20:00</p>
              <p><strong>土日</strong>：9:00-17:00</p>
              <p><strong>オンライン</strong>：8:00-22:00対応可能</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>料金プラン</h3>
            <div style="text-align: left; margin-top: 1rem;">
              <p><strong>対象年齢</strong>：小学1年生〜高校3年生</p>
              <p><strong>受講形式</strong>：対面・オンライン両対応</p>
              <p><strong>詳細料金</strong>：お問い合わせください</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="section-alt">
      <div class="container">
        <div style="text-align: center; background: var(--main-yellow); padding: 3rem; border-radius: 1rem; box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);">
          <h2 style="margin-bottom: 1rem; color: var(--text-dark);">まずは無料体験から始めましょう</h2>
          <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--text-gray);">
            お子様の興味と年齢に合わせて最適な講座をご提案いたします
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/contact" class="btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              無料体験を申し込む
            </a>
            <a href="tel:066-123-4567" class="btn-secondary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              📞 066-123-4567
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)