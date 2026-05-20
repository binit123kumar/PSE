import React, { useState } from 'react';
import Image1 from '../asset/Media_center (1).jpeg'
import Image2 from '../asset/Media_center (2).jpeg'
import Image3 from '../asset/Media_center (3).jpeg'
import Image4 from '../asset/Media_center (4).jpeg'
import Image5 from '../asset/Media_center (5).jpeg'
import Image6 from '../asset/Media_center (6).jpeg'
import Image7 from '../asset/media center/Induction/image (1).jpeg'
import Image8 from '../asset/media center/Induction/image (2).jpeg'
import './Page24.css';

function Page24() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (src) => {
    setModalImage(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
   
    <div className='slidecontainer' style={{ margin: '40px' }}>
      
     <h2 style={{fontWeight:'bold'}}>Media Center</h2>
     
     <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="rectangle" style={{ width: '150px', height: '50px', backgroundColor: '#780000', overflow: 'hidden', color: 'white', fontSize: '35px', textAlign: 'left',paddingLeft:'25px',paddingBottom:'18px' }}>2024</div>
      <div className="triangle" style={{ width: 0, height: 0, borderTop: '50px solid transparent', borderLeft: '50px solid #780000' ,paddingBottom:'1px'}}></div>
    </div>
     
     <div className="autoslider">
      <div className="slide-track">

      <div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image7} alt="Image 1" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image8} alt="Image 1" />
</div>
       
      <div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image 1" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image 2" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image 3" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image 4" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image 5" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image 6" />
</div>


<div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image7} alt="Image 1" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image8} alt="Image 1" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image1)}>
  <img src={Image1} alt="Image 1" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image2)}>
  <img src={Image2} alt="Image 2" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image3)}>
  <img src={Image3} alt="Image 3" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image4)}>
  <img src={Image4} alt="Image 4" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image5)}>
  <img src={Image5} alt="Image 5" />
</div>
<div className="aslide" onClick={() => handleImageClick(Image6)}>
  <img src={Image6} alt="Image 6" />
</div>

        {/* Add more aslides here */}
      </div>
    </div>
            
   {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page24;