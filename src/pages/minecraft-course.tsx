import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const minecraftCoursePage = () => (
  <>
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --light-yellow: #FFF8DC;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
        --blue-accent: #4299E1;
        --orange-accent: #ED8936;
        --purple-accent: #9F7AEA;
      }
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Hero Section with Image Background */
      .hero-section {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.9) 0%, rgba(255, 215, 0, 0.8) 100%),
                    url('/images/IMG_1315.JPG') center/cover;
        padding: 8rem 0 6rem;
        color: var(--text-dark);
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/micraking_kimes_smallsize.png') no-repeat;
        background-size: 150px;
        background-position: top right 2rem;
        opacity: 0.3;
        z-index: 1;
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
      }
      
      .hero-title {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        background: linear-gradient(45deg, var(--text-dark), var(--blue-accent));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: var(--text-gray);
        font-weight: 500;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
      }
      
      .hero-description {
        font-size: 1.2rem;
        line-height: 1.8;
        color: var(--text-dark);
        margin-bottom: 3rem;
        background: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 15px;
        backdrop-filter: blur(5px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      }
      
      .hero-cta {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      /* Unique Button Styles */
      .btn-hero-primary {
        background: linear-gradient(45deg, var(--blue-accent), var(--purple-accent));
        color: white;
        font-weight: 700;
        padding: 1.5rem 3rem;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.4s ease;
        border: none;
        box-shadow: 0 8px 25px rgba(66, 153, 225, 0.3);
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .btn-hero-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.5s;
      }

      .btn-hero-primary:hover::before {
        left: 100%;
      }
      
      .btn-hero-primary:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 15px 40px rgba(66, 153, 225, 0.4);
      }

      .btn-hero-secondary {
        background: transparent;
        color: var(--text-dark);
        font-weight: 600;
        padding: 1.5rem 3rem;
        border-radius: 15px;
        text-decoration: none;
        transition: all 0.3s;
        border: 3px solid var(--text-dark);
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
        position: relative;
      }

      .btn-hero-secondary::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid var(--text-dark);
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        transition: right 0.3s;
      }
      
      .btn-hero-secondary:hover {
        background: var(--text-dark);
        color: white;
        transform: translateY(-3px);
      }

      .btn-hero-secondary:hover::after {
        right: 15px;
        border-left-color: white;
      }

      /* Points Section with Cards */
      .points-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, #f8f9fa 0%, var(--light-yellow) 100%);
        position: relative;
      }

      .points-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/MA07.png') no-repeat center;
        background-size: 300px;
        opacity: 0.05;
        z-index: 1;
      }
      
      .section-title {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 4rem;
        color: var(--text-dark);
        position: relative;
        z-index: 2;
      }

      .section-title::after {
        content: '';
        display: block;
        width: 100px;
        height: 4px;
        background: linear-gradient(90deg, var(--main-yellow), var(--orange-accent));
        margin: 1rem auto;
        border-radius: 2px;
      }

      .points-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
        position: relative;
        z-index: 2;
      }

      .point-card {
        background: var(--base-white);
        border-radius: 25px;
        padding: 3rem 2rem;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 193, 7, 0.2);
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
      }

      .point-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, var(--main-yellow) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s;
        z-index: 1;
      }

      .point-card:hover::before {
        opacity: 0.1;
      }
      
      .point-card:hover {
        transform: translateY(-10px) rotate(2deg);
        box-shadow: 0 20px 60px rgba(255, 193, 7, 0.3);
        border-color: var(--main-yellow);
      }

      .point-card:nth-child(2):hover {
        transform: translateY(-10px) rotate(-2deg);
      }

      .point-card * {
        position: relative;
        z-index: 2;
      }

      .point-number {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, var(--orange-accent), var(--main-yellow));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 800;
        color: white;
        margin: 0 auto 2rem;
        box-shadow: 0 8px 25px rgba(237, 137, 54, 0.3);
      }

      .point-card h3 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
      }

      .point-card p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-gray);
      }

      /* Learning Content with Image Layouts */
      .learning-section {
        padding: 6rem 0;
        background: var(--base-white);
      }

      .learning-grid {
        display: grid;
        gap: 4rem;
        margin-top: 4rem;
      }

      .learning-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        padding: 3rem;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(255, 248, 220, 0.5) 0%, rgba(248, 249, 250, 0.5) 100%);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }

      .learning-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      }

      .learning-item:nth-child(even) {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%);
      }

      .learning-item:nth-child(even) .learning-content {
        order: 2;
      }

      .learning-item:nth-child(even) .learning-image {
        order: 1;
      }

      .learning-image {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      }

      .learning-image img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        transition: transform 0.3s ease;
      }

      .learning-item:hover .learning-image img {
        transform: scale(1.05);
      }

      .learning-content h3 {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
        position: relative;
      }

      .learning-content h3::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 40px;
        background: linear-gradient(135deg, var(--main-yellow), var(--orange-accent));
        border-radius: 3px;
      }

      .learning-content p {
        font-size: 1.2rem;
        line-height: 1.8;
        color: var(--text-gray);
        margin-bottom: 1.5rem;
      }

      .learning-features {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .feature-tag {
        background: linear-gradient(45deg, var(--blue-accent), var(--purple-accent));
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
      }

      /* Info Section */
      .info-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, var(--text-dark) 0%, #4A5568 100%);
        color: white;
        position: relative;
        overflow: hidden;
      }

      .info-section::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -20%;
        width: 40%;
        height: 200%;
        background: radial-gradient(ellipse, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
        z-index: 1;
      }

      .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        position: relative;
        z-index: 2;
      }

      .info-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 3rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }

      .info-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      }

      /* CTA Section */
      .cta-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .cta-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/MF10program.png') no-repeat center;
        background-size: 400px;
        opacity: 0.1;
        z-index: 1;
      }

      .cta-content {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
      }

      .cta-title {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 2rem;
        color: var(--text-dark);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      }

      .cta-description {
        font-size: 1.3rem;
        margin-bottom: 3rem;
        line-height: 1.8;
        color: var(--text-dark);
        background: rgba(255, 255, 255, 0.2);
        padding: 2rem;
        border-radius: 15px;
        backdrop-filter: blur(5px);
      }

      .cta-buttons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 3rem;
      }

      .btn-cta-primary {
        background: var(--text-dark);
        color: white;
        font-weight: 700;
        padding: 1.5rem 3rem;
        border-radius: 15px;
        text-decoration: none;
        transition: all 0.3s;
        box-shadow: 0 8px 25px rgba(45, 55, 72, 0.3);
        position: relative;
        overflow: hidden;
      }

      .btn-cta-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, var(--blue-accent), var(--purple-accent));
        opacity: 0;
        transition: opacity 0.3s;
      }

      .btn-cta-primary:hover::before {
        opacity: 1;
      }

      .btn-cta-primary span {
        position: relative;
        z-index: 2;
      }

      .btn-cta-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.4);
      }

      .contact-info {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      .contact-info p {
        margin: 0.5rem 0;
        font-size: 1.1rem;
        color: var(--text-dark);
        font-weight: 600;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
        }
        
        .section-title {
          font-size: 2.2rem;
        }
        
        .container {
          padding: 0 1rem;
        }
        
        .points-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .learning-item {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .learning-item:nth-child(even) .learning-content,
        .learning-item:nth-child(even) .learning-image {
          order: initial;
        }
        
        .info-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .hero-cta {
          flex-direction: column;
          align-items: center;
        }
        
        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">マイクラッチコース</h1>
          <p className="hero-subtitle">
            大人気のMinecraftでプログラミングを楽しく学習
          </p>
          <div className="hero-description">
            子どもたちに大人気のマインクラフトを使ってプログラミングを学習していくコースです。
            大規模な建物を作ったり、TNTを降らせるミニゲームを制作したり、自分だけのダンジョンを完成させていきます。
            デジタネが独自に開発したソフト「マイクラッチ」を使用し、プログラミングが初めてのお子様でも楽しめます。
          </div>
          <div className="hero-cta">
            <a href="/contact" className="btn-hero-primary">
              <span>無料体験に参加</span>
            </a>
            <a href="#details" className="btn-hero-secondary">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* 3 Points Section */}
    <section className="points-section">
      <div className="container">
        <h2 className="section-title">マイクラッチコース 3つのポイント</h2>
        <div className="points-grid">
          <div className="point-card">
            <div className="point-number">1</div>
            <h3>コンテンツの楽しさ</h3>
            <p>マイクラッチコースのテーマは「楽しく学ぶ」です。子どもたちは好きなことには圧倒的な集中力で取り組むので、他のどんな方法よりも学習効率が上がり、理解が進みます。</p>
          </div>
          <div className="point-card">
            <div className="point-number">2</div>
            <h3>小学1年生から対応！</h3>
            <p>マイクラに興味を持ちはじめる小学校低学年から、中学生までが推奨学年となっています。小学校入学と同時にプログラミング学習がスタートできます。</p>
          </div>
          <div className="point-card">
            <div className="point-number">3</div>
            <h3>コンテストの開催</h3>
            <p>作った作品は、日本全国のマイクラッチ学習者が集うコミュニティに投稿することで、たくさんの仲間たちに見てもらうことができます。プログラミングコンテストも毎年開催しています。</p>
          </div>
          <div className="point-card" style={{gridColumn: '1 / -1', maxWidth: 'none'}}>
            <img 
              src="/images/IMG_1315.JPG" 
              alt="教室での学習風景" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
        </div>
      </div>
    </section>

    {/* Learning Content Section */}
    <section id="details" className="learning-section">
      <div className="container">
        <h2 className="section-title">学習できる内容</h2>
        <div className="learning-grid">
          
          <div className="learning-item">
            <div className="learning-image">
              <img src="/images/MF10program.png" alt="TNT爆発と大規模建築" />
            </div>
            <div className="learning-content">
              <h3>TNT爆発＆大規模建築</h3>
              <p>TNTブロックを配置して爆発させるプログラムから、ピラミッドや城などの大規模建築まで。繰り返し処理や座標の概念を楽しく学びながら、効率的なアルゴリズムを身につけます。</p>
              <div className="learning-features">
                <span className="feature-tag">座標システム</span>
                <span className="feature-tag">繰り返し処理</span>
                <span className="feature-tag">爆発エフェクト</span>
              </div>
            </div>
          </div>

          <div className="learning-item">
            <div className="learning-image">
              <img src="https://page.gensparksite.com/v1/base64_upload/5239a96de027ad60282614bc76f5b170" alt="レッドストーン＆トロッコシステム" />
            </div>
            <div className="learning-content">
              <h3>レッドストーン＆トロッコシステム</h3>
              <p>レッドストーン回路とトロッコを組み合わせた自動輸送システムを構築。論理回路の基礎を学びながら、複雑な機械装置をプログラムで制御する方法を習得します。</p>
              <div className="learning-features">
                <span className="feature-tag">論理回路</span>
                <span className="feature-tag">自動化システム</span>
                <span className="feature-tag">機械制御</span>
              </div>
            </div>
          </div>

          <div className="learning-item">
            <div className="learning-image">
              <img src="https://page.gensparksite.com/v1/base64_upload/bf2cace81276cc0da2c3da10e213e067" alt="アスレチック＆ダンジョン制作" />
            </div>
            <div className="learning-content">
              <h3>アスレチック＆ダンジョン制作</h3>
              <p>ジャンプやパズル要素を含むアスレチックコースの設計から、敵やトラップを配置したオリジナルダンジョンまで。ゲーム制作の基本と条件分岐、ランダム要素を活用したプログラミングを学びます。</p>
              <div className="learning-features">
                <span className="feature-tag">ゲーム設計</span>
                <span className="feature-tag">条件分岐</span>
                <span className="feature-tag">ランダム要素</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Info Section */}
    <section className="info-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>受講情報</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', color: 'white'}}>
              📅 スケジュール・対象年齢
            </h3>
            <div style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              <p><strong>対象年齢</strong>：小学1年生〜中学生</p>
              <p><strong>平日</strong>：火・木 16:00-17:30</p>
              <p><strong>土曜</strong>：10:00-11:30 / 14:00-15:30</p>
              <p><strong>日曜</strong>：13:00-14:30</p>
              <p><strong>授業時間</strong>：90分 / 回</p>
              <p style={{color: 'var(--main-yellow)', fontWeight: '700'}}>※初心者歓迎・マイクラ未経験でもOK</p>
            </div>
          </div>
          <div className="info-card">
            <h3 style={{fontSize: '1.8rem', marginBottom: '2rem', color: 'white'}}>
              💰 料金プラン
            </h3>
            <div style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
              <p><strong>授業料</strong>：お問い合わせください</p>
              <p><strong>教材費</strong>：なし</p>
              <p><strong>定員</strong>：7名 / クラス</p>
              <p style={{color: 'var(--main-yellow)', fontWeight: '700'}}>※無料体験授業実施中</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">マイクラッチ体験会随時開催中！</h2>
          <div className="cta-description">
            ゲーム感覚で楽しく学べるマイクラッチコース。<br />
            お子様の「好き」を「学び」に変えて、プログラミングの世界への第一歩を踏み出しませんか？<br />
            <strong>体験会の日程はお問い合わせください。</strong>
          </div>
          <div className="cta-buttons">
            <a href="/contact" className="btn-cta-primary">
              <span>📅 体験会の日程を問い合わせる</span>
            </a>
            <a href="https://line.me/R/ti/p/@093dagwm" className="btn-cta-primary" target="_blank" rel="noopener noreferrer">
              <span>💬 LINEで相談</span>
            </a>
          </div>
          <div className="contact-info">
            <p>📍 フジスーパー2号店 2階</p>
            <p>✉️ kobeyabkk@gmail.com</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)