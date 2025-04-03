
export const educationData: ResumeSectionData = {
    label: "Education",
    items: [
        {
            title: "Bachelor of Arts in Computer Science, Minor in Physics",
            location: "Colby College",
            duration: "August 2017 - May 2021",
            description: "Earned a Bachelor's Degree in Computer Science, covering the fundamentals plus specific coursework in Computer Networks, Robotics, Machine Learning, and Neural Networks. Minor in Physics covered Newtonian Mechanics through Special Relativity.",
        }
    ]
}

export const workExperienceData: ResumeSectionData = {
    label: "Work Experience",
    items: [
        {
            title: "Software Engineer",
            location: "Docusign",
            duration: "August 2020 - August 2022",
            description: "Converted legacy frontend components to modern TypeScript/React and worked in the core eSign .NET API to improve mobile signing experience (display PDFs as HTML) and enable 21 CFR Part 11 compliance for Life Sciences customers. I addressed production bugs, reduced resource consumption by 25% for PDF to HTML conversion, and algorithmically corrected errors in the converted HTML.",
        },
        {
            title: "Software Engineer II",
            location: "Docusign",
            duration: "August 2022 - August 2023",
            description: "Led delivery of monthly reports to Life Sciences customers to validate 21 CFR Part 11 compliance and built a new API to bring the report delivery service out of the .NET monolith. I helped design schema to model accounts and reports in MongoDB database, built NestJS service to store and deliver reports to customers, and deployed it as a containerized app using Docker and Kubernetes.",
        },
        {
            title: "SDE II",
            location: "98point6 Technologies",
            duration: "September 2024 - Present",
            description: "Building out an asynchronous virtual health care platform using React, tRPC, and Temporal workflow orchestration. My key contributions to the platform include the fee collection system with Authorize.net API, and email notification service with Mailgun to keep patients and practitioners updated. Here, I've furthered my experience with cloud native application development and gained experience with AWS (S3 and Cloudwatch).",
        }
    ]
}
