# mamakoro 技術仕様書

最終更新: 2026-05-11

## 1. プロジェクト概要

### 1.1 目的
福岡県筑紫野市の親子サロン「mamakoro」の集客用ランディングページ。来訪者にサロンの活動内容・料金・対象・参加方法を伝え、最終的に Instagram DM 経由での予約・問い合わせへ導線を集約することを目的とする。

### 1.2 ターゲットユーザー
- 生後2ヶ月〜1歳までの子どもを育てているママ
- 福岡県筑紫野市およびその近郊在住
- スマートフォンからの閲覧が中心と想定

### 1.3 スコープ
- 単一ページ（ランディングページ）
- フォームや会員機能は持たない
- 予約・問い合わせは外部の Instagram DM へ委ねる

## 2. システム構成

### 2.1 アーキテクチャ
完全な静的サイト（SSG）。ビルド時に HTML/CSS/JS を生成し、CDN から配信する想定。サーバサイドの永続化・動的処理は存在しない。

```
[Browser]
   │  HTTPS
   ▼
[Static Hosting (Cloudflare Pages 想定)]
   │  HTML / CSS / JS / 画像
   └─ out/ ディレクトリの内容を配信

(外部リンク)
   └─→ Instagram（予約・問い合わせ動線）
```

### 2.2 技術スタック
| レイヤ | 採用技術 | バージョン |
| --- | --- | --- |
| フレームワーク | Next.js (App Router) | 14.2.15 |
| 言語 | TypeScript | ^5.4.5 |
| UI ライブラリ | React / React DOM | ^18.3.1 |
| スタイリング | Tailwind CSS | ^3.4.4 |
| CSS 後処理 | PostCSS / Autoprefixer | ^8.4.38 / ^10.4.19 |
| 型定義 | @types/node, @types/react, @types/react-dom | ^20 / ^18 / ^18 |

### 2.3 ランタイム要件
- Node.js 18.17 以上（Next.js 14 の最低要件）
- ブラウザ: モバイルファースト。最新の Safari (iOS) / Chrome (Android) を主軸に、モダンブラウザ全般を対象とする。

## 3. ビルド・デプロイ

### 3.1 ビルド設定 (`next.config.mjs`)
```js
{
  reactStrictMode: true,
  output: "export",          // 静的書き出し
  images: { unoptimized: true } // next/image 最適化サーバを使わない
}
```

- `output: "export"` により、`npm run build` で `out/` 配下に静的アセットが書き出される。
- API Routes・Server Actions・動的レンダリングは利用できない。
- `next/image` の最適化は無効化。アスペクト比・サイズは Tailwind の `aspect-*` / `w-*` で制御する。

### 3.2 スクリプト
| コマンド | 用途 |
| --- | --- |
| `npm run dev` | 開発サーバ起動 (`next dev`、既定で `http://localhost:3000`) |
| `npm run build` | 本番ビルド + 静的書き出し |
| `npm run start` | ビルド後の `next start`（`output: "export"` 環境では基本未使用） |
| `npm run lint` | `next lint` |

### 3.3 デプロイ
- ホスティング: Cloudflare Pages を想定（コミット履歴 `be861b1 Configure static export for Cloudflare Pages` より）。
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `out`
- 環境変数: 現時点で必須となる環境変数はなし。

