import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as api from "../../api";

import "./TravelerReg.scss";

export default function RegisterTraveler() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();


    function sendData(e) {
        e.preventDefault();

        const newTraveler = {
            firstName,
            lastName,
            email,
            telephone,
            address,
            password
        }

        // axios.post("http://localhost:5000/traveler/register", newTraveler)
        api.travelerRegister(newTraveler)
            .then(() => {
                //alert("successful");
                history.push("/login")

            }).catch((e) => {
                alert(e)
            })
    }

    return (
        <div className="TravelerReg">
            <header
                className="header-main"
                style={{
                    background:
                        ' no-repeat center/cover url("/img/admin/signup_user.jpeg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Sign Up Here</h2>
                </div>
            </header>

            <div className="register">
                <h1 className="alt-font">Sign up</h1>

                <form onSubmit={sendData}>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }} required/>

                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }} required/>

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} required/>

                    <input
                        type="text"
                        placeholder="Telephone No"
                        name="telephone"
                        onChange={(e) => {
                            setTelephone(e.target.value)
                        }} required/>

                    <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }} required/>

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} required/>

                    <button className="btn">Register</button>

                    <Link to="/login">
                        <h6 className="txt-sign-in">Already have an account? Sign in here</h6>
                    </Link>

                </form>
            </div>
        </div>
    )
}
