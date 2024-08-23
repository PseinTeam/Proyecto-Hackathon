import React from "react";
import { Navbar } from "../components/header/Navbar";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import cascoImg from "../../public/img/casco.jpg"; // Imagen de ejemplo
import guantesImg from "../../public/img/guantes.jpg"; // Imagen de ejemplo
import gafasImg from "../../public/img/gafas.jpg"; // Imagen de ejemplo
import chalecoImg from "../../public/img/chaleco.jpg"; // Imagen de ejemplo
import { EmergencyModal } from "../components/EmergencyModal/EmergencyModal";

export const Securitymeasurements = () => {
  return (
    <div>
      <Navbar />

      <Container className="my-5">
        <h1 className="text-center mb-4">
          Medidas de Seguridad en la Construcción
        </h1>

        {/* Equipos de Protección Personal */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Equipos de Protección Personal (EPP)</Card.Title>
                <Card.Text>
                  Los equipos de protección personal son fundamentales para
                  garantizar la seguridad de los trabajadores en el sitio de
                  construcción. A continuación se presentan algunos ejemplos
                  clave:
                </Card.Text>
                <ul>
                  <li>
                    <img
                      src={cascoImg}
                      alt="Casco de seguridad"
                      style={{ width: "50px", height: "50px" }}
                    />{" "}
                    <strong>Casco de Seguridad:</strong> Protege la cabeza de
                    posibles caídas de objetos y golpes.
                  </li>
                  <li>
                    <img
                      src={guantesImg}
                      alt="Guantes de seguridad"
                      style={{ width: "50px", height: "50px" }}
                    />{" "}
                    <strong>Guantes de Seguridad:</strong> Protegen las manos
                    contra cortes, abrasiones y sustancias químicas.
                  </li>
                  <li>
                    <img
                      src={gafasImg}
                      alt="Gafas de seguridad"
                      style={{ width: "50px", height: "50px" }}
                    />{" "}
                    <strong>Gafas de Seguridad:</strong> Previenen daños
                    oculares causados por escombros, polvo y sustancias
                    químicas.
                  </li>
                  <li>
                    <img
                      src={chalecoImg}
                      alt="Chaleco de seguridad"
                      style={{ width: "50px", height: "50px" }}
                    />{" "}
                    <strong>Chaleco de Seguridad:</strong> Mejora la visibilidad
                    del trabajador y protege contra posibles impactos.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Protección de Tableros Eléctricos */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Protección de los Tableros Eléctricos</Card.Title>
                <Card.Text>
                  Los tableros eléctricos deben estar debidamente protegidos
                  para prevenir accidentes eléctricos. Algunas medidas incluyen:
                </Card.Text>
                <ul>
                  <li>Instalar cubiertas a prueba de agua y polvo.</li>
                  <li>Colocar señalización clara de advertencia.</li>
                  <li>
                    Realizar mantenimientos regulares y verificaciones de
                    seguridad.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sistemas de Señalización y Vallado */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Sistemas de Señalización y Vallado</Card.Title>
                <Card.Text>
                  La señalización y el vallado son cruciales para la seguridad
                  en áreas de construcción. Deben incluir:
                </Card.Text>
                <ul>
                  <li>Señales de advertencia en áreas peligrosas.</li>
                  <li>
                    Vallas de seguridad para restringir el acceso a zonas de
                    riesgo.
                  </li>
                  <li>
                    Marcado claro de rutas de evacuación y salidas de
                    emergencia.
                  </li>
                </ul>
                {/* Se recomienda incluir una imagen de ejemplos de señalización y vallado */}
              </Card.Body>
            </Card>
          </Col>

          {/* Condiciones de Circulación */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Condiciones de Circulación Adecuadas</Card.Title>
                <Card.Text>
                  Mantener condiciones adecuadas de circulación es esencial para
                  evitar accidentes:
                </Card.Text>
                <ul>
                  <li>Rutas de paso bien señalizadas y despejadas.</li>
                  <li>
                    Áreas de acopio de materiales organizadas para evitar
                    obstrucciones.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Extintores y Protección Contra Incendios */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Extintores y Protección Contra Incendios
                </Card.Title>
                <Card.Text>
                  La protección contra incendios debe incluir:
                </Card.Text>
                <ul>
                  <li>Extintores accesibles y en buen estado.</li>
                  <li>Sistemas de rociadores y alarmas contra incendios.</li>
                  <li>
                    Capacitación del personal en el uso de equipos contra
                    incendios.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Medidas de Prevención Ante Caída */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Medidas de Prevención Ante Caída de Personas y Objetos
                </Card.Title>
                <Card.Text>
                  Las medidas de prevención para caídas incluyen:
                </Card.Text>
                <ul>
                  <li>Uso de barandillas y redes de seguridad.</li>
                  <li>
                    Entrenamiento para el manejo seguro de herramientas y
                    materiales.
                  </li>
                  <li>
                    Inspección regular de equipos de protección contra caídas.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Orden y Limpieza */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Orden y Limpieza en la Zona de Trabajo</Card.Title>
                <Card.Text>
                  Mantener el área de trabajo limpia y ordenada es crucial para
                  la seguridad. Incluye:
                </Card.Text>
                <ul>
                  <li>Eliminar desechos y escombros regularmente.</li>
                  <li>Organizar herramientas y materiales en su lugar.</li>
                  <li>Realizar limpiezas periódicas para evitar riesgos.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Acopio y Almacenamiento */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Acopio y Almacenamiento Organizado de Materiales
                </Card.Title>
                <Card.Text>
                  El almacenamiento adecuado de materiales reduce riesgos.
                  Asegúrate de:
                </Card.Text>
                <ul>
                  <li>Almacenar materiales en áreas designadas.</li>
                  <li>Utilizar estanterías y soportes adecuados.</li>
                  <li>
                    Evitar el apilamiento inestable que pueda causar caídas.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Condiciones de Temperatura, Iluminación y Ventilación */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Condiciones Adecuadas de Temperatura, Iluminación y
                  Ventilación
                </Card.Title>
                <Card.Text>
                  Garantizar un entorno cómodo y seguro incluye:
                </Card.Text>
                <ul>
                  <li>Controlar la temperatura para evitar extremos.</li>
                  <li>
                    Asegurar una iluminación adecuada en todas las áreas de
                    trabajo.
                  </li>
                  <li>
                    Proveer ventilación suficiente para evitar acumulación de
                    gases nocivos.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Acceso a Sanitarios y Vestuarios */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Acceso a Sanitarios y Vestuarios para el Personal de Obra
                </Card.Title>
                <Card.Text>
                  Es crucial proporcionar instalaciones adecuadas:
                </Card.Text>
                <ul>
                  <li>Sanitarios limpios y accesibles en todo momento.</li>
                  <li>Vestuarios con suficiente espacio para el personal.</li>
                  <li>Acceso a agua potable en las áreas de descanso.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gestión de Desechos */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Gestión Adecuada de Desechos</Card.Title>
                <Card.Text>
                  La gestión de desechos es vital para la seguridad y el medio
                  ambiente:
                </Card.Text>
                <ul>
                  <li>Separar desechos cloacales, orgánicos e inorgánicos.</li>
                  <li>
                    Implementar sistemas de reciclaje y eliminación segura.
                  </li>
                  <li>
                    Contratar servicios de recolección y disposición adecuada.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Seguro de Riesgo */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Seguro de Riesgo de Trabajo</Card.Title>
                <Card.Text>
                  Asegurar la cobertura adecuada para el personal:
                </Card.Text>
                <ul>
                  <li>
                    Contratar seguros que cubran accidentes laborales y
                    enfermedades.
                  </li>
                  <li>Verificar que el seguro cubra a terceros afectados.</li>
                  <li>
                    Realizar revisiones periódicas de las pólizas de seguro.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
      <EmergencyModal />
    </div>
  );
};
