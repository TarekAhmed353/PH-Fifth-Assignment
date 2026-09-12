const Hero = () => {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-base-content/70 lg:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#technologies" className="brand-gradient-bg btn border-0 text-white hover:opacity-90">Explore Technologies</a>
            <a href="#about" className="btn btn-outline border-base-300 font-medium text-base-content hover:border-base-content hover:bg-transparent hover:text-base-content">Learn More</a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/banner-stack.png" alt="Layered illustration of a development stack" className="w-full max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;