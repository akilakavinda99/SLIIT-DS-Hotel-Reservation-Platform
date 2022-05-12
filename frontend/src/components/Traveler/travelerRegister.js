import React, { useState } from "react";
import axios from "axios";

import "./TravelerReg.scss";

export default function RegisterTraveler() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newTraveler = {
            firstName,
            lastName,
            email,
            password
        }

        axios.post("http://localhost:5000/traveler/register", newTraveler).then(() => {
            alert("successful")
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
                    ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
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
                        }} />

                        <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        onChange={(e) => {
                            setLastName(e.target.value)
                            }} />
                        
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    <button className="btn">Register</button>
                    <h4>Already a member? Sign in</h4>
                </form>
        </div>
        </div>
    )
}
