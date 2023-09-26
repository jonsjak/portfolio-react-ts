import linkedInHover from "../images/linkedin-hover.svg";
import GithubHover from "../images/github-hover.svg";
import StackHover from "../images/stack-hover.svg";

interface Link {
    href: string;
    imgSrc: string;
    imgAlt: string
  };
  
  export const Links: Link[] = [
    {
      href: "https://www.linkedin.com/in/jonas-jakobson-929672189/",
      imgSrc: linkedInHover,
      imgAlt: "LinkedIn-logo",
    },
    {
      href: "https://github.com/jonsjak",
      imgSrc: GithubHover,
      imgAlt: "Github-logo",
    },
    {
      href: "https://stackoverflowteams.com/c/technigo/users/454/?tab=profile",
      imgSrc: StackHover,
      imgAlt: "Stackoverflow-logo",
    },
  ];
  