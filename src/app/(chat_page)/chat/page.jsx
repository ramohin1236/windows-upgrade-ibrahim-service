"use client"
import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Eleanor Pena",
      text: "Hello Jacob",
      time: "FRI AT 16:44 PM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Eleanor Pena",
      text: "How are you doing",
      time: "",
      isOwn: false,
    },
    {
      id: 3,
      sender: "Eleanor Pena",
      text: "Is you free now ?",
      time: "",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      text: "Hello Jacob",
      time: "FRI AT 16:44 PM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "You",
      text: "How are you doing",
      time: "",
      isOwn: true,
    },
    {
      id: 6,
      sender: "You",
      text: "Is you free now ?",
      time: "",
      isOwn: true,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        text: message,
        time: new Date().toLocaleString("en-US", {
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).toUpperCase(),
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white border-x border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-200">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Eleanor Peng</h3>
          <p className="text-sm text-gray-500">tim.jennings@example.com</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-8 bg-gray-50  border-gray-200">
        <div className="w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mb-4">
            
          <div className="w-16 h-16 overflow-clip rounded-full">
            <img src="https://i.pravatar.cc/150?img=1" alt="" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Eleanor Pena</h2>
        <p className="text-sm text-gray-500">Los Angeles, United States</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={msg.id}>
            {/* Show timestamp for first message or when time changes */}
            {msg.time && (
              <div className="text-center text-xs text-gray-500 mb-2">
                {msg.time}
              </div>
            )}
            
            <div className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
              <div className="flex items-end gap-2 max-w-xs">
                {/* Avatar for incoming messages */}
                {!msg.isOwn && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 overflow-clip rounded-full">
                         <img src="https://i.pravatar.cc/150?img=1" alt="" />
                    </div>
                  </div>
                )}
                
                {/* Message bubble */}
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    msg.isOwn
                      ? "bg-black text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 p-4 bg-white border-t border-gray-200">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Aa"
            className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-transparent focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="p-2 bg-black cursor-pointer text-white rounded-full transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;