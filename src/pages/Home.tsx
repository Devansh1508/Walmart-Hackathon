import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Support from '../components/Home/Support'
import ProductGrid from '../components/Home/ProductGrid'
import SupportFeatures from '@/components/Home/SupprtFeatures'

const Home = () => {
  return (
    <div className='px-10'>
        <Carousel />
        <Support />
        <ProductGrid />
        <SupportFeatures />
    </div>
  )
}

export default Home