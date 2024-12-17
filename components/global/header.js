// Header.js
import Link from "next/link";
import styles from "@/styles/global/header.module.scss";

// Icons
import { Chat } from "@carbon/icons-react";
import { ArrowUpRight } from "@carbon/icons-react";

export default function Header() {

    return (

        <header id="header" className={styles.header}>

            <div className={styles.wrapper}>

                <div className={styles.logo}>

                    <Link href="/">Growth<sup>3</sup></Link>

                </div> {/* .logo */}

                <div className={styles.actions}>

                    <Link className={`btn fGreen ${styles.headerBtn}`} href="/modbox/">

                        <span className="hiddenS hiddenM">Explore ModBox</span>

                        <span className="hiddenL hiddenXL">ModBox</span>

                        <ArrowUpRight />

                    </Link> {/* .btn.fGreen */}

                    <Link className={`btn tLight ${styles.headerBtn}`} href="/contact/">

                        <span className="hiddenS hiddenM">Get in Touch</span>

                        <span className="hiddenL hiddenXL">Contact</span>

                        <Chat />

                    </Link> {/* .btn.tLight */}

                    <div className={styles.hamburger}>

                        <span className="toggle"></span>

                    </div>

                </div>

            </div> {/* .wrapper */}

        </header>

    );
}