import React from 'react';
import { NavLink } from 'react-router-dom';

// Importing all staff images sequentially from the assets folder
import Staff1 from '../asset/Staff1.jpg';

import Staff4 from '../asset/Staff4.jpg';
import Staff5 from '../asset/Staff5.jpg';
import Staff6 from '../asset/Staff6.jpg';
import Staff7 from '../asset/Staff7.jpg';
import Staff8 from '../asset/Staff8.jpg';
import Staff9 from '../asset/Staff9.jpg';
import Staff10 from '../asset/Staff10.jpg';
import Staff11 from '../asset/Staff11.jpg';

function Page4() {
  // Centralized Staff Data Array with mapped images
  const staffList = [
    {
      name: "Neha Kumari",
      qualification: "B.Com (Accounts Hons.)",
      designation: "Assistant",
      dept: "Patliputra School of Economics",
      contact: "nehasinha0326@gmail.com",
      image: Staff1
    },
   
    {
      name: "Amresh Kumar",
      qualification: "",
      designation: "MTSCO",
      dept: "Patliputra School of Economics",
      contact: "amreshku28@gmail.com",
      image: Staff4
    },
    {
      name: "Arvind Kumar",
      qualification: "",
      designation: "MTSCO",
      dept: "Patliputra School of Economics",
      contact: "ak1406292@gmail.com",
      image: Staff5
    },
    {
      name: "Om Prakash Nirala",
      qualification: "",
      designation: "Assistant",
      dept: "Patliputra School of Economics",
      contact: "omprakashnirala999@gmail.com",
      image: Staff6
    },
    {
      name: "Ranjay Kumar",
      qualification: "",
      designation: "Assistant",
      dept: "Patliputra School of Economics",
      contact: "alokkumar02325@gmail.com",
      image: Staff7
    },
    {
      name: "Ashutosh Ranjan",
      qualification: "",
      designation: "System Analyst",
      dept: "Patliputra School of Economics",
      contact: "ashutoshranjan0000@gmail.com", 
      image: Staff8
    },
    {
      name: "Niharika Kumari",
      qualification: "",
      designation: "Assistant",
      dept: "Patliputra School of Economics",
      contact: "niharikashaluk@gmail.com",
      image: Staff9
    },
    {
      name: "Ritesh Ranjan",
      qualification: "",
      designation: "Library Assistant",
      dept: "Patliputra School of Economics",
      contact: "ranjanritesh.1993@gmail.com",
      image: Staff10
    },
    {
      name: "Rakesh Kumar",
      qualification: "",
      designation: "MTSCO",
      dept: "Patliputra School of Economics",
      contact: "rakesh124coool@gmail.com",
      image: Staff11
    }
  ];

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          
          {/* Navigation Bar Sidebar (Uncomment if needed)
          <div className="col-md-2 bg-light border border-secondary p-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to={"../Page5"} className="nav-link text-dark">➤ Faculty</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"../Page4"} className="nav-link text-dark">➤ Staff</NavLink>
              </li>
            </ul>
          </div> 
          */}

          <div 
            style={{ 
              backgroundColor: '#f0f0f0', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
              marginTop: '50px',
              borderRadius: '8px'
            }} 
            className="col-md-9 p-4 mx-auto"
          >
            {/* Page Heading */}
            <div className="text-center mb-4">
              <h2>PSE Staff List</h2>
            </div>

            {/* Vertical List View */}
            <div className="list-group">
              {staffList.map((staff, index) => (
                <div 
                  key={index} 
                  className="list-group-item d-flex align-items-center p-3 mb-2 border rounded bg-white shadow-sm"
                >
                  {/* Profile Image Avatar */}
                  <div className="me-4">
                    <img 
                      src={staff.image} 
                      alt={staff.name} 
                      className="rounded-circle border" 
                      style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback placeholder if an image file doesn't exist in assets folder
                        e.target.src = "https://via.placeholder.com/80?text=PSE";
                      }}
                    />
                  </div>
                  
                  {/* Staff Information */}
                  <div>
                    <h5 className="mb-1" style={{ fontWeight: 'bold', color: '#222' }}>
                      {staff.name}
                    </h5>
                    
                    <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>
                      {staff.qualification && <span className="d-block"><strong>Qualification:</strong> {staff.qualification}</span>}
                      <span className="d-block"><strong>Designation:</strong> {staff.designation}</span>
                      <span className="d-block"><strong>Department:</strong> {staff.dept}</span>
                      <span className="d-block text-primary"><strong>Contact / Email:</strong> {staff.contact}</span>
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Page4;