import React from 'react'
import './Button.css'

function Button(props) {
    //destructuring the prop
    const {variant = 'primary',children, ...rest} = props
  return (
    //   add the two classes, props and render the children component,
    // here we are adding some styling to the button element and some variations to the button prop
    <button className= {`button ${variant}`} {...rest}> 
        {children}
    </button>
  )
}

export default Button