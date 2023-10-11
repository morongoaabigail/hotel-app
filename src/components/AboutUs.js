import React from "react";
import "../App.css";
import outside from "../images/outside.jpg";
import lounge from "../images/lounge.jpg";
import greater from "../images/greater.png";

const About = () => {
  return (
    <div>
      <header className="header">ABOUT US </header>

      <h4 className="h4">MERCURY HOTEL </h4>
      <img src={greater} alt="greater" className="greater" />
      <h4 className="h5"> ABOUT US</h4>
      <div className="images">
        <img src={outside} alt="outside" className="o" />
        <img src={lounge} alt="lounge" className="l" />
      </div>
      <div>
        <p className="w">
          Welcome to Mercury hotel, a brand-new luxury hotel conveniently
          located on Benmore Road in Sandton,Johannesburg.
        </p>
        <p className="longP">
          Located on the Northern edge of the Sandton CBD, we are within easy
          reach of the Sandton Gautrain Station, Benmore shopping centre, Nelson
          Mandela Square, Sandton City and the many corporate offices that make
          this the economic heart of Johannesburg. Mercury Hotel offers a
          relaxing respite from the bustling streets outside, with a grand
          reception foyer welcoming guests inside and all the amenities you
          could need under one roof. On the deck you’ll find our sparkling blue
          swimming pool, with a smaller child-friendly pool attached and a
          fully-equipped children’s play area nearby. The Pool Bar offers
          enticing views and a place to relax, unwind, and enjoy a refreshing
          cocktail or ice-cold beer. The elevated deck area provides privacy
          whilst enjoying the view of activities from the overlooked Piazza,
          whetting your appetite with high end eateries and coffee shops.
          Fitness enthusiasts can enjoy the complimentary, well-equipped gym,
          allowing you to exercise without having to leave the hotel. At our
          luxurious Spa, you can re-invigorate your body and soul and ease away
          stress, with many options available on the spa menu. Guests will also
          find an array of dining options within Mercury Hotel, from an on-site
          Deli with grab-and-go options to our Coffee Bar, Pool Bar, Mercury
          Restaurant, Cigar Lounge and Tasting Room.
        </p>
        <p className="d">Disclaimer</p>
        <p className="p">
          Please note EFT payments need to be processed at least 48 hours in
          advance and sent through to the hotel to allocate accordingly.
        </p>
      </div>
    </div>
  );
};

export default About;
