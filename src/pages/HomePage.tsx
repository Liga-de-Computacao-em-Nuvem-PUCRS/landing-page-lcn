import { HeroSection } from '@/components/home/HeroSection';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { PurposeSection } from '@/components/home/PurposeSection';
import { PillarsSection } from '@/components/home/PillarsSection';
import { AwsProgramSection } from '@/components/home/AwsProgramSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <LogoMarquee />
      <PurposeSection />
      <PillarsSection />
      <AwsProgramSection />
      <HighlightsSection />
    </div>
  );
}
