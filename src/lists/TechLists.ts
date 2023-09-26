// techLists.ts

export interface TechLists {
    codeList: string[];
    moreList: string[];
    upcomingList: string[];
    toolboxList: string[];
  };
  
  export const techLists: TechLists = {
    codeList: [
      "HTML5", "CSS3", "Javascript ES6", "Styled components", "Github", "React", "Redux"
    ],
    moreList: [
      "Agile Methodology"
    ],
    upcomingList: [
      "TypeScript", "Kubernetes and/or Docker"
    ],
    toolboxList: [
      "Visual Studio Code", "Chrome DevTools", "Figma", "Postman", "Netlify", "MongoDB"
    ]
  };  