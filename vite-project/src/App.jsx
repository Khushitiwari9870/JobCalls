import React, { useState } from "react";
import ApnaHome from "./components/ApnaHome";
import HomePage from "./components/HomePage";

function App() {
  const [view, setView] = useState("home"); // 'home' | 'employer'

  const goHome = () => setView("home");
  const goEmployer = () => setView("employer");

  return (
    <>
      {view === "home" ? (
        <HomePage onEmployerLogin={goEmployer} />
      ) : (
        <ApnaHome onBack={goHome} />
      )}
    </>
  );
}

export default App;
