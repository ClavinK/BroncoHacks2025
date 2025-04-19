// import React from "react";
// import "./Popup.css";

// const Popup = ({ spawnTimer, onClose }) => {
//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-popup" onClick={onClose}>
//           x
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
import React, { useState } from "react";
import "./Popup.css";

export default function Popup() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>Hot milfs near you!!</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>Hot milfs in your area!</p>
    </>
  );
}
