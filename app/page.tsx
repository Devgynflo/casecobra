import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

import arrow from "@/public/arrow.png";
import horse from "@/public/horse.jpg";
import horseM from "@/public/horse_phone.jpg";
import lineImg from "@/public/line.png";
import snake1Img from "@/public/snake-1.png";
import snake2Img from "@/public/snake-2.png";
import testimonialsImg from "@/public/testimonials/1.jpg";
import user1Img from "@/public/users/user-1.png";
import user2Img from "@/public/users/user-2.png";
import user3Img from "@/public/users/user-3.png";
import user4Img from "@/public/users/user-4.jpg";
import user5Img from "@/public/users/user-5.jpg";
import yourImg from "@/public/your-image.png";

import { Icons } from "@/components/Icons";
import { Phone } from "@/components/phone";
import { Reviews } from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <Image src={snake1Img} alt="snake" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Votre photo personnalisé sur votre{" "}
                <span className="bg-green-600 px-2 text-white"> téléphone</span>{" "}
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Immortalisez vos souvenirs préférés avec votre{" "}
                <span className="font-semibold">coque</span> de
                téléphone. CoqueCobra vous permet de protéger vos souvenirs, mais
                pas seulement...
              </p>
              <ul className="mt-8 flex flex-col items-center  space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Composant durable de haute qualité
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Garantie d&apos;impression de 5 ans
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Téléphones iphone modernes supportés
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src={user1Img}
                    alt="Illustration utilisateur"
                  />
                  <Image
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src={user2Img}
                    alt="Illustration utilisateur"
                  />
                  <Image
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src={user3Img}
                    alt="Illustration utilisateur"
                  />
                  <Image
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src={user4Img}
                    alt="Illustration utilisateur"
                  />
                  <Image
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user5Img}
                    alt="Illustration utilisateur"
                  />
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 fill-green-600 text-green-600" />
                    <Star className="size-4 fill-green-600 text-green-600" />
                    <Star className="size-4 fill-green-600 text-green-600" />
                    <Star className="size-4 fill-green-600 text-green-600" />
                    <Star className="size-4 text-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.237</span> clients
                    satisfaits
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src={yourImg}
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
                alt="my-image"
              />
              <Image
                src={lineImg}
                alt="line"
                className="absolute -bottom-6 -left-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc={testimonialsImg} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              Qu&apos;en pensent{" "}
              <span className="relative px-2">
                nos clients{" "}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
              </span>{" "}
              ?
            </h2>
            <Image
              src={snake2Img}
              alt="snake 2"
              className="order-0 w-24 lg:order-2 "
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4  lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5  text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;L&apos;étui est durable et j&apos;ai même reçu des
                  compliments sur le design. J&apos;ai l&apos;étui depuis deux
                  mois et demi maintenant et l&apos;{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    image est super claire
                  </span>
                  . Sur l&apos; étui que j&apos;avais avant, l&apos;image a
                  commencé à s&apos;estomper et à prendre une couleur jaunâtre
                  après quelques semaines. J&apos;adore...&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  className="size-12 rounded-full object-cover"
                  src={user2Img}
                  alt="user2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Samantha</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Achat vérifié</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4  lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
                <Star className="size-5 fill-green-600 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;L&apos;étui est durable et j&apos;ai même reçu des
                  compliments sur le design. J&apos;ai l&apos;étui depuis deux
                  mois et demi maintenant et l&apos;{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    image est super claire
                  </span>
                  . Sur l&apos; étui que j&apos;avais avant, l&apos;image a
                  commencé à s&apos;estomper et à prendre une couleur jaunâtre
                  après quelques semaines. J&apos;adore...&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  className="size-12 rounded-full object-cover"
                  src={user3Img}
                  alt="user2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Anne</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Achat vérifié</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                Téléchargez votre photo et obtenez{" "}
                <span className="relative bg-green-600 px-2 text-white">
                  la coque de votre téléphone{" "}
                </span>{" "}
                maintenant
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center gap-40 md:grid md:grid-cols-2">
              <Image
                src={arrow}
                alt="fleche"
                aria-disabled
                className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
              />
              <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
                <Image
                  alt="Illustration d'un cheval"
                  src={horse}
                  className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <Phone imgSrc={horseM} className="w-60" />
            </div>
          </div>

          <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-green-600" />
              Composant durable de haute qualité
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-green-600" />
              Revêtement résistant à l&apos;abrasion et aux empreintes digitales
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-green-600" />
              Compatible avec la recharge sans fil
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-green-600" />
              Garantie d&apos;impression de 5 ans
            </li>

            <div className="flex justify-center">
              <Link
                href={"/configure/upload"}
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
              >
                Créer votre coque maintenant{" "}
                <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
