import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <CategoriesSection />
    </div>
  );
}
