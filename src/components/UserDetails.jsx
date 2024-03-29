import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../redux/contexts/ProfileContext";
import MainProfile from "./MainProfile";
import Formation from "./Formation";
import Interessi from "./Interessi";
import Activity from "./Activity";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";
import OtherProfileConsulted from "./OtherProfileConsulted";
import OnThisPage from "./OnThisPage";
import Ads from "./Ads";
import Experience from "./Experience";

const UserDetail = () => {
  const { userId } = useParams();
  const { getAllPeople } = useContext(ProfileContext);
  
  const selectedUser = getAllPeople.find((user) => user._id === userId);

  if (!selectedUser) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <main className="d-flex">
        <section>
          <OnThisPage />
        </section>
        <div className="d-flex flex-column">
          <MainProfile data={selectedUser} />
          <Activity data={selectedUser} />
          <Experience data={selectedUser._id} />
          <Formation />
          <Interessi />
        </div>
        <section className="mt-2">
          {" "}
          <OtherProfileConsulted />
          <Ads />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserDetail;