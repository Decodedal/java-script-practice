// import React, {useState} from "react";
// import NumberForm from "./numberForm";
// import Numlist from "./numberList";
// import ControlledInput from "./textBox";

// function App(){
//   let [nums,setNums] =useState([22,44,55,3,11,2,54])

//   const addNumber = newNumber => setNums([...nums,newNumber])

//   const allNums = nums.map((num, i) =>{
//     return <Numlist number ={num} key ={i}/>
//   })
//   const[count, setCount] =useState(4)

//   function decrementCount(){
//     setCount((previousCount)=> previousCount - 1)
//   }
//   function increseCount(){
//     setCount(previousCount => previousCount + 1)
//   }
//   return(
//     <div>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <button onClick={increseCount}>+</button>
//       {allNums}
//       <NumberForm addNumber ={addNumber}/>
//       <ControlledInput/>
      
//     </div>
//   )
// }

// export default App;

import Reac,{useState} from "react";
import DisplayIdeas from "./monster-components/Display-ideas";
import IdeasForm from "./monster-components/ideaForm";

function App(){
  const [ideas, setIdeas] = useState([
    "Movie about a guy who gets bit by a radioactive mole rat", "Romcom about two developers over zoom", "Horror film where AWS goes down for 24 hours"
  ]);

  const addIdeas = (newIdeas) =>{
    setIdeas([...ideas, newIdeas])
  }
 
  return(
     <main>
      <h1>Welcome, Super Awesome movie monster think tank</h1>
      <DisplayIdeas ideas = {ideas}/>
      <IdeasForm addIdeas ={addIdeas}/>
     </main>
 )

}

export default App