import styles from "@/styles/rows/contactCTA.module.scss";
import ContactForm from "@/components/forms/contactForm";
import SocialIcons from "../misc/socialIcons";

// Icons
import { Email } from "@carbon/icons-react";
import { Phone } from "@carbon/icons-react";
import { Time } from "@carbon/icons-react";
import { LocationCompany } from "@carbon/icons-react";

export default function ContactCTA() {

    return (

        <div className={`row cta ${styles.contactForm}`}>

            <div className={`wrapper ${styles.contactWrapper}`}>

                <h2><span className="green">Ready</span> to take action<span className="green">?</span> So are we<span className="green">.</span></h2>

                <div className={`${styles.formWrapper}`}>

                    <ContactForm />

                </div>  {/* .formWrapper */}

                <div className={`${styles.contactInfo}`}>

                    <div className={styles.contactItems}>

                        <div className={styles.contactItem}>

                            <div className={styles.icon}>

                                <Email />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="small"><strong>Email Address</strong></p>

                                <a href="mailto:hi@growth3.agency" target="_blank" rel="noopener noreferrer">hi@growth3.agency</a>

                            </div> {/* .content */}

                        </div> {/* .contactItem */}

                        <div className={styles.contactItem}>

                            <div className={styles.icon}>

                                <Phone />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="small"><strong>Phone Number</strong></p>

                                <a href="tel:+441234567890" target="_blank" rel="noopener noreferrer">+44 123 4567 890</a>

                            </div> {/* .content */}

                        </div> {/* .contactItem */}

                        <div className={styles.contactItem}>

                            <div className={styles.icon}>

                                <Time />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="small"><strong>Opening Hours</strong></p>

                                <p>Mon - Fri: 9am - 5pm</p>

                            </div> {/* .content */}

                        </div> {/* .contactItem */}

                        <div className={styles.contactItem}>

                            <div className={styles.icon}>

                                <LocationCompany />

                            </div> {/* .icon */}

                            <div className={styles.content}>

                                <p className="small"><strong>Based out of</strong></p>

                                <p>London, U.K.</p>

                            </div> {/* .content */}

                        </div> {/* .contactItem */}

                    </div> {/* .contactItems */}

                    <h3>Checkout out our <span className="green">socials:</span></h3>

                    <SocialIcons className={styles.footerSocials} />

                </div> {/* .contactInfo */}

            </div> {/* .wrapper */}

        </div>

    );

}