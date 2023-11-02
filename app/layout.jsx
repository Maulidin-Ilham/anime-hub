import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Hub",
  description: "The Best Anime Page in The World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
