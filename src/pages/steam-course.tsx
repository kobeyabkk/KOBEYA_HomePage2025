import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const steamCoursePage = () => (
  <>
    <head>
      <title>STEAMプログラミングコース｜KOBEYA（コベヤ）プログラミング教室</title>
      <meta name="description" content="KOBEYA（コベヤ）のSTEAMプログラミングコース。Science, Technology, Engineering, Art, Mathを統合的に学習。小学生向けScratch入門からゲーム制作まで。バンコクのプログラミング教室。" />
      <meta name="keywords" content="STEAM,Scratch,プログラミング,コベヤ,KOBEYA,小学生,バンコク,プログラミング教室,ゲーム制作" />
      <meta property="og:title" content="STEAMプログラミングコース｜KOBEYA" />
      <meta property="og:description" content="Scratchで楽しく学ぶSTEAMプログラミング" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/steam-course" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/steam-course" />
    </head>
    
    
    <style dangerouslySetInnerHTML={{__html: `
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
      }
      
      .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }
      
      .hero-text h1 {
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
      }
      
      .hero-video {
        text-align: center;
      }
      
      /* === portrait video wrapper (YouTube iframe) === */
      .video-portrait {
        width: 100%;
        max-width: 360px;          /* デザインに応じて 320〜420px で調整可 */
        margin: 0 auto;
        border-radius: 16px;
        overflow: hidden;          /* 角丸内に収める */
        background: #000;          /* 読み込み前の下地 */
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      /* 現代ブラウザ：aspect-ratioで9:16を確保 */
      .video-portrait iframe {
        display: block;
        width: 100%;
        aspect-ratio: 9 / 16;      /* ←コレが縦長表示の肝 */
        height: auto;
        background: #000;
        border: none;
      }

      /* 古いブラウザ向けのフォールバック（padding-topハック）*/
      @supports not (aspect-ratio: 9 / 16) {
        .video-portrait { 
          position: relative; 
          padding-top: 177.78%; 
        }
        .video-portrait iframe {
          position: absolute; 
          top: 0;
          left: 0;
          width: 100%; 
          height: 100%;
        }
      }
      
      .video-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1rem;
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
      
      /* Accordion Styles */
      .accordion {
        margin-bottom: 1rem;
      }
      
      .accordion-header {
        background: var(--main-yellow);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
        cursor: pointer;
        user-select: none;
        transition: all 0.3s;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      
      .accordion-header:hover {
        background: var(--accent-yellow);
        transform: translateY(-2px);
      }
      
      .accordion-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-dark);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .accordion-icon {
        font-size: 1.25rem;
        transition: transform 0.3s;
        color: var(--text-dark);
      }
      
      .accordion.active .accordion-icon {
        transform: rotate(180deg);
      }
      
      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        background: var(--base-white);
        border-radius: 0 0 1rem 1rem;
        margin-top: -1rem;
        padding-top: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
      
      .accordion.active .accordion-content {
        max-height: 2000px;
        transition: max-height 0.5s ease-in;
      }
      
      .accordion-inner {
        padding: 0 2rem 2rem;
        color: var(--text-gray);
        line-height: 1.7;
      }
      
      .lesson-image {
        width: 100%;
        max-width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.5rem;
        margin: 1rem auto;
        display: block;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .course-list-section {
        background: var(--base-white);
        padding: 3rem 0;
        border-top: 3px solid var(--main-yellow);
      }
      
      .course-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }
      
      .course-category-list {
        background: #f8f9fa;
        border-radius: 0.75rem;
        padding: 1.5rem;
        border-left: 4px solid var(--main-yellow);
      }
      
      .course-category-title {
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      
      .course-item {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e9ecef;
        font-size: 0.95rem;
        color: var(--text-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .course-item:last-child {
        border-bottom: none;
      }
      
      .course-badge {
        background: var(--main-yellow);
        color: var(--text-dark);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 600;
      }
      
      @media (max-width: 768px) {
        .hero-content {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .hero-text h1 {
          font-size: 2.5rem;
        }
        .section-title {
          font-size: 2rem;
        }
        .container {
          padding: 0 1rem;
        }
        .video-portrait {
          max-width: 280px; /* モバイルでの縦型動画幅 */
        }
      }
    `}} />
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>STEAMコース</h1>
            <p class="hero-subtitle">
              Science・Technology・Engineering・Art・Mathematics
            </p>
            <p class="hero-description">
              30以上の多彩な講座から選べる総合コース！スクラッチやロブロックスをはじめ、
              プログラミングからデジタルクリエイションまで幅広く学べます。
              授業はレッスン動画で進むので、いわゆる一斉授業と違いスタート時期を選びません。
              初心者から上級者まで、お子様のレベルやペースに合わせて楽しく学習できます。
            </p>
            <div class="hero-cta">
              <a href="/contact" class="btn-primary">無料体験を申し込む</a>
              <a href="#details" class="btn-secondary">詳細を見る</a>
            </div>
          </div>
          <div class="hero-video">
            <h3 class="video-title">スクラッチ初級の制作作品紹介</h3>
            <div class="video-portrait">
              <iframe
                src="https://www.youtube.com/embed/k8Mbo7xSahs"
                title="スクラッチ初級の制作作品紹介"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section class="section">
      <div class="container">
        <h2 class="section-title">STEAMコースの特徴</h2>
        <div class="grid grid-3">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>豊富な講座数</h3>
            <p>30以上の多彩な講座から選択可能。スクラッチからUnity、動画制作まで幅広くカバー</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>レッスン動画式学習</h3>
            <p>スタート時期を選ばず、お子様のペースで学習を進められるレッスン動画システム</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌟</div>
            <h3>個別対応</h3>
            <p>年齢やレベルに合わせたカリキュラムで、一人ひとりに最適化された学習体験</p>
          </div>
        </div>
      </div>
    </section>

    {/* Course Categories Section */}
    <section id="details" class="section-alt">
      <div class="container">
        <h2 class="section-title">主な講座カテゴリー</h2>
        
        {/* Scratch Course Accordion */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🎨 スクラッチ講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="/images/steam-roblox-lesson.jpg" alt="スクラッチ授業風景" class="lesson-image" />
              <p><strong>初心者はまずここからスタート！</strong></p>
              <p>バンコク日本人学校をはじめ、世界で最も多くの教育機関で利用されているプログラミング学習ソフト「スクラッチ」を使った講座です。小学生でも使いやすく、コードを組み立てることはもちろん、イラストを描いたり、音楽や効果音を入れたりすることも簡単にできます。</p>
              <p>KOBEYAでは、レッスン動画を見ながら毎回ゲーム作品を作っていきます。初心者でも1回の授業で1つの作品を完成させられるので、モチベーションを維持して学習を続けることができるのが魅力です。</p>
              
              <h4 style="color: var(--main-yellow); font-weight: 600; margin: 1.5rem 0 1rem;">📚 コース内容</h4>
              <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
                <li><strong>スクラッチ入門（小1〜2向け）</strong>：マウス操作、キーボード入力を簡単なイラストで学習</li>
                <li><strong>スクラッチ初級〜上級</strong>：段階的なスキルアップで最終的にスーパーマリオレベルのゲームを制作</li>
                <li><strong>Jr.プログラミング検定対応</strong>：教室で受験可能な資格取得サポート</li>
              </ul>
              
              <div style="background: #e8f5e8; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
                <p style="margin: 0; font-weight: 500; color: var(--text-dark);">
                  💡 <strong>ポイント</strong>：Jr.プログラミング検定は教室で受験できます！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Roblox Course Accordion */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🎮 ロブロックス講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="/images/steam-scratch-lesson.jpg" alt="ロブロックス授業風景" class="lesson-image" />
              <p><strong>世界で一番遊ばれているゲーム「Roblox」でゲーム制作！</strong></p>
              <p>毎日1億人以上がプレイし、マインクラフト・フォートナイトの約2倍の時間遊ばれている世界最大のゲームプラットフォーム「Roblox」を使ったゲーム制作講座です。Roblox StudioというRoblox専用の開発ソフトを使います。基礎的なプログラミングを学びながらアスレチックゲームなどを作っていきます。</p>
              
              <div class="grid grid-3" style="margin: 1.5rem 0;">
                <div style="background: #fff3cd; padding: 1rem; border-radius: 0.5rem;">
                  <h4 style="color: var(--main-yellow); font-weight: 600; margin-bottom: 0.5rem;">Point1 ゲーム開発体験</h4>
                  <p style="font-size: 0.95rem; margin: 0;">制作から公開まで一通りの流れを学習できます</p>
                </div>
                <div style="background: #d1ecf1; padding: 1rem; border-radius: 0.5rem;">
                  <h4 style="color: #0c5460; font-weight: 600; margin-bottom: 0.5rem;">Point2 初心者も安心</h4>
                  <p style="font-size: 0.95rem; margin: 0;">解説動画と講師サポートで自分のペースで学習</p>
                </div>
                <div style="background: #d4edda; padding: 1rem; border-radius: 0.5rem;">
                  <h4 style="color: #155724; font-weight: 600; margin-bottom: 0.5rem;">Point3 夢も膨らむ</h4>
                  <p style="font-size: 0.95rem; margin: 0;">公開したワールドやアイテムでマネタイズも可能</p>
                </div>
              </div>
              
              <p>講座では、基本操作を学ぶところから丁寧にスタートします。簡単なアスレチックゲームを作り、それを少しずつ改変しながら本格的なゲームの形に近づけていきます。</p>
              <p>Roblox入門は、コードの打ち込みが必要ないゲームを作成するため、やる気次第で小学校中学年の生徒も参加できます。</p>
              
              <div style="background: #f8d7da; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
                <p style="margin: 0; font-weight: 500; color: #721c24;">
                  🎯 <strong>学習内容</strong>：様々なパーツの使用、位置・回転・サイズ設定、イベント追加、コイン収集システム、NPCとの会話システム
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Categories */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🎨 Canva・デザイン講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="https://page.gensparksite.com/v1/base64_upload/6c51801919f9bb2b65172b9f2d2a87ae" alt="Canvaデザイン講座" class="lesson-image" />
              <p>デザインの世界で大きな影響力を持つ<strong>Canva</strong>などを使った講座群です。初心者でも美しいデザインの制作物を作れるようになります。</p>
              <ul style="padding-left: 1.5rem;">
                <li><strong>Canva基礎講座</strong>：美しいデザインの制作方法を基礎から学習</li>
                <li><strong>自分をデザイン講座</strong>：オリジナル作品制作で個性を表現</li>
                <li><strong>デジタルイラスト講座</strong>：LINEスタンプ制作にチャレンジ（MediBang Paint）</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              💻 プログラミング・ゲーム開発講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="https://page.gensparksite.com/v1/base64_upload/a4e97e2df876efdf0abd090a659a7689" alt="プログラミング・ゲーム開発講座" class="lesson-image" />
              <p>本格的なプログラミング言語とゲーム開発を学べる講座群です。</p>
              <ul style="padding-left: 1.5rem;">
                <li><strong>Unity開発</strong>：本格的なゲーム開発エンジンを学習</li>
                <li><strong>はじめてのアプリ開発</strong>：モバイルアプリケーション制作</li>
                <li><strong>スマホアプリ入門</strong></li>
                <li><strong>はじめてのAppSheet</strong></li>
                <li><strong>マインクラフトでプログラミング（Java）</strong>：人気ゲームでプログラミング学習</li>
                <li><strong>マイクラマスター講座</strong></li>
                <li><strong>Blender入門</strong>：3Dモデリング・アニメーション</li>
                <li><strong>メタバース講座</strong>：Cluster、Unity使用</li>
                <li><strong>フォートナイト制作講座</strong>：人気ゲーム内でのクリエイション</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🎬 動画・クリエイティブ講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="https://page.gensparksite.com/v1/base64_upload/3ae91f8e3676947aca640805b530e50b" alt="動画・クリエイティブ講座" class="lesson-image" />
              <p>デジタルクリエイションを楽しみながら学べる講座群です。</p>
              <ul style="padding-left: 1.5rem;">
                <li><strong>動画制作・YouTuber体験</strong>：動画編集とコンテンツ制作</li>
                <li><strong>VFX体験</strong>：映像エフェクトの基礎</li>
                <li><strong>動画編集入門（DaVinci Resolve）</strong>：プロレベルの動画編集</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              📊 ビジネススキル・AI講座
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <img src="https://page.gensparksite.com/v1/base64_upload/1678046f27aea79434630f95bcb0e495" alt="ビジネススキル・AI講座" class="lesson-image" />
              <p>実務で役立つスキルとAI技術を学べる講座群です。</p>
              <ul style="padding-left: 1.5rem;">
                <li><strong>ビジネス入門</strong>：Excel、Word、Google Sheets、Google Slide</li>
                <li><strong>PowerApps講座</strong></li>
                <li><strong>Airtable講座</strong></li>
                <li><strong>プロンプト名人AI体験講座</strong></li>
                <li><strong>生成AI体験（ChatGPT）</strong>：AIツールの活用方法</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Course List Section */}
    <section class="course-list-section">
      <div class="container">
        <h2 class="section-title">STEAMコース全講座一覧</h2>
        <div class="course-grid">
          <div class="course-category-list">
            <h3 class="course-category-title">🎨 スクラッチ系講座</h3>
            <div class="course-item">
              <span>スクラッチ入門</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ初級</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ中級</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ上級</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ検定チャレンジ</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ英語でプログラミング</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ マス目でGO!</span>
              <span class="course-badge">短期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ UFOキャッチャー</span>
              <span class="course-badge">短期</span>
            </div>
          </div>

          <div class="course-category-list">
            <h3 class="course-category-title">🎮 ゲーム開発講座</h3>
            <div class="course-item">
              <span>Unity あそびのデザイン講座</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>Unity入門</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>Roblox入門</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>ゲームクリエイター・Roblox制作講座</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>ゲームクリエイター・フォートナイト制作講座</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>マイクラマスター</span>
              <span class="course-badge">長期</span>
            </div>
          </div>

          <div class="course-category-list">
            <h3 class="course-category-title">💻 プログラミング言語</h3>
            <div class="course-item">
              <span>小学生から楽しむRubyプログラミング</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>はじめてのアプリ開発</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スマホアプリ入門</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>マインクラフトでプログラミング Java</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>スクラッチ機械学習AIプログラミング体験</span>
              <span class="course-badge">短期</span>
            </div>
          </div>

          <div class="course-category-list">
            <h3 class="course-category-title">🎬 クリエイティブ系</h3>
            <div class="course-item">
              <span>はじめてのデジタルイラスト講座</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>デザイン入門 Canva</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>体験動画制作（YouTuber体験、VFX）</span>
              <span class="course-badge">短期</span>
            </div>
            <div class="course-item">
              <span>動画編集入門 DaVinci Resolve</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>Blender入門</span>
              <span class="course-badge">中期</span>
            </div>
          </div>

          <div class="course-category-list">
            <h3 class="course-category-title">🌐 メタバース・3D</h3>
            <div class="course-item">
              <span>メタバース初級 Cluster</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>メタバース中級 Unity</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>体験：マイクラアドオン制作</span>
              <span class="course-badge">中期</span>
            </div>
          </div>

          <div class="course-category-list">
            <h3 class="course-category-title">📊 ビジネススキル・AI</h3>
            <div class="course-item">
              <span>ビジネス入門（Excel、Sheets、Slide、Word）</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>プロンプト名人AI体験講座</span>
              <span class="course-badge">短期</span>
            </div>
            <div class="course-item">
              <span>PowerApps講座</span>
              <span class="course-badge">長期</span>
            </div>
            <div class="course-item">
              <span>Airtable講座</span>
              <span class="course-badge">中期</span>
            </div>
            <div class="course-item">
              <span>体験：生成AI（ChatGPT）</span>
              <span class="course-badge">短期</span>
            </div>
          </div>
        </div>
        
        <div style="background: var(--main-yellow); padding: 2rem; border-radius: 1rem; margin-top: 3rem; text-align: center;">
          <h3 style="color: var(--text-dark); margin-bottom: 1rem;">
            📝 受講期間について
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
            <div style="background: var(--base-white); padding: 1rem; border-radius: 0.5rem;">
              <strong style="color: var(--text-dark);">長期講座</strong><br />
              <span style="color: var(--text-gray); font-size: 0.9rem;">6ヶ月〜1年程度</span>
            </div>
            <div style="background: var(--base-white); padding: 1rem; border-radius: 0.5rem;">
              <strong style="color: var(--text-dark);">中期講座</strong><br />
              <span style="color: var(--text-gray); font-size: 0.9rem;">2〜6ヶ月程度</span>
            </div>
            <div style="background: var(--base-white); padding: 1rem; border-radius: 0.5rem;">
              <strong style="color: var(--text-dark);">短期講座</strong><br />
              <span style="color: var(--text-gray); font-size: 0.9rem;">1〜2ヶ月程度</span>
            </div>
          </div>
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
              <p style="color: var(--main-yellow); font-weight: 600;">※スタート時期自由（レッスン動画式）</p>
            </div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>料金・対象</h3>
            <div style="text-align: left; margin-top: 1rem;">
              <p><strong>対象年齢</strong>：小学1年生〜高校3年生</p>
              <p><strong>受講形式</strong>：対面・オンライン両対応</p>
              <p><strong>詳細料金</strong>：お問い合わせください</p>
              <p style="color: var(--main-yellow); font-weight: 600;">※無料体験授業実施中</p>
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
            30以上の講座からお子様の興味と年齢に合わせて最適な講座をご提案いたします
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/contact" class="btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">
              無料体験を申し込む
            </a>
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-secondary" style="font-size: 1.125rem; padding: 1rem 2.5rem;" target="_blank" rel="noopener noreferrer">
              💬 LINEで相談
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    
    <script 
      dangerouslySetInnerHTML={{
        __html: `
          console.log('Accordion script loading...');
          
          function toggleAccordion(element) {
            console.log('Accordion clicked:', element);
            
            const isActive = element.classList.contains('active');
            
            // Close all accordions
            const accordions = document.querySelectorAll('.accordion');
            accordions.forEach(function(acc) {
              acc.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
              element.classList.add('active');
              console.log('Accordion opened');
            } else {
              console.log('All accordions closed');
            }
          }
          
          console.log('Accordion script loaded successfully');
        `
      }}
    ></script>
  </>
)