import { PersonalLinks } from './buttons/PersonalLinks';
import styled from 'styled-components';
import { PresentationText } from '../text-content/PresentationText';

const PresentationContainer = styled.div`
  margin: 56px auto 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 668px) and (max-width: 1024px) { 
   margin-left: 15%;
  }

  @media (min-width: 1024px) { 
   width: 500px;
   max-width: 90%;
  } 
`

export const Presentation: React.FC = () => {
  return (
    <PresentationContainer>
        <p>{PresentationText}</p>
        <PersonalLinks />
    </PresentationContainer>
  )
};
