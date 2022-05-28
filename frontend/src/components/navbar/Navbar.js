import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/Navbar.scss";

const Navbar = () => {

  var travelerId = "";

  localStorage.usertoken?
  travelerId = JSON.parse(localStorage.getItem('usertoken')).userId
  : travelerId=""
  
  const history = useHistory();
 

  //console.log(travelerId)
  const [header, setHeader] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {

      console.log(travelerId)
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
    
  }, []);

  function SignOut (){
    localStorage.removeItem('usertoken');
    history.push("/login")
  }
  console.log(travelerId)
  return (
    <div className={`Navbar ${header}`}>
      <div className="navTop">
        <div className="contact">
          <i className="fas fa-phone-alt"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-square"></i>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="alt-font">SOORIYA RESORT<span>&nbsp;</span></h1>
          </Link>
        </div>

        {localStorage.usertoken?
        <button className="btn" onClick={SignOut}>Sign Out</button>
        :
        <Link to="/login">
          <button className="btn">Sign in</button>
        </Link>
        }

      </div>
      <div className="navBottom">
        <Link to="/rooms">
          <span>&nbsp;</span>Rooms <span>&#183;</span>
        </Link>
        <Link to="/tours">
          Tours <span>&#183;</span>{" "}
        </Link>
        <Link to="/about">
        About <span>&#183;</span>{" "}
        </Link>
        <Link to = {`/profile/${travelerId}`}>Profile</Link>


      </div>
    </div>
  );
};

export default Navbar;
