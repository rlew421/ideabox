import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';
import Form from './Form';

// What kind of component should App be?
// Class or function?
class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {title: "Dogs should vote", description: "They deserve rights", id: 1},
        {title: "Users should be able to visit space in Animal Crossing",  description: "They should fly to the moon", id: 2}
      ]
    };
  }

  addIdea = (idea) => {
    const newIdeas = this.state.ideas.concat(idea);
    this.setState({ideas: newIdeas});
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);

    this.setState({ideas: filteredIdeas });
  }

  render() {
    return (
      <main className='App'>
        <h1>Ideabox</h1>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Form addIdea={this.addIdea}/>
        <Ideas ideas= {this.state.ideas}/>
      </main>
    );
  }

}

export default App;
