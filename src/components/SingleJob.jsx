import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import JobDetails from './JobDetails'; 

const SingleJob = ({ job }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>
                    {job.company_name}
                </Card.Text>
                <Card.Text>
                    {job.candidate_required_location}
                </Card.Text>
                <Button  onClick={handleModalShow}>
                    See details
                </Button>
                <JobDetails
                    show={modalShow}
                    handleClose={handleModalClose}
                    description={job.description}
                />
            </Card.Body>
        </Card>
    );
};

export default SingleJob;
