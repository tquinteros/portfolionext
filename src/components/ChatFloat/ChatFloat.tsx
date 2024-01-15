"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, RefObject } from "react";
import Input from "../Input/Input";

export default function ChatFloat() {
  const [showChat, setShowChat] = useState(true);
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

  return (
    <div className="fixed bottom-4 right-4">
      <Image onClick={handleOpenChat} src="/me.jpeg" width={48} height={48} alt="Me" className={`rounded-full cursor-pointer hover:opacity-75 duration-300 ${showChat ? "hidden" : "block"}`} />
      <motion.form
        // ref={chat}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={(event) => {
          event.preventDefault();
          setShowChat(true);
          handleSubmit(event);
        }}
        className={`${showChat ? "block" : "hidden"} bg-[#050816] border rounded-md p-6`}>
        <div onClick={handleCloseChat} className="flex justify-end mb-4 w-full cursor-pointer hover:opacity-75 duration-300">
          <span className="text-2xl">X</span>
        </div>

        <div
          ref={messagesContainerRef}
          className="text-white max-h-96 h-full overflow-y-auto">
          <div
            className={`flex flex-col mb-2 p-2 rounded-lg
                  self-end items-end bg-gray-800
                  `}
          >
            <span
              className={`text-xs text-right
                  `}
            >
              Tomás Quinteros
            </span>{" "}
            Ask me anything
          </div>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-lg ${m.role === "assistant"
                ? "self-end items-end bg-gray-800"
                : "self-start bg-blue-700"
                }`}
            >
              <span
                className={`text-xs ${m.role === "assistant" ? "text-right" : "text-left"
                  }`}
              >
                {/* {m.role} */}
                {
                  m.role === 'assistant' ? "Tomás Quinteros" : "user"
                }
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
        <div className="flex items-end gap-3">
          <Input
            onChange={handleInputChange}
            type="text"
            placeholder="Type something..."
            value={input}
            autoFocus
          />
          {/* <input
            value={input}
            type="text"
            onChange={handleInputChange}
            className="border px-4 bg-[#151030] border-black rounded-md p-2 mt-2 w-full"
            placeholder="Type something..."
            autoFocus
          /> */}
          {/* <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          // disabled={isLoading || !input}
          >
            Send
          </button> */}
          <button
            type="submit"
            className={` relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-xl tracking-tighter text-white bg-[#151030] rounded-md group`}>
            <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9999ff] rounded-full group-hover:w-full group-hover:h-56`}></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-2xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">{
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 20v-6l8-2l-8-2V4l19 8z"/></svg>
            }</span>
          </button>
        </div>
      </motion.form>
    </div>
  );
}