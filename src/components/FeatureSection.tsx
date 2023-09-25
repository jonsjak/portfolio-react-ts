import styled from "styled-components";
import { FeatureDataList } from "../lists/featureDataList";
import GithubLogo from "../images/github-big-black.svg";
import LiveDemoLogo from "../images/globe-big-black.svg";
import { GithubButton, StyledLogo } from "./buttons/GithubButton";
import { LiveDemoButton } from "./buttons/LiveDemoButton";
import { DemoButtonsContainer } from "./buttons/DemoButtonsContainer";

const FeatureSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  max-width: 100%;
  margin-bottom: 5px;
`;



const FeatureImage = styled.img`
  width: 327px;
  height: 280px;
  object-fit: cover;
  box-shadow: -1px 4px 11px 1px;
  margin-bottom: 24px;
`
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 327px;
  margin: 64px 0 80px 0;
`

const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
`

const Tags = styled.div`
  margin: 12px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: white;
  gap: 12px;

  p {
    background-color: black;
    font-family: 'Satoshi', sans-serif;
    font-size: 16px;
    padding: 2px;
  }
`

export const FeatureSection: React.FC = () => {
  return (
    <FeatureSectionContainer>
      <h4>Featured Projects</h4>
      
      {FeatureDataList.map((feature, index) => (
        <ArticleContainer key={index}>
          <FeatureImage src={feature.imageSrc} alt={feature.altText} />

          <ArticleText>
            <h2 className="newsHeader">{feature.title}</h2>
            <p className="newsTxt">{feature.description}</p>
            <Tags>
              {feature.featureTags.map((tag, tagIndex) => (
                <p key={tagIndex}>{tag}</p>
              ))}
            </Tags>
          </ArticleText>
          
          
          

          {/* Buttons */}
          <DemoButtonsContainer>
            <GithubButton className="github-button" href={feature.githubLink} >
              <StyledLogo src={GithubLogo} alt="github logo" />
              View the code
            </GithubButton>
            <LiveDemoButton className="live-demo" href={feature.deployLink} target="_blank" rel="noopener noreferrer">
              <StyledLogo src={LiveDemoLogo} alt="globe logo" />
              Live demo
            </LiveDemoButton>
          </DemoButtonsContainer>
        </ArticleContainer>
      ))}
    </FeatureSectionContainer>
  );
};
