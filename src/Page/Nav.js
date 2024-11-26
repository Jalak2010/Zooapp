import React from 'react';
import logo from '../img/icon/icon-10.png';

import { NavLink } from 'react-router-dom';



const Nav = () => {
    return (
        <>
        <div className='header'>
             <div className='container-fluid header'>
                <div className='d-flex px-4'>
                    <i className="fa-solid fa-location-dot icon"></i>
                    <p className="d-flex ps-2">123 Street, New York, USA</p>


                    <div className='d-flex px-4'>
                        <i class="fa-solid fa-clock icon"></i>
                        <p className="d-flex ps-2">Mon - Fri : 09.00 AM - 09.00 PM</p>
                    </div>

                    <div className='d-flex px-4 ms-auto'>
                        <i class="fa-solid fa-phone icon"></i>
                        <p className="d-flex ps-2">+012 345 6789</p>
                    </div>

                    <div className='d-flex main ms-2'>
                        <div className='about'>
                            <i class="fa-brands fa-facebook-f icon1"></i>
                        </div>
                    </div>
                    <div className='d-flex main ms-1'>
                        <div className='about'>
                            <i class="fa-brands fa-twitter icon1"></i>
                        </div>
                    </div>
                    <div className='d-flex main ms-1'>
                        <div className='about'>
                            <i class="fa-brands fa-linkedin-in icon1"></i>
                        </div>
                    </div>
                    <div className='d-flex main ms-1'>
                        <div className='about'>
                            <i class="fa-brands fa-instagram icon1"></i>
                        </div>
                    </div>
                </div>
            </div> 
            </div>




            <nav class="navbar navbar-expand-lg navbar-light px-5">
                <div class="container-fluid">
                    <img src={logo} alt="image" width={50} className="image-fluid"></img>
                    <a class="navbar-brand ps-3" style={{color:"#2EB872",fontSize:"32px",letterSpacing:"1px",fontWeight:"bold"}} href="#">ZooApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 ms-auto mb-lg-0">
                            <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            
                            <li className="nav-item px-2">
                            <NavLink className="nav-link text-black"  to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item px-2">
                            <NavLink className="nav-link text-black"  to="/services">SERVICES</NavLink>
                            </li>
                            
                            <li className="nav-item px-2">
                            <NavLink className="nav-link text-black"  to="/contact">CONTACT</NavLink>
                            </li>   
                        </ul>
                        <form className="d-flex px-2">
                            <button className="btn text-white "  style={{background:"#2EB872"}} type="submit">Buy Ticket  <i class="fa-solid fa-arrow-right icon2"></i></button>
                        </form>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav


