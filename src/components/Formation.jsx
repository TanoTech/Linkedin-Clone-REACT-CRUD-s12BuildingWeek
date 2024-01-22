import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import "./css/FormationStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div id="SonContainer-Formation">
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
                <img src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8" alt="logo" id="logo-formation" />
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
              <p className="experienceDivInfoLast m-0">{esperienza.descrizione}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No formazione to show</div>
      )}

      {mostraForm && (
        <div id="modal-overlay">
          <div id="modal" className="p-4">
            <h2>Aggiungi titolo di studio</h2>
              <div className="d-flex flex-column">
                <label className="text-left">Scuola o università*</label>
                <input
                  type="text"
                  value={universita}
                  onChange={(e) => setUniversita(e.target.value)}
                  className="InputForm"
                />
              </div>

              <div className="d-flex flex-column">
                <label>Titolo di studio*</label>
                <input
                  type="text"
                  value={titoloStudio}
                  onChange={(e) => setTitoloStudio(e.target.value)}
                  className="InputForm"
                />
              </div>

              <div className="d-flex flex-column">
                <label >Corso di studi*</label>
                <input
                  type="text"
                  value={corsoDiStudi}
                  onChange={(e) => setCorsoDiStudi(e.target.value)}
                  className="InputForm"
                />
              </div>

              <div className="d-flex flex-column">
                <label>Data di inizio*</label>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Mese"
                    value={dataInizioMese}
                    onChange={(e) => setDataInizioMese(e.target.value)}
                    className="InputForm"
                  />
                  <input
                    type="text"
                    placeholder="Anno"
                    value={dataInizioAnno}
                    onChange={(e) => setDataInizioAnno(e.target.value)}
                    className="InputForm"
                  />
                </div>
              </div>

              <div className="d-flex flex-column">
                <label>Data di fine (o prevista)*</label>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Mese"
                    value={dataFineMese}
                    onChange={(e) => setDataFineMese(e.target.value)}
                    className="InputForm"
                  />
                  <input
                    type="text"
                    placeholder="Anno"
                    value={dataFineAnno}
                    onChange={(e) => setDataFineAnno(e.target.value)}
                    className="InputForm"
                  />
                </div>
              </div>

              <div className="d-flex flex-column">
                <label>Votazione*</label>
                <input
                  type="text"
                  value={votazione}
                  onChange={(e) => setVotazione(e.target.value)}
                  className="InputForm"
                />
              </div>

              <div className="d-flex flex-column">
                <label>Attività e associazioni</label>
                <input
                  type="text"
                  value={attivitaAssociative}
                  onChange={(e) => setAttivitaAssociative(e.target.value)}
                  className="InputForm"
                />
              </div>

              <div className="d-flex flex-column">
                <label>Descrizione*</label>
                <textarea
                  value={descrizione}
                  onChange={(e) => setDescrizione(e.target.value)}
                  className="InputForm"
                ></textarea>
              </div>

              <div>
                <button onClick={aggiungiEsperienzaFormazione}>Aggiungi</button>
                <button onClick={() => setMostraForm(false)}>Annulla</button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Formation;
