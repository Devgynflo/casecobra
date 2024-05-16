import { DesignPreview } from "@/components/preview/design-preview";
import prisma from "@/lib/db";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface PreviewPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const PreviewPage: NextPage<PreviewPageProps> = async ({ searchParams }) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await prisma.configuration.findUnique({
    where: {
      id,
    },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default PreviewPage;
