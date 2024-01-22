import { Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Activity.css'
import { HiOutlinePencil } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const Activity = () => {
    return (
        <>
            <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
                <Col className="d-flex flex-column mt-3">
                    <div className="d-flex justify-content-between me-4">
                        <div>
                            <p id="left-side-headers" className="mb-0 fw-bold fs-4">Activity</p>
                            <p className="followers fw-bold text-primary">5 followers</p>
                        </div>
                        <div className="ml-auto me-3">
                            <Button variant="outline-primary rounded-pill me-3" id="main-buttons">Create a post</Button>
                            <span className="penna"><HiOutlinePencil /></span>

                        </div>
                    </div>
                </Col>
                <Col>
                    <p className="minutes"><span id="activity-user"><strong>You</strong> have shared this post</span> •  2 min</p>
                </Col>
                <Col className="mb-2">
                    <Row className="px-0">
                        <Col md={2} className="pr-0">
                            <img className="rounded" src="https://media.licdn.com/dms/image/D4D22AQGqOfmOhlT4mg/feedshare-shrink_1280/0/1705512989810?e=1708560000&v=beta&t=rA2RQ6PTLSa69wYEvIfh8e6MCEUHP04cgB2GCjhH324" alt="img" style={{ width: '9rem' }} />
                        </Col>
                        <Col className="test ms-4 me-5 mt-3">
                            <p>Epicode è sempre al tuo fianco❗️All'interno dei nostri corsi troverai tantissime attività formative e una community di epicoder con cui confrontarti e crescere insieme. Avrai inoltre a disposizione i nostri coach, pronti a insegnarti e guidarti in tutto il tuo percorso in Epicode sino ai colloqui per il lavoro dei tuoi sogni. Registrati gratuitamente oggi all'Open Day di giorno 31✅️</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex mt-3 mb-3">
                    <img className="like me-1 ms-2" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="img" />
                    <p className="post-details">234</p>
                    <img className="like me-1 ms-2" src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="img" />
                    <p className="post-details">27</p>
                    <img className="like me-1 ms-2" src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1" alt="img" />
                    <p className="post-details">36</p>
                </Col>
                <hr></hr>
                <Col className="d-flex justify-content-center">
                    <p className="arrow me-2 fs-5">Show all posts</p>
                    <span className="arrow"><FaArrowRightLong /></span>
                </Col>
            </Row>
        </>
    );
}

export default Activity;
