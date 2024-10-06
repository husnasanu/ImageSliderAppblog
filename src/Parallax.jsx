import React from 'react';
import imgparallax1 from './assets/pimg2.png'

const Parallax = () => {
  return (
   <>
    <div className="parallax w-100">
      <div className="parallax-content">
        <h1>Welcome to My Travel Blog</h1>
        <p>Explore the world with me</p> 
      </div>
    </div>
    <div className="row ps-3  w-100">
        <h1  style={{fontFamily: '"Satisfy", "cursive" '}} className='text-center text-warning mt-3'>
        <i class="fa-solid fa-earth-americas"></i>
           <span className='ms-3'>  My FIrst Solo  TRip</span> </h1>
        <div style={{fontFamily: '"Qwitcher Grypen", "cursive" '}} className="col-6  bg-light text-dark ">
            <h1 className='ps-5 text-danger fw-bolder'>Thoughts.. <i class="fa-solid fa-feather-pointed"></i></h1>
            <h3>For 7 years, I travelled the world without a home and lived out of two bags.
             Along the way, I left little pieces of myself behind – everywhere I went and in everyone I met. <span id='display3'> For over a decade, I’ve been telling stories at the intersection of travel, the environment and local
             communities. This journey has taken me as far within as with my feet.</span>
             </h3> <br />
              <h2 id='display2'>I learnt that travel – if done right – has the potential to enable climate action, conserve biodiversity,
                 preserve Indigenous ways of life, and transform us within.low-carbon, community-based tourism experiences – that allow us 
                 to immerse deeper in the places we visit. </h2>
        </div>
        <div className="col-6 ">
            <img  className='w-100 ' height={'400px'} src= {imgparallax1} alt="" />
        </div>
    </div>
    <div className="parallax1  w-100">
      <div className="parallax-content">
        <h1>Traveling – it leaves you speechless.</h1>
        <p>Explore the world with  <span className='text-center text-danger fw-bolder'>@travelbyzera</span> </p> 
      </div>
    </div>
   </>
    
  );
};

export default Parallax;
