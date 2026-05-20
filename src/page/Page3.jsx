import React from 'react'

import myImage from '../asset/img2.jpeg';

function Page3() {
  return (
    <div> <div className="mu-latest-course-single" style={{margin: '50px'}}>
    {/* <figure className="mu-latest-course-img">
      <a href="#" style={{width: '100%',display: 'flex' , justifyContent: 'center'}}><img src={myImage} alt="img" style={{width: '50%' , boxShadow: ' 0 0 25px black' , borderRadius: '10px'}}/></a>
    </figure> */}

    <div className="mu-latest-course-single-content">
      <h2 style={{textAlign: 'center', borderBottom: '1px solid black'}}><a href="#" style={{color: 'black' , textDecoration: 'none'}}>About PSE</a></h2>
      <br />
      <p className="text-justify">The objective of PSE is to generate, disseminate, and preserve knowledge and to bring this knowledge to solve the World’s great challenges. The PSE seeks to provide its students an education and academic training that would be as rigorous as practiced in the best Institutions in India and abroad.

The PSE undertakes and facilitates research and teaching of highest possible order, consultancy, and capacity development in the fields of economics and economic policy making. It also provides expert advice as a think tank at the National and State levels, and looks for collaborations with other academic and research Institutions, both domestic and foreign.

For in-depth and focused research in diverse fields of economics and its allied subjects, the PSE aims to gradually develop into a multi-Centre institution. It may proceed towards obtaining University status after opening of multiple Centres.</p>

     </div>
  </div></div>
  )
}

export default Page3