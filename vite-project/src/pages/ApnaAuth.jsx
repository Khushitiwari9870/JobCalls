import React, { useState, useRef, useEffect } from "react";

/**
 * ApnaAuth (page)
 * Two-column layout: hero left, auth card right
 */
export default function ApnaAuth({ onEnterprise, onBack }) {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const firstInputRef = useRef(null);

  const isValid = phone.length === 10;
  const showError = touched && !isValid;

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const onChangePhone = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    console.log("Sending OTP to +91", phone);
    setTimeout(() => console.log("OTP sent!"), 600);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <header className="h-16 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <div aria-label="jobscall logo" className="h-8 w-8 rounded-md bg-white shadow border border-slate-200 grid place-items-center text-xs font-semibold">apna</div> */}
              {/* <span className="sr-only">Jobscall</span> */}
              <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onEnterprise && onEnterprise()}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Sign In with Enterprise Email
              </button>
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Hero */}
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
              <h2 className="text-2xl font-bold text-slate-900">Let’s get started</h2>
              <p className="text-slate-600 mt-1">Hire top talent faster with Jobscall</p>

              <form onSubmit={onSubmit} className="mt-5">
                <label htmlFor="mobile" className="block text-sm font-medium text-slate-900">Mobile number</label>
                <div className={["mt-1 flex items-center rounded-md border", showError ? "border-red-400" : "border-slate-300", "focus-within:ring-2 focus-within:ring-emerald-600 bg-white"].join(" ")}
                >
                  <span className="pl-3 pr-2 text-slate-600 select-none">+91</span>
                  <input
                    id="mobile"
                    ref={firstInputRef}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    className="w-full flex-1 bg-white placeholder-slate-400 text-slate-900 outline-none px-3 py-2 rounded-r-md"
                    placeholder="Enter your mobile number"
                    value={phone}
                    onChange={onChangePhone}
                    onBlur={() => setTouched(true)}
                    aria-invalid={showError ? "true" : "false"}
                    aria-describedby="mobile-error mobile-help"
                  />
                </div>
                <div id="mobile-help" className="sr-only">Enter a 10 digit Indian mobile number</div>
                <p id="mobile-error" className={["mt-1 text-sm", showError ? "text-red-600" : "sr-only"].join(" ")} aria-live="polite">Please enter a valid 10-digit mobile number.</p>

                <button type="submit" disabled={!isValid} className={["mt-4 w-full inline-flex items-center justify-center rounded-md px-4 py-3 text-white text-sm font-semibold","bg-emerald-700 hover:bg-emerald-800","disabled:opacity-50 disabled:cursor-not-allowed","focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"].join(" ")}>
                  Send OTP
                </button>

                <div className="my-6 flex items-center gap-4 text-slate-400">
                  <div className="h-px w-full bg-slate-200" />
                  <span className="text-xs">OR</span>
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <button type="button" onClick={() => onEnterprise && onEnterprise()} className="inline-flex items-center gap-2 text-emerald-900 underline underline-offset-2">
                  <span aria-hidden="true">🏢</span>
                  Click here for Enterprise login
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