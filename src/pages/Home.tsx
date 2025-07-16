import { Box } from '@mui/material';
import { HeroSection } from '../components/HeroSection';
import { FeatureSection } from '../components/FeatureSection';
import { DashboardSection } from '../components/DashboardSection';
import { DemoVideoSection } from '../components/DemoVideoSection';
import { PartnersSection } from '../components/PartnersSection';
import { PricingSection } from '../components/PricingSection';
import { SegmentosSection } from '../components/SegmentosSection';
import { FuncionalidadesSection } from '../components/FuncionalidadesSection';

export const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureSection />
      <DashboardSection />
      <DemoVideoSection />
      <PartnersSection />
      <PricingSection />
      <SegmentosSection />
      <FuncionalidadesSection />
    </Box>
  );
}; 