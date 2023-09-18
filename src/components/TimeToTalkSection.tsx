import { AddressCard } from './AddressCard';
import { BusinessCard } from './BusinessCard';
import { PersonalLinks } from './PersonalLinks';

export const TimeToTalkSection = () => {
  return (
    <div className="timeToTalkSec">
      <h4 className="talkHeader">Time to Talk</h4>
      <BusinessCard />
      <PersonalLinks />
      <AddressCard />
    </div>
  )
}
