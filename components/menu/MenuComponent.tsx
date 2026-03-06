import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import FoodCard from '@/components/FoodCard';
import styles from '@/styles/menu.module.css';
import { menuItems } from '@/utils/constant';
import ContactForm from '@/components/ContactForm';

export default function MenuComponent() {
  return (
    <div>
      <Header />
      <section
        className={styles.menuHero}
      >
        <div className={styles.menuOverlay}></div>
        <div className={styles.content}>
          <h1>CATERING MENU</h1>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className={styles.container}>
          <h2>RICKYS GRILL FEAST</h2>
          <div className={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className={styles.container}>
          <h2>RICKYS GRILL PARADISE</h2>
          <div className={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className={styles.container}>
          <h2>RICKYS EXTRAVAGANZA</h2>
          <div className={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.menuSection}>
        <div className={styles.container}>
          <h2>RICKYS INTERNATIONAL</h2>
          <div className={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

          <div className={styles.formHeader}>
            <h2>Reservation</h2>
          </div>
      <section className={styles.reservationForm}>
        <div className={styles.reservationOverlay}></div>
        <div className={styles.reservationContainer}>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
