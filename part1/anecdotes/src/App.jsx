import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];

const anecdoteCount = anecdotes.length;
const getRandomIndex = (length) => Math.floor(Math.random() * length);

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [votes, setVotes] = useState(() =>
    anecdotes.reduce((acc, _, index) => {
      return { ...acc, [index]: 0 };
    }, {}),
  );

  const handleNextAnecdote = () => {
    if (anecdoteCount < 2) return;
    let nextIndex = getRandomIndex(anecdoteCount);
    while (nextIndex === selectedIndex) {
      nextIndex = getRandomIndex(anecdoteCount);
    }
    setSelectedIndex(nextIndex);
  };

  const handleVote = () => {
    setVotes((prev) => ({
      ...prev,
      [selectedIndex]: prev[selectedIndex] + 1,
    }));
  };

  const getMostVoted = () => {
    let mostVotes = 0;
    let mostVotedIndex = 0;
    for (const index of Object.keys(votes)) {
      const count = votes[index];
      if (count > mostVotes) {
        mostVotes = count;
        mostVotedIndex = index;
      }
    }

    return { mostVotes, mostVotedIndex };
  };

  const { mostVotes, mostVotedIndex } = getMostVoted();

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selectedIndex]}</p>
      <p>has {votes[selectedIndex]} votes</p>
      <div>
        <button onClick={handleVote}>vote</button>{' '}
        <button onClick={handleNextAnecdote}>next anecdote</button>
      </div>
      <br />
      <h2>Anecdote with the most votes</h2>
      {mostVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>has {mostVotes} votes</p>
        </>
      )}
    </>
  );
};

export default App;
