import React from "react";
import css from "./Counter.css"


const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  const keys = Object.keys(options);
  return (
    <div>
      <section className={css.statistics}>
        <h2 className="title">Please leave feedback</h2>
        <>
      {keys.map(key => (
        <button className="Button" key={key} onClick={() => onLeaveFeedback(key)}>{key.charAt(0).toUpperCase() + key.slice(1)}</button>
      ))}
    </>
        <h3 className="title">Statistics</h3>
      </section>
    </div>
  );
};

export default FeedbackOptions;






















