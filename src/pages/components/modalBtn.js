import React, { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

const ModalBtn = ({ data }) => {
  const [modalActive, setModalActive] = useState();

  return (
    <>
      <button
        className="bg-blue-500 py-1 px-3 font-bold text-sm text-white rounded-md"
        onClick={() => setModalActive(true)}
      >
        DETAILS
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="space-y-5">
          <div>
            <p>
              <span className="font-bold">Name:</span> {data.first_name}
            </p>
            <p>
              <span className="font-bold">Last Name:</span> {data.last_name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {data.email}
            </p>
          </div>
          <div>
            <Link to={`about/${data.id}`}>
              <button className="px-5 py-2 rounded-lg bg-blue-500 text-white font-bold">
                SEE MORE DETAILS
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBtn;
