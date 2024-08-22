import React from "react";
import { Routes, Route } from "react-router-dom";
import { PseinTeam } from "../pages/home/PseinTeam.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Registroempleados.jsx";
import { Changedata } from "../pages/Changedata.jsx";
import { InspectionForm } from "../components/Inspections/Inspections.jsx";
import { Panel } from "../components/Panel/PanelEmergencias.jsx";
import { PanelPermisos } from "../components/Paneldepermisos/Permissionspanel.jsx";

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
    </Routes>
  );
};

export default RoutesComponent;
