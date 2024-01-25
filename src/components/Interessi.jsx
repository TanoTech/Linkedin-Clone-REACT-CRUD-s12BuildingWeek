import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import InteressiUtente from "./InteressiUtente";

import {
  contenutiPerAziende,
  contenutiPerNewsletter,
  contenutiPerScuoleUniversita,
} from "./InteressiUtente";

const shuffleArray = (array) => {
  
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Interessi = () => {
  const [sezioneAttiva, setSezioneAttiva] = useState("aziende");

  const cambiaSezione = (sezione) => {
    setSezioneAttiva(sezione);
  };

  const getContenutiBySezione = (sezioneAttiva) => {
    switch (sezioneAttiva) {
      case 'aziende':
        return shuffleArray(contenutiPerAziende);
      case 'newsletter':
        return shuffleArray(contenutiPerNewsletter);
      case 'scuole-universita':
        return shuffleArray(contenutiPerScuoleUniversita); 
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
