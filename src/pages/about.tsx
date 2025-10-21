import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aboutPage = () => (
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
            <div style="width: 120px; height: 120px; background: var(--main-yellow); border-radius: 50%; 
                        display: flex; align-items: center; justify-content: center; font-size: 3rem; 
                        color: var(--text-dark); margin: 0 auto 1.5rem; font-weight: 700;">
              鈴
            </div>
            <h3 style="color: var(--text-dark); margin-bottom: 0.5rem;">鈴木政路（すずき まさみち）</h3>
            <p style="color: var(--text-gray); margin-bottom: 2rem; font-weight: 500;">
              代表・教育者・算数数学指導者
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
              <p style="margin-bottom: 0;">
                Jr.プログラミング検定での高い合格実績（63名合格、1級14名）を誇り、
                「楽しく、しっかり学ぶ」をモットーに子どもたちの創造性と論理的思考力を育成している。
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
            <div style="background: #e2e8f0; border-radius: 1rem; height: 300px; display: flex; 
                        align-items: center; justify-content: center; color: var(--text-light);">
              <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
                <p>Google Maps埋め込み予定地</p>
                <p style="font-size: 0.875rem;">フジスーパー2号店周辺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
