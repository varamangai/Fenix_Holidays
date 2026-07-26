import Image from "next/image";
import siteData from "@/data/siteData";
import styles from "./BrandIntro.module.css";

export default function BrandIntro() {
  return (
    <section className={styles.section} aria-labelledby="brand-intro-title">
      <div className={`${styles.inner} container`}>
        <div className={styles.card}>
          <span className={styles.sunShape} aria-hidden="true" />
          <span className={styles.orbitShape} aria-hidden="true" />

          <div className={styles.logoFrame}>
            <Image
              className={styles.logo}
              src="/images/fenix-logo.png"
              alt={`${siteData.brandName} official logo`}
              width={1440}
              height={1440}
              sizes="(max-width: 40rem) 190px, 280px"
            />
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>Travel together. Remember forever.</p>
            <h2 id="brand-intro-title">{siteData.brandName}</h2>
            <p className={styles.subtitle}>
              All Over India trips, family tours and memorable group holidays.
            </p>
            <p className={styles.founder}>Founder: {siteData.founder}</p>
            <a
              className={styles.phoneButton}
              href={`tel:+91${siteData.contact.phone}`}
            >
              <span aria-hidden="true">☎</span>
              {siteData.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
