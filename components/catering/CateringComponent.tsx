import React from 'react'
import styles from '@/styles/Catering.module.css';
import Footer from '../Footer';
import Header from '../Header';
import CateringDetails from './CateringDetails';
import { cateringDataforWedding } from '@/utils/constant';

function CateringComponent({ data }: any) {
    return (
        <div>
            <section
                className={styles.Hero}
                style={{ backgroundImage: `url(${data.ImagUrl})` }}
            >
                <div className={styles.Overlay}
                    style={{ filter: data?.filter, backgroundColor: data?.color }}
                ></div>
                <div className={styles.content}>
                    <h1>{data?.title}</h1>
                </div>
            </section>

            <section className={styles.aboutContent}>
                <div className={styles.aboutOverlay}></div>
                <div className={styles.container}>
                    <p className={styles.label}>{data?.label}</p>
                    <h1>{data?.subHeading}</h1>

                    <div className={styles.contentBox}>
                        {data?.details?.map((detail: any, index: number) =>
                            <span>
                                <p key={index} className={styles.description}>{detail}
                                </p>
                            </span>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CateringComponent;