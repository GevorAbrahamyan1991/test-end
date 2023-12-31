import React, { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

const ModalBtn = ({ data, columnsModal }) => {
  const [modalActive, setModalActive] = useState();

  const renderData = () => {
    if (!data) {
      return <p>No data available</p>;
    }

    return columnsModal.map((column, index) => (
      <div key={index}>
        <p className="font-bold">{column.label}:</p>
        <p>{data[column.key]}</p>
      </div>
    ));
  };
  return (
    <>
      <button
        className="px-3 py-1 text-sm font-bold text-white bg-blue-500 rounded-md"
        onClick={() => setModalActive(true)}
      >
        DETAILS
      </button>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="">
          <div className="flex py-5 justify-evenly">
            {/* <div>
              <p className="font-bold">NAME:</p>
              <p>{data.first_name}</p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p className="font-bold">Last Name:</p>
              <p>{data.last_name}</p>
            </div>*/}
            {renderData()}
          </div>
          <div>
            <Link to={`about/${data.id}`}>
              <button className="px-5 py-2 font-bold text-white bg-blue-500 rounded-lg">
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
