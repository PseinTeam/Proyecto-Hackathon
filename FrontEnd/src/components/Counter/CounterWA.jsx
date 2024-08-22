import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const CounterWA = () => {
  // Estado para el contador
  const [count, setCount] = useState(() => {
    // Obtener el valor almacenado en localStorage al cargar el componente
    const savedCount = localStorage.getItem("hourlyCounter");
    const lastUpdated = localStorage.getItem("lastUpdated");

    // Verificar si el contador fue actualizado en la última hora
    const now = new Date();
    const lastUpdateTime = new Date(lastUpdated);
    if (now - lastUpdateTime < 3600000) {
      // 3600000 ms = 1 hora
      return parseInt(savedCount, 10) || 0;
    } else {
      return 0;
    }
  });

  // useEffect para incrementar el contador automáticamente cada hora
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const lastUpdateTime = new Date(localStorage.getItem("lastUpdated"));

      if (now - lastUpdateTime >= 3600000) {
        // 3600000 ms = 1 hora
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          localStorage.setItem("hourlyCounter", newCount);
          localStorage.setItem("lastUpdated", now.toISOString());
          return newCount;
        });
      }
    }, 60000); // Verifica cada minuto

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  // Función para reiniciar el contador
  const resetCounter = () => {
    setCount(0);
    localStorage.setItem("hourlyCounter", 0);
    localStorage.setItem("lastUpdated", new Date().toISOString());
  };

  return (
    <div className="container text-center mt-5">
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <h1 className="card-title">Dias Sin Emergencias</h1>
          <p className="card-text display-4">{count}</p>
          <button className="btn btn-danger" onClick={resetCounter}>
            Reiniciar Contador
          </button>
        </div>
      </div>
    </div>
  );
};
