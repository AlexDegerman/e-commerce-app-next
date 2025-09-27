import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "e-commerce-app-next",
  description: "Modern e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center flex-col text-white bg-gray-100 min-h-screen">
        <Header />
        <div className="bg-white w-[95%] max-w-[750px] min-w-[280px] flex flex-col items-center min-h-[200px] flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
