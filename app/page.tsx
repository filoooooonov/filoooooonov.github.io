import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";

export default function Home() {
  return (
    <main className="max-w-[1024px] mx-auto px-6 md:px-4 lg:px-0">
      <Hero />
      <MyProjects />
    </main>
  );
}
