import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import './TravelerProfile.scss';

export default function ViewTraveler(){

    const {id} = useParams();
    const [traveler, setTraveler] = useState([]);

    useEffect(() =>{
        const getTraveler =() =>{
        axios.get(`http://localhost:5000/traveler/get/${id}`).then((res) =>{
            // console.log(res.data)
            setTraveler(res.data.traveler)
        }).catch((er) =>{
            alert(er.message);
        })
        }
        getTraveler();
    },[])

    return(

<div>
       
           <header
                className="header-main"
                style={{
                background:
                    ' no-repeat center/cover url("/img/admin/user profilebg.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Profile</h2>
                </div>
            </header>

<div class="container">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card card-profile">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>{traveler.firstName} {traveler.lastName}</h4>
                      <p class="text-muted font-size-sm">{traveler.address}</p>
                      <Link to = "/mybookings">
                        <button class="btn">My Bookings</button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="col-md-8">
              <div class="card mb-3 card-details">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {traveler.firstName}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {traveler.lastName}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {traveler.telephone}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {traveler.email}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {traveler.address}
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
    )
}




