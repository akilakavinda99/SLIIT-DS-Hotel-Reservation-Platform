import React, { useState } from "react";
import axios from "axios";
import "./taxi_reservation.css"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import dotenv from "dotenv";
import {useForm} from "react-hook-form";
dotenv.config();


const T_Reservation = ()=>{

    // onsubmit()
    //const {register,handleSubmit,formState:{errors}}=useForm();
    // const [formData, setFormData]=useState({
    //     vehicleType:"",
    //     from:"",
    //     to:"",
    //     date:"",
    //     fname:"",
    //     lname:"",
    //     email:"",
    //     phone:"",

    // });

    const [vehicleType, setvehicleType] = useState("");
    const [from, setFrom] = useState("");
    const [to,setTo]=useState("");
    const[date,setDate]=useState("");
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    // const {state}=this.props.location
    const history=useHistory();

    function sendData(e){

    
        e.preventDefault();
        // this.props.history.push('http://localhost:3000/taxiconfirm')
        const reservation={
            vehicleType,
            from:"koggala",
            to,
            date,
            fname,
            lname,
            email,
            phone,
        }
        console.log(reservation);
        axios.post("http://localhost:5000/taxi/taxi_reserve",reservation).then(()=>{
            //window.location('/taxiconfirm')
             history.push("/taxiconfirm")
            //alert("Success");
           
        }

        ).catch((e)=>{
            alert(e)

        }
            
        )

    }

    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //    this.props.history.push('/dashboard')
    //   }

    return(

        <div className="taxi-reservation">
        <div className="taxi-reservation-form">


            <div class="form-group w-50 p-3 mt-5 ml-10">
                <h3>Enter Details to book a Vehicle</h3>
                <br></br>
                <br></br>
            <form onSubmit={sendData}>
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputState">Vehicle Type</label>
                <select id="inputState" class="form-control" defaultValue={"TUK"} onChange={(e)=>{setvehicleType(e.target.value)}}>
                    <option selected>Select Vehicle Type</option>
                    <option>Tuk</option>
                    <option>Budget-Taxi</option>
                    <option>Comfort Car</option>
                    <option>Luxary Car</option>
                </select>
                </div>
            </div>

            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputState">From</label>
                {/* <select id="inputState" class="form-control" defaultValue={"Koggala"} onChange={(e)=>{setFrom(e.target.value)}}>
                
                    <option selected>Koggala</option>
                </select> */}
                <input type="text" defaultValue={"Koggala"} readOnly></input>
                </div>
            </div>

            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputState">To</label>
                <select id="inputState" class="form-control" onChange={(e)=>{setTo(e.target.value)}}>
                    <option selected>Colombo</option>
                    <option selected>Kandy</option>
                    <option selected>Nuwara Eliya</option>
                </select>
                </div>
            </div>

            <div class="form-row">
                <br></br>
                <div class="form-group col-md-6">
                <label for="inputDate">Date</label>

                    <input type="date" class="form-control col-xs-3" id="inputdate" onChange={(e)=>{setDate(e.target.value)}}></input>

                </div>
            </div>

            <div class="form-row">
                <div class="form-group col md-6">
                    <label for="inputfname">First Name </label>
                    <input type="text" class="form-control col-xs-3" id="inputfname" placeholder="First Name" onChange={(e)=>{setFname(e.target.value)}}></input>
                </div>
                <div class="form-group col md-6">
                    <label for="inputlname">Last Name </label>
                    <input type="text" class="form-control col-xs-3" id="inputlname" placeholder="Last Name" onChange={(e)=>{setLname(e.target.value)}}></input>
                </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control col-xs-3" id="inputEmail4" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
                </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputPhone">Phone</label>
                <input type="number" class="form-control" id="inputPhone" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}></input>
                </div></div>
            {/* <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"></input>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div> */}
            <button type="submit" class="btn btn-danger">Book Vehicle</button>
            </form>
            </div>

        </div></div>
        
    
        );

};

export default T_Reservation;