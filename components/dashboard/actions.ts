"use server";

import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";

interface changeOrderStatusProps {
  id: string;
  newStatus: OrderStatus;
}

export const changeOrderStatus = async ({
  id,
  newStatus,
}: changeOrderStatusProps) => {
  await prisma.order.update({
    where: {
      id,
    },
    data: {
      status: newStatus,
    },
  });
};
