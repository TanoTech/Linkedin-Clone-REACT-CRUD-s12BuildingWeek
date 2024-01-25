import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { ProfileContext } from "../redux/contexts/ProfileContext";
import "./css/Experience.css";

const Experience = ({ data }) => {
  const { selectedToken } = useContext(ProfileContext);
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
    area: "",
  });

  const [showModalEditExp, setShowModalEditExp] = useState(false);
  const [editExperienceId, setEditExperienceId] = useState(null);

  const handleShowModalEditExp = () => setShowModalEditExp(true);
  const handleCloseModalEditExp = () => setShowModalEditExp(false);

  const handleEditExperience = (expId) => {
    const experienceToEdit = experiences.find((exp) => exp._id === expId);

    setNewExperience({
      role: experienceToEdit.role,
      company: experienceToEdit.company,
      frequency: experienceToEdit.frequency,
      startDate: new Date(experienceToEdit.startDate),
      endDate: experienceToEdit.endDate ? new Date(experienceToEdit.endDate) : null,
      locType: experienceToEdit.locType,
      description: experienceToEdit.description,
      area: experienceToEdit.area,
    });

    setEditExperienceId(expId);
    handleShowModalEditExp();
  };

  const handleSaveEditExperience = () => {
    if (editExperienceId) {
      handleUpdateExperience(editExperienceId);
      handleCloseModalEditExp();
    }
  };

  const handleUpdateExperience = (expId) => {
    const updatedExperience = {
      role: newExperience.role,
      company: newExperience.company,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate,
      description: newExperience.description,
      area: newExperience.area,
      locType: newExperience.locType,
    };

    axios
      .put(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`,
        updatedExperience,
        {
          headers: {
            Authorization: `Bearer ${selectedToken}`,
          },
        }
      )
      .then((response) => {
        setExperiences((prevExperiences) => {
          const updatedExperiences = prevExperiences.map((exp) => {
            return exp._id === expId ? response.data : exp;
          });
          return updatedExperiences;
        });

        setNewExperience({
          role: "",
          company: "",
          frequency: null,
          startDate: null,
          endDate: null,
          description: "",
          area: "",
          locType: "",
        });
      })
      .catch((error) => {
        console.error("Error in PUT request:", error);
      });
  };

  useEffect(() => {
    setMostraForm(false);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences`,
        {
          headers: {
            Authorization: `Bearer ${selectedToken}`,
          },
        }
      )
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => {
        console.error("Error in GET request:", error);
      });
  }, [data, selectedToken]);

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
            Authorization: `Bearer ${selectedToken}`,
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
          area: "",
        });
        setMostraForm(false);
      })
      .catch((error) => {
        console.error("Error in POST request:", error);
      });
  };

  const handleDeleteExperience = (expId) => {
    axios
      .delete(
        `https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`,
        {
          headers: {
            Authorization: `Bearer ${selectedToken}`,
          },
        }
      )
      .then(() => {
        setExperiences((prevExperiences) =>
          prevExperiences.filter((exp) => exp._id !== expId)
        );
      })
      .catch((error) => {
        console.error("Error in DELETE request:", error);
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
                    <h2 className="RoleEx fs-4">{experience.role}</h2>
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
                        : "Present"}
                    </p>
                    <p className="LocationEx">
                      {experience.area} · {experience.locType} Hybrid
                    </p>
                    <p className="DescEx">{experience.description}</p>
                    <button
                      className="DeleteEx me-2"
                      onClick={() => handleEditExperience(experience._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="DeleteEx"
                      onClick={() => handleDeleteExperience(experience._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {mostraForm && (
        <Modal size="lg" show={mostraForm} onHide={() => setMostraForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Add Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal">
            {/* ... (rest of your modal content) ... */}
          </Modal.Body>
          <div className="endBtnWrapper">
            <button
              className="saveExperience"
              onClick={handleAddExperience}
            >
              Save
            </button>
          </div>
        </Modal>
      )}

      {/* ----------Modale per l'editing dell'esperienza---------- */}
      <Modal show={showModalEditExp} onHide={handleCloseModalEditExp}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal">
          <Row >
            <p className="requiredWarningEx">* indicates required</p>
          </Row>

          <div className="p-4">
            <Row className="pb-4 pl-2">
              <label className="text-left inputLabelEx">Title*</label>
              <input
                className="inputModalEx"
                type="text"
                name="role"
                placeholder="Ex: retail sales manager"
                onChange={handleInputChange}
                value={newExperience.role}
                required
              />
            </Row>

            <Row className="pb-4">
              <label className="inputLabelEx">Employment type*</label>
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
              <label className="inputLabelEx">Company name*</label>
              <input
                className="inputModalEx"
                type="text"
                name="company"
                placeholder="Ex: Microsoft"
                onChange={handleInputChange}
                value={newExperience.company}
                required
              />
            </Row>

            <Row className="pb-4">
              <label className="inputLabelEx">Location</label>
              <input
                className="inputModalEx"
                type="text"
                name="area"
                placeholder="Ex: London, UK"
                onChange={handleInputChange}
                value={newExperience.area}
                required
              />
            </Row>

            <Row className="pb-4">
              <label className="inputLabelEx">Location type</label>
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

            <div className="">
              <Row className="pb-4">
                <label className="inputLabelEx">Start Date*</label>
                <DatePicker
                  className="inputModalEx"
                  selected={newExperience.startDate}
                  onChange={(date) => handleDateChange(date, "startDate")}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Start Date"
                  required
                />
              </Row>

              <Row className="pb-4">
                <label className="inputLabelEx">End Date</label>
                <DatePicker
                  className="inputModalEx"
                  selected={newExperience.endDate}
                  onChange={(date) => handleDateChange(date, "endDate")}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="End Date"
                  required
                />
              </Row>
            </div>

            <Row>
              <p className="endWarningEx">If you are still working there, leave "End Date" field empty</p>
            </Row>


            <Row className="pb-4">
              <label className="inputLabelEx">Description*</label>
              <input
                className="inputDescEx"
                type="text"
                name="description"
                placeholder="Describe your job..."
                onChange={handleInputChange}
                value={newExperience.description}
              />
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="me-2 rounded-pill custom-dropdown-button blueButton" onClick={handleSaveEditExperience}>
            Save
          </Button>
        </Modal.Footer>

      </Modal>
    </Container>
  );
};

export default Experience;