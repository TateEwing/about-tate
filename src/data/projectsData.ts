export const projectsSectionData: ProjectsSectionData = {
  label: "Projects",
  items: [
      {
          title: "Personal Website",
          description: "The website you are looking at! I built it from scratch using Next.js and Tailwind CSS, and deployed it using GitHub pages.",
          url: "https://github.com/TateEwing/about-tate",
          source: "https://github.com/TateEwing/about-tate",
      },
      {
          title: "Strava Data Visualization",
          description: "A data visualization app showing my personal outdoor activity data from the past few years. I used Jupyter Notebooks with Pandas to organize the data, and Streamlit to display it with a Mapbox backdrop.",
          url: "https://mountainvis.streamlit.app",
          source: "https://github.com/TateEwing/MountainVis",
          toolsUsed: ["Streamlit","Pandas", "Jupyter Notebooks"]
      },
      {
          title: "Bend Wildfire Exposure Map",
          description: "A map I made using QGIS, highlighting Bend public parks' exposure to wildfires. Data are compiled from Deschutes County and US Forest Service open data portals.",
          url: "https://spatialnode.net/projects/city-of-bend-or-wildfire-exposure-map-50fac5"
      }
  ]
}