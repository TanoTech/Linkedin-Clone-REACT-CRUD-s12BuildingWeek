import { Container } from "react-bootstrap"
import { useContext } from "react"
import { ProfileContext } from "../redux/contexts/ProfileContext"

const ProfileSummary = () => {
    const { profile } = useContext(ProfileContext)
    const userProfileName = profile ? `${profile.name} ${profile.surname}` : ''
    const userProfileTitle = profile ? profile.title : '';
    const userProfileImg = profile ? profile.image : '';

    return (
        <Container className="bg-white border border-solid rounded mt-3" id="ContainerSummary">
            <div>
                
            </div>
            <>
                <Container className="p-0 text-center border-bottom" id="Section1Summary">
                    <img className='img-fluid dropImg mt-4 mx-0' src={userProfileImg} alt="foto profilo utente" />
                    <div className="mt-3 mx-0">
                        <p className="text-center m-0 fw-bold">{userProfileName}</p>
                        <p className="text-center m-0 Style1Summary">{userProfileTitle}</p>
                    </div>
                </Container>
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