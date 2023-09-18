import styled from "styled-components";
import '../App.scss';

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
`

export const TechSection = () => {
  return (
    <TechSectionContainer className="techSec">
      <h4 className="techHeader">Tech</h4>
      <p className="techTxt">HTML, CSS, JavaScript, ES6, React, Redux, Node, Express, MongoDB, Pair-programming, Github, Agile methodology.</p>
    </TechSectionContainer>
  )
}
