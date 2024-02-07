import Footer from "@/components/helpComponents/footer/Footer";
import Navbar from "@/components/helpComponents/navbar/Navbar";
import { ThemeProvider } from "@/components/helpComponents/themeProvider/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messoapp",
  description: "This link is still for testing purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en h-full">
 <body className={cn("relative h-full font-sans antialiased  ", inter.className)}>
  <ThemeProvider   attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              
        <main className="relative flex flex-col min-h-screen ">
        <div className="mt-7"><Navbar/></div>
        <div className="flex-grow flex-1" >{children} </div>
        <div className="mt-7"><Footer/></div>
        </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
