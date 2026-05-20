import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Slide9 from '../asset/home_slider_9.png';
import Slide10 from '../asset/home_slider_10.png';
import Slide11 from '../asset/home_slider_11.png';
import Slide13 from '../asset/home_slider_13.png';
import Slide5 from '../asset/home_slider_5.jpg';
import Slide6 from '../asset/home_slider_6.jpg';
import Slide7 from '../asset/home_slider_7.jpg';
import Slide8 from '../asset/home_slider_8.jpg';
import Slide15 from '../asset/home_slider_15.jpg';
import Slide4 from '../asset/home_slider_4.jpg';
import Slide3 from '../asset/home_slider_3.jpg';
import Slide2 from '../asset/home_slider_1.jpg';
import Slide1 from '../asset/home_slider_2.jpg';

const slideImages = [
  { url: Slide9, caption: '' },
  { url: Slide10, caption: '' },
  { url: Slide11, caption: '' },
  { url: Slide13, caption: '' },
  { url: Slide5, caption: '' },
  { url: Slide6, caption: '' },
  { url: Slide7, caption: '' },
  { url: Slide8, caption: '' },
  { url: Slide15, caption: '' },
  { url: Slide4, caption: '' },
  { url: Slide9, caption: '' },
  { url: Slide1, caption: '' },
  { url: Slide2, caption: '' },
  { url: Slide3, caption: '' },
];

function ImageSlider() {
  return (
    <div
      className="container"
      style={{ width: '700px', marginBottom: '10px' }}
    >
      <div className="row">
        <div className="col">

          <Slide
            arrows={true}
            dots={true}
            autoplay={true}
            duration={3000}           
            transitionDuration={500}
            infinite={true}
            pauseOnHover={false}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index} className="text-center">
                <img
                  src={slideImage.url}
                  alt={slideImage.caption}
                  className="img-fluid"
                  style={{
                    width: '900px',
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />

                {slideImage.caption && (
                  <span className="slide-caption">
                    {slideImage.caption}
                  </span>
                )}
              </div>
            ))}
          </Slide>

        </div>
      </div>
    </div>
  );
}

export default ImageSlider;