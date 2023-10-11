import React from "react";
import "../App.css";
import Map from "../images/map.png";

const Contactus = () => {
  return (
    <div>
      <h3 className="contactus">CONTACT US</h3>
      {""}

      <img src={Map} alt="map" className="m" />
      <p className="wwl">We would love to hear from you</p>
      <div className="div2">
        <p className="mh">
          Mercury Hotel T: +27 11 325 7711 E: reservations@mercuryhotel.co.za
          Employment and Payroll enquiries: T: +27 11 325 7711 E:
          hr3@mercuryhotel.co.za
          <p className="add">
            Address: 5 Benmore Rd, Benmore Gardens,Johannesburg, 2196
          </p>
        </p>
        <div className="div3">
          <form>
            <label className="tel">
              Tel:
              <input type="textF1" />
            </label>
          </form>
          <form>
            <label className="Mss">
              Message:
              <input type="textF2" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
