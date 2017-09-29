import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
  	super()
  	this.state={
  		username: '',
  		hometown: ''
  	}
  }

  handleChange = (event) => {
  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	this.props.store.dispatch({
  		type: 'ADD_USER',
  		user: this.state
  	})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      	<label>Username</label>
        <input type='text' onChange={this.handleChange} value={this.state.username} name='username'/>
      	<label>Hometown</label>
        <input type='text' onChange={this.handleChange} value={this.state.homewown} name='hometown'/>
        <input type='submit'/>
      </form>
    );
  }
};

export default UserInput;
