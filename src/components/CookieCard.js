import React from "react";
// import cupcake from '../images/cupcake.png';
// import Modal from './Modal';
import beautifulcookiecompressed from '../images/beautifulcookiecompressed.jpg';




export default function CookieCard() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div className="cardbody">
      <div className="cardtext">
        <div className="cardheader">Cookies $4</div>
        <div className="cardcopy">
          Deliciously soft and gooey, these melt in your mouth cookies are sure to be a crowd pleaser!
        </div>
      {/* <div className='modalBtn' onClick={() => setOpenModal(true)}>Modal</div> 
         <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      </div>
      <img src={beautifulcookiecompressed} alt="/" className="cardImage" />
    </div>
  );
}
