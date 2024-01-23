import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import "./css/FormationStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Formation = () => {
  const [esperienzeFormazione, setEsperienzeFormazione] = useState([]);
  const [mostraForm, setMostraForm] = useState(false);
  const [universita, setUniversita] = useState("");
  const [titoloStudio, setTitoloStudio] = useState("");
  const [corsoDiStudi, setCorsoDiStudi] = useState("");
  const [dataInizioMese, setDataInizioMese] = useState("");
  const [dataInizioAnno, setDataInizioAnno] = useState("");
  const [dataFineMese, setDataFineMese] = useState("");
  const [dataFineAnno, setDataFineAnno] = useState("");
  const [votazione, setVotazione] = useState("");
  const [attivitaAssociative, setAttivitaAssociative] = useState("");
  const [descrizione, setDescrizione] = useState("");

  const aggiungiEsperienzaFormazione = () => {
    const nuovaEsperienzaFormazione = {
      universita,
      titoloStudio,
      corsoDiStudi,
      dataInizio: `${dataInizioMese} ${dataInizioAnno}`,
      dataFine: `${dataFineMese} ${dataFineAnno}`,
      votazione,
      attivitaAssociative,
      descrizione,
    };

    setEsperienzeFormazione([
      ...esperienzeFormazione,
      nuovaEsperienzaFormazione,
    ]);

    setUniversita("");
    setTitoloStudio("");
    setCorsoDiStudi("");
    setDataInizioMese("");
    setDataInizioAnno("");
    setDataFineMese("");
    setDataFineAnno("");
    setVotazione("");
    setAttivitaAssociative("");
    setDescrizione("");

    setMostraForm(false);
  };

  return (
    <Container>
      <div id="SonContainer-Formation" className="center">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Formation</h2>
          <div>
            <div id="Add-Icon" onClick={() => setMostraForm(true)}>
              <AiOutlinePlus className="mx-2" id="icon-1" />
              <GoPencil className="mx-2" id="icon-2" />
            </div>
          </div>
        </div>

        {esperienzeFormazione.length > 0 ? (
          esperienzeFormazione.map((esperienza, index) => (
            <div id="Experience-Conteiner" className="d-flex" key={index}>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
                  alt="logo"
                  id="logo-formation"
                />
              </div>
              <div>
                <h5 className="m-0 fs-4">{esperienza.universita}</h5>
                <h6 className="m-0 fw-400">{esperienza.titoloStudio}</h6>
                <p className="m-0">
                  {esperienza.dataInizio} - {esperienza.dataFine}
                </p>
                <p className="m-0">{esperienza.corsoDiStudi}</p>
                <p className="m-0">{esperienza.votazione}</p>
                <p className="m-0">{esperienza.attivitaAssociative}</p>
                <p className="experienceDivInfoLast m-0">
                  {esperienza.descrizione}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No formazione to show</div>
        )}

        {mostraForm && (
          <Modal show={mostraForm} onHide={() => setMostraForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title className="fs-6">
                Aggiungi titolo di studio
              </Modal.Title>
            </Modal.Header>
            <Container id="CondivisioneModifiche">
              <Row>
                <Col className="p-0 m-0">
                  <h2 className="p-0 fs-6">Informa la rete</h2>
                  <p className="m-0">
                    Attiva l’opzione per informare la tua rete delle principali
                    modifiche al profilo (ad esempio nuovi titoli di studio) e
                    degli anniversari lavorativi. Scopri di più sulla
                    <span id="LinkCondivisioneModifiche">
                      condivisione delle modifiche del profilo.
                    </span>
                  </p>
                </Col>
                <Col className="col-2 align-self-center p-0 m-0">
                  <Form>
                    <Form.Check type="switch" className="ms-3" id="MyToggle" />
                  </Form>
                </Col>
              </Row>
            </Container>
            <Modal.Body id="modal">
              <div className="p-4">
                <Row className="pb-4">
                  <label className="text-left">Scuola o università*</label>
                  <input
                    type="text"
                    value={universita}
                    onChange={(e) => setUniversita(e.target.value)}
                    placeholder="Esempio: Universita degli Studi di Salerno"
                    className="InputForm"
                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Titolo di studio*</label>
                  <input
                    type="text"
                    value={titoloStudio}
                    onChange={(e) => setTitoloStudio(e.target.value)}
                    placeholder="Esempio: Laurea"
                    className="InputForm"
                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Corso di studi*</label>
                  <input
                    type="text"
                    value={corsoDiStudi}
                    onChange={(e) => setCorsoDiStudi(e.target.value)}
                    placeholder="Esempio: Economia"
                    className="InputForm"
                    required
                  />
                </Row>

                <Container className="pb-4">
                  <label>Data di inizio*</label>
                  <div className="d-flex justify-content-between m-0">
                    {/* Aggiungi un DropdownButton per il mese */}
                    <DropdownButton
                       className="DropdownButton "
                      title={dataInizioMese || "Mese"}
                      onSelect={(month) => setDataInizioMese(month)}
                    >
                      <Dropdown.Item eventKey="January">January</Dropdown.Item>
                      <Dropdown.Item eventKey="February">February</Dropdown.Item>
                      <Dropdown.Item eventKey="March">March</Dropdown.Item>
                      <Dropdown.Item eventKey="April">April</Dropdown.Item>
                      <Dropdown.Item eventKey="May">May</Dropdown.Item>
                      <Dropdown.Item eventKey="June">June</Dropdown.Item>
                      <Dropdown.Item eventKey="July">July</Dropdown.Item>
                      <Dropdown.Item eventKey="August">August</Dropdown.Item>
                      <Dropdown.Item eventKey="September">September</Dropdown.Item>
                      <Dropdown.Item eventKey="October">October</Dropdown.Item>
                      <Dropdown.Item eventKey="November">November</Dropdown.Item>
                      <Dropdown.Item eventKey="December">December</Dropdown.Item>
                    </DropdownButton>

                    {/* Aggiungi un DropdownButton per l'anno */}
                    <DropdownButton
                      className="DropdownButton"
                      title={dataInizioAnno || "Anno"}
                      onSelect={(year) => setDataInizioAnno(year)}
                    >
                      <Dropdown.Item eventKey="2022">2024</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2023</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2021</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2020</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2019</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2018</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2017</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2016</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2015</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2014</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2013</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2012</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2011</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2010</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2009</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2008</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2007</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2006</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2005</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2004</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2003</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2002</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2001</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2000</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Container>

                <Container className="pb-4">
                  <label>Data di fine (o prevista)*</label>
                  <div className="d-flex justify-content-between m-0">
                    <DropdownButton
                       className="DropdownButton"
                      title={dataFineMese || "Mese"}
                      onSelect={(month) => setDataFineMese(month)}
                    >
                      <Dropdown.Item eventKey="January">January</Dropdown.Item>
                      <Dropdown.Item eventKey="February">February</Dropdown.Item>
                      <Dropdown.Item eventKey="March">March</Dropdown.Item>
                      <Dropdown.Item eventKey="April">April</Dropdown.Item>
                      <Dropdown.Item eventKey="May">May</Dropdown.Item>
                      <Dropdown.Item eventKey="June">June</Dropdown.Item>
                      <Dropdown.Item eventKey="July">July</Dropdown.Item>
                      <Dropdown.Item eventKey="August">August</Dropdown.Item>
                      <Dropdown.Item eventKey="September">September</Dropdown.Item>
                      <Dropdown.Item eventKey="October">October</Dropdown.Item>
                      <Dropdown.Item eventKey="November">November</Dropdown.Item>
                      <Dropdown.Item eventKey="December">December</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                       className="DropdownButton"
                      title={dataFineAnno || "Anno"}
                      onSelect={(year) => setDataFineAnno(year)}
                    >
                      <Dropdown.Item eventKey="2022">2024</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2023</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2021</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2020</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2019</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2018</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2017</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2016</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2015</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2014</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2013</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2012</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2011</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2010</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2009</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2008</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2007</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2006</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2005</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2004</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2003</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2002</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2001</Dropdown.Item>
                      <Dropdown.Item eventKey="2022">2000</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Container>

                <Row className="pb-4">
                  <label>Votazione*</label>
                  <input
                    type="text"
                    value={votazione}
                    onChange={(e) => setVotazione(e.target.value)}
                    className="InputForm"
                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Attività e associazioni</label>
                  <input
                    type="text"
                    value={attivitaAssociative}
                    onChange={(e) => setAttivitaAssociative(e.target.value)}
                    placeholder="Esempio: pesca, pallavolo, immersione subacquee"
                    className="InputForm"
                  />
                </Row>

                <Row className="pb-4">
                  <label>Descrizione</label>
                  <textarea
                    value={descrizione}
                    onChange={(e) => setDescrizione(e.target.value)}
                    className="InputForm"
                  ></textarea>
                </Row>
              </div>
            </Modal.Body>
            <Container className="my-3" id="ButtonConteiner">
              <Button id="ButtonSave" onClick={aggiungiEsperienzaFormazione}>
                Save
              </Button>
            </Container>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default Formation;
