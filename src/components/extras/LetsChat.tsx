"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const LetsChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatPanelRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatPanelRef.current &&
        !chatPanelRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Let's Chat Button */}
      <button
        style={{ fontFamily: "var(--font-forum)" }}
        onClick={toggleChat}
        className="flex fixed z-10 bottom-16 right-6 bg-primary text-white p-4 px-4 sm:px-8 md:px-10 rounded-full shadow-lg items-center space-x-2 hover:bg-stone-900 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-lg">Let&apos;s Chat !</span>
      </button>

      {/* Chat Panel */}
      <div
        ref={chatPanelRef}
        aria-label="Close chat"
        className={`fixed bottom-6 z-30 right-5 w-full bg-white shadow-2xl rounded-t-lg p-6 max-w-[90vw] sm:max-w-[500px] transition-transform dark:bg-slate-950 dark:text-gray-100 border`}
        style={{
          transform: isChatOpen
            ? "translateX(0)"
            : "translate(calc(100% + 25px))",
          transitionDuration: "300ms",
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleChat}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
          aria-label="Close chat"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Chat Panel Content */}
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Infinity Construction NYC
        </h3>
        <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
          We&apos;ll reply as soon as possible. Feel free to ask any questions!
        </p>
        <div className="space-y-4">
          {/* Chatbase Iframe Integration */}
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/LYSTqTM8tXuNK5rdx21GY"
              width="100%"
              height="100%"
              style={{
                border: "2px solid #f1f1f1",
                borderRadius: "8px",
              }}
              title="Chatbase Chatbot"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsChat;
