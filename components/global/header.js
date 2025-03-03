// Header.js
"use client";

import Link from "next/link";
import styles from "@/styles/global/header.module.scss";
import { useState } from "react";

import { useEffect } from "react";

export default function Header({ isTransparent }) {

    // Define the navigation menu
    const navMenu = {
        "Home": "/",
        "Web": "/web",
        "Marketing": "/marketing",
        "ModBox": "/modbox",
        "Contact Us": "/contact",
    };

    // Define the state for the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = () => {
        setIsMenuOpen(false);
        console.log(isMenuOpen);
    }

    // Return the header
    return (

        <>

            <header id="header" className={`${styles.header} ${isTransparent ? styles.transparent : undefined} ${isMenuOpen ? styles.menuActive : undefined}`}>

                <div className={styles.wrapper}>

                    <div className={styles.logo}>

                        <Link href="/">Growth<sup>3</sup></Link>

                    </div> {/* .logo */}

                    <div className={styles.actions}>

                        <nav className={`${styles.menu} ${styles.cta} hiddenS hiddenM`}>

                            {Object.keys(navMenu).map((key, index) => {

                                const [isActive, setIsActive] = useState(false);

                                useEffect(() => {

                                    if (typeof window !== 'undefined') {

                                        setIsActive(window.location.pathname === navMenu[key]);

                                    }

                                }, []);

                                return (

                                    <span key={index} className={isActive ? styles.active : ''}>

                                        <Link href={navMenu[key]}>{key}</Link>

                                    </span>

                                );

                            })}

                        </nav> {/* .nav */}

                        <div onClick={handleToggle} className={`${styles.hamburgerWrapper} hiddenL hiddenXL`}>

                            <span className={styles.hamburger}></span>

                        </div> {/* .hamburgerWrapper */}

                    </div> {/* .actions */}

                </div> {/* .wrapper */}

                <nav className={`${styles.mobileNav} hiddenL hiddenXL`}>

                    <ul className={`${styles.mobileMenu}`}>

                        {Object.keys(navMenu).map((key, index) => {

                            const [isActive, setIsActive] = useState(false);

                            useEffect(() => {

                                if (typeof window !== 'undefined') {

                                    setIsActive(window.location.pathname === navMenu[key]);

                                }

                            }, []);

                            return (

                                <li key={index} className={isActive ? styles.active : ''}>

                                    <Link href={navMenu[key]}>{key}</Link>

                                </li>

                            );

                        })}

                    </ul> {/* .mobileMenu */}

                </nav> {/* .mobileNav */}

                <div onClick={handleClose} className={styles.overlay}></div>

            </header> {/* #header */}

        </>

    );
}