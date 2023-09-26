import profileImg from "../images/Portfolio.jpg";
import styled from "styled-components";

const BusinessCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 12px;

  @media (min-width: 668px) and (max-width: 1024px) { 
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 29px;
  }

  @media (min-width: 1024px) {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 29px;
    max-width: 100%;
  }
`;

const ProfilePicture = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  margin: 0 auto 30px;
  display: inline-block;

  @media (min-width: 668px) and (max-width: 1024px) {
    display: inline;
    text-align: left;
    margin: 0;
  }
`;

const TitleText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px auto;
`;

export const BusinessCard = () => {
  return (
    <BusinessCardContainer>
      <ProfilePicture src={profileImg} alt="Jonas" />
      <TitleText>
        <h1>Jonas Jakobson</h1>
        <h2>Frontend developer</h2>
        <h3>+ photographer</h3>
      </TitleText> 
    </BusinessCardContainer>
  )
};