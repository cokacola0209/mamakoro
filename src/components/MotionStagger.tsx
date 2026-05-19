"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentType, ReactNode } from "react";

type Tag = "div" | "ul" | "ol" | "section";
type ItemTag = "div" | "li" | "article";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** 子要素の発火間隔 (秒) */
  stagger?: number;
  /** 親が表示開始するまでの遅延 (秒) */
  delayChildren?: number;
  /** "view": スクロールで画面内に入ったら / "load": マウント直後に */
  mode?: "view" | "load";
  /** ラップする要素 */
  as?: Tag;
};

export function MotionStagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  mode = "view",
  as = "div",
}: StaggerProps) {
  const MotionTag = motion[as] as ComponentType<Record<string, unknown>>;

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
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

type ItemProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  as?: ItemTag;
};

export function MotionStaggerItem({
  children,
  className,
  duration = 0.5,
  as = "div",
}: ItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ComponentType<Record<string, unknown>>;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
