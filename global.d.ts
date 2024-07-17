declare module "*.pdf";

declare module "*.mp4";

declare type ResumeItemData = {
    title: string;
	location: string;
    duration: string;
    description: string;
}

declare type ProjectItemData = {
    title: string;
    description: string;
    url: string;
    source?: string;
}

declare type ProjectsSectionData = {
    label: string;
    items: ProjectItemData[];
}

declare type ResumeSectionData = {
    label: string;
    items: ResumeItemData[];
}

declare type TestimonialData = {
    name: string;
    position: string;
    company: string;
    relation: string;
    recommendation: string;
}