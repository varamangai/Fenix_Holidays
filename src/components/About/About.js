"use client";

import Image from "next/image";
import siteData from "@/data/siteData";
import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./About.module.css";

const miniCards = [
  {
    title: "Personalized Trip Planning",
    description: "Flexible plans shaped around your destination, timing and budget.",
  },
  {
    title: "Group & Family Tours",
    description: "Comfortable arrangements for friends, families and group travel.",
  },
  {
    title: "End-to-End Travel Support",
    description: "Pickup, stay, food and guidance support from start to return.",
  },
];

export default function About() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.12 });

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="about"
      ref={elementRef}
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.story}>
            <p className={styles.eyebrow}>Who we are</p>
            <h2 id="about-title">About Fenix Holidays</h2>
            <p className={styles.subtitle}>
              Friendly travel planning for South India holidays.
            </p>
            <p className={styles.description}>
              Fenix Holidays helps travelers enjoy memorable trips across Tamil
              Nadu, Kerala and Karnataka with transport, stay, food, sightseeing
              guidance and group travel support. From pickup to return, every
              detail is planned to make the journey comfortable, safe and
              enjoyable.
            </p>

            <div className={styles.founderBadge}>
              <span>Founder</span>
              <strong>{siteData.founder}</strong>
            </div>

            <div className={styles.cards}>
              {miniCards.map((card, index) => (
                <article
                  className={styles.miniCard}
                  style={{ "--card-index": index }}
                  key={card.title}
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.logoColumn}>
            <div className={styles.logoCard}>
              <span className={styles.glow} aria-hidden="true" />
              <div className={styles.logoFrame}>
                <Image
                  src="/images/fenix-logo.png"
                  alt={`${siteData.brandName} official logo`}
                  width={220}
                  height={220}
                  priority={false}
                />
              </div>
              <div className={styles.logoText}>
                <span>Official Travel Partner</span>
                <strong>{siteData.brandName}</strong>
                <p>Tamil Nadu • Kerala • Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
