import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../redux/contexts/ProfileContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MayKnow = () => {
  const {
    getAllPeople,
    fetchUsers,
    myConnections,
    addConnection,
    removeConnection,
  } = useContext(ProfileContext);
  const [randomPeople, setRandomPeople] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (getAllPeople.length > 0) {
      const shuffled = [...getAllPeople].sort(() => 0.5 - Math.random());
      setRandomPeople(shuffled.slice(0, 6));
    }
  }, [getAllPeople]);

  const handleConnectionChange = (personId) => {
    if (myConnections.includes(personId)) {
      removeConnection(personId);
    } else {
      addConnection(personId);
    }
  };

  return (
    <Container className="SideSections bg-white mt-2 p-0 rounded border ">
      <h2 className="MayKnowTitle px-4 m-0 mt-4">People you may know</h2>
      {randomPeople.map((person) => (
        <Row className="MayKnowContent px-3 py-4 border-bottom " key={person._id}>
          <Link className="d-flex" to={`/user/${person._id}`}>
            <img
              className="MayKnowImg img-fluid border rounded-circle"
              src={person.image}
              alt="profile picture"
            />
            <div className="mt-1 ms-2">
              <h3 className="HoverBluScritte m-0 fs-6 ">
                {person.name} {person.surname}
              </h3>
              <p className="m-0 mt-1">{person.title}</p>
            </div>
          </Link>
          <button
            className="MayKnowBtn rounded-pill d-flex align-self-center fs-6 p-1 mt-1 justify-content-center"
            onClick={() => handleConnectionChange(person._id)}
            style={{ width: "7rem", marginLeft: "4.9em" }}
          >
            {myConnections.includes(person._id) ? (
              <i className="bi bi-person-x-fill me-2"></i>
            ) : (
              <i className="bi bi-person-plus-fill me-2"></i>
            )}
            {myConnections.includes(person._id) ? "Disconnect" : "Connect"}
          </button>
        </Row>
      ))}
      <Container className="p-2 fs-5 text-center ButtonSideSections">
        Show all
      </Container>
    </Container>
  );
};

export default MayKnow;
