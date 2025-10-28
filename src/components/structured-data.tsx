// Structured Data (Schema.org) for SEO
import { raw } from 'hono/html'

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KOBEYA AI＆プログラミング教室",
    "alternateName": "KOBEYA Programming School Bangkok",
    "url": "https://kobeya-programming.pages.dev",
    "logo": "https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4",
    "description": "バンコクで学ぶプログラミング教室。小学生から中学生向けの8つの専門コース。Scratch、Python、マイクラ、AI、Unity、動画編集など多彩なカリキュラム。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "フジスーパー2号店 2階",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok",
      "addressCountry": "TH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kobeyabkk@gmail.com",
      "availableLanguage": ["Japanese", "Thai", "English"]
    },
    "sameAs": [
      "https://line.me/R/ti/p/@093dagwm"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Bangkok"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "プログラミングコース",
        "description": "小学生から中学生向けの8つの専門コース"
      },
      {
        "@type": "Offer",
        "name": "AIコンサルティング",
        "description": "大人向けAI活用支援・業務効率化サポート"
      }
    ]
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KOBEYA AI＆プログラミング教室",
    "image": "https://page.gensparksite.com/v1/base64_upload/4e54ecb8f3ea7943d9665aad9445acc4",
    "telephone": "",
    "email": "kobeyabkk@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "フジスーパー2号店 2階",
      "addressLocality": "Bangkok",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.7563",
      "longitude": "100.5018"
    },
    "url": "https://kobeya-programming.pages.dev",
    "priceRange": "฿฿",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}

export const CourseSchema = (courseData: {
  name: string
  description: string
  provider: string
  url: string
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": courseData.provider,
      "sameAs": "https://kobeya-programming.pages.dev"
    },
    "url": courseData.url,
    "courseMode": ["onsite", "online"],
    "inLanguage": "ja",
    "educationalLevel": "Beginner to Intermediate",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}

export const BreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}

export const FAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  const schema = {
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
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}

export const ServiceSchema = (serviceData: {
  name: string
  description: string
  serviceType: string
  provider: string
  areaServed: string
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "serviceType": serviceData.serviceType,
    "provider": {
      "@type": "Organization",
      "name": serviceData.provider
    },
    "areaServed": {
      "@type": "City",
      "name": serviceData.areaServed
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI導入支援"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "業務効率化コンサルティング"
          }
        }
      ]
    }
  }
  
  return raw(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
}
