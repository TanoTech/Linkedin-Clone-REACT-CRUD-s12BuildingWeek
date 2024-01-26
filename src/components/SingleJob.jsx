import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import JobDetails from "./JobDetails";
import { TbTargetArrow } from "react-icons/tb";

const SingleJob = ({ job }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <Card>
      <Card.Body
        id="CardJob"
        className="d-flex justify-content-between m-0 p-3"
      >
        <div className="d-flex m-0 p-0">
          <div className="m-0">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
              alt="logo"
              className="p-0 m-0"
              style={{ width: "4em" }}
            />
          </div>

          <div className="m-0">
            <Card.Title className="m-0 mb-1" id="TitleSingleJob">
              {job.title}
            </Card.Title>
            <Card.Text className="m-0" id="CompanyName">
              {job.company_name}
            </Card.Text>
            <Card.Text className="m-0 mb-2" id="LocationJob">
              {job.candidate_required_location}
            </Card.Text>
            <Card.Text className="m-0 d-flex">
              <TbTargetArrow className="align-self-center p-0 mx-1 text-success" />
              <p className="p-0 m-0">active selection</p>
            </Card.Text>
          </div>
        </div>

        <div className="m-0 align-self-end" id="ButtonSection">
          <Button id="ButtonDetailsJob" onClick={handleModalShow}>
            See details
          </Button>
          <JobDetails
            show={modalShow}
            handleClose={handleModalClose}
            description={job.description}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleJob;
