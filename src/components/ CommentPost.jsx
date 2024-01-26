import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentPost = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [newRate, setNewRate] = useState('5');
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyOWIyODMxYTczZjAwMTlkNWM0NGQiLCJpYXQiOjE3MDYyMDM5NDQsImV4cCI6MTcwNzQxMzU0NH0.Bds77GllRdLVibfhEYSwWsSyQ3TzKxsJbZEIP2GmbtA";

    useEffect(() => {
        loadComments();
    }, [postId]);

    const loadComments = async () => {
        try {
            const response = await axios.get(`https://striveschool-api.herokuapp.com/api/comments/`, {
                headers: { Authorization: `Bearer ${apiToken}` }
            });
            const filteredComments = response.data.filter(comment => comment.elementId === postId);
            setComments(filteredComments);
            console.log('Commenti filtrati specifici del post:', filteredComments);
        } catch (error) {
            console.error("Errore nel recupero dei commenti:", error);
        }
    };

    const submitComment = async () => {
        try {
            await axios.post(`https://striveschool-api.herokuapp.com/api/comments/`, {
                comment: newComment,
                rate: newRate,
                elementId: postId
            }, {
                headers: { Authorization: `Bearer ${apiToken}` }
            });
            setNewComment('');
            setNewRate('5');
            loadComments();
        } catch (error) {
            console.error("Errore nell'invio del commento:", error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            await axios.delete(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
                headers: { Authorization: `Bearer ${apiToken}` }
            });
            loadComments();
        } catch (error) {
            console.error("Errore nella cancellazione del commento:", error);
        }
    };

    return (
        <div>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button onClick={submitComment}>Send</button>
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