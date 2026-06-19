import { Hero } from "@/components/hero";
import { FloatingDock } from "@/components/floatingDock";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
