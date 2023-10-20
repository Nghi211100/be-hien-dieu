"use client";

import { Audio } from "@/components/Audio";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { ModalCenter } from "@/components/ModalCenter";
import { ModalImage } from "@/components/ModalImage";
import { Name } from "@/components/Name";
import classNames from "classnames";
import { useState } from "react";

export default function Home() {
  const [showMail, setShowMail] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [time, setTime] = useState(0);
  return (
    <main className="flex h-screen overflow-hidden relative flex-col items-center gap-6 p-2 md:p-24 bg-[url('/images/background.jpg')] bg-no-repeat bg-cover font-mon text-xl">
      <Header />
      <Audio />
      <div className="md:pt-[calc(100vh*1/6)]">
        <Loading show={showMail || showImage} time={time} setTime={setTime} />
      </div>
      <div className="flex gap-6 text-white">
        <button
          className={classNames(
            "bg-red-400 rounded-lg shadow-lg px-4 py-2 hover:bg-red-500",
            time === 100 ? "block" : "hidden"
          )}
          onClick={() => setShowMail(true)}
        >
          Đọc thư ở đây nè
        </button>
        <button
          className={classNames(
            "bg-red-400 rounded-lg shadow-lg px-4 py-2 hover:bg-red-500",
            time === 100 ? "block" : "hidden"
          )}
          onClick={() => setShowImage(true)}
        >
          Xem ảnh ở đây nè
        </button>
      </div>

      <ModalCenter show={showMail} setShow={setShowMail} />
      <ModalImage show={showImage} setShow={setShowImage} />
      <Footer />
      <Name />
    </main>
  );
}
