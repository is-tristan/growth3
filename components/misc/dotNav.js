import styles from "@/styles/sliders/dotNav.module.scss"

export default function KeenDotNav() {

    return (

        <div className={styles.dotsContainer}>

            {portfolioItems.map((_, idx) => (

                <button
                    key={idx}
                    className={`${styles.dot} ${currentSlide === idx ? styles.active : ""
                        }`}

                    onClick={() => instanceRef.current?.moveToIdx(idx)}

                />

            ))}

        </div>

    );

}