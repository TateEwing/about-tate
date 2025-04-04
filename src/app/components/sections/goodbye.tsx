import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const Goodbye = () => {
  return (
    <section id="goodbye" className="z-10 flex flex-col items-center justify-center py-10 h-full md:h-screen w-full bg-[#294b4b]">
      <div className='flex flex-col h-screen justify-center items-center gap-y-4 px-4 max-w-screen-lg'>
        <h1 className="text-center text-white text-lg md:text-3xl font-bold">
          Thank you for taking the time to check out my website! If you would like to connect, please reach out via email or LinkedIn.
        </h1>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <h1 className="md:text-2xl font-semibold text-neutral-300 pb-2 border-b-2 border-[#d4aa7b]">
            ctate.ewing@gmail.com
          </h1>
          <SocialIcon target='_blank' url="https://www.linkedin.com/in/tate-ewing-940794159/" />
        </div>
        
      </div>
      <div className="flex sticky bottom-1">
        <a href="#landing">
          <ArrowUpCircleIcon className='size-8 md:size-14 text-[#d4aa7b]'/>
        </a>
        </div>
		</section>
  )
}

export default Goodbye