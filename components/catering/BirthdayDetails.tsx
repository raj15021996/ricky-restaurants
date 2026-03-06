'use client';

import styles from '@/styles/BirthdayCatering.module.css';

interface BenefitItem {
  title: string;
  description: string;
}

interface BirthdayCateringSectionProps {
  title?: string;
  intro?: string;
  benefits?: BenefitItem[];
  closingText?: string;
  contactLabel?: string;
  onContactClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
}

const defaultData: BirthdayCateringSectionProps = {
  title: 'Professional Birthday Party Catering',
  intro:
    'To make your birthday celebration in Dubai truly memorable, professional birthday party catering is a must. Here are a few benefits of choosing birthday party catering:',
  benefits: [
    {
      title: 'Food for Your Party',
      description:
        'Enjoy your birthday without compromising on the food. Professional catering ensures that you can have fun, offer entertainment, give gifts, and indulge in delicious food without any hassle.',
    },
    {
      title: 'Time Efficiency',
      description:
        'Planning a birthday party involves many details. By hiring birthday party catering services, you can save time and avoid the stress of setting up the food yourself, allowing you to manage your time more efficiently.',
    },
    {
      title: 'Professional Setup',
      description:
        'Catering services provide a professional setup with themed décor and appealing food arrangements. The caterers will ensure everything looks and tastes fantastic.',
    },
  ],
  closingText:
        "Our birthday party catering services cater to everyone, from kids to adults! Whether you prefer grand celebrations or intimate gatherings, Ricky's Restaurant knows how to make you happy. Whether it's your birthday or your little one's, you can count on Ricky's Restaurant to make the day remarkable.",
  contactLabel: 'Contact Us',
  imageUrl:
    'https://rickyrestaurants.com/wp-content/uploads/2024/05/birthdayparty.jpg',
  imageAlt: 'Birthday Party Catering',
};

export default function BirthdayCateringSection(props: BirthdayCateringSectionProps) {
  const {
    title,
    intro,
    benefits,
    closingText,
    contactLabel,
    onContactClick,
    imageUrl,
    imageAlt,
  } = { ...defaultData, ...props };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left: oval image */}
          <div className={styles.imageWrapper}>
            <div className={styles.ovalFrame}>
              <img src={imageUrl} alt={imageAlt} className={styles.image} height={900} width={636}/>
            </div>
          </div>

          {/* Right: content */}
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.intro}>{intro}</p>

            {benefits && benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitBlock}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitText}>{benefit.description}</p>
              </div>
            ))}

            {closingText && (
              <p className={styles.closingText}>{closingText}</p>
            )}

            <button
              className={styles.contactBtn}
              onClick={onContactClick}
            >
              {contactLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}