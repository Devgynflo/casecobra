import { ThankYou } from "@/components/thank-you";
import { NextPage } from "next";
import { Suspense } from "react";

interface ThankYouPageProps {}

const ThankYouPage: NextPage<ThankYouPageProps> = ({}) => {
  return (
    <Suspense>
      <div>
        <ThankYou />
      </div>
    </Suspense>
  );
};

export default ThankYouPage;
