import oceanImg from "../images/ocean.jpg";
import styled from "styled-components";

const StyledHeroImage = styled.img`
  filter: grayscale(100%);
  display: none; //no hero on mobile device
  object-fit: cover;

  @media (min-width: 668px) and (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 412px;
    margin-bottom: 71px;
    };
  
  @media (min-width: 1024px) {
    display: inline-block;
    height: 980px;
    width: 50%;
    object-position: 12% 0px;
    zoom: 0.7;
  };
`;

const HeroImage: React.FC = () => {
  return (
    <StyledHeroImage src={oceanImg} alt="Beach and a row-boat"/>
  )
};

export default HeroImage;
