import React, { useState } from 'react';

const Intro = () => {
  const [surveyStart, setSurveyStart] = useState(1)

  const handleStartSurvey = (event) => {
    setSurveyStart(surveyStart + 1)

  }
    return (
      <>
          <h1>Stockholm museums: a survey</h1>
          <p>
          Our society is ever-changing and fast-paced. 
          </p>
          
          <p>The museums of our city are however often said to represent the opposite:
          a stable foundation.</p>
          
          <p>But does that make them... boring? If so, we want to know. <span className="bold-p">So thank you for taking the time to answer this survey, and for helping to make 
          Stockholm's museums better 🏛 </span>
          </p>
      </>
    );
  }

  export default Intro