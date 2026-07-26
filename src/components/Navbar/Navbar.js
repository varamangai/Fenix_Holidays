"use client";

import { useState } from "react";
import siteData from "@/data/siteData";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.navbar} container`} aria-label="Main navigation">
          <a className={styles.brand} href="#home" onClick={closeMenu}>
            <span className={styles.brandMark} aria-hidden="true">
              F
            </span>
            <span>{siteData.brandName}</span>
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className={styles.hamburger} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className={styles.navigationPanel}>
            <ul className={styles.links}>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <a
              className={styles.phoneButton}
              href={`tel:${siteData.contact.phone}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
              </svg>
              Call Now
            </a>
          </div>
        </nav>
      </header>

      <button
        className={`${styles.menuOverlay} ${
          isMenuOpen ? styles.menuOverlayVisible : ""
        }`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        className={`${styles.mobileDrawer} ${
          isMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.drawerHeader}>
          <a className={styles.drawerBrand} href="#home" onClick={closeMenu}>
            <span className={styles.brandMark} aria-hidden="true">
              F
            </span>
            <span>{siteData.brandName}</span>
          </a>

          <button
            className={styles.drawerClose}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile menu">
          <ul className={styles.drawerLinks}>
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={`${styles.phoneButton} ${styles.drawerPhone}`}
          href={`tel:${siteData.contact.phone}`}
          onClick={closeMenu}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />
          </svg>
          Call Now
        </a>
      </aside>
    </>
  );
}
