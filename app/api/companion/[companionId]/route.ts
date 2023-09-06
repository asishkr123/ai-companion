import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    if (!params?.companionId) {
      return new NextResponse("missing param companionId", { status: 400 });
    }
    const body = await req.json();
    const user = await currentUser();
    const { src, name, description, instructions, seed, categoryId } = body;
    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse("missing required fields", { status: 400 });
    }
    const companion = await prismadb.companion.update({
      where: {
        id: params.companionId,
        userId: user.id,
      },
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
      },
    });
    return NextResponse.json(companion);
  } catch (error) {
    console.log("companion updation failed", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { companionId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }
    const companion = await prismadb.companion.delete({
      where: {
        userId,
        id: params.companionId,
      },
    });
    return NextResponse.json(companion);
  } catch (error) {
    console.log("delete companion failed", "error");
  }
}
