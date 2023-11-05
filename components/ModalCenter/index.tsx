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
    "Gửi tới Cậu! một thiên thần nhỏ đước gửi xuống thế giới này 😍. Thời gian vừa qua mệt lắm có phải không? Nhưng không sao đâu nè, vẫn còn mình ở đây, mình sẽ trò chuyện với Cậu, làm Cậu vui vẻ hơn, kết thúc một ngày của Cậu với những nụ cười 😄. Chào mừng Cậu quay trở lại với cuộc sống hồn nhiên và đầy màu sắc này nhé. Mình mong Cậu luôn luôn vui vẻ và hạnh phúc 👩‍❤️‍👨, chúc Cậu có người đón đưa, kề cạnh và chăm sóc, tay phải đeo nhẫn, tay trái cầm hoa, miệng cười hồn nhiên, hoa sẽ vì Cậu mà e thẹn, nắng sẽ vì Cậu mà lu mờ và chúc Cậu sớm có được mình 🤣. Mong là chúng ta có thể đồng hành cùng nhau tiếp những chặng đường phía trước nha👫.";

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
      <div className="text-red-500 w-screen md:w-[700px] h-[580px] md:h-[480px] bg-pink-100 rounded-lg p-4">
        <div className="border border-dashed border-gray-300 h-full">
          <div className="w-full h-full rotate-[-10deg] rounded-lg bg-white -z-10 absolute inset-0"></div>
          <div className="flex w-full h-full">
            <div className="-ml-3 md:-ml-10 w-1/2 relative h-full">
              <div className="absolute inset-0 md:top-10 flex flex-col items-center justify-evenly h-full w-full">
                <div className="block md:hidden">
                  <Image
                    src={"/images/avatar.png"}
                    width={100}
                    height={100}
                    alt="heart"
                    loading="eager"
                  />
                </div>
                <Image
                  src={"/images/heart_gift.png"}
                  width={600}
                  height={600}
                  alt="heart"
                  loading="eager"
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
