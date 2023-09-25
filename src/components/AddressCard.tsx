import styled from "styled-components";

const AddressInfo = styled.address`
  margin: 56px 0 99px 0;
  
  a {
    color: black;
    font-size: 24px;
    font-family: 'Satoshi', sans-serif;
    text-decoration: none;
    font-weight: 700;
  }
`

export const AddressCard = () => {
    return (
      <AddressInfo>
        <a className="phone" href="tel:+46707483261">+46 (0)707 48 32 61</a>
        <br></br>
        <a href="mailto:jonas.jakobson@gmail.com" className="mail">jonas.jakobson@gmail.com</a>
      </AddressInfo>
    )
  };
  