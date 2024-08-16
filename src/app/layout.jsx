import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "300"] });

export const metadata = {
  title: "Anime List Next",
  description: "Website List Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
