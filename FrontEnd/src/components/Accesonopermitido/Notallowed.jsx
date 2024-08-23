import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../Footer/Footer";

export const Notallowed = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <Navbar />
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}>
        Acceso no permitido
      </h1>
      <a href="/">Return to Home</a>
      <Footer />
    </div>
  );
};
