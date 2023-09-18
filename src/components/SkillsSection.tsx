import React from 'react'

export const SkillsSection = () => {
  return (
    <div className="skillSec">
        <h4 className="skillHeader">Skills</h4>
        <div className="skill-container">
            <div className="skill-child">
                <h5 className="code-header">Code</h5>
                <ul id="codeList"></ul>
            </div>

            <div className="skill-child">
                <h5 className="toolbox-header">Toolbox</h5>
                <ul id="toolboxList"></ul>
            </div>

            <div className="skill-child">
                <h5 className="more-header">More</h5>
                <ul id="moreList"></ul>
            </div>

            <div className="skill-child">
                <h5 className="upcoming-header">Upcoming</h5>
                <ul id="upcomingList"></ul>
            </div>
        </div>
    </div>
  )
}
