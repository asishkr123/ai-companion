import { FunctionComponent } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src: string;
}

const BotAvatar: FunctionComponent<BotAvatarProps> = ({ src }) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default BotAvatar;
