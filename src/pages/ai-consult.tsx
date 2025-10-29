import { Header } from '../components/header'
import { Footer } from '../components/footer'
import '../styles/ai-consult.css'

export const aiConsultPage = () => (
  <>
    <head>
      <title>AIコンサルティング｜KOBEYA - 大人向けAI活用支援・業務効率化</title>
      <meta name="description" content="バンコクのAIコンサルティングKOBEYA（コベヤ）。ChatGPT・Gemini等で業務効率化。個人事業主、中小企業向け。SNS自動投稿、算数・国語プリント生成、LINE連携など。現場目線のサポート。" />
      <meta name="keywords" content="AIコンサルティング,バンコク,ChatGPT,Gemini,業務効率化,個人事業主,中小企業,教育,AI導入,自動化,LINE連携,SNS運用,SNS 自動投稿,プリント生成,算数 プリント,国語 プリント,KOBEYA,コベヤ" />
      <meta property="og:title" content="AIコンサルティング｜KOBEYA - AIを、もっとあなたの味方に。" />
      <meta property="og:description" content="ChatGPT・Gemini・Gensparkなど、生成AIを仕事・教育・日常に活かすための実践サポート。" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/ai-consult" />
      <meta property="og:image" content="https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AIコンサルティング｜KOBEYA" />
      <meta name="twitter:description" content="生成AIを仕事・教育・日常に活かすための実践サポート" />
      <meta name="twitter:image" content="https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/ai-consult" />
    </head>
    
    

    <Header />

    {/* Hero Section - Professional Dark */}
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            PROFESSIONAL AI CONSULTING
          </div>
          <h1 class="hero-title">AIを、もっとあなたの味方に。</h1>
          <p class="hero-subtitle">
            ChatGPT・Gemini・Gensparkなど、生成AIを仕事・教育・日常に活かすための実践サポート。<br />
            現場目線で、あなたの業種・目的に合わせた最適なAI活用を提案します。
          </p>
          <div class="hero-cta-buttons">
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-hero-primary" target="_blank" rel="noopener noreferrer">
              💬 AIコンサルはこちら
            </a>
            <a href="#" class="btn-hero-secondary" onclick="alert('実装予定'); return false;">
              📱 販売中のアプリを見る
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Problem Section - Dark Background */}
    <section class="section-dark">
      <div class="container">
        <h2 class="section-title section-title-light">AIがすごいのは知ってる。<br />でも、どう使えばいいの？</h2>
        <div class="problem-list">
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">AIを試してみたけれど、うまく使いこなせない</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">ChatGPTで業務改善をしたいけど、どこから手をつけていいか分からない</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">教育現場でプリント作成や教材準備を効率化したい</div>
          </div>
          <div class="problem-item">
            <div class="problem-icon">✓</div>
            <div class="problem-text">副業・小規模事業にAIを取り入れたい</div>
          </div>
        </div>
        <p class="problem-conclusion">
          KOBEYAは、そんな方々に「現場で使えるAI」を一緒に作ります。
        </p>
      </div>
    </section>

    {/* Service Section - White Background with Cards */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">サービス内容</h2>
        <p class="section-subtitle">対象者別に最適なAI活用サポートを提供します</p>
        <div class="service-grid">
          <div class="service-card">
            <div class="service-icon">💼</div>
            <h3 class="service-title">個人事業主・中小企業</h3>
            <p class="service-description">
              AIチャット導入／業務効率化／SNS自動投稿・顧客対応支援
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎓</div>
            <h3 class="service-title">教育関係者（塾・学校）</h3>
            <p class="service-description">
              カスタム学習プリント生成／生徒管理アプリ／AI教材開発支援
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">👨‍👩‍👧</div>
            <h3 class="service-title">教育ママ・ご家庭</h3>
            <p class="service-description">
              家庭学習サポートAI／子どものレベルに合わせたプリント生成システム
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">⚡</div>
            <h3 class="service-title">その他</h3>
            <p class="service-description">
              ChatGPTやGeminiなどのカスタム設定・運用代行／既存システムとの連携
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Case Study Section */}
    <section class="section">
      <div class="container">
        <h2 class="section-title">事例・活用イメージ</h2>
        <p class="section-subtitle">実際にどのような効果が得られるのか、具体例をご紹介します</p>
        <div class="case-grid">
          <div class="case-card">
            <div class="case-icon">📊</div>
            <h3 class="case-title">学習プリント自動生成</h3>
            <p class="case-description">
              教員が作る時間を1/10に短縮。生徒ごとに難易度自動調整。
            </p>
          </div>
          <div class="case-card">
            <div class="case-icon">💬</div>
            <h3 class="case-title">LINEからAI相談受付</h3>
            <p class="case-description">
              教室・店舗での問い合わせ対応をAIが一次対応。
            </p>
          </div>
          <div class="case-card">
            <div class="case-icon">📱</div>
            <h3 class="case-title">SNS自動投稿アプリ</h3>
            <p class="case-description">
              SNS投稿の手間を削減。AIが文章・ハッシュタグまで提案。
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Process Section - White Background */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">導入までの流れ</h2>
        <p class="section-subtitle">スムーズにAI活用を始められるよう、丁寧にサポートします</p>
        <div class="process-container">
          <div class="process-steps">
            <div class="process-step">
              <div class="process-number">1</div>
              <div class="process-title">ご相談</div>
              <div class="process-desc">LINEまたはフォーム</div>
            </div>
            <div class="process-step">
              <div class="process-number">2</div>
              <div class="process-title">現状ヒアリング</div>
              <div class="process-desc">無料</div>
            </div>
            <div class="process-step">
              <div class="process-number">3</div>
              <div class="process-title">AI活用プラン提案</div>
              <div class="process-desc">最適なプランをご提案</div>
            </div>
            <div class="process-step">
              <div class="process-number">4</div>
              <div class="process-title">実装／アプリ制作</div>
              <div class="process-desc">実際の導入作業</div>
            </div>
            <div class="process-step">
              <div class="process-number">5</div>
              <div class="process-title">フォローアップ</div>
              <div class="process-desc">運用サポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Recommendation Section - Dark Background */}
    <section class="section-dark">
      <div class="container">
        <h2 class="section-title section-title-light">こんな方におすすめ</h2>
        <div class="recommend-grid">
          <div class="recommend-item">
            <div class="recommend-icon">📚</div>
            <div class="recommend-text">教育・学習をもっと効率化したい先生</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">💼</div>
            <div class="recommend-text">SNS発信に時間を取られたくない個人事業主</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">🚀</div>
            <div class="recommend-text">AIをビジネスに取り入れたいが何をすればいいか分からない方</div>
          </div>
          <div class="recommend-item">
            <div class="recommend-icon">🏠</div>
            <div class="recommend-text">家庭でもAI教育を始めたい方</div>
          </div>
        </div>
      </div>
    </section>

    {/* Strength Section */}
    <section class="section-alt">
      <div class="container">
        <h2 class="section-title">KOBEYAの強み</h2>
        <div class="strength-grid">
          <div class="strength-card">
            <div class="strength-icon">🎯</div>
            <h3 class="strength-title">教育現場での実践知</h3>
            <p class="strength-description">
              AI×教育のノウハウをそのままビジネス応用
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">⚙️</div>
            <h3 class="strength-title">現場目線のアプリ開発力</h3>
            <p class="strength-description">
              スプレッドシート連携／自動PDF生成／LINE連携まで一気通貫
            </p>
          </div>
          <div class="strength-card">
            <div class="strength-icon">🌏</div>
            <h3 class="strength-title">バンコク発・グローバル対応</h3>
            <p class="strength-description">
              海外教育現場でも使える仕組みづくり
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section - Strong Dark CTA */}
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2 class="contact-title">お問い合わせ</h2>
          <p class="contact-subtitle">
            「あなたの仕事や教室に、AIをどう組み込めるか？」<br />
            まずはLINEで気軽にご相談ください。
          </p>
          <div class="contact-buttons">
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-contact-primary" target="_blank" rel="noopener noreferrer">
              📱 AIコンサルはこちら
            </a>
            <a href="/contact" class="btn-contact-secondary">
              ✉️ メールで問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
