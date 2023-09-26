import { Presentation } from './Presentation';
import HeroImage from './HeroImage';
import { BusinessCard } from './BusinessCard';
import styled from 'styled-components';

const HeaderSection = styled.section`
  @media (max-width: 667px) {
    padding: 64px 24px 120px 24px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const PersonalInfo = styled.div`
  @media (min-width: 668px) and (max-width: 1024px) {
   margin: 0 24px;
  }
  @media (min-width: 1024px) {
    height: 980px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
}
`;

export const Header: React.FC = () => {
  return (
    <HeaderSection>
      <HeroImage />
      <PersonalInfo>
        <BusinessCard />
        <Presentation />
      </PersonalInfo>
    </HeaderSection>
  )
}
