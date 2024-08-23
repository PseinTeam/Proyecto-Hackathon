import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/img/logo.png";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { CerrarSesion } from "../../components/CerrarSesion.jsx";

export const Navbar = () => {
  const { state, user } = useContext(AuthContext);

  console.log(user);

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

            {/* Renderizado Condicional para Paneles */}
            {(user?.rol?.nombre === "admin" ||
              user?.rol?.nombre === "super_admin" ||
              user?.rol?.nombre === "segurity") && (
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
                  {/* Panel de permisos y otros solo para admin y super_admin */}
                  {(user?.rol?.nombre === "admin" ||
                    user?.rol?.nombre === "super_admin") && (
                    <>
                      <li>
                        <a className="dropdown-item" href="/Panelpermisos">
                          Panel de permisos
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
                    </>
                  )}
                  {/* Panel de emergencias visible para admin, super_admin y segurity */}
                  {(user?.rol?.nombre === "admin" ||
                    user?.rol?.nombre === "super_admin" ||
                    user?.rol?.nombre === "segurity") && (
                    <li>
                      <a className="dropdown-item" href="/PanelEmergencias">
                        Panel de emergencias
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            )}

            {/* Renderizado Condicional para Herramientas */}
            {user?.rol?.nombre === "segurity" && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-2"
                  href="#"
                  id="toolsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Herramientas
                </a>
                <ul className="dropdown-menu" aria-labelledby="toolsDropdown">
                  <li>
                    <a
                      href="/Ambiente"
                      className="dropdown-item"
                    >
                      Reconocimiento de ambiente
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Uniformes"
                      className="dropdown-item"
                    >
                      Reconocimiento de uniformes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/InspectionForm"
                      className="dropdown-item"
                    >
                      Inspecciones
                    </a>
                  </li>
                </ul>
              </li>
            )}

            {/* Elementos accesibles por todos */}
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

          {/* Autenticación */}
          {state.logged ? (
            <CerrarSesion />
          ) : (
            <div className="col-md-3 text-end">
              <a href="/Login" className="LoginBtn">
                <button type="button" className="btn btn-outline-primary me-2">
                  Inicio de Sesión
                </button>
              </a>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};
