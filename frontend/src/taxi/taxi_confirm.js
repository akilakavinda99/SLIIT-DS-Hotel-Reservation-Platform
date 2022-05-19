import React, { useState } from "react";
import "./taxi_confirm.css"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const T_confirm = () => {
    // const history=useHistory();


    // function redirect(){
    //     history.push("/")

    // }

    return (

        <div class="taxi-confirm">

            <div class="jumbotron text-center">
                <h1 class="display-3">Thank You!</h1>
                <p class="lead"><strong>Your Booking Confirmed</strong> Our member will get back to you soon.</p>
                <hr></hr>
                <p>
                    Having trouble? <a href="">Contact us</a>
                </p>
                <form>
                    <p class="lead">
                        <a class="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                    </p>
                </form>
            </div>


        </div>


    );
};
export default T_confirm;