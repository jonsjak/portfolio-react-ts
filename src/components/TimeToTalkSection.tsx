import { AddressCard } from './AddressCard';
import { BusinessCard } from './BusinessCard';
import { PersonalLinksButtons } from './buttons/PersonalLinksButtons';
import styled from 'styled-components';

const TimeToTalkSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px 80px;

  img {
    margin-left: 0;
    margin-top: 56px;
    margin-bottom: 29px;
  }

  @media (min-width: 668px) {
    align-items: center;
    padding-bottom: 120px;
  }
`;

const TimeToTalkHeading = styled.h4`
  font-size: 58px;
  color: #EB5577;

  @media (min-width: 668px) {
    font-size: 120px;
  }
`;

export const TimeToTalkSection: React.FC = () => {
  return (
    <TimeToTalkSectionContainer>
      <TimeToTalkHeading>Time to Talk</TimeToTalkHeading>
      <BusinessCard />
      <AddressCard />
      <PersonalLinksButtons />
    </TimeToTalkSectionContainer>
  )
}
