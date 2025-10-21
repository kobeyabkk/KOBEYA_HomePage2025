import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Section } from '../components/section'

export const contactPage = () => (
  <>
    <style>{`
      .card-shadow {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
      }

      .card-shadow:hover {
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }
    `}</style>

    <Header />

    <main className="bg-gray-50">
      <Section>
        {/* ヒーロー */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">お問い合わせ</h1>
          <p className="text-gray-600">
            体験レッスン・入会のご相談・カリキュラムのご質問など、お気軽にどうぞ。
          </p>
        </div>

        {/* 2カラム：教室情報 / フォーム */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 教室情報カード */}
          <div className="rounded-xl p-6 shadow card-shadow bg-white">
            <h2 className="text-xl font-semibold mb-4">教室情報</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">電話：</span>
                <a href="tel:021036708" className="underline hover:no-underline">02-103-6708</a>
              </li>
              <li>
                <span className="font-medium">メール：</span>
                <a href="mailto:kobeyabkk@gmail.com" className="underline hover:no-underline">
                  kobeyabkk@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">所在地：</span>
                フジスーパー2号店 2階（BTSの記載なし）
              </li>
              <li>
                <span className="font-medium">受付時間：</span>
                平日 9:00-21:00 / 土曜 9:00-18:00
              </li>
            </ul>

            {/* 簡易マップ（あとで専用コンポーネントに差し替え可） */}
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="KOBEYA Location"
                  src="https://www.google.com/maps?q=Fuji%20Super%202%20Bangkok&output=embed"
                  className="w-full h-64"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム（ダミー／将来API連携予定） */}
          <div className="rounded-xl p-6 shadow card-shadow bg-white">
            <h2 className="text-xl font-semibold mb-4">お問い合わせフォーム</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contact-name">
                  お名前
                </label>
                <input
                  id="contact-name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="text"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contact-email">
                  メールアドレス
                </label>
                <input
                  id="contact-email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="contact-message">
                  お問い合わせ内容
                </label>
                <textarea
                  id="contact-message"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="ご相談内容をご記入ください"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-yellow-400 hover:opacity-90 transition-opacity"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </Section>
    </main>

    <Footer />
  </>
)
