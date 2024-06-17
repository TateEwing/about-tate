import React from 'react'
import Image from 'next/image';
import imageSrc from '@/data/washington_pass.jpeg'
import { SocialIcon } from 'react-social-icons';

const Landing = () => {
  return (
    <div className='relative flex h-screen w-full items-center justify-center'>
      <Image
        alt="Washington Pass"
        className="absolute z-0 h-full w-full object-cover"
        placeholder="blur"
        priority
        src={imageSrc}
      />
      <div className='z-10 items-center max-w-screen-lg px-4'>
          <div className='z-10 flex flex-col justify-center gap-y-4 p-4 rounded-xl bg-neutral-600/20 backdrop-blur-lg items-center text-center flex-auto '>
            <h1 className='text-4xl font-bold leading-none tracking-tight text-gray-100'>
                Welcome
            </h1>
            <p className="prose-med text-lg text-stone-100 sm:prose-base lg:prose-lg">
              I&apos;m Tate Ewing, a Seattle based Full Stack Software Engineer, currently looking for my next role building web applications.
            </p>
            <p className="prose-med text-lg text-stone-100 sm:prose-base lg:prose-lg">
              In my free time, I like to get outside and go surfing, climbing, or snowboarding.
            </p>
            <div className="flex gap-x-4">

              <SocialIcon url="https://www.linkedin.com/in/tate-ewing-940794159/" />
              <SocialIcon url="https://github.com/TateEwing"/>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Landing


