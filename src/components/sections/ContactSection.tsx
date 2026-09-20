"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "Odoo Implementation",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          honeypot: formData.website_hp,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "Odoo Implementation",
        message: "",
        website_hp: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          (locale === "fr"
            ? "Impossible d'envoyer votre demande. Veuillez réessayer ou nous contacter par courriel."
            : "Failed to send request. Please try again or reach out via email.")
      );
    }
  };

  const servicesOptions = [
    { value: "Odoo Implementation", label: "Odoo Implementation" },
    { value: "Web Development", label: locale === "fr" ? "Développement Web" : "Web Development" },
    { value: "Automation & AI", label: locale === "fr" ? "Automatisation & IA" : "Automation & AI" },
    { value: "Business Applications", label: locale === "fr" ? "Applications Métiers" : "Business Applications" },
    { value: "Digital Marketing", label: locale === "fr" ? "Marketing Digital" : "Digital Marketing" },
    { value: "Training", label: locale === "fr" ? "Formations" : "Training" },
    { value: "Other", label: locale === "fr" ? "Autre demande" : "Other" },
  ];

  return (
    <SectionContainer id="contact" bgType="light" className="py-20 border-t border-slate-200">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D2140]/15 bg-[#1D2140]/5 text-[#1D2140] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="h-3.5 w-3.5 text-[#F39200]" />
          <span>{locale === "fr" ? "Échangeons sur Votre Projet" : "Get in Touch"}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D2140] mb-4">
          {dict.contact.title}
        </h2>
        <div className="h-1 w-20 bg-[#F39200] mx-auto rounded-full mb-6" />
        <p className="text-slate-600 text-base sm:text-lg">
          {dict.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Contact Info (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {/* Email */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#1D2140]/20 transition-all">
              <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl border border-[#F39200]/20 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#1D2140] font-bold text-sm mb-1">{dict.contact.info.email}</h4>
                <a href={`mailto:${dict.common.email}`} className="text-slate-600 hover:text-[#F39200] text-xs font-medium transition-colors">
                  {dict.common.email}
                </a>
              </div>
            </Card>

            {/* Location */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#1D2140]/20 transition-all">
              <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl border border-[#F39200]/20 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#1D2140] font-bold text-sm mb-1">{dict.contact.info.address}</h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  {dict.footer.address || "Ontario, Canada"}
                </p>
              </div>
            </Card>

            {/* Business Hours */}
            <Card hoverEffect={true} className="border-slate-200 bg-white p-5 flex gap-4 items-start hover:border-[#1D2140]/20 transition-all">
              <div className="bg-[#F39200]/10 text-[#F39200] p-3 rounded-xl border border-[#F39200]/20 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[#1D2140] font-bold text-sm mb-1">{dict.contact.info.hours}</h4>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  {dict.contact.info.hoursVal}
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-[#1D2140] text-white p-6 rounded-xl space-y-2 border border-white/10 shadow-sm">
            <h4 className="text-sm font-bold text-[#F39200] uppercase tracking-wider">
              {locale === "fr" ? "Engagement Réactivité" : "Quick Response"}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {dict.contact.form.responseTime}
            </p>
          </div>
        </div>

        {/* Real Functional Form (8 Columns) */}
        <div className="lg:col-span-8">
          <Card hoverEffect={false} className="border-slate-200 bg-white p-6 sm:p-8 h-full flex flex-col justify-center shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Do not fill this</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-slate-700 text-xs font-bold">
                    {dict.contact.form.firstName} <span className="text-[#F39200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-slate-700 text-xs font-bold">
                    {dict.contact.form.lastName} <span className="text-[#F39200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-slate-700 text-xs font-bold">
                  {dict.contact.form.email} <span className="text-[#F39200]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-colors"
                  required
                />
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-slate-700 text-xs font-bold">
                    {dict.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-slate-700 text-xs font-bold">
                    {dict.contact.form.service} <span className="text-[#F39200]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 transition-colors cursor-pointer"
                    required
                  >
                    {servicesOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-slate-700 text-xs font-bold">
                  {dict.contact.form.message} <span className="text-[#F39200]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-50 border border-slate-300 focus:border-[#F39200] focus:ring-1 focus:ring-[#F39200]/30 focus:outline-none rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 resize-none transition-colors"
                  required
                />
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>{dict.contact.form.success}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 p-4 bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm rounded-lg"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                  <span>{errorMessage || dict.contact.form.error}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  isLoading={status === "loading"}
                  className="w-full gap-2 text-sm font-bold uppercase tracking-wider py-3 shadow-md shadow-[#F39200]/20 hover:scale-[1.01]"
                >
                  <span>{dict.contact.form.submit}</span>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
