import React, { useEffect } from "react";
import "./styles/App.scss";
import { Route, Switch, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import NavMobile from "./components/navbar/NavMobile";

import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Tour from "./components/pages/Tour";

import Rooms from "./components/pages/rooms/Rooms";
import Room from "./components/pages/rooms/Room";

import Booking from "./components/booking/Booking";
import Available from "./components/booking/Available";
import Checkout from "./components/booking/Checkout";
import Confirm from "./components/booking/Confirm";

import Auth from "./components/auth/Auth";
import AddRoom from "./components/auth/room/AddRoom";
import UpdateRoom from "./components/auth/room/UpdateRoom";

import TravelerRegister from "./components/Traveler/travelerRegister";
import LoginTraveller from "./components/Traveler/travelerLogin";
import TravelerProfile from "./components/Traveler/travelerProfile";
import MyBookings from "./components/Traveler/myBookings";

import Existing from "./components/booking/Existing";
import NoPage from "./components/pages/NoPage";

import taxihome from "./taxi/taxihome";
import taxiReservation from "./taxi/taxi_reservation"
import taxiconfirm from "./taxi/taxi_confirm"

const App = () => {
  const location = useLocation();
  /* const history = useHistory(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <NavMobile />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />

        <Route path="/taxihome" exact component={taxihome}/>
        <Route path="/taxireserve" exact component={taxiReservation}/>
        <Route path="/taxiconfirm" exact component={taxiconfirm}/>

        <Route path="/about" exact component={About} />
        <Route path="/tours" exact component={Tour} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/booking/checkout" exact component={Checkout} />
        <Route path="/booking/confirm" exact component={Confirm} />
        <Route path="/booking/existing" exact component={Existing} />

        <Route path="/admin" exact component={Auth} />
        <Route path="/admin/rooms/add" exact component={AddRoom} />
        <Route
          path="/admin/rooms/update/:id"
          exact
          render={(props) => <UpdateRoom {...props} />}
        />

        <Route path='/register' exact component={TravelerRegister} />
        <Route path='/login' exact component={LoginTraveller} />

        <Route path={"/profile/:id"} exact component={TravelerProfile} />
        <Route path={"/mybookings"} exact component={MyBookings} />
        <Route path="*" exact component={NoPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
