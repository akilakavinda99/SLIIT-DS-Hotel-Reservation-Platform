import React, { useState } from "react";
import axios from "axios";
import "./taxi_reservation.css"
import { useHistory } from "react-router-dom";
import * as api from "../api";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const T_Reservation = () => {

    const [vehicleType, setvehicleType] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const {state}=this.props.location
    const history = useHistory();

    function sendData(e) {


        e.preventDefault();
        // this.props.history.push('http://localhost:3000/taxiconfirm')
        const reservation = {
            vehicleType,
            from: "koggala",
            to,
            date,
            fname,
            lname,
            email,
            phone,
        }
        console.log(reservation);
        // axios.post("http://localhost:8082/taxi/taxi_reserve", reservation)
        api.reserveTaxi(reservation)
            .then(() => {
                //window.location('/taxiconfirm')
                history.push("/taxiconfirm")
                //alert("Success");

            }

            ).catch((e) => {
                alert(e)

            }

            )

    }

    return (

        // <div className="taxi-reservation">
        //     <div className="taxi-reservation-form">


        //         <div class="form-group w-50 p-3 mt-5 ml-10">
        //             <h3>Enter Details to book a Vehicle</h3>
        //             <br></br>
        //             <br></br>
        //             <form onSubmit={sendData}>
        //                 <div class="form-row">
        //                     <div class="form-group col-md-6">
        //                         <label for="inputState">Vehicle Type</label>
        //                         <select id="inputState" class="form-control" defaultValue={"TUK"} onChange={(e) => { setvehicleType(e.target.value) }}>
        //                             <option selected>Select Vehicle Type</option>
        //                             <option>Tuk</option>
        //                             <option>Budget-Taxi</option>
        //                             <option>Comfort Car</option>
        //                             <option>Luxary Car</option>
        //                         </select>
        //                     </div>
        //                 </div>

        //                 <div class="form-row">
        //                     <div class="form-group col-md-6">
        //                         <label for="inputState">From</label>
        //                         <input type="text" class="form-control col-xs-3" defaultValue={"Koggala"} readOnly></input>
        //                     </div>
        //                 </div>

        //                 <div class="form-row">
        //                     <div class="form-group col-md-6">
        //                         <label for="inputState">To</label>
        //                         <select id="inputState" class="form-control" onChange={(e) => { setTo(e.target.value) }}>
        //                             <option selected>Colombo</option>
        //                             <option selected>Kandy</option>
        //                             <option selected>Nuwara Eliya</option>
        //                         </select>
        //                     </div>
        //                 </div>

        //                 <div class="form-row">
        //                     <br></br>
        //                     <div class="form-group col-md-6">
        //                         <label for="inputDate">Date</label>

        //                         <input type="date" class="form-control col-xs-3" id="inputdate" onChange={(e) => { setDate(e.target.value) }}></input>

        //                     </div>
        //                 </div>

        //                 <div class="form-row">
        //                     <div class="form-group col md-6">
        //                         <label for="inputfname">First Name </label>
        //                         <input type="text" class="form-control col-xs-3" id="inputfname" placeholder="First Name" onChange={(e) => { setFname(e.target.value) }}></input>
        //                     </div>
        //                     <div class="form-group col md-6">
        //                         <label for="inputlname">Last Name </label>
        //                         <input type="text" class="form-control col-xs-3" id="inputlname" placeholder="Last Name" onChange={(e) => { setLname(e.target.value) }}></input>
        //                     </div>
        //                 </div>
        //                 <div class="form-row">
        //                     <div class="form-group col-md-6">
        //                         <label for="inputEmail4">Email</label>
        //                         <input type="email" class="form-control col-xs-3" id="inputEmail4" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} ></input>
        //                     </div>
        //                 </div>
        //                 <div class="form-row">
        //                     <div class="form-group col-md-6">
        //                         <label for="inputPhone">Phone</label>
        //                         <input type="number" class="form-control" id="inputPhone" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }}></input>
        //                     </div></div>
        //                 <button type="submit" class="btn btn-danger">Book Vehicle</button>
        //             </form>
        //         </div>
        //     </div></div>

        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

                    <div class="card card-reservation">
                        <h4 class="text-center mb-4">Enter Details to book a Vehicle</h4>

                        <form class="form-card" onSubmit={sendData}>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-control-label label-taxi">Vehicle Type</label>
                                    <select id="inputState" class="form-control" defaultValue={"TUK"} onChange={(e) => { setvehicleType(e.target.value) }}>
                                        <option selected>Select Vehicle Type</option>
                                        <option>Tuk</option>
                                        <option>Budget-Taxi</option>
                                        <option>Comfort Car</option>
                                        <option>Luxary Car</option>
                                    </select>

                                    <label class="form-control-label label-taxi">From</label>
                                    <input type="text" class="form-control col-xs-3" defaultValue={"Koggala"} readOnly></input>

                                    <label class="form-control-label label-taxi">First Name </label>
                                    <input type="text" class="form-control col-xs-3" id="inputfname" placeholder="First Name" onChange={(e) => { setFname(e.target.value) }} required />

                                    <label class="form-control-label label-taxi">Phone</label>
                                    <input type="text" class="form-control" id="inputPhone" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} required />


                                </div>

                                <div class="form-group col-sm-6 flex-column d-flex">

                                    <label class="form-control-label label-taxi">To</label>
                                    <select id="inputState" class="form-control" onChange={(e) => { setTo(e.target.value) }}>
                                        <option selected>Colombo</option>
                                        <option selected>Kandy</option>
                                        <option selected>Nuwara Eliya</option>
                                    </select>

                                    <label class="form-control-label label-taxi">Date</label>
                                    <input type="date" class="form-control col-xs-3" id="inputdate" onChange={(e) => { setDate(e.target.value) }} required />

                                    <label class="form-control-label label-taxi">Last Name </label>
                                    <input type="text" class="form-control col-xs-3" id="inputlname" placeholder="Last Name" onChange={(e) => { setLname(e.target.value) }} required />

                                    <label class="form-control-label label-taxi">Email</label>
                                    <input type="email" class="form-control col-xs-3" id="inputEmail4" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />

                                </div>
                            </div>

                            <center><button type="submit" class="btn btn-danger btn-book-vehicle">Book Vehicle</button></center>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default T_Reservation;