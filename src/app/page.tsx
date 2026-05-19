import { InstagramButton } from "@/components/InstagramButton";
import { MotionReveal } from "@/components/MotionReveal";
import { MotionStagger, MotionStaggerItem } from "@/components/MotionStagger";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SALON_INFO,
  SITE_NAME,
  SITE_NAME_JA,
} from "@/lib/constants";

// --- セクション小物 ---

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <MotionStagger className="mb-6 text-center sm:mb-10" stagger={0.1}>
      {eyebrow && (
        <MotionStaggerItem>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-coral-400">
            {eyebrow}
          </p>
        </MotionStaggerItem>
      )}
      <MotionStaggerItem>
        <h2 className="text-2xl font-bold leading-snug text-cocoa-700 sm:text-3xl">
          {title}
        </h2>
      </MotionStaggerItem>
      {description && (
        <MotionStaggerItem>
          <p className="mt-3 text-sm leading-relaxed text-cocoa-500 sm:text-base">
            {description}
          </p>
        </MotionStaggerItem>
      )}
    </MotionStagger>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-10 sm:px-6 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

// --- データ ---

const recommendedFor = [
  { icon: "🌷", text: "産後の体型が気になる" },
  { icon: "👶", text: "赤ちゃんと一緒に外出したい" },
  { icon: "☕️", text: "同じ時期のママと話したい" },
  { icon: "🤸‍♀️", text: "無理なく体を動かしたい" },
  { icon: "🏡", text: "近場で安心できる場所を探している" },
];

const lessonPoints = [
  {
    title: "産後の体づくり",
    description:
      "産後の体に寄り添い、無理のないペースで少しずつ動かしていきます。",
  },
  {
    title: "軽いエクササイズ",
    description:
      "ストレッチや軽い運動が中心。運動が苦手な方でも安心です。",
  },
  {
    title: "ママ同士の交流",
    description:
      "同じ時期に子育てをしているママと、自然な雰囲気でおしゃべりできます。",
  },
  {
    title: "赤ちゃんと一緒に",
    description:
      "赤ちゃんを連れたまま参加OK。泣いても、抱っこしながらでも大丈夫です。",
  },
];

const steps = [
  {
    no: "01",
    title: "Instagramを見る",
    description: "活動の様子や日程をInstagramでご確認ください。",
  },
  {
    no: "02",
    title: "DMで希望日を送る",
    description:
      "気になる日が見つかったら、Instagram DMでお気軽にメッセージください。",
  },
  {
    no: "03",
    title: "予約確定",
    description: "DMで日程・持ち物・住所のご案内をお送りします。",
  },
  {
    no: "04",
    title: "当日参加",
    description: "赤ちゃんと一緒に、ゆったりした気持ちでお越しください。",
  },
];

const faqs = [
  {
    q: "赤ちゃん連れでも大丈夫ですか?",
    a: "もちろん大丈夫です。生後2ヶ月〜1歳までのお子様と一緒にご参加いただける会です。途中で泣いてしまっても、抱っこしながらでも、気にせず過ごしてくださいね。",
  },
  {
    q: "運動が苦手でも参加できますか?",
    a: "はい、産後の体に寄り添ったゆるやかな内容です。きつい運動ではなく、ストレッチや軽く体を動かす程度なので、運動が苦手な方も安心してご参加ください。",
  },
  {
    q: "持ち物は何が必要ですか?",
    a: "動きやすい服装、飲み物、赤ちゃんのお世話に必要なもの（おむつ・ミルクなど）をお持ちください。詳しい持ち物はInstagram DMでもご案内しています。",
  },
  {
    q: "予約はどうやってすればいいですか?",
    a: "Instagram DMから希望日をお送りください。日程確定後、当日のご案内をお送りします。",
  },
  {
    q: "住所はどこで確認できますか?",
    a: "ご予約確定後、Instagram DMで詳細な住所をお伝えしています。プライバシー保護のため、Webサイト上には住所を掲載しておりません。",
  },
  {
    q: "駐車場はありますか?",
    a: "はい。駐車場４台完備のため、お車でもお越しいただけます。",
  },
];

// --- ページ本体 ---

