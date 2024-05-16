"use client";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { COLORS, MODELS } from "@/lib/option-validator";
import { cn, formatPrice } from "@/lib/utils";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { Phone } from "../phone";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { createCheckoutSession } from "./actions";
interface DesignPreviewProps {
  configuration: Configuration;
}

export const DesignPreview: NextPage<DesignPreviewProps> = ({
  configuration,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => setShowConfetti(true), []);

  const { color, croppedImageUrl, model, finish, material, id } = configuration;
  const tw = COLORS.find((supportedColor) => supportedColor.value == color)?.tw;
  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model,
  )!;

  let totalPrice = BASE_PRICE;
  if (material === "polycarbonate")
    totalPrice += PRODUCT_PRICES.material.polycarbonate;
  if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured;

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else {
        throw new Error("Impossible de récupérer l'url de votre paiement");
      }
    },
    onError: () => {
      toast({
        title: "Quelque chose s'est mal passé",
        description: "Veuillez réessayer svp",
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 flex select-none justify-center overflow-hidden"
        aria-hidden={true}
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-1 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone imgSrc={croppedImageUrl!} className={cn(`bg-${tw}`)} />
        </div>

        <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Votre coque pour le modèle <span>{modelLabel}</span>
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="size-4 text-green-500" />
            En stock et prêt à être expédié
          </div>
        </div>

        <div className="text-base sm:col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div className="">
              <p className="tex-zinc-950 font-medium">Point Forts</p>
              <ol className="mt-3 list-inside list-disc text-zinc-700">
                <li>Fonction de chargement sans-fil conservée</li>
                <li>TPU shock absorption</li>
                <li>Emballages issus du recyclage</li>
                <li>5 ans de garantie</li>
              </ol>
            </div>

            <div>
              <p className="font-medium text-zinc-950">Composant</p>
              <ol className="mt-3 list-inside list-disc text-zinc-700">
                <li>Matériau de haute qualité et durable</li>
                <li>Revêtement anti-rayures et anti-traces de doigts</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="mt-2 flex items-center justify-between py-1">
                  <p className="text-gray-600">Prix</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {finish === "textured" && (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-gray-600">Texture souple et adhérente</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                )}

                {material === "polycarbonate" && (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-gray-600">
                      Revêtement résistant aux rayures
                    </p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                    </p>
                  </div>
                )}

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">
                    Total de la commande
                  </p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                className="px-4 sm:px-6 lg:px-8"
                onClick={() => {
                  createPaymentSession({ configId: id });
                }}
              >
                Paiement
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
