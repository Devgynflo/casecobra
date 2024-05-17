"use client";

import { formatPrice } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { PhonePreview } from "../phone-preview";
import { getPaymentStatus } from "./actions";

interface ThankYouProps {}

export const ThankYou: NextPage<ThankYouProps> = ({}) => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";

  const { data: order } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  if (order === undefined) {
    return (
      <div className="mt-24 flex w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-zinc-500" />
          <h3 className="text-xl font-semibold">
            Chargement de votre commande...
          </h3>
          <p>Cela peut prendre un certain temps.</p>
        </div>
      </div>
    );
  }

  if (order === false) {
    return (
      <div className="mt-24 flex w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-zinc-500" />
          <h3 className="text-xl font-semibold">
            Vérification de votre paiement
          </h3>
          <p>Cela peut prendre un certain temps.</p>
        </div>
      </div>
    );
  }

  const { configuration, billingAddress, shippingAddress, amount } = order;
  const { color, croppedImageUrl, model } = configuration;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-base font-medium text-primary">Merci</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Votre coque de téléphone est en route!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            Nous procédons à son envoie
          </p>

          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Commande N°:</p>
            <p className="mt-2 text-zinc-500">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              Tu as fait un excellent choix
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              Chez coquecobra, nous pensons qu&apos;un étui de téléphone ne doit
              pas seulement être beau, mais aussi durer des années. Nous offrons
              une garantie d&apos;impression de 5 ans. Si votre étui n&apos;est
              pas de la plus haute qualité, nous le remplacerons gratuitement
            </p>
          </div>
        </div>

        <div className="mt-4 flex space-x-6 overflow-hidden rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
          <PhonePreview croppedImageUrl={croppedImageUrl} color={color} />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-6 px-10 py-10 text-sm">
            <div>
              <p className="font-medium text-gray-900">Adresse de livraison:</p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block">{shippingAddress?.name}</span>
                  <span className="block">{shippingAddress?.street}</span>
                  <span className="block">
                    {shippingAddress?.postalCode} {shippingAddress?.city}
                  </span>
                </address>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                Adresse de facturation:
              </p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block">{billingAddress?.name}</span>
                  <span className="block">{billingAddress?.street}</span>
                  <span className="block">
                    {billingAddress?.postalCode} {billingAddress?.city}
                  </span>
                </address>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-zinc-200 py-10 text-sm">
            <div>
              <p className="font-medium text-zinc-900">Status du paiement</p>
              <p className="mt-2 text-zinc-700">Payé</p>
            </div>

            <div>
              <p className="font-medium text-zinc-900">Méthode d&apos;envoi</p>
              <p className="mt-2 text-zinc-700">DHL, (2-3 jours ouvrés)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-zinc-200 pt-10 text-sm">
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Sous-total</p>
            <p className="text-zinc-700">{formatPrice(amount)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Frais de livraison</p>
            <p className="text-zinc-700">{formatPrice(0)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-zinc-900">Total</p>
            <p className="text-zinc-700">{formatPrice(amount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
