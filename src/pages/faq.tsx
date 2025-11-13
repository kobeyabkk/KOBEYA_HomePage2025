import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const faqPage = () => (
  <>
    <head>
      <title>よくある質問（FAQ）｜KOBEYA プログラミング教室</title>
      <meta name="description" content="KOBEYA（コベヤ）プログラミング教室のよくある質問。入会・体験、スケジュール、料金、教室設備について。バンコクのプログラミング教室、日本語対応、オンライン授業も可能。" />
      <meta name="keywords" content="FAQ,よくある質問,料金,入会,体験,スケジュール,バンコク,プログラミング教室,日本語,オンライン,KOBEYA,コベヤ" />
      <meta property="og:title" content="よくある質問｜KOBEYA" />
      <meta property="og:description" content="KOBEYAプログラミング教室のFAQ。料金、スケジュール、入会方法など。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/faq" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/faq" />
      
      {/* FAQ Structured Data for AI */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "体験授業は無料ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、無料体験授業を実施しています。実際の授業を体験していただき、お子様に合うかご確認いただけます。"
              }
            },
            {
              "@type": "Question",
              "name": "オンライン授業はありますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、ほぼすべてのコースでオンライン授業に対応しています。Zoomを使用し、対面授業と同じ品質の指導を提供します。"
              }
            },
            {
              "@type": "Question",
              "name": "授業料の支払い方法は？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Prompt Payによる振込（タイ国内）、銀行振込（タイ国内）、現金払い（教室窓口）に対応しています。原則として月初めにその月のご請求書を発行します。"
              }
            },
            {
              "@type": "Question",
              "name": "兄弟割引はありますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、ご兄弟で受講される場合は30%割引を適用いたします。ただし、個別指導では兄弟割引は適用されません。"
              }
            },
            {
              "@type": "Question",
              "name": "欠席した場合の振替はできますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、事前連絡（当日でもOK）で振替可能です。ご連絡いただければ、別の日時に振替できます。オンラインでの振替も可能です。"
              }
            },
            {
              "@type": "Question",
              "name": "パソコンやタブレットは必要ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "教室にはパソコン（Windows）、タブレット（Android）、マウス、ヘッドフォン、高速Wi-Fi環境を完備しています。オンライン受講の場合は、ご自宅でこれらの機器をご用意ください。"
              }
            },
            {
              "@type": "Question",
              "name": "先生はどんな方ですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "日本人講師、バイリンガル（日本語・タイ語・英語）講師が在籍。プログラミング教育の専門知識と豊富な指導経験を持ち、お子様一人ひとりに合わせた丁寧な指導を行います。"
              }
            }
          ]
        }
      `}</script>
    </head>
    
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD54F;
        --light-yellow: #FFF9E6;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --text-light: #A0AEC0;
        --border-gray: #E2E8F0;
      }

      .faq-hero {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
        padding: 5rem 0 3rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .faq-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path fill="%23ffffff" fill-opacity="0.1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7L1200,56L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path></svg>') no-repeat bottom;
        background-size: cover;
      }

      .faq-hero-title {
        font-size: 3rem;
        font-weight: 800;
        color: var(--text-dark);
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
      }

      .faq-hero-subtitle {
        font-size: 1.25rem;
        color: var(--text-dark);
        opacity: 0.9;
        position: relative;
        z-index: 1;
      }

      .faq-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .faq-section {
        margin-bottom: 4rem;
      }

      .faq-section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 2rem;
        padding-bottom: 0.75rem;
        border-bottom: 3px solid var(--main-yellow);
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .faq-section-icon {
        font-size: 2rem;
      }

      .faq-item {
        background: var(--base-white);
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        border: 2px solid rgba(255, 193, 7, 0.1);
        transition: all 0.3s ease;
      }

      .faq-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.2);
        border-color: var(--main-yellow);
      }

      .faq-question {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .faq-q-icon {
        background: var(--main-yellow);
        color: var(--text-dark);
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        flex-shrink: 0;
        margin-top: 0.1rem;
      }

      .faq-answer {
        font-size: 1.05rem;
        color: var(--text-gray);
        line-height: 1.8;
        padding-left: 2.75rem;
      }

      .faq-answer p {
        margin-bottom: 0.75rem;
      }

      .faq-answer ul {
        margin: 0.75rem 0;
        padding-left: 1.5rem;
      }

      .faq-answer li {
        margin-bottom: 0.5rem;
      }

      .faq-answer strong {
        color: var(--text-dark);
        font-weight: 600;
      }

      .faq-cta {
        background: linear-gradient(135deg, #f8f9fa 0%, var(--light-yellow) 100%);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        margin-top: 4rem;
      }

      .faq-cta-title {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 1rem;
      }

      .faq-cta-text {
        font-size: 1.1rem;
        color: var(--text-gray);
        margin-bottom: 2rem;
      }

      .faq-cta-button {
        display: inline-block;
        background: var(--main-yellow);
        color: var(--text-dark);
        padding: 1.25rem 3rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.1rem;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
      }

      .faq-cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(255, 193, 7, 0.4);
      }

      @media (max-width: 768px) {
        .faq-hero-title {
          font-size: 2rem;
        }

        .faq-container {
          padding: 2rem 1rem;
        }

        .faq-section-title {
          font-size: 1.5rem;
        }

        .faq-question {
          font-size: 1.1rem;
        }

        .faq-answer {
          font-size: 1rem;
        }
      }
    `}</style>

    <Header />

    {/* Hero Section */}
    <section className="faq-hero">
      <div className="faq-hero-title">よくある質問</div>
      <div className="faq-hero-subtitle">FAQ - Frequently Asked Questions</div>
    </section>

    {/* FAQ Content */}
    <div className="faq-container">
      
      {/* 入会・体験について */}
      <div className="faq-section">
        <h2 className="faq-section-title">
          <span className="faq-section-icon">🎓</span>
          入会・体験について
        </h2>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>無料体験は本当に無料ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>完全無料</strong>です。体験レッスン（60分）は一切費用がかかりません。お子様の適性や興味を確認していただくための機会ですので、お気軽にお申し込みください。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>何歳から受講できますか？</span>
          </div>
          <div className="faq-answer">
            <p>コースによって対象学年が異なります：</p>
            <ul>
              <li><strong>シンクシンク：</strong>小学1年生〜</li>
              <li><strong>STEAMコース（Scratch）：</strong>小学1年生〜</li>
              <li><strong>マイクラッチ：</strong>小学1年生〜</li>
              <li><strong>トイプロ（Python）：</strong>小学4年生〜</li>
              <li><strong>Unity、クリエイターズ：</strong>小学4年生〜</li>
            </ul>
            <p>※対象学年は目安です</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>プログラミング未経験でも大丈夫ですか？</span>
          </div>
          <div className="faq-answer">
            <p><strong>もちろん大丈夫です！</strong>ほとんどのお子様が未経験からスタートしています。一人ひとりのペースに合わせて丁寧に指導しますので、安心してご参加ください。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>入会金や教材費はかかりますか？</span>
          </div>
          <div className="faq-answer">
            <p>入塾金は<strong>2,000バーツ</strong>です。テキストが必要な講座以外は教材費のご請求はありません。詳しくは無料体験時にご説明いたします。</p>
          </div>
        </div>
      </div>

      {/* 授業・カリキュラムについて */}
      <div className="faq-section">
        <h2 className="faq-section-title">
          <span className="faq-section-icon">📚</span>
          授業・カリキュラムについて
        </h2>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>1クラスは何人ですか？</span>
          </div>
          <div className="faq-answer">
            <p>基本的に<strong>少人数制（7名以内）</strong>で運営しています。一人ひとりに目が届く環境で、質の高い指導を心がけています。算数数学の個別指導は完全個別（1名）です。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>授業時間はどのくらいですか？</span>
          </div>
          <div className="faq-answer">
            <p>コースによって異なりますが、<strong>55分もしくは85分</strong>です。お子様の集中力を考慮し、適度な休憩を挟みながら進めます。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>振替授業はできますか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>事前連絡</strong>（当日もOK）をいただければ、別の日時に振替可能です。急な病気や交通渋滞のひどい日などでも安心です。オンライン授業への変更も可能です。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>オンライン受講は可能ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>ほぼ全てのコースはオンライン受講可能</strong>です。ただし、リアル授業推奨の講座はあります。詳しくはお問い合わせください。</p>
          </div>
        </div>
      </div>

      {/* 料金・支払いについて */}
      <div className="faq-section">
        <h2 className="faq-section-title">
          <span className="faq-section-icon">💰</span>
          料金・支払いについて
        </h2>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>月謝の支払い方法は？</span>
          </div>
          <div className="faq-answer">
            <p>以下の方法でお支払いいただけます：</p>
            <ul>
              <li>Prompt Payによる振込（タイ国内）</li>
              <li>銀行振込（タイ国内）</li>
              <li>現金払い（教室窓口）</li>
            </ul>
            <p>原則として<strong>月初めにその月のご請求書を発行</strong>します。お支払い後に、振り込み画面のスクリーンショット等をLINEやメールにてお送りいただいております。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>お休みをした場合、返金はありますか？</span>
          </div>
          <div className="faq-answer">
            <p>急なお休みをした場合は、<strong>振替授業にするか次の月で料金調整をするか</strong>を選べます。お休みしても授業料は無駄になりませんのでご安心ください。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>兄弟割引はありますか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>ご兄弟で受講される場合は30%割引</strong>を適用いたします。ただし、個別指導では兄弟割引は適用されません。詳しくはお問い合わせください。</p>
          </div>
        </div>
      </div>

      {/* 設備・持ち物について */}
      <div className="faq-section">
        <h2 className="faq-section-title">
          <span className="faq-section-icon">💻</span>
          設備・持ち物について
        </h2>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>パソコンは持参する必要がありますか？</span>
          </div>
          <div className="faq-answer">
            <p><strong>教室のパソコンを無料で貸し出し</strong>ていますので、持参不要です。ただし、ご自身のパソコンを持ち込んで学習することも可能です。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>自宅で復習するにはパソコンが必要ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>ご自宅での復習にはパソコンまたはタブレット</strong>があると効果的です。ただし、必須ではありません。コースによってはスマートフォンでも学習可能なものもあります。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>教室の設備はどうなっていますか？</span>
          </div>
          <div className="faq-answer">
            <p>フジスーパー2号店2階にあり、以下の設備を完備しています：</p>
            <ul>
              <li>パソコン（Windows）</li>
              <li>タブレット（Android）</li>
              <li>マウス</li>
              <li>ヘッドフォン</li>
              <li>高速Wi-Fi環境</li>
            </ul>
          </div>
        </div>
      </div>

      {/* その他 */}
      <div className="faq-section">
        <h2 className="faq-section-title">
          <span className="faq-section-icon">❓</span>
          その他
        </h2>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>保護者の見学は可能ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>いつでも見学可能</strong>です。特に初回や体験レッスン時は、保護者様もご一緒にご参加いただくことをお勧めしています。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>駐車場はありますか？</span>
          </div>
          <div className="faq-answer">
            <p>フジスーパー2号店の<strong>駐車場を無料でご利用</strong>いただけます。大型駐車場ですので、お車でのご来校も安心です。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>日本語での対応は可能ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>講師は日本人</strong>ですので、授業からお問い合わせまで、すべて日本語で対応いたします。</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="faq-cta">
        <div className="faq-cta-title">まだ質問がありますか？</div>
        <div className="faq-cta-text">
          お気軽にお問い合わせください。<br/>
          スタッフが丁寧にお答えいたします。
        </div>
        <a href="/contact" className="faq-cta-button">
          お問い合わせはこちら
        </a>
      </div>
    </div>

    <Footer />
  </>
)
