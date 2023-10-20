"use client";
import classNames from "classnames";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export const Loading = ({
  show,
  time,
  setTime,
}: {
  show: boolean;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}) => {
  useEffect(() => {
    if (time < 100) {
      const timeOut = setInterval(() => {
        setTime(time + 1);
      }, 30);

      return () => clearInterval(timeOut);
    }
  }, [setTime, time]);

  return (
    <div
      className={classNames(
        "w-[calc(100vw-20px)] md:w-[400px] h-[40px] border-neutral-100 border-2 rounded-lg relative shadow-lg transition-all duration-300 overflow-hidden",
        show && "translate-y-[-210px] md:translate-y-[-280px]"
      )}
    >
      <div className="hidden md:block h-full">
        <div
          style={{ width: `calc(396px*${time}/100)` }}
          className="bg-pink-100 h-full rounded-lg justify-end flex items-center"
        >
          💞
        </div>
      </div>
      <div className="block md:hidden h-full">
        <div
          style={{ width: `calc((100vw - 20px)*${time}/100)` }}
          className="bg-pink-100 h-full rounded-lg justify-end flex items-center"
        >
          💞
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-xl">
        {time < 100 ? (
          <p className="text-red-400">Đang kết nối ...</p>
        ) : (
          <p className="text-red-500">Đã chạm đến trái tim :))</p>
        )}
      </div>
    </div>
  );
};
