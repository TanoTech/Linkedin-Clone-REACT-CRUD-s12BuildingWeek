import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext'; 

const Jobs = () => {
    const { fetchJobs } = useContext(ProfileContext);
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const jobData = await fetchJobs({ query: 'developer', limit: 10 });
                if (jobData) {
                    setJobs(jobData);
                }
            } catch (err) {
                setError(err.message);
            }
        };
    
        fetchJobData();
    }, [fetchJobs]);

    return (
        <div>
            <h2>Offerte di lavoro</h2>
            {error && <p>Si è verificato un errore: {error}</p>}
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;
