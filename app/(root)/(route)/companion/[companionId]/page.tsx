import prismadb from "@/lib/prismadb";
import { FunctionComponent } from "react";
import CompanionForm from "./components/CompanionForm";
import { auth, redirectToSignIn } from "@clerk/nextjs";
interface CompanionIdProps {
  params: {
    companionId: string;
  };
}

const CompanionId: FunctionComponent<CompanionIdProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    redirectToSignIn();
  }
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId: userId!,
    },
  });
  const categories = await prismadb.category.findMany();
  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionId;
