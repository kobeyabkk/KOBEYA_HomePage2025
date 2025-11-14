import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title = 'AI & プログラミングのKOBEYA - バンコク日本人小中学生向けプログラミング教室' }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="adkZhcRqu6LT9OTpDkMRaIlWMZhol-uaYdzy7Cw-9gc" />
        <title>{title}</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content="バンコクの日本人小中学生向けプログラミング教室。Scratch、Roblox、AIコーチングで、楽しく学べる環境を提供。無料体験受付中。" />
        <meta name="keywords" content="プログラミング教室, バンコク, 日本人, 小学生, 中学生, Scratch, Roblox, AI, 体験授業" />
        <meta name="author" content="AI & プログラミングのKOBEYA" />
        
        {/* OGP Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="バンコクの日本人小中学生向けプログラミング教室。Scratch、Roblox、AIコーチングで、楽しく学べる環境を提供。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kobeya-programming.pages.dev/" />
        <meta property="og:image" content="https://kobeya-programming.pages.dev/static/images/og-image.jpg" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="バンコクの日本人小中学生向けプログラミング教室。無料体験受付中。" />
        <meta name="twitter:image" content="https://kobeya-programming.pages.dev/static/images/og-image.jpg" />
        
        {/* AI Crawlers Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="abstract" content="バンコクで日本人小中学生向けのプログラミング教室を運営。STEAM教育、Minecraft、AI学習コーチングなど多様なコースを提供し、子どもたちの創造力と論理的思考力を育成します。" />
        <link rel="canonical" href="https://kobeya-programming.pages.dev/" />
        
        {/* Structured Data for AI (JSON-LD) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "KOBEYA プログラミング教室",
            "alternateName": "AI & プログラミングのKOBEYA",
            "description": "バンコクの日本人小中学生向けプログラミング教室。STEAM教育、Minecraft、AIコーチング、Unity、クリエイターズコースなど多様なプログラムを提供。",
            "url": "https://kobeya-programming.pages.dev/",
            "logo": "https://kobeya-programming.pages.dev/images/kobeya-logo.png",
            "image": "https://kobeya-programming.pages.dev/static/images/og-image.jpg",
            "telephone": "+66-xxx-xxx-xxxx",
            "email": "kobeyabkk@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "バンコク",
              "addressCountry": "TH"
            },
            "areaServed": {
              "@type": "Place",
              "name": "バンコク"
            },
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student",
              "audienceType": "小学生、中学生、高校生"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "STEAMコース",
                "description": "Science, Technology, Engineering, Art, Mathematicsを統合した学習プログラム"
              },
              {
                "@type": "Offer",
                "name": "マイクラッチコース",
                "description": "Minecraftを使ったプログラミング学習"
              },
              {
                "@type": "Offer",
                "name": "AIコーチング・ラボ",
                "description": "AI学習支援システムを活用した個別最適化学習"
              },
              {
                "@type": "Offer",
                "name": "クリエイターズコース",
                "description": "動画編集、3Dモデリング、ゲーム開発などのクリエイティブスキル習得"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "コース一覧",
              "itemListElement": [
                {
                  "@type": "Course",
                  "name": "STEAMコース",
                  "description": "STEAM教育で創造力と論理的思考を育む",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "KOBEYA プログラミング教室"
                  }
                },
                {
                  "@type": "Course",
                  "name": "マイクラッチコース",
                  "description": "Minecraftでプログラミングの基礎を学ぶ",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "KOBEYA プログラミング教室"
                  }
                },
                {
                  "@type": "Course",
                  "name": "AIコーチング・ラボ",
                  "description": "AI学習支援で効率的に学力向上",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "KOBEYA プログラミング教室"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/kobeyabkk",
              "https://line.me/R/ti/p/@kobeyabkk"
            ]
          }
        `}</script>
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/kobeya-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/kobeya-logo.png" />
        <link rel="apple-touch-icon" href="/images/kobeya-logo.png" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        
        {/* Styles */}
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        
        {/* Scripts */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
