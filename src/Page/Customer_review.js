import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'font-awesome/css/font-awesome.min.css'; 
import StarIcon from '@mui/icons-material/Star';

import p1 from '../img/p1.jpg';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';

const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
        1000: { items: 3 },
        768: { items: 2 },
        0: { items: 1 },
    },
};

function Customer_review() {
    return (
        <div className="container-fluid what-say" style={{ paddingBottom: '5rem' }}>
            <div className="container">
                <h2 className="text-center" style={{ color: '#132b43' }}>Our Clients Love Us!</h2>
                <OwlCarousel options={options}>
                    <div className="testimonial">
                        <div className="testimonial-content" style={{ background: '#132b43', padding: '20px', borderRadius: '10px' }}>
                            <div className="testimonial-icon text-center">
                                <i className="fa fa-quote-left text-white fa-2x"></i>
                            </div>
                            <div className="img text-center">
                                <img src={p4} alt="Ayush" style={{ width: '150px', borderRadius: '50%' }} />
                            </div>
                            <h6 className="text-white text-center mt-3">Ayush Chodavadiya</h6>
                            <div className="text-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} className="text-warning" />
                                ))}
                            </div>
                            <p className="description text-white pt-3 text-center">
                                It’s stylish, and functional, and has impressed all my clients. I highly recommend it to anyone looking to elevate their digital presence!
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-content" style={{ background: '#132b43', padding: '20px', borderRadius: '10px' }}>
                            <div className="testimonial-icon text-center">
                                <i className="fa fa-quote-left text-white fa-2x"></i>
                            </div>
                            <div className="img text-center">
                                <img src={p1} alt="Jyotika" style={{ width: '150px', borderRadius: '50%' }} />
                            </div>
                            <h6 className="text-white text-center mt-3">Dr. Jyotika Kapoor</h6>
                            <div className="text-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} className="text-warning" />
                                ))}
                            </div>
                            <p className="description text-white pt-3 text-center">
                                Best Quality product in the NFC barcode standy with unique creative designs. They customize as per our business needs. Thank you!
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-content" style={{ background: '#132b43', padding: '20px', borderRadius: '10px' }}>
                            <div className="testimonial-icon text-center">
                                <i className="fa fa-quote-left text-white fa-2x"></i>
                            </div>
                            <div className="img text-center">
                                <img src={p3} alt="Khushi" style={{ width: '150px', borderRadius: '50%' }} />
                            </div>
                            <h6 className="text-white text-center mt-3">Khushi Patel</h6>
                            <div className="text-center">
                                {[...Array(5)].map((_, index) => (
                                    <StarIcon key={index} className="text-warning" />
                                ))}
                            </div>
                            <p className="description text-white pt-3 text-center">
                                Amazing product and service. Very happy with the product provided by CustomCliQ. Great service and communication with the team.
                            </p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Customer_review;
