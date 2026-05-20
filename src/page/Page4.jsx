import React from 'react'
import Neha_Kumari from '../asset/Staff1.jpg'

import { NavLink } from 'react-router-dom';
function Page4() {
  return (
    <div> <div  className="container">
    <div className="row justify-content-center align-items-center">
      {/* Vertical navigation bar component */}
      {/* <div className="col-md-2 bg-light border border-secondary p-4">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={"./Page5"} className="nav-link text-dark">
            ➤Faculty
            </NavLink >
          </li>
          <li className="nav-item">
            <NavLink to={"./Page4"} className="nav-link text-dark">
            ➤Staff
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' , marginTop:'100px'}} className="col-md-9 p-4 mx-auto text-center ">
        
      <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h2>PSE Staff</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-3 text-center">
        <div className="imgg" style={{width:'500', height:'400', objectFit:'cover',marginBottom:'10px', marginTop:'50px'}} >
        <img src={Neha_Kumari} alt="Staff 1" className="img-fluid rounded border p-3"  /></div>
      {/* <p> 
      <span style={{fontWeight:'bold'}}>Name : Neha Kumari<br></br></span>
Qualification : B.Com (Accounts Hons.)<br></br>
Designation : Assistant<br></br>
Centre : Patliputra School of Economics<br></br>
Email : nehasinha0326@gmail.com<br></br>

</p> */}

<p>
<span style={{fontWeight:'bold'}}>Neha Kumari<br></br></span>
B.Com (Accounts Hons.)<br></br>
Assistant<br></br>
Patliputra School of Economics<br></br>
nehasinha0326@gmail.com<br></br>
</p>
      </div>

      {/* <div className="col-md-3 text-center">
        <img src='' alt="Staff 2" className="img-fluid rounded border p-3" />
        <p>Ashish Kumar<br></br>
        Support Staff<br></br>
        9693831206<br></br>
</p>
      </div>
      <div className="col-md-3 text-center">
        <img src='' alt="Staff 3" className="img-fluid rounded border p-3" />
        <p> Varun Kumar<br></br>
        Housekeeping Staff<br></br>
        9693831206<br></br>
</p>
      </div>
       */}

    </div>
      </div>
    </div>
  </div></div>
  )
}

export default Page4