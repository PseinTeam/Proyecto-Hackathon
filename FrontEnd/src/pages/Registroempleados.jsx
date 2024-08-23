import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";

export const Register = () => {
  const [numUsuarios, setNumUsuarios] = useState(0);
  const [puestoTrabajo, setPuestoTrabajo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear objeto con datos del formulario
    const requestData = {
      num_usuarios: numUsuarios,
      puesto_trabajo: puestoTrabajo,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/Usuarios/createUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("Usuarios registrados con éxito.");
        console.log("Usuarios creados:", data.users);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setMessage("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{ height: "100vh" }}>
      <main className="LoginC form-signin w-100 m-auto" style={{ maxWidth: "330px" }}>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Bienvenido al Registro</h1>

          <div className="form-floating mb-1">
            <input
              type="number"
              className="form-control"
              id="floatingnumber"
              placeholder="Cantidad de usuarios"
              value={numUsuarios}
              onChange={(e) => setNumUsuarios(e.target.value)}
              required
            />
            <label htmlFor="floatingnumber">Cantidad de Usuarios</label>
          </div>

          <div className="input-groupRE form-floating mb-1">
            <select
              id="puesto-select"
              name="puesto_trabajo"
              className="inputRE form-select"
              value={puestoTrabajo}
              onChange={(e) => setPuestoTrabajo(e.target.value)}
              required
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

          {/* Mensaje de éxito o error */}
          {message && <p className="mt-3 text-center">{message}</p>}
        </form>
      </main>
    </div>
  );
};
