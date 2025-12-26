import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aboutPage = () => (
  <>
    <head>
      <title>教室について｜KOBEYA プログラミング教室 バンコク</title>
      <meta name="description" content="KOBEYA（コベヤ）はバンコクのフジスーパー2号店2階にあるプログラミング教室。日本人講師、PC・タブレット完備、駐車場あり。オンライン授業も対応。自分のペースで楽しく学べる環境を提供。" />
      <meta name="keywords" content="KOBEYA,コベヤ,プログラミング コベヤ,教室紹介,アクセス,フジスーパー,バンコク,日本人講師,オンライン授業,駐車場,設備" />
      <meta property="og:title" content="教室について｜KOBEYA" />
      <meta property="og:description" content="バンコクのプログラミング教室KOBEYA。フジスーパー2号店2階。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeyabkk-homepage.pages.dev/about" />
      <link rel="canonical" href="https://kobeyabkk-homepage.pages.dev/about" />
    </head>
    
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #4A5568;
        --text-light: #718096;
      }
      
      .section {
        padding: 4rem 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .hero-section {
        background: linear-gradient(135deg, var(--base-white) 0%, #fffef7 100%);
        padding: 4rem 0;
        text-align: center;
      }
      
      h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }
      
      h2 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
      }
      
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
      }
      
      @media (max-width: 768px) {
        .grid-2 {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        h1 {
          font-size: 2.25rem;
        }
        
        h2 {
          font-size: 1.75rem;
        }
        
        .container {
          padding: 0 1rem;
        }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <div class="container">
        <h1>教室について</h1>
        <p style="font-size: 1.25rem; color: var(--text-gray); max-width: 600px; margin: 0 auto;">
          バンコクの日本人小中学生のための<br />
          質の高いプログラミング教育を提供しています<br />
          オンラインでの受講もOK!
        </p>
      </div>
    </section>

    {/* Bangkok Learning Map Section */}
    <section id="bangkok-guide" class="section" style="background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #FFF9C4 100%); padding: 3rem 0;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="color: var(--text-dark); margin-bottom: 1rem;">🎉 バンコクに来たばかりの皆様へ 🎉</h2>
          <p style="font-size: 1.2rem; color: var(--text-gray); max-width: 800px; margin: 0 auto; line-height: 1.8;">
            お子様の「やりたい」を応援！バンコクの習い事ガイドをご用意しました。<br />
            日本語サポートがある教室や、KOBEYAの特徴もご紹介しています。
          </p>
        </div>
        
        <div style="background: var(--base-white); border-radius: 1rem; padding: 2rem; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); max-width: 1000px; margin: 0 auto;">
          <img 
            src="/images/welcome/bangkok-learning-map-2025.png" 
            alt="バンコク習い事マップ 2025 - お子様のやりたいを応援！バンコクの習い事ガイド"
            style="max-width: 100%; height: auto; border-radius: 0.75rem; display: block; margin: 0 auto;"
          />
          
          <div style="margin-top: 2rem; padding: 1.5rem; background: #FFF9C4; border-radius: 0.75rem; border-left: 4px solid var(--main-yellow);">
            <p style="color: var(--text-dark); font-weight: 600; margin-bottom: 0.5rem;">✨ KOBEYAの特徴</p>
            <ul style="color: var(--text-gray); line-height: 1.8; padding-left: 1.5rem; margin: 0;">
              <li><strong>PCレンタル無料！</strong> 手ぶらでOK（持ち込みも可）</li>
              <li><strong>ほとんどの授業でオンライン受講も可能</strong></li>
              <li><strong>周辺施設充実</strong> フジスーパー、マッサージ店、飲食店、ラーメン屋が近隣</li>
              <li><strong>柔軟なサポート</strong> 急なお休みでも振替・フレックス対応が可能です</li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
          <p style="color: var(--text-gray); font-size: 0.95rem;">
            円安ですが...タイの物価に合わせて『質』を落とさず運営しています。未来への投資をバンコクで！
          </p>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div>
            <h2>AI & プログラミングのKOBEYA</h2>
            <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.7;">
              2018年にバンコクで開校した、日本人小中学生を対象としたプログラミング教室です。
              「楽しく、しっかり学ぶ」をモットーに、一人ひとりの個性と能力に合わせた指導を行っています。
            </p>
            <p style="color: var(--text-gray); margin-bottom: 2rem; line-height: 1.7;">
              フジスーパー2号店2階という通いやすい立地で、時代にあった最新のトレンドに沿った教材を開発・使用しています。
              経験豊富な日本人講師がお子様の成長をサポートいたします。
            </p>
            
            <div style="background: #f8f9fa; border-radius: 0.75rem; padding: 2rem;">
              <h3 style="color: var(--text-dark); margin-bottom: 1rem;">教室の理念</h3>
              <ul style="color: var(--text-gray); line-height: 1.7; padding-left: 1.5rem;">
                <li>子どもたちが楽しみながら学べる環境づくり</li>
                <li>個々の興味と能力を活かした個別レッスン</li>
                <li>論理的思考力と創造性の育成</li>
                <li>将来に役立つ実践的なスキルの習得</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div style="background: var(--main-yellow); border-radius: 1rem; padding: 2rem; text-align: center;">
              <h3 style="color: var(--text-dark); margin-bottom: 2rem;">教室の実績</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div style="background: var(--base-white); border-radius: 0.5rem; padding: 1.5rem;">
                  <div style="font-size: 2rem; font-weight: 700; color: var(--main-yellow); margin-bottom: 0.5rem;">500+</div>
                  <div style="color: var(--text-gray);">のべ受講生徒数</div>
                </div>
                <div style="background: var(--base-white); border-radius: 0.5rem; padding: 1.5rem;">
                  <div style="font-size: 2rem; font-weight: 700; color: var(--main-yellow); margin-bottom: 0.5rem;">98%+</div>
                  <div style="color: var(--text-gray);">1年以上継続受講</div>
                </div>
                <div style="background: var(--base-white); border-radius: 0.5rem; padding: 1.5rem;">
                  <div style="font-size: 2rem; font-weight: 700; color: var(--main-yellow); margin-bottom: 0.5rem;">7年</div>
                  <div style="color: var(--text-gray);">運営実績</div>
                </div>
                <div style="background: var(--base-white); border-radius: 0.5rem; padding: 1.5rem;">
                  <div style="font-size: 2rem; font-weight: 700; color: var(--main-yellow); margin-bottom: 0.5rem;">8コース</div>
                  <div style="color: var(--text-gray);">多彩なコース</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Instructor Section */}
    <section id="instructor" style="background: #f8f9fa; padding: 4rem 0;">
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 3rem;">講師紹介</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="background: var(--base-white); border-radius: 1rem; padding: 2.5rem; text-align: center;">
            <img 
              src="/images/instructor/suzuki-masamichi.png" 
              alt="鈴木政路 講師" 
              style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; 
                     margin: 0 auto 1.5rem; display: block; border: 4px solid var(--main-yellow); 
                     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" 
            />
            <h3 style="color: var(--text-dark); margin-bottom: 0.5rem;">鈴木政路（すずき まさみち）</h3>
            <p style="color: var(--text-gray); margin-bottom: 2rem; font-weight: 500;">
              AIエンジニア・教育者・算数数学指導者
            </p>
            
            <div style="text-align: left; color: var(--text-gray); line-height: 1.7;">
              <p style="margin-bottom: 1.5rem;">
                1975年宮崎県生まれ。2004年からシンガポールの進学塾で中高生の数学指導を開始し、
                2012年にタイに移住。2018年に「One Step +α」、2023年に「プログラミングのKOBEYA」として
                教室を改名・移転し、現在に至る。
              </p>
              <p style="margin-bottom: 1.5rem;">
                海外での教育経験20年以上。子どもたちが楽しみながら学べる環境作りに力を入れており、
                ゲーム制作やコンテスト参加を通じて実践的なスキルを身につけさせる教育方針。
              </p>
              <p style="margin-bottom: 1.5rem;">
                Jr.プログラミング検定での高い合格実績（63名合格、1級14名）を誇り、
                「楽しく、しっかり学ぶ」をモットーに子どもたちの創造性と論理的思考力を育成している。
              </p>
              <p style="margin-bottom: 0;">
                ChatGPTをはじめとしたAIをこよなく愛し、AIエンジニアとして活動中。さまざまなAIを駆使して多くのシステム、アプリを自分の仕事に落とし込んできたが、一部の販売して欲しいという声に応え、現在はアプリの販売もスタート。特にAIコーチング・ラボの英検対策システムは自信作。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Facility Section */}
    <section id="facility" class="section">
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 3rem;">設備・環境</h2>
        <div class="grid-2">
          <div>
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">充実した学習環境</h3>
            <ul style="color: var(--text-gray); line-height: 1.7; padding-left: 1.5rem; margin-bottom: 2rem;">
              <li>PC・タブレット完備</li>
              <li>高速インターネット環境</li>
              <li>少人数制の落ち着いた教室</li>
              <li>講師との距離が近い学習スペース</li>
              <li>ノートPC、マウス、イヤホンなど持ち込み可</li>
            </ul>
            
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">教材・ソフトウェア</h3>
            <ul style="color: var(--text-gray); line-height: 1.7; padding-left: 1.5rem;">
              <li>Scratch、Roblox Studio</li>
              <li>教育版マインクラフト、マイクラッチ</li>
              <li>Unity、Blender、Canva</li>
              <li>シンクシンク、トイプロ(Python)</li>
              <li>AI学習システム〜KOBEYA Study Partner〜</li>
            </ul>
          </div>
          
          <div>
            <div style="background: #f8f9fa; border-radius: 1rem; padding: 2rem; text-align: center;">
              <div style="font-size: 4rem; margin-bottom: 1rem;">🏢</div>
              <h3>アクセス良好な立地</h3>
              <p style="color: var(--text-gray); margin-bottom: 1.5rem;">
                フジスーパー2号店2階の便利な立地。
                お買い物ついでの送迎も可能です。
              </p>
              <div style="background: var(--main-yellow); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                <div style="font-weight: 600; color: var(--text-dark);">駐車場完備</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Access Section */}
    <section id="access" style="background: #f8f9fa; padding: 4rem 0;">
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 3rem;">アクセス</h2>
        <div class="grid-2">
          <div>
            <h3 style="color: var(--text-dark); margin-bottom: 1.5rem;">教室所在地</h3>
            <div style="background: var(--base-white); border-radius: 1rem; padding: 2rem;">
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">
                  AI & プログラミングのKOBEYA
                </h4>
                <p style="color: var(--text-gray); margin-bottom: 0.5rem;">フジスーパー2号店2階</p>
                <p style="color: var(--text-light); font-size: 0.875rem;">スクンビット・ソイ33/1周辺</p>
              </div>
              
              <div style="border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">

                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <span style="color: var(--main-yellow);">🚗</span>
                  <span style="color: var(--text-gray);">駐車場完備（フジスーパーと共用）</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span style="color: var(--main-yellow);">📞</span>
                  <span style="color: var(--text-gray);">02-103-6708</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div style="border-radius: 1rem; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6061584930835!2d100.56955177694003!3d13.7422780866486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fc39012652b%3A0xadcb95519e7638cf!2z44OX44Ot44Kw44Op44Of44Oz44Kw44GuS09CRVlB!5e0!3m2!1sja!2sth!4v1761020424484!5m2!1sja!2sth" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
