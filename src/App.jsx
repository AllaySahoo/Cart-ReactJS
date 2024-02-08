
import { useState } from 'react'
import './App.css'

function App() {

  const [groceryList , setGroceryList] = useState([]);

  function getUserInputForBread(){
    var breadCount = document.getElementById("breadInput").value; //replce it with event , we never use getElementById in React
    setUserInputForBread(breadCount);
  }

  function setUserInputForBread(breadCount){

    const newGrocery = {
      groceryname : "Bread",
      quantity :  breadCount
    };
    addBreadToList(newGrocery);
  }

  function addBreadToList(newGrocery){
    setGroceryList([...groceryList , newGrocery]);
    console.log(groceryList);
  }

  return (
    <>
      <h2>Grocery Mart</h2>
      <div>
        <ol>          
          <li>Bread <input type="text" id='breadInput'/> <button onClick={getUserInputForBread}> Add </button></li>
        </ol>
      </div>
    </>
  )
}

export default App
