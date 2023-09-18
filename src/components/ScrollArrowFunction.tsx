import {useState} from "react";
import downArrow from "../images/downarrow.svg";
import styled, { keyframes } from "styled-components";


const rotateArrow = keyframes`
   0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
`;

const scrollDown = keyframes`
  0% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
`

const StyledScrollButton = styled.button`
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
    animation: ${scrollDown} 1s infinite;
    &.rotate {
    animation: ${rotateArrow} 1s linear;
    transform-origin: center center;
  };
`
const ArrowImage = styled.img`
  width: 19px;
  height: 30px;
  left: 78px;
  top: 67px;
`

const ScrollArrowFunction = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  // Scroll arrow inverter
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

	//scrolls the window by 800 pixels
	const onDownArrowClick = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // If at the bottom, flip arrow...
      toggleFlip();

      //...and scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 1500); 
    }else { window.scrollTo({
      top: window.scrollY + 800, // scrolls down 800px
      behavior: 'smooth'
    });}
	}
  return (
    <StyledScrollButton onClick={onDownArrowClick} className={isFlipped ? 'rotate' : ''} >
      <ArrowImage src={downArrow} alt="Scroll down" />
    </StyledScrollButton>
  )
};

export default ScrollArrowFunction;
