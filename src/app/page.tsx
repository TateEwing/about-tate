import NavBar from "./components/navbar";
import Landing from "./components/sections/landing";
import Image from "next/image";
import imageSrc from '@/data/washington_pass.jpeg'
import About from "./components/sections/about";
import Resume from "./components/sections/resume";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full items-center justify-center">
      {/* <div className="bg-scroll bg-washington-pass"> */}
      <Image
        alt="Washington Pass"
        className="fixed top-0 z-0 h-full w-full object-cover"
        placeholder="blur"
        
        src={imageSrc}
      />
      <NavBar />
      <Landing />
      <About />
      {/* </div> */}
      <Resume />
    </main>
  );
}
