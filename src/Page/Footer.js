import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// import newlogo from '../src/img/new_logo.png'
const Footer = () => {
    return (
        <>
            <div className='container-fluid AboutContact1 main_footer'  >
                <div className='row about_footer text-white'  >

                    
                    <div className='col-lg-4 col-md-6 col-sm-12 first_footer about_footer1'>
                        <h4 className='fw-bold'>ZooApp</h4>
                        {/* <img src={newlogo} alt='heremre' className='img-fluid' style={{width:'100px'}} /> */}
                        {/* <p>We are here to simplify the way you connect with people & potential leads. Our solutions are NFC powered & backed by our smart app. Click here to know more about us.</p> */}
                        <p>Address: 123 Street, New York, USA

                        </p>
                        <h6 style={{ fontSize: '17px',paddingBottom:'1rem',paddingTop:'1rem' }}>Call : +012 345 67890</h6>
                        
                        <h6 style={{ fontSize: '17px' }}>Email : info@example.com</h6>
                       
                    </div>

                    <div className='col-lg-2 col-md-6 col-sm-12 second_footer' style={{ height: '400px', paddingLeft: '1rem' }}>
                        <h4 className='fw-bold' style={{ paddingLeft: '2rem' }}>Quick Links</h4>
                        <ul style={{ paddingTop: '1rem' }}>
                            <li><a href='#'>  About Us   </a></li>
                            <li><a href='#'>  Contact Us   </a></li>
                            <li><a href='#'>  Services   </a></li>
                            <li><a href='#'>  Blogs   </a></li>
                           
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-6 col-sm-12 second_footer ' style={{ height: '400px' }}>
                        <h4 className='fw-bold' style={{ paddingLeft: '2rem' }}> Popular Links </h4>

                        <ul style={{ paddingTop: '1rem' }}>
                            <li><a href='#'>  About Us  </a></li>
                            <li><a href='#'>  Contact Us  </a></li>
                            <li><a href='#'>  Services  </a></li>
                            <li><a href='#'>  Blogs   </a></li>  
                        </ul>
                    </div>



                    

                    <div className='col-lg-3 col-md-6 col-sm-12 second_footer' style={{ height: '400px', paddingLeft: '1rem' }}>
                        <h4 className='fw-bold' style={{ paddingLeft: '2rem' }}>Legal</h4>
                        <ul style={{ paddingTop: '1rem' }}>
                            <li><a href='#'>  Privacy Policy   </a></li>
                            <li><a href='#'>  Cookie Policy   </a></li>
                            <li><a href='#'>  Terms & Conditions  </a></li>
                          
                        </ul>
                    </div>




                    {/* footer last line----------- */}

                    <div class="card-footer text-white text-center mt-4" style={{ background: 'black', lineHeight: '2.50', fontSize: '17px', letterSpacing: '1px' }}>
                       Copyright © ZooApp. All rights reserved
                    </div>
                </div>












            </div>

        </>
    )
}


export default Footer;