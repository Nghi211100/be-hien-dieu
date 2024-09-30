import { TITLE } from "@/utils/common";
import React from "react";

export const Header = () => {
  return (
    <div className="text-[40px] md:text-[60px] font-bold text-white pt-5 md:pt-8 text-center">
      <p className="drop-shadow-xl [text-shadow:_2px_3px_5px_rgb(239_99_99)] leading-tight">
       {TITLE}
      </p>
    </div>
  );
};
