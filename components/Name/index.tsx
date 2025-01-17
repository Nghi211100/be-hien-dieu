import { NAME } from "@/utils/common";
import React from "react";

export const Name = () => {
  return (
    <p className="text-4xl text-center">
      ❤️
      <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <span className="[text-shadow:_2px_3px_2px_rgb(239_99_99)]">
          {NAME}
        </span>
      </span>
      ❤️
    </p>
  );
};
