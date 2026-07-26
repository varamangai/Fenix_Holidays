"use client";

import siteData from "@/data/siteData";
import styles from "./FeaturedPackages.module.css";

const destinationGroups = [
  {
    state: "Tamil Nadu",
    icon: "location",
    destinations: [
      "Chennai",
      "Wonderla",
      "Kanyakumari",
      "Pondicherry",
      "Black Thunder",
      "Coimbatore",
      "Yercaud",
      "Kodaikanal",
      "Ooty",
      "Yelagiri",
    ],
  },
  {
    state: "Kerala",
    icon: "leaf",
    destinations: [
      "Kochi & Wonderla",
      "Trivandrum",
      "Varkala",
      "Alappuzha",
      "Wayanad",
      "Thekkady",
      "Munnar",
      "Marayoor",
      "Kanthalloor",
      "Athirapally",
    ],
  },
  {
    state: "Karnataka",
    icon: "mountain",
    destinations: [
      "Bangalore",
      "Wonderla",
      "Mysore",
      "Mangalore",
      "Dandeli",
      "Gokarna",
      "Murudeshwar",
      "Udupi",
      "Chikmagalur",
      "Coorg",
    ],
  },
];

function StateIcon({ type }) {
  const icons = {
    location: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20c4-2 7-4 10-8 2-2.5 3.5-5.5 6-8-1 4-3 7.5-6 10-3 2.5-6 4-10 6Z" />
        <path d="M5 19c1.4-2.6 3.3-4.8 5.5-6.4" />
      </svg>
    ),
    mountain: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 19 5-8 3 4 3-6 7 10H3Z" />
      </svg>
    ),
  };

  return icons[type] ?? icons.location;
}

function DestinationCard({ state, destinations, icon }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.iconWrap} aria-hidden="true">
          <StateIcon type={icon} />
        </span>
        <h3>{state}</h3>
      </div>

      <ul className={styles.destinationList}>
        {destinations.map((destination) => (
          <li key={destination}>{destination}</li>
        ))}
      </ul>
    </article>
  );
}

export default function FeaturedPackages() {
  const handlePlanTrip = () => {
    const message = [
      "Hi Fenix Holidays,",
      "",
      "I would like to plan a trip.",
      "",
      "Preferred state/destination:",
      "Number of travellers:",
      "Travel date:",
      "",
      "Please share suitable package details.",
    ].join("\n");

    window.open(
      `https://wa.me/91${siteData.contact.phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className={styles.section}
      id="packages"
      aria-labelledby="featured-packages-title"
    >
      <div className="container">
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Destinations we cover</p>
            <h2 id="featured-packages-title">Explore With Fenix Holidays</h2>
          </div>
          <p className={styles.subtitle}>
            Discover handpicked destinations across Tamil Nadu, Kerala, and
            Karnataka.
          </p>
        </header>

        <div className={styles.grid}>
          {destinationGroups.map((group) => (
            <DestinationCard
              key={group.state}
              state={group.state}
              destinations={group.destinations}
              icon={group.icon}
            />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <button className={styles.ctaButton} type="button" onClick={handlePlanTrip}>
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
}
