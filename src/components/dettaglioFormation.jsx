// DettaglioFormation.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { GoPencil } from "react-icons/go";

const DettaglioFormation = ({ esperienzeFormazione, modificaEsperienzaFormazione }) => {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const esperienza = esperienzeFormazione[id]; // Ottieni l'esperienza specifica

  const [mostraForm, setMostraForm] = useState(false);
  // ... Altri stati necessari per la modifica dell'esperienza

  const handleModificaEsperienza = () => {
    // Logica per la modifica dell'esperienza
    // ...
    modificaEsperienzaFormazione(id, nuovaEsperienza); // Chiama la funzione di modifica
    setMostraForm(false);
  };

  return (
    <Container>
      <div id="SonContainer-Formation" className="center">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Dettaglio Formation</h2>
          <div>
            <div id="Edit-Icon" onClick={() => setMostraForm(true)}>
              <GoPencil className="mx-2" id="icon-2" />
            </div>
          </div>
        </div>

        {/* Renderizza i dettagli dell'esperienza */}
        {/* ... */}
      </div>

      {/* Modal per la modifica dell'esperienza */}
      <Modal show={mostraForm} onHide={() => setMostraForm(false)}>
        {/* ... Contenuto del modal per la modifica */}
      </Modal>
    </Container>
  );
};

export default DettaglioFormation;
