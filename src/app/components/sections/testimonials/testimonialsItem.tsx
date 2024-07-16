import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsItem: React.FC<TestimonialData> = ({name, position, company, relation, recommendation}) => {
  return (
    <div className='z-20 text-center md:text-left max-w-screen-lg w-full rounded-3xl bg-[#3d6f6fb0] backdrop-blur-lg'>
      <div className='flex flex-col text-center gap-y-1 p-5 md:text-left'>
        <div className='flex flex-col gap-y-1 text-white'>
          <h2 className='text-xl font-semibold justify-center md:justify-start pb-1 border-b-2 border-[#d4aa7b]'>{name}</h2>
          <div className='flex flex-col md:flex-row pb-2 md:gap-x-2 items-center justify-center md:justify-start'>
            <span className='text-neutral-200'>{position}</span>
            <span>@</span>
            <span className='text-neutral-200'>{company}</span>
            <span>•</span>
            <span className='text-neutral-200'>{relation}</span>
          </div>
        </div>
        <div className="flex">
          <FaQuoteLeft className="text-white items-start flex-none justify-start" size={15} />
          <div className='flex items-center justify-center md:justify-start'>
            <p className='italic pl-2  text-neutral-200'>
              {recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsItem