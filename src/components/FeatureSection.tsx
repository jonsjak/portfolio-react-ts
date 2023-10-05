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
  padding: 64px 24px;
  margin-bottom: 5px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: left;
    margin-left: 20%;
  }
`;

const FeatureImage = styled.img`
  width: 327px;
  height: 280px;
  object-fit: cover;
  box-shadow: -1px 4px 11px 1px;
  margin-bottom: 24px;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 184px;
  }

  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 0;
  }

`
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 327px;
  margin: 64px 0 80px 0;

  @media (min-width: 668px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 184px 1fr;
    width: 100%;
    height: 280px;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    width: 820px;
    flex-direction: row;
    gap: 40px;
  }
`;

const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;

  @media (min-width: 668px) and (max-width: 1024px) {
    justify-content: space-between;
  }
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

  @media (min-width: 668px) and (max-width: 1024px) {
    margin: 0;
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
            <h2 aria-label="news header">{feature.title}</h2>
            <p aria-label="news text">{feature.description}</p>
            <Tags aria-label="keyword tags">
              {feature.featureTags.map((tag, tagIndex) => (
                <p key={tagIndex}>{tag}</p>
              ))}
            </Tags>

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
          </ArticleText>
        </ArticleContainer>
      ))}
    </FeatureSectionContainer>
  );
};
