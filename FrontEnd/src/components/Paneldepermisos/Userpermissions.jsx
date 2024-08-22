import React from "react";

export const UsuariosPermisos = ({ users, onUserClick }) => {
  if (!Array.isArray(users)) {
    return <p>Error: No se pudo cargar la lista de usuarios.</p>;
  }

  if (users.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Usuarios</h1>
      <table className="table table-hover table-light">
        <thead className="table-info">
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Puesto de trabajo</th>
            <th>Rol</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} onClick={() => onUserClick(user)}>
              <td>{user.full_name}</td>
              <td>{user.email}</td>
              <td>{user.puesto_trabajo}</td>
              <td>{user.rol.nombre}</td>
              <td className="text-center">
                <button className="btn btn-outline-dark">
                  Gestionar Permisos
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
