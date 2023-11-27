import React, { ReactElement } from "react";

type ModalProps = {
  children: ReactElement;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute  left-0 right-0 lg:top-[8.5rem] top-[7.6rem] z-[1000] ml-auto mr-auto h-[86vh] w-[95%] lg:w-full rounded-lg bg-black/70 text-white backdrop-blur-sm fadeShow">
      {children}
    </div>
  );
};
export default Modal;
