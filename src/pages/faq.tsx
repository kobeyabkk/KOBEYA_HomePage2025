import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/faq.css'

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
    </head>
    
    
    

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
            <p>コースによって対象年齢が異なります：</p>
            <ul>
              <li><strong>シンクシンク：</strong>6歳〜12歳</li>
              <li><strong>STEAMコース（Scratch）：</strong>小学1年生〜</li>
              <li><strong>マイクラッチ：</strong>小学2年生〜</li>
              <li><strong>トイプロ（Python）：</strong>小学4年生〜</li>
              <li><strong>Unity、クリエイターズ：</strong>小学5年生〜</li>
            </ul>
            <p>ただし、お子様の興味や理解度によって柔軟に対応いたしますので、まずはご相談ください。</p>
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
            <p>入会金は<strong>10,000バーツ</strong>です。教材費はコースによって異なりますが、基本的にはオンライン教材を使用するため、追加費用は最小限に抑えています。詳しくは無料体験時にご説明いたします。</p>
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
            <p>基本的に<strong>少人数制（4〜8名）</strong>で運営しています。一人ひとりに目が届く環境で、質の高い指導を心がけています。個別指導が必要な場合は、マンツーマンレッスンも可能です。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>授業時間はどのくらいですか？</span>
          </div>
          <div className="faq-answer">
            <p>コースによって異なりますが、<strong>通常60分〜90分</strong>です。お子様の集中力を考慮し、適度な休憩を挟みながら進めます。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>振替授業はできますか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>事前連絡</strong>（前日まで）をいただければ、別の日時に振替可能です。ただし、月に2回までとさせていただいております。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>オンライン受講は可能ですか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>一部のコースはオンライン受講可能</strong>です。特にトイプロ（Python）やAIコーチング・ラボはオンライン完結型です。詳しくはお問い合わせください。</p>
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
              <li>銀行振込（タイ国内）</li>
              <li>現金払い（教室窓口）</li>
              <li>クレジットカード（オンライン決済）</li>
            </ul>
            <p>原則として<strong>月初めに翌月分のお支払い</strong>をお願いしております。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>途中退会の場合、返金はありますか？</span>
          </div>
          <div className="faq-answer">
            <p>月の途中で退会される場合、<strong>未受講分の授業料は日割り計算で返金</strong>いたします。ただし、入会金は返金対象外となります。</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-q-icon">Q</span>
            <span>兄弟割引はありますか？</span>
          </div>
          <div className="faq-answer">
            <p>はい、<strong>ご兄弟で受講される場合は10%割引</strong>を適用いたします。詳しくはお問い合わせください。</p>
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
              <li>高性能パソコン（Windows/Mac対応）</li>
              <li>高速Wi-Fi環境</li>
              <li>プロジェクター・大画面モニター</li>
              <li>快適な学習スペース</li>
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
            <p>はい、<strong>講師は全員日本語ネイティブ</strong>ですので、授業からお問い合わせまで、すべて日本語で対応いたします。</p>
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
