import React from "react";
import beautifulcupcake from '../images/beautifulcupcake.jpg'
// import Modal from './Modal';




export default function CupcakeCard() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div className="cardbody">
      <div className="cardtext">
        <div className="cardheader">Cupcakes $4</div>
        <div className="cardcopy">
          These moist, soft and oh so tasty cupcakes will appeal to even the most discerning palettes.
        </div>
      {/* <div className='modalBtn' onClick={() => setOpenModal(true)}>Modal</div> 
         <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      </div>
      <img src={beautifulcupcake} alt="/" className="cardImage" />
    </div>
  );
}
