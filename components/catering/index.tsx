'use client'
import React from 'react'
import CateringComponent from './CateringComponent'
import Header from '../Header'
import Footer from '../Footer'
import CateringDetails from './CateringDetails'
import { usePathname } from 'next/navigation'
import BirthdayCateringSection from './BirthdayDetails'
import CommonDetailSection from './CommonDetailSection'


function index({ data, cateringData, commonData }: any) {
    const path = usePathname()
    return (
        <div>
            <Header />
            <CateringComponent data={data} />
            {
                path.includes('birthday') ? <BirthdayCateringSection /> : cateringData ? <CateringDetails cateringData={cateringData} /> : <CommonDetailSection commonData={commonData} />
            }

            <Footer />
        </div>
    )
}

export default index