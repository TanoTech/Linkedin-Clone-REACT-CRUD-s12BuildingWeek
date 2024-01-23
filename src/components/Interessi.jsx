import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Interessi = () => {
  const [sezioneAttiva, setSezioneAttiva] = useState("aziende");

  const cambiaSezione = (sezione) => {
    setSezioneAttiva(sezione);
  };

  const renderContenutoSezione = () => {
    switch (sezioneAttiva) {
      case "aziende":
        return (
          <Row>
            <Col>
              <p>Contenuto 1 per Aziende...</p>
            </Col>
            <Col>
              <p>Contenuto 2 per Aziende...</p>
            </Col>
          </Row>
        );
      case "newsletter":
        return (
          <Row>
            <Col>
              <p>Contenuto 1 per Newsletter...</p>
            </Col>
            <Col>
              <p>Contenuto 2 per Newsletter...</p>
            </Col>
          </Row>
        );
      case "scuole-universita":
        return (
          <Row>
            <Col>
              <p>Contenuto 1 per Scuole o Università...</p>
            </Col>
            <Col>
              <p>Contenuto 2 per Scuole o Università...</p>
            </Col>
          </Row>
        );
      default:
        return null;
    }
  };

  const renderTestoFooter = () => {
    switch (sezioneAttiva) {
      case "aziende":
        return "Mostra tutte le Aziende";
      case "newsletter":
        return "Mostra tutte le Newsletter";
      case "scuole-universita":
        return "Mostra tutte le Scuole & Università";
      default:
        return null;
    }
  };

  return (
    <Container className="mt-3 mb-3">
      <Card>
        <Card.Header style={{ textAlign: "left", background: "white" }}>
          <div>
            <h5 style={{ margin: "0" }}>Interessi</h5>
          </div>
          <div className="d-flex flex-row mt-2">
            <a
              href="#aziende"
              className={`text-left ${
                sezioneAttiva === "aziende" ? "active-link underline" : ""
              }`}
              onClick={() => cambiaSezione("aziende")}
              style={{
                marginRight: "10px",
                color: sezioneAttiva === "aziende" ? "forestgreen" : "inherit",
                textDecoration: "none",
              }}
            >
              Aziende
            </a>
            <a
              href="#newsletter"
              className={`text-left ${
                sezioneAttiva === "newsletter" ? "active-link underline" : ""
              }`}
              onClick={() => cambiaSezione("newsletter")}
              style={{
                marginRight: "10px",
                color:
                  sezioneAttiva === "newsletter" ? "forestgreen" : "inherit",
                textDecoration: "none",
              }}
            >
              Newsletter
            </a>
            <a
              href="#scuole-universita"
              className={`text-left ${
                sezioneAttiva === "scuole-universita"
                  ? "active-link underline"
                  : ""
              }`}
              onClick={() => cambiaSezione("scuole-universita")}
              style={{
                color:
                  sezioneAttiva === "scuole-universita"
                    ? "forestgreen"
                    : "inherit",
                textDecoration: "none",
              }}
            >
              Scuole o Università
            </a>
          </div>
        </Card.Header>
        <Card.Body className="text-center">
          {renderContenutoSezione()}
        </Card.Body>
        <Card.Footer className="bg-white text-center">
  <Link
    to={`/risultati/${sezioneAttiva.toLowerCase()}`}
    className="footer-link"
  >
    {renderTestoFooter()} <FaArrowRight />
  </Link>
</Card.Footer>
      </Card>
    </Container>
  );
};

export default Interessi;
