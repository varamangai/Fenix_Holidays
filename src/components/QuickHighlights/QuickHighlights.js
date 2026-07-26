"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./QuickHighlights.module.css";

const highlights = [
  {
    title: "Pickup & Drop",
    description:
      "Comfortable transportation from the starting point until the trip ends.",
    icon: "transport",
  },
  {
    title: "Comfortable Stay",
    description:
      "Clean hotels and rooms selected for comfort and safety.",
    icon: "stay",
  },
  {
    title: "Food Included",
    description:
      "Enjoy delicious meals during the journey without any hassle.",
    icon: "food",
  },
  {
    title: "Campfire & Safari",
    description:
      "Memorable campfire nights, jeep safari and guided adventures.",
    icon: "adventure",
  },
];

function HighlightIcon({ name }) {
  const paths = {
    transport: (
      <>
        <path d="M5 16V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V16" />
        <path d="M4 13h16M7 9h2m6 0h2M7 19h.01M17 19h.01" />
        <path d="M5 16h14v3H5z" />
      </>
    ),
    stay: (
      <>
        <path d="M3 19V9l9-5 9 5v10M7 19v-7h10v7" />
        <path d="M9 15h6M12 12v6" />
      </>
    ),
    food: (
      <>
        <path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3M7 10v11" />
        <path d="M16 3c-2 2-2 6-2 8h4V3h-2Zm2 8v10" />
      </>
    ),
    adventure: (
      <>
        <path d="M12 3c1.5 3-1 4.5.5 7 1.5-1 2.5-2.5 2-4.5C18 8 20 11 19 15a7 7 0 0 1-14 0c-.5-3 1-5.5 3.5-7-.5 2 .5 3.5 1.5 4.5C9.5 9 12.5 7 12 3Z" />
        <path d="M9.5 17c.5-2 2-2.5 2.5-4.5.5 2 2 2.5 2.5 4.5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function HighlightCard({ highlight, index }) {
  return (
    <article className={styles.card} style={{ "--card-index": index }}>
      <div className={styles.icon}>
        <HighlightIcon name={highlight.icon} />
      </div>
      <span className={styles.number}>0{index + 1}</span>
      <h3>{highlight.title}</h3>
      <p>{highlight.description}</p>
      <span className={styles.corner} aria-hidden="true" />
    </article>
  );
}

export default function QuickHighlights() {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      ref={elementRef}
      aria-labelledby="quick-highlights-title"
    >
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Travel, taken care of</p>
            <h2 id="quick-highlights-title">Quick Highlights</h2>
          </div>
          <p>
            Thoughtful essentials that turn every Fenix journey into a smooth,
            happy experience.
          </p>
        </div>

        <div className={styles.grid}>
          {highlights.map((highlight, index) => (
            <HighlightCard
              highlight={highlight}
              index={index}
              key={highlight.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
