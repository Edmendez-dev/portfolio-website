"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("app.contact_section");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Command Console Style Container */}
        <div className="glassmorphic rounded-2xl border border-accent/30 overflow-hidden shadow-2xl neon-glow">
          {/* Console Header */}
          <div className="bg-linear-to-r from-accent/10 to-accent-secondary/10 border-b border-accent/20 px-6 py-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              {t("span_console")}
            </span>
          </div>

          {/* Console Content */}
          <div className="p-8 sm:p-12">
            <div className="mb-8 font-mono text-sm text-accent">
              <span className="text-accent-secondary">{">>"}</span>{" "}
              {t("init_contact")}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-muted-foreground tracking-widest"
                >
                  {t("name_label")}
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-transparent border-b border-accent/30 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300 font-mono text-sm"
                    placeholder="Eduardo Méndez"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-accent to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-muted-foreground tracking-widest"
                >
                  {t("email_label")}
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-transparent border-b border-accent/30 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300 font-mono text-sm"
                    placeholder="eduardo@example.com"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-accent to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-muted-foreground tracking-widest"
                >
                  {t("message_label")}
                </label>
                <div className="relative group">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border-b border-accent/30 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-300 font-mono text-sm resize-none"
                    placeholder={t("message_placeholder")}
                  ></textarea>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-accent to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button
                  type="submit"
                  className="group relative px-8 py-3 bg-accent/20 border border-accent/50 rounded-lg text-accent font-mono text-sm font-medium hover:bg-accent/30 hover:border-accent transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">
                    {submitted ? t("message_sent") : t("send_message")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  type="reset"
                  className="px-6 py-3 border border-muted/30 rounded-lg text-muted-foreground font-mono text-sm hover:border-muted hover:text-foreground transition-all duration-300"
                >
                  {t("clear")}
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-accent/20">
              <div className="font-mono text-xs text-accent mb-6">
                {t("connect")} &nbsp;
                <span className="text-accent-secondary">{t("direct")}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:eduardodev00@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:eduardodev00@gmail.com";
                  }}
                  className="group glassmorphic p-4 rounded-lg border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-accent group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground">
                        {t("email_label_clean")}
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        eduardodev00@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/Edmendez-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glassmorphic p-4 rounded-lg border border-accent-secondary/20 hover:border-accent-secondary/50 hover:bg-accent-secondary/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-accent-secondary group-hover:text-accent-secondary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground">
                        GitHub
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        @Edmendez-dev
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
