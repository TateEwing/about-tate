import NavBar from "./components/navbar";
import Landing from "./components/sections/landing";
import Image from "next/image";
import imageSrc from '@/data/washington_pass.jpeg'
import About from "./components/sections/about";
import Resume from "./components/sections/resume/resume";
import Testimonials from "./components/sections/testimonials/testimonials";
import Goodbye from "./components/sections/goodbye";

export default function Home() {
	return (
		<main className="relative scroll-smooth flex flex-col w-full items-center justify-center">
			<NavBar />
			<Image
				alt="Washington Pass"
				className="fixed top-0 z-0 h-full w-full object-cover"
				placeholder="blur"
				
				src={imageSrc}
			/>
			<Landing />
			<About />
			<Resume />
			<Testimonials />
			<Goodbye />
		</main>
	);
}
