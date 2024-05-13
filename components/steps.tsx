"use client";

import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Etape 1 : Ajoutez une image",
    description: "Choisissez une image",
    url: "/upload",
  },
  {
    name: "Etape 2 : Personnaliser le design",
    description: "Fabriquer l'étui de votre téléphone",
    url: "/design",
  },
  {
    name: "Etape 3 : Sommaire",
    description: "Revoir votre projet final",
    url: "/preview",
  },
];

interface StepsProps {}

export const Steps: NextPage<StepsProps> = ({}) => {
  const pathname = usePathname();

  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url),
        );
        const imgPath = `/snake-${i + 1}.png`;

        return (
          <li key={step.url} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  isCurrent && "bg-zinc-700",
                  isCompleted && "bg-primary",
                )}
              />

              <span
                className={cn(
                  i !== 0 && "lg:pl-9",
                  "flex items-center px-6 py-4 text-sm font-medium",
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    priority
                    src={imgPath}
                    alt="Snake progression"
                    width={100}
                    height={100}
                    className={cn(
                      "flex size-20 items-center justify-center object-contain",
                      isCompleted && "border-none",
                      isCurrent && "border-zinc-700",
                    )}
                  />
                </span>

                <span className="ml-4 mt-0.5 flex h-full min-w-0 flex-col justify-center">
                  <span
                    className={cn(
                      "text-sm font-semibold text-zinc-700",
                      isCompleted && "text-primary",
                      isCurrent && "text-zinc-700",
                    )}
                  >
                    {step.name}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>

              {/* Separator */}
              {i !== 0 && (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};
