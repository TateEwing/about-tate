import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

const Landing = () => {
	return (
		<section id="landing" className='relative flex h-screen w-full items-center justify-center'>
			<div className='items-center max-w-screen-lg pt-[100px] pb-8 px-4'>
				<div className='z-10 flex flex-col justify-center gap-y-4 p-8 rounded-xl  bg-neutral-600/20 backdrop-blur-lg items-center text-center flex-auto '>
					<h1 className='text-4xl font-bold leading-none tracking-tight text-gray-100'>
						Hello!
					</h1>
					<p className="prose-med text-lg text-stone-100 sm:prose-base lg:prose-lg">
						I&apos;m Tate Ewing, a Seattle based Full Stack Software Engineer.
					</p>
					<p className="prose-med text-lg text-stone-100 sm:prose-base lg:prose-lg">
						See my professional experience on my resume or LinkedIn, <br></br>and check out my personal projects on GitHub.
					</p>
					<div className="flex gap-x-4">
						<SocialIcon target='_blank' url="https://www.linkedin.com/in/tate-ewing-940794159/" />
						<SocialIcon target='_blank' url="https://github.com/TateEwing"/>
					</div>
					<Link
						className='flex gap-x-2 rounded-full border-2 px-4 py-2 bg-none font font-medium text-white hover:bg-[#2b4b70]'
						href={"assets/resume.pdf"}
						target='_blank'
					>
					Resume
					<ArrowDownTrayIcon className='size-5' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Landing


