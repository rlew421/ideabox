import React from 'react';
import Card from './Card';
// Ideas will receive a list of Ideas from the App via props (doesn't have to hold on to its own state)

const Ideas = (props) => {
  const ideasToRender = props.ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
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
