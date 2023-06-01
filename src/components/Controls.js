import React from "react";


const Controls = ({onGood, onNeutral, onBad, goodValue, neutralValue, badValue, onTotal, onPositiveFeedback})=> {
return (<section className="statistics">
<h2 className="title">Please leave feedback</h2>
<ul className="Button-list">
  <li className="Button">
  <button tupe="button" onClick={onGood}>Good</button>
  </li>
  <li className="Button" >
  <button tupe="button" onClick={onNeutral}>Neutral</button>
  </li>
  <li className="Button">
  <button tupe="button" onClick={onBad}>Bad</button>
  </li>
</ul>
<h3>Statistics</h3>
<ul>
  <li><span>Good:{goodValue}</span></li>
  <li><span>Neutral: {neutralValue}</span></li>
  <li><span>Bad:{badValue}</span></li>
  <li><span>Total:{onTotal}</span></li>
  <li><span>Positive Feedback:{onPositiveFeedback}</span></li>
</ul>
</section>)
}; 

export default Controls; 