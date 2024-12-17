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
  metadataBase: new URL('https://growth3.co'),
  title: "Your Web3 Consultancy | Growth3",
  description: "We help crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.",
  keywords: "web3, crypto, consultancy",
  openGraph: {
    title: "Home | Growth3",
    description: "We help crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.",
    images: [
      {
        url: "/about-og.jpg",
        width: 800,
        height: 600,
        alt: "Growth3.co Image",
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
