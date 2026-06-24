"use client";

import { useTranslations } from "next-intl";

interface TechCategory {
  title: string;
  description: string;
  technologies: string[];
}

export function TechStack() {
  const t = useTranslations("app.tech_section");

  const coreCompetencies: TechCategory[] = [
    {
      title: t("categories.frontend.title"),
      description: t("categories.frontend.description"),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: t("categories.backend.title"),
      description: t("categories.backend.description"),
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "Express.js",
        "Spring Boot",
        "FastAPI",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: t("categories.devops.title"),
      description: t("categories.devops.description"),
      technologies: ["Docker", "Git", "Linux"],
    },
    {
      title: t("categories.mobile.title"),
      description: t("categories.mobile.description"),
      technologies: ["Kotlin", "Flutter"],
    },
    {
      title: t("categories.ai.title"),
      description: t("categories.ai.description"),
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain"],
    },
  ];
  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            {t("core_competencies")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("paragraph")}
          </p>
        </div>

        {/* Vertical Timeline / List */}
        <div className="space-y-8">
          {coreCompetencies.map((category, index) => (
            <div key={category.title} className="group">
              {/* Timeline connector */}
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col items-center relative">
                  {/* Circle */}
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-background z-10 mt-2 shrink-0"></div>

                  {/* Vertical line */}
                  {index !== coreCompetencies.length - 1 && (
                    <div className="w-0.5 absolute top-6 bottom-0 bg-linear-to-b from-accent/60 to-accent/20"></div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 pb-8">
                  <div className="group/card hover:bg-accent/5 p-6 rounded-xl border border-accent/20 transition-all duration-300 hover:border-accent/50">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover/card:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
