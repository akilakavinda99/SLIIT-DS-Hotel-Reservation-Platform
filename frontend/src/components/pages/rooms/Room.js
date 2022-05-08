import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getRoom } from "../../../actions/rooms";
import BookWidget from "../../booking/BookWidget";
import { displayIcon } from "../../helper/Icons";
import "../../../styles/Room.scss";
const Room = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currId = props.match.params.id;
  const [show, setShow] = useState(4);

  useEffect(() => {
    dispatch(getRoom(currId));
  }, [location, currId, dispatch]);
  // for some reason this is rendering twice....
  const room = useSelector((state) => state.rooms.room);
  const handleClick = () => {
    show === 4 ? setShow(room.amenities.length) : setShow(4);
  };
  return (
    <div className="Room">
      <header
        className="header-main"
        style={{
          background: `no-repeat center/cover url("/img/rooms/${room.mainImage}")`,
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">{room.title}</h2>
          <p>{room.titleHeader}</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">{room.header}</h1>
        <p>{room.subHeader}</p>
      </section>
      <section className="roomInfo">
        <div className="infoLeft">
          <div className="info">
            <div>
              <h3>VIEW</h3>
              <p>{room.view}</p>
            </div>
            <div>
              <h3>SIZE</h3>
              <p>{room.size}</p>
            </div>
            <div>
              <h3>OCCUPANCY</h3>
              <p>
                {room.adults} Adults & {room.children} Children
              </p>
            </div>
            <div>
              <h3>BEDDING</h3>
              <p>{room.bedding}</p>
            </div>
          </div>
          {room.amenities && (
            <div className="infoIcons">
              <h3>AMENITIES</h3>
              <ul>
                {room.amenities
                  .filter((item, idx) => idx < show)
                  .map((item) => (
                    <li key={item}>
                      <i className={`${displayIcon(item)} itemIcon`}></i>
                      <p>{item}</p>
                    </li>
                  ))}
                <li onClick={handleClick}>
                  <i
                    className={`${
                      show <= 4 ? "fas fa-plus" : "fas fa-minus"
                    } itemIcon itemShow`}
                  >
                    {show <= 4 && <span>{room.amenities.length - 4}</span>}
                  </i>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="infoRight">
          <h2 className="alt-font">ROOM OVERVIEW</h2>
          <p>{room.paragraph}</p>
        </div>
      </section>
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">Welcome to Koggala</h1>
          <p>
            Welcome back to our oceanfront resort in Koggala lively, magnificent city. You'll spend warm days with many exciting activities.
days spent relaxing beside gleaming pools or basking in relaxation at our
pleasant nights tasting local flavors at our magnificent spa
          </p>
        </article>
        <div className="descRight">
          <img src={`/img/rooms/${room.subImage}`} alt="sub_room" />
        </div>
      </section>
    </div>
  );
};

export default Room;
