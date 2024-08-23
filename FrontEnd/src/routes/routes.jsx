import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PseinTeam } from "../pages/home/PseinTeam.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Registroempleados.jsx";
import { Changedata } from "../pages/Changedata.jsx";
import { InspectionForm } from "../components/Inspections/Inspections.jsx";
import { Panel } from "../components/Panel/PanelEmergencias.jsx";
import { PanelPermisos } from "../components/Paneldepermisos/Permissionspanel.jsx";
import { Ambientrecognicion } from "../pages/Ambientrecognicion.jsx";
import { Employeepanel } from "../components/Panelempleados/Employeepanel.jsx";
import { Inspectionspanel } from "../components/Panelinspecciones/Inspectionspanel.jsx";
import { Perfil } from "../pages/Perfil.jsx";
import { Securitymeasurements } from "../pages/Securitymeasurements.jsx";
import { Constructionslaws } from "../pages/Constructionslaws.jsx";
import { Awareness } from "../pages/Awareness.jsx";
import { useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext.jsx";
import UniformeEvaluation from "../components/IaHerramientas/UniformeEvaluation.jsx";
import AmbienteEvaluation from "../components/IaHerramientas/AmbienteEvaluation.jsx";

export const RoutesComponent = () => {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simula una carga de 1 segundo al cambiar de ruta

    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return (
    <Routes>
      <Route path="/" element={<PseinTeam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Changedata" element={<Changedata />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/InspectionForm" element={<InspectionForm />} />
      <Route path="/PanelEmergencias" element={<Panel />} />
      <Route path="/PanelPermisos" element={<PanelPermisos />} />
      <Route path="/Ambientrecognicion" element={<Ambientrecognicion />} />
      <Route path="/Employeepanel" element={<Employeepanel />} />
      <Route path="/Inspectionspanel" element={<Inspectionspanel />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Securitymeasurements" element={<Securitymeasurements />} />
      <Route path="/Constructionslaws" element={<Constructionslaws />} />
      <Route path="/Awareness" element={<Awareness />} />
      <Route path="/Uniformes" element={<UniformeEvaluation />} />
      <Route path="/Ambiente" element={<AmbienteEvaluation />} />
    </Routes>
  );
};

export default RoutesComponent;
