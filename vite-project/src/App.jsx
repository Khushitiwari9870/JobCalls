import React, { useState } from "react";
import ApnaHome from "./components/ApnaHome";
import HomePage from "./components/HomePage";
import ApnaAuth from "./pages/ApnaAuth";
import EnterpriseAuth from "./pages/EnterpriseAuth";
import JobPrep from "./pages/JobPrep";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";

function App() {
  // views: 'home' | 'employer' | 'auth' | 'enterprise' | 'contact' | 'jobprep' | 'about'
  const [view, setView] = useState("home");

  const goHome = () => setView("home");
  const goEmployer = () => setView("employer");
  const goAuth = () => setView("auth");
  const goEnterprise = () => setView("enterprise");
  const goContact = () => setView("contact");
  const goJobPrep = () => setView("jobprep");
  const goAbout = () => setView("about");

  return (
    <div className="min-h-screen bg-gray-50">
      {view === "home" && (
        <HomePage 
          onEmployerLogin={goEmployer} 
          onJobPrep={goJobPrep}
          onAuth={goAuth}
          onContact={goContact}
          onAbout={goAbout}
        />
      )}
      {view === "employer" && (
        <ApnaHome
          onBack={goHome}
          onAuth={goAuth}
          onEnterprise={goEnterprise}
          onContact={goContact}
          onAbout={goAbout}
        />
      )}
      {view === "auth" && <ApnaAuth onEnterprise={goEnterprise} onBack={goHome} />}
      {view === "enterprise" && <EnterpriseAuth onMobile={goAuth} onBack={goHome} onContact={goContact} />}
      {view === "contact" && <ContactUs onBack={goHome} />}
      {view === "jobprep" && <JobPrep onBack={goHome} />}
      {view === "about" && <About onBack={goHome} />}
    </div>
  );
}

export default App;
