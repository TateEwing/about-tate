import React from 'react'
import ProjectsItem from './projectItem'

const Projects: React.FC<ProjectsSectionData> = ({label, items}) => {
  return (
		<div className='grid grid-cols-1 py-8 gap-y-4 md:gap-x-8 first:pt-0 last:pb-0 md:grid-cols-4 '>
			<div className='flex col-span-1 justify-center md:justify-start'>
				<div className='relative h-max border-b-2 border-[#d4aa7b]'>
					<h1 className='text-2xl font-bold text-neutral-100'>{label}</h1>
				</div>
			</div>
			<div className='relative flex flex-col col-span-3 gap-y-4'>
				{items.map((item, index) => (
					<ProjectsItem 
						title={item.title}
						url={item.url}
						source={item.source}
						description={item.description}
						key={index}
					/>
				))}
			</div>
		</div>
  )
}

export default Projects