import React from "react";
import css from "./Counter.css"


const Controls = ({ onGood, onNeutral, onBad}) => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className="title">Please leave feedback</h2>
        <ul className="buttonList">
          <li >
            <button type="button" className="Button" onClick={onGood}>Good</button>
          </li>
          <li>
            <button type="button" className="Button"onClick={onNeutral}>Neutral</button>
          </li>
          <li>
            <button type="button" className="Button" onClick={onBad}>Bad</button>
          </li>
        </ul>
        <h3 className="title">Statistics</h3>
      </section>
    </div>
  );
};

export default Controls;