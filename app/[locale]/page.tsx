import { Hero } from "@/components/hero";
import { FloatingDock } from "@/components/floatingDock";

export default function Home() {
  return (
    <>
      <FloatingDock />
      <main>
        <Hero />
      </main>
    </>
  );
}
