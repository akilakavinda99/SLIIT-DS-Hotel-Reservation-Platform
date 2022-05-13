import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function ViewTraveler(){

    const {id} = useParams();
    const [traveler, setTraveler] = useState([]);

    useEffect(() =>{
        const getTraveler =() =>{
        axios.get(`http://localhost:5000/traveler/get/${id}`).then((res) =>{
            console.log(res)
            setTraveler(res.data)
        }).catch((er) =>{
            alert(er.message);
        })
        }
        getTraveler();
    },[])

    return(
        <div>
            {
            traveler.map((profile)=>(
                <ul>
                    <li>{profile.firstName}</li>
                    <li>{profile.lastName}</li>
                    <li>{profile.email}</li>
                </ul>

            ))
}
        </div>
    )
}