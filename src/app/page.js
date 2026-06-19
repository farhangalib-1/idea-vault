import HeroSection from "@/components/HeroSection";
import InnovationChallenges from "@/components/InnovationChallenges";
import Toprated from "@/components/Toprated";
import TrendingProblemHub from "@/components/TrendingProblemHub";

export default function Home() {
  return (
  <div>
      <HeroSection />
      <Toprated />
      <InnovationChallenges />
      <TrendingProblemHub />
  </div>
  );
}
