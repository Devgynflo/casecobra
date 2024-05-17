"use client";

import { OrderStatus } from "@prisma/client";

import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { changeOrderStatus } from "./actions";

interface StatusDropdownProps {
  id: string;
  orderStatus: OrderStatus;
}

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "En préparation",
  fullfilled: "Envoie en cours",
  shipped: "Envoyé",
};

export const StatusDropdown: NextPage<StatusDropdownProps> = ({
  orderStatus,
  id,
}) => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="w-52 items-center justify-between"
          variant={"outline"}
        >
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0">
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenuItem
            onClick={() => mutate({ id, newStatus: status as OrderStatus })}
            key={status}
            className={cn(
              "flex cursor-default items-center gap-1 p-2.5 text-sm hover:bg-zinc-100",
              orderStatus === status && "bg-zinc-100",
            )}
          >
            <Check
              className={cn(
                "mr-2 size-4 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0",
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
