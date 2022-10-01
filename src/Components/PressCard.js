import React from "react";

function PressCard({ name, children }) {
  return (
    <div className="w-full h-72 border border-white flex flex-col justify-center items-center text-cente gap-5 py-10 px-5" >
      <p>{children}</p>
      <div />
      <h6>{name}</h6>
    </div>
  );
}

export default PressCard;
