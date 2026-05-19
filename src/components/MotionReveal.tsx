"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentType, ReactNode } from "react";

type Tag =
  | "div"
  | "section"
  | "ul"
  | "ol"
  | "li"
  | "p"
  | "span"
  | "header"
  | "h1"
  | "h2"
  | "h3";

type Props = {
  children: ReactNode;
  className?: string;
  /** 開始までの遅延 (秒) */
  delay?: number;
  /** アニメーション継続時間 (秒) */
  duration?: number;
  /** "view": スクロールで画面内に入ったら / "load": マウント直後に */
  mode?: "view" | "load";
  /** ラップする要素 */
  as?: Tag;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  mode = "view",
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ComponentType<Record<string, unknown>>;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const trigger =
    mode === "load"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-10% 0px -10% 0px" },
        };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      variants={variants}
      {...trigger}
    >
      {children}
    </MotionTag>
  );
}
