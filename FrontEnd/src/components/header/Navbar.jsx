import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/img/logo.png";

export const Navbar = () => {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-2 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img
                src={logo}
                className="bi"
                width="40"
                height="37"
                role="img"
                aria-label="Logo"
                alt="Logo"
              />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 link-secondary">
                Inicio
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-2"
                href="#"
                id="panelDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Paneles
              </a>
              <ul className="dropdown-menu" aria-labelledby="panelDropdown">
                <li>
                  <a className="dropdown-item" href="/Panelpermisos">
                    Panel de permisos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/PanelEmergencias">
                    Panel de emergencias
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Employeepanel">
                    Panel de empleados
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Inspectionspanel">
                    Panel de inspecciones
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-2"
                href="#"
                id="panelDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Herramientas
              </a>
              <ul className="dropdown-menu" aria-labelledby="panelDropdown">
                <li>
                  <a href="/Ambientrecognicion" className="dropdown-item">
                    Reconocimiento de ambiente
                  </a>
                </li>
                <li>
                  <a href="/InspectionForm" className="dropdown-item">
                    Inspecciones
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="https://jorgito-76bcf3.zapier.app"
                target="_blank"
                className="nav-link px-2"
              >
                Asistente virtual
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Perfil
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <a href="/Login" className="LoginBtn">
              <button type="button" className="btn btn-outline-primary me-2">
                Inicio de Sesión
              </button>
            </a>
            <a href="/Register" className="RegisterBtn">
              <button type="button" className="btn btn-primary">
                Registro
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};
