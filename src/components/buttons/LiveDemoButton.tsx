import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 21px;
  height: 21px;
  opacity: 20%;
`

export const LiveDemoButton = styled.a`
    width: 164px;
    height: 48px;
    background-color: #F5F5F5;
    border-radius: 40px;
    font-family: 'Satoshi', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    gap: 15px;
    
    &:hover {
    background-color: #0B24F5;
    color: #FFFFFF;
  }
`