import React from "react";
import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/Footer/Footer";
import DenunciasyEmergencias from "../../components/DenunciasyEmergencias/DyE";
import Dashboard from "../../components/Dashboard/Dashboard";

export const PseinTeam = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Dashboard />
        <DenunciasyEmergencias />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};
