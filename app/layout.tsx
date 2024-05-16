import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import TanstackProvider from "@/providers/tanstack-provider";
import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coquecobra-shop",
  description: "Ecommerce coque de téléphone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={recursive.className}>
        <Navbar />
        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">
            <TanstackProvider>{children}</TanstackProvider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
