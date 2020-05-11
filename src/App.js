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

  render() {
    return (
      <main>
        <h1>Ideabox</h1>
        <Form />
        <Ideas ideas= {this.state.ideas}/>
      </main>
    );
  }

}

export default App;
