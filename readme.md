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
    - install it using ``npm install uuid``
``
2. import uuid from "uuid/v4"
    - id: uuidv4() 


  
## Box Form Challenge
--

Objective
  - Have a form that has 3 input fields
      - Color, Width, Height
  - On Submit
      - We want to to take those values and set a ``<div>`` style attributes
  - We want to be able to generated many boxes if we want
  - We want to also have a button our box with an "X"
    - this will let us remove the box


1. Lets think about what components we will need
  - BoxList
    - this will display our Boxes and our form
    - This is our parent component to Box/NewBoxForm
  - Box
    - This will be the individual box component
    - we will import our props from BoxList
  - NewBoxForm
    - This will be our Form
    - This will get the props from BoxList


2. Lets Create our Box First
  - Setup Class Component
  - Export Default box
  - Import 'Box.css"
  - Create 'BoxStyle' object
    - set values to this.props
    - set key attributes same as jsx styling
    - specify width and height using JSX String Interpolation
      - this lets you append px or em
  - Insdie our return ``<div>`` add style={boxStyle}
    - this will automatically grab our properties from our parent
  - Add a button inside our div, we will edit later

3. In our BoxList.js
  - constructor
    - props
  - super
    - props
  - state
    - boxes: []
  - Lets iterate through 'this.state.boxes' with map and return a 'Box' component for each box in our boxes array
    - {...boxes} to pass all our attributes over as props

```
  {this.state.boxes.map(boxes => {
                return (
                    <Box {...boxes }} />)
            })}
```

4. NewBoxForm.js
  - constructor
    - props
  - super
    - props
  - state
    - color, width, height as empty strings
  - In our return we need to setup our form
    - Form tag
      - onSubmit={this.handleSubmit}
    - labels
      - htmlFor needs to match ID of input
    - input (1 for Color, Width, and Height)
      - type='text'
      - name='color'
      - value={this.state.color}
      - id='color'
      - onChange={this.handleChange}
    - button
      - text 'add new box'!
      - onSubmit is attached to form, not button
    - We need handleChange and handleSubmit
      - Bind it in the constructor
      - handlChange
        - pass evt
        - this.setState
          - ``[evt.target.name]: evt.target.value``
      - handleSubmit
        - pass evt
        - preventDefault
        - const newBox = {...this.state};
        - this.props.createBox(newBox);
        - reset our state using this.setState to clear the fields
      
  5. BoxList.js     
      - In order to use 'createBox' the prop
        - it needs to passed to ``<NewBoxForm createBox={this.create}>``
      - create()
        - we pass newBox arg
        - setstate lifting the state and adding newbox
```
create(newBox){
        this.setState({
            boxes:[...this.state.boxes, newBox]
        })
    }
```

  6. NewBoxForm.js | Now that our boxes can be created as needed we just need to add the ability to click the 'X' button and remove the box
    - we need to first add ID's to our boxes so we can remove them later
    - lets use uuidv4
      - import uuid
        - add to newbox in our handleSubmit
          ``const newBox = {...this.state, id: uuidv4()};``
    - BoxList.js | add the props key={boxes.id} and id={boxes.id}
    - Now we can create remove function and pass id arg
      - this.setState
        - use filter to setstate of boxes and shows only box.id that don't match our argument id
        - then we can us a fat arrow and pass removeBox prop
          - this.remove(boxes.id)
          - this passes our arugment to remove that is needed
      ```
      remove(id){
        this.setState({
            boxes:this.state.boxes.filter(box => box.id !== id)
        })
    }
    ```

## Todo list Challenge
---

1. App.js
  - Remove Default Code, keep div and add TodoList.js
  - No App.css needed

2. TodoList.js
  - We need to make it a constructor and pass super and props
  - Export
  - let todos = this.state.todos.map(todo) =>
        - iterate/return above the return for clarity
        - {todos} in our normal return to generated the list
  - Create h1 with span for list title
  - add NewTodoForm underneath our ``<ul>``
  
3. Todo.js
  - We need to make it a constructor and pass super and props
  - export
  - Inside our Todo render we need to create a var named 'result'
    - also create a state with "isEditing" default false
    - use if/else logic for isEditing to create the div for results
    - return 'result'
  - if isEditing = false
    - li with className terninary for wheter task is completed with onClick={this.handleToggle}
    - onSubmit={this.handleUpdate} for the form
    - another div after li
      - inside we will have our two buttons, edit and delete
        - Both will have an onClick event
          - {this.toggleForm}
          - {this.handleRemove}
          - we will also set the edit and delete FA icons here
  - if isEditing = true
    - Div with a form inside
    - Form only has 1 input and 1 button
      ``<input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>``
    - The button says save
      - the form has onSubmit={this.handleUpdate}

4. Todo Handlers
  - lets start by binding them all
  ```
       this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
  ```
  - this.handleChange for our input on the editing form
    - our normal code we use  often
    ```
     handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }
    ```
  - this.handleUpdate for isEditing form  onSubmit
  ```
  handleUpdate(evt){
        evt.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })

    }
  ```
  - this.handleToggle 
    - passes this id (we need to generate on TodoList.js)
      - to the callback method toggleTodo {this.toggleCompletion}

  ``` 
  handleToggle(evt){
        this.props.toggleTodo(this.props.id)
    }
  ```

  - this.toggleForm
    - this logic is for toggling the li complete and updating teh state
    ```
    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    ```

  - this.handleRemove
    - this takes our props callbackmethod removeTodo and passes the props id
    ```
    handleRemove(){
        this.props.removeTodo(this.props.id)
        
    }
    ```

  5. Back to TodoList.js
    - We need to create the callback methods we can pass as props and be used in our handlers Todo
    - (Create) we pass 1 newTodo arg
    - setState of todos:
      - lift the cur state
      - add newTodo
      - pass as prop to newTodoForm component
    
    - (update) we pass id arg and updatedTask
      - const updaatedTodos = this state map todos =>
      - pass as prop to Todo component
    
    - (remove) we pass just the id
      - setstate
        - ``todos:this.state.todos.filter(task => task.id !== id)``

    - (toggleCompletion) we pass just the id
      - const updatedTodos = this.state.map.todos =>
      - similar lagic to updat taks but !todo.completed is changed
```
 create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos:this.state.todos.filter(task => task.id !== id)
        })
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }
```

6. NewTodoForm.js
  - constructor/super/export
  - import v4 uuid
  - in the return we have form
    - onSubmit={this.handleSubmit}
    - Label = New Todo
    - input
      - attributes needed, type, name, id, value, paceholder, onChange={this.handleChange}
    - Button +
  - Bind for both our handlers
  - state = task: ""
  - normal handleChange
  - handleSubmit
    ```
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false});
        this.setState({
            task: [""]
        })
      }
    ```

  Project Complete