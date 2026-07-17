import React from "react";

type SkeletonProps = {
  className: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`glass animate-pulse ${className}`}
    ></div>
  );
};
export default Skeleton;
