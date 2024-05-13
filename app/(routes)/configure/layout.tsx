import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Steps } from "@/components/steps";
import { NextPage } from "next";

interface ConfigureLayoutProps {
  children: React.ReactNode;
}

const ConfigureLayout: NextPage<ConfigureLayoutProps> = ({ children }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default ConfigureLayout;
