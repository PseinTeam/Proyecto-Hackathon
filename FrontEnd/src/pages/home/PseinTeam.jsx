import React from "react";
import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/Footer/Footer";
import DenunciasyEmergencias from "../../components/DenunciasyEmergencias/DyE";

export const PseinTeam = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <div className="content">
        <DenunciasyEmergencias />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};
