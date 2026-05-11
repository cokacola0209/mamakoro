import { INSTAGRAM_URL } from "@/lib/constants";

type Props = {
  /** 表示テキスト */
  label?: string;
  /** ボタンサイズ */
  size?: "sm" | "md" | "lg";
  /** 装飾バリアント */
  variant?: "primary" | "outline";
  className?: string;
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

export function InstagramButton({
  label = "Instagramで予約・相談する",
  size = "md",
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 ease-out shadow-soft active:scale-[0.98] hover:-translate-y-0.5";

  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-r from-coral-300 via-coral-400 to-peach-300 text-white hover:shadow-soft-lg"
      : "bg-white text-coral-500 border border-coral-200 hover:bg-coral-100/60";

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}（Instagramを新しいタブで開く）`}
      className={`${base} ${sizeClass[size]} ${variantClass} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
