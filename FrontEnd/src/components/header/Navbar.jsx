import {useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/img/logo.png";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { CerrarSesion } from "../../components/CerrarSesion.jsx";

export const Navbar = () => {

  const { state, user } = useContext(AuthContext);

  console.log(state.logged);
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-2"
                href="#"
                id="panelDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Capacitaciones
              </a>
              <ul className="dropdown-menu" aria-labelledby="panelDropdown">
                <li>
                  <a href="/Securitymeasurements" className="dropdown-item">
                    Medidas de seguridad
                  </a>
                </li>
                <li>
                  <a href="/Constructionslaws" className="dropdown-item">
                    Leyes de construcción
                  </a>
                </li>
                <li>
                  <a href="/Awareness" className="dropdown-item">
                    Concientización
                  </a>
                </li>
                <li>
                  <a href="/PanelPermisos" className="nav-link px-2">
                    Panel de permisos
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
              <a href="/Perfil" className="nav-link px-2">
                Perfil
              </a>
            </li>
          </ul>

          {state.logged ? <CerrarSesion /> :           
          <div className="col-md-3 text-end">
            <a href="/Login" className="LoginBtn">
              <button type="button" className="btn btn-outline-primary me-2">
                Inicio de Sesión
              </button>
            </a>
          </div>}
        </header>
      </div>
    </div>
  );
};
