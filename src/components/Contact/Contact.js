"use client";

import siteData from "@/data/siteData";
import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

const contactItems = [
  {
    label: "Call Now",
    getValue: (contact) => contact.phone,
    getHref: (contact) => `tel:${contact.phone}`,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    getValue: () => "Chat with our travel team",
    getHref: (contact) => `https://wa.me/91${contact.phone}`,
    icon: "message",
    external: true,
  },
  {
    label: "Website",
    getValue: (contact) => contact.website,
    getHref: (contact) => `https://${contact.website}`,
    icon: "globe",
    external: true,
  },
  {
    label: "Address",
    getValue: (contact) => contact.address,
    getHref: (contact) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
    icon: "pin",
    external: true,
  },
];

function ContactIcon({ name }) {
  const paths = {
    phone: (
      <path d="M21 16.5v3a2 2 0 0 1-2.2 2 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2 4.7a2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.4 2.1L8 10.2a15 15 0 0 0 5.7 5.7l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.3 1.5Z" />
    ),
    message: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.5 3.5 2 5 5 6L15 13" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
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

export default function Contact() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.08 });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const enquiry = [
      "Hi Fenix Holidays! I would like to plan a trip.",
      "",
      `Name: ${data.fullName}`,
      `Mobile: ${data.mobile}`,
      `Interested Destination: ${data.destination}`,
      `Travel Date: ${data.travelDate}`,
      `Number of Travelers: ${data.travelers}`,
      `Message: ${data.message || "No additional message"}`,
    ].join("\n");

    window.open(
      `https://wa.me/91${siteData.contact.phone}?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      id="contact"
      ref={elementRef}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Let&apos;s plan something wonderful</p>
          <h2 id="contact-title">Ready for Your Next Adventure?</h2>
          <p>
            Tell us your travel plan. Fenix Holidays will help you arrange
            transport, stay, food and guidance.
          </p>
        </header>

        <div className={styles.bookingPanel}>
          <aside className={styles.contactSide} aria-label="Contact information">
            <div className={styles.contactIntro}>
              <span>Fenix Holidays</span>
              <h3>We&apos;re just a message away.</h3>
              <p>Reach us directly, or send your trip details using the form.</p>
            </div>

            <div className={styles.contactList}>
              {contactItems.map((item) => (
                <a
                  className={styles.contactCard}
                  href={item.getHref(siteData.contact)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  key={item.label}
                >
                  <span className={styles.contactIcon}>
                    <ContactIcon name={item.icon} />
                  </span>
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.getValue(siteData.contact)}</strong>
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div className={styles.formSide}>
            <div className={styles.formHeading}>
              <span>Quick enquiry</span>
              <h3>Share your travel plan</h3>
              <p>We&apos;ll continue the conversation securely on WhatsApp.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  minLength="2"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                <span>Mobile Number</span>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  autoComplete="tel"
                  title="Enter a valid 10-digit mobile number"
                  required
                />
              </label>

              <label>
                <span>Interested Destination</span>
                <select name="destination" defaultValue="" required>
                  <option value="" disabled>
                    Select a destination
                  </option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Custom destination">Custom destination</option>
                </select>
              </label>

              <label>
                <span>Travel Date</span>
                <input type="date" name="travelDate" required />
              </label>

              <label>
                <span>Number of Travelers</span>
                <input
                  type="number"
                  name="travelers"
                  placeholder="How many people?"
                  min="1"
                  max="100"
                  required
                />
              </label>

              <label className={styles.messageField}>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about pickup, stay or anything else..."
                />
              </label>

              <button type="submit">
                Send Enquiry on WhatsApp
                <span aria-hidden="true">→</span>
              </button>
              <small className={styles.formNote}>
                No information is stored on this website.
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
