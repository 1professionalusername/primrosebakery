import React from "react";
// import cupcake from '../images/cupcake.png';
// import Modal from './Modal';
import beautifulbrowniecompressed from '../images/beautifulbrowniecompressed.jpg';




export default function BrownieCard() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div className="cardbody">
      <div className="cardtext">
        <div className="cardheader">Brownies $8</div>
        <div className="cardcopy">
          Rich, chocolatey, mouth watering brownies. Just like mom used to make.
        </div>
      {/* <div className='modalBtn' onClick={() => setOpenModal(true)}>Modal</div> 
         <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      </div>
      <img src={beautifulbrowniecompressed} alt="brownies" className="cardImage" />
    </div>
  );
}
