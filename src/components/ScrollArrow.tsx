import downArrow from "../images/downarrow.svg";

export const ScrollArrow = () => {
	
	//scrolls the window by 800 pixels
	const onDownArrowClick = () => {
		console.log("scrolling enabled");
    window.scrollTo({
        top: window.scrollY + 800,
        behavior: 'smooth'
      });
	}
  return (
    <img className="scroll-arrow" src={downArrow} alt="Scroll down" onClick={onDownArrowClick}></img>
  )
};
