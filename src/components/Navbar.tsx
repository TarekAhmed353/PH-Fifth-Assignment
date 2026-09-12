const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Brand = () => (
  <a href="#home" className="flex items-center gap-2">
    <span className="brand-gradient-bg grid h-9 w-9 place-items-center rounded-lg text-sm font-bold text-white">DS</span>
    <span className="text-xl font-bold">
      Dev <span className="brand-gradient-text">Stack</span>
    </span>
  </a>
);

const Navbar = () => {
  const activeClass = "text-pink-600 font-semibold";
  const idleClass = "text-base-content/70 hover:text-pink-600 transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/90 backdrop-blur">
      <nav className="navbar mx-auto max-w-7xl px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Brand />
          </div>
        </div>

        <div className="navbar-center">
          <div className="lg:hidden">
            <Brand />
          </div>
          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a href={link.href} className={index === 0 ? activeClass : idleClass}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <a href="#signin" className="btn btn-ghost btn-sm font-medium">Sign In</a>
          <a href="#signup" className="brand-gradient-bg btn btn-sm rounded-full border-0 text-white hover:opacity-90">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;