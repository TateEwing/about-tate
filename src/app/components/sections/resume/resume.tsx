import React from 'react'
import { educationData, workExperienceData } from '@/data/resumeData';
import { projectsSectionData } from '@/data/projectsData';
import ResumeSection from './resumeSection';
import Projects from '../projects/projects';

const Resume = () => {
	return (
		<section id="resume" className='flex z-10 py-12 px-4 md:py-24 w-full justify-center items-center bg-[#2b4b70]'>
      <div className='flex flex-col gap-y-4 max-w-screen-lg divide-y-2 divide-[#d4aa7b]'>
				<ResumeSection label={educationData.label} items={educationData.items}/>
				<ResumeSection label={workExperienceData.label} items={workExperienceData.items} />
				<Projects label={projectsSectionData.label} items={projectsSectionData.items}/>
			</div>
		</section>
  )
}

export default Resume