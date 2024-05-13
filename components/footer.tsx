import { NextPage } from "next";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <footer className="relative h-20 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="flex h-full flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="pb-2 text-center md:pb-0 md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href={"/"}
                className="text-sm text-muted-foreground transition hover:text-gray-600"
              >
                Teams
              </Link>
              <Link
                href={"/"}
                className="text-sm text-muted-foreground transition hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-sm text-muted-foreground transition hover:text-gray-600"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
