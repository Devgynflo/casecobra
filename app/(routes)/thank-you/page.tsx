import { NextPage } from "next";

interface ThankYouPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const ThankYouPage: NextPage<ThankYouPageProps> = ({ searchParams }) => {
  const { orderId } = searchParams;
  return (
    <div>
      <p>Tu as réussi , voici ta commande {orderId}</p>
    </div>
  );
};

export default ThankYouPage;
