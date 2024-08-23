import { useEffect, useState } from "react";
import { Navbar } from "../header/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Container, Table, Button, Alert } from "react-bootstrap";

export const Employeepanel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserList, setShowUserList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

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

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = (user) => {
    setSelectedUser(user);
    setShowUserList(false);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
    setShowUserList(true);
  };

  // Filtrar usuarios por nombre y puesto de trabajo
  const filteredUsers = users.filter((user) => {
    return (
      (user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedJob === "" || user.puesto_trabajo === selectedJob)
    );
  });

  // Obtener puestos de trabajo únicos para el filtro
  const jobs = [...new Set(users.map((user) => user.puesto_trabajo))];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="my-5">
        {showUserList ? (
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

            <Table striped bordered hover responsive className="mt-3">
              <thead className="table-info">
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Puesto de trabajo</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#ffffff" }}>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No se encontraron resultados.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.full_name}</td>
                      <td>{user.email}</td>
                      <td>{user.puesto_trabajo}</td>
                      <td className="text-center">
                        <Button
                          variant="outline-primary"
                          className="me-2"
                          onClick={() => handleClick(user)}
                        >
                          Ver Perfil
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        ) : selectedUser ? (
          <div>
            <Button
              style={{ backgroundColor: "#3C6EFD" }} // Color azul tirando a celeste
              onClick={handleBackClick}
              className="mb-4"
            >
              Atrás
            </Button>

            <h2>Perfil de {selectedUser.full_name}</h2>
            {/* Aquí puedes agregar la información adicional del perfil del usuario */}
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
