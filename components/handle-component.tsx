import { NextPage } from "next";

interface HandleComponentProps {}

export const HandleComponent: NextPage<HandleComponentProps> = ({}) => {
  return (
    <div className="size-5 rounded-full border-zinc-200 bg-white shadow-border transition hover:bg-primary" />
  );
};
