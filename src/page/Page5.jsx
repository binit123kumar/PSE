import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom';
import Director from '../asset/director.jpeg'
function Page5() {


  useEffect(() => {

    // scrolls to the top
    window.scrollTo(0, 0);
  }, []);
  return (

    
    <div> <div  className="container">
    <div className="row justify-content-center align-items-center">
      {/* Vertical navigation bar component */}
      {/* <div className="col-md-2 bg-light border border-secondary p-4" style={{position:'relative' , bottom:'300px'}}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={"./page5"} className="nav-link text-dark">
            ➤Faculty
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"./page4"} className="nav-link text-dark">
            ➤Staff
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div style={{ height:'50vh', widht:'50vw',margin:'auto', marginTop:'50px',backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto text-center " >
        {/* <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Director} alt="Your Image" className="img-fluid" />
        
              <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Prof. (Dr.) Sankar Kumar Bhaumik </h2>
              <hr/>
              <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Asst. Professor</h4> */}
               <p className="mt-4 mx-auto text-left">
               Coming soon


               </p>
        
      </div>
    </div>
  </div></div>
  )
}

export default Page5