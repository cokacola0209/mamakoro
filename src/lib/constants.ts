// サイト全体で使う定数
// Instagramや料金など、後で差し替える可能性のある値はここに集約

export const SITE_NAME = "mamakoro";
export const SITE_NAME_JA = "ママコロ";
export const SITE_TAGLINE = "産後ママのための、ほっとできる親子サロン";

// Instagram URL（後で正式アカウントに差し替え）
export const INSTAGRAM_URL = "https://www.instagram.com/";

// サロン情報
export const SALON_INFO = {
  area: "福岡県筑紫野市",
  priceYen: 1000,
  durationMin: 60,
  maxCapacity: 4,
  targetAgeMinMonth: 2,
  targetAgeMaxYear: 1,
} as const;
