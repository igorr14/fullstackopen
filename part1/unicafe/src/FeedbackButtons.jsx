const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

export const FeedbackButtons = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div>
      <h2>Feedback</h2>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
    </div>
  );
};
