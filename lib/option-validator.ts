// Ne pas supprimer ,hack, tailwinnd ne supporte pas les imports dynamiques

import { PRODUCT_PRICES } from "@/config/products";

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
]as const



export const MODELS = {
  name: "models",
  options: [
    {
      label: 'iPhoneX',
      value: 'iphoneX'
    },
    {
      label: 'iPhone11',
      value: 'iphone11'
    },
    {
      label: 'iPhone12',
      value: 'iphon12'
    },
    {
      label: 'iPhone13',
      value: 'iphon13'
    },
    {
      label: 'iPhone14',
      value: 'iphon14'
    },{
      label: 'iPhone15',
      value: 'iphon15'
    }
  ]
} as const;

export const MATERIALS = {
  name: 'composant',
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone
    },
     {
      label: "Polycarbonate",
      value: "polycarbonate",
      description: "Revêtement résistant aux rayures",
      price: PRODUCT_PRICES.material.polycarbonate
    }
  ]
}as const 

export const FINISHES = {
  name: 'finition',
  options: [
    {
      label: "Finition lisse",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth
    },
     {
      label: "Fini texturé",
      value: "textured",
      description: "Texture souple et adhérente",
      price: PRODUCT_PRICES.finish.textured
    }
  ]
}as const 


