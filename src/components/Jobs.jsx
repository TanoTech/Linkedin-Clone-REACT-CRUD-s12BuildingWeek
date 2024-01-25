import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import SingleJob from './SingleJob';
import Ads from './Ads'
import FooterHome from './FooterHome'
import ErrorComponent from './ErrorComponent';

const Jobs = () => {
    const { jobResults, fetchJobs, selectedToken } = useContext(ProfileContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!selectedToken) {
            setError('Ciao');
            return;
        }

        fetchJobs({ query: 'developer', limit: 200 }).catch(err => {
            setError(err.message);
        });
    }, [fetchJobs]);

    return (
        <main>
            {error ? (
                <ErrorComponent error={error} />
            ) : (
                <Container className='mt-4'>
                    {jobResults.map(job => (
                        <div className='mb-4' key={job._id}>
                            <SingleJob job={job} />
                        </div>
                    ))}
                </Container>
            )}
            {!error && (
                <section className='mt-3'>
                    <Ads />
                    <FooterHome />
                </section>
            )}
        </main>
    );
}

export default Jobs;