import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import YourStack from "./components/YourStack";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

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
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${tech?.name ?? "Technology"} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }
    setStack([]);
    toast.info("All technologies removed from your stack.");
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
          {loading ? (
            <Loader />
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
              <TechnologySection technologies={technologies} stack={stack} onAddToStack={handleAddToStack} />
              <YourStack stack={stack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar theme="light" />
    </div>
  );
}
export default App;