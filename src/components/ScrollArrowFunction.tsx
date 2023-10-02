import { useEffect, useState } from "react";
import downArrow from "../images/downarrow.svg";
import styled, { keyframes } from "styled-components";

//jumping arrow animation (scroll down)
const scrollDown = keyframes`
  0% {
      transform: translate(-50%, -50%);
    }

  50% {
    transform: translate(-50%, -30%);
  }
  
  100% {
    transform: translate(-50%, -50%);
  }
`;

const ScrollDownButton = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
  color:#0B24F5;
  z-index:999;
  bottom: 0vh;
  left: 50%;
  animation: ${scrollDown} 2s infinite;
  &:hover {
    opacity: 0.5;
    scale: 1.2;
    transform-origin: 0 0;
  }
`;

const ArrowImage = styled.img<{arrowflipped: string}>`
  width: 40px;
  height: 50px;
  left: 78px;
  top: 67px;
  transition: transform 0.7s;
  transform: ${({arrowflipped}) => arrowflipped === "true" ? 'rotate(180deg)' : 'none'};
`;

const ScrollArrowFunction: React.FC = () => {
  const [arrowFlipped, setArrowFlipped] = useState<boolean>(false);


  useEffect(() => {
    const toggleArrowDirection = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setArrowFlipped(!arrowFlipped);
      } else {
        setArrowFlipped(false);
      }
    };
  
    // Keeps track of window position
    window.addEventListener("scroll", toggleArrowDirection);
  
    // Event listener removed when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleArrowDirection);
    };
  });  

	const onDownArrowClick = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // When btn is clicked, if at bottom scrolls back to top...
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        }); 
      }, 1000);
    }else { window.scrollTo({
      top: window.scrollY + 900, // ...else scrolls down 900px
      behavior: 'smooth'
    });};
	}
  return ( 
    <ScrollDownButton onClick={onDownArrowClick} >
      <ArrowImage src={downArrow} alt="Scroll down" arrowflipped={arrowFlipped.toString()} />
    </ScrollDownButton>
  )
};

export default ScrollArrowFunction;
