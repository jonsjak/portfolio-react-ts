import profileImg from "../images/Portfolio.jpg";

export const BusinessCard = () => {
  return (
    <div>
        <img className='profileImg' src={profileImg} alt="Jonas" />
        <h1 className="name-heading">Jonas Jakobson</h1>
        <h2 className="job-title">Frontend developer</h2>
    </div>
  )
};
