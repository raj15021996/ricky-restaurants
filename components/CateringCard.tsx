import styles from '@/styles/CateringCard.module.css';

interface CateringCardProps {
  image: string;
  title: string;
}

export default function CateringCard({ image, title }: CateringCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
