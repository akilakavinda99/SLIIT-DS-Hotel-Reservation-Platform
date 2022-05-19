import React, { useState } from "react";
import "./taxi_reservation.css"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import dotenv from "dotenv";
dotenv.config();

const t_confirm = ()=>{

    return (

        <div class="taxi-confirm">

            <div class="jumbotron text-center">
            <h1 class="display-3">Thank You!</h1>
            <p class="lead"><strong>Your Booking Confirmed</strong> Our member will get back to you soon.</p>
            <hr></hr>
            <p>
                Having trouble? <a href="">Contact us</a>
            </p>
            <p class="lead">
                <a class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</a>
            </p>
            </div>


        </div>


    );
};
export default t_confirm;