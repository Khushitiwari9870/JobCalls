import React from "react";

/**
 * About page for JobsCalls
 * Provides comprehensive information about the company, mission, and services
 */
export default function About({ onBack }) {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      {/* Header */}
      <header className="h-16 flex items-center border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
            </div>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f3151] mb-6">
            About JobsCalls
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing recruitment with AI-driven precision and connecting top talent 
            with exceptional opportunities across India.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-[#0f3151] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To democratize access to quality employment opportunities by leveraging cutting-edge 
              technology and creating a seamless bridge between talented professionals and forward-thinking 
              employers across India.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <div className="text-3xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-[#0f3151] mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To become India's most trusted and efficient recruitment platform, where every job seeker 
              finds their perfect career match and every employer discovers exceptional talent within 48 hours.
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0f3151] mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-700 mb-2">6 Crore+</div>
              <div className="text-slate-600 font-medium">Qualified Candidates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-700 mb-2">7 Lakhs+</div>
              <div className="text-slate-600 font-medium">Trusted Employers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-700 mb-2">900+</div>
              <div className="text-slate-600 font-medium">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-emerald-700 mb-2">48 Hours</div>
              <div className="text-slate-600 font-medium">Average Hiring Time</div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0f3151] mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">AI-Powered Matching</h3>
              <p className="text-slate-600">
                Our advanced AI algorithms analyze skills, experience, and preferences to create 
                perfect job matches for both candidates and employers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">Rapid Recruitment</h3>
              <p className="text-slate-600">
                Streamlined processes that enable employers to hire top talent within 48 hours, 
                reducing time-to-hire significantly.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">Skill Development</h3>
              <p className="text-slate-600">
                Comprehensive job preparation resources and skill enhancement programs to help 
                candidates excel in their careers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">Enterprise Solutions</h3>
              <p className="text-slate-600">
                Customized recruitment solutions for enterprises, from startups to large 
                corporations, with dedicated support.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">Mobile-First Platform</h3>
              <p className="text-slate-600">
                Accessible recruitment platform optimized for mobile devices, ensuring 
                seamless experience across all platforms.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-3">Pan-India Reach</h3>
              <p className="text-slate-600">
                Extensive network covering 900+ cities across India, connecting talent 
                from metros to tier-3 cities.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose JobsCalls */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0f3151] mb-12">Why Choose JobsCalls?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-4">For Job Seekers</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Access to verified job opportunities from top companies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  AI-powered job recommendations based on your profile
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Free skill assessment and career guidance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Direct communication with hiring managers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Interview preparation and job readiness support
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#0f3151] mb-4">For Employers</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Access to 6 crore+ pre-verified candidate profiles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Hire quality talent within 48 hours
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  AI-driven candidate matching and screening
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Cost-effective recruitment solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Dedicated account management and support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gradient-to-r from-[#0f3151] to-emerald-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful companies and job seekers who trust JobsCalls
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBack}
              className="bg-white text-[#0f3151] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </button>
            <button 
              onClick={onBack}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f3151] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2024 JobsCalls. All rights reserved. Empowering careers, enabling growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
