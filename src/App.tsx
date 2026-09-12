import { useEffect, useState } from "react";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((error) => console.error("Failed to load technologies:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      console.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-2 text-base-content/70">Pick one technology per category to build your ideal stack.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
            <TechnologySection technologies={technologies} stack={stack} onAddToStack={handleAddToStack} />
            <YourStack stack={stack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;