import React, { useEffect } from "react";
import "../../../styles/Rooms.scss";
import { getAllRooms } from "../../../actions/rooms";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookWidget from "../../booking/BookWidget";
/* import RoomsJSON from "../../../rooms.json"; */
const Rooms = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getAllRooms());
  }, [location, dispatch]);
  const rooms = useSelector((state) => state.rooms.rooms);
  return (
    <div className="Rooms">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/rooms/room_header2.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Rooms</h2>
          <p>
            Sooriya Resort's spacious guest rooms include beautiful views and exceptional facilities.
          </p>
        </div>

        <BookWidget />
      </header>

      <section className="desc">
        <h1 className="alt-font">Be enthralled</h1>
        <p>
          From the biggest hotel rooms in Koggala, choose between breathtaking balcony views of The Villa or our resort's own Beach Resort and Oceanside View.
        </p>
      </section>

      <section className="flex-row-lg">
        {rooms.length < 1 ? (
          <div className="loader">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h2>Loading...</h2>
          </div>
        ) : (
          rooms.map((room) => (
            <article className="card" key={room._id}>
              <Link to={`rooms/${room._id}`}>
                <button className="btn-alt ">EXPLORE</button>
              </Link>
              <div>
                <h1 className="alt-font">{room.title}</h1>
                <p>{room.description}</p>
              </div>
              <div className="img-container">
                <img src={`/img/rooms/${room.mainImage}`} alt={room.mainImage} />
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Rooms;
