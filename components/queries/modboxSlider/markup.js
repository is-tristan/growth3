"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

// Icons
import { ArrowRight } from "@carbon/icons-react";
import { Calendar } from "@carbon/icons-react";

// Styles
import styles from "@/styles/sliders/modboxSlider.module.scss";
import dotStyles from "@/styles/sliders/dotNav.module.scss";

export default function ModBoxSlider({ modboxItems }) {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      "(max-width: 1399px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(max-width: 767px)": {
        slides: { perView: 1 },
        renderMode: "performance",
      },
    },
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Update active slide
    },
    autoplay: {
      interval: 3500,
      pauseOnMouseEnter: true,
    },
  });

  return (

    <div>

      <div ref={sliderRef} className="keen-slider">

        {modboxItems.map((item) => (

          <div key={item.id} className={`keen-slider__slide ${styles.item}`}>

            <div className={styles.image}>

              {item.featuredImage?.node?.mediaItemUrl && (

                <Image
                  src={item.featuredImage.node.mediaItemUrl}
                  alt={item.title || "Portfolio item"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                />

              )}

            </div> {/* .image */}

            <div className={styles.content}>

              <div className={styles.meta}>

                <div className={styles.date} style={{display: "none"}}>

                  <Calendar />

                  <span>{item.date ? new Date(item.date).toLocaleDateString() : 'No date'}</span>

                </div> {/* .date */}

              </div> {/* .meta */}

              <h3>{item.title}</h3>

              <Link className="btn tLight" href={`/modbox/news/${item.slug}`}>

                  <span>Read More</span>

                  <ArrowRight />

              </Link> {/* .btn */}

            </div> {/* .content */}

          </div> 

        ))}

      </div> {/* .keen-slider */}

      <div className={dotStyles.keenDots}>

        {modboxItems.map((_, idx) => (
          
          <button
            aria-label="Navigation for posts"
            key={idx}
            className={`${dotStyles.dot} ${
              currentSlide === idx ? dotStyles.active : ""
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />

        ))}

      </div> {/* .keenDots */}

    </div>

  );

}
