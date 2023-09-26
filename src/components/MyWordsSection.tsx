import electricCar from "../images/electric-car.jpg";
import articleIcon from "../images/article.svg";
import styled from "styled-components";

const MyWordsSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FCEDEA;
    padding: 64px 24px;

    h4 {
        color: #EB5577;
        margin-bottom: 64px;
    }

    @media (min-width: 668px) and (max-width: 1024px) {
        h4 {
            margin-bottom: 53px;
        }
    }
`

const Image = styled.img`
    height: 340px;
    width: 327px;
    object-fit: contain;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const DateHeading = styled.h3`
    color:  #EB5577;
    font-size: 20px;
    font-weight: 600;
`

const NewsHeading = styled.h2`
    margin-bottom: 24px;
`

const ReadArticleButton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 178px;
    height: 48px;
    border-radius: 40px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    font-family: 'Satoshi', sans-serif;
    color: #333333;
    gap: 7px;
    justify-content: space-evenly;
    margin-top: 18px;
    background-color: #FFFFFF;
    text-decoration: none;

    &:hover {
        background-color: #FFD338;
    }
`

export const MyWordsSection = () => {
  return (
    <MyWordsSectionContainer>
        <article>
            <h4>My Words</h4>
            <Image src={electricCar} alt="Electric Car" />
            <TextBox>
                <DateHeading>March 2023</DateHeading>
                <NewsHeading>Driving Towards Sustainability With Technology as Co-Driver</NewsHeading>
                <p>Artificial intelligence (AI) can play a vital role in combating climate change by analyzing data and improving energy efficiency.
                    However, it's our responsibility as humans to use AI ethically and prioritize sustainability to protect the planet for future generations.</p>
                <ReadArticleButton href="https://www.linkedin.com/pulse/driving-towards-sustainability-technology-co-driver-jonas-jakobson/?trackingId=uNzJrYLPYkWmzXmgdDaUhQ%3D%3D" className="article-button" target="_blank" rel="noreferrer">
                    <img src={articleIcon} alt="news icon" />Read article
                </ReadArticleButton>
            </TextBox>
        </article>
    </MyWordsSectionContainer>
  )
}
