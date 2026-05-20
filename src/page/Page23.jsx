import React from 'react';
import Image1 from '../asset/advisoryCommittee/asha.jpg';
import Image2 from '../asset/advisoryCommittee/ajit.jpg';
import Image3 from '../asset/advisoryCommittee/kalpana.jpg';
import Image4 from '../asset/advisoryCommittee/ashmita.jpg';
import Image5 from '../asset/advisoryCommittee/krishnan.jpg';
import Image6 from '../asset/advisoryCommittee/kumudani.jpg';
import Image7 from '../asset/advisoryCommittee/nalin.jpg';
import Image8 from '../asset/advisoryCommittee/ramesh.jpg';
import Image9 from '../asset/advisoryCommittee/santosh.jpg';
import Image10 from '../asset/advisoryCommittee/surya.jpg';


const Page23 = () => {
  const contentData = [
    {
      imageUrl: Image4,
      name: "Dr. Ashmita Gupta",
      title: "Member Secretary",
      email: "asmita805@gmail.com",
      college: "Asian Development Research Institute, Patna",
      phone: 8130823118
    },
    {
      imageUrl: Image2,
      name: "Dr. Ajit Kumar Sinha",
      title: "Director",
      email: "ajit.sinha@thapar.edu",
      college: "Asian Development Research Institute, Patna",
      phone: 9880545813
    },
    {
      imageUrl: Image8,
      name: "Prof. Ramesh Sharan",
      title: "Former Vice-Chancellor & HoD",
      email: "rsharan58@gmail.com",
      college: "Ranchi University, Ranchi",
      phone: 9431325536
    },
    {
      imageUrl: Image1,
      name: "Prof. Asha Singh",
      title: "Retired Professor, Former Head and Dean, PG Dept. of Economics",
      email: "sksasha@gmail.com",
      college: "Patna University, Patna",
      phone: 9431999116
    },
    {
      imageUrl: Image6,
      name: "Prof. Kumudani Sinha",
      title: "Retd. HoD",
      email: "kumudanisinha09@gmail.com",
      college: "Patna University, Patna",
      phone: 9430509690
    },
    {
      imageUrl: Image5,
      name: "Prof. Krishnan Chalil",
      title: "Professor & Head, Dept. of Economic Studies & Policy & Dept. of Development Studies",
      email: "krishnan@cusb.ac.in",
      college: "Central University of South Bihar, Gaya",
      phone: 9946571799
    },
    {
      imageUrl: Image9,
      name: "Dr. Santosh Kumar Sinha",
      title: "Executive Director, Investment Promotion- BIADA, Dept. of Industries",
      email: "sinha.rmn@gmail.com",
      college: "Govt. of Bihar",
      phone: 9334155228
    },
    {
      imageUrl: Image7,
      name: "Prof. Nalin Bharti",
      title: "Professor",
      email: "nalinbharti@iitp.ac.in, nalinbharti@gmail.com",
      college: "Indian Institute of Technology, Patna",
      phone: 9631624705
    },
    {
      imageUrl: Image10,
      name: "Prof. Surya Bhushan",
      title: "Professor",
      email: "sbhushan@dmi.ac.in, suryabhushan@gmail.com",
      college: "Development Management Institute, Patna",
      phone: 9717213139
    },
    {
      imageUrl: Image3,
      name: "Dr. Kalpana Kumari",
      title: "Assistant Professor",
      email: "kalpanakumari@sxcpatna.edu.in",
      college: "St. Xavier’s College of Management & Technology, Patna",
      phone: 9931368687
    }
  ];
  

  return (
    <>
    <div style={{margin:'50px'}}>
   
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="col-md-12 text-center">
              <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Academic Advisory Committee</h2>
            </div>
            
            {/* Mapping through contentData to render each item */}
            {contentData.map((content, index) => (
              <div key={index} className="d-flex align-items-center" style={{ border: '1px solid black', margin: '13px' }}>
                <img src={content.imageUrl} alt="Your Image" style={{ width: '150px', height: '200px', marginRight: '20px',border:'1px solid grey' }} />
                {/* Right side with heading and paragraphs */}
                <div style={{ textAlign: 'left' }}>
                  <h5>{content.name}</h5>
                  <p>{content.title} <br></br>
                  {content.college}<br></br>
                  Email : {content.email} <br></br>
                  Phone: {content.phone} <br></br>
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

export default Page23;
