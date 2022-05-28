import React from "react";
import "./taxihome.css"
import dotenv from "dotenv";
import {Link,} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
dotenv.config();


const taxihome=()=>{

    // const navigate=useNavigate();

    // const toreservation=()=>{
    //     navigate('/taxi/taxireserve',{state:{vehicleType:req.body.vehicleType}})
    // }

    // const toreservation=(e)=>{
    //     this.props.history.push({
    //     pathname:'/taxi/taxireserve', state:e  })}






    return(

        <div className="txxx">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                <div class="container">
                    <br></br>
                    <h4>Select A Vehicle</h4>
                    <br></br>
                    <div class="row" id="ads">
                    
                    <div class="col">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve"class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Tuk</span>
                                <span class="card-notify-year">Rs.55</span>
                                <img class="img-fluid" src="https://i.postimg.cc/xChhccH2/Untitled-1.png&width=440&height=262" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">3 person</span>
                                <span class="card-detail-badge">Rs.55 per KM</span>
                                <span class="card-detail-badge">Without A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Budget-Taxi</span>
                                <span class="card-notify-year">Rs.65</span>
                                <img class="img-fluid" src="https://i.postimg.cc/GhJg1MMr/Untitled-2.png&width=440&height=262" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">4 person</span>
                                <span class="card-detail-badge">Rs.65 per KM</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card rounded">
                        <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Comfort Car</span>
                                <span class="card-notify-year">Rs.85</span>
                                <img class="img-fluid" src="https://i.postimg.cc/0jS3mPdJ/Untitled-3.png&width=440&height=262" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">5 Person</span>
                                <span class="card-detail-badge">Rs.85 per KM</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            <div class="card-body text-center">
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card rounded">
                            <a href="http://localhost:3000/taxireserve" class="card-clickable"></a>
                            <div class="card-image">
                                <span class="card-notify-badge">Luxary Car</span>
                                <span class="card-notify-year">Rs.115</span>
                                <img class="img-fluid" src="https://i.postimg.cc/g2p9VX7c/Untitled-4.png&width=440&height=262" alt="Alternate Text" ></img>
                            </div>
                            <div class="card-image-overlay m-auto">
                                <span class="card-detail-badge">4 Person</span>
                                <span class="card-detail-badge">Rs.95 per KM</span>
                                <span class="card-detail-badge">With A/C</span>
                            </div>
                            {/* <br></br>
                                <button type="button" class="btn btn-danger">Select</button> */}
                            <div class="card-body text-center">
                                <a class="ad-btn" href="#">View</a>
                            </div>
                        </div>
                    </div>

        </div>
        </div>
        </div>








    );
};

export default taxihome;