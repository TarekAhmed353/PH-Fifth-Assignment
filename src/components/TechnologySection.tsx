import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";

interface TechnologySectionProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (tech: Technology) => void;
}

const TechnologySection = ({ technologies, stack, onAddToStack }: TechnologySectionProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default TechnologySection;