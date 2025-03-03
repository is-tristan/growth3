// components/testimonialSlider/TestimonialSlider.jsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import defaultImage from "@/public/images/default-testimonial.webp";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import styles from "@/styles/sliders/testimonialSlider.module.scss";
import "keen-slider/keen-slider.min.css";
import dotStyles from "@/styles/sliders/dotNav.module.scss";
import arrowStyles from "@/styles/sliders/arrowNav.module.scss";

// Previous Arrow Component
function PrevArrow({ onClick }) {
  return (
    <div className={`${arrowStyles.keenArrow} ${arrowStyles.keenPrev}`} onClick={onClick}>
      <ChevronLeft />
    </div>
  );
}

// Next Arrow Component
function NextArrow({ onClick }) {
  return (
    <div className={`${arrowStyles.keenArrow} ${arrowStyles.keenNext}`} onClick={onClick}>
      <ChevronRight />
    </div>
  );
}

export default function TestimonialSlider({ testimonialItems }) {

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Update active slide
    },
    breakpoints: {
      "(max-width: 767px)": {
        slides: { perView: 1 },

      },
    },
  });

  return (

    <div className={styles.sliderContainer}>

      <div ref={sliderRef} className="keen-slider">

        {testimonialItems.map((item) => (

          <div className={`keen-slider__slide ${styles.item}`} key={item.id}>

            <div className={styles.image}>

              <Image
                src={
                  item.featuredImage?.node?.mediaItemUrl || defaultImage
                }
                alt={item.testimonialFields.name || "Testimonial Image"}
                width={512}
                height={512}
                quality={75}
              />

            </div> {/* .image */}

            <div className={styles.content}>
              
              <p>
                <span className="green">"</span>
                {item.testimonialFields.testimonialText}
                <span className="green">"</span>
              </p>

              <div className={styles.meta}>

                <div className={styles.quoted}>

                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" > <rect width="64" height="64" /> <path d="M22.1307 39.8219C20.7443 38.3494 20 36.6979 20 34.0208C20 29.3099 23.307 25.0876 28.1162 23L29.3182 24.8547C24.8293 27.2829 23.9518 30.4338 23.6018 32.4204C24.3246 32.0463 25.2708 31.9157 26.1982 32.0019C28.6263 32.2266 30.5403 34.22 30.5403 36.6979C30.5403 37.9473 30.044 39.1456 29.1605 40.0291C28.277 40.9125 27.0788 41.4088 25.8294 41.4088C25.1385 41.4028 24.4556 41.2594 23.8206 40.987C23.1856 40.7145 22.6112 40.3185 22.1307 39.8219ZM35.5904 39.8219C34.204 38.3494 33.4597 36.6979 33.4597 34.0208C33.4597 29.3099 36.7668 25.0876 41.5759 23L42.7779 24.8547C38.289 27.2829 37.4115 30.4338 37.0615 32.4204C37.7843 32.0463 38.7305 31.9157 39.6579 32.0019C42.086 32.2266 44 34.22 44 36.6979C44 37.9473 43.5037 39.1456 42.6202 40.0291C41.7367 40.9125 40.5385 41.4088 39.2891 41.4088C38.5982 41.4028 37.9153 41.2594 37.2803 40.987C36.6453 40.7145 36.0709 40.3185 35.5904 39.8219Z" fill="var(--dark)" /> </svg>

                  <div className={styles.name}>

                    <h5 className="green">{item.testimonialFields.name}</h5>

                    <p>{item.testimonialFields.position}</p>

                  </div> {/* .name */}

                </div> {/* .quoted */}

                {item.testimonialFields.companyLogo?.node?.mediaItemUrl && (
                  <Image
                    src={
                      item.testimonialFields.companyLogo.node.mediaItemUrl ||
                      defaultImage
                    }
                    alt={item.title || "Company Logo"}
                    className={styles.companyLogo}
                    width={192}
                    height={64}
                    quality={75}
                  />
                )}

              </div> {/* .meta */}

            </div> {/* .content */}

          </div>

        ))}

      </div>

      {/* Custom Arrows */}
      <PrevArrow onClick={() => instanceRef.current?.prev()} />
      <NextArrow onClick={() => instanceRef.current?.next()} />

      <div className={dotStyles.keenDots}>

      {testimonialItems.map((_, idx) => (
        
        <button
          aria-label="Navigation for testimonials"
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
