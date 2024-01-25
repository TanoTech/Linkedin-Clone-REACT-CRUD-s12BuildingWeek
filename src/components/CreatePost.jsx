import React, { useState, useContext } from 'react';
import { Container } from "react-bootstrap";
import { ProfileContext } from "../redux/contexts/ProfileContext";

const CreatePost = ({ newPostText, setNewPostText, createPost }) => {
    const { profile } = useContext(ProfileContext);
    const [postImage, setPostImage] = useState(null);
    const userProfileImg = profile ? profile.image : '';

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(newPostText, postImage);
        setNewPostText('');
    };

    return (
        <Container className="createPostWrapper">
            <form onSubmit={handleSubmit}>
                <div className="searchBarPost">
                    <img className="ProfileImgPost" src={userProfileImg} alt="foto profilo utente" />
                    <input
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.target.value)}
                        placeholder="Start a post"
                    />
                </div>
                <input type="file" onChange={handleImageChange} />
                <div className="iconWrapperPost">
                    <button type="submit">Send post</button>
                </div>
            </form>
        </Container>
    );
};

export default CreatePost;