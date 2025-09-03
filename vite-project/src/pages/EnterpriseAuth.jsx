import React, { useEffect, useRef, useState } from "react";

/**
 * EnterpriseAuth (page)
 * Email-based enterprise login screen matching the provided design
 */
export default function EnterpriseAuth({ onMobile, onBack, onContact }) {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const isValidEmail = (value) => /.+@.+\..+/.test(value);
  const isValid = isValidEmail(email);
  const showError = touched && !isValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    console.log("Enterprise continue with:", email);
    setTimeout(() => console.log("Magic link / OTP email sent!"), 600);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      {/* Simple header with logo (kept consistent with ApnaAuth) */}
      <header className="h-16 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Hero content matching screenshot */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold text-[#0f3151]">
              Hire top talent in 48 hours with Jobscall.
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
              Streamline your recruitment with AI‑driven precision.
              <br />
              Single solution from Fresher to experienced hiring.
            </p>
            <hr className="my-8 border-slate-200" />
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">6 crore+</div>
                <div className="text-slate-600 text-sm mt-1">Qualified candidates</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">7 lakhs+</div>
                <div className="text-slate-600 text-sm mt-1">Employers use Jobscall</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">900+</div>
                <div className="text-slate-600 text-sm mt-1">Available cities</div>
              </div>
            </div>
          </div>

          {/* Right: Auth Card */}
          <div className="lg:pl-8">
            <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-900">Sign in with your Enterprise email</h2>

              <form onSubmit={onSubmit} className="mt-5">
                <label htmlFor="enterprise-email" className="block text-sm font-medium text-slate-900">
                  <span className="inline-flex items-center gap-1">
                    Enterprise Email
                    <span aria-hidden className="inline-block w-4 h-4 rounded-full text-[10px] font-bold grid place-items-center border border-slate-300 text-slate-500">i</span>
                  </span>
                </label>
                <input
                  id="enterprise-email"
                  ref={inputRef}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Enterprise email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  aria-invalid={showError ? "true" : "false"}
                  className={[
                    "mt-1 w-full rounded-md border bg-white px-3 py-2 outline-none",
                    showError ? "border-red-400" : "border-slate-300",
                    "focus:ring-2 focus:ring-emerald-600",
                  ].join(" ")}
                />
                {showError && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    Please enter a valid email address.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isValid}
                  className={[
                    "mt-4 w-full inline-flex items-center justify-center rounded-md px-4 py-3 text-white text-sm font-semibold",
                    "bg-emerald-700 hover:bg-emerald-800",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700",
                  ].join(" ")}
                >
                  Continue
                </button>

                <p className="mt-4 text-sm text-slate-600">
                  Want to register your Enterprise email? {" "}
                  <a 
                    href="#" 
                    className="text-emerald-800 underline underline-offset-2 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      onContact && onContact();
                    }}
                  >
                    Contact us
                  </a>
                </p>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4 text-slate-300">
                  <div className="h-px w-full bg-slate-200" />
                  <span className="text-xs text-slate-500">OR</span>
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <button
                  type="button"
                  onClick={() => onMobile && onMobile()}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-slate-800 text-sm font-semibold border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                >
                  <span aria-hidden>📞</span>
                  Continue with mobile
                </button>

                <p className="mt-6 text-xs text-slate-600">
                  By clicking continue, you agree to the Jobscall {" "}
                  <a href="#" className="underline">Terms of service</a> & {" "}
                  <a href="#" className="underline">Privacy policy</a>.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}