const footerGroups = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="text-center lg:text-left">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="brand-gradient-bg grid h-8 w-8 place-items-center rounded-lg text-xs font-bold text-white">DS</span>
              <span className="text-lg font-bold">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
            <p className="mx-auto mt-4 max-w-sm text-sm text-base-content/70 lg:mx-0">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 text-sm font-medium lg:justify-start lg:gap-5">
              {socialLinks.map((social, index) => (
                <div key={social.name} className="flex items-center gap-3 lg:gap-5">
                  {index > 0 && <span className="text-base-content/30 lg:hidden">•</span>}
                  <a href={social.href} target="_blank" rel="noreferrer" className="text-base-content/70 transition-colors hover:text-pink-600">
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="hidden lg:block">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-base-content/50">{group.title}</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="text-base-content/70 transition-colors hover:text-pink-600">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-base-200 pt-6 text-xs text-base-content/60 sm:text-sm lg:mt-12 lg:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-pink-600">Privacy</a>
            <a href="#home" className="transition-colors hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;