"use client";
import { ChangeEvent, FormEvent, FunctionComponent } from "react";
import { ChatRequestOptions } from "ai";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
  isLoading: boolean;
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
}

const ChatForm: FunctionComponent<ChatFormProps> = ({
  input,
  handleInputChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form
      className="border-t border-primary/10 py-4 flex items-center gap-x-2"
      onSubmit={onSubmit}
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        className="rounded-lg bg-primary/10"
        placeholder="Type a message"
      />
      <Button disabled={isLoading} variant={"ghost"}>
        <SendHorizonal className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default ChatForm;
