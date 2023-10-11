import React from "react";
import "../App.css";
// import nav from "../images/nav.jpg";
import Navbar from "../Navbar";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";

const Home = () => {
  return (
    <div className="nav">
      <Navbar />
      <button className="B1">Register</button>
      <h6 className="text">Welcome to Mercury hotel</h6>
      <p className="p1">
        It's time to uncover possibilities, discover a new side of yourself, and
        refresh in our brand-new hotel
      </p>
      <button className="B2">Explore Now</button>
      <button className="B3">Book Now</button>

      <div className="bottom">
        <p className="p2"> Address:5 Benmore Gardens,Johannesburg,2196</p>
        <p className="p3">FOLLOW US</p>
        <p className="p4">PHONE: +27 11 325 7711</p>
        <div className="icons">
          {""}

          <img src={instagram} alt="instagram" className="i" />
          <img src={youtube} alt="youtube" className="y" />
          <img src={twitter} alt="twitter" className="t" />
        </div>
      </div>
    </div>
  );
};

export default Home;
