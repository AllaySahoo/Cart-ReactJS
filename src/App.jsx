import React, { useState } from 'react';

function Product(props){

  var cartItem = {name :'',quantity:0};

  function handleUserInputChange(e,item)
  {
      cartItem.name = item; 
      cartItem.quantity = Number(e.target.value);
  }

  function handleAddToCart() {
    const updatedCart = [...props.cart]; 
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.name === cartItem.name
    );
  
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity = cartItem.quantity;
    } else {
      updatedCart.push(cartItem);
    }
  
    props.setCart(updatedCart);  
  }

  return( 
    <>
        {props.itemList.map((item, index) => (
          <div key={index}>
            <li onClick={() => props.setClickedItemIndex(index)}>
              {item}
            </li>
            {props.clickedItemIndex === index && (
              <div>
                <input type="number" onChange={(e)=>handleUserInputChange(e,item)}/>
                <button onClick={handleAddToCart}>Add To Cart</button>
              </div>
            )}
          </div>
        ))}
    </>
  );
}

function ViewCart(props) {
  const [cartVisibility, setCartVisibility] = useState(false);

  const handleDeleteCartItem = (index) => {
    const updateCart = [...props.cart];
    updateCart.splice(index, 1);
    props.setCart(updateCart);
  };

  const handleViewCart = () => {
    props.setClickedItemIndex(null);
    setCartVisibility(!cartVisibility);
  };

  return (
    <div>
      <button onClick={handleViewCart}>View Cart</button>
      {cartVisibility && props.cart.map((item, index) => (
        <div key={index}>
          <br />
          <li>
            {index + 1} : {item.name} : {item.quantity}
            <button onClick={() => handleDeleteCartItem(index)}>Delete</button>
          </li>
        </div>
      ))}
    </div>
  );
}


function App() {

  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [cart , setCart] = useState([]);  
  const itemList = ['Bread', 'Milk', 'Butter', 'Jam', 'Egg'];  

  return (
    <div id="flexContainer">
      <div>
        <h2>Product List</h2>
        <hr /><br />
        <Product itemList = {itemList} clickedItemIndex = {clickedItemIndex} setClickedItemIndex = {setClickedItemIndex} cart = {cart} setCart = {setCart}/>
      </div>
      <div>
        <br /><br />
        <ViewCart cart = {cart} setCart = {setCart} setClickedItemIndex = {setClickedItemIndex}/>
      </div>
    </div>
  );
}

export default App;
