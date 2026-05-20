import React from 'react'
import Image1 from '../asset/Student activities/students (1).jpeg'
import Image2 from '../asset/Student activities/students (2).jpeg'
import Image3 from '../asset/Student activities/students (3).jpeg'
import Image4 from '../asset/Student activities/students (4).jpeg'
import Image5 from '../asset/Student activities/students (5).jpeg'

function Page22() {
  return (
    <div style={{ margin: '50px' }}>
     
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Student Activities</h2>
            </div>
          </div>
          <div className="row justify-content-around">
            {/* Adjust image size and display */}
            <div className="col-md-4 text-center mb-3">
              <img src={Image1} alt="Image1" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' , height: '210px'}} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image2} alt="Image2" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' ,width:'500px'}} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image3} alt="Image 3" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image4} alt="Image4" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' , height: '210px',marginRight:'-100px'}} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image5} alt="Image5" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%' , height: '210px', marginLeft:'-100px'}} />
            </div>
          

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page22