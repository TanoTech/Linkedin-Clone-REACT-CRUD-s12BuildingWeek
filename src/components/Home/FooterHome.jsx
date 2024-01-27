import React from "react";
import { Container, Row } from "react-bootstrap";

function FooterHome() {
  return (
    <Container className="mt-4" id="ContainerFooterHome">
      <Row>
        <Container className="d-flex justify-content-center ">
          <p className="p-1 m-0 textUnderStyle">Information</p>
          <p className="p-1 m-0 textUnderStyle">Accessibility</p>
        </Container>

        <Container className="d-flex justify-content-center ">
          <p className="p-1 m-0 textUnderStyle">Service center</p>
          <p className="p-1 m-0 textUnderStyle">Privacy and conditions</p>
        </Container>

        <Container className="d-flex justify-content-center ">
        <p className="p-1 m-0 textUnderStyle">Options for advertisements</p>
        </Container>

        <Container className="d-flex justify-content-center ">
          <p className="p-1 m-0 textUnderStyle">Advertising</p>
          <p className="p-1 m-0 textUnderStyle">Business services</p>
        </Container>

        <Container className="d-flex justify-content-center ">
          <p className="p-1 m-0 textUnderStyle">Download the LinkedIn app</p>
          <p className="p-1 m-0 textUnderStyle">Other</p>
        </Container>

      </Row>
      <Container className="d-flex justify-content-center p-0">
          <img
            className="img-fluid w-25 m-0 p-1"
            src="/assets/logo/logoFooterHome.png"
            alt="Linkedin logo"
          />
          <p className="m-0 p-1 align-self-center"> LinkedIn Corporation © 2024</p>
        </Container>
    </Container>
  );
}

export default FooterHome;
