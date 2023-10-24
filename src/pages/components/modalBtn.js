import React, { useState } from "react";
import Modal from "./modal";

const ModalBtn = () => {
  const [modalActive, setModalActive] = useState();

  return (
    <>
      <button
        className="bg-blue-500 py-1 px-3 font-bold text-sm text-white rounded-md"
        onClick={() => setModalActive(true)}
      >
        SEE MORE
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <div>
            <p>
                
            </p>
        </div>
        <div>

        </div>
        <div>

        </div>
      </Modal>
    </>
  );
};

export default ModalBtn;
