import styled from "styled-components";
import { AddressInfo } from "../text-content/AddressInfo";

const AddressContainer = styled.address`
  margin: 56px 0 99px 0;
  line-height: 1.5;
  
  a {
    color: black;
    font-size: 24px;
    font-family: 'Satoshi', sans-serif;
    text-decoration: none;
    font-weight: 700;
  }

  @media (min-width: 668px) {
    text-align: center;
  }
`;

export const AddressCard = () => {
    return (
      <AddressContainer>
        <a href="tel:+46707483261">{AddressInfo.phone}</a>
        <br></br>
        <a href="mailto:jonas.jakobson@gmail.com"> {AddressInfo.email}</a>
      </AddressContainer>
    )
  };
  