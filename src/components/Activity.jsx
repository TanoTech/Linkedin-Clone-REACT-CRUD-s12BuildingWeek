import React, { useState } from "react";
import { Row, Col, Button, Container, Modal, Form } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import EmoticonPicker from "../components/Emoticons";
import ImageUploader from "../components/ImageUploader";
import { MdCalendarMonth } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { IoMdPodium } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import Post from "./Post";
import { useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const Activity = ({ data }) => {
  const [postDetailsCounts, setPostDetailsCounts] = useState({
    post1: 0,
    post2: 0,
    post3: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [postDetails, setPostDetails] = useState({
    image: "",
    name: "",
    text: "",
  });
  const [posts, setPosts] = useState([]);

  const handleLikeClick = (index) => {
    setPostDetailsCounts((prevCounts) => ({
      ...prevCounts,
      [index]: prevCounts[index] + 1,
    }));
  };

  const handleCreatePost = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePublishPost = () => {
    setPosts([...posts, postDetails]);
    setShowModal(false);
  };

  const handleSelectEmoticon = (selectedEmoticon) => {
    setPostDetails({
      ...postDetails,
      text: postDetails.text + selectedEmoticon,
    });
  };

  const handleSelectImage = (selectedImage) => {
    setPostDetails({ ...postDetails, image: selectedImage });
  };

  const handleEditClick = (index) => {};

  const handleDeleteClick = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const renderPosts = () => {
    return posts.map((post, index) => (
      <Post
        key={index}
        postDetails={post}
        handleLikeClick={() => handleLikeClick(index)}
        handleEditClick={() => handleEditClick(index)}
        handleDeleteClick={() => handleDeleteClick(index)}
        data={data}
      />
    ));
  };

  const location = useLocation();
  const isUser = location.pathname === "/user-profile";

  return (
    <>
      <Container className="border border-solid rounded mb-4 bg-white">
        <Row
          className="d-flex flex-column edit-section mt-2"
          id="round-corners"
        >
          <Col className="d-flex flex-column mt-3">
            <div className="d-flex justify-content-between">
              <div>
                <p id="left-side-headers" className="mb-0 fw-bold fs-4">
                  Activity
                </p>
                <p className="followers fw-bold text-primary HoverBluScritte">
                  5 followers
                </p>
              </div>
              {isUser && (
                <div className="ml-auto me-3">
                  <Button
                    variant="outline-primary rounded-pill me-3 "
                    id="main-buttons"
                    onClick={handleCreatePost}
                  >
                    Create a post
                  </Button>
                  <span className="penna">
                    <HiOutlinePencil />
                  </span>
                </div>
              )}
            </div>
          </Col>
          <Col>
            <p className="minutes">
              <span id="activity-user">
                <strong>
                  {data.name} {data.surname}{" "}
                </strong>{" "}
                reposted this
              </span>{" "}
              • 2 min
            </p>
          </Col>
          <Col className="mb-2">
            <Row className="px-0">
              <Col lg={4} md={6} className="pr-0 mb-3 mb-md-0">
                <div className="img-container text-center text-md-start mx-auto mx-md-0">
                  <img
                    className="rounded img-fluid mx-auto mx-md-0"
                    src="https://media.licdn.com/dms/image/D4D22AQGqOfmOhlT4mg/feedshare-shrink_1280/0/1705512989810?e=1708560000&amp;v=beta&amp;t=rA2RQ6PTLSa69wYEvIfh8e6MCEUHP04cgB2GCjhH324"
                    alt="img"
                  />
                </div>
              </Col>

              <Col className="test ms-4 me-5 mt-3">
                <p>
                  Epicode è sempre al tuo fianco❗️All'interno dei nostri corsi
                  troverai tantissime attività formative e una community di
                  epicoder con cui confrontarti e crescere insieme. Avrai
                  inoltre a disposizione i nostri coach, pronti a insegnarti e
                  guidarti in tutto il tuo percorso in Epicode sino ai colloqui
                  per il lavoro dei tuoi sogni. Registrati gratuitamente oggi
                  all'Open Day di giorno 31✅️
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex mt-3 mb-3">
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
              alt="img"
              onClick={() => handleLikeClick("post1")}
            />
            <p className="post-details">{234 + postDetailsCounts.post1}</p>
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
              alt="img"
              onClick={() => handleLikeClick("post2")}
            />
            <p className="post-details">{27 + postDetailsCounts.post2}</p>
            <img
              className="like me-1 ms-2"
              src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
              alt="img"
              onClick={() => handleLikeClick("post3")}
            />
            <p className="post-details">{36 + postDetailsCounts.post3}</p>
          </Col>

          {renderPosts()}
          <Col className="d-flex justify-content-center">
            <p className="arrow me-2 fs-5">Show all posts</p>
            <span className="arrow">
              <FaArrowRightLong />
            </span>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 d-flex">
            <img
              className="rounded-circle me-3"
              src={data.image}
              width={"13%"}
              alt="user"
            />
            <div className="d-flex flex-column">
              {data.name} {data.surname}
              <p className="postModal">Post to Anyone</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postText">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="What do you want to talk about?"
                value={postDetails.text}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, text: e.target.value })
                }
              />
              <EmoticonPicker onSelectEmoticon={handleSelectEmoticon} />
              <div className="d-flex align-items-center ">
                <ImageUploader onSelectImage={handleSelectImage} />
                <MdCalendarMonth className=" me-3 fs-4" />
                <BsBriefcase className=" me-3 fs-4" />
                <IoMdPodium className=" fs-4" />
              </div>
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-end align-items-center">
              <FaRegClock className="clock fs-5 me-3"></FaRegClock>
              <Button
                className="rounded-pill ps-3 pe-3"
                onClick={handlePublishPost}
              >
                Post
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Activity;
