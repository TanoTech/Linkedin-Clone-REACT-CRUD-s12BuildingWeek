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
              <p>Content for 1 Company...</p>
            </Col>
            <Col>
              <p>Content for 2 Companies...</p>
            </Col>
          </Row>
        );
      case "newsletter":
        return (
          <Row>
            <Col>
              <p>Content for 1 Newsletter...</p>
            </Col>
            <Col>
              <p>Content for 2 Newsletters...</p>
            </Col>
          </Row>
        );
      case "scuole-universita":
        return (
          <Row>
            <Col>
              <p>Content for 1 School...</p>
            </Col>
            <Col>
              <p>Content for 2 Schools...</p>
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
        return "Show all Companies";
      case "newsletter":
        return "Show all Newsletters";
      case "scuole-universita":
        return "Show all Schools";
      default:
        return null;
    }
  };

  return (
    <Container className="mt-3 mb-3">
      <Card>
        <Card.Header style={{ textAlign: "left", background: "white" }}>
          <div>
            <h5 style={{ margin: "0" }}>Interests</h5>
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
             Companies
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
              Schools
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
