import { Presentation } from './Presentation';
import HeroImage from './HeroImage';
import { BusinessCard } from './BusinessCard';
import styled from 'styled-components';

const HeaderSection = styled.section`
  padding: 64px 24px 120px 24px;
`

export const Header = () => {
  return (
    <HeaderSection>
      <HeroImage />
      <BusinessCard />
      <Presentation />
    </HeaderSection>
  )
}
