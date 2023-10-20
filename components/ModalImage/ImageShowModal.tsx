import React, { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";
import Image from "next/image";

export const ImageShowModal = ({
  show,
  setShow,
  imageSelected,
}: {
  imageSelected: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={show} onCancel={() => setShow(false)}>
      <div className="w-screen h-screen relative">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="w-[90%] h-[90%]">
          <Image
            src={imageSelected}
            alt="love"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </Modal>
  );
};
