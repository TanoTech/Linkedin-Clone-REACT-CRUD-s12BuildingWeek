import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

const CommentPost = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRate, setNewRate] = useState("5");
  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyOWIyODMxYTczZjAwMTlkNWM0NGQiLCJpYXQiOjE3MDYyMDM5NDQsImV4cCI6MTcwNzQxMzU0NH0.Bds77GllRdLVibfhEYSwWsSyQ3TzKxsJbZEIP2GmbtA";

  useEffect(() => {
    loadComments();
  }, [postId]);

  const loadComments = async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: { Authorization: `Bearer ${apiToken}` },
        }
      );
      const filteredComments = response.data.filter(
        (comment) => comment.elementId === postId
      );
      setComments(filteredComments);
      console.log("Commenti filtrati specifici del post:", filteredComments);
    } catch (error) {
      console.error("Errore nel recupero dei commenti:", error);
    }
  };

  const submitComment = async () => {
    try {
      await axios.post(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          comment: newComment,
          rate: newRate,
          elementId: postId,
        },
        {
          headers: { Authorization: `Bearer ${apiToken}` },
        }
      );
      setNewComment("");
      setNewRate("5");
      loadComments();
    } catch (error) {
      console.error("Errore nell'invio del commento:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          headers: { Authorization: `Bearer ${apiToken}` },
        }
      );
      loadComments();
    } catch (error) {
      console.error("Errore nella cancellazione del commento:", error);
    }
  };

  return (
    <div>
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
          <button
            className="d-flex align-self-center m-0"
            style={{ background: "none", border: "none" }}
            onClick={submitComment}
          >
            Send
          </button>
        </div>
      </div>

      <div className="m-0">

        <div className="m-0 mt-2 mb-3 text-center searchBarPost justify-content-center">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="add commment"
          />
        </div>

      </div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.comment}</p>
            <button onClick={() => deleteComment(comment._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
};

export default CommentPost;
