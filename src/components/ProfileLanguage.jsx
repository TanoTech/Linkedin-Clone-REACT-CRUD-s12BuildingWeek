import { Container } from "react-bootstrap"

const ProfileLanguage = ({data}) => {
    return (
        <Container>
            <h2>Profile Language</h2>
            <p>English</p>
            <hr />
            <h2>Public profile & URL</h2>
            <p>www.linkedin.com/in/{`${data.name.toLowerCase()}-${data.surname.toLowerCase()}`}</p>
        </Container>
    )
}

export default ProfileLanguage;