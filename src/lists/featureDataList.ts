import MovieGlobeImg from '../images/movieglobe.png';
import SpaceMazeImg from '../images/space-maze.png';
import TodoAppImage from '../images/todo-app.png';
import WeatherAppImage from '../images/weather-app.jpg';
import ZombieQuizImage from '../images/zombie-quiz.png';
import MusicReleasesImage from '../images/music-releases.jpg';
import HappyThoughtsImage from '../images/happy-thoughts.png';
import AncientTimesImage from '../images/ancient-times.jpg';
import ChatbotImage from '../images/chatbot.jpg';

type FeatureDataList = {
    index: number;
    imageSrc: React.FC;
    altText: string;
    title: string;
    description: string;
    featureTags: string;
    githubLink: string;
    deployLink: string;
}

export const FeatureDataList = [
    {
        index: 1,
        imageSrc: MovieGlobeImg,
        altText: "movieglobe pic",
        title: "The Movie Location Globe",
        description: "Final project at Technigo. An interactive movie map for finding new movies and travel inspiration.",
        featureTags:  ["HTML5", "CSS", "React", "Redux", "Access Token", "Styled Components"],
        githubLink: "https://github.com/jonsjak/finalproject-front-jonas-vera",
        deployLink: "https://movie-globe.netlify.app/"
    },
    {
        index: 2,
        imageSrc: HappyThoughtsImage,
        altText: "HappyThoughts pic",
        title: "Happy Thoughts!",
        description: "Twitterish message app for posting and liking happy thoughts to an API",
        featureTags: ["HTML5", "CSS", "React", "REST API"],
        githubLink: "https://github.com/jonsjak/project-happy-thoughts",
        deployLink: "https://eloquent-bunny-a273b7.netlify.app/"
    },
    {
        index: 3,
        imageSrc: TodoAppImage,
        altText: "Todo app",
        title: "Childish to-do-app",
        description: "A playful app for creating a task list, which uses Redux to keep track of state and pass tasks between unfinished and finished tasks.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/jonsjak/project-todos/tree/master",
        deployLink: "https://jonastodoapp.netlify.app/"
    },
    {
        index: 4,
        imageSrc: SpaceMazeImg,
        altText: "space maze starter page",
        title: "The Space Maze",
        description: "An animated game set in a fantastic space environment.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/Technigo/project-labyrinth/pull/194",
        deployLink: "https://the-great-space-maze.netlify.app/"
    },
    {
        index: 5,
        imageSrc: ZombieQuizImage,
        altText: "Zombie game pic",
        title: "Zombie Quiz Game",
        description: "Do you dare playing this post-apocalyptic Zombie game?",
        featureTags: ["HTML5", "CSS", "React"],
        githubLink: "https://github.com/jonsjak/project-redux-quiz",
        deployLink: "https://cute-pasca-d39626.netlify.app/"
    },
    {
        index: 6,
        imageSrc: ChatbotImage,
        altText: "chatbot pic",
        title: "Quiz Bot built in Javascript",
        description: "A Chat Bot letting you take a Sweden Trivia Quiz",
        featureTags: ["HTML5", "CSS", "Vanilla.js"],
        githubLink: "https://github.com/jonsjak/project-chatbot/commit/03caaf6153a20646dfb6d0eda11ff2fcb41ab94d",
        deployLink: "https://prismatic-cajeta-1efba0.netlify.app"
    },
    {
        index: 7,
        imageSrc:WeatherAppImage,
        altText: "Weather App",
        title: "Weather App using API fetch",
        description: "App fetching weather data, altering imagery and textual content based on the forecast data",
        featureTags: ["HTML5", "CSS", "Vanilla.js", "API"],
        githubLink: "https://github.com/Technigo/project-weather-app/pull/265",
        deployLink: "https://cheery-pasca-c07ee4.netlify.app/"
    },
    {
        index: 8,
        imageSrc: MusicReleasesImage,
        altText: "Music release site",
        title: "Music release app built in React",
        description: "React single page application, fetching music releases from an API and using routes for maneuvering.",
        featureTags: ["HTML5", "CSS", "React", "SPA", "API"],
        githubLink: "https://github.com/Technigo/project-music-releases/pull/254",
        deployLink: "https://moonlit-paprenjak-b2f391.netlify.app/"
    },
    {
        index: 9,
        imageSrc: AncientTimesImage,
        altText: "Ancient Times News site",
        title: "The Ancient Times News Site",
        description: "Where it all started. A thematic news site landing page set in ancient times",
        featureTags: ["HTML5", "CSS"],
        githubLink: "https://github.com/jonsjak/project-news-site",
        deployLink: "https://the-ancient-times-news-site.netlify.app/"
    }
];