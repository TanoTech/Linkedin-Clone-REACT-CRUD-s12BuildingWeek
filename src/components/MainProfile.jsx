import { Container, Row, Col, Button, Modal, Accordion, Dropdown, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // fogli css di bootstrap da spostare in futuro
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { useState } from "react";

const urlCopertina = 'https://media.licdn.com/dms/image/D4D16AQHXjrGnp73BDw/profile-displaybackgroundimage-shrink_350_1400/0/1703176761319?e=1711584000&v=beta&t=vSMa8fJw-CuYIZZ2daNp7bIpS1RqGN4PI9Z7JMrYz80' // test da rimuovere successivamente

const urlLogo = 'https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg' // test da rimuovere successivamente

const randomNumber = Math.floor(Math.random() * (500 - 50 + 1)) + 50 // numero random da 50 a 500

const MainProfile = ({ data }) => {

    const [showModalPic, setShowModalPic] = useState(false); //stato apertura/chiusura Modale profilePic
    const handleShowModalPic = () => setShowModalPic(true); // apertura modale profilePic
    const handleCloseModalPic = () => setShowModalPic(false); // chiusura modale profilePic

    const [showModalProfile, setShowModalProfile] = useState(false); // stato apertura/chiusura modal AddProfile
    const handleShowModalProfile = () => setShowModalProfile(true); // apertura modale AddProfile
    const handleCloseModalProfile = () => setShowModalProfile(false); // chiusara modale AddProfile

    return (
        <>
            <Container className="my-2">

                <Row>
                    <Col>
                        <img src={urlCopertina} alt="Cover image" className="rounded-top" style={{ width: '100%' }} />
                        {/* icona matita con position relative o absolute */}
                    </Col>

                </Row>


                <div style={{ height: '0em' }}>
                    <img src={data.image} alt="Profile picture" id="profilePic" className="rounded-circle border border-light border-4" onClick={handleShowModalPic} /> {/* deve aprirsi un modale */}

                </div>



                <Container className="mt-0 p-3">
                    <div className="d-flex justify-content-end">
                        <span className="penna"><HiOutlinePencil /></span> {/* ho usato la stessa classe di Matteo qui */}
                    </div>

                    <Row>
                        <Col md={7}>
                            <h1 className="mb-0">{data.name} {data.surname}</h1>
                            <p className="mb-1">{data.title}</p>
                            <p className="mb-1">{data.area} • {data.email} • <span className="text-primary fw-bold">Contact info</span></p>
                            <p className="mb-3 text-primary fw-bold">{randomNumber} connection</p> {/* Link */}

                            <Row className="my-3">
                                <Col>
                                    <div className="d-flex">

                                        <DropdownButton variant="primary" className="me-2 rounded-pill fw-bold custom-dropdown-button" id="dropdown-basic-button" title="Open to">
                                            <Dropdown.Item href="#/action-1">
                                                <p className="mb-0 fw-bold">Hiring</p>
                                                <p className="mb-0">share that you're hiring and attract qualified candidates</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                            <p className="mb-0 fw-bold">Providing services</p>
                                            <p className="mb-0">Showcase services you offer so new clients can discover you</p>
                                            </Dropdown.Item>
                                        </DropdownButton>

                                        <Button variant="light" className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold" onClick={handleShowModalProfile}>Add profile section</Button> {/* deve aprirsi un modale */}

                                        <DropdownButton variant="primary" className="pe-3 me-2 rounded-pill fw-bold custom-dropdown-button" id="dropdown-basic-button" title="More">
                                            <Dropdown.Item href="#/action-1">
                                                <p className="mb-0">Send profile in a message</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                            <p className="mb-0">Save to Pdf</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">
                                            <p className="mb-0">Build a resume</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">
                                            <p className="mb-0">About this profile</p>
                                            </Dropdown.Item>
                                        </DropdownButton>

                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={4} className="text-center d-none d-md-block "> {/* Ti riporta alla sezione Istruzione */}
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={urlLogo} width={45} alt="" />
                                <p className="mb-0 fw-bold">Epicode</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="ms-0">
                        <Col md={7} className="bg-light rounded"> {/* Apre un modale (Job reference) */}
                            {/* icona matita con position relative o absolute */}
                            <p className="mt-3 mb-0 fw-bold">Open to work</p>
                            <p className="mb-0">Web Developer, Front-End and Back-End roles</p>
                            <p className="mb-3 text-primary fw-bold">Show details</p> {/* Apre un modale (Job reference) */}
                        </Col>
                    </Row>
                </Container>

            </Container>

            {/* Modale foto profilo */}

            <Modal show={showModalPic} onHide={handleCloseModalPic} dialogClassName="modalPic">
                <Modal.Header closeButton>
                    <Modal.Title >Profile photo</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="d-flex justify-content-center my-5">
                        <img src={data.image} alt="Profile picture" id="profilePicModal" className="profilePic rounded-circle" />
                    </div>
                    <Button variant="light" className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold">Anyone</Button>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <div className="d-flex">

                        <Button variant="primary" className="d-flex flex-column align-items-center me-2">
                            <HiOutlinePencil className="modalIcons text-white" />
                            Edit
                        </Button>

                        <Button variant="primary" className="d-flex flex-column align-items-center me-2">
                            <FaCamera className="modalIcons text-white" />
                            Add photo
                        </Button>

                        <Button variant="primary" className="d-flex flex-column align-items-center me-2">
                            <SlPicture className="modalIcons text-white" />
                            Frames
                        </Button>

                    </div>

                    <Button variant="primary" className="d-flex flex-column align-items-center me-2">
                        <FaRegTrashAlt className="modalIcons text-white" />
                        Delete
                    </Button>

                </Modal.Footer>
            </Modal>

            {/* Modale Add to profile */}
            <Modal show={showModalProfile} onHide={handleCloseModalProfile}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><p className="fw-bold mb-0">Core</p></Accordion.Header>
                            <Accordion.Body>
                                <p>Start with the basics. Filling out these sections will help you be discovered by recruiters and people you may know</p>
                                <hr />
                                <p>Add about</p>
                                <hr />
                                <p>Add education</p>
                                <hr />
                                <p>Add position</p>
                                <hr />
                                <p>Add career break</p>
                                <hr />
                                <p>Add skills</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><p className="fw-bold mb-0">Recommended</p></Accordion.Header>
                            <Accordion.Body>
                                <p>Completing these sections will increase your credibility and give you access to more opportunities</p>
                                <hr />
                                <p>Add featured</p>
                                <hr />
                                <p>Add licenses & certifications</p>
                                <hr />
                                <p>Add projects</p>
                                <hr />
                                <p>Add courses</p>
                                <hr />
                                <p>Add recommendations</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><p className="fw-bold mb-0">Additional</p></Accordion.Header>
                            <Accordion.Body>
                                <p>Add even more personality to your profile. These sections will help you grow your network and build more relationships.</p>
                                <hr />
                                <p>Add volunteer experience</p>
                                <hr />
                                <p>Add publications</p>
                                <hr />
                                <p>Add patents</p>
                                <hr />
                                <p>Add honors & awards</p>
                                <hr />
                                <p>Add test scores</p>
                                <hr />
                                <p>Add languages</p>
                                <hr />
                                <p>Add organizations</p>
                                <hr />
                                <p>Add causes</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Modal.Body>

            </Modal>

        </>
    )
}

export default MainProfile