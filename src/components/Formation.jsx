import React, { useState, useEffect } from "react";
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
import { useLocation } from "react-router-dom";



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

  useEffect(() => {
    const formazioniDiBase = Array.from({ length: 1 }, (_, index) => ({
      universita: `Epicode`,
      titoloStudio: "Full Stack Developer",
      corsoDiStudi: `Full-Time`,
      dataInizioMese: "January",
      dataInizioAnno: "2023",
      dataFineMese: "June",
      dataFineAnno: "2023",
      votazione: "30/30",
      descrizione: `Esperinza di formazione full-time immerso nel mondo della programmazione`,
    }));

    setEsperienzeFormazione(formazioniDiBase);
  }, []);

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

  const location = useLocation();
  const isUser = location.pathname === '/user-profile'

  return (
    <Container className="p-0 border border-solid rounded bg-white p-3">
      <div id="SonContainer-Formation" className="rounded">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Formation</h2>
          <div>
            {isUser && (
              <div id="Add-Icon" onClick={() => setMostraForm(true)}>
                <AiOutlinePlus className="mx-2" id="icon-1" />
                <GoPencil className="mx-2" id="icon-2" />
              </div>
            )}
          </div>
        </div>

        {esperienzeFormazione.length > 0 ? (
          esperienzeFormazione.map((esperienza, index) => (
            <div id="Experience-Conteiner" className="d-flex mb-5" key={index}>
              <div>
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
                  alt="logo"
                  id="logo-formation"
                />
              </div>
              <div>
                <h2 className="m-0 fs-4 HoverBluScritte">{esperienza.universita}</h2>
                <h3 className="m-0 fs-6">{esperienza.titoloStudio}</h3>
                <p className="m-0 text-secondary">
                  {`${esperienza.dataInizioMese || ""} ${esperienza.dataInizioAnno}`} - {`${esperienza.dataFineMese || ""} ${esperienza.dataFineAnno}`}
                </p>
                <p className="m-0">{esperienza.corsoDiStudi}</p>
                <p className="m-0">{esperienza.votazione}</p>
                <p className="m-0">{esperienza.attivitaAssociative}</p>
                <p className="experienceDivInfoLast m-0 mt-2">
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
                Add education
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal">
              <Row id="CondivisioneModifiche">
                <Col className="p-0 m-0">
                  <h2 className="p-0 fs-6">Notify network</h2>
                  <p className="m-0">
                    Turn on to notify your network of key profile changes (such as new education) and work anniversaries. Learn more about
                    <span id="LinkCondivisioneModifiche">
                      sharing profile changes.
                    </span>
                  </p>
                </Col>
                <Col className="col-2 align-self-center p-0 m-0">
                  <Form>
                    <Form.Check type="switch" className="ms-3" id="MyToggle" />
                  </Form>
                </Col>
              </Row>

              <div className="p-4">
                <Row className="pb-4">
                  <label className="text-left">School*</label>
                  <input
                    type="text"
                    value={universita}
                    onChange={(e) => setUniversita(e.target.value)}
                    placeholder="Ex: Universita degli Studi di Salerno"
                    className="InputForm"
                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Degree*</label>
                  <input
                    type="text"
                    value={titoloStudio}
                    onChange={(e) => setTitoloStudio(e.target.value)}
                    placeholder="Ex: Bachelor's"
                    className="InputForm"

                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Field of study*</label>
                  <input
                    type="text"
                    value={corsoDiStudi}
                    onChange={(e) => setCorsoDiStudi(e.target.value)}
                    placeholder="Ex: Business"
                    className="InputForm"

                    required
                  />
                </Row>

                <Container className="pb-4">
                  <label>Start date*</label>

                  <div className="d-flex justify-content-between m-0">
                    <DropdownButton

                      className="DropdownButton "
                      title={dataInizioMese || "Month"}


                      onSelect={(month) => setDataInizioMese(month)}
                    >
                      <Dropdown.Item eventKey="January">January</Dropdown.Item>
                      <Dropdown.Item eventKey="February">
                        February
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="March">March</Dropdown.Item>
                      <Dropdown.Item eventKey="April">April</Dropdown.Item>
                      <Dropdown.Item eventKey="May">May</Dropdown.Item>
                      <Dropdown.Item eventKey="June">June</Dropdown.Item>
                      <Dropdown.Item eventKey="July">July</Dropdown.Item>
                      <Dropdown.Item eventKey="August">August</Dropdown.Item>
                      <Dropdown.Item eventKey="September">
                        September
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="October">October</Dropdown.Item>
                      <Dropdown.Item eventKey="November">
                        November
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="December">
                        December
                      </Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton
                      className="DropdownButton"
                      title={dataInizioAnno || "Year"}
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
                  <label>End date (or expected)*</label>

                  <div className="d-flex justify-content-between m-0">
                    <DropdownButton
                      className="DropdownButton"
                      title={dataFineMese || "Mese"}
                      onSelect={(month) => setDataFineMese(month)}
                    >
                      <Dropdown.Item eventKey="January">January</Dropdown.Item>
                      <Dropdown.Item eventKey="February">
                        February
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="March">March</Dropdown.Item>
                      <Dropdown.Item eventKey="April">April</Dropdown.Item>
                      <Dropdown.Item eventKey="May">May</Dropdown.Item>
                      <Dropdown.Item eventKey="June">June</Dropdown.Item>
                      <Dropdown.Item eventKey="July">July</Dropdown.Item>
                      <Dropdown.Item eventKey="August">August</Dropdown.Item>
                      <Dropdown.Item eventKey="September">
                        September
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="October">October</Dropdown.Item>
                      <Dropdown.Item eventKey="November">
                        November
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="December">
                        December
                      </Dropdown.Item>
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
                  <label>Grade*</label>
                  <input
                    type="text"
                    value={votazione}
                    onChange={(e) => setVotazione(e.target.value)}
                    className="MyInputForm"
                    required
                  />
                </Row>

                <Row className="pb-4">
                  <label>Activities and societies</label>
                  <input
                    type="text"
                    value={attivitaAssociative}
                    onChange={(e) => setAttivitaAssociative(e.target.value)}
                    placeholder="Ex: fishing, volleyball, scuba diving"
                    className="MyInputForm"
                    maxLength={500}

                  />
                </Row>

                <Row className="pb-4">
                  <label>Description</label>
                  <textarea
                    value={descrizione}
                    onChange={(e) => setDescrizione(e.target.value)}
                    className="MyInputForm"
                    maxLength={100000}
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
