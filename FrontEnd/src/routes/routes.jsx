import React from "react";
import { Routes, Route } from "react-router-dom";
import { PseinTeam } from "../pages/home/PseinTeam.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Registroempleados.jsx";
import { Changedata } from "../pages/Changedata.jsx";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PseinTeam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Changedata" element={<Changedata />} />
    </Routes>
  );
};

export default RoutesComponent;
