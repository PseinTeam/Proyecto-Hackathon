import { useEffect, useState } from "react";
import { UsuariosPermisos } from "./Userpermissions.jsx";
import { Navbar } from "../header/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  Container,
  Table,
  Button,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";

export const PanelPermisos = () => {
  const [permissions, setPermissions] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserList, setShowUserList] = useState(true);

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

  const fetchUserById = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/Usuarios/user/id/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.Usuario) {
          setSelectedUser(data.Usuario);
          setShowUserList(false);
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

  const handleClick = (user) => {
    fetchUserById(user.id);
  };

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
      if (response.ok) {
        fetchUserById(user.id);
      } else {
        const error = await response.json();
        console.error("Error adding permission:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

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
      if (response.ok) {
        fetchUserById(user.id);
      } else {
        const error = await response.json();
        console.error("Error removing permission:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

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

  const handleBackClick = () => {
    setSelectedUser(null);
    setShowUserList(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="my-5">
        {showUserList ? (
          <UsuariosPermisos users={users} onUserClick={handleClick} />
        ) : selectedUser ? (
          <div>
            <Button
              style={{ backgroundColor: "#3C6EFD" }} // Color azul tirando a celeste
              onClick={handleBackClick}
              className="mb-4"
            >
              Atrás
            </Button>

            <h2>Permisos de {selectedUser.full_name}</h2>
            <Table striped bordered hover responsive className="mt-3">
              <thead className="table-info">
                <tr>
                  <th>Permiso</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#ffffff" }}>
                {permissions.map((permission, index) => {
                  if (!selectedUser.rol) return null;
                  const userHasPermission = selectedUser.rol.permisos.includes(
                    permission.nombre_permiso
                  );
                  return (
                    <tr key={index}>
                      <td>{permission.nombre_permiso}</td>
                      <td
                        style={{
                          color: userHasPermission ? "green" : "red",
                        }}
                      >
                        {userHasPermission ? "Permitido" : "No permitido"}
                      </td>
                      <td className="text-center">
                        <Form.Check
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
            </Table>
          </div>
        ) : (
          <Alert variant="warning">
            No se pudo cargar el usuario seleccionado.
          </Alert>
        )}
      </Container>
      <Footer />
    </div>
  );
};
