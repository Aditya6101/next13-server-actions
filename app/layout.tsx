import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Server Actions 🚀",
  description: "Just playing with server actions and Vercel's Databases",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${inter.className} min-h-screen md:px-10 px-4`}>
          {children}
        </main>
      </body>
    </html>
  );
}
