import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurantes, Hoteles y Viñedos | La Ruta del Vino Ensenada",
  description:
    "La Ruta del Vino, es el nombre que se le da al conjunto de viñedos, restaurantes y hoteles en el Valle de Guadalupe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
