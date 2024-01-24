import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "./css/Experience.css";

const Experience = ({ data }) => {
  const [mostraForm, setMostraForm] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    frequency: null,
    startDate: null,
    endDate: null,
    locType: null,
    description: "",
    location: "",
  });

  useEffect(() => {
    setMostraForm(false);
  }, []);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o";

  useEffect(() => {
    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta GET:", error);
      });
  }, [data, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: date,
    }));
  };

  const handleAddExperience = () => {
    axios
      .post(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences`,
        newExperience,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setExperiences((prevExperiences) => [
          ...prevExperiences,
          { ...response.data, _id: response.data._id },
        ]);
        setNewExperience({
          role: "",
          company: "",
          frequency: null,
          startDate: null,
          endDate: null,
          locType: null,
          description: "",
          location: "",
        });
        setMostraForm(false);
      })
      .catch((error) => {
        console.error("Errore nella richiesta POST:", error);
      });
  };

  const handleDeleteExperience = (expId) => {
    axios
      .delete(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setExperiences((prevExperiences) =>
          prevExperiences.filter((exp) => exp._id !== expId)
        );
      })
      .catch((error) => {
        console.error("Errore nella richiesta DELETE:", error);
      });
  };

  const handleEditExperience = (expId) => {
    const updatedExperience = {
      role: newExperience.role,
      company: newExperience.company,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate,
      description: newExperience.description,
      location: newExperience.location,
      locType: newExperience.locType,
    };

    axios
      .put(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`,
        updatedExperience,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setExperiences((prevExperiences) => {
          const updatedExperiences = prevExperiences.map((exp) => {
            if (exp._id === expId) {
              return response.data;
            } else {
              return exp;
            }
          });
          return updatedExperiences;
        });

        setNewExperience({
          role: "",
          company: "",
          frequency: "",
          startDate: null,
          endDate: null,
          description: "",
          location: "",
          locType: "",
        });
      })
      .catch((error) => {
        console.error("Errore nella richiesta PUT:", error);
      });
  };

  return (
    <Container className="bg-white mb-4 p-3 rounded border vorde-solid">
      <div className="d-flex justify-content-between">
        <h2 id="ExperienceTitle" className="mb-4">
          Experience
        </h2>
        <div>
          <div id="Add-Icon" onClick={() => setMostraForm(true)}>
            <AiOutlinePlus className="mx-2" id="icon-1" />
            <GoPencil className="mx-2" id="icon-2" />
          </div>
        </div>
      </div>

      <div id="Experience-Conteiner" className="d-flex mb-5">
        <div>
          <ul className="ShowExperience">
            {experiences.map((experience) => (
              <li key={experience._id}>
                <div className="d-flex justify-content">
                  <img
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
                    alt="logo"
                    id="logo-formationEx"
                  />

                  <div>
                    <h2 className="RoleEx">{experience.role}</h2>
                    <span className="CompanyEx">
                      {experience.company}
                    </span> · <span className="FrequencyEx">Full Time</span>
                    <p className="DateEx">
                      {" "}
                      {format(
                        new Date(experience.startDate),
                        "dd/MM/yyyy"
                      )} -{" "}
                      {experience.endDate
                        ? format(new Date(experience.endDate), "dd/MM/yyyy")
                        : "In corso"}
                    </p>
                    <p className="LocationEx">
                      {/*experience.location*/} Rome ·{/*experience.locType*/}{" "}
                      Hybrid
                    </p>
                    <p className="DescEx">{experience.description}</p>
                    <button
                      className="DeleteEx"
                      onClick={() => handleDeleteExperience(experience._id)}
                    >
                      Delete Experience
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<ul>
        {experiences.map((experience) => (
          <li key={experience._id}>
            <h2>
              {experience.role} at {experience.company}
            </h2>
            <p>Area: {experience.area}</p>
            <p>Descrizione: {experience.description}</p>
            <p>
              Data di Inizio:{" "}
              {format(new Date(experience.startDate), "dd/MM/yyyy")}
            </p>
            <p>
              Data di Fine:{" "}
              {experience.endDate
                ? format(new Date(experience.endDate), "dd/MM/yyyy")
                : "In corso"}
            </p>
            <button onClick={() => handleDeleteExperience(experience._id)}>
              Elimina
            </button>
          </li>
        ))}
              </ul>*/}
      {mostraForm && (
        <Modal size="lg" show={mostraForm} onHide={() => setMostraForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="fs-6">Add Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal">
            <Row id="CondivisioneModificheEx">
              <Col className="p-0 m-0">
                <h2 className="p-0 fs-6">Notify network</h2>
                <p className="m-0">
                  Turn on to notify your network of key profile changes (such as
                  new education) and work anniversaries. Learn more about
                  <span id="LinkCondivisioneModificheEX">
                    sharing profile changes.
                  </span>
                </p>
              </Col>
              <Col className="col-2 align-self-center p-0 m-0">
                <Form>
                  <Form.Check type="switch" className="ms-3" id="MyToggleEx" />
                </Form>
              </Col>
            </Row>

            <div className="p-4">
              <Row className="pb-4">
                <label className="text-left">Title*</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Ex: retail sales manager"
                  onChange={handleInputChange}
                  value={newExperience.role}
                />
              </Row>

              <Row className="pb-4">
                <label>Employment type*</label>
                <Form.Select
                  name="frequency"
                  onChange={handleInputChange}
                  value={
                    newExperience.frequency ? newExperience.frequency.value : ""
                  }
                >
                  <option value="">Select Frequency</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                  <option value="Seasonal">Seasonal</option>
                </Form.Select>
              </Row>

              <Row className="pb-4">
                <label>Company name*</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Ex: Microsoft"
                  onChange={handleInputChange}
                  value={newExperience.company}
                />
              </Row>

              <Row className="pb-4">
                <label>Location*</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Ex: London, UK"
                  onChange={handleInputChange}
                  value={newExperience.location}
                />
              </Row>

              <Row className="pb-4">
                <label>Location type*</label>
                <Form.Select
                  name="locType"
                  onChange={handleInputChange}
                  value={
                    newExperience.locType ? newExperience.locType.value : ""
                  }
                >
                  <option value="">Select Frequency</option>
                  <option value="Full Time">On Site</option>
                  <option value="Part Time">Hybrid</option>
                  <option value="Self Employed">Remote</option>
                </Form.Select>
              </Row>

              <Row className="pb-4">
                <label>Start Date*</label>
                <DatePicker
                  selected={newExperience.startDate}
                  onChange={(date) => handleDateChange(date, "startDate")}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Start Date"
                />
              </Row>

              <Row className="pb-4">
                <label>End Date</label>
                <DatePicker
                  selected={newExperience.endDate}
                  onChange={(date) => handleDateChange(date, "endDate")}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="End Date"
                />
              </Row>

              <Row className="pb-4">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Describe your job..."
                  onChange={handleInputChange}
                  value={newExperience.description}
                />
              </Row>
            </div>
          </Modal.Body>
          <button onClick={handleAddExperience}>Aggiungi</button>
        </Modal>
      )}
      {/*<h2>Aggiungi una Nuova Esperienza</h2>
            <div>
                <input type="text" name="role" placeholder="Ruolo" onChange={handleInputChange} value={newExperience.role} />
                <input type="text" name="company" placeholder="Azienda" onChange={handleInputChange} value={newExperience.company} />
                <DatePicker
                    selected={newExperience.startDate}
                    onChange={(date) => handleDateChange(date, "startDate")}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Data di Inizio"
                />
                <DatePicker
                    selected={newExperience.endDate}
                    onChange={(date) => handleDateChange(date, "endDate")}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Data di Fine"
                />
                <input type="text" name="description" placeholder="Descrizione" onChange={handleInputChange} value={newExperience.description} />
                <input type="text" name="area" placeholder="Area" onChange={handleInputChange} value={newExperience.area} />
                <button onClick={handleAddExperience}>Aggiungi</button>
                </div> */}
      <div></div>
    </Container>
  );
};

export default Experience;
