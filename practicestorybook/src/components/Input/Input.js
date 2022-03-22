import React from 'react'
import './Input.css'

function Input(props) {
    //destructuring the prop
    const {size = 'medium', ...rest} = props
  return (
    //   add the two classes, props and render the children component,
    // here we are adding some styling to the button element and some variations to the button prop
    <input className= {`input ${size}`} {...rest}/> 
       
  )
}

export default Input