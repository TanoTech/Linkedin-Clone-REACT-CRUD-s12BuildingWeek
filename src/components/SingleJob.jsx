import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';

const SingleJob = () => {
    const { jobId } = useParams();
    const { currentJob, fetchJobDetail } = useContext(ProfileContext);

    useEffect(() => {
        fetchJobDetail(jobId);
    }, [jobId, fetchJobDetail]);

    if (!currentJob) {
        return <div>Caricamento...</div>;
    }

    return (
        <Container className="job-item">
            <h3>{currentJob.company_name}</h3>
            <p>{currentJob.title}</p>
            <p>{currentJob.job_type}</p>
            <div dangerouslySetInnerHTML={{ __html: currentJob.description }} />
        </Container>
    );
};

export default SingleJob;