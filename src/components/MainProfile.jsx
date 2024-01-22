import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // fogli css di bootstrap da spostare in futuro

const urlCopertina = 'https://media.licdn.com/dms/image/D4D16AQHXjrGnp73BDw/profile-displaybackgroundimage-shrink_350_1400/0/1703176761319?e=1711584000&v=beta&t=vSMa8fJw-CuYIZZ2daNp7bIpS1RqGN4PI9Z7JMrYz80'

const urlProfile = 'https://i.redd.it/4erhpdgw2wx81.png'

const urlLogo = 'https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg'

const MainProfile = () => {
    return (
        <Container className="my-2">

            <Row>
                <Col>
                    <img src={urlCopertina} alt="Cover image" className="rounded-top" style={{ width: '100%' }} />
                    {/* icona matita con position relative o absolute */}
                </Col>
                
            </Row>

            <img src={urlProfile} alt="Profile picture" style={{ width: '10em', height: '10em', position: "relative", top: -120, left: 30 }} className="rounded-circle border border-light border-4" /> {/* deve aprirsi un modale */}
                    
            

            <Container className="mt-0 p-3">
                <Row>
                    <Col>
                        {/* icona matita con position relative o absolute */}
                        <h1 className="mb-0">Marco D'Imprima</h1>
                        <p className="mb-1">Studente presso Epicode</p>
                        <p className="mb-1">Parma, Emilia Romagna, Italy • <span className="text-primary fw-bold">Contact info</span></p>
                        <p className="mb-3 text-primary fw-bold">92 connection</p> {/* Link */}
    
                        <Row className="my-3">
                            <Col>
                                <div className="d-flex">
                                    <Button variant="primary" className="ps-3 pe-3 me-2 rounded-pill fw-bold">Open to</Button> {/* Deve aprire un dropdown menu */}
                                    <Button variant="light" className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold">Add profile section</Button> {/* deve aprirsi un modale */}
                                    <Button variant="light" className="ps-3 pe-3 text-secondary border-secondary rounded-pill fw-bold ">More</Button> {/* Deve aprire un dropdown menu */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
    
                    <Col className="text-center"> {/* Ti riporta alla sezione Istruzione */}
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={urlLogo} width={45} alt="" />
                            <p className="mb-0 fw-bold">Epicode</p>
                        </div>
                    </Col>
                </Row>
    
                <Row className="ms-0">
                    <Col md={6} className="bg-light rounded"> {/* Apre un modale (Job reference) */}
                        {/* icona matita con position relative o absolute */}
                        <p className="mt-3 mb-0 fw-bold">Open to work</p>
                        <p className="mb-0">Analyst, Biological Technician and Biologist roles</p>
                        <p className="mb-3 text-primary fw-bold">Show details</p> {/* Apre un modale (Job reference) */}
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default MainProfile