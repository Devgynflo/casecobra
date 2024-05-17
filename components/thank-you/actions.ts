"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Vous devez être connecté");
  }

  if (!user.id || !user.email) {
    throw new Error("Vous devez être connecté");
  }

  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: user.id,
    },
    include: {
      billingAddress: true,
      shippingAddress: true,
      configuration: true,
      user: true,
    },
  });

  if (!order) {
    throw new Error("Cette commande n'existe pas");
  }

  if (order.isPaid) {
    return order;
  } else {
    return false;
  }
};
