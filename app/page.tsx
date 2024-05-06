import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

import lineImg from "@/public/line.png";
import snake1Img from "@/public/snake-1.png";
import testimonialsImg from "@/public/testimonials/1.jpg";
import user1Img from "@/public/users/user-1.png";
import user2Img from "@/public/users/user-2.png";
import user3Img from "@/public/users/user-3.png";
import user4Img from "@/public/users/user-4.jpg";
import user5Img from "@/public/users/user-5.jpg";
import yourImg from "@/public/your-image.png";

import { Phone } from "@/components/phone";
import { Check, Star } from "lucide-react";

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
                Immortalisez vos souvenirs préférés avec votre,{" "}
                <span className="font-semibold">l&apos;un des </span> étuis de
                téléphone. CaseCobra vous permet de protéger vos souvenirs, mais
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
    </div>
  );
}
