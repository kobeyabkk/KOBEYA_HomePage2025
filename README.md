# AI & プログラミングのKOBEYA - Website

バンコク在住の日本人小中学生向けプログラミング教室のモダンなWebサイト

## 🎯 プロジェクト概要

### 目的
- **Primary Goal**: 新規生徒の体験申込（リード獲得）を最大化
- バンコクの日本人家庭に安心感を与える信頼性の高いWebサイト
- モバイルファーストのレスポンシブデザイン

### ターゲット
- バンコク在住の日本人家庭
- 小学1年生〜中学3年生の子どもを持つ保護者
- プログラミング教育に関心のある家庭

## 🏗️ 技術スタック

- **Framework**: Hono (Cloudflare Workers)
- **Language**: TypeScript/JSX
- **Styling**: Tailwind CSS (CDN) + Custom CSS
- **Deployment**: Cloudflare Pages
- **Frontend**: Vanilla JavaScript (ES6+)

## 📖 現在実装されている機能

### ✅ 完成済みページ

#### 1. **ホーム (/)** 
- ヒーローセクション（メイン訴求）
- 実績・安心材料の表示
- 4つのコース紹介カード
- 料金・タイムテーブル
- よくある質問（FAQ）
- アクセス情報

#### 2. **コース (/courses)**
- Scratch入門（小1〜3年）
- Robloxゲーム制作（小4〜中学）
- AI Coaching Lab（中学生）
- Study Partner（家庭学習支援）
- コース比較表

#### 3. **教室について (/about)**
- 教室理念・指導方針
- 講師紹介（鈴木政路先生）
- 安心ポイント（安全・送迎・日本語サポート）
- 教室実績・環境

#### 4. **お知らせ (/news)**
- ニュース一覧表示
- 個別記事詳細ページ
- カテゴリー別分類
- サンプル記事5件

#### 5. **お問い合わせ (/contact)**
- 体験申込フォーム
- 3つの連絡方法（LINE・電話・メール）
- アクセス情報・地図
- 開講時間案内

### ✅ 実装済み機能

#### UI/UX機能
- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ）
- ✅ モバイルハンバーガーメニュー
- ✅ スムーススクロール
- ✅ FAQアコーディオン
- ✅ フォームバリデーション

#### CTA（Call to Action）
- ✅ 右下固定フローティングCTAボタン
- ✅ ヒーローセクション「無料体験予約」ボタン
- ✅ LINE友だち追加ボタン
- ✅ 各セクション末尾のCTAボタン

#### フォーム機能
- ✅ リアルタイムバリデーション
- ✅ ローディング状態表示
- ✅ 成功・エラーメッセージ表示
- ✅ API連携（/api/contact）

#### SEO対策
- ✅ 適切なメタタグ設定
- ✅ OGP（Open Graph Protocol）対応
- ✅ sitemap.xml生成
- ✅ robots.txt設定
- ✅ 構造化データ対応準備

## 🎨 デザインシステム

### カラーパレット
- **Primary Blue**: #2563eb
- **Primary Yellow**: #fbbf24 (CTA)
- **Accent Green**: #10b981 (LINE)
- **Accent Purple**: #8b5cf6 (AI)
- **Text**: #1f2937, #6b7280
- **Background**: #ffffff, #f8fafc

### タイポグラフィ
- **日本語**: Noto Sans JP (300, 400, 500, 600, 700)
- **英語**: Inter (300, 400, 500, 600, 700)

## 📱 主要URI一覧

| Path | 説明 | 主な機能 |
|------|------|----------|
| `/` | ホーム | ヒーロー、コース紹介、FAQ |
| `/courses` | コース詳細 | 4コースの詳細、比較表 |
| `/about` | 教室について | 理念、講師、実績、環境 |
| `/news` | お知らせ一覧 | ニュース記事一覧 |
| `/news/:slug` | 記事詳細 | 個別ニュース記事 |
| `/contact` | お問い合わせ | 体験申込フォーム |
| `/api/contact` | フォーム送信API | POST: お問い合わせ処理 |

## 🗄️ データ構造

### コース情報
```typescript
interface Course {
  id: string;
  name: string;
  targetGrade: string;
  duration: number; // 分
  language: string;
  difficulty: 1 | 2 | 3;
  price: number; // THB
  features: string[];
}
```

### お問い合わせフォーム
```typescript
interface ContactForm {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childGrade: string;
  course: 'scratch' | 'roblox' | 'ai-coaching' | 'study-partner';
  preferredTime: string[];
  contactMethod: 'line' | 'phone' | 'email';
  message?: string;
}
```

## 🚀 デプロイ状況

### 本番環境
- **Status**: 🟡 デプロイ準備中
- **URL**: https://kobeya-programming.pages.dev/
- **Platform**: Cloudflare Pages

### 開発環境
- **Status**: ✅ 動作中
- **Command**: `npm run build && npm run dev:sandbox`
- **Local URL**: http://localhost:3000

## 📋 次のステップ

### 🔄 今後の実装予定

#### 1. 画像最適化
- [ ] 全ページの画像を実際の教室写真に差し替え
- [ ] WebP形式への変換
- [ ] 適切なalt属性の設定

#### 2. 機能拡張
- [ ] Google Maps埋め込み
- [ ] LINE Bot連携
- [ ] Google Analytics 4設定
- [ ] 送信フォームの通知機能強化

#### 3. コンテンツ充実
- [ ] 生徒作品ギャラリー
- [ ] 保護者の声の追加
- [ ] ブログ機能の拡張

#### 4. パフォーマンス最適化
- [ ] 画像の遅延読み込み
- [ ] CDNキャッシュ最適化
- [ ] Core Web Vitals改善

## 🛠️ 開発・デプロイ手順

### ローカル開発
```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run build
npm run dev:sandbox
```

### デプロイ
```bash
# ビルド
npm run build

# Cloudflare Pages デプロイ
npm run deploy:prod
```

## 📞 サポート情報

### 連絡先
- **教室名**: AI & プログラミングのKOBEYA
- **代表**: 鈴木政路（すずき まさみち）
- **所在地**: フジスーパー2号店2階
- **電話**: 066-123-4567
- **LINE**: @kobeya
- **メール**: info@kobeya-programming.com

### 開講時間
- **平日**: 16:00-20:00
- **土日**: 9:00-17:00
- **定休日**: なし（祝日は要確認）

---

**Last Updated**: 2024-03-15
**Version**: 1.0.0
**Status**: ✅ Production Ready