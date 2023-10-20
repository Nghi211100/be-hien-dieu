import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "../Modal";
import Image from "next/image";

export const ModalCenter = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const content =
    "Gửi tới Cậu! người con gái xinh đẹp và tuyệt vời 😍. Ngày hôm nay mệt lắm có phải không? Nhưng không sao đâu nè, vẫn còn mình ở đây, mình sẽ trò chuyện với Cậu, làm Cậu vui vẻ hơn, kết thúc một ngày của Cậu với những nụ cười 😄. Mình mong Cậu luôn luôn vui vẻ và hạnh phúc 👩‍❤️‍👨, chúc Cậu có người đón đưa, kề cạnh và chăm sóc, tay phải đeo nhẫn, tay trái cầm hoa, miệng cười hồn nhiên, và chúc Cậu sớm có được mình 🤣. Mong là mình có thể đồng hành cùng Cậu tiếp những chặng đường phía trước 👫.";

  const [text, setText] = useState("");
  const [numb, setNumb] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (numb < content.length) {
        if (show) {
          setNumb(numb + 1);
          setText(text + content.charAt(numb));
        }
      }
    }, 50);
  }, [numb, show]);

  return (
    <Modal show={show} onCancel={() => setShow(false)}>
      <div className="text-red-500 w-screen md:w-[700px] h-[500px] md:h-[450px] bg-pink-100 rounded-lg p-4">
        <div className="border border-dashed border-gray-300 h-full">
          <div className="w-full h-full rotate-[-10deg] rounded-lg bg-white -z-10 absolute inset-0"></div>
          <div className="flex w-full">
            <div className="-ml-3 md:-ml-10 w-1/2 relative">
              <div className="absolute inset-0 md:top-10 flex flex-col items-center justify-evenly">
                <div className="block md:hidden">
                  <Image
                    src={"/images/avatar.png"}
                    width={100}
                    height={100}
                    alt="heart"
                  />
                </div>
                <Image
                  src={"/images/heart_gift.png"}
                  width={600}
                  height={600}
                  alt="heart"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="pt-4">
                <span className="text-base md:text-xl" id={"content"}>
                  {text}|
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
