import React from "react";
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

export const RoutesComponent = () => {
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
    </Routes>
  );
};

export default RoutesComponent;
