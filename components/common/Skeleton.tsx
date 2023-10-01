import React from "react";

type SkeletonProps = {
  className: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-neutral-700/80 ${className}`}
    ></div>
  );
};
export default Skeleton;
