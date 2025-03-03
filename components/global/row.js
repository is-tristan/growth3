import styles from "@/styles/global/row.module.scss";

export default function Row({ center, heading, subheading, noPaddingTop, noPaddingBottom }) {

    return (

        <>

            <section
                className={`row ${styles.row} ${center ? styles.center : undefined}`}
            >

                <div className={`wrapper 
                    ${styles.wrapper}
                    ${noPaddingTop ? styles.noPaddingTop : undefined}
                    ${noPaddingBottom ? styles.noPaddingBottom : undefined}
                    `}>

                    <div className={styles.headingWrapper}>

                        <h2>{heading}<span className="green">.</span></h2>

                        <p>{subheading}</p>

                    </div>{/* .headingWrapper */}

                </div> {/* .wrapper */}

            </section>  {/* .row */}

        </>

    )

};