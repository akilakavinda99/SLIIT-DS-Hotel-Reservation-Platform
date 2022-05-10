import React, { useEffect } from "react";
// import "../../styles/Rooms.scss";
import { getAllRooms } from "../../actions/rooms";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Rooms = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(getAllRooms());
    }, [location, dispatch]);
    const rooms = useSelector((state) => state.rooms.rooms);

    return (
        <div className="Rooms">
            <div className="btn-container">
                <Link to={`/admin/rooms/add`}>
                    <button className="btn">Add Room</button>
                </Link>
            </div>
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
                        <article className="card2" key={room.title}>
                            <Link to={`rooms/${room.url}`}>
                                <button className="btn-alt">EDIT</button>
                            </Link>
                            <div>
                                <h1 className="alt-font">{room.title}</h1>
                                <p>{room.description}</p>
                            </div>
                            <div className="img-container">
                                <img src={`img/rooms/${room.mainImage}`} alt={room.mainImage} />
                            </div>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
};

export default Rooms;
