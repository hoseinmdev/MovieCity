import React from "react";

interface ActorProps {
  name: string;
  imageUrl: string;
}

const ActorAvatar: React.FC<ActorProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2  text-center text-sm text-white/80 lg:text-base ">
      <img
        className="h-28 w-28 rounded-full object-cover transition duration-300 hover:opacity-70"
        src={imageUrl}
        alt=""
      />

      <p className="text-xs lg:text-base whitespace-nowrap">{name}</p>
    </div>
  );
};
export default ActorAvatar;
