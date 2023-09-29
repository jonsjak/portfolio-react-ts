import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { CarouselImageArray } from '../lists/CarouselImageArray';

/* Animations for carousel */

// Slide in right for big screen
const SlideInRight = keyframes`
 0% {
    opacity: 0.2;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// slide in top for tablet
const SlideInTop = keyframes`
 0% {
    opacity: 0.1;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageContainer = styled.div`
  display: none; //no hero on mobile device
  height: 412px;
  width: 100%;
  overflow: hidden;

  @media (min-width: 668px) and (max-width: 1024px) {
    display: inline-block;
    width: 100%;
    height: 412px;
    margin-bottom: 71px;
    };
  
  @media (min-width: 1024px) {
    display: block;
    height: 100%;
    width: 50%;
  };
`;


const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;

    @media (min-width: 668px) and (max-width: 1024px) {
      animation: ${SlideInTop} 1s ease-out;
    }

    @media (min-width: 1024px) {
      object-position: 25%;
      animation: ${SlideInRight} 1s ease-out;
    }
`;

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Display next image
  const nextImage = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === CarouselImageArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  //autoplay
  useEffect(() => {
    const timer = setInterval(() => {
        nextImage();
    }, 5000);

    return (() => {
        clearInterval(timer);
    });
    
  }, []);

  return (
    <ImageContainer>
      <CarouselImage src={CarouselImageArray[currentIndex]} alt={`Slide no: ${currentIndex + 1}`} />
    </ImageContainer>
  );
};

export default ImageCarousel;
