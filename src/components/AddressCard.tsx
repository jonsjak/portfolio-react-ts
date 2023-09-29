import styled from "styled-components";
import { AddressInfo } from "../text-content/AddressInfo";
import { AddressBtn } from "./buttons/AddressBtn";

const AddressContainer = styled.address`
  margin: 56px 0 99px 0;
  line-height: 1.5;

  @media (min-width: 668px) {
    text-align: center;
  }
`;

export const AddressCard: React.FC = () => {
    return (
      <AddressContainer>
        <AddressBtn
          href={AddressInfo.hrefPhone}
          target="_blank"
          rel="noreferrer">
            {AddressInfo.phone}
        </AddressBtn>
        <br></br>
        <AddressBtn
          href={AddressInfo.hrefEmail}
          target="_blank"
          rel="noreferrer">
            {AddressInfo.email}
        </AddressBtn>
      </AddressContainer>
    )
  };
  