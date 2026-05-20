import React from 'react'
import Director from '../asset/director.jpeg'

function Page9() {
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
      <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto text-center ">
        <img style={{ width: '225px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Director} alt="Your Image" className="img-fluid" />
        
              <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Prof. (Dr.) Sankar Kumar Bhaumik </h2>
              <hr/>
              <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>About The Director</h4>
              <p style={{textAlign:'left'}} >
             <span style={{fontWeight:'bold'}}> Prof. (Dr.) Sankar Kumar Bhaumik </span>is the Director of Patliputra School of Economics. He has vast experience of teaching and research spanning over four decades. Prior to joining the Patliputra School of Economics, he served the Departments of Economics of Calcutta University (22 years), Vidyasagar University (9 years) and Central University of South Bihar (3 and half years). He became Professor & Head of Economics Department of Calcutta University, and Professor & Head of Economics Department and Dean of Social Sciences at the Central University of South Bihar. He also served as Director of the Institute of Development Studies in Jaipur. His fields of specialization are econometrics, economics of agriculture, Indian economic development, and research methodology. Besides teaching these papers to the post-graduate and PhD students, he has done extensive research in the areas of agrarian relations, agricultural development, rural credit, and globalization and employment. His publications include Principles of Econometrics: A Modern Approach Using EViews (Oxford University Press, 2015), Reforming Indian Agriculture: Towards Employment Generation and Poverty Reduction (Sage Publications, 2008), Rural Rate of Interest for Institutional Credit in India (NABARD, 2000) and Tenancy Relations and Agrarian Development: A Study of West Bengal (Sage Publications, 1993). He has to his credit 35 research papers published in refereed journals / edited books. He has so far completed 5 research projects, and supervised 14 PhD theses (all awarded) and 11 MPhil dissertations (all awarded). As per the Google Scholar, he has 302 citations (with h-index 9 and i10-index 9) till date.
      </p>
      <br></br>
      <h4  style={{fontWeight:'bold',textAlign:'left'}}>Email </h4>
      <p style={{textAlign:'left'}}>director.pse.aku@gmail.com<br></br>
sk.bhaumik@gov.in</p>

     
        
      </div>
    </div>
  </div></div>
  )
}

export default Page9