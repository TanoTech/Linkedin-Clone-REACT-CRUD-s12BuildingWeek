import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import SingleJob from './SingleJob';

const Jobs = () => {
    const { jobResults, fetchJobs } = useContext(ProfileContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJobs({ query: 'developer', limit: 10 }).catch(err => {
            setError(err.message);
        });
    }, [fetchJobs]);

    const jobs = jobResults;

    return (
        <Container>
            <h2>Jobs offers:</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <SingleJob job={job} />
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Jobs;