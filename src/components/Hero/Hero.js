import styles from "./Hero.module.css";

const travelCards = [
  {
    title: "All Over India",
    note: "Mountains · Coasts · Culture",
    className: styles.cardTamilNadu,
  },
  {
    title: "Group Tours",
    note: "Friends · Teams · Memories",
    className: styles.cardKerala,
  },
  {
    title: "Family Tours",
    note: "Comfort · Care · Togetherness",
    className: styles.cardKarnataka,
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.heroInner} container`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true">✦</span> All Over India, made unforgettable
          </p>
          <h1>
            Plan Your Perfect
            <span> Holiday with Fenix</span>
          </h1>
          <p className={styles.subtitle}>
            Easy trips across India with comfortable rooms, delicious food,
            memorable experiences, and friendly guided support from start to
            finish.
          </p>

          <div className={styles.actions}>
            <a className={`${styles.primaryAction} button`} href="#contact">
              Book Now
              <span aria-hidden="true">↗</span>
            </a>
            <a className={`${styles.secondaryAction} button`} href="#packages">
              Explore Packages
            </a>
          </div>

          <div className={styles.trustLine}>
            <span className={styles.avatarStack} aria-hidden="true">
              <i>☀</i>
              <i>♒</i>
              <i>⌁</i>
            </span>
            <p>
              <strong>All Over India.</strong> Countless happy memories.
            </p>
          </div>
        </div>

        <div className={styles.visual} aria-label="Featured India tour categories">
          <div className={styles.sun} aria-hidden="true">
            <span>GO!</span>
          </div>
          <div className={styles.route} aria-hidden="true" />
          <div className={styles.compass} aria-hidden="true">
            <span>✦</span>
          </div>
          <div className={styles.ticket} aria-hidden="true">
            <span>FENIX</span>
            <strong>India</strong>
            <small>Pack light. Dream big.</small>
          </div>

          <div className={styles.cards}>
            {travelCards.map((card, index) => (
              <article
                className={`${styles.travelCard} ${card.className}`}
                key={card.title}
              >
                <span className={styles.cardNumber}>0{index + 1}</span>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomWave} aria-hidden="true" />
    </section>
  );
}
