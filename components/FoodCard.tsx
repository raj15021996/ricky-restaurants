import styles from '@/styles/FoodCard.module.css';

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
}

export default function FoodCard({ image, title, description, price }: FoodCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        {price && <span className={styles.price}>{price}</span>}
      </div>
    </div>
  );
}
