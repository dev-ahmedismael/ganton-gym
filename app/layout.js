import Header from "@/components/header/Header";
import { Inter, Oswald } from "next/font/google";
import Footer from "@/components/footer/Footer";
import "@/styles/globals.css";
import Theme from "./theme";

const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "GANTON GYM",
  description: "THE BEST GYM IN LOS SANTOS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Header />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
