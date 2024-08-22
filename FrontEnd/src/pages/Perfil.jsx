import React from "react";
import { Navbar } from "../components/header/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";

export const Perfil = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5>INFORMACIÓN PERSONAL</h5>
              </div>
              <div className="card-body text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Foto de perfil"
                  className="rounded-circle mb-3"
                  width="150"
                  height="150"
                />
                <h6>Nombre Completo: Tomás Valdez</h6>
                <p>Correo Electrónico: tomas@example.com</p>
                <p>Número de Teléfono: +54 9 11 1234-5678</p>
                <p>Departamento: Seguridad</p>
                <p>Cargo: Inspector</p>
                <button className="btn btn-primary mt-2">
                  Modificar Datos
                </button>
                <button className="btn btn-outline-secondary mt-2 ms-2">
                  Cambiar Contraseña
                </button>
                <button className="btn btn-outline-secondary mt-2 ms-2">
                  Cambiar Foto de Perfil
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5>INFORMACIÓN LABORAL</h5>
              </div>
              <div className="card-body">
                <p>
                  <strong>Supervisor Directo:</strong> Juan Pérez
                </p>
                <p>
                  <strong>Horario de Trabajo:</strong> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <strong>Rol:</strong> Inspector de Seguridad
                </p>
                <p>
                  <strong>Permisos:</strong> Acceso Completo
                </p>
                <p>
                  <strong>Ubicación Física:</strong> Oficina Central
                </p>
                <p>
                  <strong>Fecha de Creación:</strong> 01/01/2020
                </p>
                <p>
                  <strong>Principales Responsabilidades:</strong> Inspeccionar
                  áreas de trabajo, garantizar cumplimiento de normas de
                  seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
