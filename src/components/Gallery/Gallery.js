"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./Gallery.module.css";

const memories = [
  {
    image: "/images/gallery/gallery-01-wonderla.jpeg",
    alt: "Fenix Holidays travel memory at Wonderla",
    width: 1600,
    height: 1200,
    position: "center 58%",
  },
  {
    image: "/images/gallery/gallery-02-kumaran-bus.jpeg",
    alt: "Fenix Holidays group travel memory with Kumaran bus",
    width: 1280,
    height: 720,
    position: "center center",
  },
  {
    image: "/images/gallery/gallery-03-amman-bus.jpeg",
    alt: "Fenix Holidays group travel memory with Amman bus",
    width: 3613,
    height: 2688,
    position: "center 66%",
  },
  {
    image: "/images/gallery/gallery-04-coorg-group.jpeg",
    alt: "Fenix Holidays group travel memory in Coorg",
    width: 1600,
    height: 900,
    position: "center 62%",
  },
  {
    image: "/images/gallery/gallery-05-college-group.jpeg",
    alt: "Fenix Holidays college group travel memory",
    width: 1080,
    height: 1080,
    position: "center 58%",
  },
  {
    image: "/images/gallery/gallery-06-vagamon-group.jpeg",
    alt: "Fenix Holidays group travel memory in Vagamon",
    width: 720,
    height: 1612,
    position: "center center",
    cropBars: true,
  },
  {
    image: "/images/gallery/gallery-07-tour-moments.jpeg",
    alt: "Collage of Fenix Holidays tour memories",
    width: 1279,
    height: 1599,
    position: "center center",
  },
];

export default function Gallery() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLightboxClosing, setIsLightboxClosing] = useState(false);
  const activeMemory =
    activeIndex === null ? null : memories[activeIndex];

  const openLightbox = (index) => {
    setIsLightboxClosing(false);
    setActiveIndex(index);
  };
  const closeLightbox = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveIndex(null);
      return;
    }

    setIsLightboxClosing(true);
  };
  const showPrevious = () => {
    setIsLightboxClosing(false);
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + memories.length) % memories.length,
    );
  };
  const showNext = () => {
    setIsLightboxClosing(false);
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % memories.length,
    );
  };

  useEffect(() => {
    if (!isLightboxClosing) return undefined;

    const closeTimer = window.setTimeout(() => {
      setActiveIndex(null);
      setIsLightboxClosing(false);
    }, 220);

    return () => window.clearTimeout(closeTimer);
  }, [isLightboxClosing]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setActiveIndex(null);
        } else {
          setIsLightboxClosing(true);
        }
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + memories.length) % memories.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % memories.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="gallery"
      ref={elementRef}
      aria-labelledby="travel-memories-title"
    >
      <div className="container">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Stories worth keeping</p>
          <h2 id="travel-memories-title">Travel Memories</h2>
          <p>
            A glimpse of happy trips, group moments and unforgettable journeys
            with Fenix Holidays.
          </p>
        </header>

        <div className={styles.grid}>
          {memories.map((memory, index) => (
            <figure
              className={styles.card}
              style={{
                "--tile-index": index,
                "--image-position": memory.position,
              }}
              key={memory.image}
            >
              <button
                className={styles.imageButton}
                type="button"
                aria-label={`Open travel memory ${index + 1} of ${memories.length}`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={memory.image}
                  alt={memory.alt}
                  width={memory.width}
                  height={memory.height}
                  sizes="(max-width: 34rem) 100vw, (max-width: 64rem) 50vw, 550px"
                  className={`${styles.galleryImage} ${
                    memory.cropBars ? styles.vagamonImage : ""
                  }`}
                />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activeMemory && (
        <div
          className={`${styles.lightbox} ${
            isLightboxClosing ? styles.lightboxClosing : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={`Travel memory ${activeIndex + 1} of ${memories.length}`}
        >
          <button
            className={styles.lightboxBackdrop}
            type="button"
            aria-label="Close image viewer"
            onClick={closeLightbox}
          />

          <div className={styles.lightboxContent}>
            <Image
              key={activeMemory.image}
              src={activeMemory.image}
              alt={activeMemory.alt}
              width={activeMemory.width}
              height={activeMemory.height}
              sizes="95vw"
              priority
              className={styles.lightboxImage}
            />

            <button
              className={styles.closeButton}
              type="button"
              aria-label="Close image viewer"
              onClick={closeLightbox}
              autoFocus
            >
              ×
            </button>

            <button
              className={`${styles.lightboxControl} ${styles.previousButton}`}
              type="button"
              aria-label="View previous image"
              onClick={showPrevious}
            >
              ‹
            </button>

            <button
              className={`${styles.lightboxControl} ${styles.nextButton}`}
              type="button"
              aria-label="View next image"
              onClick={showNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
