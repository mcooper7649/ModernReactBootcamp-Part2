# ModernReactBootcamp-Part2

- Welcome to the Continuation of the Modern React Bootcamp
- I wanted to restructure the codebase to make more repositories


## Lights Out Game
--

- using react-Lights-out-starter-code
- npm i to install dependencies


1. If you run npm start
    - we get error due to incomplete code
        - fix that (read the comments)

2. On board we need to setup our board layout
    - we need to configure the default props for nrows,ncols,chancelightStartsOn

3. Setup our initial state WITH the createBoard function
    - hasWon: false
    - board: this.createBoard()

4. Next we work on the createBoard function
    - we can use a nested loop to acheive this and create a row and fill it with boolean values
    - then we push each row on to the board
    

## Forms in React
--

1. Thinking about state
    - It's convienient to ahve a JS function that
        - handles the submission of the form AND
        - has access to the data the user entered
    - The technique to get this is controlled components
        - In HTML, form elements such as input, textarea, and select typically maintian their own state and update it based on user input.
        - In React, mutable state is kept in the state of components,
        and only updated with setState()
        - How do we use React to contorl form input state?
```
<form>
    <lable for="fullname">Full Name:</lable>
    <input name="fullname />
    <button>Add!</button>
</form>
```



2. Handling Multiple Inputs
    - To handle mulitple contorlled inputs, add the HTML name attribute to each JSX input element and let handler fucntion decide the approriate key in state to update based on event.target.name
    - Using this emthod, the keys in state have tomatch the input names exactly
```
import React, { Component } from "react";

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h1>Form w/ Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;
```




```
class YourComponent extends Component {

handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value
    });
}

}
```

3. Labels in React
    - When we make a label tag we typically use a 'for' attribute and athat should match the ID of the input
    - In REACT, we use htmlFor instead

4. Passing Data Up to a Parent Component
    - In React we generally ahve a downward data flow. "Smart" Parent components with simpler child components.
    - 



## UUID for Unique Keys
--

1. We've see that using an iteration index as a key prop is a bad idea 
    - No natural unique key? use a library to create a uuid
    - Universally unique idetifier is a way to uniquely identify info
    - install it using npm install uuid

2. import uuid from "uuid/v4"
    - id: uuid() 