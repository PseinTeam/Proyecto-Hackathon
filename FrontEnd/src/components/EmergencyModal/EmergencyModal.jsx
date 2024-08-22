import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../context/WebSocketContext";
import { useNotification } from "../../context/NotificationContext";

export const EmergencyModal = () => {
  const ws = useWebSocket();
  const { showNotification } = useNotification();
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  useEffect(() => {
    if (!ws) return;

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'emergency') {
        setEmergencyOpen(true);
        showNotification("Se ha recibido una alerta de emergencia");
      }
    };

    ws.addEventListener('message', handleMessage);

    return () => {
      ws.removeEventListener('message', handleMessage);
    };
  }, [ws, showNotification]);

  const handleEmergencyClose = () => setEmergencyOpen(false);

  return (
    <div className={`modal ${emergencyOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: emergencyOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¡Emergencia!</h5>
            <button type="button" className="close" aria-label="Close" onClick={handleEmergencyClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Se ha recibido una alerta de emergencia. Por favor, tome las medidas necesarias.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleEmergencyClose}>Entendido</button>
          </div>
        </div>
      </div>
    </div>
  );
};
