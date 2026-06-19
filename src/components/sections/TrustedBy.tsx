"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Hammer, Activity, Briefcase, Users } from "lucide-react";

interface TrustedByProps {
  dict: any;
}

export default function TrustedBy({ dict }: TrustedByProps) {
  const logos = [
    { icon: ShieldCheck, name: "QC Entretien" },
    { icon: Hammer, name: "Triréno" },
    { icon: Activity, name: "Mmega Sports" },
    { icon: Briefcase, name: "Inter Solutions" },
    { icon: Users, name: "Ontario SMEs" },
  ];


  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50 relative z-10">
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
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors duration-300"
              >
                <Icon className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-semibold tracking-wide">{logo.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
