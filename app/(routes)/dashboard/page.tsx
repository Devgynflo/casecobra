import { StatusDropdown } from "@/components/dashboard/status-dropdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import { formatPrice } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextPage } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface DashboardPageProps {}

const DashboardPage: NextPage<DashboardPageProps> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }

  const orders = await prisma.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)), // last 7 days
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
    },
  });

  const lastwWeekSum = await prisma.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)), // last 7 days
      },
    },
    _sum: {
      amount: true,
    },
  });

  const lastMonthSum = await prisma.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)), // last month
      },
    },
    _sum: {
      amount: true,
    },
  });

  const WEEKLY_GOAL = 500;
  const MONTHLY_GOAL = 2000;

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Cette Semaine</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastwWeekSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Objectif: {formatPrice(WEEKLY_GOAL)}
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastwWeekSum._sum.amount ?? 0) * 100) / WEEKLY_GOAL}
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Ce Mois</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastMonthSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Objectif: {formatPrice(MONTHLY_GOAL)}
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastMonthSum._sum.amount ?? 0) * 100) / MONTHLY_GOAL}
                />
              </CardFooter>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Commande en cours
          </h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Date d&apos;achat
                </TableHead>
                <TableHead className="text-right ">Montant</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      <Link href={`mailto: ${order.user.email}`}>
                        {order.user.email}
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="hidden sm:table-cell">
                      <StatusDropdown
                        id={order.id}
                        orderStatus={order.status}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="hidden sm:table-cell">
                      {order.createdAt.toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatPrice(order.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
