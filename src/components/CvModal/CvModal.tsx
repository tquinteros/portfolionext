"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export interface HomeModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<HomeModalProps> = ({ isOpen, onClose, children }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Cv.pdf";
    link.download = "Cv.pdf";
    link.click();
  };
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModal = (e: MouseEvent) => {
    if (modalRef.current && e.target instanceof Node && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeModal);
    } else {
      document.removeEventListener("click", closeModal);
    }
    return () => {
      document.removeEventListener("click", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="modal-overlay fixed inset-0"></div>
      <div
        ref={modalRef}
        className={`modal no-scrollbar lg:w-[85%] bg-[#050816] w-[100%] border border-[#9999ff] max-h-[80%] lg:max-h-[90%] overflow-auto rounded-lg shadow-lg z-50 `}
      >
        <div className={`sticky top-0 mb-4 px-4 py-2`}>
          <button
            className="modal-close hover:opacity-75 duration-300 float-right text-4xl font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className={`modal-content p-4 px-4 mt-4 lg:px-12`}>{children}</div>
        <div className="flex gap-4 px-4 lg:px-12 md:gap-12 flex-col md:flex-row items-center mb-8 justify-center">
          <button
            onClick={onClose}
            className="text-2xl px-6 py-1 rounded-2xl hover:opacity-75 duration-300 border border-[#9999ff] w-full"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="text-2xl px-6 py-1 rounded-2xl hover:opacity-75 duration-300 border border-[#9999ff] w-full"
          >
            Download CV
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
