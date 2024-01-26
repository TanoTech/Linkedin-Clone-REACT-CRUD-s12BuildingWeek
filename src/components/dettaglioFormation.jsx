import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { GoPencil } from "react-icons/go";

const DettaglioFormation = ({ esperienzeFormazione, modificaEsperienzaFormazione }) => {
  const { id } = useParams();
  const esperienza = esperienzeFormazione[id]; 
  const [mostraForm, setMostraForm] = useState(false);

  const handleModificaEsperienza = () => {

    modificaEsperienzaFormazione(id, nuovaEsperienza);
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

      </div>

      <Modal show={mostraForm} onHide={() => setMostraForm(false)}>
      </Modal>
    </Container>
  );
};


export default DettaglioFormation;