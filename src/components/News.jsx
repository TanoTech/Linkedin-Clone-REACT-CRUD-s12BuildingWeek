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
        <Container>
            <div className='d-flex'>
                <img className='img-fluid' style={{width:'3em'}} src="./assets/logo/linkedinLogo.png" alt="" />
                <h4>LEARNING</h4>
            </div>
            {newsItems.map((news, index) => (
                <div key={index}>
                    <img className='img-fluid' src={news.image_url} alt={news.title} />
                    <h5>{news.title}</h5>
                    <p>{news.news_site}</p>
                </div>
            ))}
        </Container>
    );
};

export default News;
