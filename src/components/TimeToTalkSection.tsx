import { AddressCard } from './AddressCard';
import { BusinessCard } from './BusinessCard';
import { PersonalLinks } from './PersonalLinks';
import styled from 'styled-components';

const TimeToTalkSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 64px 24px;

  img {
    margin-left: 0;
    margin-top: 56px;
    margin-bottom: 29px;
  }
`

const TimeToTalkHeading = styled.h4`
  font-size: 58;
  color: #EB5577;
`

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
