import Link from 'next/link'
import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'

const ProjectItem: React.FC<ProjectItemData> = ({title, description, url, source }) => {

	return (
		<div className='flex flex-col text-center gap-y-2 md:text-left'>
			<div className='flex flex-col text-white'>
				<div className='flex items-center gap-x-3 justify-center md:justify-start'>
					<h1 className='text-xl font-semibold flex justify-center md:justify-start'>{title}</h1>
					{source && <span><CodeBracketIcon className='size-5 text-white' /></span>}
					{source && <Link target="_blank" href={source}><FaGithub className='hover:text-[#ebbd89]' size={25} /></Link>}
				</div>
				<div className='flex items-center gap-x-1 justify-center md:justify-start'>
					<Link className='underline text-[#d4aa7b] sm:flex-none' target="_blank" href={url}>{url}</Link>
				</div>
			</div>
			
			<div className='flex items-center justify-center md:justify-start'>
				<p className='text-neutral-200'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ProjectItem