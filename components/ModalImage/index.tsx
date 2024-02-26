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
  const [listImage] = useState<number[]>(() => {
    let numb = [];
    for (let i = 0; i < 26; i++) {
      numb.push(i + 1);
    }
    return numb;
  });
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
                  width={400}
                  height={700}
                  loading="lazy"
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
