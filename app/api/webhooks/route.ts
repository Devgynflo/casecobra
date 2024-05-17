import prisma from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import OrderReceivedEmail from "@/components/emails/order-received-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    if (!signature) {
      return new Response("Signature invalide", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK!,
    );

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Email manquant");
      }

      const session = event.data.object as Stripe.Checkout.Session;
      //TODO => fetch phone number
      console.log("🚀 ~ POST ~ session:", session);
      // preview/actions.ts
      // metadata fournies lors de la fonction createCheckoutSession()
      const { orderId, userId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error("Metadata Invalides");
      }

      const billingAddress = session.customer_details?.address;
      const shippingAddress = session.customer_details?.address;

      const updatedOrder = await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details?.name! || "",
              city: shippingAddress?.city! || "",
              street: shippingAddress?.line1! || "",
              postalCode: shippingAddress?.postal_code! || "",
              country: shippingAddress?.country! || "",
              phoneNumber: session.customer_details?.phone! || "",
              state: shippingAddress?.state! || "FRANCE",
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details?.name! || "",
              city: billingAddress?.city! || "",
              street: billingAddress?.line1! || "",
              postalCode: billingAddress?.postal_code! || "",
              country: billingAddress?.country! || "",
              phoneNumber: session.customer_details?.phone! || "",
              state: billingAddress?.state! || "FRANCE",
            },
          },
        },
      });

      await resend.emails.send({
        from: "CoqueCobra <onboarding@resend.dev>",
        to: [event.data.object.customer_details.email],
        subject: "Merci pour votre commande",
        react: OrderReceivedEmail({
          orderId,
          orderDate: updatedOrder.createdAt.toLocaleDateString(),
          shippingAddress: {
            id: orderId,
            name: session.customer_details?.name! || "",
            city: shippingAddress?.city! || "",
            street: shippingAddress?.line1! || "",
            postalCode: shippingAddress?.postal_code! || "",
            country: shippingAddress?.country! || "",
            phoneNumber: session.customer_details?.phone! || "",
            state: shippingAddress?.state! || "FRANCE",
          },
        }),
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Quelque chose s'est mal passé",
        ok: false,
      },
      { status: 500 },
    );
  }
}
