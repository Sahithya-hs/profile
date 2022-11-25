import React from 'react'
import image1 from "../images/image1.jpg";

const Memprofile = () => {
    return (
        <>
        <div className="container emp-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img src={image1} alt="image" />
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Sahithya</h5>
                            <h6>Bio</h6>
                            <p className='profile-rating mt-3 mb-5'>description</p>

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>
                            </ul>


                        </div>

                    </div>
                </div>
            </form>

        </div>
        
        </>
    )
}

export default Memprofile