import { Container } from "react-bootstrap"
import { HiOutlinePencil } from "react-icons/hi2";

const ProfileLanguage = ({data}) => {
    return (
        <Container className="bg-white mt-3 rounded border border-solid SideSections">
            <div className="border-bottom py-2 m-0">
                <div className="d-flex justify-content-between p-0 m-0">
                    <h2 className="fs-6">Profile Language</h2>
                    <HiOutlinePencil />
                </div>
                <p className="mb-1 ParagraphProfileLanguage">English</p>
            </div>
            
            <div className="py-2 m-0">
                <div className="d-flex justify-content-between p-0 m-0">
                    <h2 className="fs-6">Public profile & URL</h2>
                    <HiOutlinePencil />
                </div>
                <p className="mb-1 ParagraphProfileLanguage">www.linkedin.com/in/{`${data.name.toLowerCase()}-${data.surname.toLowerCase()}`}</p>
            </div>
        </Container>
    )
}

export default ProfileLanguage;