import { ArrowRight } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";

interface Props {}

export const Navbar: NextPage<Props> = ({}) => {
  const user = undefined;
  const isAdmin = false;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="z-40 flex font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>
          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <Link
                  href={"/api/auth/logout"}
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Déconnexion
                </Link>

                {isAdmin && (
                  <>
                    <Link
                      href={"/api/auth/logout"}
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                    >
                      Dashboard ✨
                    </Link>
                  </>
                )}

                <Link
                  href={"/configure/upload"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Créer un étui
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/api/auth/register"}
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  S&apos;enregistrer
                </Link>

                <Link
                  href={"/api/auth/login"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Connexion
                </Link>
                <div className="hidden h-8 w-px bg-zinc-200 sm:block" />
                <Link
                  href={"/configure/upload"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Créer un étui
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
