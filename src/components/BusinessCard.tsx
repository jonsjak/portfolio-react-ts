import profileImg from "../images/optimized/Portfolio.jpg";
import styled from "styled-components";
import { BussinessInfo } from "../text-content/BussinessInfo";

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

export const BusinessCard: React.FC = () => {
  return (
    <BusinessCardContainer aria-label="profile information">
      <ProfilePicture src={profileImg} alt="Me sitting at bench" />
      <TitleText>
        <h1>{BussinessInfo.name}</h1>
        <h2>{BussinessInfo.jobTitle}</h2>
        <h3>{BussinessInfo.secondaryTitle}</h3>
      </TitleText> 
    </BusinessCardContainer>
  )
};