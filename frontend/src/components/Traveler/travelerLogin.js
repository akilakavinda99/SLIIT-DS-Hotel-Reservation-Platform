import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
                axios.post('http://localhost:5000/traveler/login', travelerData)
                    .then(res => {

                        const utoken = {
                            email: travelerData.email,
                            role: "traveler"
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
            <h3>Customer Login Form</h3>
            <form onSubmit={onSubmit}>

                <label htmlFor="Username">email</label>
                <input type="text"
                    name="email"
                    placeholder="Enter your email"
                    required
                    onChange={onChange} />

                <br />
                <label htmlFor="Password">Password</label>
                <input type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    onChange={onChange} />
                <br />
                <input type="submit" />


            </form>
        </div>
    )

}

export default TravellerLogin;
