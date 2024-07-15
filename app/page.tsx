import GetInTouch from "@/components/sections/GetInTouch";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto px-6 md:px-4 lg:px-0 pb-40">
      <Hero />
      <MyProjects />
      <Skills />
      <GetInTouch />
    </main>
  );
}
