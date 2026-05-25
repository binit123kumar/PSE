import React from 'react';
import Image1 from '../asset/Faculty/Dr. Rinky Kumari.jpg';
import Image2 from '../asset/Faculty/Dr. Ashish Kumar.jpg';
import Image3 from '../asset/Faculty/Dr. Reeti.jpg';



const Page5 = () => {
  const contentData = [
  
    {
      imageUrl: Image1,
      name: "Dr. Rinky Kumari",
      title: "Guest Assistant Professor, Patliputra School of Economics",
      email: "rinky.825@gmail.com",
  
    
    },
    {
      imageUrl: Image2,
      name: "Dr. Reeti",
      title: "Guest Assistant Professor, Patliputra School of Economics",
      email: "rytzz01@gmail.com",

    },
    {
      imageUrl: Image3,
      name: "Dr. Ashish Kumar",
      title: "Guest Assistant Professor, Patliputra School of Economics",
      email: "ashishroy274474@gmail.com",
    },
  ];
  

  return (
    <>
    <div style={{margin:'50px'}}>
   
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="col-md-12 text-center">
              <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Guest Faculty</h2>
            </div>
            
            {/* Mapping through contentData to render each item */}
            {contentData.map((content, index) => (
              <div key={index} className="d-flex align-items-center" style={{ border: '1px solid black', margin: '13px' }}>
                <img src={content.imageUrl} alt="Your Image" style={{ width: '150px', height: '200px', marginRight: '20px',border:'1px solid grey' }} />
                {/* Right side with heading and paragraphs */}
                <div style={{ textAlign: 'left' }}>
                  <h5>{content.name}</h5>
                  <p>{content.title} <br></br>
                  Email : {content.email} <br></br>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
