import React, { useContext } from "react";
import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/Footer/Footer";
import DenunciasyEmergencias from "../../components/DenunciasyEmergencias/DyE";
import Dashboard from "../../components/Dashboard/Dashboard";
import { CounterWA } from "../../components/Counter/CounterWA";
import { TaskManager } from "../../components/Gestiondetareas/Taskmanager";
import { EmergencyModal } from "../../components/EmergencyModal/EmergencyModal";
import Loadingscreen from "../../components/Loaders/Loadingscreen.jsx"; // Importar el componente Loadingscreen
import { useLoading } from "../../context/LoadingContext.jsx"; // Importar el contexto LoadingContext
import { AuthContext } from "../../context/AuthProvider.jsx";

export const PseinTeam = () => {
  const { setIsLoading } = useLoading(); // Obtener setIsLoading desde el contexto

  const { user } = useContext(AuthContext);

  // Simular una carga inicial
  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula una carga de 2 segundos
  }, [setIsLoading]);

  return (
    <body>
      <Loadingscreen />
      <header>
        <Navbar />
      </header>
      <div className="content">
        <TaskManager />
        {user?.rol?.nombre === "segurity" && <Dashboard />}
        <EmergencyModal />
        <CounterWA />
      </div>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};
