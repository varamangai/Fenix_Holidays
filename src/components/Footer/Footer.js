import Image from "next/image";
import siteData from "@/data/siteData";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: siteData.social.instagram },
  { label: "WhatsApp", href: `https://wa.me/91${siteData.contact.phone}` },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  const { brandName, founder, contact } = siteData;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brandBlock}>
            <a href="#home" className={styles.logoWrap} aria-label={`${brandName} home`}>
              <Image
                src="/images/fenix-logo.png"
                alt={`${brandName} logo`}
                width={132}
                height={132}
                className={styles.logo}
              />
              <span>
                <strong>{brandName}</strong>
                <small>Founded by {founder}</small>
              </span>
            </a>

            <p>
              All Over India travel planning with transport, stay, food and
              friendly trip guidance handled with care.
            </p>

            <div className={styles.accentLine} aria-hidden="true" />
          </div>

          <nav className={styles.linkBlock} aria-label="Footer quick links">
            <h2>Quick Links</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactBlock}>
            <h2>Contact</h2>
            <ul>
              <li>
                <span>Phone</span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <span>Website</span>
                <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
                  {contact.website}
                </a>
              </li>
              <li>
                <span>Address</span>
                <p>{contact.address}</p>
              </li>
            </ul>
          </div>

          <div className={styles.socialBlock}>
            <h2>Social Links</h2>
            <div className={styles.socialGrid}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href === "#" ? undefined : "_blank"}
                  rel={link.href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={
                    link.label === "Instagram"
                      ? "Visit Fenix Holidays on Instagram"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 Fenix Holidays. All rights reserved.</p>
          <a href="#contact">Plan your next trip</a>
        </div>
      </div>
    </footer>
  );
}
