import { Container, Row, Col, Button, Modal, Accordion, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { FaEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { useState, useContext } from "react";
import { ProfileContext } from "../redux/contexts/ProfileContext";
import { useLocation } from "react-router-dom";

const urlCopertina = 'https://leratomonareng.co.za/wp-content/uploads/2021/03/192adf06PCF91kCYu1nPLQg.jpeg' // statico

const urlLogo = 'https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg' // logo statico di epicode

const randomNumber = Math.floor(Math.random() * (500 - 50 + 1)) + 50 // numero random da 50 a 500

const MainProfile = ({ data }) => {
    const  { selectedToken }= useContext(ProfileContext)

    const [showModalPic, setShowModalPic] = useState(false); //stato apertura/chiusura Modale profilePic
    const handleShowModalPic = () => setShowModalPic(true); // apertura modale profilePic
    const handleCloseModalPic = () => setShowModalPic(false); // chiusura modale profilePic

    const [showModalProfile, setShowModalProfile] = useState(false); // stato apertura/chiusura modal AddProfile
    const handleShowModalProfile = () => setShowModalProfile(true); // apertura modale AddProfile
    const handleCloseModalProfile = () => setShowModalProfile(false); // chiusara modale AddProfile

    const [showModalPhoto, setShowModalPhoto] = useState(false); // stato apertura/chiusura Modale AddPhoto
    const handleShowModalPhoto = () => setShowModalPhoto(true); // apertura modale AddPhoto
    const handleCloseModalPhoto = () => setShowModalPhoto(false); // chiusura modale AddPhoto

    const [showModalEdit, setShowModalEdit] = useState(false); // stato aper/chius Modale Edit intro
    const handleShowModalEdit = () => setShowModalEdit(true);
    const handleCloseModalEdit = () => setShowModalEdit(false);

    const [selectedPhoto, setSelectedPhoto] = useState(null); // stato della photo caricata
    const handlePhotoChange = (e) => { //funzione per settare l'immagine caricata
        const photo = e.target.files[0];
        setSelectedPhoto(photo)
    }

    const [firstName, setFirstName] = useState(data.name); // stati per gestire la modifica del profilo
    const [lastName, setLastName] = useState(data.surname);
    const [email, setEmail] = useState(data.email);
    const [title, setTitle] = useState(data.title);
    const [area, setArea] = useState(data.area);


    // POST per caricare un'immagine del profilo
    const handleUpload = async () => {
        try {
            // creo un oggetto FormData
            const formData = new FormData();
            formData.append('profile', selectedPhoto);

            // POST
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/{userID}/picture`, {
                method: 'POST',
                headers: {

                    'Authorization': `Bearer ${selectedToken}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Immagine caricata con successo');
                alert('Immagine caricata con successo');
            } else {
                console.error('Errore durante il caricamento dell\'immagine');
                alert('Errore durante il caricamento dell\'immagine');
            }
        } catch (error) {
            console.error('Errore durante la richiesta PUT:', error);
        }
    };

    // PUT per modificare il profilo utente
    const updateProfile = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${selectedToken}`,
                },
                body: JSON.stringify({
                    name: firstName,
                    surname: lastName,
                    title: title,
                    email: email,
                    area: area,
                }),
            });

            if (response.ok) {
                console.log('Profilo aggiornato con successo');
                alert('Profilo aggiornato con successo');
            } else {
                console.log('Errore durante l\'aggiornamento del profilo:', response.statusText);
                alert('Errore durante l\'aggiornamento del profilo');
            }
        } catch (error) {
            console.error('Errore durante la richiesta PUT:', error);
        }
    };

    const location = useLocation()
    const isUser = location.pathname === '/user-profile'

    return (
        <>
            <Container className="mt-3 mb-4 bg-white rounded border border-solid">

                {/* immagine copertina */}
                <Row>
                    <Col className="p-0 m-0">
                        <img src={urlCopertina} alt="Cover image" className="rounded-top m-0 p-0" style={{ width: '100%' }} />
                        {/* icona matita con position relative o absolute */}
                    </Col>
                </Row>

                {/* immagine del profilo */}
                <div style={{ height: '0em' }}>
                    <img src={data.image} alt="Profile picture" id="profilePic" className="rounded-circle border border-light border-4" onClick={handleShowModalPic} />
                </div>

                <Container className="mt-4 py-3">

                    {/* icona penna */}
                    <div className="d-flex justify-content-end">
                        {isUser && (<span onClick={handleShowModalEdit} className="penna"><HiOutlinePencil /></span>)}
                        {/* ho usato la stessa classe CSS di Matteo/Activity */}
                    </div>
                    <Row>
                        {/* Blocco con le informazioni: Nome,cognome, etc... */}
                        <Col md={7}>
                            <h1 className="mb-0">{data.name} {data.surname}</h1>
                            <p className="mb-1">{data.title}</p>
                            <p className="mb-1">{data.area} • {data.email} • <span className="text-primary fw-bold HoverBluScritte">Contact info</span></p>
                            <p className="mb-3 text-primary fw-bold HoverBluScritte">{randomNumber} connection</p>

                            <Row className="my-3">

                                {/* Blocco con i 3 bottoni */}
                                <Col>
                                    <div className="d-flex">
                                        {/* Primo bottone */}
                                        {isUser && ( <DropdownButton variant="primary" className="me-2 rounded-pill fw-bold custom-dropdown-button blueButton" id="dropdown-basic-button" title="Open to">
                                            <Dropdown.Item href="#/action-1">
                                                <p className="mb-0 fw-bold">Hiring</p>
                                                <p className="mb-0">share that you're hiring and attract qualified candidates</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">
                                                <p className="mb-0 fw-bold">Providing services</p>
                                                <p className="mb-0">Showcase services you offer so new clients can discover you</p>
                                            </Dropdown.Item>
                                        </DropdownButton>)}
                                        {/* Secondo Bottone */}
                                        {isUser && ( <Button variant="light" className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold" onClick={handleShowModalProfile}>Add profile section</Button>)}
                                        {/* Terzo Bottone */}
                                        {isUser && ( <DropdownButton variant="primary" className="pe-3 me-2 PillButton fw-bold custom-dropdown-button dropdown-basic-button blueButton" id="dropdown-basic-button" title="More">
                                            <Dropdown.Item className="d-flex align-items-center" href="#/action-1">
                                                <BsArrow90DegRight className="me-1" />
                                                <p className="mb-0">Send profile in a message</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="d-flex align-items-center" href="#/action-2">
                                                <FiDownload className="me-1" />
                                                <p className="mb-0">Save to Pdf</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="d-flex align-items-center" href="#/action-3">
                                                <BiFileBlank className="me-1" />
                                                <p className="mb-0">Build a resume</p>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="d-flex align-items-center" href="#/action-4">
                                                <BsFillInfoSquareFill className="me-1" />
                                                <p className="mb-0">About this profile</p>
                                            </Dropdown.Item>
                                        </DropdownButton>) }

                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        {/* Blocco Istruzione/Formazione */}
                        <Col md={4} className="text-center d-none d-md-block ">
                            {/* Ti riporta alla sezione Istruzione */}
                            <a href="#SonContainer-Formation" className="d-flex justify-content-center align-items-center">
                                <img src={urlLogo} width={45} alt="" />
                                <p className="mb-0 fw-bold HoverBluScritte">Epicode</p>
                            </a>
                        </Col>
                    </Row>

                    {/* Blocco Open to work */}
                    {isUser && ( <Row className="ms-0">
                        <Col md={7} className="bg-light rounded"> {/* Apre un modale (Job reference) */}
                            {/* icona matita con position relative o absolute */}
                            <p className="mt-3 mb-0 fw-bold">Open to work</p>
                            <p className="mb-0">Web Developer, Front-End and Back-End roles</p>
                            <p className="mb-3 text-primary fw-bold HoverBluScritte">Show details</p> {/* Apre un modale (Job reference) */}
                        </Col>
                    </Row>)}
                </Container>

            </Container>

            {/* ----------Modale foto profilo---------- */}
            <Modal show={showModalPic} onHide={handleCloseModalPic}>
                <Modal.Header closeButton>
                    <Modal.Title >Profile photo</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="d-flex justify-content-center my-5">
                        <img src={data.image} alt="Profile picture" id="profilePicModal" className="profilePic rounded-circle" />
                    </div>
                    <Button variant="light" className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold">
                        <FaEye className="modalIcons me-2" />
                        Anyone
                    </Button>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <div className="d-flex">

                        <Button variant="primary" className="d-flex flex-column align-items-center me-2">
                            <HiOutlinePencil className="modalIcons text-white" />
                            Edit
                        </Button>

                        <Button variant="primary" className="d-flex flex-column align-items-center me-2" onClick={()=>{handleShowModalPhoto(); setShowModalPic(false)}}>
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

            {/* ----------Modale Add to profile---------- */}
            <Modal className="ms-0" show={showModalProfile} onHide={handleCloseModalProfile}>

                <Modal.Header closeButton>
                    <Modal.Title>Add to profile</Modal.Title>
                </Modal.Header>

                <Modal.Body className="ms-0" style={{ height: '38em', overflowY: 'auto' }}>
                    <Accordion className="ms-0" defaultActiveKey="0" flush>
                        <Accordion.Item className="ms-0" eventKey="0">
                            <Accordion.Header className="ms-0"><p className="fw-bold mb-0">Core</p></Accordion.Header>
                            <Accordion.Body className="ms-0">
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
                        <Accordion.Item className="ms-0" eventKey="1">
                            <Accordion.Header><p className="fw-bold mb-0">Recommended</p></Accordion.Header>
                            <Accordion.Body className="ms-0">
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
                        <Accordion.Item className="ms-0" eventKey="2">
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

            {/* ----------Modale per la modifica della foto---------- */}
            <Modal show={showModalPhoto} onHide={handleCloseModalPhoto}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="d-flex justify-content-center my-5">
                        <img src={data.image} alt="Profile picture" id="profilePicModal" className="profilePic rounded-circle" />
                    </div>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose a photo</Form.Label>
                            <Form.Control type="file" name="" id="" onChange={handlePhotoChange} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowModalPhoto(false); setShowModalPic(false); }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleUpload(); setShowModalPhoto(false); setShowModalPic(false); }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* ----------Modale per l'editing dell'intro---------- */}
            <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Intro</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '30em', overflowY: 'auto' }}>

                    <Container>

                        <Row>
                            <p className="p-0">*Indicates required</p>
                        </Row>


                        <Row className="pb-4">
                            <label className="text-left p-0">First Name*</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="InputForm "
                                required
                            />
                        </Row>

                        <Row className="pb-4">
                            <label className="text-left p-0">Last Name*</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="InputForm"
                                required
                            />
                        </Row>

                        <Row className="pb-4">
                            <label className="text-left p-0">Additional name</label>
                            <input
                                type="text"
                                className="InputForm"
                            />
                        </Row>

                        <Row>
                            <p className="mb-0 p-0">Name pronunciation</p>
                        </Row>

                        <Row>
                            <div className="pb-4 p-0 d-flex align-items-center">
                                <BsFillInfoSquareFill className="me-2" />
                                <p className="mb-0">This can only be added using our mobile app</p>
                            </div>
                        </Row>

                        <Row>
                            <label className="p-0">Pronouns</label>
                            <Form.Select name="pronouns">
                                <option value="">Select Pronouns</option>
                                <option value="She/her">She/her</option>
                                <option value="He/him">He/him</option>
                                <option value="They/them">They/them</option>
                                <option value="Custom">Custom</option>
                            </Form.Select>
                        </Row>

                        <Row>
                            <p className="m-0 p-0">Let others know how to refer to you.</p>
                        </Row>

                        <Row>
                            <p className="ms-0 p-0">Learn more about <span className="text-primary fw-bold">gender pronouns.</span></p>
                        </Row>

                        <Row className="pb-4">
                            <label className="text-left p-0">Headline*</label>
                            <textarea
                                row={2}
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="InputForm"
                                required
                            />
                        </Row>

                        <Row className="pb-4">
                            <label className="text-left p-0">Email*</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="InputForm"
                                required
                            />
                        </Row>

                        <Row className="pb-4">
                            <label className="text-left p-0">Area*</label>
                            <input
                                type="text"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="InputForm"
                                required
                            />
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="me-2 rounded-pill custom-dropdown-button blueButton" onClick={() => { updateProfile(); setShowModalEdit(false); }}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default MainProfile