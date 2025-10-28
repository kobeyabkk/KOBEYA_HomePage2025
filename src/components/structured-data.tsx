// Structured Data (Schema.org) for SEO
// Temporarily disabled - causing 500 errors in Cloudflare Workers
// Will be re-implemented using a different approach

export const OrganizationSchema = () => {
  // Return empty fragment for now
  return <></> 
}

export const LocalBusinessSchema = () => {
  return <></>
}

export const CourseSchema = (courseData: {
  name: string
  description: string
  provider: string
  url: string
}) => {
  return <></>
}

export const BreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return <></>
}

export const FAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return <></>
}

export const ServiceSchema = (serviceData: {
  name: string
  description: string
  serviceType: string
  provider: string
  areaServed: string
}) => {
  return <></>
}
