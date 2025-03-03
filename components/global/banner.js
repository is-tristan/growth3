import styles from "@/styles/global/banner.module.scss";

export default function Banner({ background, heading, subheading }) {

    return (

        <>

            <div className={styles.banner}>

                <div className={styles.bannerWrapper} style={{ backgroundImage: `url(${background})` }}>

                    <div className={`headingWrapper ${styles.headingWrapper}`}>

                        <h1>{heading} <span className="green">Growth<sup>3</sup></span></h1>

                        <p>{subheading}</p>

                    </div> {/* .headingWrapper */}

                </div> {/* .bannerWrapper */}

            </div> {/* .banner */}

        </>

    )

}