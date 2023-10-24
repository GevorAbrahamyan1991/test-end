import React from "react";

const Modal = ({ active, setActive, children }) => {
  return (
    <>
      <div
        className={
          active
            ? "w-[100vw] h-[100vh] bg-gray-900 scale-100 bg-opacity-50 fixed top-0 left-0 flex items-center justify-center transition-all duration-300"
            : "w-[100vw] h-[100vh] bg-gray-900 opacity-0 pointer-events-none bg-opacity-50 fixed top-0 left-0 flex items-center justify-center transition-all duration-300"
        }
        onClick={() => setActive(false)}
      >
        <div
          className={
            active
              ? "p-5 rounded-xl bg-white w-[50vw] scale-100 transition-all duration-500"
              : "p-5 rounded-xl bg-white w-[50vw] scale-50 transition-all duration-500"
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
