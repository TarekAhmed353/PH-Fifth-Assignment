const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <span className="loading loading-spinner loading-lg text-pink-600"></span>
      <p className="text-sm text-base-content/60">Loading technologies...</p>
    </div>
  );
};

export default Loader;