"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "../ui/SectionContainer";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface ContactSectionProps {
  dict: any;
  locale: string;
}

export default function ContactSection({ dict, locale }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate async submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <SectionContainer id="contact" bgType="light">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B163F] mb-4">
          {dict.contact.title}
        </h2>
        <div className="h-1 w-20 bg-[#F7931E] mx-auto rounded-full mb-6" />
        <p className="text-slate-600 text-base sm:text-lg">
          {dict.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Contact Info (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            {/* Address */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#0B163F]/10 transition-all duration-300 hover:scale-[1.01]">
              <div className="bg-[#F7931E]/10 text-[#F7931E] p-2.5 rounded-lg border border-[#F7931E]/20 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#0B163F] font-bold text-sm mb-1">{dict.contact.info.address}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {dict.footer.address}
                </p>
              </div>
            </Card>

            {/* Email */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#0B163F]/10 transition-all duration-300 hover:scale-[1.01]">
              <div className="bg-[#F7931E]/10 text-[#F7931E] p-2.5 rounded-lg border border-[#F7931E]/20 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#0B163F] font-bold text-sm mb-1">{dict.contact.info.email}</h4>
                <a href={`mailto:${dict.common.email}`} className="text-slate-600 hover:text-[#F7931E] text-xs transition-colors">
                  {dict.common.email}
                </a>
              </div>
            </Card>

            {/* Phone */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#0B163F]/10 transition-all duration-300 hover:scale-[1.01]">
              <div className="bg-[#F7931E]/10 text-[#F7931E] p-2.5 rounded-lg border border-[#F7931E]/20 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#0B163F] font-bold text-sm mb-1">{dict.contact.info.phone}</h4>
                <a href={`tel:${dict.common.phone.replace(/[^0-9+]/g, "")}`} className="text-slate-600 hover:text-[#F7931E] text-xs transition-colors">
                  {dict.common.phone}
                </a>
              </div>
            </Card>

            {/* Business Hours */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#0B163F]/10 transition-all duration-300 hover:scale-[1.01]">
              <div className="bg-[#F7931E]/10 text-[#F7931E] p-2.5 rounded-lg border border-[#F7931E]/20 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#0B163F] font-bold text-sm mb-1">{dict.contact.info.hours}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {dict.contact.info.hoursVal}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Form (7 Columns) */}
        <div className="lg:col-span-7">
          <Card hoverEffect={false} className="border-slate-200 bg-white p-6 sm:p-8 h-full flex flex-col justify-center shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-slate-700 text-xs font-semibold">
                    {dict.contact.form.name} <span className="text-[#F7931E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-[#F7931E] focus:ring-1 focus:ring-[#F7931E]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-slate-700 text-xs font-semibold">
                    {dict.contact.form.email} <span className="text-[#F7931E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-[#F7931E] focus:ring-1 focus:ring-[#F7931E]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-slate-700 text-xs font-semibold">
                    {dict.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-[#F7931E] focus:ring-1 focus:ring-[#F7931E]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition-colors"
                  />
                </div>

                {/* Subject / Help request selection */}
                <div className="flex flex-col gap-1.5 font-sans">
                  <label htmlFor="subject" className="text-slate-700 text-xs font-semibold">
                    {dict.contact.form.helpQuestion} <span className="text-[#F7931E]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 focus:border-[#F7931E] focus:ring-1 focus:ring-[#F7931E]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-slate-900 transition-colors cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      {locale === "fr" ? "Sélectionnez une option" : "Select an option"}
                    </option>
                    <option value="visibility">{dict.contact.form.helpOptions.visibility}</option>
                    <option value="operations">{dict.contact.form.helpOptions.operations}</option>
                    <option value="tools">{dict.contact.form.helpOptions.tools}</option>
                    <option value="training">{dict.contact.form.helpOptions.training}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-slate-700 text-xs font-semibold">
                  {dict.contact.form.message} <span className="text-[#F7931E]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white border border-slate-300 focus:border-[#F7931E] focus:ring-1 focus:ring-[#F7931E]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 resize-none transition-colors"
                  required
                />
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs rounded-lg"
                >
                  <CheckCircle className="h-4.5 w-4.5 shrink-0" />
                  <span>{dict.contact.form.success}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-600 text-xs rounded-lg"
                >
                  <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                  <span>{dict.contact.form.error}</span>
                </motion.div>
              )}

              {/* Submit Button & Response Time */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  isLoading={status === "loading"}
                  className="w-full gap-2 text-sm py-2.5 shadow-md shadow-[#F7931E]/10"
                >
                  <span>{dict.common.cta.submit}</span>
                  <Send className="h-4 w-4" />
                </Button>
                
                <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-500 text-[11px]">
                  <Clock className="h-3.5 w-3.5 text-[#F7931E]/80" />
                  <span>{dict.contact.form.responseTime}</span>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
