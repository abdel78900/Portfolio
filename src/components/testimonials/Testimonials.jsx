import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/imgportfolio.webp'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
    return (
        <section id='testimonials'>
           <h5>Review from clients</h5>
           <h2>Testimonials</h2>
           <Swiper className="container testimonials__container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
         
           >
               <SwiperSlide className="testimonial">
                   <div className="client__avatar">
                       <img src={IMG1} alt="Avatar one" />
                   </div>
                       <h5 className="client__name">name test</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe in molestiae aliquid amet exercitationem nihil et fuga! Quidem, ab!
                       </small>
               </SwiperSlide>
               <SwiperSlide className="testimonial">
                   <div className="client__avatar">
                       <img src={IMG1} alt="Avatar one" />
                   </div>
                       <h5 className="client__name">name test</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe in molestiae aliquid amet exercitationem nihil et fuga! Quidem, ab!
                       </small>
               </SwiperSlide>
               <SwiperSlide className="testimonial">
                   <div className="client__avatar">
                       <img src={IMG1} alt="Avatar one" />
                   </div>
                       <h5 className="client__name">name test</h5>
                       <small className="client__review">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe in molestiae aliquid amet exercitationem nihil et fuga! Quidem, ab!
                       </small>
               </SwiperSlide>
               
           </Swiper>
        </section>
    )
}

export default Testimonials
