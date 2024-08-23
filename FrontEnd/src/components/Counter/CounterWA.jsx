import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DenunciasyEmergencias from "../DenunciasyEmergencias/DyE";
import "/public/css/components/inputtext.css";
import "/public/css/components/button.css";

export const CounterWA = () => {
  // Estado para el contador
  const [count, setCount] = useState(() => {
    // Obtener el valor almacenado en localStorage al cargar el componente
    const savedCount = localStorage.getItem("hourlyCounter");
    const lastUpdated = localStorage.getItem("lastUpdated");

    if (savedCount === null || lastUpdated === null) {
      return 0; // Si no hay datos en localStorage, inicializa el contador en 0
    }

    const now = new Date();
    const lastUpdateTime = new Date(lastUpdated);

    // Verificar si el contador fue actualizado en la última hora
    if (now - lastUpdateTime < 3600000) {
      // 3600000 ms = 1 hora
      return parseInt(savedCount, 10) || 0;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem("hourlyCounter", newCount);
        localStorage.setItem("lastUpdated", new Date().toISOString());
        return newCount;
      });
    }, 3000); // Verifica cada 30 segundos

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
      {/* Pasa la función resetCounter como prop a DenunciasyEmergencias */}
      <DenunciasyEmergencias onEmergency={resetCounter} />
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <h1 className="card-title">Días Sin Emergencias</h1>
          <p className="card-text display-4">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterWA;
