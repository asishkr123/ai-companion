import { Companion } from "@prisma/client";
import { FunctionComponent } from "react";
import Image from "next/image";
interface CompanionProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

const Companion: FunctionComponent<CompanionProps> = ({ data }) => {
  if (Boolean(data.length)) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="greyscale" alt="Empty" src="/empty.png" />
        </div>
        <p className="text-sm text-muted-foreground">No companions found.</p>
      </div>
    );
  }
  return <div>Companions</div>;
};

export default Companion;
