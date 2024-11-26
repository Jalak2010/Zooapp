import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import EmailIcon from '@mui/icons-material/Email';

import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Contact = () => {
    return (
        <>

<Nav />

<div className='container-fluid main_contact'>
<div className="background-section mb-5">
                <div className="overlay">
                    <div className="content">
                        <h1 className='fw-bold text-white'>Contact Us</h1>
                    </div>
                </div>
            </div>
                <div className='container' style={{ paddingBottom: '8rem' }} >
                    

                    <div className='row mt-5'>

                        <div className='col-lg-3 col-md-6 col-sm-12 pt-4 ' >
                            <div className="card shadow-lg text-center about_contact1 "  >
                                <div className="card-body text-white">
                                    <AddIcCallSharpIcon className='logo_contact' />

                                    <h6 style={{ fontSize: "21px" }} >Call Us</h6>

                                    <p style={{ fontSize: '17px', paddingBottom: '18px' }} >+012 345 6789</p>

                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 col-sm-12  pt-4' >
                            <div className="card shadow-lg text-center about_contact1" style={{ borderRadius: '18px' }}>
                                <div className="card-body text-white">

                                    <EmailIcon className='logo_contact' />

                                    <h6 style={{ fontSize: "21px" }} >Email Us</h6>

                                    <p style={{ fontSize: '17px', paddingBottom: '18px' }} >info@example.com</p>

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12  pt-4' >
                            <div className="card shadow-lg text-center about_contact1" style={{ borderRadius: '18px' }}>
                                <div className="card-body text-white">

                                    <WhatsAppIcon className='logo_contact' />

                                    <h6 style={{ fontSize: "21px" }} >WhatsApp</h6>

                                    <p style={{ fontSize: '17px', paddingBottom: '18px' }} >+012 345 6789</p>

                                </div>
                            </div>
                        </div>


                        <div className='col-lg-3 col-md-6 col-sm-12  pt-4'>
                            <div className="card shadow-lg text-center about_contact1" style={{ borderRadius: '18px' }}>
                                <div className="card-body text-white">

                                    <FmdGoodIcon className='logo_contact' />

                                    <h6 style={{ fontSize: "21px" }} >Address</h6>

                                    <p style={{ fontSize: '17px',paddingBottom: '18px' }} > New York, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* map information*/}

                    <div className="map_info " style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginTop: '5rem' }}  >

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0613195300625!2d72.89705647508659!3d21.22941688047066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0459e5a292ebb%3A0x67b67b7f5796cd51!2sCustomCliQ%20%7C%20Smart%20NFC%20Card%20%26%20QR%20Technology!5e0!3m2!1sen!2sin!4v1726644536556!5m2!1sen!2sin" width="100%"
                            height="550"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"  ></iframe> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13873.614848096046!2d-88.05822629247861!3d43.02947411469607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880505105ad5dbe3%3A0xe058f8c5f944b06!2sZoo%2C%20Milwaukee%2C%20WI%2C%20USA!5e0!3m2!1sen!2sin!4v1732615030518!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" ></iframe>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact