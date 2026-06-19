"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface HeroSectionProps {
  dict: any;
  locale: string;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative h-[88vh] lg:h-screen min-h-[650px] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-900">
      {/* Background image container with slow zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: "url('/images/hero/hero-bg.png')",
          }}
        />
      </div>

      {/* Dark overlay: rgba(0,0,0,0.45) for image visibility + text readability */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Tech grid overlay for added depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 opacity-30 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        {/* Animated Translucent Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md shadow-inner"
        >
          <Sparkles className="h-4.5 w-4.5 text-[#F7931E] animate-pulse" />
          <span>{dict.hero.badge}</span>
        </motion.div>

        {/* Title in pure white */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 max-w-3xl mx-auto drop-shadow-md"
        >
          {dict.hero.title}
        </motion.h1>

        {/* Subtitle in transparent white/slate-200 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary CTA: Brand Orange */}
          <Link href={`/${locale}/contact`} className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto gap-2.5 shadow-lg shadow-[#F7931E]/20 hover:shadow-[#F7931E]/30"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          {/* Secondary CTA: Brand Navy Blue */}
          <Link href={`/${locale}/services`} className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto border border-white/10 hover:border-white/20 shadow-lg shadow-black/10"
            >
              {dict.hero.ctaSecondary}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
