import React, { useState, useContext } from 'react';
import { Container } from "react-bootstrap";
import { IoSend } from "react-icons/io5";
import { ProfileContext } from "../../redux/contexts/ProfileContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/CreatePost.css";

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
      <Container className="bg-white pt-2 px-0 mt-3 rounded border border-solid">
        <div className="m-0">
          <form className="m-0" onSubmit={handleSubmit}>
            <div className="searchBarPost">
              <img
                className="ProfileImgPost"
                src={userProfileImg}
                alt="foto profilo utente"
              />
              <input
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="Start a post"
              />
            </div>

            <div className="d-flex justify-content-between p-0 m-2">
              <div className="d-flex align-self-center IconPlusText p-3 m-0 rounded">
                <i className="bi bi-image-fill align-self-center mediaIcon"></i>
                <input
                  name="uploadfile" id="uploadfile" className="d-none" type="file" onChange={handleImageChange}
                />
                <label for="uploadfile" className='IconPlusText'>Click me to upload image</label>
              </div>

              <div className="d-flex align-self-center IconPlusText p-3 rounded">
                <i className="bi bi-calendar3 calendarIcon "></i>
                <p className="IconPost m-0 ms-1">Event</p>
              </div>

              <div className="d-flex align-self-center IconPlusText p-3 rounded">
                <i className="bi bi-pencil-square writeIcon"></i>
                <p className="IconPost m-0 ms-1">Write An Article</p>
              </div>

              <button
                type="submit"
                className="rounded m-0 p-0 IconPlusText p-3"
                id="ButtonPost"
              >
                <IoSend className="text-secondary" />
                Send post
              </button>
            </div>
          </form>
        </div>
      </Container>
    );
};

export default CreatePost;