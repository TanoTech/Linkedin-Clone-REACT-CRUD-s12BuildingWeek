import { Container } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

const SeeMore = () => {
  return (
    <Container className="bg-white border border-solid rounded mt-2 p-0">
      <Container className="border-bottom mt-3">
        <p className="LinkSeeMore mx-0 my-1">Groups</p>
        <div className="d-flex justify-content-between m-0">
          <p className="LinkSeeMore mx-0 my-1">Events</p>
          <FiPlus className="align-self-center" style={{ cursor: "pointer" }} />
        </div>
        <p className="LinkSeeMore mx-0 my-1">Followed Hashtags</p>
      </Container>
      <Container className="text-center py-2 m-0 text-secondary fw-bold ButtonSeeMore">
        Discover more
      </Container>
    </Container>
  );
};

export default SeeMore;
