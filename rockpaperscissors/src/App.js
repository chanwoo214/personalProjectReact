import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './components/Box';
// Roadmap
// 1. Draw 2 boxes (Title, image, result)
// 2. image button rock paper scissors
// 3. Button click, show the value in the box
// 4. Choose random for computer
// 5. Compare the value in 3,4 to determine who has won
// 6. If lose, box colour red, If win, green black for tie

const choice = {
  rock:{
    name: "Rock",
    img: "https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png"
  },
  scissors:{
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlInomcxtRuYhoh_cTryN_T_O_NlMRPUvbQ&usqp=CAU"
  },
  paper:{
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
}
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]) 
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>

      <div className="main">
        <button onClick={()=>play ("scissors")}>Scissors</button>
        <button onClick={()=>play ("rock")} >Rock</button>
        <button onClick={()=>play ("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
