import React from 'react'
import Banner from '../components/Banner'
import BestSellerGadgets from './BestSellerGadgets'
import FavGadget from './FavGadget'
import PromoBanner from './PromoBanner'
import OtherGadgets from './OtherGadgets'
import Review from './Review'



const Home = () => {
  return (
    
    <div className=''>
      <Banner/>
      <BestSellerGadgets/>
      <FavGadget/>  
      <PromoBanner/>
      <OtherGadgets/>
      <Review/>
      

    </div>
    
  )
}

export default Home

