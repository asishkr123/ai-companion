"use client";

import { useUser } from "@clerk/nextjs";
import { FunctionComponent } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  src: string;
}

const UserAvatar: FunctionComponent<UserAvatarProps> = ({ src }) => {
  const { user } = useUser();
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default UserAvatar;
