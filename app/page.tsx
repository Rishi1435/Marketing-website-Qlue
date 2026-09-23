import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Modules from "@/components/Modules";
import TechStack from "@/components/TechStack";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Modules />
        <TechStack />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
