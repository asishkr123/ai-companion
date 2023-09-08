"use client";

import { Companion } from "@prisma/client";
import {
  ElementRef,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  companion: Companion;
}

const ChatMessages: FunctionComponent<ChatMessagesProps> = ({
  messages,
  isLoading,
  companion,
}) => {
  console.log(messages, "messages");
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [isLoadingSystemMessage, setIsLoadingSystemMessage] = useState(
    messages.length === 0 ? true : false
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingSystemMessage(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        src={companion.src}
        isLoading={isLoadingSystemMessage}
        role={"system"}
        content={`Hello , I am ${companion.name} , ${companion.description}`}
      />
      {messages.map((message) => {
        return (
          <ChatMessage
            key={message.content}
            src={companion.src}
            content={message.content}
            role={message.role}
          />
        );
      })}
      {isLoading && (
        <ChatMessage isLoading src={companion.src} role={"system"} />
      )}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatMessages;
