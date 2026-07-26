import styles from "./WhyChooseUs.module.css";

const benefits = [
  "Pickup from Starting Point",
  "Comfortable Rooms",
  "Hygienic Food",
  "Jeep Safari",
  "Camp Fire",
  "Experienced Guides",
];

const stats = [
  { value: "1000+", label: "Happy Travelers" },
  { value: "India", label: "All Over Coverage" },
  { value: "24x7", label: "Support" },
  { value: "100%", label: "Satisfaction" },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>The Fenix promise</p>
            <h2 id="why-choose-us-title">
              Why Choose <span>Fenix</span>
            </h2>
            <p className={styles.intro}>
              From the first pickup to the final goodbye, every detail is
              planned to make your holiday comfortable and memorable.
            </p>

            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual} aria-label="Travel adventure illustration">
            <span className={styles.sun} aria-hidden="true" />
            <span className={styles.cloud} aria-hidden="true" />
            <svg
              className={styles.illustration}
              viewBox="0 0 620 480"
              role="img"
              aria-label="A travel van driving through South Indian hills"
            >
              <path
                className={styles.backHill}
                d="M26 351 151 177l90 121 83-101 117 154Z"
              />
              <path
                className={styles.frontHill}
                d="m159 367 127-164 66 82 62-70 161 152Z"
              />
              <path className={styles.road} d="M54 466c155-96 338-89 518-28" />
              <path className={styles.route} d="M72 122c72-61 137 2 107 54" />
              <path
                className={styles.routeArrow}
                d="m170 156 12 23 21-14"
              />
              <g className={styles.van}>
                <path d="M195 310h201c21 0 39 17 39 39v52H171v-67c0-13 11-24 24-24Z" />
                <path d="m330 310 37-62h43c12 0 22 8 25 19l18 67h-42l-28-24Z" />
                <path className={styles.window} d="m347 304 28-45h31c8 0 14 5 16 12l9 33Z" />
                <path className={styles.window} d="M201 324h105v48H201z" />
                <path className={styles.vanLine} d="M319 311v90M184 379h250" />
                <circle className={styles.wheel} cx="232" cy="404" r="31" />
                <circle className={styles.wheelHub} cx="232" cy="404" r="12" />
                <circle className={styles.wheel} cx="385" cy="404" r="31" />
                <circle className={styles.wheelHub} cx="385" cy="404" r="12" />
                <circle className={styles.headlight} cx="438" cy="357" r="10" />
              </g>
              <g className={styles.palms}>
                <path d="M118 365c1-73 0-133-15-187" />
                <path d="M103 181c-41-30-63-4-68 13 30-10 48-2 68 10" />
                <path d="M103 181c34-43 62-23 70-6-31-2-49 11-66 29" />
                <path d="M103 181c-5-45 19-55 38-50-21 19-29 37-31 65" />
              </g>
            </svg>
            <div className={styles.badge}>
              <strong>Pack. Go.</strong>
              <span>We handle the rest.</span>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
