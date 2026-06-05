"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";

interface TestimonialsSectionProps {
  dict: any;
  locale: string;
}

export default function TestimonialsSection({ dict, locale }: TestimonialsSectionProps) {
  return (
    <SectionContainer id="testimonials" bgType="light">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {dict.testimonials.title}
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-base sm:text-lg">
          {dict.testimonials.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card
              hoverEffect={true}
              className="h-full border-slate-800 bg-slate-900/50 p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Quote mark ornament */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-slate-800/40 pointer-events-none" />

              <div>
                <p className="text-slate-300 italic text-sm leading-relaxed mb-6 relative z-10">
                  "{testimonial.text[locale as "en" | "fr"]}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                {/* Initial Avatar */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-1.5 font-semibold">
                    {testimonial.role[locale as "en" | "fr"]} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
