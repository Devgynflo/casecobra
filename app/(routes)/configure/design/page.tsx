import { DesignConfigurator } from "@/components/design/design-configurator";
import prisma from "@/lib/db";
import { NextPage } from "next";
import { notFound } from "next/navigation";

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const DesignPage: NextPage<DesignPageProps> = async ({ searchParams }) => {
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
    notFound();
  }

  const { height, width, imageUrl } = configuration;

  return (
    <DesignConfigurator
      configId={id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
};

export default DesignPage;
