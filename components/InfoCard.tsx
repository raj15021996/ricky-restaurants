import styles from '@/styles/InfoCard.module.css';

interface InfoCardProps {
  icon: any;
  title: string;
  content: string;
}

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <div className={styles.iconContainer}>
        {icon}
        </div>
        </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
