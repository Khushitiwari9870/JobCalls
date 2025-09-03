import React, { useState } from "react";

export default function ContactUs({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    companySize: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact request:", form);
    alert("Submitted! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="h-16 flex items-center border-b">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
          </div>
          <button onClick={onBack} className="text-sm px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">← Back</button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Copy from screenshot */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold text-[#0f3151]">
              Join over <span className="text-emerald-700">7 Lakhs+ employers</span>.
              <br /><span className="mt-2 block">We're happy to help.</span>
            </h1>

            {/* small multicolor line */}
            <div className="h-1 w-64 bg-slate-200 relative overflow-hidden rounded">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-emerald-700" />
              <div className="absolute inset-y-0 left-1/3 w-1/3 bg-blue-500" />
              <div className="absolute inset-y-0 left-2/3 w-1/3 bg-amber-500" />
            </div>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span aria-hidden="true">✅</span> <span>Submit this <span className="font-semibold">simple form</span>.</span></li>
              <li className="flex items-start gap-3"><span aria-hidden="true">✅</span> <span>A dedicated talent <span className="font-semibold">executive will get back</span> to you shortly.</span></li>
              <li className="flex items-start gap-3"><span aria-hidden="true">✅</span> <span>We'll partner with you to talk through your <span className="font-semibold">business needs</span> and see how we can help.</span></li>
            </ul>

            {/* Logos row (placeholders) */}
            <div className="mt-8 flex flex-wrap items-center gap-6 opacity-90">
              <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Teleperformance_logo.svg/1200px-Teleperformance_logo.svg.png" alt="Teleperformance" />
              <img className="h-8" src="https://companieslogo.com/img/orig/TECHM.NS_BIG-281ab5b9.png?t=1721262930" alt="Tech Mahindra" />
              <img className="h-8" src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2015-present.jpg" alt="Flipkart" />
              <img className="h-8" src="https://www.adityabirla.com/_next/image/?url=https%3A%2F%2Fwww.cms.adityabirla.com%2Fuploads%2Faditya_birla_capital_ec3c57daeb.webp&w=1920&q=100" alt="Aditya Birla" />
              <img className="h-8" src="https://download.logo.wine/logo/Jio/Jio-Logo.wine.png" alt="Jio" />
              <img className="h-8" src="https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png" alt="Accenture" />
              <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" alt="Infosys" />
              <img className="h-8" src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-11/bigbasket.jpg" alt="bigbasket" />
            </div>
          </div>

          {/* Right: Form card */}
          <div className="lg:pl-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl shadow p-6 sm:p-7">
              <div className="h-1 bg-slate-800 rounded-t -mt-6 -mx-6 sm:-mx-7 mb-6" />
              <h2 className="text-2xl font-bold text-slate-900">Get in touch with us</h2>

              <form onSubmit={onSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="sm:col-span-2 text-sm font-medium">Full name*
                  <input name="name" value={form.name} onChange={onChange} placeholder="Enter your full name" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
                </label>

                <label className="sm:col-span-2 text-sm font-medium">Work Email*
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@design.com" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
                </label>

                <label className="text-sm font-medium">Mobile number*
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="Enter 10 digit mobile number" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
                </label>

                <label className="text-sm font-medium">Your role*
                  <select name="role" value={form.role} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600">
                    <option value="">Select...</option>
                    <option>Founder</option>
                    <option>HR</option>
                    <option>Recruiter</option>
                    <option>Hiring Manager</option>
                  </select>
                </label>

                <label className="text-sm font-medium">Company name*
                  <input name="company" value={form.company} onChange={onChange} placeholder="Enter your company name" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" />
                </label>

                <label className="text-sm font-medium">Company size*
                  <select name="companySize" value={form.companySize} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600">
                    <option value="">Select...</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </label>

                <div className="sm:col-span-2 mt-2">
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-white text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                    Submit
                  </button>
                  <p className="mt-3 text-xs text-slate-600">By clicking “Submit” I agree to the <a href="#" className="underline">Terms of Use</a> and the <a href="#" className="underline">Privacy Statement</a>.</p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer (from screenshot) */}
        <footer className="mt-16 bg-[#2a222d] text-white rounded-xl">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10 bg-white rounded-md p-1" />
              <div className="flex items-center gap-4 text-2xl opacity-90">
                <svg className="w-6 h-6 fill-current hover:text-blue-500 transition-colors cursor-pointer" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg><svg className="w-6 h-6 fill-current hover:text-blue-600 transition-colors cursor-pointer" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg><svg className="w-6 h-6 fill-current hover:text-gray-400 transition-colors cursor-pointer" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg><svg className="w-6 h-6 fill-current hover:text-pink-500 transition-colors cursor-pointer" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg><svg className="w-6 h-6 fill-current hover:text-red-500 transition-colors cursor-pointer" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-wider">PRODUCT</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Job posting</li>
                <li>Contests</li>
                <li>Database</li>
                <li>Enterprise</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-wider">GET TO KNOW US</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Careers</li>
                <li>Contact support</li>
                <li>Contact sales</li>
                <li>Job seekers</li>
              </ul>
            </div>
          </div>
          <div className="h-px bg-white/20 mx-6" />
          <div className="px-6 py-4 text-center text-sm text-slate-300">© 2025 Jobscall</div>
        </footer>
      </main>
    </div>
  );
}