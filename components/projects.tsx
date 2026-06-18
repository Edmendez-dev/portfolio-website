"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  size: "large" | "medium" | "small";
}

export function Projects() {
  const t = useTranslations("app.projects_section");

  const projects: Project[] = [
    {
      id: "1",
      title: t("projects.project_1.title"),
      description: t("projects.project_1.description"),
      tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
      image: "/images/project_vidwhisper.webp",
      github: "https://github.com/Edmendez-dev/vidwhisper-engine",
      demo: "https://demo.com",
      size: "large",
    },
    {
      id: "2",
      title: t("projects.project_2.title"),
      description: t("projects.project_2.description"),
      tech: ["React", "MongoDB", "Express"],
      image: "/images/project_transporteCantaderio.webp",
      github: "https://github.com",
      demo: "https://demo.com",
      size: "small",
    },
    {
      id: "3",
      title: t("projects.project_3.title"),
      description: t("projects.project_3.description"),
      tech: ["Next.js", "React", "Node.js", "Python"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      size: "medium",
    },
    {
      id: "4",
      title: t("projects.project_4.title"),
      description: t("projects.project_4.description"),
      tech: ["Node.js", "Express", "NGINX-RTMP", "Next.js", "PostgreSQL"],
      image: "/images/project_tabernaculolvd.webp",
      github: "https://github.com",
      demo: "https://demo.com",
      size: "medium",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("paragraph")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {/* Large Card (2x2) */}
          <div className="md:col-span-2 md:row-span-2 group relative glassmorphic rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:neon-glow cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent"></div>

            <div className="relative h-full flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {projects[0].title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {projects[0].description}
              </p>

              <div className="flex gap-2 flex-wrap mb-6">
                {projects[0].tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full glassmorphic border border-accent/30 text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent text-sm font-medium transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
                <Dialog>
                  <DialogTrigger>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent text-sm font-medium transition-all duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </div>
                  </DialogTrigger>
                  {/* Because it is not deployed, a video demonstration will be presented. */}
                  <DialogContent
                    className="glassmorphic max-w-md"
                    showCloseButton={false}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold text-foreground mb-3">
                        {projects[0].title} - Demo
                      </DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {t("projects.project_1.demo_video")}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center justify-center p-4">
                      <video width="100%" height="auto" controls>
                        <source src={projects[0].demo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Small Card */}
          <div className="md:col-span-2 group relative glassmorphic rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:neon-glow cursor-pointer">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"></div>

            <div className="relative h-full flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {projects[1].title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {projects[1].description}
              </p>
              <div className="flex gap-2">
                <a
                  href={projects[1].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent text-xs font-medium transition-all"
                >
                  Live
                </a>

                <Separator orientation="vertical" className="bg-accent/20" />

                <div className="flex gap-2 flex-wrap">
                  {projects[1].tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full glassmorphic border border-accent/30 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Large Card (2x2) */}
          <div className="md:col-span-2 md:row-span-2 group relative glassmorphic rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:neon-glow cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent"></div>

            <div className="relative h-full flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                {projects[3].title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {projects[3].description}
              </p>

              <div className="flex gap-2 flex-wrap mb-6">
                {projects[3].tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full glassmorphic border border-accent/30 text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={projects[3].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent text-sm font-medium transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live
                </a>
              </div>
            </div>
          </div>

          {/* Medium Cards */}
          {[2].map((idx) => (
            <div
              key={projects[idx].id}
              className="md:col-span-2 group relative glassmorphic rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:neon-glow-purple cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* {idx === 1 && (
                <>
                  <div className="absolute inset-0 bg-linear-to-br from-foreground/5 via-foreground/2 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {projects[idx].title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {projects[idx].description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {projects[idx].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full glassmorphic border border-accent-secondary/30 text-accent-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )} */}

              {idx === 2 && (
                <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
                  <h3 className="text-2xl font-bold text-foreground text-center">
                    {projects[idx].title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {projects[idx].tech.map((tech) => (
                      <div
                        key={tech}
                        className="glassmorphic p-3 rounded-xl border border-accent/20 text-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                      >
                        <span className="text-xs font-semibold text-accent">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
