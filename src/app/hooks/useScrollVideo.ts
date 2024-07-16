import { useEffect } from "react";

export const useScrollVideo = () => {
    
    useEffect(() => {
        const vid = document.getElementById("vid")! as HTMLVideoElement;
        const section = document.getElementById("testimonials")!;
        vid.pause();
        
        const scrollVideo = () => {
            vid.pause()
            const scrollPosition = window.scrollY - section.offsetTop;
            const totalScroll = section.clientHeight - window.innerHeight;

            let percentageScrolled = scrollPosition / totalScroll;
            percentageScrolled = Math.max(0, percentageScrolled);
            percentageScrolled = Math.min(percentageScrolled, 1);

            if (vid.duration) {
                vid.currentTime = vid.duration*percentageScrolled;
            }
        }

        window.addEventListener("scroll", scrollVideo);

        return () => window.removeEventListener("scroll", scrollVideo);
    }, [])
};