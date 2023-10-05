import styled from "styled-components";
import '../App.scss';
import { TechText } from "../text-content/TechText";

const TechSectionContainer = styled.section`
  background-color: #EDFFFF;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px 120px 24px;
  width: 100%;
  gap: 62px;

  @media (min-width: 668px) and (max-width: 1024px) {
    p {
    width: 500px;
  }
  };

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 355px 0;
    gap: 143px;
    p {
      max-width: 50%;
    }
  }
`;

export const TechSection: React.FC = () => {
  return (
    <TechSectionContainer aria-label="tech-list container">
      <h4 className="techHeader">Tech</h4>
      <p>
        {TechText.join(", ")}
      </p>
    </TechSectionContainer>
  )
};
