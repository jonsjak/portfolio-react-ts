import styled from "styled-components";
import { FeatureDataList } from "../lists/featureDataList";
import GithubLogo from "../images/github-big-black.svg";
import LiveDemoLogo from "../images/globe-big-black.svg";

const FeatureSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  max-width: 100%;
  gap: 80px;
`;

const FeatureContainer = styled.div`
  border: 3px dotted black;
`;

const FeatureImage = styled.img`
  width: 327px;
  height: 280px;
  object-fit: cover;
  background-color: black;
`

const StyledLogo = styled.img`
  width: 21px;
  height: 21px;
  opacity: 20%;
`

const LogoButton = styled.button`
  width: 200px;
  height: 48px;
  border-radius: 40px;
  font-family: 'Satoshi';
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  text-decoration: none;
  gap: 21px;
  outline: none;
`

export const FeatureSection: React.FC = () => {
  return (
    <FeatureSectionContainer className="featureSec">
      <h4 className="featureHeader">Featured Projects</h4>
      <FeatureContainer>
        {FeatureDataList.map((feature, index) => (
          <div key={index}>
            <FeatureImage className="feature-pic" src={feature.imageSrc} alt={feature.altText} />
            <div className="featureArt">
              <h2 className="newsHeader">{feature.title}</h2>
              <p className="newsTxt">{feature.description}</p>
              
              {/* feature tags */}
              <div className="tags">
                {feature.featureTags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              {/* Buttons */}
              <div className="button-container">
                <LogoButton className="github-button">
                  <StyledLogo src={GithubLogo} href={feature.githubLink} alt="github logo" />
                  View the code
                </LogoButton>
                <LogoButton className="live-demo" href={feature.deployLink} target="_blank" rel="noopener noreferrer">
                  <StyledLogo src={LiveDemoLogo} alt="globe logo" />
                  Live demo
                </LogoButton>
              </div>
            </div>
          </div>
        ))}
      </FeatureContainer>
    </FeatureSectionContainer>
  );
};
