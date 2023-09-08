"use client";

import { useUser } from "@clerk/nextjs";
import { FunctionComponent } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const UserAvatar: FunctionComponent = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};

export default UserAvatar;
