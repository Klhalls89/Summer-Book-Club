import React from 'react'

export const BookPage = (props) => {
  console.log(props)
  const { by, title, image, description, purchase } = props 
  return(
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>{by}</p>
      <p>{description}</p>
    </div>
  )
}

