import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { homePage } from './pages/home'
import { coursesPage } from './pages/courses'
import { aboutPage } from './pages/about'
import { newsPage } from './pages/news'
import { contactPage } from './pages/contact'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all pages
app.use(renderer)

// Routes
app.get('/', (c) => {
  return c.render(homePage())
})

app.get('/courses', (c) => {
  return c.render(coursesPage())
})

app.get('/about', (c) => {
  return c.render(aboutPage())
})

app.get('/news', (c) => {
  return c.render(newsPage())
})

app.get('/news/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.render(newsPage(slug))
})

app.get('/contact', (c) => {
  return c.render(contactPage())
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
