import React, { useState } from 'react';
import { Col, Row, Button, Modal, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Post = ({ postDetails, handleEditClick, handleDeleteClick, data }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteModalShow = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirmed = () => {
    handleDeleteClick();
    handleDeleteModalClose();
  };
  const [postDetailsCounts, setPostDetailsCounts] = useState({
    post1: 0,
    post2: 0,
    post3: 0,
  });
  const handleLikeClick = (index) => {
    setPostDetailsCounts((prevCounts) => ({
      ...prevCounts,
      [index]: prevCounts[index] + 1,
    }));
  };

  return (
    <Col className="mb-2">
      <hr className='divider mt-2'></hr>
      <div className='d-flex justify-content-between'>
        <p className="minutes">
          <span id="activity-user">
            <strong>{data.name} {data.surname} </strong> reposted this
          </span>{' '}
          • now
        </p>
        <FaTrash className=" trash" onClick={handleDeleteModalShow} />
      </div>
      <Row className="px-0">
        <Col md={2} className="pr-0">
          <img
            className="rounded"
            src={postDetails.image}
            alt="img"
            style={{ width: '10rem' }}
          />
        </Col>
        <Col className="test ms-4 me-5 mt-3">
          <p>{postDetails.text}</p>
        </Col>
        <Col className="d-flex mt-3 mb-3">
          <p className="post-details">{postDetails.likes}</p>
        </Col>
        {/* elimina */}
        <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this post?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteModalClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirmed}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
      <Col className="d-flex mt-3 mb-3">
        <img
          className="like me-1 ms-2"
          src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
          alt="img"
          onClick={() => handleLikeClick('post1')}
        />
        <p className="post-details">{0 + postDetailsCounts.post1}</p>
        <img
          className="like me-1 ms-2"
          src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
          alt="img"
          onClick={() => handleLikeClick('post2')}
        />
        <p className="post-details">{0 + postDetailsCounts.post2}</p>
        <img
          className="like me-1 ms-2"
          src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
          alt="img"
          onClick={() => handleLikeClick('post3')}
        />
        <p className="post-details">{0 + postDetailsCounts.post3}</p>
      </Col>
      <hr className='divider mt-4'></hr>
    </Col>
    
  );
};

export default Post;
