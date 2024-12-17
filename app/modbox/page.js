import styles from "@/styles/pages/modbox.module.scss";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/misc/marquee";
import ModboxSlider from "@/components/modboxSlider/import";
import XFeed from "@/components/misc/XFeed";

// Icons
import { ArrowUpRight } from "@carbon/icons-react";
import { Portfolio } from "@carbon/icons-react";
import { Chat } from "@carbon/icons-react";

// Images
import bannerBg from "@/public/backgrounds/background_sandy.webp";
import aboutImage from "@/public/images/modbox_about.webp";
import dotsBg from "@/public/backgrounds/background_dots.webp"

export const metadata = {
    metadataBase: null,
    title: "Modbox | Growth3",
    description: "We specialise in driving growth and success for Web3 projects through expert community management and strategic marketing solutions.",
    keywords: "web3, crypto, consultancy",
    openGraph: {
        images: '/og.jpg',
    },
};

export default function ModBox() {

    return (

        <main id="content">

            <div id="banner"

                className={`row banner centered parallax ${styles.modboxBanner}`}

                style={{
                    backgroundImage: `url(${bannerBg.src})`,
                }}

            >

                <div className={`wrapper ${styles.wrapper}`}>

                    <div className="heading">

                        <h1>Join a growing community of <span className="green">web<sup>3</sup> specialists</span>.</h1>

                        <p>At ModBox, we provide expert community management and strategic marketing services to help Web3 projects scale effectively. </p>

                    </div> {/* .heading */}

                </div> {/* .wrapper */}

            </div> {/* .banner */}

            <div id="aboutUs" className={`row aboutRow ${styles.modboxAbout}`} style={{ backgroundImage: `url(${dotsBg.src})`, }}>

                <div className="wrapper dualCols">

                    <div className="col imageCol">

                        <Image

                            src={aboutImage}
                            alt="A picture of a road going off into the distance with clouds above."
                            fill
                            placeholder="blur" />

                    </div> {/* .imageCol */}

                    <div className="col contentCol">

                        <div className="heading">

                            <h2 className="leftOverlap">Web<sup>3</sup> community, growth, and strategic marketing solutions<span className="green">.</span></h2>

                            <p>Welcome to ModBox, where we specialise in driving growth and success for Web3 projects through expert community management and strategic marketing solutions. We understand that in the decentralised world, building engaged, loyal communities is crucial for long-term success. That's why we're committed to providing tailored solutions that accelerate your project's growth and help it scale in the fast-evolving Web3 space.</p>

                            <p>At ModBox, we believe in a personalised approach to every project we work with. Whether you're launching a new Web3 initiative or scaling an existing one, our focus is always on sustainable growth and fostering a community that genuinely believes in your vision. With years of experience and a deep understanding of the Web3 ecosystem, we're here to help you achieve your.</p>

                        </div> {/* .heading */}

                        <div className="buttons">

                            <Link className="btn fGreen" href="/contact/">

                                <span>Get Started</span>

                                <ArrowUpRight />

                            </Link> {/* .btn.fGreen */}

                            <Link className="btn tLight" href="/portfolio/" style={{ display: "none" }}>

                                <span>View Portfolio</span>

                                <Portfolio />

                            </Link> {/* .btn.tLight */}

                        </div> {/* .buttons */}

                    </div> {/* .contentCol */}

                </div> {/* .dualCols */}

            </div> {/* #aboutUs */}

            <Marquee className="bGreen" />

            <div id="modboxSlider" className="slider">

                <div className="wrapper">

                    <div className="heading between">

                        <h2>Latest articles from the community<span className="green">.</span></h2>

                        <Link className="btn tLight" href="/modbox-news/">

                            <span>Explore All Posts</span>

                            <ArrowUpRight />

                        </Link> {/* .btn.fGreen */}

                    </div> {/* .wrapper */}

                    <ModboxSlider />

                </div>

            </div> {/* #portfolio */}

            <XFeed />

        </main>
    )

}