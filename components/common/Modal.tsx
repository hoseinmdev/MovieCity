import React, { ReactElement } from "react";

type ModalProps = {
  children: ReactElement;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="glass-strong fadeShow fixed left-0 right-0 top-[7.6rem] z-[1000] ml-auto mr-auto h-[86vh] w-[95%] rounded-2xl text-white shadow-2xl lg:top-[8.5rem] lg:w-full">
      {children}
    </div>
  );
};
export default Modal;
