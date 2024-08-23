import React, { useState } from "react";

export const UsuariosPermisos = ({ users, onUserClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

  // Filtrar usuarios por nombre, rol y puesto de trabajo
  const filteredUsers = users.filter((user) => {
    return (
      (user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRole === "" || user.rol.nombre === selectedRole) &&
      (selectedJob === "" || user.puesto_trabajo === selectedJob)
    );
  });

  // Obtener roles únicos para el filtro
  const roles = [...new Set(users.map((user) => user.rol.nombre))];
  // Obtener puestos de trabajo únicos para el filtro
  const jobs = [...new Set(users.map((user) => user.puesto_trabajo))];

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Usuarios</h1>

      {/* Filtros de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Buscar por nombre o correo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select mb-2"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Seleccionar rol</option>
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          className="form-select mb-2"
          value={selectedJob}
          onChange={(e) => setSelectedJob(e.target.value)}
        >
          <option value="">Seleccionar puesto de trabajo</option>
          {jobs.map((job, index) => (
            <option key={index} value={job}>
              {job}
            </option>
          ))}
        </select>
      </div>

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
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No se encontraron resultados.
              </td>
            </tr>
          ) : (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.puesto_trabajo}</td>
                <td>{user.rol.nombre}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-dark me-2"
                    onClick={() => onUserClick(user)}
                  >
                    Gestionar Permisos
                  </button>
                  <button className="btn btn-outline-primary">
                    Ver Perfil
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
