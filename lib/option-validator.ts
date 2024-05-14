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
}
