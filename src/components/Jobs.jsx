import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import SingleJob from './SingleJob';

const Jobs = () => {
    const { jobResults, fetchJobs } = useContext(ProfileContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJobs({ query: 'developer', limit: 200 }).catch(err => {
            setError(err.message);
        });
    }, [fetchJobs]);

    return (
        <>
            <h2>Jobs offers:</h2>
            <Container>
                {jobResults.map(job => (
                    <div key={job._id}>
                        <SingleJob job={job} />
                    </div>
                ))}
            </Container>
        </>
    );
}

export default Jobs;