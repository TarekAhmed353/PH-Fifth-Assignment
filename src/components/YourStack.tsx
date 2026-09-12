import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="mt-1 text-sm text-base-content/60">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-base-300 px-4 py-10 text-center text-sm text-base-content/50">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-6 flex flex-col gap-3">
            {stack.map((tech) => (
              <li key={tech.id} className="flex items-center gap-3 rounded-xl border border-base-200 p-3">
                <img src={tech.icon} alt={`${tech.name} logo`} className="h-8 w-8 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{tech.name}</p>
                  <p className="truncate text-xs text-base-content/60">{tech.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from your stack`}
                  className="btn btn-ghost btn-sm btn-circle text-base-content/50 hover:text-base-content"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="btn btn-outline mt-6 w-full rounded-xl border-red-300 text-red-600 hover:border-red-400 hover:bg-red-50 hover:text-red-700"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};
export default YourStack;