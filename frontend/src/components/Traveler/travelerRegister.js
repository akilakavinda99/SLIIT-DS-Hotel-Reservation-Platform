import React, {useState} from "react";
import axios from "axios";

export default function RegisterTraveler(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e){
        e.preventDefault();

        const newTraveler = {
            firstName,
            lastName,
            email,
            password
        }

        axios.post("http://localhost:/3000/traveler/register", newTraveler).then(() =>{
            alert("successful")
        }).catch((e) =>{
            alert(e)
        })
    }

    return(
        <div>

            <form onSubmit={sendData}>
                <label for="first name">First Name:</label>
                <input type="text" onChange={(e) => {
                    setFirstName(e.target.value)
                }}/>

                <label for="last name">last Name:</label>
                <input type="text" onChange={(e) => {
                    setLastName(e.target.value)
                }}/>

                <label for="price">email:</label>
                <input type="email" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>

                <label for="password">password:</label>
                <input type="password" onChange={(e) => {
                    setPassword(e.target.value)
                }}/>

                <input type="submit" value="sign up"/>
                <input type="submit" value="sign in"/>
            </form> 
        </div>
    )
}