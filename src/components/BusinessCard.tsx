import profileImg from "../images/Portfolio.jpg";
import styled from "styled-components";

const BusinessCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 48px auto 24px;
  gap: 12px;
`

const ProfilePicture = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  margin: 0 auto 30px;
  align-self: center;
`
// Need further styling!
const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px auto;
`
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