export default function HomePage() {
  return (
    <main className="bg-cream-50 text-cocoa-700">
      {/* ============ 1. ファーストビュー ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-peach-100/60 to-cream-50" />
        <div className="absolute inset-0 -z-10 bg-soft-dots opacity-60" />

        <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
          {/* ロゴ・サイト名 */}
          <MotionReveal mode="load" delay={0} duration={0.6}>
            <div className="mb-5 flex items-center justify-center gap-2 text-coral-400">
              <span className="inline-block h-2 w-2 rounded-full bg-coral-300" />
              <p className="text-xs font-semibold tracking-[0.25em]">
                CHIKUSHINO・FUKUOKA
              </p>
              <span className="inline-block h-2 w-2 rounded-full bg-coral-300" />
            </div>
          </MotionReveal>

          <MotionReveal mode="load" delay={0.1} duration={0.7}>
            <h1 className="text-center">
              <span className="block text-4xl font-bold tracking-tight text-cocoa-700 sm:text-5xl">
                {SITE_NAME}
              </span>
              <span className="mt-1 block text-sm font-medium tracking-[0.3em] text-coral-400 sm:text-base">
                −{SITE_NAME_JA}−
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal mode="load" delay={0.25} duration={0.7}>
            <p className="mt-5 text-center text-lg font-semibold leading-relaxed text-cocoa-700 sm:text-2xl">
              産後ママのための、
              <br className="sm:hidden" />
              ほっとできる親子サロン
            </p>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-cocoa-500 sm:text-base">
              赤ちゃんと一緒に、ゆるやかに体を動かして、
              <br className="hidden sm:block" />
              同じ時期のママと、やさしい時間を過ごしませんか。
            </p>
          </MotionReveal>

          {/* 対象バッジ */}
          <MotionReveal mode="load" delay={0.4} duration={0.6}>
            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-coral-500 shadow-soft sm:text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral-400" />
                対象：生後{SALON_INFO.targetAgeMinMonth}ヶ月〜
                {SALON_INFO.targetAgeMaxYear}歳までのお子さまを子育て中のママ
              </span>
            </div>
          </MotionReveal>

          {/* ヒーロー画像 */}
          <MotionReveal mode="load" delay={0.5} duration={0.8} className="mt-6 sm:mt-10">
            <PlaceholderImage
              label="活動中の写真"
              alt="mamakoroの活動風景"
              aspect="wide"
              rounded="4xl"
              priority
              src="/images/hero-activity.jpg"
            />
          </MotionReveal>

          {/* CTA */}
          <MotionReveal mode="load" delay={0.7} duration={0.6}>
            <div className="mt-6 flex flex-col items-center gap-3">
              <InstagramButton
                label="Instagramで予約・相談する"
                size="lg"
                className="w-full max-w-sm"
              />
              <p className="text-xs text-cocoa-400">
                DMでお気軽にメッセージください
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ============ 2. mamakoroについて ============ */}
      <Section id="about" className="bg-white">
        <SectionTitle
          eyebrow="ABOUT"
          title="mamakoroってどんな場所?"
          description="産後のママが、肩の力を抜いて過ごせる居場所を目指しています。"
        />

        <div className="grid gap-5 sm:gap-8">
          <MotionReveal duration={0.7}>
            <PlaceholderImage
              label="親子サロンの様子"
              alt="親子サロンでママと赤ちゃんが過ごしている様子"
              aspect="video"
              // src="/images/about.jpg"
            />
          </MotionReveal>

          <MotionStagger className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "赤ちゃんと楽しむふれあい遊び",
                body: "赤ちゃんとのコミュニケーションを大切にしながら、親子で楽しめるやさしいふれあい遊びを行います。",
              },
              {
                title: "産後の体を整えるトレーニング",
                body: "産後に落ちた筋力を取り戻す優しいエクササイズ・トレーニングを行い、産後の体力づくりやリフレッシュを緩やかにサポートします。",
              },
              {
                title: "お茶しながら話せるママ会",
                body: "お茶を飲みながら、育児のことや日々のことを気軽に話せる空間をお過ごしください。",
              },
              {
                title: "少人数で安心できる居場所",
                body: `最大${SALON_INFO.maxCapacity}名さままでの少人数制で、アットホームな雰囲気を大切にしています。`,
              },
            ].map((item) => (
              <MotionStaggerItem
                key={item.title}
                className="rounded-3xl bg-cream-100 p-4 shadow-soft sm:p-6"
              >
                <h3 className="text-base font-bold text-cocoa-700 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-500">
                  {item.body}
                </p>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </Section>

      {/* ============ 3. こんな方におすすめ ============ */}
      <Section id="for-you" className="bg-cream-100">
        <SectionTitle
          eyebrow="FOR YOU"
          title="こんな方におすすめです"
          description="ひとつでも当てはまったら、お気軽にお越しください。"
        />

        <MotionStagger as="ul" className="grid gap-3 sm:grid-cols-2">
          {recommendedFor.map((item) => (
            <MotionStaggerItem
              key={item.text}
              as="li"
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft sm:px-5 sm:py-4"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peach-100 text-lg"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium leading-relaxed text-cocoa-700 sm:text-base">
                {item.text}
              </span>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Section>

      {/* ============ 4. レッスン内容 ============ */}
      <Section id="lesson" className="bg-white">
        <SectionTitle
          eyebrow="LESSON"
          title="レッスンの内容"
          description="無理なく、楽しく。産後の体に寄り添った内容です。"
        />

        <div className="grid gap-5 sm:gap-8">
          <MotionReveal duration={0.7}>
            <PlaceholderImage
              label="ママ同士の交流イメージ"
              alt="ママ同士が交流しているイメージ写真"
              aspect="wide"
              // src="/images/lesson.jpg"
            />
          </MotionReveal>

          <MotionStagger className="grid gap-3 sm:grid-cols-2">
            {lessonPoints.map((item, i) => (
              <MotionStaggerItem
                key={item.title}
                className="rounded-3xl border border-cream-200 bg-cream-50 p-4 shadow-soft sm:p-6"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-200 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-bold text-cocoa-700 sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-cocoa-500">
                  {item.description}
                </p>
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <MotionReveal delay={0.1}>
            <p className="rounded-2xl bg-peach-100/60 px-4 py-3 text-center text-xs leading-relaxed text-cocoa-500 sm:px-5 sm:py-4 sm:text-sm">
              ※ 効果には個人差があります。痩身や治療を目的としたものではなく、
              気分転換や交流のきっかけとしてご活用ください。
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* ============ 5. 料金・対象 ============ */}
      <Section id="price" className="bg-coral-100/40">
        <SectionTitle
          eyebrow="PRICE"
          title="料金・対象"
          description="シンプルでわかりやすい料金です。"
        />

        <MotionReveal className="rounded-4xl bg-white p-5 shadow-soft-lg sm:p-10" duration={0.7}>
          <dl className="divide-y divide-cream-200">
            {[
              {
                label: "1回あたりの時間",
                value: `約${SALON_INFO.durationMin}分`,
              },
              {
                label: "料金",
                value: `${SALON_INFO.priceYen.toLocaleString()}円 / 回`,
              },
              {
                label: "定員",
                value: `最大${SALON_INFO.maxCapacity}名さま`,
              },
              {
                label: "対象",
                value: `生後${SALON_INFO.targetAgeMinMonth}ヶ月〜${SALON_INFO.targetAgeMaxYear}歳までのお子さまを子育て中のママ`,
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-5"
              >
                <dt className="text-xs font-semibold tracking-wider text-coral-400 sm:text-sm">
                  {row.label}
                </dt>
                <dd className="text-base font-bold text-cocoa-700 sm:text-lg">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </MotionReveal>
      </Section>

      {/* ============ 6. トレーナー紹介 ============ */}
      <Section id="trainer" className="bg-white">
        <SectionTitle
          eyebrow="TRAINER"
          title="運営する人について"
          description="同じく子育て中のママだから、わかること。"
        />

        <MotionReveal className="rounded-4xl bg-cream-100 p-5 shadow-soft sm:p-8" duration={0.7}>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-8">
            <div className="w-40 shrink-0 sm:w-48">
              <PlaceholderImage
                label="トレーナー紹介写真"
                alt="トレーナーの紹介写真"
                aspect="square"
                rounded="full"
                // src="/images/trainer.jpg"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] text-coral-400">
                MAMAKORO TRAINER
              </p>
              <h3 className="mt-1 text-xl font-bold text-cocoa-700 sm:text-2xl">
                生後10ヶ月の子どもを持つ
                <br className="sm:hidden" />
                保育士・トレーナー
              </h3>
              <p className="mt-1 text-xs text-cocoa-400">※2026年5月現在</p>

              <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                <li className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-coral-500 shadow-soft">
                  保育士資格
                </li>
                <li className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-coral-500 shadow-soft">
                  スポーツメンタルトレーナー
                </li>
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-cocoa-500 sm:text-base">
                産後、自分の体や気持ちの変化に戸惑った経験から、
                「同じ時期のママが気軽に集まれる場所をつくりたい」という思いで
                mamakoroを始めました。
                <br />
                <br />
                赤ちゃんと一緒に、無理のないペースで体を動かしたり、
                ふっとひと息つける時間を、一緒に過ごせたら嬉しいです。
              </p>
            </div>
          </div>
        </MotionReveal>
      </Section>

      {/* ============ 7. 会場について ============ */}
      <Section id="venue" className="bg-cream-100">
        <SectionTitle
          eyebrow="VENUE"
          title="会場について"
          description="アットホームな空間で開催しています。"
        />

        <MotionReveal className="rounded-3xl bg-white p-6 text-center shadow-soft sm:p-8" duration={0.7}>
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-peach-100 text-coral-400 shadow-soft"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-[0.2em] text-coral-400">
            エリア
          </p>
          <p className="mt-1.5 text-lg font-bold leading-snug text-cocoa-700 sm:text-xl">
            福岡県 筑紫野市 塔原東
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cocoa-500">
            このエリアで開催しています。
            <br className="sm:hidden" />
            詳しい場所は、ご予約・お問い合わせ後に個別にご案内します。
          </p>
          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-100 px-4 py-2 text-xs font-semibold text-coral-500 shadow-soft sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M5 17h14M6 17l1.5-5h9L18 17M5 17v2h2v-2M17 17v2h2v-2" />
                <circle cx="7.5" cy="14.5" r="0.6" fill="currentColor" stroke="none" />
                <circle cx="16.5" cy="14.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
              駐車場４台完備のため、お車でもお越しいただけます。
            </span>
          </div>
        </MotionReveal>
      </Section>

      {/* ============ 8. 参加の流れ ============ */}
      <Section id="flow" className="bg-white">
        <SectionTitle
          eyebrow="FLOW"
          title="参加までの流れ"
          description="シンプルな4ステップで参加できます。"
        />

        <MotionStagger as="ol" className="grid gap-3 sm:gap-5" stagger={0.1}>
          {steps.map((step) => (
            <MotionStaggerItem
              key={step.no}
              as="li"
              className="flex gap-3 rounded-3xl bg-cream-50 p-4 shadow-soft sm:gap-6 sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral-300 to-peach-300 text-sm font-bold text-white shadow-soft sm:h-14 sm:w-14 sm:text-base">
                {step.no}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-bold text-cocoa-700 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-cocoa-500">
                  {step.description}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.15} className="mt-6 flex justify-center sm:mt-8">
          <InstagramButton
            label="Instagram DMを開く"
            size="md"
            variant="outline"
          />
        </MotionReveal>
      </Section>

      {/* ============ 9. よくある質問 ============ */}
      <Section id="faq" className="bg-cream-100">
        <SectionTitle
          eyebrow="FAQ"
          title="よくあるご質問"
          description="気になることがあれば、お気軽にDMでもお尋ねください。"
        />

        <MotionStagger className="space-y-2.5 sm:space-y-4" stagger={0.06}>
          {faqs.map((item) => (
            <MotionStaggerItem key={item.q}>
              <details
                className="group rounded-2xl bg-white p-4 shadow-soft transition open:shadow-soft-lg sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div className="flex flex-1 items-start gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral-200 text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      Q
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-cocoa-700 sm:text-base">
                      {item.q}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 h-5 w-5 shrink-0 text-coral-400 transition group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="faq-body mt-3 flex items-start gap-3 border-t border-cream-200 pt-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-peach-200 text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <p className="flex-1 text-sm leading-relaxed text-cocoa-500">
                    {item.a}
                  </p>
                </div>
              </details>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Section>

      {/* ============ 10. 最後のCTA ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral-200 via-peach-200 to-coral-300">
        <div className="absolute inset-0 bg-soft-dots opacity-40" />
        <div className="relative mx-auto w-full max-w-2xl px-5 py-12 text-center sm:px-6 sm:py-24">
          <MotionStagger stagger={0.1}>
            <MotionStaggerItem>
              <p className="text-xs font-semibold tracking-[0.25em] text-white/90">
                COME JOIN US
              </p>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-white drop-shadow-sm sm:text-3xl">
                まずはお気軽に、
                <br />
                Instagramを覗いてみてください
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                「行ってみたい」「ちょっと相談したい」だけでも大丈夫です。
                DMでお気軽にメッセージください。
              </p>
            </MotionStaggerItem>
            <MotionStaggerItem className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
              <InstagramButton
                label="Instagramで予約・相談する"
                size="lg"
                variant="outline"
                className="w-full max-w-sm"
              />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagramアカウント ${INSTAGRAM_HANDLE} を新しいタブで開く`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
              >
                <span className="tracking-wide">Instagram：{INSTAGRAM_HANDLE}</span>
              </a>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </section>

      {/* ============ フッター ============ */}
      <footer className="bg-cocoa-700 px-5 py-8 text-center text-cream-100 sm:px-6 sm:py-10">
        <p className="text-base font-bold tracking-wide">
          {SITE_NAME}
          <span className="ml-1 text-xs font-medium tracking-[0.2em] text-cream-200">
            −{SITE_NAME_JA}−
          </span>
        </p>
        <p className="mt-2 text-xs text-cream-200">
          {SALON_INFO.area} ／ 産後ママのための親子サロン
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs text-cream-200 underline-offset-4 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          Instagramはこちら
        </a>
        <p className="mt-6 text-[10px] text-cream-200/70">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </footer>
    </main>
  );
}
