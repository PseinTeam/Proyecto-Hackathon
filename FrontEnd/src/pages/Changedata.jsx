import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Changedata = () => {

  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    id: '',
    new_name: "",
    new_email: "",
    new_password: "",
    new_phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (user?.id) {
      setFormData(prevFormData => ({ ...prevFormData, id: user.id }));
    }
  }, [user]); // Dependencia en user
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.id != ''){

      try {
        console.log('Antes del fetch', formData);
        const response = await fetch(`http://127.0.0.1:8000/Usuarios/user/updateData`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || "Error al actualizar los datos");
        }
  
        const result = await response.json();
        console.log(result.message);
        navigate("/");
        // Puedes redirigir o mostrar un mensaje de éxito aquí
      } catch (error) {
        console.error("Error:", error);
        // Muestra un mensaje de error al usuario
        document.getElementById("error-message").textContent = error.message;
      }
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
              id="new_name"
              placeholder="Nombre Completo"
              value={formData.new_name}
              onChange={handleChange}
            />
            <label htmlFor="new_name">Nombre Completo</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="email"
              className="form-control"
              id="new_email"
              placeholder="Correo Electronico"
              value={formData.new_email}
              onChange={handleChange}
            />
            <label htmlFor="new_email">Correo Electronico</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="tel"
              className="form-control"
              id="new_phone"
              placeholder="Número de Teléfono"
              value={formData.new_phone}
              onChange={handleChange}
            />
            <label htmlFor="new_phone">Número de Teléfono</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="password"
              className="form-control"
              id="new_password"
              placeholder="Contraseña"
              value={formData.new_password}
              onChange={handleChange}
            />
            <label htmlFor="new_password">Contraseña</label>
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
