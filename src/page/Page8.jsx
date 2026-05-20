import React from 'react';
import Image1 from '../asset/page_8_1.jpeg';
import Image2 from '../asset/page_8_2.jpeg';
import Image3 from '../asset/page_8_3.jpeg';
import Image4 from '../asset/page_8_4.jpeg';
import Image5 from '../asset/page_8_5.jpeg';
import Image6 from '../asset/page_8_6.jpg';

function Page8() {
  return (
    <div style={{ margin: '50px' }}>
     
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2>SOME MOMENTS</h2>
              </div>
            </div>
            <div className="row justify-content-around">
              {/* Adjust image size and display */}
              <div className="col-md-4 text-center mb-3">
                <img src={Image1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image2} alt="Staff 2" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image3} alt="Staff 3" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image4} alt="Staff 4" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image5} alt="Staff 5" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image6} alt="Staff 6" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
  