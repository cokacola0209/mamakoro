import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_NAME_JA, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME}−${SITE_NAME_JA}−｜福岡県筑紫野市の親子サロン`,
  description:
    "福岡県筑紫野市の親子サロン「mamakoro」。生後2ヶ月〜1歳までのお子様をお持ちのママ向けに、産後ダイエットとママ同士の交流を少人数で行っています。",
  openGraph: {
    title: `${SITE_NAME}−${SITE_NAME_JA}−`,
    description: SITE_TAGLINE,
    locale: "ja_JP",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDF6EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
