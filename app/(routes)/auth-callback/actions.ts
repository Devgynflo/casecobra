"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Utilisateur manquant");
  }

  if (!user.id || !user.email) {
    throw new Error("Données utilisateur invalides");
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
      },
    });
  }

  return { success: true };
};
