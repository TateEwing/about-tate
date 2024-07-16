'use client'
import React from 'react'
import {useScrollVideo} from '@/app/hooks/useScrollVideo'
import { testimonialsData } from '@/data/testimonialsData'
import TestimonialsItem from './testimonialsItem'
  
const Testimonials = () => {
  useScrollVideo();

  return (
    <section id="testimonials" className='z-10 grid md:h-[1200px]'>
      <video id="vid" autoPlay muted playsInline className='[grid-column:1] [grid-row:1] sticky top-0 h-screen lg:h-auto object-cover'>
        <source src="assets/ocean.mp4" type="video/mp4" />
      </video>
      <div className='[grid-column:1] [grid-row:1] relative flex flex-col gap-y-4 py-8 px-4 justify-center items-center'>
        <div className='z-20 text-center md:text-left max-w-screen-lg w-full p-4 rounded-3xl bg-[#3d6f6fb0] backdrop-blur-lg'>
          <h2 className='text-white text-3xl font-semibold'>
            What my teammates say about me...
          </h2>
        </div>
        {testimonialsData.map((testimonial, index) => 
          <TestimonialsItem
            {...testimonial}
            key={index}
          />
        )}
      </div>
    </section>
  )
}

export default Testimonials