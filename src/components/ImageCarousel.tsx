import React, { useEffect, useState } from 'react';
import ocean from '../images/carousel-slides/ocean.jpg';
import goal from '../images/carousel-slides/goal.jpg';
import stripe from '../images/carousel-slides/stripe.jpg';
import waterfall from '../images/carousel-slides/waterfall.jpg';
import fields from '../images/carousel-slides/fields.jpg';
import styled, { keyframes } from 'styled-components';

const ImageContainer = styled.div`
  display: none; //no hero on mobile device
  height: 412px;
  width: 100%;

  @media (min-width: 668px) and (max-width: 1024px) {
    display: inline-block;
    width: 100%;
    height: 412px;
    margin-bottom: 71px;
    object-fit: contain;
    };
  
  @media (min-width: 1024px) {
    display: inline-block;
    height: 830px;
    width: 50%;
    object-fit: contain;
  };
`;

// fadeIn animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// ken burns effect
const kenBurns = keyframes`
 0% {
  transform: scale(1) translate(0, 0);
  transform-origin: 50% 50%;
  }
  100% {
  transform: scale(1.25) translate(20px, 15px);
  transform-origin: 50% 50%;
  }
`

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    animation: ${fadeIn} 2s steps(2, end) both;

    @media (min-width: 1024px) {
      object-position: 25%;
    }
`;

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // image array for carousel
  const images: string[] = [
    ocean,
    fields,
    stripe,
    waterfall,
    goal,
  ];

  // Display next image
  const nextImage = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  //autoplay
  useEffect(() => {
    const timer = setInterval(() => {
        nextImage();
    }, 4000);

    return (() => {
        clearInterval(timer);
    });
    
  }, []);

  return (
    <ImageContainer>
      <CarouselImage src={images[currentIndex]} alt={`Slide no: ${currentIndex + 1}`} />
    </ImageContainer>
  );
};

export default ImageCarousel;
