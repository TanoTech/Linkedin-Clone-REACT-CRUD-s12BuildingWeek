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
        <div className='d-flex'>
            <main >
                <Container >
                    <h2>Jobs offers:</h2>
                    {jobResults.map(job => (
                        <div key={job._id}>
                            <SingleJob job={job} />
                        </div>
                    ))}
                </Container>
                <section>
                    <Ads />
                    <FooterHome />
                </section>
            </main>
                
        </div>
    );
}

export default Jobs;