import React from 'react';
import logo1 from '../img/icon/icon-2.png';
import logo2 from '../img/icon/icon-3.png';
import logo3 from '../img/icon/icon-4.png';
import logo4 from '../img/icon/icon-5.png';
import logo5 from '../img/icon/icon-6.png';
import logo6 from '../img/icon/icon-7.png';
import logo7 from '../img/icon/icon-8.png';
import logo8 from '../img/icon/icon-9.png';

import Nav from './Nav';
import Footer from './Footer';
const Service = () => {
    return (
        <>

            <Nav />

            <div className="background-section mb-5">
                <div className="overlay">
                    <div className="content">
                        <h1 className='fw-bold text-white'>Services</h1>
                    </div>
                </div>
            </div>


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

            <br/><br/><br/>

            <Footer />
        </>
    )
}

export default Service