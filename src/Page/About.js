import React from 'react';
import logo from '../img/about.jpg';
import Nav from './Nav';
import Gallery from './Gallery';
import Footer from './Footer';

import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
    <Nav />

    <div className="background-section">
            <div className="overlay">
                <div className="content">
                    <h1 className='fw-bold text-white'>About Us</h1>
                </div>
            </div>
        </div>



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

    <Gallery /> <br/><br/><br/>
 

      <Footer />
    </>
  )
}

export default About