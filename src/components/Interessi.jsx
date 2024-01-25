import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import InteressiUtente from "./InteressiUtente";

import {
  contenutiPerAziende,
  contenutiPerNewsletter,
  contenutiPerScuoleUniversita,
} from "./InteressiUtente";

const Interessi = () => {
  const [sezioneAttiva, setSezioneAttiva] = useState("aziende");

  const cambiaSezione = (sezione) => {
    setSezioneAttiva(sezione);
  };

  const getContenutiBySezione = (sezioneAttiva) => {
    switch (sezioneAttiva) {
      case 'aziende':
        return contenutiPerAziende;
      case 'newsletter':
        return contenutiPerNewsletter;
      case 'scuole-universita':
        return contenutiPerScuoleUniversita; 
      default:
        return [];
    }
  };

  return (
    <Container className="mt-3 mb-3 p-0 borded border-solid">
      <Card className="border border-none ms-0">
        <Card.Header style={{ textAlign: "left", background: "white" }}>
          <div>
            <h5>Interests</h5>
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
          <Row>
            {getContenutiBySezione(sezioneAttiva).slice(0, 2).map((contenuto, index) => (
              <Col key={index}>
                <InteressiUtente sezioneAttiva={sezioneAttiva} risultatiAttuali={[contenuto]} showUnfollowButton={false} />
              </Col>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer className="bg-white text-center">
          <Link
            to={`/risultati/${sezioneAttiva.toLowerCase()}`}
            className="footer-link"
          >
            Mostra tutte le{" "}
            {sezioneAttiva.charAt(0).toUpperCase() + sezioneAttiva.slice(1)}{" "}
            <FaArrowRight />
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Interessi;

