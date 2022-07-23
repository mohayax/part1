import { useState } from 'react';

const Button = (props) => {
  return(
    <>
      <button onClick={props.handleClicks}>{props.text}</button>
    </>
  )
}
function App() {
  const [selected, setSelected] = useState(0);
  const [vote, setVote]  = useState([]);
  const [rNum, setRNum] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // let randNumber =  Math.floor(Math.random(0) * anecdotes.length);
  const generateRandNumber = () => {
    return Math.floor(Math.random(0) * anecdotes.length);
  }
  
 

  console.log(vote)
  console.log(generateRandNumber())

  const handleSelectClick = () => {
    setSelected(generateRandNumber())
  }


  const maxVote = (arr) => {
    const lookup = {};
    for(let num of arr){
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }
    
    let nArr = Object.values(lookup)
    let max = 0;
    
    for(let i = 0; i < nArr.length; i++){
        let n = nArr[i];
        if(n > max){
            max = n;
        }
    }
     let maxValue = Object.keys(lookup).find(key => lookup[key] === max)
     let obj = {
        maxValue: maxValue,
        max: max
    }
    return obj; 
}


  

  return (
    <div>
      <h1>Anecdote of the day</h1>
       {anecdotes[selected]}
       <div>has {vote.filter(vote => vote === generateRandNumber()).length} vote</div>
      <div>
        <Button handleClicks={() => setVote([...vote, generateRandNumber()])} text="vote" />
        <Button handleClicks={handleSelectClick} text="next anecdote"/>
      </div>

      <h2>Anecdote with most votes</h2>
      {anecdotes[maxVote(vote).maxValue]}
      <div>has {maxVote(vote).max} votes</div>
    </div>
  );
}

export default App;
