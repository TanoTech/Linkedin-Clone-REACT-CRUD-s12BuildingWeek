import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const DettaglioInteressi = () => {
  const location = useLocation();
  const sezioneAttivaInURL = location.pathname.split("/")[2]; // Otteniamo la sezione dalla URL

  // Esempio di risultati (puoi sostituire questo con i tuoi dati reali)
  const risultatiPerAziende = [
    { id: 1, titolo: "Risultato A1" },
    { id: 2, titolo: "Risultato A2" },
  ];

  const risultatiPerNewsletter = [
    { id: 1, titolo: "Risultato N1" },
    { id: 2, titolo: "Risultato N2" },
  ];

  const risultatiPerScuoleUniversita = [
    { id: 1, titolo: "Risultato SU1" },
    { id: 2, titolo: "Risultato SU2" },
  ];

  const [sezioneAttiva, setSezioneAttiva] = useState(sezioneAttivaInURL || "aziende");

  const handleCambiaSezione = (sezione) => {
    setSezioneAttiva(sezione);
  };

  const renderRisultati = () => {
    switch (sezioneAttiva) {
      case "aziende":
        return risultatiPerAziende;
      case "newsletter":
        return risultatiPerNewsletter;
      case "scuole-universita":
        return risultatiPerScuoleUniversita;
      default:
        return [];
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
            <Link to="/risultati/aziende" className={`text-left ${sezioneAttiva === "aziende" ? "active-link underline" : ""}`} onClick={() => handleCambiaSezione("aziende")} style={{textDecoration: "none", marginRight: "10px"}}>
              Aziende
            </Link>
            <Link to="/risultati/newsletter" className={`text-left ${sezioneAttiva === "newsletter" ? "active-link underline" : ""}`} onClick={() => handleCambiaSezione("newsletter")} style={{textDecoration: "none", marginRight: "10px"}}>
              Newsletter
            </Link>
            <Link to="/risultati/scuole-universita" className={`text-left ${sezioneAttiva === "scuole-universita" ? "active-link underline" : ""}`} onClick={() => handleCambiaSezione("scuole-universita")} style={{textDecoration: "none", marginRight: "10px"}}>
              Scuole o Università
            </Link>
          </div>
        </Card.Header>
        <Card.Body className="text-center">
          <Row>
            {renderRisultati().map((risultato) => (
              <Col key={risultato.id}>
                <p>{risultato.titolo}</p>
                {/* Aggiungi qui altri dettagli del risultato */}
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DettaglioInteressi;