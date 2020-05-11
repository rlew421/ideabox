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

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newIdea = {
      title: this.state.title,
      description: this.state.description,
      id: Date.now()
    }

    this.props.addIdea(newIdea);
    this.state.title = '';
    this.state.description = '';
  }

  render() {
    return (
      <form>
        <input value={this.state.title} onChange={this.handleChange} placeholder="title" name="title" />
        <input value={this.state.description} onChange={this.handleChange} placeholder="description" name="description" />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}


export default Form;
