/* import MovieGlobeImg from '../images/optimized/movieglobe.png'; */
import SpaceMazeImg from '../images/optimized/space-maze.png';
import TodoAppImage from '../images/optimized/todo-app.png';
import WeatherAppImage from '../images/optimized/weather-app.jpg';
import ZombieQuizImage from '../images/optimized/zombie-quiz.png';
import MusicReleasesImage from '../images/optimized/music-releases.jpg';
import HappyThoughtsImage from '../images/optimized/happy-thoughts.png';
import ChatbotImage from '../images/optimized/chatbot.jpg';

export interface FeatureData {
    index: number;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    featureTags: string[];
    githubLink: string;
    deployLink: string;
}

export const FeatureDataList: FeatureData[] = [
    /* {
        index: 1,
        imageSrc: MovieGlobeImg,
        altText: "Screenshot of The MovieGlobe Project",
        title: "The Movie Location Globe",
        description: "Final project at Technigo. An interactive movie map for finding new movies and travel inspiration.",
        featureTags:  ["HTML5", "CSS", "React", "Redux", "Access Token", "Styled Components"],
        githubLink: "https://github.com/jonsjak/finalproject-front-jonas-vera",
        deployLink: "https://movie-globe.netlify.app/"
    }, */
    {
        index: 2,
        imageSrc: TodoAppImage,
        altText: "Screenshot of The Todo app Project",
        title: "Childish to-do-app",
        description: "A playful app for creating a task list, which uses Redux to keep track of state and pass tasks between unfinished and finished tasks.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/jonsjak/project-todos/tree/master",
        deployLink: "https://jonastodoapp.netlify.app/"
    },
    {
        index: 3,
        imageSrc: SpaceMazeImg,
        altText: "Screenshot of The Space Maze Project",
        title: "The Space Maze",
        description: "An animated game set in a fantastic space environment.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/Technigo/project-labyrinth/pull/194",
        deployLink: "https://the-great-space-maze.netlify.app/"
    },
    {
        index: 4,
        imageSrc: HappyThoughtsImage,
        altText: "Screenshot of The HappyThoughts project",
        title: "Happy Thoughts!",
        description: "Twitterish message app for posting and liking happy thoughts to an API",
        featureTags: ["HTML5", "CSS", "React", "REST API"],
        githubLink: "https://github.com/jonsjak/project-happy-thoughts",
        deployLink: "https://eloquent-bunny-a273b7.netlify.app/"
    },
    {
        index: 5,
        imageSrc: ZombieQuizImage,
        altText: "Screenshot of the Zombie Game Project",
        title: "Zombie Quiz Game",
        description: "Do you dare playing this post-apocalyptic Zombie game?",
        featureTags: ["HTML5", "CSS", "React"],
        githubLink: "https://github.com/jonsjak/project-redux-quiz",
        deployLink: "https://cute-pasca-d39626.netlify.app/"
    },
    {
        index: 6,
        imageSrc: MusicReleasesImage,
        altText: "Screenshot of the Music Release Site",
        title: "Music release app built in React",
        description: "React single page application, fetching music releases from an API and using routes for maneuvering.",
        featureTags: ["HTML5", "CSS", "React", "SPA", "API"],
        githubLink: "https://github.com/Technigo/project-music-releases/pull/254",
        deployLink: "https://moonlit-paprenjak-b2f391.netlify.app/"
    },
    {
        index: 7,
        imageSrc: ChatbotImage,
        altText: "Screenshot of the Chatbot Project",
        title: "Quiz Bot built in Javascript",
        description: "A Chat Bot letting you take a Sweden Trivia Quiz",
        featureTags: ["HTML5", "CSS", "Vanilla.js"],
        githubLink: "https://github.com/jonsjak/project-chatbot/commit/03caaf6153a20646dfb6d0eda11ff2fcb41ab94d",
        deployLink: "https://prismatic-cajeta-1efba0.netlify.app"
    },
    {
        index: 8,
        imageSrc:WeatherAppImage,
        altText: "Screenshot of the Weather App",
        title: "Weather App using API fetch",
        description: "App fetching weather data, altering imagery and textual content based on the forecast data",
        featureTags: ["HTML5", "CSS", "Vanilla.js", "API"],
        githubLink: "https://github.com/Technigo/project-weather-app/pull/265",
        deployLink: "https://cheery-pasca-c07ee4.netlify.app/"
    }
];

/* const NotUsedFeatures: FeatureData = [
    {
        index: 9,
        imageSrc: AncientTimesImage,
        altText: "Screenshot of the Ancient Times News Project",
        title: "The Ancient Times News Site",
        description: "Where it all started. A thematic news site landing page set in ancient times",
        featureTags: ["HTML5", "CSS"],
        githubLink: "https://github.com/jonsjak/project-news-site",
        deployLink: "https://the-ancient-times-news-site.netlify.app/"
    },
    {
    index: 10,
    imageSrc: GuessWhoImage,
    altText: "Screenshot of the Guess Who Game Project",
    title: "Guess Who!",
    description: "Online version of the kids game classic 'Guess Who'. Find the secret person by asking yes-or-no-question about the character.",
    featureTags: ["HTML5", "CSS", "Vanilla.js"],
    githubLink: "https://github.com/jonsjak/project-guess-who",
    deployLink: "https://earnest-cactus-488c67.netlify.app/"   
    }
] */