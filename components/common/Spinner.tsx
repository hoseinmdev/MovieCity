import createConditionalClass from "@/utils/createConditionalClass";
import React from "react";

interface SpinnerProps {
  type?: "primary" | "secondary";
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ type = "primary", className }) => {
  return (
    <div
      className={createConditionalClass(
        "min-h-[1rem] min-w-[1rem] animate-spin rounded-full border-4 border-solid border-t-transparent",
        {
          "border-blue1": type === "primary",
          "border-yellow1": type === "secondary",
          [className as string]: Boolean(className),
        }
      )}
    ></div>
  );
};
export default Spinner;
