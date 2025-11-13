/**
 * AI Engine Optimization (AEO) - Structured Data Helpers
 * AIがコンテンツを理解しやすくするためのJSON-LD構造化データを生成
 */

export interface CourseStructuredData {
  name: string;
  description: string;
  duration?: string;
  targetAge?: string;
  price?: string;
  url: string;
}

/**
 * コース用の構造化データを生成
 */
export function generateCourseStructuredData(course: CourseStructuredData): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "KOBEYA プログラミング教室",
      "url": "https://kobeya-programming.pages.dev/"
    },
    "url": course.url,
    "educationalLevel": course.targetAge || "小学生・中学生・高校生",
    "timeRequired": course.duration || "55分",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "offers": course.price ? {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "THB"
    } : undefined,
    "inLanguage": "ja",
    "availableLanguage": ["ja", "th", "en"]
  }, null, 2);
}

/**
 * FAQページ用の構造化データを生成
 */
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }, null, 2);
}

/**
 * ブログ記事・コンテンツページ用の構造化データを生成
 */
export interface ArticleStructuredData {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

export function generateArticleStructuredData(article: ArticleStructuredData): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author || "KOBEYA プログラミング教室"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KOBEYA プログラミング教室",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kobeya-programming.pages.dev/static/images/logo.png"
      }
    },
    "image": article.image || "https://kobeya-programming.pages.dev/static/images/og-image.jpg",
    "inLanguage": "ja"
  }, null, 2);
}

/**
 * BreadcrumbList（パンくずリスト）用の構造化データを生成
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbStructuredData(items: BreadcrumbItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }, null, 2);
}

/**
 * AI向けメタタグを生成（robots, abstract等）
 */
export function generateAIMetaTags(options: {
  abstract: string;
  keywords?: string[];
  canonicalUrl: string;
}): string {
  return `
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <meta name="abstract" content="${options.abstract}" />
    ${options.keywords ? `<meta name="keywords" content="${options.keywords.join(', ')}" />` : ''}
    <link rel="canonical" href="${options.canonicalUrl}" />
  `.trim();
}
