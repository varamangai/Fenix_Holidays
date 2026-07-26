"use client";

import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./PopularDestinations.module.css";

const destinations = [
  {
    key: "tamilNadu",
    title: "Tamil Nadu",
    description: "Hill stations, heritage towns and a coastline full of character.",
    featured: ["Ooty", "Kodaikanal", "Yercaud", "Pondicherry"],
    scene: "tamilNadu",
    image: "/images/destinations/tamilnadu.png",
  },
  {
    key: "kerala",
    title: "Kerala",
    description: "Misty tea country, quiet backwaters and palm-fringed shores.",
    featured: ["Munnar", "Alleppey", "Wayanad", "Varkala"],
    scene: "kerala",
    image: "/images/destinations/kerala.png",
  },
  {
    key: "karnataka",
    title: "Karnataka",
    description: "Coffee hills, royal history and laid-back Arabian Sea escapes.",
    featured: ["Coorg", "Mysore", "Gokarna", "Chikmagalur"],
    scene: "karnataka",
    image: "/images/destinations/karnataka.png",
  },
];

function DestinationScene({ image, name, title }) {
  return (
    <div
      className={`${styles.scene} ${styles[name]}`}
      role="img"
      aria-label={`Scenic illustration inspired by ${title}`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 43rem) 100vw, (max-width: 64rem) 50vw, 33vw"
        className={styles.sceneImage}
      />
      <span className={styles.stateLabel}>{title}</span>
    </div>
  );
}

export default function PopularDestinations() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="destinations"
      ref={elementRef}
      aria-labelledby="popular-destinations-title"
    >
      <div className="container">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>All Over India, endless stories</p>
          <h2 id="popular-destinations-title">Explore Popular Destinations</h2>
          <p className={styles.subtitle}>
            Discover beautiful places across India carefully selected by
            Fenix Holidays.
          </p>
        </header>

        <div className={styles.grid}>
          {destinations.map((destination, index) => (
            <article
              className={styles.card}
              style={{ "--card-index": index }}
              key={destination.key}
            >
              <DestinationScene
                image={destination.image}
                name={destination.scene}
                title={destination.title}
              />

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h3>{destination.title}</h3>
                </div>
                <p className={styles.description}>{destination.description}</p>

                <ul className={styles.featured} aria-label="Featured places">
                  {destination.featured.map((place) => (
                    <li key={place}>
                      <span aria-hidden="true" />
                      {place}
                    </li>
                  ))}
                </ul>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
