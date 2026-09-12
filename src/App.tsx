import { useEffect, useState } from "react";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
        <p className="p-8 text-center">
          Loaded {technologies.length} technologies. Loading: {String(loading)}. Stack: {stack.length}
        </p>
      </main>
    </div>
  );
}

export default App;