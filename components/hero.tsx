"use client";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("app.home_section");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-tight tracking-tight">
                Eduardo
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                Méndez
              </h2>
            </div>

            {/* Roles */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-accent font-medium">
                {t("roles.paragraph_1")}
              </p>
              <p className="text-lg sm:text-xl text-accent-secondary font-medium">
                {t("roles.paragraph_2")}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="glassmorphic px-8 py-4 bg-accent/20 text-accent font-semibold rounded-xl hover:bg-accent/30 transition-all duration-300 border border-accent/30 hover:border-accent/60 hover:shadow-lg hover:neon-glow group overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {t("buttons.explore_work")}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="glassmorphic px-8 py-4 bg-accent-secondary/10 text-accent-secondary font-semibold rounded-xl hover:bg-accent-secondary/20 transition-all duration-300 border border-accent-secondary/30 hover:border-accent-secondary/60 hover:shadow-lg hover:neon-glow-purple"
              >
                {t("buttons.get_in_touch")}
              </button>
            </div>
          </div>

          {/* Right: Interactive Glass Frame */}
          <div className="relative h-125 lg:h-150 hidden lg:flex items-center justify-center">
            {/* Ambient glow behind the frame */}
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 bg-linear-to-br from-accent via-transparent to-accent-secondary"></div>

            {/* Main Glass Container */}
            <div className="relative w-full h-full glassmorphic rounded-3xl border border-accent/20 overflow-hidden shadow-2xl flex flex-col items-center justify-center gap-6 p-8">
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent/50"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent-secondary/50"></div>

              {/* Avatar/Icon Grid */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {["Next.js", "Python", "React"].map((tech) => (
                  <div
                    key={tech}
                    className="glassmorphic p-4 rounded-2xl border border-accent/20 flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-xs font-semibold text-accent group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="space-y-3 text-center">
                <div className="text-sm text-muted-foreground">
                  <span className="text-accent font-bold">2+</span>{" "}
                  {t("stats.experience")}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-accent-secondary font-bold">3+</span>{" "}
                  {t("stats.cant_projects")}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
