import AreasOfExpertise from '@/components/AreasOfExpertise'
import Footer from '@/components/Footer'
import HeaderSpecial from '@/components/headerSection/HeaderSpecial'
import PhoneCall from '@/components/PhoneCall'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-8 sm:pt-36 pb-14 bg-gray-50 dark:bg-gray-900">
        <AreasOfExpertise />
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
}

export default page
