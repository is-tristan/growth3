import Header from "@/components/global/header";
import Banner from "@/components/global/banner";
import Row from "@/components/global/row";
import Web from "@/components/queries/web/web";
import ContactCTA from "@/components/global/contactCTA";

export const metadata = {
    metadataBase: new URL('https://growth3.co/web'),
    title: "Web Development Portfolio | Growth3",
    description: "Explore our award-winning web development projects. We build innovative, responsive websites from the ground up.",
    keywords: "web development, award winning websites, responsive design, UI/UX, creative web solutions, Growth3",
    openGraph: {
        title: "Web Development Portfolio | Growth3",
        description: "Discover our collection of award-winning websites and digital experiences crafted by Growth3's expert team.",
        url: "https://growth3.co/web",
        siteName: "Growth3",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Growth3 Web Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Portfolio | Growth3",
        description: "Explore our award-winning web development projects.",
        images: ["/og.jpg"],
    },
};

export default function Page() {

    return (

        <>
            <Header />

            <Banner background="../images/web-cover.webp" heading="Web at" subheading="Explore our web projects." />

            <Row heading="Explore our award winning creativity" subheading="View some of the live websites we've built from the ground up."/>

            <Web />

            <ContactCTA />

        </>

    )

}