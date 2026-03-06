import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showSubtitle?: boolean;
  imageUrl?:string;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink = '#',
  showSubtitle = true,
  imageUrl
}: HeroProps) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${imageUrl})`,
        
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          {showSubtitle && subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
          {showSubtitle && buttonText && (
            <Link href={buttonLink} className={styles.button}>
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
