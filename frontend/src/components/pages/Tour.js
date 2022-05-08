import React from "react";
import "../../styles/Tour.scss";
import BookWidget from "../booking/BookWidget";
const Tour = () => {
  return (
    <div className="Tour">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/tours/tour_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Tours & Activities</h2>
          <p>Explore all of our tours and activities here</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">View all of our tours</h1>
        <p>
          While staying at our resort, you may explore everything Koggala has to offer.
Koggala has something for everyone, with its pure white sand beaches, magnificent landscape, unique food, and friendly residents.
        </p>
      </section>
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">ICONIC SCENARY</h1>
          <p>
            Stilt fishing is a method of fishing unique to the island country of Sri Lanka, known as “the Pearl of the Indian Ocean”. The fishermen sit on a cross bar called a ‘petta’ tied to a vertical pole and driven into the sand a few meters offshore. From this high position, the fishermen casts his line, and waits until a fish comes along to be caught. Although the approach looks primitive and ancient,
          </p>
          <h2>DAILY VISITS</h2>
        </article>
        <div className="descRight">
          <img src="/img/tours/fisherman.jpg" alt="tour_main" />
        </div>
      </section>
      <section className="desc_sec">
        <div className="img-container">
          <img src="/img/tours/airport.jpg" alt="markets" />
        </div>
        <article>
          <span></span>
          <div>
            <h1 className="alt-font">Koggala Airport</h1>
            <p>
             Koggala Airport in Sri Lanka was originally a Royal Air Force Station RAF Koggala. It is now the SLAF Koggala, used for domestic flights and for military purposes
            </p>
          </div>
          <span></span>
        </article>
      </section>
     
    </div>
  );
};

export default Tour;
