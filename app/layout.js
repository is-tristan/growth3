import localFont from "next/font/local";
import "./globals.scss";
import TopBar from "@/components/global/topbar";
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
  title: "Growth3 | Web3 & Crypto Consultancy",
  description: "Expert consultancy helping crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.",
  keywords: "web3, crypto, blockchain, consultancy, branding, marketing, development, web design, NFT, DeFi",
  openGraph: {
    title: "Growth3 | Web3 & Crypto Consultancy",
    description: "Expert consultancy helping crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.",
    url: "https://growth3.co",
    siteName: "Growth3",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Growth3 - Web3 Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth3 | Web3 & Crypto Consultancy",
    description: "Expert consultancy helping crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.",
    images: ["/about-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <head />

      <body className={`${prophet.variable} ${sora.variable}`}>

        {children}

        <Footer />

      </body>

    </html>

  );

}
