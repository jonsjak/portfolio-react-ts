import { AddressCard } from './AddressCard';
import { BusinessCard } from './BusinessCard';
import { PersonalLinks } from './PersonalLinks';
import styled from 'styled-components';

const TimeToTalkSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px;

  img {
    margin-left: 0;
    margin-top: 56px;
    margin-bottom: 29px;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    align-items: center;
  }
`;

const TimeToTalkHeading = styled.h4`
  font-size: 58px;
  color: #EB5577;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 120px;
  }
`;

export const TimeToTalkSection = () => {
  return (
    <TimeToTalkSectionContainer>
      <TimeToTalkHeading>Time to Talk</TimeToTalkHeading>
      <BusinessCard />
      <AddressCard />
      <PersonalLinks />
    </TimeToTalkSectionContainer>
  )
}
