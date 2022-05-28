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
        // <div>
        //     <div className="profile">
        //     <header
        //         className="header-main"
        //         style={{
        //         background:
        //             ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
        //         }}
        //     >
        //         <div className="header-content">
        //             <h2 className="alt-font">Profile</h2>
        //         </div>
        //     </header>

        //     <div className="register">
        //         <div className="container-profile">
                
                    
        //                 <div className="column-1">
        //                     <img src="profile.jpg" className="profile" width="120" height="120" />   
        //                 </div>      
                
        //                 <div className="column-2">

        //                     <div className="row-1">
                                
        //                     <h4 className="h4-head">First Name </h4>

        //                     <h5>{traveler.firstName}</h5>
        //                     </div>

        //                     <div className="row-2">
        //                     <h4 className="h4-head">Last Name </h4>
        //                     <h5>{traveler.lastName}</h5>
        //                     </div>


        //                     <div className="row-3">
        //                     <h4 className="h4-head">Email</h4>
        //                     <h5>{traveler.email}</h5>
        //                     </div>


        //                 </div>
                    
        //                 <div className="column-3">
        //                     <div className="row-c3-r1">
        //                     <h4 className="h4-head">Telephone</h4>
        //                     <h5>{traveler.telephone}</h5>
        //                     </div>

        //                     <div className="row-c3-r2">
        //                     <h4 className="h4-head">Address</h4>
        //                     <h5>{traveler.address}</h5>
        //                     </div>

        //                 </div>

        //         <button>my bookings</button>   
        //     </div>
        //    </div>
        // </div>
        // </div>

//         <div>
//             <header
//                 className="header-main"
//                 style={{
//                 background:
//                     ' no-repeat center/cover url("/img/admin/admin_main.jpg")',
//                 }}
//             >
//                 <div className="header-content">
//                     <h2 className="alt-font">Profile</h2>
//                 </div>
//             </header>
        


//         <div class="page-content page-container" id="page-content">
//     <div class="padding">
//         <div class="row container d-flex justify-content-center">
// <div class="col-xl-6 col-md-12">
//                                                 <div class="card user-card-full">
//                                                     <div class="row m-l-0 m-r-0">
//                                                         <div class="col-sm-4 bg-c-lite-green user-profile">
//                                                             <div class="card-block text-center text-white">
//                                                                 <div class="m-b-25">
//                                                                     <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
//                                                                 </div>
//                                                                 <h6 class="f-w-600">{traveler.firstName} {traveler.lastName}</h6>
//                                                                 <p>Welcome</p>
//                                                                 <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
//                                                             </div>
//                                                         </div>
//                                                         <div class="col-sm-8">
//                                                             <div class="card-block">
//                                                                 <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Personal Information</h6>
//                                                                 <div class="row">
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Full Name</p>
//                                                                         <h6 class="text-muted f-w-400">{traveler.firstName} {traveler.lastName}</h6>
//                                                                     </div>
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Address</p>
//                                                                         <h6 class="text-muted f-w-400">{traveler.address}</h6>
//                                                                     </div>
//                                                                 </div>
//                                                                 <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Information</h6>
//                                                                 <div class="row">
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Telephone</p>
//                                                                         <h6 class="text-muted f-w-400">{traveler.telephone}</h6>
//                                                                     </div>
//                                                                     <div class="col-sm-6">
//                                                                         <p class="m-b-10 f-w-600">Email</p>
//                                                                         <h6 class="text-muted f-w-400">{traveler.email}</h6>
//                                                                     </div>
//                                                                 </div>
                                                            
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                              </div>
//                                                 </div>
//                                             </div>
// </div>

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
              <div class="card">
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
              <div class="card mb-3">
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




