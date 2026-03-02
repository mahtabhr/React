import React from 'react'

const Button = ({btnTxt,className}) => {
  return (
    <button className={`px-7 py-6 bg-btnClr text-white ${className}`}>{btnTxt}</button>
  )
}

export default Button