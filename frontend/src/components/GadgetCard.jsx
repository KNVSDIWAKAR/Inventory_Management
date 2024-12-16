import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {Link} from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'
const GadgetCard = ({headline,gadgets}) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
            gadgets.map(gadget =><SwiperSlide key={gadget._id} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
          
                <Link to={`/product/${gadget._id}`} >
                    <div className='space-y-4'> 
                    <div>
                        <img src={gadget.imageURL} alt="" />
                        <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white' />
                  </div>
                    </div>
                    <div className='space-y-2 text-center '>
                        <h3 style={{"color":"#1a56db" , "fontWeight":"bold"}}>{gadget.productName}</h3>
                        <p style={{"fontWeight":"bold"}}>{gadget.brand}</p>
                        <div style={{"fontWeight":"bold"}}><span>&#8377;</span>{gadget.price}</div>
                    </div>

                    </div>
                    
                </Link>
            
            </SwiperSlide> )
        }
      </Swiper>
      </div>
    </div>
  )
}

export default GadgetCard
