import React, { useState } from 'react';

function App() {
  const [cartList, setCartList] = useState([]);
  const [newGrocery, setNewGrocery] = useState({ groceryName: '', quantity: 0 });

  const itemList = ["Bread", "Milk"];

  return (
    <div>
      {itemList.map((item) => (
        <li>{item}<input
            type="number"
            onChange={(e) => {
              setNewGrocery({  //change name
                groceryName: item,
                quantity: e.target.value
              });
            }}
          />
          <button onClick={() => setCartList([...cartList, newGrocery])}>
            Add To Cart
          </button>
        </li>
      ))}
      <ul>
        {cartList.map((item, index) => (
          <li key={index}>
            {item.groceryName}: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
