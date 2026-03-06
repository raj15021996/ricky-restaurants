'use client'
import React from 'react'
import styles from '@/styles/Catering.module.css'
import { usePathname, useRouter } from 'next/navigation'



function CateringDetails({ cateringData }: any) {
  const router = useRouter()
  const path = usePathname()
  return (
    <section className={`${path.includes('business') ? styles.businessSection : styles.weddingSection}`}>
      {path.includes('business') && <div className={styles.businessOverlay}></div>}
      <div className={styles.wed_container}>
        <div className={ `${path.includes('business') && styles.businessGrid} ${styles.weddingGrid}`}>

          {/* Image */}
          <div className={styles.weddingImageWrapper}>
            <img
              src={cateringData.image.src}
              alt={cateringData.image.alt}
              width={cateringData.image.width}
              height={cateringData.image.height}
              className={styles.weddingImage}
            />
          </div>

          {/* Content */}
          <div className={styles.weddingContent}>
            <h2 className={styles.weddingTitle}>
              {cateringData.title}
            </h2>

            <div className={styles.weddingLine}>
              {cateringData?.introParagraphs?.map((text: any, index: number) => (
                <p key={index} className={styles.weddingText}>
                  {text}
                </p>
              ))}
              {path.includes('business') && <button
                className={styles.contactBtn}
                onClick={() => router.push(cateringData.buttonLink)}
              >
                {cateringData.buttonText}
              </button>}


              <ul className={styles.benefitsList}>
                {cateringData?.benefits?.map((item: any, index: number) => (
                  <li key={index}>
                    <strong>{item.title}</strong>: {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.weddingBottom}>
          {cateringData.bottomParagraphs.map((text: any, index: number) => (
            <p key={index} className={styles.weddingText}>
              {text}
            </p>
          ))}

          {!path.includes('business') && <button
            className={styles.contactBtn}
            onClick={() => router.push(cateringData.buttonLink)}
          >
            {cateringData.buttonText}
          </button>}
        </div>
      </div>
    </section>
  )
}

export default CateringDetails