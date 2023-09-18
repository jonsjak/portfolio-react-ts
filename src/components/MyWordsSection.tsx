import electricCar from "../images/electric-car.jpg";
import articleIcon from "../images/article.svg";

export const MyWordsSection = () => {
  return (
    <div className="myWordsSec">
        <h4 className="myWordsHeader">My Words</h4>
        <span className="article-container">
            <article className="article1 article">
                <img className="myWordsImg" src={electricCar} alt="Electric Car" />
                <h3 className="date-header">March 2023</h3>
                <h2 className="newsHeader">Driving Towards Sustainability With Technology as Co-Driver</h2>
                <p>Artificial intelligence (AI) can play a vital role in combating climate change by analyzing data and improving energy efficiency.
                    However, it's our responsibility as humans to use AI ethically and prioritize sustainability to protect the planet for future generations.</p>
                <a href="https://www.linkedin.com/pulse/driving-towards-sustainability-technology-co-driver-jonas-jakobson/?trackingId=uNzJrYLPYkWmzXmgdDaUhQ%3D%3D" className="article-button" target="_blank" rel="noreferrer">
                    <img className="article-icon" src={articleIcon} alt="news icon" />Read article
                </a>
            </article>
        </span>
    </div>
  )
}
