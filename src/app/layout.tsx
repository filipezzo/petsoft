import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petsoft",
  description: "app para você gerenciar os dogs que estão ao seus cuidados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} text-sm min-h-screen text-zinc-900 bg-[#E5E8EC] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
