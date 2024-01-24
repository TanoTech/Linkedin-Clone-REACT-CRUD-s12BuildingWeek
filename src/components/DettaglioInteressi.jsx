import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import InteressiUtente from "./InteressiUtente";

import {
  contenutiPerAziende,
  contenutiPerNewsletter,
  contenutiPerScuoleUniversita,
} from "./InteressiUtente";

const DettaglioInteressi = () => {
  const location = useLocation();
  const sezioneAttivaInURL = location.pathname.split("/")[2];

  
  const [sezioneAttiva, setSezioneAttiva] = useState(
    sezioneAttivaInURL || "aziende"
  );

  const handleCambiaSezione = (sezione) => {
    setSezioneAttiva(sezione);
  };

  const renderRisultati = () => {
    switch (sezioneAttiva) {
      case "aziende":
        return contenutiPerAziende;
      case "newsletter":
        return contenutiPerNewsletter;
      case "scuole-universita":
        return contenutiPerScuoleUniversita;
      default:
        return [];
    }
  };

  return (
    <Container className="mt-3 mb-3">
      <Card>
        <Card.Header style={{ textAlign: "left", background: "white" }}>
          <div>
            <Link
              to="/user-profile"
              style={{
                color: "black",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaArrowLeft style={{ marginRight: "10px" }} />
              <span className="grassetto">Interests</span>
            </Link>
          </div>
          <div className="d-flex flex-row mt-2">
            <Link
              to="/risultati/aziende"
              className={`text-left ${
                sezioneAttiva === "aziende"
                  ? "active-link underline"
                  : "black-link"
              }`}
              onClick={() => handleCambiaSezione("aziende")}
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              Companies
            </Link>
            <Link
              to="/risultati/newsletter"
              className={`text-left ${
                sezioneAttiva === "newsletter"
                  ? "active-link underline"
                  : "black-link"
              }`}
              onClick={() => handleCambiaSezione("newsletter")}
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              Newsletter
            </Link>
            <Link
              to="/risultati/scuole-universita"
              className={`text-left ${
                sezioneAttiva === "scuole-universita"
                  ? "active-link underline"
                  : "black-link"
              }`}
              onClick={() => handleCambiaSezione("scuole-universita")}
              style={{ textDecoration: "none", marginRight: "10px" }}
            >
              Schools
            </Link>
          </div>
        </Card.Header>
        <Card.Body className="text-center">
          <Row>
            <Col>
              <InteressiUtente
                sezioneAttiva={sezioneAttiva}
                risultatiAttuali={renderRisultati()}
                showUnfollowButton={true}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DettaglioInteressi;
