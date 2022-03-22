import React, {useState} from 'react'
import './Header.css'

function Header() {
  var [count, setCount] = useState(0)
  var addItemNumber = () => setCount(++count)
  return (
      <>
      <div className='header'>
        <div className='header_left'>
            <img 
                src="https://static.thenounproject.com/png/1842086-200.png"
                alt=''
            />
        </div>
        <div className='header_middle'>
            <div>
                Item count
            </div>
            <div>
                {count}
            </div>
        </div>
        <div className='header_right'>
        <button>Register</button> 
        <button>Log-in</button>
        
        </div>
    </div>
    <div className='page'>
    <div class="card">
       
        <div class="container">
            <h4><b>Product</b></h4> 
            <button className='item_button' onClick={addItemNumber}>Add Item</button>
        </div>
   </div>
   <div class="card">
        
        <div class="container">
            <h4><b>Product</b></h4> 
            <button className='item_button' onClick={addItemNumber}>Add Item</button>
        </div>
   </div>
   <div class="card">
        
        <div class="container">
            <h4><b>Product</b></h4> 
            <button className='item_button' onClick={addItemNumber}>Add Item</button>
        </div>
   </div>

    </div>
    <div className='footer'>

    </div>
      </>
    
  )
}

export default Header