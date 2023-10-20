import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full pt-14 relative z-0">
      <div className="w-1/2">
        <div className="car">
          <Image src={"/images/car.png"} height={300} width={300} alt="car" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-neutral-800 bg-opacity-80 rounded-full"></div>
      <div className="absolute bottom-16 right-0 w-1/5 h-1 bg-neutral-800 bg-opacity-80 rounded-full street -z-10"></div>
      <div className="absolute bottom-24 right-6 w-1/3 h-1 bg-neutral-800 bg-opacity-80 rounded-full street -z-10"></div>
      <div className="absolute bottom-10 right-14 w-1/4 h-1 bg-neutral-800 bg-opacity-80 rounded-full street -z-10"></div>
    </div>
  );
};
