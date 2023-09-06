import { FunctionComponent } from "react";

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: FunctionComponent<ChatLayoutProps> = ({ children }) => {
  return <div className="w-full mx-auto max-w-4xl h-full">{children}</div>;
};

export default ChatLayout;
