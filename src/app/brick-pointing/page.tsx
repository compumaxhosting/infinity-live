import Footer from '@/components/Footer'
import HeaderSpecial from '@/components/headerSection/HeaderSpecial'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className='container mx-auto p-4 pt-4 sm:pt-28 border-b' style={{ fontFamily: "var(--font-forum)" }}>
        <h1 className='text-4xl mb-4'>Brick Pointing</h1>
        <p className='text-lg'>
        Enhance the aesthetics and structural integrity of your property with Infinity Construction NYC INC&apos;s expert brick-pointing services. Our team of skilled professionals is dedicated to delivering high-quality craftsmanship and exceptional results for all your masonry needs in New York City.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default page
