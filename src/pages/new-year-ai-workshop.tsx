import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { FloatingCTA } from '../components/floating-cta'

export const newYearAIWorkshopPage = () => {
  return (
    <>
      <style>{`
        :root {
          --main-yellow: #FFC107;
          --accent-yellow: #FFD700;
          --base-white: #FFFFFF;
          --text-dark: #2D3748;
          --text-gray: #4A5568;
        }
        
        .workshop-page {
          font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--text-dark);
          line-height: 1.7;
        }
        
        .workshop-hero {
          background: linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%);
          padding: 4rem 0 3rem;
        }
        
        .workshop-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.3;
        }
        
        .workshop-flyer {
          max-width: 900px;
          margin: 0 auto 3rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .workshop-flyer img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .workshop-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }
        
        .workshop-section {
          margin-bottom: 3rem;
        }
        
        .workshop-section h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid var(--main-yellow);
        }
        
        .workshop-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-dark);
          margin: 1.5rem 0 0.75rem;
        }
        
        .workshop-section p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        
        .workshop-highlight {
          background: #FFF9E6;
          border-left: 4px solid var(--main-yellow);
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0.5rem;
        }
        
        .workshop-list {
          margin: 1rem 0;
        }
        
        .workshop-list li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .workshop-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--main-yellow);
          font-weight: bold;
        }
        
        .workshop-info-box {
          background: #F8F9FA;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }
        
        .workshop-cta {
          background: var(--main-yellow);
          color: var(--text-dark);
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
          margin-top: 2rem;
        }
        
        .workshop-cta:hover {
          background: var(--accent-yellow);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
        }
        
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 1.75rem;
          }
          
          .workshop-content {
            padding: 0 1rem 3rem;
          }
          
          .workshop-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
      
      <Header />
      
      <div class="workshop-page">
        {/* Hero Section */}
        <section class="workshop-hero">
          <div class="container">
            <h1 class="workshop-title">
              新春特別講座<br />
              生成AIの現在地！AIクリエイター体験講座
            </h1>
            
            <div class="workshop-flyer">
              <img src="/images/new-year-ai-workshop-2025.jpg" alt="新春特別講座 生成AIの現在地！AIクリエイター体験講座" />
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section class="workshop-content">
          <div class="workshop-section">
            <p>
              塾生でなくても、どなたでも参加ができる新春特別講座を1月5日、6日に行います。<br />
              日本人学校の生徒は冬休み中です。
            </p>
            
            <p>
              今回のテーマは、「生成AIの現在地」。<br />
              ニュースやSNSでよく目にする生成AI。<br />
              では、最新の生成AIで、今現在どんなことができるのか？<br />
              それを子どもたちに体験してもらうことを目的とした講座です。
            </p>
            
            <div class="workshop-highlight">
              <p style="margin-bottom: 0;">
                「AIがすごい！」という驚きとともに、どう使えば、どんなものが生まれるのか。<br />
                その入口を、安心できる環境で体験してもらいたいと思っております。
              </p>
            </div>
          </div>
          
          <div class="workshop-section">
            <h2>■ 講座内容（各回1時間・単発参加OK）</h2>
            
            <h3>【第1回】新年の誓いポスター ＆ 4コマ漫画づくり</h3>
            <p>
              新年の目標や抱負を言葉にし、自宅に貼れるポスターにしよう！<br />
              最新のAIなら4コマ漫画にもできちゃうぞ。<br />
              自分の考えが、絵や物語になる体験です。
            </p>
            
            <h3>【第2回】AIでつくる！オリジナルゲーム制作</h3>
            <p>
              プログラミングは不要！言葉でアイデアを伝え、AIと一緒にルールを考えながら、実際に遊べるゲームを完成させます。<br />
              最新のAIを使うとどんなゲームが作れるのかな？！<br />
              「ゲームは遊ぶもの」から「作るもの」へ。
            </p>
          </div>
          
          <div class="workshop-section">
            <h2>■ 開催日時、授業料、対象学年</h2>
            <div class="workshop-info-box">
              <p><strong>第1回：</strong>1月5日（月）11：00〜11：55</p>
              <p><strong>第2回：</strong>1月6日（火）11：00〜11：55</p>
              <p><strong>授業料：</strong>各回1000B</p>
              <p><strong>対象学年：</strong>小学3年生〜中学生</p>
            </div>
            
            <ul class="workshop-list">
              <li>パソコンで文字入力ができることが最低条件です</li>
              <li>パソコンの持参も歓迎です</li>
              <li>リアル授業のみを予定していますが、オンラインをご希望の方はご相談ください</li>
            </ul>
          </div>
          
          <div class="workshop-section">
            <h2>■ 事前にご準備いただくもの</h2>
            <p>
              当日は、以下 2つの生成AI を使用します。<br />
              事前にアカウント作成をお願いいたします。<br />
              また、教室のパソコンでログインしてもらいますので、メールアドレスとパスワードを必ずメモしてきてください。
            </p>
            
            <ul class="workshop-list">
              <li><strong>ChatGPT</strong></li>
              <li><strong>Gemini</strong></li>
            </ul>
            
            <div class="workshop-info-box">
              <p><strong>※ アカウントは、保護者様の名義で作成していただくことをおすすめします。</strong>（年齢制限があるため）</p>
              <p><strong>※ 無料プランで問題ありません。</strong></p>
            </div>
          </div>
          
          <div class="workshop-section">
            <h2>■ この講座で大切にしていること</h2>
            <p>
              この講座は、AIに答えを出してもらう授業ではありません。
            </p>
            <ul class="workshop-list">
              <li>どう伝えればよいかを考える</li>
              <li>何度も直しながら完成度を高める</li>
            </ul>
            <p>
              そんな体験を通して、生成AIを「使われる側」ではなく「使いこなす側」として知ることを大切にしています。
            </p>
            
            <div class="workshop-highlight">
              <p style="margin-bottom: 0;">
                最新の生成AIで、「今、ここまでできる」という現在地を体験する1時間です。<br />
                参加ご希望の方は、メールやLINEなどでご連絡ください。<br />
                お友達も誘ってみんなで来るとより楽しめます。<br />
                皆さまのご参加を、心よりお待ちしております。
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 3rem;">
            <a href="/contact" class="workshop-cta">
              📝 お申し込みはこちら
            </a>
          </div>
        </section>
      </div>
      
      <FloatingCTA />
      <Footer />
    </>
  )
}
