import React from 'react';

const Card = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button>X</button>
    </article>
  )
}

export default Card;
