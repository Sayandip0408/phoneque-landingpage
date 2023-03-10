import React from 'react'
import Brands from '../components/Brands'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import LimitedOffer from '../components/LimitedOffer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Services from '../components/Services'
import TopOfferBanner from '../components/TopOfferBanner'

const Home = () => {
    return (
        <div className='homepage w-[inherit] h-[inherit] overflow-hidden overflow-y-scroll'>
            <TopOfferBanner />
            <Navbar />
            <Carousel />
            <Brands />
            <Services />
            <FeaturedProducts />
            <LimitedOffer />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home