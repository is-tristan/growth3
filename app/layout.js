import localFont from "next/font/local";
import "./globals.scss";
import TopBar from "@/components/global/topbar";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const prophet = localFont({
  src: "./fonts/abc-prophet-bold.woff2",
  variable: "--font-prophet",
  weight: "700",
});

const sora = localFont({
  src: "./fonts/sora-variable.woff2",
  variable: "--font-sora",
  weight: "100 900",
});

export const metadata = {
  title: "Your Web3 Consultancy | Growth3",
  description: "Learn more about our Web3 consultancy services.",
  keywords: "web3, crypto, consultancy",
  openGraph: {
    title: "Home | Growth3",
    description: "Learn more about our Web3 consultancy services.",
    images: [
      {
        url: "/about-og.jpg",
        width: 800,
        height: 600,
        alt: "About Us Image",
      },
    ],
  },
};
export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <head />

      <body className={`${prophet.variable} ${sora.variable}`}>

        <TopBar />

        <Header />

        {children}

        <Footer />

      </body>

    </html>

  );

}
