import Header from "@/components/global/header"
import styles from "@/styles/pages/marketing-inner.module.scss"
import loading from "@/styles/pages/loading-marketing-inner.module.scss";

export default function skeleton() {

    return (

        <>
            <Header />

            <article className={`${styles.row} ${loading.row}`}>

                <div className={`${styles.header} ${loading.banner}`}>

                    <div className={`${styles.wrapper} wrapper`}>

                        <h1 className={loading.heading}></h1>

                    </div> {/* .wrapper */}

                </div> {/* .header */}

                <div className={`${styles.wrapper} wrapper`}>

                    <div className={styles.introduction}>

                        <div className={`${styles.heading} heading`}>

                            <h2 className={loading.heading}></h2>

                            <div className={loading.textWrapper}>

                                <div className={loading.text}></div>

                                <div className={loading.text}></div>

                                <div className={loading.text}></div>

                            </div> {/* .textWrapper */}

                        </div> {/* .heading */}

                        <div className={styles.cols}>

                            <div className={`${styles.col} ${loading.loadingCol}`}></div> {/* .col */}

                            <div className={`${styles.col} ${loading.loadingCol}`}></div> {/* .col */}

                            <div className={`${styles.col} ${loading.loadingCol}`}></div> {/* .col */}

                        </div> {/* .cols */}

                    </div> {/* .introduction */}

                </div> {/* .wrapper */}

            </article> {/* .row */}

        </>

    )

} 
