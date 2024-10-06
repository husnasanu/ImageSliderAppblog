import React from 'react'
import img1 from  './assets/img1.jpg'
const LatestBlog = () => {
  return (
    <>
    <h1 className='text-center text-warning my-4'>Latest From the Blog</h1>
    <div className="div ps-5 text-center  w-100">
        <div className="row align-items-center justify-content-between">
            <div className="col-4 ps-5">
            <img className='img-fluid'  width={'300px'} height={'250px'}  src={img1} alt="" />
            <p className='mt-4'>
            Man cannot discover new oceans unless he has the courage to lose sight of the shore.
            </p>
            </div>
            <div className="col-4 ps-5">
            <img  className='img-fluid' width={'300px'} height={'250px'} src="https://the-shooting-star.com/wp-content/uploads/2024/09/img_9336-1-300x225.jpg" alt="" />
           <p className='mt-4'>I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move</p>
            </div>
            <div className="col-4 ps-5">
                <img className='img-fluid'  width={'300px'} height={'250px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nN704mUWF8WkDNVV5XuTJHf_FutXvX1odA&s" alt="" />
                <p className='mt-4'>The most beautiful in the world is, of course, the world itself.</p>
            </div>
        </div>
        <p>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek 
            them with our eyes open.” </p>
    </div>
    </>
  )
}

export default LatestBlog