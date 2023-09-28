import React, { useEffect, useState } from 'react';
import ocean from '../images/carousel-slides/ocean.jpg';
import portfolio from '../images/Portfolio.jpg';
import styled from 'styled-components';

const ImageContainer = styled.div`
  filter: grayscale(100%);
  display: none; //no hero on mobile device
  object-fit: contain;
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
    height: 980px;
    width: 50%;
    object-position: 12% 0px;
    zoom: 0.7;
  };
`;

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`;

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: string[] = [
    `${ocean}`,
    `${portfolio}`,
    `${ocean}`,
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
    }, 3000);

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
