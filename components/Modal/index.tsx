"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { useEffect } from "react";

interface IModalV2Props {
  show?: boolean;
  title?: string;
  setShow?: () => null;
  children?: React.ReactElement;
  onCancel?: () => void;
  isTransactionModal?: boolean;
  ref?: React.ForwardedRef<unknown>;
  showCloseBtn?: boolean;
  className?: string;
}

const Modal: React.FC<IModalV2Props> = React.forwardRef(
  (
    {
      title = "",
      show = false,
      setShow = () => null,
      children,
      onCancel = (visible: boolean) => null,
      isTransactionModal,
      showCloseBtn = true,
      className,
    },
    ref
  ) => {
    const modalStylesWidth = isTransactionModal
      ? "inline-block z align-bottom  rounded-lg p-4 pt-6 text-left shadow-xl transform transition-all sm:align-middle sm:max-w-[344px] w-full"
      : "inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:align-middle w-auto";

    const renderModalTitle = () => {
      if (!title) return null;
      return (
        <p className="text-neutral-100 text-xl text-center font-bold mb-6 pt-5">
          {title}
        </p>
      );
    };

    useEffect(() => {
      const handleKeyPress = (e) => {
        if (e.key === "Escape") {
          onCancel(false);
        }
      };
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

    return (
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0" onClose={() => {}}>
          <div
            className={classNames(
              "flex justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-dimmer-default transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className={modalStylesWidth + " " + className}>
                {showCloseBtn && (
                  <div className="sm:block absolute top-1 right-2 pt-2 pr-2 z-50">
                    <div
                      // @ts-ignore
                      ref={ref}
                      onClick={() => onCancel(false)}
                      className="font-sans icon-close cursor-pointer shadow-md text-lg text-red-500 border border-neutral-50 bg-red-200 rounded-full w-6 h-6 pb-1 flex items-center justify-center hover:bg-red-300 hover:text-red-50"
                    >
                      x
                    </div>
                  </div>
                )}

                {renderModalTitle()}
                <div>{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

export default Modal;
