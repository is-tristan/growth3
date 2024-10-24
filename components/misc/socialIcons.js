/**
 * Social Icons
 */
import styles from "@/styles/misc/socialIcons.module.scss";

// Icons
import { LogoFacebook } from "@carbon/icons-react";
import { LogoX } from "@carbon/icons-react";
import { LogoInstagram } from "@carbon/icons-react";
import { LogoLinkedin } from "@carbon/icons-react";

export default function SocialIcons( { className = "" } ) {

    return (

        <div className={`socialIcons ${className} ${styles.socialIcons}`}>

            <a className={styles.icon} href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><LogoFacebook /></a>

            <a className={styles.icon} href="#" target="_blank" rel="noopener noreferrer" aria-label="X formerly Twitter"><LogoX /></a>

            <a className={styles.icon} href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><LogoInstagram /></a>

            <a className={styles.icon} href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LogoLinkedin /></a>

        </div>

    );
}