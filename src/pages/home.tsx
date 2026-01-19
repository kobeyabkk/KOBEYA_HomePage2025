import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { getAllCoursesSorted } from '../data/courses'

// コースアイコンを生成する関数（文字列またはJSX要素を返す）
const getCourseIcon = (title: string): string | JSX.Element => {
  if (title.includes('STEAM')) return <img src="/images/scratch-cat.png" alt="STEAM" />;
  if (title.includes('マインクラフト')) return <img src="/images/minecraft-character-new.png" alt="マインクラフト" />;
  if (title.includes('M5')) return <img src="/images/m5-lab-logo-square.jpg" alt="M5ラボ" />;
  if (title.includes('Think')) return <img src="/images/thinkthink-logo.png" alt="Think!Think!" />;
  if (title.includes('Unity')) return <img src="/images/unity-logo.png" alt="Unity" />;
  if (title.includes('クリエイター')) return <img src="/images/creators-icon.png" alt="クリエイターズ" />;
  if (title.includes('AI')) return <img src="/images/ai-coaching-icon.png" alt="AIコーチング・ラボ" />;
  if (title.includes('算数') || title.includes('数学')) return <img src="/images/math-icon.png" alt="算数・数学" />;
  return title.charAt(0);
}

export const homePage = () => {
  const courses = getAllCoursesSorted();
  
  return (
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
      
      body {
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text-dark);
        line-height: 1.6;
      }
      
      .btn-primary {
        background: var(--main-yellow);
        color: var(--text-dark);
        font-weight: 600;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        border: 2px solid transparent;
      }
      
      .btn-primary:hover {
        background: var(--accent-yellow);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .btn-secondary {
        background: var(--base-white);
        color: var(--text-dark);
        font-weight: 500;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-block;
        border: 2px solid var(--main-yellow);
      }
      
      .btn-secondary:hover {
        background: var(--main-yellow);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
      }
      
      .course-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border: 1px solid #f7fafc;
        transition: all 0.3s;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .course-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15);
        border-color: var(--main-yellow);
      }
      
      .course-icon {
        width: 4rem;
        height: 4rem;
        background: var(--main-yellow);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
        overflow: hidden;
        padding: 0.5rem;
      }
      
      .course-icon img {
        background: white;
        border-radius: 0.5rem;
        padding: 0.5rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .section {
        padding: 5rem 0;
      }
      
      .section-alt {
        background: #fafafa;
        padding: 5rem 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      .grid {
        display: grid;
        gap: 2rem;
      }
      
      .grid-2 {
        grid-template-columns: 1fr 1fr;
      }
      
      .grid-3 {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .grid-4 {
        grid-template-columns: repeat(4, 1fr);
      }
      
      @media (max-width: 1024px) {
        .grid-4 { grid-template-columns: repeat(2, 1fr); }
        .grid-3 { grid-template-columns: repeat(2, 1fr); }
        .grid-2 { grid-template-columns: 1fr; }
      }
      
      @media (max-width: 640px) {
        .grid-4,
        .grid-3,
        .grid-2 { 
          grid-template-columns: 1fr; 
        }
        
        .container {
          padding: 0 1rem;
        }
        
        .section,
        .section-alt {
          padding: 3rem 0;
        }
      }
      
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      }
      
      h2 {
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 640px) {
        h1 { font-size: 2.5rem; }
        h2 { font-size: 1.75rem; }
        h3 { font-size: 1.25rem; }
      }
      
      .hero-section {
        padding: 8rem 0 6rem;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      
      /* Hero background image */
      .hero-bg-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      }
      
      /* Dark overlay for better text readability */
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%);
        z-index: 1;
      }
      
      @keyframes pulseGlow {
        0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
        50% { transform: translateX(-50%) scale(1.1); opacity: 0.8; }
      }
      
      /* Bangkok Skyline SVG Pattern */
      .hero-skyline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        opacity: 0.3;
        pointer-events: none;
      }
      
      /* Neural Network Nodes */
      .neural-network {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 900px;
        height: 400px;
        opacity: 0.2;
        pointer-events: none;
      }
      
      .neural-node {
        position: absolute;
        width: 12px;
        height: 12px;
        background: #FFC107;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(255, 193, 7, 0.6), 0 0 40px rgba(255, 193, 7, 0.3);
        animation: nodeGlow 3s ease-in-out infinite;
      }
      
      .neural-node.blue {
        background: #3B82F6;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
      }
      
      @keyframes nodeGlow {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.3); opacity: 1; }
      }
      
      .neural-line {
        position: absolute;
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(255, 193, 7, 0.3));
        height: 2px;
        transform-origin: left center;
        animation: lineFlow 4s ease-in-out infinite;
      }
      
      @keyframes lineFlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.7; }
      }
      
      .hero-title-center {
        text-align: center;
        position: relative;
        z-index: 10;
      }
      
      .hero-section .container {
        position: relative;
        z-index: 10;
      }
      
      .hero-title-center h1 {
        font-size: 4rem;
        font-weight: 800;
        color: #FFFFFF;
        margin-bottom: 1rem;
        line-height: 1.2;
        text-shadow: 
          0 0 30px rgba(255, 193, 7, 0.8),
          0 0 60px rgba(255, 193, 7, 0.6),
          0 4px 20px rgba(0, 0, 0, 0.8);
        animation: goldGlow 3s ease-in-out infinite;
      }
      
      @keyframes goldGlow {
        0%, 100% { 
          text-shadow: 
            0 0 30px rgba(255, 193, 7, 0.8),
            0 0 60px rgba(255, 193, 7, 0.6),
            0 4px 20px rgba(0, 0, 0, 0.8);
        }
        50% { 
          text-shadow: 
            0 0 40px rgba(255, 193, 7, 1),
            0 0 80px rgba(255, 193, 7, 0.8),
            0 4px 20px rgba(0, 0, 0, 0.8);
        }
      }
      
      .hero-subtitle {
        font-size: 1.75rem;
        font-weight: 600;
        color: #FFFFFF;
        margin-top: 0.5rem;
        text-shadow: 
          0 0 20px rgba(255, 193, 7, 0.6),
          0 2px 10px rgba(0, 0, 0, 0.8);
      }
      
      .consulting-target {
        background: #f3e8ff;
        border-radius: 0.75rem;
        padding: 0.875rem 1.25rem;
        margin-bottom: 1.25rem;
        border: 2px solid #7c3aed;
        text-align: center;
      }
      
      .consulting-target strong {
        font-size: 1rem;
        color: #7c3aed;
      }
      
      @media (max-width: 768px) {
        .hero-section {
          padding: 5rem 0 4rem;
          min-height: 400px;
        }
        
        .hero-title-center h1 {
          font-size: 2.2rem;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
        }
      }
      
      /* Introduction Section */
      .intro-section {
        padding: 5rem 0;
        background: white;
      }
      
      /* Mobile responsive for course grid */
      @media (max-width: 768px) {
        .intro-section [style*="grid-template-columns: repeat(2, 1fr)"] {
          grid-template-columns: 1fr !important;
        }
        
        .intro-section [style*="display: flex"][style*="justify-content: center"] {
          flex-direction: column !important;
        }
        
        .intro-section [style*="display: flex"][style*="justify-content: center"] a {
          width: 100% !important;
        }
      }
      
      .stats-card {
        background: var(--base-white);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border: 1px solid #f7fafc;
      }
      
      .stats-number {
        font-size: 3rem;
        font-weight: 700;
        color: var(--main-yellow);
        margin-bottom: 0.5rem;
      }
      
      .stats-label {
        color: var(--text-gray);
        font-weight: 500;
      }
      
      .consulting-card {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
        color: var(--text-dark);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 3px solid #7c3aed;
        height: 100%;
      }
      
      .consulting-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .consulting-text {
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 1.25rem;
        color: var(--text-gray);
      }
      
      .consulting-problems {
        background: #f3e8ff;
        border-radius: 0.75rem;
        padding: 1.25rem;
        margin-bottom: 1.25rem;
        border: 1px solid #7c3aed;
      }
      
      .consulting-problems ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .consulting-problems li {
        margin-bottom: 0.65rem;
        padding-left: 1.5rem;
        position: relative;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      
      .consulting-problems li:last-child {
        margin-bottom: 0;
      }
      
      .consulting-problems li:before {
        content: "💡";
        position: absolute;
        left: 0;
        top: 0;
      }
      
      .btn-consulting {
        background: white;
        color: #7c3aed;
        font-weight: 600;
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: block;
        text-align: center;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 2px solid transparent;
      }
      
      .btn-consulting:hover {
        background: #f3e8ff;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }
      
      .btn-consulting-secondary {
        background: white;
        color: #7c3aed;
        font-weight: 600;
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: block;
        text-align: center;
        transition: all 0.3s;
        border: 2px solid #7c3aed;
      }
      
      .btn-consulting-secondary:hover {
        background: #f3e8ff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
      }
      
      .news-item {
        background: white;
        border-radius: 0.75rem;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border-left: 4px solid var(--main-yellow);
        transition: all 0.3s;
        cursor: pointer;
      }
      
      .news-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(255, 193, 7, 0.2);
        border-left-color: var(--main-purple);
      }
      
      @media (max-width: 640px) {
        .news-item {
          padding: 1rem;
        }
      }
    `}</style>
    
    <Header />
    
    {/* Hero Section */}
    <section class="hero-section">
      <img src="/images/ai-brain-cityscape.jpg" alt="AI & Programming Background" class="hero-bg-image" />
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-title-center">
          <h1>AI＆プログラミングのKOBEYA</h1>
          <div class="hero-subtitle">バンコクで学ぶプログラミング教室</div>
        </div>
      </div>
    </section>

    {/* Introduction Section - Main Offering */}
    <section class="intro-section">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
          <div style="background: white; border-radius: 1rem; padding: 2rem; color: var(--text-dark); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); border: 3px solid #fbbf24;">
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center;">
              <span style="font-size: 1.5rem;">🎓</span>
              お子様向けプログラミング教室
            </h3>
            <div style="background: #fff9e6; border-radius: 0.75rem; padding: 0.875rem 1.25rem; margin-bottom: 1.25rem; border: 2px solid #fbbf24; text-align: center;">
              <strong style="font-size: 1rem; color: #f59e0b;">小学生〜中学生対象・8つの専門コース</strong>
            </div>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.25rem; color: var(--text-gray); text-align: center;">
              お子様の興味と能力に合わせた多彩なコースで、楽しく学んで未来のスキルを身につけましょう！
            </p>
            <div style="background: #fff9e6; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1.25rem; border: 1px solid #fbbf24;">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
                <div style="padding: 0.5rem; text-align: center; font-size: 0.9rem; line-height: 1.5;">
                  🎮 Scratch、マイクラッチでゲーム作り
                </div>
                <div style="padding: 0.5rem; text-align: center; font-size: 0.9rem; line-height: 1.5;">
                  🐍 PythonでAI・本格プログラミング
                </div>
                <div style="padding: 0.5rem; text-align: center; font-size: 0.9rem; line-height: 1.5;">
                  🎨 動画編集・デザイン・クリエイティブ
                </div>
                <div style="padding: 0.5rem; text-align: center; font-size: 0.9rem; line-height: 1.5;">
                  💡 テノヒラメキ！M5でガジェット発明
                </div>
              </div>
            </div>
            <div style="display: flex; gap: 0.75rem; justify-content: center;">
              <a href="/contact" style="background: white; color: #f59e0b; font-weight: 600; padding: 0.75rem 1.75rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); text-align: center;">
                🎓 無料体験を申し込む
              </a>
              <a href="#courses" style="background: white; color: #f59e0b; font-weight: 600; padding: 0.75rem 1.75rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; transition: all 0.3s; border: 2px solid #fbbf24; text-align: center;">
                📚 コースを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* News Section */}
    <section class="section" style="padding: 3rem 0; background: linear-gradient(to bottom, #fff9e6, #ffffff);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: 2rem; color: var(--text-dark); margin-bottom: 0.5rem;">📢 最新情報</h2>
          <div style="width: 60px; height: 3px; background: var(--main-yellow); margin: 0 auto;"></div>
        </div>
        
        <div style="max-width: 900px; margin: 0 auto;">
          {/* News Item 1 - M5 Lab */}
          <a href="/m5-lab" style="text-decoration: none; display: block;">
            <div class="news-item">
              <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                <div style="flex-shrink: 0;">
                  <img src="/images/m5-lab-announcement.jpg" alt="テノヒラメキ！M5ラボ" style="width: 180px; height: 180px; object-fit: cover; border-radius: 0.75rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />
                </div>
                <div style="flex: 1; min-width: 250px; display: flex; flex-direction: column; gap: 0.75rem;">
                  <div style="background: #fff9e6; color: var(--text-dark); font-weight: 600; font-size: 0.85rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; width: fit-content;">
                    2025.01.17 NEW
                  </div>
                  <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-dark); line-height: 1.4;">
                    💡 新講座「テノヒラメキ！M5ラボ」スタート！
                  </div>
                  <div style="font-size: 0.95rem; color: var(--text-gray); line-height: 1.7; font-weight: 500;">
                    ― テノヒラサイズのひらめきが、動き出す ―
                  </div>
                  <div style="font-size: 0.9rem; color: var(--text-gray); line-height: 1.6;">
                    君のひらめきが、手のひらサイズのマシンで動き出す！ 小さな『M5Stick』をプログラミングして、光る・鳴る・反応する自分だけのガジェットを発明しよう。求む、未来の発明家！
                  </div>
                  <div style="margin-top: 0.5rem; padding: 1rem; background: linear-gradient(135deg, #E3F2FD 0%, #FFF9C4 100%); border-radius: 0.5rem; border-left: 4px solid var(--main-yellow);">
                    <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem;">
                      🎪 開講記念ワークショップ開催！
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-gray); line-height: 1.6;">
                      <strong>「キミだけのスマートウォッチ発明ワークショップ」</strong><br />
                      M5Stickをプログラミングして、バンドをつけて腕時計に！<br />
                      参加費：M5Stick代込みで <strong style="color: #e53e3e;">1,800B</strong> の超お得価格 🎉
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          {/* News Item 2 */}
          <a href="/new-year-ai-workshop" style="text-decoration: none; display: block;">
            <div class="news-item">
              <div style="display: flex; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                <div style="background: #fff9e6; color: var(--text-dark); font-weight: 600; font-size: 0.85rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; white-space: nowrap;">
                  2025.12.25
                </div>
                <div style="flex: 1; min-width: 200px;">
                  <div style="font-size: 1rem; font-weight: 600; color: var(--text-dark); line-height: 1.5; margin-bottom: 0.5rem;">
                    🎉 新春特別講座　生成AIの現在地！AIクリエイター体験講座
                  </div>
                  <div style="font-size: 0.9rem; color: var(--text-gray); line-height: 1.6;">
                    • 1月5日(月)11：00〜　新年の誓いポスター＆4コマ漫画作り<br />
                    • 1月6日(火)11：00〜　プログラミング不要！AIで作るオリジナルゲーム制作
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          {/* News Item 2 */}
          <a href="/courses/steam" style="text-decoration: none; display: block;">
            <div class="news-item">
              <div style="display: flex; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                <div style="background: #fff9e6; color: var(--text-dark); font-weight: 600; font-size: 0.85rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; white-space: nowrap;">
                  2025.11.27
                </div>
                <div style="flex: 1; min-width: 200px;">
                  <div style="font-size: 1rem; font-weight: 600; color: var(--text-dark); line-height: 1.5;">
                    📚 STEAMコースロブロックス講座、Canva講座にレッスン追加
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          {/* News Item 3 */}
          <a href="/about" style="text-decoration: none; display: block;">
            <div class="news-item">
              <div style="display: flex; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                <div style="background: #fff9e6; color: var(--text-dark); font-weight: 600; font-size: 0.85rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; white-space: nowrap;">
                  2025.11.27
                </div>
                <div style="flex: 1; min-width: 200px;">
                  <div style="font-size: 1rem; font-weight: 600; color: var(--text-dark); line-height: 1.5;">
                    🎖️ ジュニアプログラミング検定 63名合格（1級14名含む）2025年11月現在
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    {/* Bangkok Welcome Guide Banner */}
    <section style="padding: 3rem 0; background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #FFF9C4 100%);">
      <div class="container">
        <a href="/about#bangkok-guide" style="text-decoration: none; display: block;">
          <div style="background: var(--base-white); border-radius: 1rem; padding: 2.5rem; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; max-width: 900px; margin: 0 auto;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 12px 48px rgba(0, 0, 0, 0.15)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.1)';">
            <div style="text-align: center;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
              <h3 style="color: var(--text-dark); font-size: 1.75rem; margin-bottom: 1rem; font-weight: 700;">
                バンコクに来たばかりの皆様へ
              </h3>
              <p style="color: var(--text-gray); font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
                お子様の「やりたい」を応援！<br />
                <strong style="color: var(--text-dark);">バンコク習い事マップ 2025</strong> をご用意しました
              </p>
              <div style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 1rem 2rem; background: var(--main-yellow); border-radius: 2rem; color: var(--text-dark); font-weight: 600; font-size: 1.1rem;">
                <span>詳しく見る</span>
                <span style="font-size: 1.25rem;">→</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    {/* Courses Section */}
    <section id="courses" class="section-alt">
      <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h2>8つの専門コース</h2>
          <p style="font-size: 1.125rem; color: var(--text-gray); margin-top: 1rem;">
            お子様の年齢・興味・目標に合わせて最適なコースをお選びいただけます
          </p>
        </div>
        
        <div class="grid grid-4">
          {courses.map(course => {
            // Check if URL is external
            const isExternal = course.ctaUrl.startsWith('http://') || course.ctaUrl.startsWith('https://');
            return (
              <div class="course-card" key={course.id}>
                <div class="course-icon">{getCourseIcon(course.title)}</div>
                <h3>{course.shortTitle}</h3>
                <p style="color: var(--text-gray); margin-bottom: 1.5rem; flex-grow: 1;">
                  {course.description}
                </p>
                <a 
                  href={course.ctaUrl} 
                  class="btn-primary" 
                  style="width: 100%; text-align: center;"
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {course.ctaText}
                  {isExternal && <i class="fas fa-external-link-alt" style="margin-left: 8px; font-size: 0.85em;"></i>}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: 4rem;">
          <div>
            <h2>充実した学習環境</h2>
            <p style="color: var(--text-gray); margin-bottom: 2rem; font-size: 1.125rem; line-height: 1.7;">
              フジスーパー2号店2階にある小部屋のような教室です。様々な分野の質の高い教材を使ったプログラミング教育を提供しています。授業自体はレッスン動画で進みますが、日本人講師が教室にいるので安心です。

            </p>
            <div style="margin-bottom: 2rem;">
              <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">教室の特徴</h3>
              <ul style="list-style: none; padding: 0; color: var(--text-gray);">
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  フジスーパー2号店2階の便利な立地
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  PC・タブレット完備
                </li>
                <li style="margin-bottom: 0.75rem; display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  自分のペースで進められるレッスン
                </li>
                <li style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: var(--main-yellow); border-radius: 50%; margin-right: 0.75rem;"></span>
                  オンライン授業で自宅からの受講もOK
                </li>
              </ul>
            </div>
            <a href="/about" class="btn-secondary">教室についてもっと見る</a>
          </div>
          <div>
            <div style="background: #f8f9fa; border-radius: 1rem; padding: 3rem; text-align: center;">
              <div style="font-size: 4rem; margin-bottom: 1rem;">🏢</div>
              <h3>アクセス良好</h3>
              <p style="color: var(--text-gray); margin-bottom: 2rem;">
                フジスーパー2号店2階<br />
                お買い物ついでに通学可能
              </p>
              <div style="background: var(--main-yellow); border-radius: 0.5rem; padding: 1rem; color: var(--text-dark); font-weight: 600;">
                駐車場完備
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="section-alt">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
          <h2>まずは無料体験から</h2>
          <p style="color: var(--text-gray); font-size: 1.125rem; margin: 1.5rem 0 2.5rem;">
            お子様に最適なコースを見つけるため、まずは無料体験レッスンにお越しください。<br />
            経験豊富な講師が丁寧にご相談をお受けします。
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/contact" class="btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">無料体験を申し込む</a>
            <a href="https://line.me/R/ti/p/@093dagwm" class="btn-secondary" style="font-size: 1.125rem; padding: 1rem 2.5rem;" target="_blank" rel="noopener noreferrer">💬 LINEで相談する</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
  )
}
