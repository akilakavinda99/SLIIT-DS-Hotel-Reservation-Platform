import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import './TravelerProfile.scss';

export default function ViewTraveler(){

    const {id} = useParams();
    const [traveler, setTraveler] = useState([]);

    useEffect(() =>{
        const getTraveler =() =>{
        axios.get(`http://localhost:5000/traveler/get/${id}`).then((res) =>{
            console.log(res.data)
            setTraveler(res.data.traveler)
        }).catch((er) =>{
            alert(er.message);
        })
        }
        getTraveler();
    },[])

    return(
        <div>
            <div className="profile">
            <header
                className="header-main"
                style={{
                background:
                    ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Profile</h2>
                </div>
            </header>

            <div className="register">
                <div className="container-profile">
                
                    <div className="row">
                        <div className="column">
                            <label for="first name" class="form-label"><strong>First Name</strong></label>
                            <input type="text" defaultValue={traveler.firstName} readOnly/>
                        </div>
                    
                        <div className="column">
                            <label for="last name" class="form-label"><strong>Last Name</strong></label>
                            <input type="text" defaultValue={traveler.lastName} readOnly/>
                        </div>
                    </div>    
                
                <div className="row">
                    <div className="column">
                        <label for="email" class="form-label"><strong>Email</strong></label>
                        <input type="text" defaultValue={traveler.email} readOnly/>
                    </div>
                
                    <div className="column">
                        <label for="telephone no" class="form-label"><strong>Telephone</strong></label>
                        <input type="text" defaultValue={traveler.telephone} readOnly/>
                    </div>
                </div> 

                <div className="row">
                    <div className="column">
                        <label for="address" class="form-label"><strong>Address</strong></label>
                        <input type="text" defaultValue={traveler.address} readOnly/>
                    </div>
                </div> 

                <button>my bookings</button>   
            </div>
           </div>
        </div>
        </div>
    )
}




