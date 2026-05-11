# mamakoro − ママコロ −

福岡県筑紫野市の親子サロン **mamakoro** の公式ランディングページです。生後2ヶ月〜1歳までのお子さまを子育て中のママ向けに、産後の体づくりとママ同士の交流を少人数で行うサロンの情報を1枚のページで紹介します。

予約・問い合わせは Instagram DM に集約しており、フォームやデータベースを持たない静的サイト構成です。

## スタック

| 区分 | 採用技術 |
| --- | --- |
| フレームワーク | Next.js 14.2 (App Router) |
| 言語 | TypeScript 5 (strict) |
| UI | React 18 |
| スタイル | Tailwind CSS 3.4 |
| ビルド出力 | 静的書き出し (`output: "export"`) |
| ホスティング想定 | Cloudflare Pages（静的） |

## 動作要件

- Node.js 18.17 以上（Next.js 14 の要件に準拠）
- npm（`package-lock.json` に追従）

## セットアップ

```bash
# 依存インストール
npm install

# 開発サーバ起動（http://localhost:3000）
npm run dev

# 本番ビルド（out/ に静的ファイル出力）
npm run build

# Lint
npm run lint
```

`npm run build` の出力先は `out/` ディレクトリです。Cloudflare Pages などの静的ホスティングにはこのディレクトリをそのままデプロイしてください。

## ディレクトリ構成

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx        # ルートレイアウト・メタデータ・viewport
│   │   ├── page.tsx          # トップページ（全セクション）
│   │   └── globals.css       # Tailwind 読み込み・グローバルスタイル
│   ├── components/
│   │   ├── InstagramButton.tsx   # Instagram への遷移ボタン
│   │   └── PlaceholderImage.tsx  # 画像 / プレースホルダ切替コンポーネント
│   └── lib/
│       └── constants.ts          # サイト名・料金・対象などの定数
├── public/
│   └── images/              # 差し替え用画像置き場（hero.jpg など）
├── next.config.mjs          # output: "export" / images.unoptimized: true
├── tailwind.config.ts       # カラーパレット・シャドウ・角丸の拡張
├── tsconfig.json            # パスエイリアス @/* → src/*
└── package.json
```

## コンテンツの編集

サイト本文の修正は次のファイルから行います。

- **サイト名・料金・対象年齢など**: `src/lib/constants.ts`
  - `INSTAGRAM_URL` を正式アカウントに差し替え
  - `SALON_INFO`（料金・定員・所要時間など）を一元管理
- **本文・セクション構成**: `src/app/page.tsx`
  - `recommendedFor` / `lessonPoints` / `steps` / `faqs` の各配列を編集
- **メタデータ（OGP・タイトル）**: `src/app/layout.tsx`

## 画像の差し替え

すべての画像は `PlaceholderImage` コンポーネント経由で描画され、`src` が未指定の場合はラベル付きプレースホルダになります。

1. `public/images/` に画像を配置（例: `hero.jpg`）
2. `src/app/page.tsx` の対応する `PlaceholderImage` の `src` 引数のコメントを外す

詳細は `public/images/README.md` を参照してください。

## ビルドと静的書き出しの注意

- `next.config.mjs` で `output: "export"` を指定しているため、`getServerSideProps` 相当の動的処理・API Routes は利用できません。
- `images.unoptimized: true` を設定しており、`next/image` の最適化サーバを介さず素の `<img>` 相当で出力されます。

## デプロイ

`npm run build` で生成された `out/` を任意の静的ホスティングへ配置します。Cloudflare Pages の場合：

- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `out`

## ライセンス

私用プロジェクト。ライセンス未指定。
