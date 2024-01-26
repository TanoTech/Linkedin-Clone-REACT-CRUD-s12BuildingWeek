import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";
import CommentPost from "./ CommentPost";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const GetPost = ({ posts, onDeletePost, onEditPost }) => {
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
            }
          } catch (error) {
            console.error("Errore nel caricamento del profilo utente", error);
          }
        }
      }
      setUserProfiles(profiles);
    };
    if (posts && posts.length > 0) {
      loadUserProfiles();
    }
  }, [posts, fetchUserProfile]);
  const postsInReverse = [...posts].reverse();

  return (
    <Container className="m-0 p-0">
      {postsInReverse.slice(0, 10).map((post) => {
        const userProfile = userProfiles[post.user._id];
        return (
          <div
            className="bg-white my-3 mx-0 py-2 rounded border border-solid"
            id="ConteinerPost"
            key={post._id}
          >
            {userProfile && (
              <div className="d-flex justify-content-between">
                <div className="d-flex m-0">
                  <Link to={`/user/${post.user._id}`}>
                    <img
                      className="img-fluid"
                      id="ProfilePicPost"
                      src={userProfile.image}
                      alt="Immagine del profilo"
                    />
                  </Link>
                  <div className="ms-2 align-self-center">
                    <Link to={`/user/${post.user._id}`}>
                      <p className="m-0" id="NamePost">
                        {userProfile.name} {userProfile.surname}
                      </p>
                    </Link>
                    <p className="m-0" id="DatePost">
                      {new Date(post.updatedAt).toLocaleString()}
                    </p>
                    <button onClick={() => onEditPost(post._id)}>Modifica</button>
                    <button onClick={() => onDeletePost(post._id)}>Cancella</button>
                  </div>
                </div>

                <div className="d-flex align-self-center rounded p-1" id="FollowPost">
                  <FiPlus className="align-self-center m-1" />
                  <p className="align-self-center m-0 me-2">Follow</p>
                </div>
              </div>
            )}

            <p className="mx-0 mt-1 mb-4 p-2">
              {post.text}
            </p>

            {post.image && <img src={post.image} alt="Post" className="m-0" id="imgPost" />}

            <div className="d-flex justify-content-between align-item-center p-0 m-0">
              <div className="d-flex justify-content-center my-1 ms-3 p-3 rounded IconAndTextPost">
                <AiOutlineLike className="m-0 me-1 align-self-center" />
                <p className="d-flex align-self-center m-0">Raccomand</p>
              </div>

              <div className="d-flex justify-content-center my-1 mx-0 p-3 rounded IconAndTextPost">
                <FaRegCommentDots className="m-0 me-1 align-self-center" />
                <p className="d-flex align-self-center m-0">Comment</p>
              </div>

              <div className="d-flex justify-content-center my-1 mx-0 p-3 rounded IconAndTextPost">
                <BiRepost className="m-0 me-1 align-self-center" />
                <p className="d-flex align-self-center m-0">Share</p>
              </div>

              <div className="d-flex justify-content-center my-1 me-3 p-3 rounded IconAndTextPost">
                <IoIosSend className="m-0 me-1 align-self-center" />
                <p className="d-flex align-self-center m-0">Send</p>
              </div>
            </div>

            <CommentPost postId={post._id} />
          </div>
        );
      })}
    </Container>
  );
};

export default GetPost;
