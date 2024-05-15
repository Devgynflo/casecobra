import { PRODUCT_PRICES } from "@/config/products";

// Ne pas supprimer ,hack, tailwinnd ne supporte pas les imports dynamiques
// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

export const COLORS = [
  { label: "Noir", value: "black", tw: "zinc-900" },
  {
    label: "Bleu",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Rouge", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhoneX",
      value: "iphonex",
    },
    {
      label: "iPhone11",
      value: "iphone11",
    },
    {
      label: "iPhone12",
      value: "iphone12",
    },
    {
      label: "iPhone13",
      value: "iphone13",
    },
    {
      label: "iPhone14",
      value: "iphone14",
    },
    {
      label: "iPhone15",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "composant",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Polycarbonate",
      value: "polycarbonate",
      description: "Revêtement résistant aux rayures",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finition",
  options: [
    {
      label: "Finition lisse",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Fini texturé",
      value: "textured",
      description: "Texture souple et adhérente",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
