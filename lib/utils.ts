import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("fr-FR", {
    currency: "EUR",
    style: "currency",
  });

  return formatter.format(price);
};

interface conctructMetaDataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
}

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : process.env.BASE_URL_PROD ?? "";

export function conctructMetaData({
  title = "CoqueCobra | Personnalisez votre coque de téléphone",
  description = "Créez votre coque de téléphone en haute qualité  et en quelques secondes.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: conctructMetaDataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@gynflo.dev",
    },
    icons,
    metadataBase: new URL("https://casecobra-plum.vercel.app/"),
  };
}
