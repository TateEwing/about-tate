import React from 'react'
import Image from 'next/image';
import profileSrc from '@/data/portrait.jpeg';
import {
	AcademicCapIcon,
	MapIcon,
	SparklesIcon } from '@heroicons/react/24/outline'


const About = () => {
  return (
	<section id="about" className='relative flex flex-auto md:h-screen w-full py-4 items-center backdrop-blur-lg'>
		<div className='z-10 flex gap-y-4 p-6 m-4 rounded-xl bg-[#2b4b70] flex-auto '>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-y-4'>
				<div className="col-span-1 flex justify-center md:justify-start">
					<div className="relative h-28 w-28 m-8 overflow-hidden rounded-xl md:h-32 md:w-32">
						<Image alt="about-me-image" className="h-full w-full object-cover" src={profileSrc} />
					</div>
				</div>
				<div className='flex col-span-2 gap-y-6'>
					<div className="flex flex-col gap-y-2">
						<h2 className="text-2xl font-bold text-white">About me</h2>
						<p className="prose prose-sm text-gray-300 sm:prose-base">							
							I&apos;m a Software Engineer who is interested in working for a company with a mission I support. I have 3 years of experience
							as a Full Stack Developer, including frontend projects in React and TypeScript, backend projects in a .NET monolith, 
							and creating a containerized API using NestJS and MongoDB. For my next role, I&apos;m looking for Software Engineer positions where
							I can contribute across the stack and participate in design discussions. I&apos;m open to Remote and Hybrid roles, and I&apos;m 
							willing to relocate for the right opportunity.
						</p>
						<p className="prose prose-sm text-gray-300 sm:prose-base">							
							When I&apos;m not working, I love getting outside any way I can. On a nice sunny day, you can find me rock climbing at Index, 
							snowboarding somewhere in the Cascades, or surfing at Westport. I also really enjoy cooking and will spend
							an hour extra to make something tastier. 
						</p>
						<div className='flex p-2 flex-col'>
							<ul className="grid grid-cols-1 gap-4">
								<li className="col-span-1 flex items-center gap-x-2">
									<MapIcon className='size-5 shrink-0 text-white'/>
									<span className="text-sm font-semibold text-white">Location:</span>
									<span className=" text-sm text-gray-200">Seattle, WA, USA</span>
								</li>
								<li className="col-span-1 flex items-center gap-x-2">
									<AcademicCapIcon className='size-5 shrink-0 text-white'/>
									<span className="text-sm font-semibold text-white">Education:</span>
									<span className=" text-sm text-gray-200">Colby College, Computer Science and Physics</span>
								</li>
								<li className="col-span-1 flex items-center gap-x-2">
									<SparklesIcon className='size-5 shrink-0 text-white'/>
									<span className="text-sm font-semibold text-white">Interests:</span>
									<span className=" text-sm text-gray-200">Outdoor Sports, Cooking,  Guitar</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default About