import styles from "@/styles/pages/contact.module.scss";
import ContactForm from "@/components/forms/contactForm";
import Marquee from "@/components/misc/marquee";

import { Email } from "@carbon/icons-react";
import { Phone } from "@carbon/icons-react";

export default function ContactUs() {

    return (

        <div className={`row banner flexC ${styles.contactRow}`}>

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

                            <p className="green">He'll get back to you as soon as possible</p>

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

            <Marquee className="bDark"/>

        </div>
    )

}