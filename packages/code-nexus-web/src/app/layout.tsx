import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "codeNexus",
  description: "Framework agnostic code sandbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full overflow-hidden" lang="en">
      <body className={inter.className + " h-full flex flex-col"}>
        <Providers>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <SpeedInsights></SpeedInsights>
          <div className="app-background absolute bg-slate-300 w-full h-full top-0 left-0 opacity-40 -z-10"></div>
          <Header></Header>
          <main className="flex relative min-h-0 flex-col">
            <section className="flex flex-col gap-6 center items-center p-4 md:px-14 sm:px-12 overflow-auto">
              {children}
            </section>
          </main>
        </Providers>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
