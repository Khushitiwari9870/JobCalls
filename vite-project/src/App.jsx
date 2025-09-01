import React, { useState } from "react";
import ApnaHome from "./components/ApnaHome";
import HomePage from "./components/HomePage";
import ApnaAuth from "./pages/ApnaAuth";

function App() {
  // views: 'home' | 'employer' | 'auth'
  const [view, setView] = useState("home");

  const goHome = () => setView("home");
  const goEmployer = () => setView("employer");
  const goAuth = () => setView("auth");

  return (
    <>
      {view === "home" && <HomePage onEmployerLogin={goEmployer} />}
      {view === "employer" && <ApnaHome onBack={goHome} onAuth={goAuth} />}
      {view === "auth" && <ApnaAuth />}
    </>
  );
}

export default App;
