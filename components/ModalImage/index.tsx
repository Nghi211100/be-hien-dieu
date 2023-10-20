import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "../Modal";
import Image from "next/image";
import { ImageShowModal } from "./ImageShowModal";

export const ModalImage = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const listImage = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const [showFull, setShowFull] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  return (
    <Modal show={show} onCancel={() => setShow(false)}>
      <div className="text-red-500 w-screen md:w-[1000px] h-[750px] bg-pink-100 rounded-lg p-4">
        <div className="border border-dashed border-gray-300 h-full overflow-y-auto css-scroll">
          <div className="w-full h-full rotate-[-10deg] rounded-lg bg-white -z-10 absolute inset-0"></div>
          <div className="grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(4,_1fr)] gap-4 w-full">
            {listImage.map((image) => (
              <div
                key={image}
                className="bg-white p-2 rounded-lg cursor-pointer"
                onClick={() => {
                  setShowFull(true), setImageSelected(`/images/${image}.jpg`);
                }}
              >
                <Image
                  src={`/images/${image}.jpg`}
                  width={1080}
                  height={1440}
                  alt="xinh"
                />
              </div>
            ))}
          </div>
        </div>
        <ImageShowModal
          setShow={setShowFull}
          show={showFull}
          imageSelected={imageSelected}
        />
      </div>
    </Modal>
  );
};
