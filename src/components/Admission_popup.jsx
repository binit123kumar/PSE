import React, { useState, useEffect, useRef } from 'react';
import './ad_popup.css'; // Import the CSS for styling
import Image from '../asset/admission_popup.jpeg'


const Admission_popup = ({ onClose}) => {
    const adRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (adRef.current && !adRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
  
    return (
      <div className="ad-overlay">
        <div className="ad-container" ref={adRef}>
          <button className="ad-close" onClick={onClose}>×</button>
          <img src={Image} alt="Advertisement" className="ad-image" />
          <div className="button_container">
          <a href="https://adms.akubihar.ac.in/" target='_blank' class="square-button">Click for Details</a>
          </div>
        </div>
      </div>
    );
}

export default Admission_popup

