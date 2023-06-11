import React from "react";

const Statistics =({goodValue, neutralValue, badValue, onTotal, onPositiveFeedback})=> {
return (<section >
  <ul className="feedback">
    <li className="feedbackList"><span>Good: {goodValue}</span></li>
    <li className="feedbackList"><span>Neutral: {neutralValue}</span></li>
    <li className="feedbackList"><span>Bad: {badValue}</span></li>
    <li className="feedbackList"><span>Total: {onTotal}</span></li>
    <li className="feedbackList"><span>Positive Feedback: {onPositiveFeedback}</span></li>
  </ul>
  </section>)
}; 

export default Statistics