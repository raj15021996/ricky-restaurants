import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import FoodCard from '@/components/FoodCard';
import CateringCard from '@/components/CateringCard';
import styles from '@/styles/home.module.css';
import { cateringServices, menuItems } from '@/utils/constant';

export default function HomeComponent() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <Hero
        title="Welcome To Rickys Restaurant"
        subtitle="Eat What Makes You Happy"
        buttonText="Contact Us"
        buttonLink="/contact"
        imageUrl='https://rickyrestaurants.com/wp-content/uploads/2024/05/event-img-1.png'
      />

      {/* About Preview Section */}
      <section className={styles.aboutPreview}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>

            {/* Left: two stacked images */}
            <div className={styles.aboutImages}>
              <div className={styles.imgContainer1}>
                <img
                  src="	https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg"
                  alt="Grilled skewers"
                  className={styles.imgTop}
                />
              </div>
              <div className={styles.imgContainer2}>
                <img
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg"
                  alt="Burger"
                  className={styles.imgBottom}
                />
              </div>
            </div>

            {/* Right: text + 2 small images */}
            <div className={styles.aboutContent}>
              <div className={styles.aboutSubContent}>
                <p className={styles.label}>About us</p>
                <h2>EAT WHAT MAKES YOU HAPPY</h2>
                <p>
                  Get the food that makes you drool! Ricky’s Restaurant is one of the finest restaurants to dine-in with the best combination of spices according to your taste. Our professional staff is at your service with food delivery, event catering, and other services.
                </p>
                <div>
                  <button className={styles.exploreBtn}>Order Now</button>
                </div>

                <div className={styles.smallImages}>
                  <img
                    src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                    alt="Meat dish"
                    className={styles.smallImg}
                  />
                  <img
                    src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img-1024x720.jpg"
                    alt="Salad"
                    className={styles.smallImg}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Catering Preview Section */}
      <section className={styles.cateringPreview}>
        <div className={styles.cateringOverlay}></div>
        <div className={styles.container}>
          <div className={styles.cateringContainer}>
            <p className={styles.label}>CATERING</p>
            <h4>Organising Private & Corporate Parties</h4>
            <p className={styles.description}>Are you planning a private party, birthday, small or large event, wedding or outdoor food catering? Treat your friends and your clients with one of the best restaurant food available in Dubai. We do more than catering services, we create a holiday atmosphere and deliver the freshest and finest food to your place.</p>

            <p className={styles.description}>Any time of the day, promptly and at the highest quality, we cater the best for you. You can be rest assured that your event and especially – food – is in the right hands. We administer everything right on time, which is as important as the food itself.</p>

            <div className={styles.cateringGrid}>
              {cateringServices.map((service) => (
                <CateringCard
                  key={service.id}
                  image={service?.image}
                  title={service?.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className={styles.menuPreview}>
        <div className={styles.container}>
          <p className={styles.label}>Catering Menu</p>
          <h2>Grill Feast</h2>

          <div className={styles.menuGrid}>
            {
              menuItems.map((item) => (
                <FoodCard
                  image={item?.image}
                  title={item?.title}
                  description={item?.description}
                  price={item?.price}
                />
              ))
            }
          </div>

        </div>
      </section>
      <div className={styles.moreMenuBtn}>
        <button className={styles.primaryBtn}>MORE MENU</button>
      </div>

      {/* Delivery CTA Section */}
      <section className={styles.deliveryCta}>
        <div className={styles.container}>
          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryContent}>
              <h3>Get Delivery</h3>
              <h4>On Your Desired Time</h4>
              <div>
                <button className={styles.ctaBtn}>Order Now</button>
              </div>
            </div>
            <div className={styles.deliveryImage}>
              <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/sub-img-1024x576.jpg" alt="Delivery food" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
