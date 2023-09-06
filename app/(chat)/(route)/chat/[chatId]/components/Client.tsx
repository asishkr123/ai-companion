"use client";
import { Companion, Message } from "@prisma/client";
import { FunctionComponent } from "react";
import ChatHeader from "./ChatHeader";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient: FunctionComponent<ChatClientProps> = ({ companion }) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
