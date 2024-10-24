import Link from "next/link";
import styles from "@/styles/global/topbar.module.scss"

export default function TopBar() {

    return (

        <div className={styles.topbar}>

            <div className={styles.wrapper}>

                <p>Interested in growing your web3 business? Get started today by <Link href="/contact" className="link">clicking here</Link>.</p>

            </div> {/* .wrapper */}

        </div>

    );
}