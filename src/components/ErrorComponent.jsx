import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return (
        <Container className="errorBox">
                <h1>YOU TRIED BOY</h1>
                <img src="/assets/errorFile/4HRI.gif" alt="go back to login" />
                <h1>GO BACK TO LOGIN</h1>
            <Link className='btn btn-danger w-100 ' to='/'><p>LOGIN</p></Link>
            <img src="/assets/errorFile/sargente.gif" alt="go back to login" />
        </Container>
    );
};

export default ErrorComponent;