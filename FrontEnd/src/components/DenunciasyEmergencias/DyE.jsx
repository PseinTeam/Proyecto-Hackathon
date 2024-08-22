import React from "react";
import "/public/css/components/inputtext.css";
import "/public/css/components/button.css";

export const DenunciasyEmergencias = () => {
  return (
    <div className="SECCION">
      <section id="Denuncias">
        <h2>Alerta de Seguridad: Denuncias y Emergencias</h2>
        <div className="DivSeccion">
          <div className="DivBotones">
            {/* BOTON DE EMERGENCIA */}
            <div className="buttonwrapper">
              <h2>Boton de Emergencias</h2>
              <button className="buttonEmergencia">
                <p className="text">¡EMERGENCIA!</p>
              </button>
            </div>
          </div>
          <div className="linea-divisoria"></div>

          <div className="inputwrapper">
            <h2>Realice su Denuncia de seguridad</h2>
            <textarea
              spellCheck="false"
              placeholder="Type something here..."
              required
            ></textarea>
            {/* BOTON DE DENUNCIA */}
            <button className="button">
              <p className="text">Denuncia</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DenunciasyEmergencias;
