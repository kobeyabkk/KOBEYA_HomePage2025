import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/minecraft-course.css'

export const minecraftCoursePage = () => (
  <>
    <head>
      <title>マインクラフトプログラミングコース｜KOBEYA（コベヤ）プログラミング教室</title>
      <meta name="description" content="KOBEYA（コベヤ）のマイクラッチコース。Minecraftでプログラミングを楽しく学習。小学生に人気のマイクラで論理的思考を育成。バンコクのプログラミング教室。" />
      <meta name="keywords" content="マインクラフト,マイクラ,プログラミング,コベヤ,KOBEYA,小学生,バンコク,プログラミング教室,マイクラッチ" />
      <meta property="og:title" content="マイクラプログラミング｜KOBEYA" />
      <meta property="og:description" content="Minecraftで楽しくプログラミング学習" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/courses/minecraft" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/courses/minecraft" />
    </head>
    
    
    
    
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