import React from 'react';
import './Card.css';

const Card = ({ title, description, id, deleteIdea}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>X</button>
    </article>
  )
}

export default Card;
