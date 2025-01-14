import Footer from '@/components/Footer'
import HeaderSpecial from '@/components/headerSection/HeaderSpecial'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className='container mx-auto p-4 pt-4 sm:pt-28 border-b' style={{ fontFamily: "var(--font-forum)" }}>
        <h1 className='text-4xl mb-4'>Historical Landmarks Design Restoration</h1>
        <p className='text-lg'>
        For over a decade, Infinity Construction NYC has been the trusted partner for historical landmark restoration projects in Brooklyn, Manhattan, and Queens, NY. We understand the unique challenges of preserving these architectural treasures. Our team of skilled artisans and restoration specialists possesses the expertise and experience to meticulously restore your landmark&apos;s grandeur, ensuring its legacy endures for generations to come
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default page
