import './App.css';
import Footer from './Footer';
import Parallax from './Parallax';
import { useEffect } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import LatestBlog from './LatestBlog';


function App() {
  useEffect(() => {
    // Get DOM elements
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const sliderDom = document.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    const timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 1000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    // Click event listeners for next and prev buttons
    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      const sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="" style={{fontSize:'15px'}} className='text-danger fst-italic fw-bolder'>  @travelbyzera..</a>
            <a href="">Home</a>
            <a id='display1' href="">About</a>
            <a href="">Destinations</a>
        </nav>
    </header>
      <Parallax/>
    {/* <!-- carousel --> */}
    <div className="carousel">
        {/* <!-- list item --> */}
        <div className="list">
            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="author">Zera Zany</div>
                    <div className="title">PHILIPPINES</div>
                    <div className="topic">Travel Blog by Zera</div>
                    <div className="des">
                        {/* <!-- lorem 50 --> */}
                        The world is a book and those who do not travel read only one page.” – Augustine of Hippo <br />
                        <button className='btn btn-danger my-3'>VIEW MORE</button>
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="author">Zera Zany</div>
                    <div className="title">United state</div>
                    <div className="topic">Travel Blog by Zera</div>
                    <div className="des">
                        {/* <!-- lorem 50 --> */}
                        The world is a book and those who do not travel read only one page.” – Augustine of Hippo <br />
                        <button className='btn btn-danger my-3'>VIEW MORE</button>
                     </div>
                    
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="author">Zera Zany</div>
                    <div className="title">Arab Unites Emarites</div>
                    <div className="topic">Travel Blog by Zera</div>
                    <div className="des">
                        {/* <!-- lorem 50 --> */}
                        The world is a book and those who do not travel read only one page.” – Augustine of Hippo <br />
                        <button className='btn btn-danger my-3'>VIEW MORE</button>
                     </div>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="author">Zera Zany</div>
                    <div className="title">Indonesia</div>
                    <div className="topic">Travel Blog by Zera</div>
                    <div className="about">
                    The world is a book and those who do not travel read only one page.” – Augustine of Hippo <br />
                        <button className='btn btn-danger my-3'>VIEW MORE</button>
                    </div>
                  
                </div>
            </div>
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail">
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="title">
                       INDONESIA
                    </div>
                    <div className="description">
                       ENJOY THE BEAUTY
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="title">
                        UNITED STATES
                    </div>
                    <div className="description">
                        EXPLORE NOW
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="title">
                         PHILIPPNES
                    </div>
                    <div className="description">
                        ENJOY THE BEAUTY
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="title">
                    ARAB EMARITES
                    </div>
                    <div className="description">
                        EXPLORE NOW
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows">
            <button id="prev"><i className="fa-solid fa-arrow-left"></i></button>
            <button id="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        {/* <!-- time running --> */}
        <div className="time"></div>
    </div>
    <LatestBlog/>
    <Footer/>
    </>
  );
}

export default App;
