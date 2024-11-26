import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/bg-1.jpg';
import img3 from '../img/bg-2.jpg';

import img4 from '../img/carousel-1.jpg'
import img5 from '../img/animal-lg-2.jpg'
import img6 from '../img/animal-md-3.jpg'

import img7 from '../img/bg-2.jpg';
import img8 from '../img/bg-1.jpg'
import img9 from '../img/carousel-2.jpg'
import img10 from '../img/bird.jpg'
import img11 from '../img/img1.jpg'
const Gallery = () => {
  return (
    <>
      <div className='container pt-5 pb-5 Services' style={{marginTop:'4rem'}}>
                <div className='row'>
                    <div className=''>
                        <p className='ps-2'><span style={{ color: '#2EB872' }}> # </span> Our Animals</p>
                        <h2>Let`s See Our 
                            <span style={{ color: '#2EB872' }}> ZooApp </span> Awsome Animals
                        </h2>
                    </div>
                    </div>
                    </div>
      <main class="container_gallery">

        <div class="item-1">
          <img class="img" src={img1} alt="" />
        </div>
        <div class="item-2">
          <img class="img" src={img2} alt="" />
        </div>
        <div class="item-3">
          <img class="img" src={img3} alt="" />
        </div>
        <div class="item-4">
          <img class="img" src={img4} alt="" />
        </div>
        <div class="item-5">
          <img class="img" src={img5} alt="" />
        </div>
        <div class="item-6">
          <img class="img" src={img6} alt="" />
        </div>
        <div class="item-7">
          <img class="img" src={img7} alt="" />
        </div>
        <div class="item-8">
          <img class="img" src={img8} alt="" />
        </div>
        <div class="item-1">
          <img class="img" src={img9} alt="" />
        </div>
        <div class="item-2">
          <img class="img" src={img10} alt="" />
        </div>
        <div class="item-3">
          <img class="img" src={img11} alt="" />
        </div>



      </main>
    </>
  )
}

export default Gallery