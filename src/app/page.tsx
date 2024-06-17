import NavBar from "./components/navbar";
import Landing from "./components/sections/landing";

export default function Home() {
  return (
    <main className="relative flex flex-col h-screen w-full items-center justify-center">
      <NavBar />
      <Landing />
    </main>
  );
}
