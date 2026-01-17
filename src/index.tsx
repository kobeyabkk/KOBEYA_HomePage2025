import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { contactPage } from './pages/contact'
import { aiConsultPage } from './pages/ai-consult'
import { faqPage } from './pages/faq'
import { supportPage } from './pages/support'
import { schedulePage } from './pages/schedule'
import { pricingPage } from './pages/pricing'
// Store pages
import { storePage } from './pages/store'
import { store100masPage } from './pages/store-100mas'
// Course pages
import { steamCoursePage } from './pages/steam-course'
import { minecraftCoursePage } from './pages/minecraft-course'
import { toyprogrammingCoursePage } from './pages/toyprogramming-course'
import { thinkthinkCoursePage } from './pages/thinkthink-course'
import { unityCoursePage } from './pages/unity-course'
import { creatorsCoursePage } from './pages/creators-course'
import { aiCoachingCoursePage } from './pages/ai-coaching-course'
import { mathCoursePage } from './pages/math-course'
// Special event pages
import { newYearAIWorkshopPage } from './pages/new-year-ai-workshop'
import { m5LabPage } from './pages/m5-lab'
import { studyPartnerSimple } from './study-partner-simple'
import { getCourseBySlug } from './data/courses'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
// Serve images directly
app.use('/images/*', serveStatic({ root: './public' }))

// Serve SEO files directly (sitemap.xml, robots.txt)
app.get('/sitemap.xml', serveStatic({ path: './public/sitemap.xml' }))
app.get('/robots.txt', serveStatic({ path: './public/robots.txt' }))

// Google Search Console verification file
app.get('/googlefdf58fbf4e77384d.html', (c) => {
  return c.text('google-site-verification: googlefdf58fbf4e77384d.html')
})

// Use renderer for all pages
app.use(renderer)

// Main pages
app.get('/', (c) => {
  return c.render(homePage())
})

app.get('/about', (c) => {
  return c.render(aboutPage())
})

app.get('/contact', (c) => {
  return c.render(contactPage())
})

app.get('/faq', (c) => {
  return c.render(faqPage())
})

app.get('/support', (c) => {
  return c.render(supportPage())
})

app.get('/schedule', (c) => {
  return c.render(schedulePage())
})

app.get('/pricing', (c) => {
  return c.render(pricingPage())
})

// Store pages
app.get('/store', (c) => {
  return c.render(storePage())
})

app.get('/store/100mas-calculator', (c) => {
  return c.render(store100masPage())
})

// AI Consult page
app.get('/ai-consult', (c) => {
  return c.render(aiConsultPage())
})

// AI Coaching Lab page
app.get('/ai-coaching-course', (c) => {
  return c.render(aiCoachingCoursePage())
})

// Special Event pages
app.get('/new-year-ai-workshop', (c) => {
  return c.render(newYearAIWorkshopPage())
})

app.get('/m5-lab', (c) => {
  return c.render(m5LabPage())
})

// Course pages
app.get('/courses/steam', (c) => {
  return c.render(steamCoursePage())
})

// Alternative route for STEAM course (301 redirect to canonical URL)
app.get('/steam-course', (c) => {
  return c.redirect('/courses/steam', 301)
})

app.get('/courses/minecraft', (c) => {
  return c.render(minecraftCoursePage())
})

app.get('/courses/toyprogramming', (c) => {
  return c.render(toyprogrammingCoursePage())
})

app.get('/courses/thinkthink', (c) => {
  return c.render(thinkthinkCoursePage())
})

app.get('/courses/unity', (c) => {
  return c.redirect('https://www.kodomopro.com/', 302)
})

app.get('/courses/creators', (c) => {
  return c.render(creatorsCoursePage())
})

app.get('/courses/ai-coaching', (c) => {
  return c.render(aiCoachingCoursePage())
})

app.get('/courses/math', (c) => {
  return c.html(mathCoursePage())
})

// Dynamic course routing - RESTful /courses/:slug
app.get('/courses/:slug', (c) => {
  const slug = c.req.param('slug')
  const course = getCourseBySlug(slug)
  
  if (!course) {
    return c.notFound()
  }
  
  // Route to specific course page based on slug
  switch (slug) {
    case 'steam':
      return c.render(steamCoursePage())
    case 'minecraft':
      return c.render(minecraftCoursePage())
    case 'toyprogramming':
      return c.render(toyprogrammingCoursePage())
    case 'thinkthink':
      return c.render(thinkthinkCoursePage())
    case 'unity':
      return c.redirect('https://www.kodomopro.com/', 302)
    case 'creators':
      return c.render(creatorsCoursePage())
    case 'ai-coaching':
      return c.render(aiCoachingCoursePage())
    case 'math':
      return c.html(mathCoursePage())
    default:
      return c.notFound()
  }
})

// Study Partner - Redirect to independent deployment
app.get('/study-partner', (c) => {
  return c.redirect('https://efef1e56.kobeya-study-partner-app.pages.dev/study-partner', 302)
})

app.get('/study-partner/*', (c) => {
  return c.redirect('https://efef1e56.kobeya-study-partner-app.pages.dev/study-partner', 302)
})

// API health check
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'KOBEYA HomePage API is running'
  })
})

// API route for form submission
// Contact form API endpoint with Resend integration
// Sends email via Resend API to kobeyabkk@gmail.com
app.post('/api/contact', async (c) => {
  try {
    const formData = await c.req.json()
    const { name, email, phone, message } = formData
    
    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        message: '必須項目を入力してください。' 
      }, 400)
    }
    
    // Get Resend API key from environment
    const resendApiKey = c.env?.RESEND_API_KEY
    
    // Enhanced debug logging
    console.log('Environment check:', {
      hasEnv: !!c.env,
      hasApiKey: !!resendApiKey,
      envKeys: c.env ? Object.keys(c.env) : 'no env object'
    })
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured in environment')
      return c.json({ 
        success: false, 
        message: 'メール送信設定にエラーがあります。管理者に連絡してください。' 
      }, 500)
    }
    
    // Prepare email content
    const emailHtml = `
      <h2>【KOBEYA】お問い合わせがありました</h2>
      <hr />
      <h3>お問い合わせ内容</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">お名前</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">メールアドレス</td>
          <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">電話番号</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">お問い合わせ内容</td>
          <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      <hr />
      <p style="color: #666; font-size: 12px;">送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Bangkok' })}</p>
    `
    
    // Send email via Resend API
    console.log('Attempting to send email via Resend API...')
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'KOBEYA Contact Form <onboarding@resend.dev>',
        to: ['kobeyabkk@gmail.com'],
        subject: `【KOBEYA】お問い合わせ：${name}様より`,
        html: emailHtml
      })
    })
    
    console.log('Resend API response status:', resendResponse.status)
    
    if (!resendResponse.ok) {
      const errorData = await resendResponse.json()
      console.error('Resend API error details:', JSON.stringify(errorData))
      throw new Error(`Failed to send email: ${JSON.stringify(errorData)}`)
    }
    
    const result = await resendResponse.json()
    console.log('Email sent successfully! Response:', JSON.stringify(result))
    
    return c.json({ 
      success: true, 
      message: 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ 
      success: false, 
      message: 'エラーが発生しました。しばらくしてから再度お試しください。' 
    }, 500)
  }
})

export default app