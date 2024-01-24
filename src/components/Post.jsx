import React, { useState } from 'react';
import { Col, Row, Button, Modal, Form } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi2';
import { FaTrash } from 'react-icons/fa';

const Post = ({ postDetails, handleLikeClick, handleEditClick, handleDeleteClick, data }) => {
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

  return (
    <Col className="mb-2">
      <p className="minutes">
        <span id="activity-user">
          <strong>{data.name} {data.surname} </strong> reposted this
        </span>{' '}
        • 2 min
      </p>
      <Row className="px-0">
        <Col md={2} className="pr-0">
          <img
            className="rounded"
            src={postDetails.image}
            alt="img"
            style={{ width: '9rem' }}
          />
        </Col>

        <Col className="test ms-4 me-5 mt-3">
          <p>{postDetails.text}</p>
        </Col>
        <Col className="d-flex mt-3 mb-3">
          <p className="post-details">{postDetails.likes}</p>
          <HiOutlinePencil className="pencil ms-2" onClick={() => handleEditClick()} />
          <FaTrash className="trash ms-2" onClick={handleDeleteModalShow} />
        </Col>
      </Row>

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
    </Col>
  );
};

export default Post;
