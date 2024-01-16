"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, RefObject } from "react";
import Input from "../Input/Input";

const variants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },

}

export default function ChatFloat() {


  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const handleOpenChat = () => {
    setShowChat(!showChat);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };


  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  function insertSpaces(text: string, maxLength: number) {
    let result = '';
    let currentLength = 0;

    for (let i = 0; i < text.length; i++) {
      result += text[i];
      currentLength++;

      if (currentLength >= maxLength && i < text.length - 1) {
        result += ' ';
        currentLength = 0;
      }
    }

    return result;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        whileHover={{ scale: 1.2 }}
        className="fixed bottom-4 right-4">
        {/* <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, delay: 2.5 }}
          className={`mb-4 absolute -top-16 w-32 right-1/2 -translate-x-1/2 ${!showAlert ? "block" : "hidden"}`}
        >Talk with me</motion.span> */}
        <Image onClick={() => setIsOpen(true)} src="/me.jpeg" width={48} height={48} alt="Me" className={`rounded-full cursor-pointer ${isOpen ? "hidden" : "block"}`} />
      </motion.div>
      <motion.form
        // ref={chat}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: .3 }}
        onSubmit={(event) => {
          event.preventDefault();
          setShowChat(true);
          handleSubmit(event);
        }}
        className={`${isOpen ? "block" : "hidden"} bg-[#050816] border rounded-md p-6 max-w-sm`}>
        <div onClick={() => setIsOpen(false)} className="flex justify-end mb-4 w-full cursor-pointer hover:opacity-75 duration-300">
          <span className="text-2xl">X</span>
        </div>

        <div
          ref={messagesContainerRef}
          className="text-white max-h-96 h-full overflow-y-auto">
          <div
            className={`flex flex-col mb-2 p-2 rounded-lg
                  self-start items-start bg-gray-800
                  `}
          >
            <div className="flex items-center mb-2 gap-2">
              <Image src="/me.jpeg" width={32} height={32} alt="Me" className={`rounded-full cursor-pointer hover:opacity-75 duration-300`} />
              <div className="flex flex-col">
                <span
                  className={`text-xs text-right
                `}
                >
                  Tomás Quinteros
                </span>{" "}
                <span className="text-xs flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#059669" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z" /></svg>
                  Online
                </span>
              </div>
            </div>
            Ask me anything
          </div>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col my-4 p-2 whitespace-normal overflow-wrap-break-word rounded-lg ${m.role === "assistant"
                ? "self-start items-start bg-gray-800"
                : "self-end items-end bg-blue-700"
                }`}
            >
              <span
                className={`text-xs ${m.role === "assistant"
                  ? "text-left flex items-center gap-2 mb-2"
                  : "text-right mb-2"
                  }`}
              >
                {/* {m.role} */}

                <Image
                  src="/me.jpeg"
                  width={32}
                  height={32}
                  alt="Me"
                  className={`${m.role === "user" ? "hidden" : "block"
                    } rounded-full cursor-pointer hover:opacity-75 duration-300`}
                />
                <div className="flex flex-col">
                  {m.role === "assistant" ? "Tomás Quinteros" : "User"}
                  {
                    m.role === "assistant" && (
                      <span className="text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#059669" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z" /></svg>
                        Online
                      </span>
                    )
                  }
                </div>
              </span>{" "}
              {m.content}
            </div>
          ))}
        </div>

        {/* <div className="flex justify-between my-4">
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          // disabled={isLoading || !input}
          >
            Send
          </button>
        </div> */}
        <div className="flex  items-end justify-between mt-4 gap-3">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Type something..."
            value={input}
            disabled={isLoading}
            autoFocus
            className="mt-0 px-4 bg-[#151030] rounded-md p-2 w-full"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-xl tracking-tighter text-white bg-[#151030] rounded-md group`}>
            <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9999ff] rounded-full group-hover:w-full group-hover:h-56`}></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-2xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">{
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 20v-6l8-2l-8-2V4l19 8z" /></svg>
            }</span>
          </button>
        </div>
      </motion.form>
    </div>
  );
}