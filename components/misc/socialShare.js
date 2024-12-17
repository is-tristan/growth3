import styles from "@/styles/misc/socialShare.module.scss";
import { LogoFacebook } from "@carbon/icons-react";
import { LogoX } from "@carbon/icons-react";
import { LogoLinkedin } from "@carbon/icons-react";

export default function SocialShare ({ url, title }) {

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return (

        <div className={styles.socialShare}>

            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
            >

                <LogoFacebook />

            </a>

            <a
                href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LogoX />

            </a>

            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
            >
                <LogoLinkedin />

            </a>

        </div>

    );

};