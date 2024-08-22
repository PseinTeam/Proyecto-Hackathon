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
                alt=""
              />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 link-secondary">
                Inicio
              </a>
            </li>
            <li>
              <a href="/InspectionForm" className="nav-link px-2">
                Inspecciones
              </a>
            </li>
            {user?.rol?.nombre === "Admin" && (
          <li>
            <a href="/PanelPermisos" className="nav-link px-2">
              Panel de permisos
            </a>
          </li>
            )}
            {user?.rol?.nombre === "Admin" && (
              <li>
                <a href="/register" className="nav-link px-2">
                  Registro de empleados
                </a>
              </li>
            )}
            <li>
              <a href="#" className="nav-link px-2">
                Reconocimiento de ambiente
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Asistente virtual
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
