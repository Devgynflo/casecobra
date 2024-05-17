"use client";

import { cn } from "@/lib/utils";
import phonePreviewImg from "@/public/clearphone.png";
import { CaseColor } from "@prisma/client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PhonePreviewProps {
  croppedImageUrl: string | null;
  color: CaseColor | null;
}

export const PhonePreview: NextPage<PhonePreviewProps> = ({
  croppedImageUrl,
  color,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimension, setRenderedDimension] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimension({ width, height });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("reisze", handleResize);
    };
  }, []);

  let caseBackoundColor = "bg-zinc-950";
  if (color === "blue") caseBackoundColor = "bg-blue-950";
  if (color === "rose") caseBackoundColor = "bg-rose-950";

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimension.width / 2 -
            renderedDimension.width / (1216 / 121),
          top: renderedDimension.height / 6.22,
        }}
      >
        <Image
          priority
          src={croppedImageUrl!}
          alt="Illustration du rendu du téléphone"
          width={renderedDimension.width / (3000 / 637)}
          height={100}
          className={cn(
            "phone-skew relative z-20 rounded-[15px] rounded-b-[10px] md:rounded-b-[20px] md:rounded-t-[30px]",
            caseBackoundColor,
          )}
        />
      </div>

      <div className="relative z-40 h-full w-full">
        <Image
          priority
          alt="template du téléphone"
          src={phonePreviewImg}
          className="pointer-events-none h-full w-full rounded-md antialiased"
        />
      </div>
    </AspectRatio>
  );
};
