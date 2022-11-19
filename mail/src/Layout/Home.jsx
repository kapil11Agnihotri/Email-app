import React from "react";
import Header from "./Header";
import ComposeMail from "./ComposeMail";
import "./Home.css";
import Maillist from "./Maillist";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <ComposeMail />
        
        <div className="mail">
        <Maillist />
        </div>
      </div>
    </>
  );
};

export default Home;
