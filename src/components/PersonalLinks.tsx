import linkedInHover from "../images/linkedin-hover.svg";
import GithubHover from "../images/github-hover.svg";
import StackHover from "../images/stack-hover.svg";
import styled from "styled-components";

const Navbar = styled.nav`
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
`

export const PersonalLinks = () => {
  return (
    <Navbar className="soMe">
        <a href="https://www.linkedin.com/in/jonas-jakobson-929672189/" target="_blank" rel="noreferrer">
            <img className="linkedIn-logo" src={linkedInHover} alt="LinkedIn-logo" />
        </a>
        <a href="https://github.com/jonsjak" target="_blank" rel="noreferrer">
            <img className="github-logo" src={GithubHover} alt="Github-logo" />
        </a>
        <a href="https://stackoverflowteams.com/c/technigo/users/454/?tab=profile" target="_blank" rel="noreferrer">
            <img className="stackoverflow-logo" src={StackHover} alt="Stackoverflow-logo" />
        </a>
    </Navbar>
  )
};
