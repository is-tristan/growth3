import styles from "@/styles/pages/contact.module.scss";
import ContactForm from "@/components/forms/contactForm";
import Marquee from "@/components/misc/marquee";
import { Email } from "@carbon/icons-react";
import { Phone } from "@carbon/icons-react";
import Header from "@/components/global/header";

export const metadata = {
    metadataBase: new URL('https://growth3.co'),
    title: "Contact Growth3 | Web3 Consultancy & Services",
    description: "Reach out to Growth3 for web3 and crypto consultancy services. Our team is ready to discuss your project needs, partnerships, or answer any questions about our services.",
    keywords: "web3 consultancy, crypto services, blockchain experts, contact Growth3, web3 project assistance, crypto partnership",
    openGraph: {
        title: "Contact Growth3 | Web3 Consultancy & Services",
        description: "Reach out to our team of web3 experts. We're ready to discuss your project needs, partnerships, or answer any questions about our services.",
        url: 'https://growth3.co/contact',
        siteName: 'Growth3',
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Growth3 Contact Page",
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact Growth3 | Web3 Consultancy & Services",
        description: "Get in touch with our web3 experts today",
        images: ["/og.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function ContactUs() {

    return (

        <>
            <Header />

            <section className={`row flexC ${styles.contactRow}`}>

                <div className={`wrapper ${styles.wrapper}`}>

                    <div className={styles.formWrapper}>

                        <div className="heading">

                            <h1 className={styles.headingText}><span className="green">Ready</span> to take action<span className="green">?</span> So are we<span className="green">.</span></h1>

                            <p>Whether you have questions about our services, want to discuss a potential partnership, or need assistance with your web3 project, our team is here to help.</p>

                        </div>

                        <ContactForm />

                    </div>

                    <div className={styles.contactInfo}>

                        <div className={styles.contactBox}>

                            <div className={styles.icon}>

                                <Email />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="green">E-mail our head of operations</p>

                                <a className={`link ${styles.link}`} href="mailto:harry@growth3.co" aria-label="Email us">harry@growth3.co</a>

                                <p className="green">He"ll get back to you as soon as possible</p>

                            </div> {/* .content */}

                        </div> {/* .contactBox */}

                        <div className={styles.contactBox}>

                            <div className={styles.icon}>

                                <Phone />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="green">Call us during the week</p>

                                <a className={`link ${styles.link}`} href="tel:+447814176657" aria-label="Phone us">+44 7814 176657</a>

                                <p className="green">Monday-Friday: 9-5PM</p>

                            </div> {/* .content */}

                        </div> {/* .contactBox */}

                    </div> {/* .contactInfo */}

                </div> {/* .wrapper */}

                <Marquee className="bDark" />

            </section> {/* .contactRow */}

        </>
    )

}