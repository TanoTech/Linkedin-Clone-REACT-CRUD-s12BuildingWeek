import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center box404">
            <h1 className="text-white mt-3">404 PAGE NOT FOUND</h1>
            <Link className='btn btn-primary text-white m-3' to='/'>Go back to login</Link>
            <img src="/assets/404/404.gif" alt="404 page not found" />
            <Link className='btn btn-primary text-white m-3' to='/'>Go back to login</Link>
        </Container>
    )

}

export default Error404