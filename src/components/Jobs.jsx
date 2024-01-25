import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import SingleJob from './SingleJob';
import Ads from './Ads'
import FooterHome from './FooterHome'

const Jobs = () => {
    const { jobResults, fetchJobs } = useContext(ProfileContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJobs({ query: 'developer', limit: 200 }).catch(err => {
            setError(err.message);
        });
    }, [fetchJobs]);

    return (
            <main >
                <Container className='mt-4'>
                    {jobResults.map(job => (
                        <div key={job._id}>
                            <SingleJob job={job} />
                        </div>
                    ))}
                </Container>
                <section className='mt-3'>
                    <Ads/>
                    <FooterHome />
                </section>
            </main>
    );
}

export default Jobs;