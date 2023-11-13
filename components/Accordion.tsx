import { title } from "process";
import React, { ReactNode, useState } from "react";
import { AiFillCaretDown, AiOutlineUp } from "react-icons/ai";
type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full bg-stone-950 p-4 rounded-xl  transition-all  ${
        open && "outline outline-red-500"
      }`}
    >
      <div
        className="text-xl lg:text-2xl w-full flex justify-between items-center lg:cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <p className={`${open && "text-red-400"}`}>{title}</p>
        <div
          className={`${
            !open ? "rotate-180 " : "text-red-600"
          } transition duration-300`}
        >
          <AiFillCaretDown />
        </div>
      </div>

      <div
        className={`w-full overflow-hidden max-h-0 transition-all duration-300 ${
          open ? "max-h-96 overflow-auto pt-4" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default Accordion;
