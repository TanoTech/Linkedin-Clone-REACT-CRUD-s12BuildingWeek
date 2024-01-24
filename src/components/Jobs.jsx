import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';

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
        <div>
            <h2>Jobs offers:</h2>
            {error && <p>Si è verificato un errore: {error}</p>}
            {!jobs.length ? <p>Caricamento in corso...</p> : (
                <ul>
                    {jobs.map(job => (
                        <li key={job._id}> 
                            <h3>{job.company_name}</h3>
                            <p>{job.title}</p>
                            <p>{job.job_type}</p>
                            <div dangerouslySetInnerHTML={{ __html: job.description }} />
                        </li>
                    ))}
                </ul>
            )}
            {!jobs.length && !error && <p>Nessuna offerta di lavoro trovata.</p>}
        </div>
    );
}

export default Jobs;