import React, { useState } from 'react';
import { Row, Col, Button, Container, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';
import { HiOutlinePencil } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Activity.css';

const Activity = () => {
  const [postDetailsCounts, setPostDetailsCounts] = useState({
    post1: 0,
    post2: 0,
    post3: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState({
    image: '',
    name: '',
    text: '',
  });

  const handleLikeClick = (postId) => {
    setPostDetailsCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: prevCounts[postId] + 1,
    }));
  };

  const handleCreatePost = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePublishPost = () => {
    console.log('Dettagli del post:', postDetails);
    setShowModal(false);
  };

  return (
    <>
      <Container className='containerActivity rounded mb-4'>
        <Row className="d-flex flex-column edit-section mt-2" id="round-corners">
          <Col className="d-flex flex-column mt-3">
            <div className="d-flex justify-content-between me-4">
              <div>
                <p id="left-side-headers" className="mb-0 fw-bold fs-4">Activity</p>
                <p className="followers fw-bold text-primary">5 followers</p>
              </div>
              <div className="ml-auto me-3">
                <Button variant="outline-primary rounded-pill me-3 " id="main-buttons" onClick={handleCreatePost}>
                  Create a post
                </Button>
                <span className="penna"><HiOutlinePencil /></span>
              </div>
            </div>
          </Col>
          <Col>
            <p className="minutes">
              <span id="activity-user">
                <strong>You</strong> have shared this post
              </span>{' '}
              • 2 min
            </p>
          </Col>
          <Col className="mb-2">
            <Row className="px-0">
              <Col md={2} className="pr-0">
                <img
                  className="rounded"
                  src="https://media.licdn.com/dms/image/D4D22AQGqOfmOhlT4mg/feedshare-shrink_1280/0/1705512989810?e=1708560000&v=beta&t=rA2RQ6PTLSa69wYEvIfh8e6MCEUHP04cgB2GCjhH324"
                  alt="img"
                  style={{ width: '9rem' }}
                />
              </Col>
              <Col className="test ms-4 me-5 mt-3">
                <p>
                  Epicode è sempre al tuo fianco❗️All'interno dei nostri corsi troverai tantissime attività formative e
                  una community di epicoder con cui confrontarti e crescere insieme. Avrai inoltre a disposizione i nostri
                  coach, pronti a insegnarti e guidarti in tutto il tuo percorso in Epicode sino ai colloqui per il lavoro
                  dei tuoi sogni. Registrati gratuitamente oggi all'Open Day di giorno 31✅️
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex mt-3 mb-3">
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
              alt="img"
              onClick={() => handleLikeClick('post1')}
            />
            <p className="post-details">{234 + postDetailsCounts.post1}</p>
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
              alt="img"
              onClick={() => handleLikeClick('post2')}
            />
            <p className="post-details">{27 + postDetailsCounts.post2}</p>
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
              alt="img"
              onClick={() => handleLikeClick('post3')}
            />
            <p className="post-details">{36 + postDetailsCounts.post3}</p>
          </Col>
          <hr className='divider mt-2'></hr>
          <Col className="d-flex justify-content-center">
            <p className="arrow me-2 fs-5">Show all posts</p>
            <span className="arrow">
              <FaArrowRightLong />
            </span>
          </Col>
        </Row>
      </Container>

      {/* Modale crea post */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postText">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your post here..."
                value={postDetails.text}
                onChange={(e) => setPostDetails({ ...postDetails, text: e.target.value })}
              />
            </Form.Group>
            <hr></hr>
            <div className='d-flex justify-content-end'>
                <Button onClick={handlePublishPost}>
                  Publish
                </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Activity;
