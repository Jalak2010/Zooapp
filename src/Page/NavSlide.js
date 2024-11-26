import React from 'react';
import logo1 from '../img/carousel-1.jpg';
import logo2 from '../img/carousel-2.jpg';
import logo3 from '../img/carousel-3.jpg'; 

const NavSlide = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row g-0 slider'>
            <div className='col-lg-6 p-0'>
             <div className='bg1'>
                <div className='container app pt-5 px-4'>
                   <h1>Enjoy Wonderful Day </h1>
                   <h1>With Your Family</h1>
                   <div className='btn pt-5'>
                   <button type="button" class="btn btn-lg text-white p-3 ps-5 pe-5 btn1">Read More</button>
                   </div>
                </div>
             </div>
            </div>

            <div className='col-lg-6'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo1} className="img-fluid img-slide" alt='image'></img>
    </div>
    <div class="carousel-item">
    <img src={logo2} className="img-fluid" alt='image img-slide'></img>
    </div>
    <div class="carousel-item">
    <img src={logo3} className="img-fluid" alt='image img-slide'></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavSlide