import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../context/WebSocketContext"
import { useNotification } from "../../context/NotificationContext";
import { Navbar } from "../header/Navbar";
import { EmergencyModal } from "../EmergencyModal/EmergencyModal";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const Panel = () => {
  const ws = useWebSocket();
  const { showNotification } = useNotification();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8000/Usuarios/alert/messages");
        if (!response.ok) throw new Error("Error al obtener mensajes");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const sendAlert = (event) => {
    event.preventDefault();
    if (ws) {
      ws.send(JSON.stringify({ message: input }));
      setInput("");
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendEmergency = () => {
    if (ws) {
      ws.send(JSON.stringify({ message: "Emergencia" }));
      handleClose();
    }
  };

  const columns = [
    { field: "timestamp", headerName: "Fecha del mensaje", width: 200 },
    { field: "message", headerName: "Mensaje de la denuncia", width: 600 },
  ];

  const rows = messages.map((msg, index) => ({
    id: index,
    timestamp: new Date(msg.timestamp).toLocaleString(),
    message: msg.message,
  }));

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <h1>Panel de denuncias y emergencias</h1>
        <div className="mb-4">
          <h2>Alertas de seguridad</h2>
          <div style={{ height: 400, width: "100%" }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Fecha del mensaje</th>
                  <th>Mensaje de la denuncia</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.timestamp}</td>
                    <td>{row.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-danger" onClick={handleOpen}>
          Enviar emergencia
        </button>
        <div className={`modal ${open ? "show" : ""}`} style={{ display: open ? "block" : "none" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="emergency-modal-title">Confirmación de Emergencia</h5>
                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>¿Está seguro de que desea enviar una alerta de emergencia a todos los clientes?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={sendEmergency}>Enviar</button>
                <button className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
        <EmergencyModal />
      </div>
    </div>
  );
};
