import Image from "next/image";

type Props = {
  /** 画像差し替え時に使うファイルパス（public配下） */
  src?: string;
  /** 用途ラベル（活動中の写真／会場写真 など） */
  label: string;
  /** alt属性 */
  alt: string;
  /** アスペクト比（tailwindクラス） */
  aspect?: "square" | "video" | "portrait" | "wide";
  /** 角丸サイズ */
  rounded?: "2xl" | "3xl" | "4xl" | "full";
  /** 追加クラス */
  className?: string;
  priority?: boolean;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
};

const roundedClass: Record<NonNullable<Props["rounded"]>, string> = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  full: "rounded-full",
};

/**
 * 画像プレースホルダー。
 * src が指定されていれば画像を表示、なければラベル付きの枠を表示。
 * 後から public/images/ に画像を置いて src を渡すだけで差し替え可能。
 */
export function PlaceholderImage({
  src,
  label,
  alt,
  aspect = "video",
  rounded = "3xl",
  className = "",
  priority = false,
}: Props) {
  const wrapperClasses = `relative w-full overflow-hidden ${aspectClass[aspect]} ${roundedClass[rounded]} ${className}`;

  if (src) {
    return (
      <div className={wrapperClasses}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`${wrapperClasses} bg-gradient-to-br from-cream-100 via-peach-100 to-coral-100 shadow-soft`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 text-2xl shadow-soft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-coral-400"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2" />
            <path d="m21 17-5-5-9 9" />
          </svg>
        </div>
        <p className="text-sm font-medium text-cocoa-600">{label}</p>
        <p className="mt-1 text-xs text-cocoa-400">画像は後ほど差し替え予定</p>
      </div>
    </div>
  );
}
