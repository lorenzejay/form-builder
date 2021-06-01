import React, { useRef, useState } from "react";

type ModalProps = {
  modalButtonName: string;
  children: React.ReactNode;
};

const Modal = ({ modalButtonName, children }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = (e: React.MouseEvent) => {
    if (ref.current === e.target) {
      setOpenModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="focus:outline-none bg-blue-500 px-5 py-2 text-white"
      >
        {modalButtonName}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black z-10 ${
          openModal ? "block" : "hidden"
        } flex `}
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
        onClick={closeModal}
      >
        <div className={`modalContent  w-full h-full flex items-center justify-center`} ref={ref}>
          <section className="bg-white rounded-md min-w-1/2 h-auto p-5">{children}</section>
        </div>
      </div>
    </>
  );
};

export default Modal;
