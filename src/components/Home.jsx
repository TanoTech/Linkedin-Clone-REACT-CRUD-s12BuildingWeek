import { useEffect, useState, useContext} from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import CreatePost from './CreatePost';
import GetPost from './GetPost';
import Ads from './Ads';
import FooterHome from './FooterHome';
import ProfileSummary from './ProfileSummary';
import SeeMore from './SeeMore';
import LinkedinNews from './LinkedinNews';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o';

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/posts/', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPosts(response.data);
        } catch (error) {
            console.error("Errore nel recupero dei post:", error);
        }
    };
    
    const createPost = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://striveschool-api.herokuapp.com/api/posts/',
                { text: newPostText },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewPostText('');
            fetchPosts();
        } catch (error) {
            console.error("Errore nella creazione del post:", error);
        }
    };

    return (
        <main>
            <Container className='d-flex'>
                <section>
                    <ProfileSummary />
                    <SeeMore />
                </section>
                <CreatePost
                    newPostText={newPostText}
                    setNewPostText={setNewPostText}
                    createPost={createPost}
                    posts={posts}
                />
                <GetPost posts={posts} /> 
            </Container>
            <section>
                <LinkedinNews />
                <Ads />
                <FooterHome />
            </section>
        </main>
    );
};

export default Home;