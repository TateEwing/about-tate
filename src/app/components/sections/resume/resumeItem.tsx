import React from 'react'

const ResumeItem: React.FC<ResumeItemData> = ({title, location, duration, description}) => {

	return (
		<div className='flex flex-col text-center gap-y-3 md:text-left'>
			<div className='flex flex-col text-white'>
				<h2 className='text-xl font-semibold flex justify-center md:justify-start'>{title}</h2>
				<div className='flex items-center gap-x-1 justify-center md:justify-start'>
					<span className='text-sm text-neutral-200 sm:flex-none'>{location}</span>
					<span>•</span>
					<span className='text-sm text-neutral-200 sm:flex-none'>{duration}</span>
				</div>
			</div>
			<div className='flex items-center justify-center md:justify-start'>
				<p className='text-sm text-neutral-200'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ResumeItem