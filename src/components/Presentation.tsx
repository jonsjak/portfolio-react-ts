import { PersonalLinks } from './PersonalLinks';
import styled from 'styled-components';

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

export const Presentation = () => {
  return (
    <PresentationContainer>
        <p>Frontend developer with a background in social science. Hoping to use my skills in the lines of sustainability. I'm a thinker and a creator aiming to find exciting viable solutions. Never satisfied - always learning, always developing.</p>
        <PersonalLinks />
    </PresentationContainer>
  )
};
