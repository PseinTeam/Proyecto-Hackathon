import React from "react";
import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/Footer/Footer";
import DenunciasyEmergencias from "../../components/DenunciasyEmergencias/DyE";
import Dashboard from "../../components/Dashboard/Dashboard";
import { CounterWA } from "../../components/Counter/CounterWA";
import { TaskManager } from "../../components/Gestiondetareas/Taskmanager";

export const PseinTeam = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <div className="content">
        <TaskManager />
        <Dashboard />
        <DenunciasyEmergencias />
        <CounterWA />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};
