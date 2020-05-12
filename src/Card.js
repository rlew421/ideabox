import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={() => deleteIdea(id)}>X</button>
    </article>
  )
}

export default Card;
