import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { contactPage } from './pages/contact'
// Course pages
import { steamCoursePage } from './pages/steam-course'
import { minecraftCoursePage } from './pages/minecraft-course'
import { toyprogrammingCoursePage } from './pages/toyprogramming-course'
import { thinkthinkCoursePage } from './pages/thinkthink-course'
import { unityCoursePage } from './pages/unity-course'
import { creatorsCoursePage } from './pages/creators-course'
import { aiCoachingCoursePage } from './pages/ai-coaching-course'
import { mathCoursePage } from './pages/math-course'
import { studyPartnerSimple } from './study-partner-simple'
import { getCourseBySlug } from './data/courses'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
// Serve images directly
app.use('/images/*', serveStatic({ root: './public' }))

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

// Course pages
app.get('/courses/steam', (c) => {
  return c.render(steamCoursePage())
})

// Alternative route for STEAM course (compatibility)
app.get('/steam-course', (c) => {
  return c.render(steamCoursePage())
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
  return c.render(unityCoursePage())
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
      return c.render(unityCoursePage())
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
  return c.redirect('https://kobeya-studypartner-full.pages.dev/', 302)
})

app.get('/study-partner/*', (c) => {
  return c.redirect('https://kobeya-studypartner-full.pages.dev/', 302)
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
app.post('/api/contact', async (c) => {
  try {
    const formData = await c.req.json()
    
    // Here you would typically send to your CRM, email service, etc.
    // For now, just return success
    console.log('Contact form submission:', formData)
    
    return c.json({ 
      success: true, 
      message: 'お問い合わせありがとうございます。3営業日以内にご連絡いたします。' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'エラーが発生しました。しばらくしてから再度お試しください。' 
    }, 500)
  }
})

export default app