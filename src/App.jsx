import React, { useState } from 'react';

function App() {

  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [cart , setCart] = useState([]);
  const itemList = ['Bread', 'Milk', 'Butter', 'Jam', 'Egg'];

  var cartItem = {name :'',quantity:0};

  function handleChange(e,item)
  {
      cartItem.name = item; 
      cartItem.quantity = Number(e.target.value);
      console.log(cartItem);
  }

  function handleAddToCart() {
    const updatedCart = [...cart]; 
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.name === cartItem.name
    );
  
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity = cartItem.quantity;
    } else {
      updatedCart.push(cartItem);
    }
  
    setCart(updatedCart); 
    console.log(updatedCart); 
  }

  return (
    <div>
      {itemList.map((item, index) => (
        <div key={index}>
          <li onClick={() => setClickedItemIndex(index)}>
            {item}
          </li>
          {clickedItemIndex === index && (
            <div>
              <input type="number" onChange={(e)=>handleChange(e,item)}/>
              <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
