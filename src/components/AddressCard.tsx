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

export const AddressCard: React.FC = () => {
    return (
      <AddressContainer>
        <a
          href="tel:+46707483261"
          target="_blank"
          rel="noreferrer">
            {AddressInfo.phone}
        </a>
        <br></br>
        <a
          href="mailto:jonas.jakobson@gmail.com"
          target="_blank"
          rel="noreferrer">
            {AddressInfo.email}
        </a>
      </AddressContainer>
    )
  };
  