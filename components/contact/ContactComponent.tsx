'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InfoCard from '@/components/InfoCard';
import styles from '@/styles/contact.module.css';
import ContactForm from '@/components/ContactForm';

const phoneIcone = <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" height='40' width='40' xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
const locationIcon = <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt" height='40' width='40' viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>

const watchIcon = <svg aria-hidden="true" className="e-font-icon-svg e-far-clock" height='40' width='40' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>

export default function ContactComponent() {
  return (
    <div>
      <Header />
      <section
        className={styles.contactHero}
      >
        <div className={styles.contactOverlay}></div>
        <div className={styles.content}>
          <h1>CONTACT US</h1>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <InfoCard
              icon={phoneIcone}
              title="Call Us"
              content="+971 54 339 2816 / +971 4 314 7055"
            />
            <InfoCard
              icon={locationIcon}
              title="Address"
              content="Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina"
            />
            <InfoCard
              icon={watchIcon}
              title="Opening Hour"
              content="8:30 AM - 12:00 Midnight"
            />
          </div>
        </div>
      </section>
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2>Get In Touch With Us</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.94401102294!2d55.126537375926844!3d25.069886736844527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6df9813e9659%3A0x1176282fc8918be2!2sRicky&#39;s%20Restaurant!5e0!3m2!1sen!2sin!4v1772734680529!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ "border": 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <Footer />
    </div>
  );
}
