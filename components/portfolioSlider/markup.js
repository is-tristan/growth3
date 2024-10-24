// app/components/PortfolioSlider.jsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/sliders/portfolioSlider.module.scss";
import { Launch } from "@carbon/icons-react";
import "keen-slider/keen-slider.min.css";
import dotStyles from "@/styles/sliders/dotNav.module.scss";

export default function PortfolioSlider({ portfolioItems }) {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
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

        {portfolioItems.map((item) => (

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

              <h4>{item.title}</h4>

              {item.portfolioFields?.websiteLink && (

                <a
                  className="btn tLight"
                  href={item.portfolioFields.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <span>View website</span>

                  <Launch />

                </a>
                
              )}

            </div> {/* .content */}

          </div> 

        ))}

      </div> {/* .keen-slider */}

      <div className={dotStyles.keenDots}>

        {portfolioItems.map((_, idx) => (
          
          <button
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
