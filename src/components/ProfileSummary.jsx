import { Container } from "react-bootstrap"
import { useContext } from "react"
import { ProfileContext } from "../redux/contexts/ProfileContext"

const ProfileSummary = () => {
    const { profile } = useContext(ProfileContext)
    const userProfileName = profile ? `${profile.name} ${profile.surname}` : ''
    const userProfileTitle = profile ? profile.title : '';
    const userProfileImg = profile ? profile.image : '';

    return (
        <Container>
            <div></div>
            <>
                <img className='img-fluid dropImg' style={{ width: '8em' }} src={userProfileImg} alt="foto profilo utente" />
                <p>{userProfileName}</p>
                <p>{userProfileTitle}</p>
                <hr />
                <p>Expand your network</p>
                <hr />
                <p>Boost your career with exclusive tools</p>
                <p>Try Premium for 0 EUR</p>
                <hr />
                <p>My items</p>
            </>
        </Container>
    )
}

export default ProfileSummary;