## 4. ディレクトリ構成

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx     # <html lang="ja"> + メタデータ・ビューポート
│   │   ├── page.tsx       # トップページ全セクション
│   │   └── globals.css    # Tailwind 読込・グローバル CSS
│   ├── components/
│   │   ├── InstagramButton.tsx
│   │   └── PlaceholderImage.tsx
│   └── lib/
│       └── constants.ts   # サイト共通定数
├── public/
│   └── images/            # 画像配置先（差し替え用）
│       └── README.md
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
```

### 4.1 パスエイリアス
`tsconfig.json` で `@/* → ./src/*` を定義。インポートは `@/lib/constants` のように記述する。

## 5. ページ構成

トップページ (`src/app/page.tsx`) は次の10セクションで構成される。

| # | セクション ID | 内容 | 背景色（Tailwind） |
| --- | --- | --- | --- |
| 1 | （なし） | ファーストビュー：サイト名・タグライン・対象バッジ・ヒーロー画像・CTA | グラデーション (cream→peach→cream) |
| 2 | `#about` | mamakoro について | `bg-white` |
| 3 | `#for-you` | こんな方におすすめ | `bg-cream-100` |
| 4 | `#lesson` | レッスン内容 + 効果に関する免責 | `bg-white` |
| 5 | `#price` | 料金・対象（定数表示） | `bg-coral-100/40` |
| 6 | `#trainer` | トレーナー紹介（保育士・スポーツメンタルトレーナー） | `bg-white` |
| 7 | `#venue` | 会場（筑紫野市塔原東・駐車場4台） | `bg-cream-100` |
| 8 | `#flow` | 参加までの4ステップ | `bg-white` |
| 9 | `#faq` | よくある質問（`<details>`/`<summary>` によるアコーディオン） | `bg-cream-100` |
| 10 | （なし） | 最終 CTA + フッター | グラデーション (coral→peach→coral) → `bg-cocoa-700` |

### 5.1 共通要素（同ファイル内ローカル定義）
- `SectionTitle`: eyebrow / title / description を中央寄せで表示
- `Section`: `max-w-3xl` のラッパ + 上下パディング

### 5.2 セクションごとのデータソース
`page.tsx` 内のローカル配列で管理：
- `recommendedFor`（おすすめ対象）
- `lessonPoints`（レッスン内容ポイント）
- `steps`（参加までの流れ 4 ステップ）
- `faqs`（FAQ）

## 6. コンポーネント仕様

### 6.1 `InstagramButton` (`src/components/InstagramButton.tsx`)
Instagram への外部遷移を行うアンカーボタン。

| プロパティ | 型 | 既定値 | 説明 |
| --- | --- | --- | --- |
| `label` | `string` | `"Instagramで予約・相談する"` | 表示テキスト |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 余白とフォントサイズ |
| `variant` | `"primary" \| "outline"` | `"primary"` | 色のバリアント |
| `className` | `string` | `""` | 追加クラス |

- 遷移先は `INSTAGRAM_URL`（定数）。
- `target="_blank"` + `rel="noopener noreferrer"` を付与。
- `aria-label` に「Instagramを新しいタブで開く」旨を含む。

### 6.2 `PlaceholderImage` (`src/components/PlaceholderImage.tsx`)
画像差し替えを前提とした表示コンポーネント。`src` 未指定時はラベル付きプレースホルダ、指定時は `next/image` で表示する。

| プロパティ | 型 | 既定値 | 説明 |
| --- | --- | --- | --- |
| `src` | `string?` | – | `public/` 配下のパス（例 `/images/hero.jpg`） |
| `label` | `string` | – | プレースホルダ表示時のラベル |
| `alt` | `string` | – | 画像 alt（プレースホルダ時は `role="img"` + `aria-label`） |
| `aspect` | `"square" \| "video" \| "portrait" \| "wide"` | `"video"` | アスペクト比 |
| `rounded` | `"2xl" \| "3xl" \| "4xl" \| "full"` | `"3xl"` | 角丸サイズ |
| `className` | `string` | `""` | 追加クラス |
| `priority` | `boolean` | `false` | LCP 用 priority |

- 画像表示時は `next/image` の `fill` + `sizes="(max-width: 768px) 100vw, 600px"`。
- `images.unoptimized: true` のため、最適化サーバを介さない出力になる。

## 7. 定数定義 (`src/lib/constants.ts`)

| キー | 値 | 用途 |
| --- | --- | --- |
| `SITE_NAME` | `"mamakoro"` | サイト名（英） |
| `SITE_NAME_JA` | `"ママコロ"` | サイト名（日） |
| `SITE_TAGLINE` | `"産後ママのための、ほっとできる親子サロン"` | OGP 等で使用 |
| `INSTAGRAM_URL` | `"https://www.instagram.com/"` | **要差し替え**（正式アカウント URL に） |
| `SALON_INFO.area` | `"福岡県筑紫野市"` | フッター・OGP |
| `SALON_INFO.priceYen` | `1000` | 1 回あたりの料金（円） |
| `SALON_INFO.durationMin` | `60` | 1 回あたりの所要時間（分） |
| `SALON_INFO.maxCapacity` | `4` | 定員 |
| `SALON_INFO.targetAgeMinMonth` | `2` | 対象月齢の下限 |
| `SALON_INFO.targetAgeMaxYear` | `1` | 対象年齢の上限 |

料金・対象などの数値変更はこのファイルのみで完結する。

## 8. デザインシステム

### 8.1 カラーパレット（`tailwind.config.ts` の `theme.extend.colors`）
| 役割 | 名前 | 値 |
| --- | --- | --- |
| 背景・ベース | `cream-50` / `100` / `200` | `#FFFBF5` / `#FDF6EC` / `#F9ECD8` |
| アクセント（ベージュ） | `beige-100`〜`300` | `#F5E8D6` / `#EBD7BC` / `#D9BFA0` |
| 主アクセント | `coral-100`〜`500` | `#FCE4DC` 〜 `#E07058` |
| 副アクセント | `peach-100`〜`300` | `#FFE7D6` 〜 `#FFBC8A` |
| テキスト・濃色 | `cocoa-400`〜`700` | `#A78670` 〜 `#5A3F30` |

### 8.2 タイポグラフィ
`font-sans` を以下スタックで上書き：
```
Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, system-ui, sans-serif
```
- `globals.css` で `font-feature-settings: "palt"` を有効化（プロポーショナル組）。
- `text-rendering: optimizeLegibility;` および `-webkit-font-smoothing: antialiased;`。

### 8.3 シャドウ・角丸
- `shadow-soft`: `0 8px 24px -8px rgba(180, 120, 90, 0.18)`
- `shadow-soft-lg`: `0 16px 40px -12px rgba(180, 120, 90, 0.22)`
- `rounded-4xl`: `2rem`

### 8.4 装飾パターン
`globals.css` の `.bg-soft-dots`：
```css
background-image: radial-gradient(rgba(244,167,149,0.15) 1px, transparent 1px);
background-size: 22px 22px;
```
ファーストビューと最終 CTA の背景に重ねている。

### 8.5 レスポンシブ方針
モバイルファースト。`sm:` (≥640px) ブレークポイントを主に使用し、より大きな幅でも `max-w-3xl` で本文幅を制限してスマホ的な読み心地を保つ。

## 9. メタデータ・SEO

`src/app/layout.tsx` の `metadata`：
- `title`: `mamakoro−ママコロ−｜福岡県筑紫野市の親子サロン`
- `description`: 福岡県筑紫野市の親子サロン「mamakoro」… 産後ダイエットとママ同士の交流を少人数で行う旨。
- `openGraph.locale`: `ja_JP`
- `openGraph.type`: `website`

`viewport`：
- `width: device-width`, `initialScale: 1`
- `themeColor: "#FDF6EC"`

`<html lang="ja">` 固定。

## 10. アクセシビリティ

- セマンティックタグ: `<main>`, `<section>`, `<ol>`, `<ul>`, `<dl>`, `<details>/<summary>`, `<footer>` を適切に使用。
- 装飾アイコンには `aria-hidden="true"` を付与。
- `InstagramButton` には新しいタブで開く旨を含む `aria-label` を設定。
- `PlaceholderImage` のプレースホルダ枠には `role="img"` + `aria-label` を付与。

## 11. 画像運用フロー

1. デザイン上、画像が無くてもプレースホルダ表示でレイアウトが破綻しないようになっている。
2. 写真が用意でき次第、`public/images/` に配置：
   - `hero.jpg`（ファーストビュー）
   - `about.jpg`（mamakoro について）
   - `lesson.jpg`（レッスン）
   - `trainer.jpg`（トレーナー）
   - `venue.jpg`（会場）— 現状コードには未挿入（プレースホルダなし、テキストのみ）
3. `src/app/page.tsx` 内の該当 `PlaceholderImage` の `src` 引数のコメントを外す。

## 12. 既知の留意事項・残課題

- `INSTAGRAM_URL` がプレースホルダ (`https://www.instagram.com/`) のままであり、本番公開前に正式アカウントへの差し替えが必須。
- `next/image` の最適化サーバを使わないため、配置する画像は事前に Web 用に圧縮しておくことが望ましい。
- フォーム・問い合わせ機能は持たないため、Instagram アカウントの可用性に運用が依存する。
- `output: "export"` のため、将来的に動的機能（予約フォーム等）が必要になった場合はホスティング・構成の再検討が必要。

## 13. 参考

- リポジトリ内 `public/images/README.md`（画像差し替え手順）
- Next.js App Router & Static Export ドキュメント
- Tailwind CSS ドキュメント
