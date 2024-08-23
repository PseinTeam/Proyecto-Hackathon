import React from "react";
import "../../../public/css/components/Footer.css";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-body-tertiary">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Dirección: Sarmiento 1962, CABA</p>
            <p>Teléfono: 0-800-666-6778</p>
            <p>Correo electrónico: ayuda@srt.gob.ar</p>
            



          </Col>
          <Col md={4}>
            <h5>Horario de Atención</h5>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </Col>
          <Col md={4}>
            <h5>SRT y ART</h5>
            <p><strong>SRT:</strong> Sistema de Riesgos del Trabajo</p>
            <p><strong>ART:</strong> Aseguradora de Riesgos del Trabajo</p>
            <p>Más información en: <a href="https://www.srt.gob.ar" target="_blank" rel="noopener noreferrer">www.srt.gob.ar</a></p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <span className="text-body-secondary">© 2024 SeguFor. Todos los derechos reservados.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
