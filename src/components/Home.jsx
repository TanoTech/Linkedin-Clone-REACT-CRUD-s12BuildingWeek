import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOTQyMmJkNWQxMjAwMTg5MGQ0M2QiLCJpYXQiOjE3MDYwMDU1MzksImV4cCI6MTcwNzIxNTEzOX0.FCMdZrjjRxkJ279ok18O8GpY0L5AughCi-lX6jUDQPg';

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
        <div>
            <h1>Post</h1>
            <form onSubmit={createPost}>
                <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="Scrivi qui il tuo post..."
                />
                <button type="submit">Invia Post</button>
            </form>
            {posts.map(post => (
                <div key={post._id}>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;