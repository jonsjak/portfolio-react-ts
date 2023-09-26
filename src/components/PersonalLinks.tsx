import styled from "styled-components";
import { Links } from '../links/Links';

const Navbar = styled.nav`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 100%;
`;

export const PersonalLinks: React.FC = () => {
  return (
    <Navbar>
      {Links.map((link, index) => (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          key={index}
        >
          <img src={link.imgSrc} alt={link.imgAlt} />
        </a>
      ))}
    </Navbar>
  )
};
