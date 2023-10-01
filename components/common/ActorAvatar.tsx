import React from "react";

interface ActorProps {
  name: string;
  imageUrl: string;
}

const ActorAvatar: React.FC<ActorProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2  text-sm text-white/80 lg:text-base ">
      <img
        className="h-28 w-28 rounded-full object-cover transition duration-300 hover:opacity-70"
        src={imageUrl}
        alt=""
      />

      <p className="text-sm lg:text-base">{name}</p>
    </div>
  );
};
export default ActorAvatar;
