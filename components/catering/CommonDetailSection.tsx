'use client';

import styles from '@/styles/common.module.css';

interface BenefitItem {
  title: string;
  description: string;
}

interface FullWidthBlock {
  title: string;
  description: string;
}

interface YachtCateringSectionProps {
  title?: string;
  intro?: string;
  sideBenefits?: BenefitItem[];
  fullWidthBlocks?: FullWidthBlock[];
  closingText?: string;
  contactLabel?: string;
  onContactClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
}

export default function CommonDetailSection({commonData}: any) {
  const {
    title,
    intro,
    sideBenefits,
    fullWidthBlocks,
    closingText,
    contactLabel,
    onContactClick,
    imageUrl,
    imageAlt,
  } = commonData;

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Top grid: diamond image + right content ── */}
        <div className={styles.topGrid}>

          {/* Left: diamond clipped image */}
          <div className={styles.imageWrapper}>
            <div className={styles.diamondFrame}>
              <img src={imageUrl} alt={imageAlt} className={styles.image} />
            </div>
          </div>

          {/* Right: title + intro + side benefits */}
          <div className={styles.topContent}>
            <h2 className={styles.title}>{title}</h2>
            
            <div className={styles.sideBenefits}>
              {
                intro?.map((paragraph:any, index:number) => (
                  <p key={index} className={styles.intro}>{paragraph}</p>
                ))
              }

            {sideBenefits && sideBenefits.map((benefit:any, index:number) => (
              <div key={index} className={styles.sideBenefitBlock}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                { benefit?.description?.map((paragraph:any, index:number) => (
                  <p key={index} className={styles.benefitText}>{paragraph}</p>
                ))
                  }
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* ── Full-width blocks below ── */}
        <div className={styles.fullWidthSection}>
          {fullWidthBlocks && fullWidthBlocks.map((block:any, index:number) => (
            <div key={index} className={styles.fullWidthBlock}>
              <h3 className={styles.fullWidthTitle}>{block.title}</h3>
             {
               block?.description?.map((paragraph:any, index:number) => (
                 <p key={index} className={styles.fullWidthText}>{paragraph}</p>
               ))
             }
            </div>
          ))}

          {closingText && (
            <p className={styles.closingText}>{closingText}</p>
          )}

          <button className={styles.contactBtn} onClick={onContactClick}>
            {contactLabel}
          </button>
        </div>

      </div>
    </section>
  );
}