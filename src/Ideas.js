import React from 'react';
import Card from './Card';
// Ideas will receive a list of Ideas from the App via props (doesn't have to hold on to its own state)

const Ideas = ({ideas, deleteIdea}) => {
  const ideasToRender = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })
  return (
    <section>
      {ideasToRender}
    </section>
  );
}

export default Ideas;
