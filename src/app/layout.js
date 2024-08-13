import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List Next",
  description: "Website List Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
