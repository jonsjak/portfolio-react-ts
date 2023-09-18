import { Presentation } from './Presentation';
import HeroImage from './HeroImage';
import { BusinessCard } from './BusinessCard';
import styled from 'styled-components';

const styledHeader = styled.section`
  display: 
`;
export const Header = () => {
  return (
    <>
      <HeroImage />
      <BusinessCard />
      <Presentation />
    </>
  )
}
