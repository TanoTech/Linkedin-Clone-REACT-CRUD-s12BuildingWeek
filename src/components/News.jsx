import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';

const News = () => {
    const { fetchNews } = useContext(ProfileContext);
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData = await fetchNews();
                if (newsData && newsData.results) {
                    const shuffled = [...newsData.results].sort(() => 0.5 - Math.random());
                    setNewsItems(shuffled.slice(0, 3));
                } else {
                    console.error('Il fetch delle notizie non ha restituito i dati attesi:', newsData);
                }
            } catch (error) {
                console.error('Si è verificato un errore durante il recupero delle notizie:', error);
            }
        };
    
        getNews();
    }, [fetchNews]);

    return (
        <Container className='bg-white rounded border border-solid mt-2 SideSections p-0'>
            <div className='d-flex mt-3 mx-3'>
                <img className='img-fluid' style={{width:'1.5em'}} src="./assets/logo/linkedinLogo.png" alt="" />
                <h2 className='fs-5 align-self-center ms-2 m-0'>LEARNING</h2>
            </div>
            {newsItems.map((news, index) => (
                <div key={index} className='d-flex border-bottom p-3'>
                    <img className='img-fluid my-2 align-self-center col-1' style={{width:'6.5em', height:'5em', cursor:'pointer'}} src={news.image_url} alt={news.title} />
                    <Container className='align-self-center HoverBluScritte col-20'>
                        <h3 id='TitoloNewsProfile' className='fs-5 m-0'>{news.title}</h3>
                        <p className='fs-6 m-0'>{news.news_site}</p>
                    </Container>
                </div>
            ))}
            <Container className='fs-5 py-2 px-0 text-center ButtonSideSections'>Show More</Container>
        </Container>
    );
};

export default News;