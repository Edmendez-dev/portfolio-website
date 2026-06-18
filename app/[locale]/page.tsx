import { Hero } from "@/components/hero";
import { FloatingDock } from "@/components/floatingDock";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
