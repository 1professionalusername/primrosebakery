import React from "react";
import cupcake from "../images/cupcake.png";



const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation(); //allows you to click off the modal to close
        }}
        className="modalContainer"
      >
        <img src={cupcake} className='modalImg' alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1 className="modalTitle">Descriptive Title</h1>
            <p className="modalCopy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
              tincidunt tortor aliquam nulla facilisi cras fermentum. Augue ut
              lectus arcu bibendum at varius vel. Vulputate ut pharetra sit amet
              aliquam.
            </p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="addButton">Add to Cart</span>
            </button>
            {/* <Counter /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;





// const Modal = ({ open, onClose }) => {
//   if (!open) return null;

//   return (
//     <div onClick={onClose} className="overlay">
//       <div
//         onClick={(e) => {
//           e.stopPropagation(); //allows you to click off the modal to close
//         }}
//         className="modalContainer"
//       >
//         <img src={cupcake} alt="/" />
//         <div className="modalRight">
//           <p className="closeBtn" onClick={onClose}>
//             X
//           </p>
//           <div className="content">
//             <h1 className="modalTitle">Descriptive Title</h1>
//             <p className="modalCopy">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
//               tincidunt tortor aliquam nulla facilisi cras fermentum. Augue ut
//               lectus arcu bibendum at varius vel. Vulputate ut pharetra sit amet
//               aliquam.
//             </p>
//           </div>
//           <div className="btnContainer">
//             <button className="btnPrimary">
//               <span className="addButton">Add to Cart</span>
//             </button>
//             <Counter />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
