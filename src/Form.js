import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  render() {
    return (
      <form>
        <input placeholder="title" name="title" />
        <input placeholder="description" name="description" />
        <button>Submit</button>
      </form>
    )
  }
}


export default Form;
