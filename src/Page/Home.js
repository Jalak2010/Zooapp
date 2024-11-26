import React from 'react';
import Nav from './Nav';
import NavSlide from './NavSlide';
import About from './About';
import Detail from './Detail';
import Service from './Service';
import Contact from './Contact';
import Gallery from './Gallery';

import { NavLink } from 'react-router-dom';
import logo from '../img/about.jpg';
import logo1 from '../img/icon/icon-2.png';
import logo2 from '../img/icon/icon-3.png';
import logo3 from '../img/icon/icon-4.png';
import logo4 from '../img/icon/icon-5.png';
import logo5 from '../img/icon/icon-6.png';
import logo6 from '../img/icon/icon-7.png';
import logo7 from '../img/icon/icon-8.png';
import logo8 from '../img/icon/icon-9.png';

import Footer from './Footer';



const Home = () => {
    return (
        <>
            <Nav />
            <NavSlide />
           
            <div className='container pt-5 About pb-5'>
        <div className='row mt-5 gy-4'>
          <div className='col-lg-6 ps-4 pe-5'>
            <p><span style={{ color: '#2EB872' }}> # </span> Welcome To ZooApp</p>
            <h2>Why You Should Visit
              <span style={{ color: '#2EB872' }}> ZooApp </span> Park!
            </h2>
            <p className='aboutp'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
            <h6><i className="fa-solid fa-circle-check about-icon pe-2 mt-1"></i>  Free Car Parking</h6>
            <h6><i className="fa-solid fa-circle-check about-icon pe-2 mt-1"></i>  Natural Environment</h6>
            <h6><i className="fa-solid fa-circle-check about-icon pe-2 mt-1"></i>  Professional Guide & Security</h6>
            <h6 className='pb-4'><i className="fa-solid fa-circle-check about-icon pe-2 mt-1"></i>  World Best Animals
            </h6>

            <button type="button" style={{ backgroundColor: '#2EB872', fontSize: '15px' }} class="btn btn-lg ps-5 pe-5 p-3"><NavLink style={{textDecoration:'none',color:'white'}} to="/about">Read More</NavLink> </button>
            
          </div>

          <div className='col-lg-6 position'>
            <div className='relative'>
                  <img src={logo} alt='image' className='img-fluid'></img>
            </div>

          </div>
        </div>

      </div>
            <Detail />
            
            <div className='container pt-5 pb-5 Services'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <p className='ps-2'><span style={{ color: '#2EB872' }}> # </span> Our Services</p>
                        <h2>Special Services For
                            <span style={{ color: '#2EB872' }}> ZooApp </span> Visitors
                        </h2>
                    </div>

                    <div className='col-lg-6' style={{ backgroundColor: '#2EB872' }}>
                        <div className='d-flex text-white'>
                            <i className="fa-solid fa-mobile-screen-button icon12"></i>
                            <div className='info mt-5'>
                                <p>Call for more info</p>
                                <p style={{ fontWeight: '700', fontSize: '30px' }}>+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container Services2 pt-5'>
                <div className='row'>
                    <div className='col-lg-3 ps-4'>
                        <img src={logo1} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Car Parking</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3 '>
                        <img src={logo2} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Animal Photos</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3 '>
                        <img src={logo3} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Guide Services</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3 '>
                        <img src={logo4} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Food & Beverages</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>
                </div>

                <div className='row pt-5'>
                    <div className='col-lg-3 ps-4'>
                        <img src={logo5} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Zoo Shopping</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3'>
                        <img src={logo6} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Free Hi Speed Wi-Fi</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3'>
                        <img src={logo7} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Play Ground</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>

                    <div className='col-lg-3'>
                        <img src={logo8} className='img-fluid' alt='image'></img>
                        <h5 className='pt-3'>Rest House</h5>
                        <p className='pt-2'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>
                </div>

            </div>


            <div className='container pt-5 mt-3'>
                <div className='AboutContact'>
                    <div className='row g-0 m-4'>
                        <div className='col-lg-6 col-md-6 p-4'>
                            <h2 className=''>Visiting Hours</h2>

                            <div className='row text-white g-0 pt-5'>
                                <div className='col-lg-6 col-md-6 col-sm-6 list'>
                                    <ul>
                                        <li  >Monday</li>
                                        <li >Tuesday</li>
                                        <li >Wednesday</li>
                                        <li >Thursday</li>
                                        <li >Friday</li>
                                        <li >Saturday</li>
                                        <li style={{border:'none'}} >Sunday</li>
                                    </ul>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 list' >
                                    <ul>
                                        <li>9:00AM - 6:00PM</li>
                                        <li>9:00AM - 6:00PM</li>
                                        <li>9:00AM - 6:00PM</li>
                                        <li>9:00AM - 6:00PM</li>
                                        <li>9:00AM - 6:00PM</li>
                                        <li>9:00AM - 6:00PM</li>
                                        <li style={{border:'none'}}>Closed</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6  p-4 '>
                        <h2 className='info'>Contact Info</h2>
                        <div className='row text-white g-0 pt-5'>
                                <div className='col-lg-6 col-md-6 col-sm-6 list'>
                                    <ul>
                                        <li>Office</li>
                                        <li>Zoo</li>
                                        <li style={{paddingBottom:'34px'}}>Ticket</li>
                                        <li style={{border:'none'}} >Support</li>
                                    </ul>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 list'>
                                    <ul>
                                        <li>123 Street, New York, USA</li>
                                        <li>123 Street, New York, USA</li>
                                        <li>+012 345 6789 <br />ticket@example.com</li>
                                        <li style={{border:'none'}}>+012 345 6789<br />support@example.com</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Gallery />
            <br/><br/><br/>
            <Footer />
        </>
    )
}

export default Home