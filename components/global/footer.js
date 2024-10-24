import styles from "@/styles/global/footer.module.scss";
import SocialIcons from "../misc/socialIcons";
import Link from "next/link";

export default function Footer() {
    
    return (

        <footer id="footer" className={`row ${styles.footer}`}>

            <div className={`wrapper ${styles.footerWrapper}`}>

                <div className={styles.logo}>

                    <Link href="/">Growth<sup>3</sup></Link>
                    
                </div>

                <div className={styles.links}>

                    <div className={styles.policies}>

                        <Link className="link" href="/privacy-policy/">Privacy Policy</Link>

                        <Link className="link" href="/terms-and-conditions/">Website Terms</Link>

                    </div>

                    <div className={styles.footerSocialIcons}>

                        <SocialIcons />

                    </div>

                </div>

            </div>

        </footer>

    );

}