import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";

export const Changepersonaldata = () => {
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
          <h1 className="h3 mb-3 fw-normal text-center">Complete los campos</h1>

          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre Completo"
            />
            <label htmlFor="floatingInput">Nombre Completo</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="email"
              className="form-control"
              id="floatingCorreoElectronico"
              placeholder="Correo Electronico"
            />
            <label htmlFor="floatingCorreoElectronico">
              Correo Electronico
            </label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="tel"
              className="form-control"
              id="floatingTelefono"
              placeholder="Numero de Telefono"
            />
            <label htmlFor="floatingTelefono">Numero de Telefono</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Guardar
          </button>
          <div className="text-center mt-2">
            <a href="/Perfil">Volver al perfil</a>
          </div>
        </form>
      </main>
    </div>
  );
};
