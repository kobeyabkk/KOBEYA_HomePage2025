import { Header } from './header'
import { Footer } from './footer'

export default function Layout({ title, children }: { title: string; children: JSX.Element }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content="バンコクの日本人向けプログラミング教室KOBEYA｜AI学習アシスタントStudy Partner" />
        <link rel="stylesheet" href="/static/styles.css" />
      </head>
      <body>
        <Header />
        <main style={{ maxWidth: 960, margin: "0 auto", padding: "16px" }}>
          {children}
        </main>
        <Footer />
        <script src="/static/app.js" defer></script>
      </body>
    </html>
  )
}
