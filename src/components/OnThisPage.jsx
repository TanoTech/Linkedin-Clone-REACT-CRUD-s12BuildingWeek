import { Container } from "react-bootstrap"

const OnThisPage = () => {
    return (
        <Container className="bg-white mt-3 rounded border border-solid p-2 pb-0">
            <p className="m-0 mb-2 p-1" id="OnThisPageParagraph" style={{cursor:"pointer"}}>On this page</p>
            <p style={{cursor:"pointer"}}>People</p>
            <p style={{cursor:"pointer"}}>Post</p>
            <p style={{cursor:"pointer"}}>Other people</p>
        </Container>
    )
}

export default OnThisPage;