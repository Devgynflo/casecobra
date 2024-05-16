import snakeImg from "@/public/snake-1.png";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NextPage } from "next";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: NextPage<LoginModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[99999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 size-24">
            <Image
              src={snakeImg}
              alt="snake"
              className="object-contain"
              fill
              sizes="85"
            />
          </div>
          <DialogTitle className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Connectez-vous
          </DialogTitle>

          <DialogDescription className="py-2 text-center text-base">
            <span className="font-medium text-zinc-900">
              Votre configuration est sauvegardée !
            </span>{" "}
            Connectez-vous ou créez un compte afin de continuer votre achat.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            Connexion
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: "default" })}>
            S&apos;enregistrer
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};
