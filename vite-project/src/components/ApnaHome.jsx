import React, { useState, useEffect } from "react";

/**
 * Apna-like Homepage
 * - TailwindCSS utilities only
 * - Sticky navbar with responsive hamburger
 * - Hero: left image + copy; right employer login form
 * - Stats row
 */
export default function ApnaHome({ onBack }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Animate elements on scroll (stats cards)
  useEffect(() => {
    const elements = document.querySelectorAll('.js-animate-on-scroll');
    if (!('IntersectionObserver' in window) || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Replace with your own assets in /public if desired
  const bgImage =
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974&auto=format&fit=crop"; // subtle stadium/dark bg feel
  const personImage =
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-2182970.jpg&fm=jpgr";

  return (
    <div className="min-h-screen bg-gray-200 text-black">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-black animate__animated animate__fadeInDown">
        <nav className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="apna home">
            <div className="w-12 h-10 md:w-14 md:h-14 rounded-xl bg-blue  border-black flex items-center justify-center text-blue text-lg font-bold ">
              <img src="/src/assets/Jobcalls logo (1).png " alt="" />
            </div>
            <span className="text-lg md:text-2xl font-semibold tracking-wide"></span>
          </a>

          {/* Center: Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 text-black">
            {[
              { label: "Product", href: "#" },
              { label: "Enterprise", href: "#" },
              { label: "Blogs", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Looking for a job ↗", href: "#", external: true },
            ].map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  target={i.external ? "_blank" : undefined}
                  rel={i.external ? "noopener noreferrer" : undefined}
                  className="font-medium hover:text-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Back to homepage */}
            <button
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold text-black bg-white/5 border border-white/15 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-shadow"
              onClick={() => onBack && onBack()}
            >
              ← Back
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold text-black bg-transparent  border-white/20 border-[1.5px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-shadow"
            >
              Contact us
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold bg-[#1ea97a] text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-shadow"
            >
              Login/Sign up
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-slate-100 bg-white/5 border border-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              onClick={() => onBack && onBack()}
              aria-label="Back to homepage"
            >
              ←
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-slate-100 bg-white/5 border border-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Open menu"
              aria-controls="mobile-drawer"  
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          id="mobile-drawer"
          className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-150 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div
            className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0b1b2b] to-[#0f2438] border-b border-white/10 pt-3 pb-6 transform transition-transform duration-200 ease-out ${
              mobileOpen ? "translate-y-0" : "-translate-y-3"
            }`}
            role="menu"
            aria-label="Mobile menu"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between h-[56px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue border-white/10 flex items-center justify-center text-blue text-lg font-bold">
                    ◆
                  </div>
                  <span className="text-blue text-lg font-semibold">JOBS</span>
                </div>
                <button
                  className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-slate-100 bg-white/5 border border-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  "Product",
                  "Enterprise",
                  "Blogs",
                  "Pricing",
                  "Looking for a job ↗",
                  "Contact Us",
                  "Login/Sign Up",
                ].map((label) => (
                  <a
                    key={label}
                    href="#"
                    role="menuitem"
                    className="block rounded-2xl px-4 py-3 font-medium text-slate-100 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative animate__animated animate__fadeIn">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(11,27,43,0.85), rgba(15,36,56,0.9)), url(${bgImage})` }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Person + copy */}
            <div className="order-2 lg:order-1">
              <div className="flex items-end gap-6">
                <img
                  src={personImage}
                  alt="Professional person"
                  className="w-40 sm:w-56 md:w-64 lg:w-72 4xl:w-80 rounded-xl px-6 object-cover shadow-2xl ring-1 ring-white/10"
                />
                <div className="hidden md:block flex-1" />
              </div>

              <div className="mt-6 md:mt-8 max-w-2xl">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  Hire your{" "}
                  <span className="text-green-400">dream team</span>{" "}
                  with apna
                </h1>
                <p
                  className="mt-4 text-slate-200/90 text-base sm:text-lg leading-relaxed animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.25s" }}
                >
                  Streamline your recruitment with AI-driven precision.
                  <br />
                  Single solution from fresher to experienced hiring.
                </p>
              </div>
            </div>

            {/* Right: Employer Login card */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md p-5 sm:p-6 md:p-7">
                <h2 className="text-2xl md:text-3xl font-bold">Let’s get started</h2>
                <p className="text-slate-200/90 mt-1">Hire top talent faster with apna</p>

                <label className="block text-sm font-semibold mt-5" htmlFor="mobile">
                  Mobile number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="Enter 10 digit mobile number"
                  className="mt-2 w-full rounded-md bg-white text-slate-900 placeholder-slate-500 px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#1ea97a] shadow-sm"
                />

                <button
                  className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-[#1ea97a] text-white font-semibold px-4 py-2.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Continue
                </button>

                <div className="my-5 flex items-center gap-4 text-black">
                  <div className="h-px w-full bg-black" />
                  <span className="text-xs">OR</span>
                  <div className="h-px w-full bg-black" />
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold underline underline-offset-2"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  Click here for Enterprise login
                </a>

                <p className="mt-4 text-xs text-black">
                  By clicking continue, you agree to the apna{" "}
                  <a href="#" className="underline" >Terms of service</a> &{" "}
                  <a href="#" className="underline">Privacy policy</a>
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { big: "6 Crore +", small: "Qualified candidates" },
              { big: "7 Lakh +", small: "Employers use apna" },
              { big: "900 +", small: "Available cities" },
            ].map((s, idx) => (
              <div
                key={s.big}
                className="rounded-xl  border-white/10 bg-white/5 backdrop-blur p-5 js-animate-on-scroll invisible"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-extrabold">{s.big}</div>
                <div className="text-black">{s.small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}