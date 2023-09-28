import { TechSection } from './TechSection';
import { FeatureSection } from './FeatureSection';
import { MyWordsSection } from './MyWordsSection';
import { SkillsSection } from './SkillsSection';
import { TimeToTalkSection } from './TimeToTalkSection';

export const Body: React.FC = () => {
  return (
    <>
      <TechSection />
      <FeatureSection />
      <MyWordsSection />
      <SkillsSection />
      <TimeToTalkSection />
    </>
  )
};