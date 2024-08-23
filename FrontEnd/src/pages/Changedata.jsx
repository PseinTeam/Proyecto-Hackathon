import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";

export const Changedata = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validatePasswords = (e) => {
    const { password, confirmPassword } = formData;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
      e.preventDefault(); // Previene el envío del formulario
      errorMessage.textContent = "Las contraseñas no coinciden.";
    } else {
      errorMessage.textContent = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validatePasswords(e);

    // Si hay un mensaje de error, no enviar el formulario
    const errorMessage = document.getElementById("error-message").textContent;
    if (errorMessage) return;

    try {
      const response = await fetch("/Usuarios/user/updateData", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1, // Cambia esto según el ID del usuario en tu aplicación
          new_name: formData.fullName || null,
          new_email: formData.email || null,
          new_password: formData.password || null,
          new_phone: formData.telefono || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar los datos");
      }

      const result = await response.json();
      console.log(result.message);
      // Puedes redirigir o mostrar un mensaje de éxito aquí
    } catch (error) {
      console.error("Error:", error);
      // Muestra un mensaje de error al usuario
    }
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{ height: "100vh" }}>
      <main className="LoginC form-signin w-100 m-auto" style={{ maxWidth: "330px" }}>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Complete los campos</h1>

          <div className="form-floating mb-1">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Nombre Completo"
              value={formData.fullName}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Nombre Completo</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Correo Electronico"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Correo Electronico</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="Número de Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <label htmlFor="telefono">Número de Teléfono</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Contraseña</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Repetir Contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword">Repetir Contraseña</label>
          </div>

          <div
            id="error-message"
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "10px",
              marginTop: "10px",
              textAlign: "center",
            }}
          ></div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Guardar
          </button>
          <div className="text-center mt-2">
            <a href="/">Volver al inicio</a>
          </div>
        </form>
      </main>
    </div>
  );
};
