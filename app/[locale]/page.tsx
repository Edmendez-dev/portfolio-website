import { Hero } from "@/components/hero";
import { FloatingDock } from "@/components/floatingDock";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techStack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
