import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const aiCoachingCoursePage = () => (
  <>
    <head>
      <title>AI学習コーチングコース｜KOBEYA（コベヤ）- AI×個別指導</title>
      <meta name="description" content="KOBEYA（コベヤ）のAI学習コーチングコース。AIと日本人講師のハイブリッド指導。個別最適化された学習プラン、Study Partnerで効率的に学習。バンコクのプログラミング教室。" />
      <meta name="keywords" content="AI学習,コーチング,個別指導,コベヤ,KOBEYA,Study Partner,バンコク,プログラミング教室,最適化学習" />
      <meta property="og:title" content="AI学習コーチング｜KOBEYA" />
      <meta property="og:description" content="AIと講師のハイブリッド個別指導" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kobeya-programming.pages.dev/ai-coaching-course" />
      <link rel="canonical" href="https://kobeya-programming.pages.dev/ai-coaching-course" />
      
      {/* Course Structured Data for AI */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AIコーチング・ラボ - KOBEYA Study Partner",
          "description": "AI学習支援システム「Study Partner」を活用した個別最適化学習。英検対策、小論文講座、AIに質問、フラッシュカード、インター生用バイリンガル対応の5つの機能で24時間サポート。",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "KOBEYA プログラミング教室",
            "url": "https://kobeya-programming.pages.dev/"
          },
          "url": "https://kobeya-programming.pages.dev/ai-coaching-course",
          "educationalLevel": "中学生、高校生（小学生要相談）",
          "timeRequired": "55分",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student",
            "audienceType": "日本人学校、インター校の中学生・高校生"
          },
          "courseMode": ["対面", "オンライン", "ハイブリッド"],
          "availableLanguage": ["ja", "th", "en"],
          "educationalCredentialAwarded": "修了証",
          "teaches": [
            "AI学習支援システム「Study Partner」の活用",
            "英検対策（問題画像認識・全選択肢解説）",
            "小論文対策（即時添削・5つの評価軸）",
            "全教科対応AIに質問（数学・理科・社会・英語・国語）",
            "フラッシュカード学習（効率的暗記システム）",
            "バイリンガル学習（日英完全対応・インター生向け）",
            "自主学習能力の向上",
            "24時間いつでも学習サポート"
          ],
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "対面・オンライン対応",
            "courseSchedule": {
              "@type": "Schedule",
              "byDay": "火曜日",
              "startTime": "18:30",
              "endTime": "19:25"
            }
          }
        }
      `}</script>
    </head>
    
    
    <style>{`
      :root {
        --main-yellow: #FFC107;
        --accent-yellow: #FFD700;
        --base-white: #FFFFFF;
        --text-dark: #2D3748;
        --text-gray: #718096;
        --border-gray: #E2E8F0;
        --hover-gray: #F7FAFC;
        --ai-blue: #1E88E5;
        --ai-purple: #8E24AA;
        --ai-cyan: #00ACC1;
        --ai-green: #43A047;
        --ai-orange: #FF9800;
        --ai-teal: #009688;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: var(--text-dark);
        background-color: var(--base-white);
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section {
        padding: 80px 0;
      }

      /* Hero Section */
      .hero-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 30%, var(--ai-orange) 70%, var(--ai-cyan) 100%);
        color: var(--text-dark);
        text-align: center;
        padding: 120px 0;
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
        background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 25h50v50h-50z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E") repeat;
      }

      .hero-content {
        position: relative;
        z-index: 2;
      }

      .hero-icons {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }

      .hero-icon {
        font-size: 3rem;
        color: var(--text-dark);
        opacity: 0.8;
        animation: float 3s ease-in-out infinite;
      }

      .hero-icon:nth-child(1) { animation-delay: 0s; }
      .hero-icon:nth-child(2) { animation-delay: 0.5s; }
      .hero-icon:nth-child(3) { animation-delay: 1s; }
      .hero-icon:nth-child(4) { animation-delay: 1.5s; }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .hero-subtitle {
        font-size: 1.4rem;
        margin-bottom: 15px;
        font-weight: 600;
        opacity: 0.9;
      }

      .hero-description {
        font-size: 1.1rem;
        margin-bottom: 40px;
        opacity: 0.8;
        line-height: 1.7;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-button {
        display: inline-block;
        background: var(--text-dark);
        color: var(--base-white);
        padding: 20px 45px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(45, 55, 72, 0.3);
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.4);
      }

      /* Overview Section */
      .overview-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .overview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .overview-text h2 {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        line-height: 1.3;
      }

      .overview-text p {
        font-size: 1.2rem;
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 25px;
      }

      .highlight-ai-system {
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        padding: 50px;
        border-radius: 25px;
        color: var(--text-dark);
        box-shadow: 0 20px 40px rgba(255, 193, 7, 0.3);
        position: relative;
        overflow: hidden;
      }

      .highlight-ai-system::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: var(--ai-cyan);
        border-radius: 50%;
        opacity: 0.2;
        transform: translate(30px, -30px);
      }

      .ai-system-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
      }

      .ai-system-description {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 25px;
        position: relative;
        z-index: 2;
      }

      .study-partner-link {
        display: inline-block;
        background: var(--text-dark);
        color: var(--base-white);
        padding: 15px 30px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease;
        position: relative;
        z-index: 2;
      }

      .study-partner-link:hover {
        background: var(--ai-blue);
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      /* Features Section */
      .features-section {
        background: var(--hover-gray);
        padding: 100px 0;
      }

      .section-header {
        text-align: center;
        margin-bottom: 80px;
      }

      .section-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
      }

      .section-subtitle {
        font-size: 1.3rem;
        color: var(--text-gray);
        line-height: 1.7;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 40px;
      }

      .feature-card {
        background: var(--base-white);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        border: 3px solid transparent;
        position: relative;
        overflow: hidden;
      }

      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        border-color: var(--main-yellow);
      }

      .feature-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--main-yellow), var(--ai-orange));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: var(--text-dark);
        margin: 0 auto 25px;
      }

      .feature-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 15px;
      }

      .feature-description {
        color: var(--text-gray);
        line-height: 1.7;
        font-size: 1.05rem;
      }

      /* Learning Styles */
      .styles-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .styles-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }

      .styles-text h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        line-height: 1.3;
      }

      .styles-text p {
        font-size: 1.1rem;
        color: var(--text-gray);
        line-height: 1.8;
        margin-bottom: 20px;
      }

      .learning-cycle {
        background: var(--main-yellow);
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(255, 193, 7, 0.2);
      }

      .cycle-steps {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }

      .cycle-step {
        background: var(--base-white);
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .cycle-step i {
        font-size: 2rem;
        color: var(--ai-blue);
        margin-bottom: 10px;
      }

      .cycle-step h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-dark);
        margin-bottom: 5px;
      }

      .cycle-step p {
        font-size: 0.9rem;
        color: var(--text-gray);
        line-height: 1.5;
      }

      .ai-collaboration {
        background: linear-gradient(135deg, var(--ai-cyan) 0%, var(--ai-blue) 100%);
        color: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        text-align: center;
        margin-top: 40px;
      }

      .ai-collaboration h3 {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .ai-collaboration p {
        font-size: 1.1rem;
        line-height: 1.7;
        opacity: 0.9;
      }

      /* Target & Benefits */
      .target-section {
        background: var(--hover-gray);
        padding: 100px 0;
      }

      .target-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
      }

      .target-card {
        background: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        border: 3px solid var(--main-yellow);
        position: relative;
        overflow: hidden;
      }

      .target-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
      }

      .card-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .card-title i {
        color: var(--main-yellow);
      }

      .target-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 15px;
        background: var(--hover-gray);
        border-radius: 10px;
      }

      .target-item i {
        color: var(--ai-blue);
        margin-right: 15px;
        font-size: 1.2rem;
      }

      .target-item span {
        color: var(--text-gray);
        font-weight: 500;
        line-height: 1.6;
      }

      /* Schedule Section */
      .schedule-section {
        background: var(--base-white);
        padding: 100px 0;
      }

      .schedule-card {
        background: var(--base-white);
        padding: 50px;
        border-radius: 25px;
        border: 3px solid var(--main-yellow);
        position: relative;
        overflow: hidden;
        max-width: 600px;
        margin: 60px auto 0;
      }

      .schedule-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, var(--main-yellow), var(--ai-orange), var(--ai-cyan));
      }

      .schedule-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 2px solid var(--border-gray);
      }

      .schedule-item:last-child {
        border-bottom: none;
      }

      .schedule-label {
        font-weight: 600;
        color: var(--text-dark);
      }

      .schedule-value {
        color: var(--text-gray);
        font-weight: 500;
      }

      /* CTA Section */
      .cta-section {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 100%);
        padding: 100px 0;
        text-align: center;
      }

      .cta-content {
        max-width: 700px;
        margin: 0 auto;
      }

      .cta-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 25px;
        line-height: 1.3;
      }

      .cta-description {
        font-size: 1.2rem;
        color: var(--text-gray);
        margin-bottom: 40px;
        line-height: 1.7;
      }

      .cta-buttons {
        display: flex;
        gap: 25px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-primary,
      .btn-secondary {
        padding: 20px 45px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-primary {
        background: var(--text-dark);
        color: var(--base-white);
        box-shadow: 0 10px 30px rgba(45, 55, 72, 0.2);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(45, 55, 72, 0.3);
      }

      .btn-secondary {
        background: var(--base-white);
        color: var(--text-dark);
        border: 3px solid var(--text-dark);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .btn-secondary:hover {
        background: var(--text-dark);
        color: var(--base-white);
        transform: translateY(-3px);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .hero-icons {
          gap: 15px;
        }

        .hero-icon {
          font-size: 2rem;
        }

        .section {
          padding: 60px 0;
        }

        .overview-grid,
        .styles-content,
        .target-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .features-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }

        .btn-primary,
        .btn-secondary {
          width: 100%;
          max-width: 300px;
          justify-content: center;
        }

        .study-partner-big-btn {
          padding: 20px 40px;
          font-size: 1.1rem;
        }

        .spotlight-features {
          flex-direction: column;
          gap: 15px;
        }

        .spotlight-feature {
          justify-content: center;
        }
      }

      /* Study Partner Spotlight Section */
      .study-partner-spotlight {
        background: linear-gradient(135deg, var(--main-yellow) 0%, var(--accent-yellow) 50%, var(--ai-orange) 100%);
        padding: 100px 0;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .study-partner-spotlight::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
      }

      .spotlight-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        margin: 0 auto;
      }

      .spotlight-icon {
        font-size: 4rem;
        color: var(--text-dark);
        margin-bottom: 30px;
        animation: pulse 2s ease-in-out infinite;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }

      .spotlight-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      .spotlight-description {
        font-size: 1.3rem;
        color: var(--text-dark);
        margin-bottom: 40px;
        line-height: 1.6;
        opacity: 0.9;
      }

      .spotlight-features {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 50px;
        flex-wrap: wrap;
      }

      .spotlight-feature {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-dark);
        font-weight: 600;
        font-size: 1.1rem;
      }

      .spotlight-feature i {
        font-size: 1.5rem;
        color: var(--ai-blue);
      }

      .study-partner-big-btn {
        display: inline-flex;
        align-items: center;
        gap: 15px;
        background: var(--text-dark);
        color: var(--base-white);
        font-size: 1.25rem;
        font-weight: 700;
        padding: 25px 50px;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(45, 55, 72, 0.3);
        position: relative;
        overflow: hidden;
      }

      .study-partner-big-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.6s;
      }

      .study-partner-big-btn:hover::before {
        left: 100%;
      }

      .study-partner-big-btn:hover {
        background: var(--ai-blue);
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(30, 136, 229, 0.4);
      }

      .study-partner-big-btn i:first-child {
        font-size: 1.5rem;
        animation: bounce 2s infinite;
      }

      .study-partner-big-btn i:last-child {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      .study-partner-big-btn:hover i:last-child {
        transform: translateX(5px);
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-5px); }
        60% { transform: translateY(-3px); }
      }

      /* Accordion Styles */
      .accordion {
        margin-bottom: 1.5rem;
      }
      
      .accordion-header {
        background: linear-gradient(135deg, var(--main-yellow), var(--accent-yellow));
        border-radius: 1rem;
        padding: 1.5rem 2rem;
        cursor: pointer;
        user-select: none;
        transition: all 0.3s;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
      }
      
      .accordion-header:hover {
        background: linear-gradient(135deg, var(--accent-yellow), var(--ai-orange));
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 193, 7, 0.3);
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
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      
      .accordion.active .accordion-content {
        max-height: 50000px;
        transition: max-height 0.8s ease-in;
      }
      
      .accordion-inner {
        padding: 0 2rem 2rem;
      }
    `}</style>

    <Header />

    <main>
      {/* Hero Section */}
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-icons">
              <div class="hero-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-brain"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="hero-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
            </div>
            <h1 class="hero-title">AIコーチング・ラボ</h1>
            <p class="hero-subtitle">
              「わかる」から「できる」へ。
            </p>
            <p class="hero-description">
              AIが一人ひとりの学びを導く新しい学習空間。<br/>
              最先端のAI学習支援システムで、生徒の "つまずき" を見つけ、解きほぐし、定着させます。
            </p>
            <a href="#overview" class="cta-button">
              <i class="fas fa-arrow-down"></i>
              詳細を見る
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section class="overview-section" id="overview">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-text">
              <h2>人とAIが協働する<br/>リアルな学び場</h2>
              <p>
                KOBEYAのAIコーチング・ラボは、生徒一人ひとりの"つまずき"を見つけ、解きほぐし、定着させるための<strong>AI学習支援システム「Study Partner」</strong>を中心に構築されています。
              </p>
              <p>
                このラボでは、AIが先生のように寄り添いながら、宿題や苦手単元を「分解 → 手順化 → 確認 → 記録」のサイクルでサポート。生徒は無理なく自分のペースで理解を深めます。
              </p>
              <p>
                ただのオンライン学習ではなく、「人とAIが協働するリアルな学び場」で、「わかったつもり」を「本当にできる」に変えていきます。
              </p>
            </div>
            
            <div class="highlight-ai-system">
              <h3 class="ai-system-title">
                <i class="fas fa-robot"></i>
                AI学習支援システム「Study Partner」
              </h3>
              <p class="ai-system-description">
                最先端のAI学習技術により、一人ひとりの学習状況を分析し、最適な学習プランを提案。生徒の思考・判断・表現のプロセスをAIが見える化します。
              </p>
              <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="study-partner-link" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
                <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Study Partner Introduction */}
      <section class="features-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 0;">
        <div class="container">
          <div class="section-header" style="text-align: center; margin-bottom: 40px;">
            <h2 class="section-title" style="color: white; font-size: 2.5rem; margin-bottom: 20px;">
              🎓 KOBEYA Study Partner - 学習機能のご紹介
            </h2>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.95); font-size: 1.2rem;">
              あなた専用のAI学習パートナーが、24時間いつでもサポート
            </p>
          </div>
        </div>
      </section>

      {/* Study Partner Features Accordion */}
      <section style="padding: 80px 0; background: var(--hover-gray);">
        <div class="container">

          {/* Feature 1: AIに質問 */}
            <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🤖 AIに質問 - あなた専用の学習パートナー
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div style="max-width: 900px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--ai-cyan); margin-bottom: 20px;">
                  🤖 AIに質問 - あなた専用の学習パートナー
                </h2>
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--text-dark); margin-bottom: 15px;">
                  どんな教科も、どんな問題も。写真を撮るだけで即解決
                </p>
                <p style="font-size: 1.1rem; color: var(--text-gray); line-height: 1.8;">
                  数学、理科、社会、英語...すべての教科に対応。宿題も定期テストも、もう一人で悩まなくて大丈夫。
                </p>
              </div>

              <div style="background: #E0F7FA; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  こんな悩みを解決します
                </h3>
                <div style="display: grid; gap: 20px;">
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">🔢</span>
                    <div>
                      <strong>「この数式、どこで間違えたか分からない」</strong>
                      <br/>→ 計算過程を丁寧に解説
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">📊</span>
                    <div>
                      <strong>「図やグラフが読めない」</strong>
                      <br/>→ 画像認識で図表も完全理解
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">📖</span>
                    <div>
                      <strong>「教科書の説明が難しい」</strong>
                      <br/>→ 中学生・高校生に分かる言葉で説明
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">⚡</span>
                    <div>
                      <strong>「すぐに答えを知りたい」</strong>
                      <br/>→ 30秒以内に詳細な解説を表示
                    </div>
                  </div>
                </div>
              </div>

              <div style="background: white; border: 2px solid var(--border-gray); padding: 35px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  主な機能
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>全教科対応:</strong> 数学・理科・社会・英語・国語すべて対応
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>画像解析:</strong> 問題文、図表、グラフもすべて認識
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>ステップバイステップ解説:</strong> 答えまでの道筋を一つずつ丁寧に
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>関連知識の補足:</strong> 理解を深めるための背景知識も説明
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>質問し放題:</strong> 何度でも、何問でも質問できる
                  </li>
                </ul>
              </div>

              <div style="background: white; border: 2px solid var(--ai-cyan); padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--ai-cyan); margin-bottom: 20px;">
                  特に得意な分野:
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 12px;">
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0;">📐</span>
                    <strong>数学:</strong> 方程式、関数、図形、確率など
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0;">🔬</span>
                    <strong>理科:</strong> 化学式、物理の法則、生物の仕組み
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0;">🌍</span>
                    <strong>社会:</strong> 歴史の因果関係、地理の読み取り
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0;">📖</span>
                    <strong>英語:</strong> 文法解説、長文読解、英作文添削
                  </li>
                </ul>
              </div>

              <div style="background: #F0F8FF; padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  こんな使い方も:
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 12px; color: var(--text-dark);">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-cyan);">•</span>
                    授業で分からなかった部分を、帰宅後すぐに復習
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-cyan);">•</span>
                    宿題を解きながら、分からない問題だけピンポイントで質問
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-cyan);">•</span>
                    テスト前に苦手分野を集中的に質問攻め
                  </li>
                </ul>
              </div>

              <div style="background: #FFF9E5; padding: 25px; border-radius: 12px; border-left: 4px solid var(--ai-orange);">
                <p style="font-style: italic; color: var(--text-dark); line-height: 1.8; margin-bottom: 10px;">
                  <strong>生徒の声:</strong>
                </p>
                <p style="color: var(--text-dark); line-height: 1.8;">
                  「夜11時に数学の宿題で詰まっても、すぐに質問できるから助かる！親に聞くより詳しく教えてくれるし、何度聞いても嫌な顔されない（笑）」<span style="color: var(--text-gray);">（中学3年生）</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Feature 2: 英検対策 */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              📚 英検対策 - AI完全個別指導で合格を目指そう！
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div style="max-width: 900px; margin: 0 auto;">
              
              {/* Infographic Section */}
              <div style="text-align: center; margin-bottom: 50px;">
                <img 
                  src="https://www.genspark.ai/api/files/s/aV2wzj75" 
                  alt="AIコーチング・ラボ 英検対策システム - AIが君だけの英検問題を無限に生み出す！"
                  style="max-width: 100%; height: auto; border-radius: 15px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); margin-bottom: 30px;"
                />
              </div>
              
              <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--ai-blue); margin-bottom: 20px;">
                  💡 英検AI練習システムって、どんな仕組み？
                </h2>
                <p style="font-size: 1.1rem; color: var(--text-gray); line-height: 1.8;">
                  このシステムは、KOBEYAが独自開発した最新のAI学習技術を使って、まるで優秀な家庭教師が24時間そばにいるような学習環境を実現しています。
                </p>
              </div>

              <div style="background: #F0F4FF; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  🎯 こんなお悩み、ありませんか？
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-blue);">📝</span>
                    習い事や塾で忙しく英検対策まで手が回らない
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-blue);">🎓</span>
                    準1級、1級レベルの対策をどうしようか悩んでいる
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-blue);">📚</span>
                    市販の問題集はすぐに解き終わってしまう
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-blue);">📈</span>
                    やる気に波があり、学習が続かない
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-blue);">🎯</span>
                    英検対策と学校の成績、両方を伸ばしたい
                  </li>
                </ul>
                <p style="margin-top: 20px; font-weight: 600; color: var(--text-dark);">
                  一つでも当てはまるなら、このシステムがお子さまの力になれます。
                </p>
              </div>

              <div style="background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%); padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  🌟 三重の検証システムで、質の高い問題を無限に提供
                </h3>
                <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                  <h4 style="color: var(--ai-blue); font-weight: 600; margin-bottom: 15px;">第一段階：最先端AIが問題を作成</h4>
                  <p style="color: var(--text-dark); line-height: 1.7;">
                    ChatGPTと同じ技術を使った世界トップクラスのAIが、級ごとの出題傾向を学習し、本番に近い自然な問題を作成。毎回違うパターンで出題されるため、飽きずに続けられます。
                  </p>
                </div>
                <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px;">
                  <h4 style="color: var(--ai-blue); font-weight: 600; margin-bottom: 15px;">第二段階：33,000語のデータベースでレベルをチェック</h4>
                  <p style="color: var(--text-dark); line-height: 1.7;">
                    国際標準の単語データベースと照らし合わせ、「この問題は本当に3級レベルとして適切か？」を厳密に検証。級に合わない難しすぎる単語が入っていれば自動的に却下し、お子さまのレベルにぴったり合った問題だけをお届けします。
                  </p>
                </div>
                <div style="background: white; padding: 25px; border-radius: 12px;">
                  <h4 style="color: var(--ai-blue); font-weight: 600; margin-bottom: 15px;">第三段階：著作権も徹底確認</h4>
                  <p style="color: var(--text-dark); line-height: 1.7;">
                    過去問との類似性を複数の方法で自動検証し、安全性を確保しています。
                  </p>
                </div>
              </div>

              <div style="background: white; border: 2px solid var(--ai-blue); padding: 35px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                  <span>⚡</span>世界300都市のサーバー網で超高速処理
                </h3>
                <p style="color: var(--text-dark); line-height: 1.8;">
                  これだけ厳しいチェックをしながらも、問題生成時以外の待ち時間はほぼゼロ。答えた瞬間に採点・解説が表示され、ストレスフリーな学習体験を実現しています。
                </p>
              </div>

              <div style="background: #F0F4FF; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  📱 今すぐ使える充実の機能
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 20px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong style="color: var(--ai-blue);">英検5級〜1級まで完全対応</strong><br/>
                    <span style="color: var(--text-dark); line-height: 1.7;">AIが級別の出題傾向を学習し、本番に近い問題を無限に自動生成。市販の問題集のように「解き終わってしまった...」ということがありません。毎回新しい問題で、飽きずに続けられます。</span>
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong style="color: var(--ai-blue);">答えた瞬間に採点＆詳しい解説</strong><br/>
                    <span style="color: var(--text-dark); line-height: 1.7;">待ち時間ゼロで結果が表示され、「なぜこの答えが正しいのか」をAIが丁寧に解説。わからないまま次に進むことがなく、確実に理解しながら学習を進められます。それでも分からないことがあれば「AIに質問」で疑問を解消します。</span>
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong style="color: var(--ai-blue);">自由に選べる学習スタイル</strong><br/>
                    <span style="color: var(--text-dark); line-height: 1.7;">級別・問題形式別に自由に選択可能。「今日は文法を集中的に」「長文読解を強化したい」など、お子さまの学習ニーズに合わせて柔軟に対応します。</span>
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong style="color: var(--ai-blue);">いつでも、どこでも学習できる</strong><br/>
                    <span style="color: var(--text-dark); line-height: 1.7;">スマホ・タブレット・PCのどれからでもアクセス可能。学習記録は自動的にクラウドで同期されるので、移動中はスマホで、自宅ではPCで、とシームレスに学習を続けられます。</span>
                  </li>
                </ul>
              </div>

              <div style="background: linear-gradient(135deg, #fff9e5 0%, #ffe082 100%); padding: 35px; border-radius: 15px; margin-bottom: 40px; border-left: 4px solid var(--ai-orange);">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  🚀 さらに進化を続けます（開発中）
                </h3>
                <p style="color: var(--text-dark); margin-bottom: 20px; line-height: 1.7;">
                  現在、以下の革新的な機能を開発中です。リリースをお楽しみに！
                </p>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-orange);">📚</span>
                    <strong>あなた専用の自動単語帳</strong> - 間違えた単語を自動記録し、語彙力を見える化
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-orange);">🧠</span>
                    <strong>脳科学に基づく復習システム</strong> - 最適なタイミングで復習を通知し、学習時間を最大50%短縮
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-orange);">🎯</span>
                    <strong>AI学習プラン自動作成</strong> - 苦手分野を自動検出し、一人ひとりに最適化された学習プランを提供
                  </li>
                </ul>
              </div>

              <div style="background: white; border: 2px solid var(--border-gray); padding: 35px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  📈 英検対策が、そのまま学校の成績アップに直結
                </h3>
                <h4 style="color: var(--ai-blue); font-weight: 600; margin-bottom: 20px; font-size: 1.2rem;">✨ 一石二鳥の学習効果</h4>
                <div style="display: grid; gap: 20px;">
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 3px solid var(--ai-blue);">
                    <strong style="color: var(--text-dark);">語彙力が飛躍的に伸びる</strong><br/>
                    <span style="color: var(--text-gray); line-height: 1.7;">英検で学ぶ単語は学校のテストにも頻出。自動単語帳で効率的に覚えた語彙が、授業の理解度を高めます。</span>
                  </div>
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 3px solid var(--ai-blue);">
                    <strong style="color: var(--text-dark);">文法力が確実に定着する</strong><br/>
                    <span style="color: var(--text-gray); line-height: 1.7;">AIの丁寧な解説で「なぜこの答えが正しいのか」を理解。学校の文法問題もスラスラ解けるようになります。</span>
                  </div>
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 3px solid var(--ai-blue);">
                    <strong style="color: var(--text-dark);">読解力が自然に向上する</strong><br/>
                    <span style="color: var(--text-gray); line-height: 1.7;">様々な形式の英文に触れることで、読解スピードと正確性が上がり、定期テストの長文問題も余裕を持って解答できます。</span>
                  </div>
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 3px solid var(--ai-blue);">
                    <strong style="color: var(--text-dark);">学習習慣が無理なく身につく</strong><br/>
                    <span style="color: var(--text-gray); line-height: 1.7;">脳科学に基づいた復習システムで、やる気の波に左右されず継続できる習慣を形成。この習慣こそが、成績向上の最大の鍵です。</span>
                  </div>
                </div>
              </div>

              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: white; margin-bottom: 20px;">
                  💪 開発者が実現したかったこと
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative; line-height: 1.7;">
                    <span style="position: absolute; left: 0;">💡</span>
                    「英検対策をしながら英語の成績もアップ」
                  </li>
                  <li style="padding-left: 30px; position: relative; line-height: 1.7;">
                    <span style="position: absolute; left: 0;">💡</span>
                    「塾とは違う内容で英語の実力を上げたい」
                  </li>
                  <li style="padding-left: 30px; position: relative; line-height: 1.7;">
                    <span style="position: absolute; left: 0;">💡</span>
                    「やる気のムラがあっても、続けられる仕組み」
                  </li>
                </ul>
                <p style="margin-top: 20px; line-height: 1.8;">
                  こうした想いから、最新のAI技術とクラウドシステムを駆使して、このシステムを独自開発しました。<br/>
                  難しい技術はKOBEYAがすべて用意しました。お子さまがすることは、ただ問題を解くだけ。あとはシステムが、合格まで導きます。
                </p>
              </div>

              <div style="background: #FFF9E5; padding: 30px; border-radius: 15px; margin-bottom: 40px; text-align: center;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  ✨ 今すぐ始められます
                </h3>
                <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 15px;">
                  英検合格というゴールを目指しながら、学校の成績も一緒に上がっていく。<br/>
                  難しい技術は私たちがすべて用意しました。お子さまがすることは、ただ問題を解くだけ。
                </p>
                <p style="color: var(--text-dark); line-height: 1.8; font-weight: 600; font-size: 1.1rem;">
                  お子さまの「英語が得意になった！」という笑顔を、一緒に見てみませんか？<br/>
                  さあ、今日から始めてみましょう。
                </p>
              </div>

              {/* 英検練習システムのスクリーンショット */}
              <div style="margin-bottom: 40px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px; text-align: center;">
                  📱 実際の画面イメージ
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 25px;">
                  <div style="background: white; border: 2px solid var(--border-gray); border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <img src="/images/eiken/screenshot-01-question.png" alt="英検AI練習システム - 問題画面" style="width: 100%; height: auto; display: block;" loading="lazy" />
                    <div style="padding: 15px; background: #F0F4FF;">
                      <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-dark); margin-bottom: 5px;">短文の語句補充問題の画面</p>
                      <p style="font-size: 0.85rem; color: var(--text-gray);">選択肢を選んで即座に解説を確認できます</p>
                    </div>
                  </div>
                  <div style="background: white; border: 2px solid var(--border-gray); border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <img src="/images/eiken/screenshot-02-explanation.png" alt="英検AI練習システム - 解説画面" style="width: 100%; height: auto; display: block;" loading="lazy" />
                    <div style="padding: 15px; background: #F0F4FF;">
                      <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-dark); margin-bottom: 5px;">詳細な解説画面</p>
                      <p style="font-size: 0.85rem; color: var(--text-gray);">なぜ正解なのか、なぜ他が間違いなのかを詳しく説明</p>
                    </div>
                  </div>
                  <div style="background: white; border: 2px solid var(--border-gray); border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <img src="/images/eiken/screenshot-03-vocabulary.png" alt="英検AI練習システム - 単語マーカー機能" style="width: 100%; height: auto; display: block;" loading="lazy" />
                    <div style="padding: 15px; background: #F0F4FF;">
                      <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-dark); margin-bottom: 5px;">単語マーカー機能</p>
                      <p style="font-size: 0.85rem; color: var(--text-gray);">重要単語をタップして意味を確認</p>
                    </div>
                  </div>
                </div>
                <div style="background: white; border: 2px solid var(--ai-blue); border-radius: 15px; overflow: hidden; box-shadow: 0 6px 20px rgba(30, 136, 229, 0.15);">
                  <img src="/images/eiken/screenshot-04-passage1.png" alt="英検AI練習システム - 長文パッセージ1" style="width: 100%; height: auto; display: block;" loading="lazy" />
                  <div style="padding: 20px; background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);">
                    <p style="font-size: 1rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;">📖 長文読解もバッチリ対応</p>
                    <p style="font-size: 0.9rem; color: var(--text-dark); line-height: 1.6;">
                      長文パッセージも読みやすく表示。日本語訳の表示・非表示も自由自在。わからない単語はタップするだけで意味を確認できます。
                    </p>
                  </div>
                </div>
                <div style="margin-top: 20px; background: white; border: 2px solid var(--ai-blue); border-radius: 15px; overflow: hidden; box-shadow: 0 6px 20px rgba(30, 136, 229, 0.15);">
                  <img src="/images/eiken/screenshot-05-passage2.png" alt="英検AI練習システム - 長文パッセージ2" style="width: 100%; height: auto; display: block;" loading="lazy" />
                  <div style="padding: 20px; background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);">
                    <p style="font-size: 1rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;">📚 長文読解モードの問題</p>
                    <p style="font-size: 0.9rem; color: var(--text-dark); line-height: 1.6;">
                      英検と同じ4つの選択肢から選びます
                    </p>
                  </div>
                </div>
              </div>

              <div style="background: #FFF9E5; padding: 25px; border-radius: 12px; border-left: 4px solid var(--ai-orange);">
                <p style="font-style: italic; color: var(--text-dark); line-height: 1.8; margin-bottom: 10px;">
                  <strong>生徒の声:</strong>
                </p>
                <p style="color: var(--text-dark); line-height: 1.8;">
                  「分からない問題があったら、すぐに写真を撮って質問できるから、勉強の流れが途切れない！先生に聞くより気軽に何度でも質問できるのが嬉しい」<span style="color: var(--text-gray);">（中学2年生）</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Feature 3: 小論文対策 */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              📝 小論文対策 - プロの添削を超える、AIマンツーマン指導
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div style="max-width: 900px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--ai-purple); margin-bottom: 20px;">
                  📝 小論文対策 - プロの添削を超える、AIマンツーマン指導
                </h2>
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--text-dark); margin-bottom: 15px;">
                  志望校合格を勝ち取る、説得力のある小論文を書けるようになる
                </p>
                <p style="font-size: 1.1rem; color: var(--text-gray); line-height: 1.8;">
                  小論文は「書き方」が分かれば、誰でも劇的に上達します。AIコーチがあなたの小論文を多角的に分析し、具体的な改善策を提示します。
                </p>
              </div>

              <div style="background: #F5E6FF; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 25px;">
                  こんな悩みを解決します
                </h3>
                <div style="display: grid; gap: 20px;">
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">❓</span>
                    <div>
                      <strong>「何を書けばいいか分からない」</strong>
                      <br/>→ テーマ別の構成例とアイデア出しをサポート
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">🔗</span>
                    <div>
                      <strong>「論理展開が弱いと言われる」</strong>
                      <br/>→ 論理構造を視覚化して、弱点を明確に指摘
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">📚</span>
                    <div>
                      <strong>「語彙力が足りない」</strong>
                      <br/>→ より説得力のある表現を具体的に提案
                    </div>
                  </div>
                  <div style="display: flex; gap: 15px; align-items: start;">
                    <span style="font-size: 1.5rem;">🔄</span>
                    <div>
                      <strong>「添削を何度も受けたい」</strong>
                      <br/>→ 無制限に何度でも添削・フィードバック
                    </div>
                  </div>
                </div>
              </div>

              <div style="background: white; border: 2px solid var(--border-gray); padding: 35px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  主な機能
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>即時フィードバック:</strong> 提出後すぐに詳細な添削結果を表示
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>5つの評価軸:</strong> 内容・構成・表現・論理性・独自性を個別評価
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>具体的改善案:</strong> 「ここをこう書き換えるとより良くなる」という実践的アドバイス
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>模範解答例:</strong> 同じテーマの高評価作文例を参考に
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✅</span>
                    <strong>進捗管理:</strong> 過去の作文と比較して成長を実感
                  </li>
                </ul>
              </div>

              <div style="background: white; border: 2px solid var(--ai-purple); padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--ai-purple); margin-bottom: 20px;">
                  特長:
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 12px;">
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-purple);">🔄</span>
                    <strong>書き直し放題:</strong> 納得いくまで何度でも書き直して再提出できる
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-purple);">⏰</span>
                    <strong>24時間対応:</strong> 深夜でも早朝でも、書きたい時にすぐ添削
                  </li>
                  <li style="padding-left: 30px; position: relative; color: var(--text-dark);">
                    <span style="position: absolute; left: 0; color: var(--ai-purple);">🎯</span>
                    <strong>個別最適化:</strong> あなたの弱点に特化した練習問題を提案
                  </li>
                </ul>
              </div>

              <div style="background: #FFF9E5; padding: 25px; border-radius: 12px; border-left: 4px solid var(--ai-orange);">
                <p style="font-style: italic; color: var(--text-dark); line-height: 1.8; margin-bottom: 10px;">
                  <strong>生徒の声:</strong>
                </p>
                <p style="color: var(--text-dark); line-height: 1.8;">
                  「最初は200字書くのも大変だったけど、AIのアドバイス通りに直したら、800字の小論文がスラスラ書けるようになった！先生からも『すごく上達したね』って褒められた」<span style="color: var(--text-gray);">（高校3年生）</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Feature 4: フラッシュカード */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🃏 フラッシュカード - 暗記を科学する、効率学習システム
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div style="max-width: 900px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--ai-green); margin-bottom: 20px;">
                  🃏 フラッシュカード - 暗記を科学する、効率学習システム
                </h2>
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--text-dark); margin-bottom: 15px;">
                  覚えるべきことを、最短で、確実に、あなたの長期記憶に定着
                </p>
                <p style="font-size: 1.1rem; color: var(--text-gray); line-height: 1.8;">
                  単語、用語、公式...暗記が必要なすべての学習に対応。脳科学に基づいた復習タイミングで、効率的に記憶を定着させます。
                </p>
              </div>

              <div style="background: white; border: 2px solid var(--border-gray); padding: 35px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  特徴
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✨</span>
                    <strong>自分だけのカードを作成:</strong> 覚えたい内容を自由に登録
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✨</span>
                    <strong>効率的な復習:</strong> 忘れかけたタイミングで自動的に復習問題を出題
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✨</span>
                    <strong>進捗可視化:</strong> 「覚えた」「まだ不安」を一目で確認
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">✨</span>
                    <strong>カテゴリー管理:</strong> 教科別、単元別に整理して学習
                  </li>
                </ul>
              </div>

              <div style="background: #E8F5E9; padding: 30px; border-radius: 15px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  こんな人におすすめ:
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 12px; color: var(--text-dark);">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-green);">•</span>
                    英単語・熟語を効率よく覚えたい
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-green);">•</span>
                    歴史の年号や用語を暗記したい
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-green);">•</span>
                    化学式や公式を完璧にしたい
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-green);">•</span>
                    定期テスト前の総復習に使いたい
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Feature 5: インター生用 */}
        <div class="accordion" onclick="toggleAccordion(this)">
          <div class="accordion-header">
            <h3 class="accordion-title">
              🌍 インター生用（Bilingual Learning）- 日英バイリンガル完全対応
            </h3>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            <div class="accordion-inner">
              <div style="max-width: 900px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--ai-teal); margin-bottom: 20px;">
                  🌍 インター生用（Bilingual Learning）- 日英バイリンガル完全対応
                </h2>
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--text-dark); margin-bottom: 15px;">
                  日本語と英語、両方で理解を深める。インターナショナルスクール生のための特別コース
                </p>
                <p style="font-size: 1.1rem; color: var(--text-gray); line-height: 1.8;">
                  すべての解説を日本語と英語の両方で提供。どちらの言語でも深く理解できるから、真の学力が身につきます。
                </p>
              </div>

              <div style="background: white; border: 2px solid var(--border-gray); padding: 35px; border-radius: 15px; margin-bottom: 30px;">
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  特徴
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 15px;">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">🌐</span>
                    <strong>完全バイリンガル解説:</strong> すべての回答を日本語・英語の両言語で表示
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">🌐</span>
                    <strong>言語の壁を超える:</strong> 英語で習った内容を日本語でも理解、その逆も可能
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">🌐</span>
                    <strong>数学・理科に特化:</strong> 専門用語を両言語で完全マスター
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0;">🌐</span>
                    <strong>大学受験対応:</strong> 日本の大学、海外の大学、どちらにも対応できる学力を
                  </li>
                </ul>
              </div>

              <div style="background: #E0F2F1; padding: 30px; border-radius: 15px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
                  こんな人におすすめ:
                </h3>
                <ul style="list-style: none; padding: 0; display: grid; gap: 12px; color: var(--text-dark);">
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-teal);">•</span>
                    インターナショナルスクールに通っている
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-teal);">•</span>
                    英語で学んでいるが、日本語での説明も欲しい
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-teal);">•</span>
                    将来、海外の大学を目指している
                  </li>
                  <li style="padding-left: 30px; position: relative;">
                    <span style="position: absolute; left: 0; color: var(--ai-teal);">•</span>
                    バイリンガルの学力を身につけたい
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
      </section>


      {/* CTA Section */}
      <section style="padding: 80px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 30px; color: white;">
              💡 今すぐ始めよう！
            </h2>
            <p style="font-size: 1.3rem; line-height: 1.8; margin-bottom: 40px; color: rgba(255,255,255,0.95);">
              すべての機能が、あなたの学習を劇的に変えます。
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 50px;">
              <div style="background: rgba(255,255,255,0.15); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 2rem; margin-bottom: 10px;">⏰</div>
                <div style="font-size: 1.1rem; font-weight: 600;">24時間いつでも利用可能</div>
              </div>
              <div style="background: rgba(255,255,255,0.15); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 2rem; margin-bottom: 10px;">📱</div>
                <div style="font-size: 1.1rem; font-weight: 600;">スマホ一台で完結</div>
              </div>
              <div style="background: rgba(255,255,255,0.15); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 2rem; margin-bottom: 10px;">🎯</div>
                <div style="font-size: 1.1rem; font-weight: 600;">あなた専用のAIコーチ</div>
              </div>
              <div style="background: rgba(255,255,255,0.15); padding: 25px; border-radius: 15px; backdrop-filter: blur(10px);">
                <div style="font-size: 2rem; margin-bottom: 10px;">🚀</div>
                <div style="font-size: 1.1rem; font-weight: 600;">今日から成績アップ</div>
              </div>
            </div>

            <p style="font-size: 1.5rem; line-height: 1.8; margin-bottom: 20px; font-weight: 600;">
              学ぶのが楽しくなる。分かるから、もっと知りたくなる。
            </p>
            <p style="font-size: 1.8rem; font-weight: 700; color: white;">
              KOBEYA Study Partner で、あなたの「学び」が変わります。
            </p>

            <div style="margin-top: 50px;">
              <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="study-partner-big-btn" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 15px; padding: 25px 50px; background: white; color: var(--ai-purple); text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 1.4rem; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <i class="fas fa-rocket"></i>
                Study Partnerを今すぐ体験
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Styles */}
      <section class="styles-section">
        <div class="container">
          <div class="styles-content">
            <div class="styles-text">
              <h2>学びのスタイル</h2>
              <p>
                AIコーチング・ラボでは、個別最適化された学習体験を提供します。AIが学習過程を分析し、最適な指導法を選択します。
              </p>
              <p>
                従来の一方的な授業ではなく、生徒とAIが対話しながら進める双方向型の学習スタイルです。
              </p>
            </div>
            
            <div class="learning-cycle">
              <div class="cycle-steps">
                <div class="cycle-step">
                  <i class="fas fa-search"></i>
                  <h4>分解</h4>
                  <p>問題を細かく分析</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-list-ol"></i>
                  <h4>手順化</h4>
                  <p>解決ステップを明確化</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-check-circle"></i>
                  <h4>確認</h4>
                  <p>理解度をリアルタイム検証</p>
                </div>
                <div class="cycle-step">
                  <i class="fas fa-save"></i>
                  <h4>記録</h4>
                  <p>学習ログを自動保存</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ai-collaboration">
            <h3>AIサポート付き自習</h3>
            <p>
              AIによる宿題コーチング・学習記録の自動保存とフィードバック
            </p>
          </div>
        </div>
      </section>

      {/* Target & Benefits */}
      <section class="target-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">対象・おすすめの生徒</h2>
            <p class="section-subtitle">
              一人ひとりに合わせた最先端のAI学習を体験しませんか
            </p>
          </div>
          
          <div class="target-grid">
            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-users"></i>
                対象
              </h3>
              <div class="target-item">
                <i class="fas fa-graduation-cap"></i>
                <span>日本人学校（原則中学生）</span>
              </div>
              <div class="target-item">
                <i class="fas fa-globe"></i>
                <span>インター校生（原則中学生・高校生）</span>
              </div>
              <div class="target-item">
                <i class="fas fa-wifi"></i>
                <span>タイ国外からの受講も可能</span>
              </div>
              <div class="target-item">
                <i class="fas fa-info-circle"></i>
                <span>※小学生はご相談ください</span>
              </div>
            </div>

            <div class="target-card">
              <h3 class="card-title">
                <i class="fas fa-lightbulb"></i>
                こんな生徒におすすめ
              </h3>
              <div class="target-item">
                <i class="fas fa-book-open"></i>
                <span>宿題のわからないところを解説してほしい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-target"></i>
                <span>苦手単元を自分で克服したい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-pen-fancy"></i>
                <span>小論文や英検の対策をしたい</span>
              </div>
              <div class="target-item">
                <i class="fas fa-robot"></i>
                <span>AIを使った学びに興味がある</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section class="schedule-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">クラス詳細</h2>
            <p class="section-subtitle">
              一人ひとりに最適化されたAI学習支援で、<br/>
              「わかる」から「できる」への成長を実現します
            </p>
          </div>
          
          <div class="schedule-card">
            <h3 class="card-title">
              <i class="fas fa-calendar-alt"></i>
              クラススケジュール
            </h3>
            <div class="schedule-item">
              <span class="schedule-label">開催日時</span>
              <span class="schedule-value">火曜日 18：30〜19：25</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">学習形式</span>
              <span class="schedule-value">教室もしくは自宅でのAIサポート付き自習<br/>24時間いつでも利用可能</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">オンライン対応</span>
              <span class="schedule-value">宿題コーチング・学習記録</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">使用システム</span>
              <span class="schedule-value">Study Partner (AI学習支援)</span>
            </div>
            <div class="schedule-item">
              <span class="schedule-label">対象</span>
              <span class="schedule-value">中学生、高校生（小学生要相談）</span>
            </div>
          </div>
        </div>
      </section>

      {/* Study Partner Spotlight Section */}
      <section class="study-partner-spotlight">
        <div class="container">
          <div class="spotlight-content">
            <div class="spotlight-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h2 class="spotlight-title">AI学習支援システム「Study Partner」</h2>
            <p class="spotlight-description">
              最先端のAI技術があなたの学習をサポート。一人ひとりに最適化された学習体験で、「わかる」から「できる」へと導きます。
            </p>
            <div class="spotlight-features">
              <div class="spotlight-feature">
                <i class="fas fa-brain"></i>
                <span>個別最適化学習</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-chart-line"></i>
                <span>リアルタイム分析</span>
              </div>
              <div class="spotlight-feature">
                <i class="fas fa-target"></i>
                <span>弱点克服サポート</span>
              </div>
            </div>
            {/* 一時的にリンクを無効化 - 後で再接続 */}
            {/* <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="study-partner-big-btn" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-rocket"></i>
              Study Partnerを今すぐ体験
              <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
            </a> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">AIと一緒に、"できた！"を積み重ねよう。</h2>
            <p class="cta-description">
              最先端のAI学習支援で、一人ひとりの「わかる」を「できる」に変える新しい学習体験。<br/>
              まずは無料体験で、AIコーチング・ラボの魅力を体感してください。
            </p>
            <div class="cta-buttons">
              <a href="/contact" class="btn-primary">
                <i class="fas fa-graduation-cap"></i>
                無料体験を申し込む
              </a>
              {/* 一時的にリンクを無効化 - 後で再接続 */}
              {/* <a href="https://kobeyabkk-studypartner.pages.dev/study-partner" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-rocket"></i>
                Study Partnerを体験する
                <i class="fas fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px;"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>

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
              
              // Scroll to accordion header with offset for better visibility
              setTimeout(function() {
                const headerHeight = 80; // Header height
                const offset = 20; // Additional offset for better visual spacing
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }, 100); // Small delay to allow accordion animation to start
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