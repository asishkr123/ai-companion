"use client";
import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

const ImageUpload: FunctionComponent<ImageUploadProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted) {
    return (
      <div className="space-y-4 w full flex flex-col justify-center items-center">
        <CldUploadButton
          onUpload={(result: any) => onChange(result.info.secure_url)}
          options={{
            maxFiles: 1,
          }}
          uploadPreset="evykte1r"
        >
          <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
            <div className="relative h-40 w-40">
              <Image
                fill
                alt="Upload"
                src={value || "/placeholder.svg"}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </CldUploadButton>
      </div>
    );
  }
  return null;
};

export default ImageUpload;
