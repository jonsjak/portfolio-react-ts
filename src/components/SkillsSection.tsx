import styled from "styled-components";
import '../lists/TechLists';
import { techLists } from "../lists/TechLists";

const SkillSectionContainer = styled.div`
    background-color:  #FDF2E4;
    width: 100%;
    padding-top: 64px;
    gap: 66px;
    padding-bottom: 137px;
    justify-content: center;
    text-align: center;
    
    @media (max-width: 668px) {
        display: flex;
        align-items: center;
        flex-direction: column;  
    }
    
    @media (min-width: 668px) and (max-width: 1024px) {
     display: grid;
     grid-template-columns: repeat(2, 200px);
     align-items: flex-start;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: flex-start;
    }
`;

const SkillList = styled.ul`
    list-style-type: none;
    margin-top: 16px;
    li{
        margin-bottom: 10px;
        font-size: 22px;
    }
`;

const SkillSectionHeader = styled.h4`
   @media (min-width: 668px) {
    grid-column: 1 / -1;
   }
`;

const SkillListHeader = styled.h5`
    color: white;
    padding: 2px;
    display: inline-block;
`;

export const SkillsSection: React.FC = () => {
  return (
    <SkillSectionContainer>
        <SkillSectionHeader className="skillHeader">Skills</SkillSectionHeader>
        
        {/* Mapping for each list in TechLists.ts */}
        <div>
            <SkillListHeader style={{background: "#EB5577"}}>Code</SkillListHeader>
            <SkillList>
                {techLists.codeList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </div>

        <div>
        <SkillListHeader style={{background: "#2483E0"}}>Toolbox</SkillListHeader>
            <SkillList>
                {techLists.toolboxList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </div>

        <div>
            <SkillListHeader style={{background: "#0B24F5"}}>More</SkillListHeader>
            <SkillList>
                {techLists.moreList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </div>

        <div>
            <SkillListHeader style={{background: "#6DB486"}}>Upcoming</SkillListHeader>
            <SkillList>
                {techLists.upcomingList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </div>
    </SkillSectionContainer>
  )
}
