"use client";

import siteData from "@/data/siteData";
import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./Reviews.module.css";

const trustPoints = [
  {
    title: "Worth for Money",
    description: "Thoughtful trips with real value.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9.5h4.2a1.8 1.8 0 0 1 0 3.6H10.8a1.8 1.8 0 0 0 0 3.6H15M12 7v2.5m0 7.2V19" />
      </>
    ),
  },
  {
    title: "Safe Travel",
    description: "Care and comfort throughout.",
    icon: (
      <>
        <path d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Complete Guidance",
    description: "Support from start to finish.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
  },
];

function TrustIcon({ children }) {
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
      {children}
    </svg>
  );
}

export default function Reviews() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.12 });
  const shareReviewUrl = `https://wa.me/91${siteData.contact.phone}?text=${encodeURIComponent(
    "Hi Fenix Holidays, I would like to share my travel review.",
  )}`;

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="reviews"
      ref={elementRef}
      aria-labelledby="reviews-title"
    >
      <div className={`${styles.inner} container`}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Shared with a smile</p>
          <h2 id="reviews-title">Happy Travelers Say</h2>
          <p>
            Real experiences from people who travelled with Fenix Holidays.
          </p>
        </header>

        <div className={styles.reviewsGrid}>
          {siteData.reviews.map((review, index) => (
            <article
              className={styles.reviewCard}
              style={{ "--review-index": index }}
              key={`${review.reviewer}-${index}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.quoteIcon} aria-hidden="true">
                  “
                </span>
                <div className={styles.rating} aria-label="5 out of 5 stars">
                  <span aria-hidden="true">★★★★★</span>
                  <small>5.0</small>
                </div>
              </div>

              <blockquote>{review.quote}</blockquote>

              <footer className={styles.reviewer}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.reviewer
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <strong>{review.reviewer}</strong>
                  <span className={styles.badge}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="m6 10 2.4 2.4L14 7" />
                    </svg>
                    {review.badge}
                  </span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.trustGrid}>
          {trustPoints.map((point, index) => (
            <article
              className={styles.trustCard}
              style={{ "--trust-index": index }}
              key={point.title}
            >
              <span className={styles.trustIcon}>
                <TrustIcon>{point.icon}</TrustIcon>
              </span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.share}>
          <p>Have a Fenix travel memory of your own?</p>
          <a href={shareReviewUrl} target="_blank" rel="noreferrer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
              <path d="M8.5 8.5c.5 3.5 2 5 5 6l1.5-1.5" />
            </svg>
            Share Your Review
          </a>
        </div>
      </div>
    </section>
  );
}
