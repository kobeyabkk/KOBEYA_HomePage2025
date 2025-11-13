# AI Engine Optimization (AEO) - 実装ガイド

## 🤖 概要

このプロジェクトには、生成AI（ChatGPT、Claude、Gemini、Perplexityなど）がウェブサイトを認識・理解・引用しやすくするための最適化（AEO - AI Engine Optimization）を実装しています。

## ✅ 実装済みの対策

### 1. **robots.txt - AIクローラーの許可**

以下のAIクローラーを明示的に許可：

- **GPTBot** - OpenAI ChatGPT
- **ChatGPT-User** - ChatGPT browsing
- **CCBot** - Common Crawl（多くのAIが利用）
- **anthropic-ai / Claude-Web** - Anthropic Claude
- **Google-Extended** - Google Gemini
- **PerplexityBot** - Perplexity AI
- **Amazonbot** - Amazon Alexa

📄 ファイル: `public/robots.txt`

### 2. **構造化データ（JSON-LD）**

#### グローバル（全ページ）
- **EducationalOrganization** スキーマ
  - 組織情報（名称、住所、連絡先）
  - 提供コース一覧
  - SNSリンク

📄 ファイル: `src/renderer.tsx`

#### FAQページ
- **FAQPage** スキーマ
  - 質問と回答のペアを構造化
  - AIが直接回答を引用可能

📄 ファイル: `src/pages/faq.tsx`

#### コースページ
- **Course** スキーマ
  - コース名、説明、対象年齢
  - 授業時間、開催スケジュール
  - 学習内容、習得スキル

📄 例: `src/pages/ai-coaching-course.tsx`

### 3. **AI向けメタタグ**

すべてのページに以下を実装：

```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<meta name="bingbot" content="index, follow" />
<meta name="abstract" content="ページの要約" />
<link rel="canonical" href="正規URL" />
```

### 4. **ユーティリティ関数**

構造化データを簡単に生成できるヘルパー関数：

- `generateCourseStructuredData()` - コース用
- `generateFAQStructuredData()` - FAQ用
- `generateArticleStructuredData()` - 記事用
- `generateBreadcrumbStructuredData()` - パンくずリスト用
- `generateAIMetaTags()` - AIメタタグ用

📄 ファイル: `src/utils/structured-data.ts`

## 📊 期待される効果

### 即時（実装後すぐ）
✅ AIクローラーがサイトを巡回可能に
✅ robots.txtで明示的な許可

### 短期（1週間〜2週間）
✅ AIがサイトコンテンツをインデックス
✅ 構造化データをAIが理解・保存

### 中長期（1ヶ月〜）
✅ ChatGPT/Claude/Geminiが情報を引用
✅ 「バンコク プログラミング教室」などの質問に回答
✅ AIの推薦リストに掲載される可能性

## 🔍 検証方法

### 1. robots.txtの確認
```bash
curl https://kobeya-programming.pages.dev/robots.txt
```

### 2. 構造化データの確認
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

URLを入力:
- `https://kobeya-programming.pages.dev/`
- `https://kobeya-programming.pages.dev/faq`
- `https://kobeya-programming.pages.dev/ai-coaching-course`

### 3. AIでのテスト（1〜2週間後）

ChatGPTに質問してみる：
```
バンコクで日本人向けのプログラミング教室を探しています。
KOBEYAについて教えてください。
```

Claude、Gemini、Perplexityでも同様にテスト。

## 🚀 今後の拡張案

### 追加できる構造化データ

1. **Event スキーマ** - 体験授業イベント用
2. **Review スキーマ** - 保護者の口コミ・評価
3. **VideoObject スキーマ** - 授業紹介動画
4. **BreadcrumbList スキーマ** - ナビゲーション用

### AI専用コンテンツ

1. **AI-friendly FAQ拡張**
   - より詳細な回答
   - ステップバイステップの説明

2. **AI向けサマリーページ**
   - `/ai-summary` のような専用ページ
   - AIが読みやすい形式で全情報を集約

3. **動的構造化データ**
   - コース情報の自動生成
   - 最新情報の自動反映

## 📝 メンテナンス

### 定期更新（推奨）

- **月1回**: 構造化データの内容確認・更新
- **新コース追加時**: `hasOfferCatalog` に追加
- **価格変更時**: `offers` セクションを更新
- **連絡先変更時**: グローバルJSON-LDを更新

### 監視指標

1. **AIクローラーのアクセス**
   - サーバーログで GPTBot, ClaudeBot等を確認
   
2. **AIでの言及率**
   - 月1回、主要AIでサイト名を検索
   - 正確に引用されているか確認

3. **トラフィック分析**
   - AI経由の訪問者数（リファラー分析）
   - 「AI検索からの流入」の増加を確認

## 🔗 参考資料

- [Schema.org](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [OpenAI GPTBot](https://platform.openai.com/docs/gptbot)
- [Anthropic Claude Web Crawler](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity AI Crawler](https://docs.perplexity.ai/docs/perplexitybot)

## 📧 お問い合わせ

AI-SEO対策についてのご質問は、開発チームまでお問い合わせください。

---

**最終更新**: 2025-10-30
**実装者**: Claude (AI Assistant)
**プロジェクト**: KOBEYA Homepage 2025
