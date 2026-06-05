"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Server, Cpu, Database, Cloud } from "lucide-react";

interface TrustedByProps {
  dict: any;
}

export default function TrustedBy({ dict }: TrustedByProps) {
  const logos = [
    { icon: Server, name: "Ontario Logistics" },
    { icon: ShieldCheck, name: "Brampton Invest" },
    { icon: Cpu, name: "AI Tech Group" },
    { icon: Database, name: "Global Supply" },
    { icon: Cloud, name: "Nordic Cloud" },
  ];

  return (
    <section className="py-12 border-y border-slate-900 bg-slate-950/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
          {dict.trusted.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Icon className="h-5 w-5 text-amber-500/80" />
                <span className="text-sm font-semibold tracking-wide">{logo.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
