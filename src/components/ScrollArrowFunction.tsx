import { useEffect, useState } from "react";
import downArrow from "../images/downarrow.svg";
import styled, { keyframes } from "styled-components";

//jumping arrow animation (scroll down)
const scrollDown = keyframes`
  0% {
      transform: translate(-50%, -50%);
    }

  50% {
    transform: translate(-50%, 10%);
    opacity: 50%;
  }
  
  100% {
    transform: translate(-50%, -50%);
  }
`;

const ScrollDownButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  position: fixed;
  font-family: 'Satoshi';
  font-weight: 900;
  font-size: 16px;
  line-height: 22px;
  color:#0B24F5;
  width: 78px;
  z-index:999;
  bottom: 0vh;
  left: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  animation: ${scrollDown} 2s infinite;
`;

const ArrowImage = styled.img`
  width: 19px;
  height: 30px;
  left: 78px;
  top: 67px;
`;

const ScrollArrowFunction: React.FC = () => {
  const [arrowFlipped, setArrowFlipped] = useState<boolean>(false);


  useEffect(() => {
    const toggleArrowDirection = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("At the bottom of the page");
        setArrowFlipped(true);
        console.log(arrowFlipped);
      } else {
        setArrowFlipped(false);
        console.log(!arrowFlipped);
      }
    }
  
    // Keeps track of window position
    window.addEventListener("scroll", toggleArrowDirection);
  
    // Event listener removed when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleArrowDirection);
    };
  }, []);  

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
      <ArrowImage src={downArrow} alt="Scroll down" />
    </ScrollDownButton>
  )
};

export default ScrollArrowFunction;
