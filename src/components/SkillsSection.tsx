import styled from "styled-components";
import '../lists/TechLists';
import { techLists } from "../lists/TechLists";
import { readBuilderProgram } from "typescript";

const SkillSectionContainer = styled.div`
    background-color:  #FDF2E4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding-top: 64px;
    gap: 66px;
    padding-bottom: 137px;
`


const SkillListContainer = styled.div`
`

const SkillList = styled.ul`
    list-style-type: none;
    margin-top: 16px;
    li{
        margin-bottom: 10px;
        font-size: 22px;
    }
`

const SkillHeader = styled.h5`
    color: white;
    padding: 2px;
    display: inline-block;
`

export const SkillsSection = () => {
  return (
    <SkillSectionContainer>
        <h4 className="skillHeader">Skills</h4>
        
        {/* Mapping for each list in TechLists.ts */}
        <SkillListContainer className="codeSkills">
            <SkillHeader style={{background: "#EB5577"}}>Code</SkillHeader>
            <SkillList>
                {techLists.codeList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </SkillListContainer>

        <SkillListContainer className="ToolboxSkills">
        <SkillHeader style={{background: "#2483E0"}}>Toolbox</SkillHeader>
            <SkillList>
                {techLists.toolboxList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </SkillListContainer>

        <SkillListContainer className="moreSkills">
            <SkillHeader style={{background: "#0B24F5"}}>More</SkillHeader>
            <SkillList>
                {techLists.moreList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </SkillListContainer>

        <SkillListContainer className="UpcomingSkills">
            <SkillHeader style={{background: "#6DB486"}}>Upcoming</SkillHeader>
            <SkillList>
                {techLists.upcomingList.map((object) => (
                <li key={object}>{object}</li>
            ))}
            </SkillList>
        </SkillListContainer>
    </SkillSectionContainer>
  )
}
