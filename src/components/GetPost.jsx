import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import CommentPost from './ CommentPost';

const GetPost = ({ posts }) => {
    const { fetchUserProfile } = useContext(ProfileContext);
    const [userProfiles, setUserProfiles] = useState({});

    useEffect(() => {
        const loadUserProfiles = async () => {
            const profiles = {};
            for (let post of posts) {
                const userId = post.user._id;
                if (userId && !profiles[userId]) {
                    try {
                        const userProfile = await fetchUserProfile(userId);
                        if (userProfile) {
                            profiles[userId] = userProfile;
                        } else {
                            console.log(`Nessun profilo trovato per l'ID utente: ${userId}`);
                        }
                    } catch (error) {
                        console.error('Errore nel caricamento del profilo utente', error);
                    }
                }
            }
            console.log('Profili utente caricati:', profiles);
            setUserProfiles(profiles);
        };
        if (posts && posts.length > 0) {
            loadUserProfiles();
        }
    }, [posts, fetchUserProfile]);
    const postsInReverse = [...posts].reverse();

    return (
        <Container>
            {postsInReverse.slice(0, 100).map((post) => {
                const userProfile = userProfiles[post.user._id];
                console.log('postId:', post._id);
                console.log('userProfile:', userProfile);
                return (
                    <div key={post._id}>
                        {userProfile && (
                            <>
                                <img className='img-fluid'
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                    src={userProfile.image} 
                                    alt={'Immagine del profilo'} 
                                />
                                <p>{userProfile.name} {userProfile.surname}</p>
                            </>
                        )}
                        <p>{new Date(post.updatedAt).toLocaleString()}</p>
                        <p>{post.text}</p>
                        {post.image && <img src={post.image} alt="Post" />}
                        <CommentPost postId={post._id} />
                    </div>
                );   
            })}
        </Container>
    );
};

export default GetPost;