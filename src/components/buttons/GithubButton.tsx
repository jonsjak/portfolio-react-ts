import styled from "styled-components";

//Logo styling
export const StyledLogo = styled.img`
  width: 32px;
  height: 32px;
`
// Button/anchor styling
export const GithubButton = styled.a`
    height: 48px;
    border-radius: 40px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #F5F5F5;
    text-decoration: none;
    gap: 15px;

    &:hover {
      background-color: #EB5577;
      color: #FFFFFF;
    };
`