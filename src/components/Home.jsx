import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { ProfileContext } from '../redux/contexts/ProfileContext';
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
    const { selectedToken } = useContext(ProfileContext);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!selectedToken) {
            setError('Ciao');
            return;
        }

        fetchPosts();
    }, [selectedToken]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://striveschool-api.herokuapp.com/api/posts/', {
                headers: { Authorization: `Bearer ${selectedToken}` }
            });
            setPosts(response.data);
        } catch (error) {
            console.error("Errore nel recupero dei post:", error);
        }
    };

    const createPost = async (text, imageFile) => {
        try {
            const response = await axios.post('https://striveschool-api.herokuapp.com/api/posts/',
                { text },
                { headers: { Authorization: `Bearer ${selectedToken}` } }
            );

            if (imageFile) {
                const formData = new FormData();
                formData.append('post', imageFile);

                await axios.post(`https://striveschool-api.herokuapp.com/api/posts/${response.data._id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${selectedToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            fetchPosts();
        } catch (error) {
            console.error("Errore nella creazione del post:", error);
        }
    };

    const editPost = async (postId, newText) => {
        try {
            await axios.put(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, 
                { text: newText },
                { headers: { Authorization: `Bearer ${selectedToken}` } }
            );
            fetchPosts();
        } catch (error) {
            console.error("Errore nella modifica del post:", error);
        }
    }

    const deletePost = async (postId) => {
        try {
            await axios.delete(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
                headers: { Authorization: `Bearer ${selectedToken}` }
            });
            fetchPosts(); 
        } catch (error) {
            console.error("Errore nella cancellazione del post:", error);
        }
    };

    return (
        <main>
            <Container className='d-flex'>
                <section className='me-3 d-none d-md-block'>
                    <ProfileSummary />
                    <SeeMore />
                </section>

                <div className='m-0 p-0'>
                    <CreatePost
                        newPostText={newPostText}
                        setNewPostText={setNewPostText}
                        createPost={createPost}
                    />
                    <GetPost posts={posts} onDeletePost={deletePost} onEditPost={editPost} />
                </div>

            </Container>
            <section className='d-none d-md-block'>
                <LinkedinNews />
                <Ads />
                <FooterHome />
            </section>
        </main>
    );
}

export default Home;