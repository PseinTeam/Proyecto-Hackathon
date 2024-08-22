import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";

export const Register = () => {
  return (
    <div
      className=" d-flex align-items-center py-4 bg-body-tertiary"
      style={{ height: "100vh" }}
    >
      <main
        className=" LoginC form-signin w-100 m-auto"
        style={{ maxWidth: "330px" }}
      >
        <form>
          <h1 className="h3 mb-3 fw-normal text-center">
            Bienvenido al Registro
          </h1>

          <div className="form-floating mb-1">
            <input
              type="number"
              className="form-control"
              id="floatingnumber"
              placeholder="Cantidad de usuarios"
            />
            <label htmlFor="floatingnumber">Cantidad de Usuarios</label>
          </div>

          <div className="input-groupRE form-floating mb-1">
            <select
              id="puesto-select"
              name="puesto_trabajo"
              className="inputRE"
            >
              <option className="Options" value="">
                Seleccione un puesto
              </option>
              <option className="Options" value="Electricidad">
                Electricidad
              </option>
              <option className="Options" value="Construccion">
                Construccion
              </option>
              <option className="Options" value="Quimica">
                Quimica
              </option>
              <option className="Options" value="Agropecuaria">
                Agropecuaria
              </option>
              <option className="Options" value="Admin">
                Administrador
              </option>
              <option className="Options" value="Area de seguridad">
                Area de seguridad
              </option>
            </select>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Registrar
          </button>
          <div className="text-center mt-2">
            <a href="/">Volver al inicio</a>
          </div>
        </form>
      </main>
    </div>
  );
};
