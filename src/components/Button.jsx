import React from 'react'

const Button = ({nombre,clase}) => {
  return (
    <button className={`btn btn-outline-${clase}`}>
    {nombre} 
    </button>
  )
}

export default Button
