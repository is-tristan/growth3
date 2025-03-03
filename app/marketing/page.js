import Header from "@/components/global/header";
import Banner from "@/components/global/banner"
import Row from "@/components/global/row"
import Marketing from "@/components/queries/marketing/marketing"
import ContactCTA from "@/components/global/contactCTA"

export const metadata = {
    metadataBase: new URL('https://growth3.co'),
    title: "Marketing Services | Growth3 | Award-Winning Solutions",
    description: "Explore Growth3's award-winning marketing projects and strategies that drive results for businesses like yours.",
    keywords: "marketing services, digital marketing, award-winning marketing, creative campaigns, growth marketing, brand development, marketing strategy",
    openGraph: {
        title: "Marketing Services | Growth3 | Award-Winning Solutions",
        description: "Explore Growth3's award-winning marketing projects and strategies that drive results for businesses like yours.",
        url: "https://growth3.co/marketing",
        type: "website",
        images: [
            {
                url: "/images/marketing-cover.webp", // Using your banner image for consistency
                width: 1200,
                height: 630,
                alt: "Growth3 Marketing Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Marketing Services | Growth3",
        description: "Explore Growth3's award-winning marketing projects that drive results.",
        images: ["/images/marketing-cover.webp"],
    },
};

export default function Page() {

    return (

        <>

            <Header />

            <Banner heading="Marketing at" subheading="Explore our marketing projects." background="../images/marketing-cover.webp" />

            <Row heading="See how we've helped companies like yours" subheading="Take a look at some of the projects we've worked on."/>

            <Marketing />

            <ContactCTA />

        </>
    )

};