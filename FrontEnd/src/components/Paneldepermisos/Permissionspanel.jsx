import { useEffect, useState } from "react";
import { UsuariosPermisos } from "./Userpermissions.jsx";
import { Navbar } from "../header/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export const PanelPermisos = () => {
  const [permissions, setPermissions] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserList, setShowUserList] = useState(true); // Estado para controlar la visibilidad de la lista de usuarios

  // Función para obtener usuarios
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/Usuarios/user/All");
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Datos de usuarios no son un array", data);
          setUsers([]);
        }
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Función para obtener permisos
  const fetchPermissions = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/permiso/role/getPermissions"
      );
      if (response.ok) {
        const data = await response.json();
        setPermissions(data);
      } else {
        console.error("Failed to fetch permissions");
      }
    } catch (error) {
      console.error("Error fetching permissions:", error);
    }
  };

  useEffect(() => {
    fetchPermissions();
    fetchUsers();
  }, []);

  // Función para obtener un usuario por ID
  const fetchUserById = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/Usuarios/user/id/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.Usuario) {
          setSelectedUser(data.Usuario);
          setShowUserList(false); // Oculta la lista de usuarios cuando se selecciona uno
        } else {
          console.error("User not found");
        }
      } else {
        console.error("Failed to fetch user");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Función para manejar clic en un usuario
  const handleClick = (user) => {
    fetchUserById(user.id);
  };

  // Función para manejar la adición de un permiso
  const handlePermissionAdd = async (permission, user) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/permiso/role/addPermission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_user: user.id, id_permiso: permission.id }),
        }
      );
      console.log("Add permission response:", response);
      if (response.ok) {
        const data = await response.json();
        console.log("Add permission data:", data);
        fetchUserById(user.id); // Actualiza los permisos del usuario
      } else {
        const error = await response.json();
        console.error("Error adding permission:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Función para manejar la eliminación de un permiso
  const handlePermissionRemove = async (permission, user) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/permiso/role/removePermission",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_user: user.id, id_permiso: permission.id }),
        }
      );
      console.log("Remove permission response:", response);
      if (response.ok) {
        const data = await response.json();
        console.log("Remove permission data:", data);
        fetchUserById(user.id); // Actualiza los permisos del usuario
      } else {
        const error = await response.json();
        console.error("Error removing permission:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Función para manejar el cambio de estado del checkbox
  const handleCheckboxChange = (permission, user) => {
    if (!selectedUser) return;

    const userHasPermission = selectedUser.rol.permisos.includes(
      permission.nombre_permiso
    );
    if (userHasPermission) {
      handlePermissionRemove(permission, user);
    } else {
      handlePermissionAdd(permission, user);
    }
  };

  // Función para regresar a la lista de usuarios
  const handleBackClick = () => {
    setSelectedUser(null);
    setShowUserList(true); // Muestra la lista de usuarios cuando se hace clic en "Atrás"
  };

  return (
    <div>
      <Navbar />
      {showUserList ? (
        <UsuariosPermisos users={users} onUserClick={handleClick} />
      ) : (
        <div>
          <button onClick={handleBackClick}>Atrás</button>
          {selectedUser && (
            <div>
              <h2>Permisos de {selectedUser.full_name}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Permiso</th>
                    <th>Estado</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((permission, index) => {
                    if (!selectedUser.rol) return null;
                    const userHasPermission = selectedUser.rol.permisos.includes(
                      permission.nombre_permiso
                    );
                    return (
                      <tr key={index}>
                        <td>{permission.nombre_permiso}</td>
                        <td
                          style={{ color: userHasPermission ? "green" : "red" }}
                        >
                          {userHasPermission ? "Permitido" : "No permitido"}
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={userHasPermission}
                            onChange={() =>
                              handleCheckboxChange(permission, selectedUser)
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};
