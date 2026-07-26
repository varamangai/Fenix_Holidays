import siteData from "@/data/siteData";
import styles from "./InstagramButton.module.css";

export default function InstagramButton() {
  return (
    <a
      href={siteData.social.instagram}
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Fenix Holidays on Instagram"
    >
      <span className={styles.tooltip}>Follow us</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle className={styles.dot} cx="17.4" cy="6.7" r="1" />
      </svg>
    </a>
  );
}
