import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import ChatClient from "./components/Client";

interface ChatPageProps {
  params: {
    chatId: string;
  };
}

const ChatPage: FunctionComponent<ChatPageProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    return redirectToSignIn();
  }
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  if (!companion) return redirect("/");
  return <ChatClient companion={companion} />;
};

export default ChatPage;
