// page.js
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/pages/home.module.scss";

// Lotties
import LottieAnimation from "@/components/misc/LottieAnimation";
import coverAnimation from "@/public/animations/background.json";

// Icons
import { ArrowUpRight } from "@carbon/icons-react";
import { Chat } from "@carbon/icons-react";
import { MagicWandFilled } from "@carbon/icons-react";

// Images
import homeAboutImage from "@/public/images/home_mountain.png"

// Components
import Marquee from "@/components/misc/marquee";
import Counter from "@/components/misc/counter";
import PortfolioSlider from "@/components/portfolioSlider/import";
import TestimonialSlider from "@/components/testimonialSlider/import";
import ContactCTA from "@/components/global/contactCTA";


export default function Home() {

  return (

    <main id="content">

      <div id="banner" className={`row banner homeBanner ${styles.homeBanner}`}>

        <LottieAnimation animationData={coverAnimation} loop={true} autoplay={true} className={styles.coverLottie} />

        <div className="wrapper">

          <div className="heading">

            <h1>The web<sup>3</sup> consultancy for <span className="green">market movers</span>.</h1>

            <p>We help crypto and web3 companies build powerful brands, craft compelling narratives, and create innovative web solutions.</p>

          </div> {/* .heading */}

          <div className="buttons">

            <Link className="btn fGreen" href="/modbox/">

              <span>Explore ModBox</span>

              <ArrowUpRight />

            </Link> {/* .btn.fGreen */}

            <Link className="btn tLight" href="/contact/">

              <span>Get in Touch</span>

              <Chat/>

            </Link> {/* .btn.tLight */}

          </div> {/* .buttons */}

        </div> {/* .wrapper */}

      </div> {/* #banner */}

      <div id="dualMarquee" className={`row ${styles.dualMarquee}`}>

        <Marquee className="bLight tilted tRight"/>

        <Marquee className="bGreen tilted tLeft" crossColor="light"/>

      </div> {/* #dualMarquee */}

      <div id="aboutUs" className="row aboutRow" >

        <div className="wrapper dualCols">

          <div className="col imageCol">

            <Image 
            
            src={homeAboutImage} 
            alt="A picutre of snowy mountain peaks"
            fill
            placeholder="blur" />
          </div> {/* .imageCol */}

          <div className="col contentCol">

            <div className="heading">

              <h2 className="leftOverlap">Taking your web<sup>3</sup> project to new heights<span className="green">.</span></h2>

              <p>At Growth3, we believe in the transformative power of web3 technology. Founded by a team of passionate blockchain enthusiasts and marketing experts, our mission is to empower crypto and web3 companies to thrive in an ever-evolving digital landscape.</p>

              <p>In a world where decentralization is reshaping industries, we envision a future where innovative projects can reach their full potential. We are dedicated to helping our clients build strong brands, connect with their communities, and create impactful online experiences that resonate with users.</p>

              <p><strong>Let us help you unlock new opportunities, amplify your message, and achieve sustainable growth.</strong></p>

            </div> {/* .heading */}

            <div className="buttons">

              <Link className="btn fGreen" href="/contact/">

                <span>Let's Chat</span>

                <Chat />

              </Link> {/* .btn.fGreen */}

              <Link className="btn tLight" href="/portfolio/">

                <span>Explore ModBox</span>

                <MagicWandFilled />

              </Link> {/* .btn.tLight */}

            </div> {/* .buttons */}

          </div> {/* .contentCol */}

        </div> {/* .dualCols */}

      </div> {/* #aboutUs */}

      <div id="counters" className="row cta counters">

        <div className="wrapper tripCols">

          <div className={styles.counter}>

            <Counter target={693} duration={1000} incrementValue={100} />

            <p>Websites deployed</p>

          </div> {/* .counter */}

          <div className={styles.counter}>

            <Counter target={96} duration={1000} incrementValue={50} afterSymbol={"%"} />

            <p>Would recommend us*</p>

          </div> {/* .counter */}

          <div className={styles.counter}>

            <Counter target={324} duration={1000} incrementValue={100} />

            <p>Total campaigns</p>

          </div> {/* .counter */}

        </div> {/* .tripCols */}

      </div> {/* #counters */}

      <div id="portfolio" className="fsSlider slider">

        <div className="heading centered">

          <h2>Explore our award winning creativity<span className="green">.</span></h2>

        </div>

        <PortfolioSlider />

      </div> {/* #portfolio */}

      <div id="testimonials" className="slider">

        <div className="wrapper">

          <div className="heading centered">

            <h2>We've helped over <span className="green">100+</span>
              innovative companies<span className="green">.</span></h2>

          </div> {/* .heading */}

          <TestimonialSlider />

        </div> {/* .wrapper */}

      </div> {/* #testimonials */}

      <ContactCTA />

    </main>

  );

}
