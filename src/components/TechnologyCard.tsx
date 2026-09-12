import type { Technology } from "../types";

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isAdded, onAddToStack }: TechnologyCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-9 w-9 object-contain" />
        <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/80">{tech.badge}</span>
      </div>

      <h3 className="mt-5 text-xl font-bold">{tech.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-base-content/70">{tech.description}</p>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="rounded-md bg-base-200 px-2.5 py-1 font-medium">{tech.category}</span>
          <span className="text-base-content/70">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-medium">
            <span className="text-amber-400">★</span>
            {tech.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className="btn mt-4 w-full rounded-lg border-0 bg-slate-900 text-white hover:bg-slate-800 disabled:bg-base-200 disabled:text-base-content/50"
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;