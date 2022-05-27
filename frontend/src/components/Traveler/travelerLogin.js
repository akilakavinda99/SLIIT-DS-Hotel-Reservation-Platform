import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import * as api from "../../api";

import "./TravelerReg.scss";

const TravellerLogin = () => {

    const history = useHistory();
    const [Traveler, setLoginData] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setLoginData({ ...Traveler, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const login = travelerData => {
            return (
                
                // axios.post('http://localhost:5000/traveler/login', travelerData)
                api.travelerLogin(travelerData)
                    .then(res => {
                        //console.log(res.data)

                        const utoken = {
                            email: travelerData.email,
                            userId: res.data.traveler._id,
                            role: "traveler",
                            
                        }

                        localStorage.setItem('usertoken', JSON.stringify(utoken))
                        console.log(JSON.parse(localStorage.getItem('usertoken')))
                        return res.data

                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            )
        }

        login(Traveler)
            .then(res => {
                if (!res.error) {
                    console.log(Traveler)
                    history.push("/");
                } else {
                    window.alert(res.error)
                }
            })
            .catch(err => {
                window.alert(err.message)
            })

    }

    return (
        <div>
            <div className="TravelerReg">
            <header
                className="header-main"
                style={{
                background:
                    ' no-repeat center/cover url("/img/admin/signin_user.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Sign In Here</h2>
                </div>
            </header>

            <div className="register">
                <h1 className="alt-font">Sign In</h1>

                    <form onSubmit={onSubmit}> 
                        <input type="text"
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={onChange} />
                    
                        <input type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            onChange={onChange} />
                    
                        <button className="btn">Log in</button>

                        <Link to="/register">
                            <h6 className="txt-sign-in">Not registered? Create an account</h6>
                        </Link>
                    </form>
            </div>
            </div>
        </div>
    )

}

export default TravellerLogin;


