import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

import templatePhoneDark from "@/public/phone-template-dark-edges.png";
import templatePhone from "@/public/phone-template-white-edges.png";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: StaticImageData | string;
  dark?: boolean;
}

export const Phone: NextPage<PhoneProps> = ({
  className,
  imgSrc,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className,
      )}
      {...props}
    >
      <Image
        priority
        className={cn("pointer-events-none z-50 overflow-hidden")}
        src={dark ? templatePhoneDark : templatePhone}
        alt="template"
      />
      <div className="absolute inset-0 -z-10">
        <Image
          priority
          fill
          sizes="100"
          className="min-h-full min-w-full object-cover"
          src={imgSrc}
          alt="phone image"
        />
      </div>
    </div>
  );
};
