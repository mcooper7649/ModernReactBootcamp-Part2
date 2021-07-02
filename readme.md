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


  ## Personal Additions
  ---

  1. Added Lodash for the case control
  2. Added Sound Effects
  3. Added Helmet


  ## Yahtzee Game
  --

  1. Get Starter Code
    - npm i
    - npm run start
    (View Code as it was starter Code)

Come Back and do notes

  2. Creating Backend with Leaderboard
    - Using Node with express
    - Using Mongo with Mongoose
    - FrontEnd will be all React



### React Component Lifecycle
--

1. Every component comes with methods that allow developers to update application state and reflect the change to the UI befoere/after key react 'events'.
  - There are three main phases to know about:
    - mounting
    - updating
    - unmounting


2. Mounting 
  1. constructor
  2. render
  3. React updates DOM and refs
  4. componentDidMount

3. ComponentDidMount
  - This method runs after the component is mounted.
  - Mounting is the first time the componet is rendred to the DOM
  - This is a godo palce to load any data via ajax or setup subscription/times
  - setState inside componentDidMount will triger antoher render

### Loading data via AJAX
--

1. we want to use 
  - https://api.github.com/zen for this module
  - We are going to setup our zenQuote component
  - we will add the componentDidMount lifecycle function
  

2. To load the data we use

```
axios.get("https://api.github.com/zen").then(response => {
  this.setState({
    quote: response.data
  })
})
```

3. We can then simply tap into our response qoute by using {this.state.quote}

4. Bad Practices
  - Do not try to put your axios get inside the contructor and not in a lifecycle method, it may seem to work well but may break


## Adding Animated Loaders
---

1. Due to our get request taking time to downlaod the data, we can add loading icon

2. First we want to add a setTimeout() inside the body of our Axios Get

3. We will setState after 3s with the response.data

4. Copy any CSS from codepen with the "loader" class
  - I created a seperate component to help with design

5. Now we need to creata a state that will allow us to toggle the loader
  - lets make "isLoaded: false"
  - then we can add conditional logic


## Loading Data with Async Functions
---


1. Using the example below you can see how we use axios to implete async/await methods for our github api response data\

```
import axios from 'axios';

class App extends Component{
  render(){
    return
    <div className='App'>
      <GithubUserInfo username="facebook" />
      <GithubUserInfo username="colt" />
  }
}

class GithubUserInfo extends Component
constructor(props){
  super(props);
  this.state = {
    imgUrl: "",
    name: ""
  }
}

async componentDidMount(){
  const url = `https://api.github.com/users/${this.props.username}`
  let response = await axios.get(url)
  let data = response.data
  this.setState({
    imgUrl:data.avatar_url, name: data,name
  })
}

render(){
  return (
    <div>
      <h1>Github User: {this.state.name}</h1>
      <img src={this.state.imgUrl} />
    </div>
  )
}
```


## Updating Lifecycle Method
---

1. Updating is triggered in a few different ways
  - Render Method is triggered
    - New Props can cause this
    - setState can cause this
    - foreceUpdate can cause this
2. After any of these updates, the ComponentDidUpdate lifecycle method is executed
  - ComponentDidUpdate
  - This is a good time to implement any side effect operations
    - Auto-saving
    - updating DOM for uncontrolled components


## ComponentDIdUpdate()
---

1. This method is called after every render occurs.
  - You can do a comparison between the previous and current props and state

```
componentDidUpdate(prevProps, prevStatee){
  console.log("In Component did update")
  console.log(prevState.todos)
}
```


## Unmounting
---

1. componentWillUnmount()
  - is invoked imediately before a component is unmounted and destroyed.
  - you should NOT set state in componentWillUnmount()
  - it wont work anyways

2. When would we use it?
  - Clear intervals on timers are common
  - 

```
class Clock extends Component{
componentDidMount(){
  this.timeID = setInterval(( => {
    this.tick()
  }, 1000);
}

componentWillUnmount(){
  clearInterval(this.timerID)
  console.log("in component will unmount")
}

  
}
```

## Deck of Cards
---
Goals of Project
--

Build a deck of cards using the deckofcards.com api

1. Use the shuffle to create a new deck with componentDidMount
2. Store the deck ID it gives you can make further request to retreive each card image.
3. Add a button to your app that allows a user to draw new card.


4. When a user clicks the buttons, send another request to the API 
    - https://deckofcardsapi.com/api/deck/${deck_id}/draw/
    - using the id we got on teh original mount
    - use the data included in the response to display the new image

5. Everytime the user clicks the app should sipaly a new card until the deck is empty.
    - Make sure to tell the user there are no more cards left!


## Dad Jokes App
---

1. Goal of Challenge
  - When the jokes are loading, display a loading spinner notifying the user that the jokes are being loaded
  - This should hide once the jokes have finished
  - Make sure that there are no duplicate jokes shown
  - show the jokes sorted by the net score, and update this as the scores change
  - store the list of jokes, with votes in local storage. W
  - when users visit the app, it should show saved jokes, rather tahn fetching enw jokes,.
  - However, the user should still be able to generate new jokes via the button, and these new jokes should replace the ones in local storage
  - Add CSs styling for the joke app, including FA thumbsup/down images for the voting buttons. Make the loading spinner using FA- you can spin any of their icons.


2. View Dad Jokes Readme for Full Build Notes

## Intro to Client Side Routing
---

Goals

1. Describe what client-side routing is and why its useful
2. Compare client-side routing to server-side routing
3. Implement our own client-side routing with React Router


### Server-Side Routing
--
1. Traditional routing is "server-side routing"
  - Clicking a link causes browser to request a new page & replace entire DOM

2. Server decides what HTML to return based on URL requested, entire page refreshes

### Client-Side Routing
--

- Faking Client Side Routing
 - It does let us show different "pages"
   - All in the front-end, without loading new pages from server
  - But we don't get
    - A different URL as we move around "pages"
    - The ability to use the back/forward browser buttons
    - Any way to bookmark a page on the site
  
## React Router aka Real Client Side Routing
--

- Client-side routing handles mapping between URL bar and the content a user sees via browser tather than via server
- Site that exclusively use client-side routing are single-page applications
- We use JavaScript to manipulate the URL bar with a WEB API call history

1. React Router is a 3rd party Router, there are many, this is popular
- to install npm i react-router-dom
- import BrowserRouter
  - import {BrowserRouter} from "react-router-dom"
  - Wrap your App!

index.js
```
import {BrowserRouter} from "react-router-dom" 

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  ,document.getElementById("root")
)
```

2. Route is a part of react-router-dom, we put the router inside our App.js file and import Route

```
<div className='App' >
<Route path='/dog' component={Dog} />
</div>
```

3. This is our first route, congratulations
  - Lets define about (our home route "/")
  - Lets define contact
  - you will notice that "/" matches our dog and contact as well, thus rendering more than one route

4. Switch lets us prevent the rendering of similiar routes paths
  - import it with react-router-dom
  - switch can wrap all the routes and they need to be in reverse path order aka least specific
  - OR we can just use exact property
  - switch limits to one match per group
  - best practice to use Switch and Exact together
```
<Switch>
<Route exact path='/dog' component={Dog} />
<Switch>
```

## Intro to the Link Component
--

1. The ``<link>`` comonent acts as a replacement for ``<a>`` tags.

2. Instead of an href attribute, ``<link>`` use a to prop.

3. Clicking on ``<Link>`` does not issue a GET request
  - JS intercepts click and does client side routing
  - import link from "react-router-dom"

## NavLink Component
--

1. Navlink is just like link, with oen additional feature
  - if at page that link would go to the a gets a css class of active
  - import NavLink from 'react-router-dom'
  - NavLink uses the attribute activeClassName as class
  - Navlink also tries matching like routes, so we can use the 'exact' attribute

## Render Prop vs Component Prop in Routes
--

1. Route does't allow us to pass props the same way in routes they do typically

2. We will pass them as callback components with props
  -  component={()=> <Dog name='Muffins' />}
  - render={()=> <Dog name='busuits' />} 

3. - Render won't go throuogh the wholelifecycle after route is called
  - Component WILL


## URL Params
--

1. url params are useful for dynamic page and content generation

2. As we learned wtith our Props.children module we can pass props down our wrap components with children.

App.js
```
(WITH RENDER PROPS MUST BE PASSED DOWN)
class App extends Component{
  render(){
    return (
      <div className="App'>
      <Route 
      exact
      path='/food/:name'
      render={routeProps => <Food {...routeProps} />}
      />
      </div>
    )
  }
}

(WITH COMPONENT PROPS ARE AUTOMATICALLY PASSED DOWN)
class App extends Component{
  render(){
    return (
      <div className="App'>
      <Route 
      exact
      path='/food/:name'
      component={Food}
      />
      </div>
    )
  }
}

```


3. using that methodology we can then pass our props down using either the 
  - render method 
  - componennt method


```
class Food extends Component{
  render(){
    const name = this.props.match.params.name
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    return {
      <div className='Food'>
        <h1>I love to eat {this.props.name} </h1>
        <img src={url}  alt={this.props.name} />
        </div>
    }
  }
}

export default Food;
```


## Multiple Route Params
---

1. We can create a component that uses two diffent route params think, meal component that uses food and drink as their route params

App.js
```
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
        exact
        path='/food/:name'
        render={routeProps => <Food {routeProps} />}
      </div>
      <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
    )
  }
}
export default App

```

2. In our example above you can see why we would need exact on Food component, if not, the Meal component would never render

```
class Meal extends Component {
  render(){
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drink Url = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
      <h1>
      This is a meal of {foodName} + {drinkName}
      </h1>
      <img src={foodUrl} />
      <img src={drinkUrl} />
      </div>
    )

  }
}

```


## 404 Route
---

1. We need to create a 404 route for a landing page when people attempt to access a non existing route or page
  - our example below would render Error not found

App.js adding 404 
```
class App extends Component{
  render(){
    return (
      <div className="App'>
      <Route 
      exact
      path='/food/:name'
      component={Food}
      />
      <Route render={() => <h1>Error Not Found</h1>} />
      </div>

    )
  }
}
```

2. We must wrap our 404 with a switch because the exact just wont do the routing we need

3. The ORDER MATTERS when using a switch, we must remember to put the 404 at the bottom



```
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/food/:name' render={routeProps => <Food {routeProps} />}
      <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
      <Route exact path='/' render{()=> <h1>Home Page</h1>}>
      <Route render={() => <h1>Error NOT FOUND!!!</h1>}>
      </Switch>
      </div>
    )
  }
}
export default App
```

## Writing a Simple Search Form
---


FoodSearch.js
```
class FoodSearch extends Component {
  construcstor(props){
    super(props)
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({
      query: evt.target.value
    })
  }
  render(){
    <h1> Search for a Food </h1>
    return (
      <div>
      <input type="text" placeholder="search for a food" value={this.state.query}
      onChange={this.handleChange} />
      </div>
      <Link to={`/food/${this.state.query}`}>Go</Link>
    )
  }
}

export default FoodSearch
```
```
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/food/:name' render={routeProps => <Food {routeProps} />}
      <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
      <Route exact path='/' render{()=> <FoodSearch />}>
      <Route render={() => <h1>Error NOT FOUND!!!</h1>}>
      </Switch>
      </div>
    )
  }
}
export App Component
```



## Redirects
---
Client-Side Redirects

1. With React Router we can mimic the behavior of server-side redirects
2. Useful after certain user actions (eg submitting a form)
3. Can be used in lieu of having to catch-all 404 component.

- In React Router, therer are two ways to redirect:
  - Using the <Redirect> component
  - In our example below we use /\d/.test(name) ? <redirect to = '/' /> :  to redirect home if the url contains a digit
  
Food.js with ``<Redirect``>
  ```
class Food extends Component {
  render(){
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className="Food>
      {/\d/.test(name) ? (<redirect to = '/' />) :
      (<div>
      <h1>I love to eat food</h1>
      <img src={url} alt={name /}>
      </div>})
    </div>
    )
  }
}

  ```

  FoodSearch.js
```
class FoodSearch extends Component {
  construcstor(props){
    super(props)
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }

  handleChange(evt){
    this.setState({
      query: evt.target.value
    })
  }
  handleClick(){
    //Do Something
    alert("Saved your food to db!")
    //redirect somewhere else
    this.props.history.push(`/food/${this.state.query})
  }
  render(){
    <h1> Search for a Food </h1>
    return (
      <div>
      <input type="text" placeholder="search for a food" value={this.state.query}
      onChange={this.handleChange} />
      </div>
      <Link to={`/food/${this.state.query}`}>Go</Link>
      <button onClick={this.handleClick}>Save New Food!</button>
    )
  }
}

export default FoodSearch
```

## Pushing On to the history prop
---

- this.props.history.push("/")

1. this.props.history is something we call upon when we do something and then need to redirect somewhere else.
2. we need to pass them as routeProps in the Route component of that path to get access WHEN using render method
3. If using component method the routeProps will automatically be accessible
4. Best practices use history.push when someone successfully does something and leave 404 or redirect for pages not found


## withRouter higher order component
--

1. Switch and React Router let us pass children props via render or component methods but what if we need to pass props into a navbar that doesn't use those methods?

2. We can go to navbar.js and import ``import { withRouter } from "react-router-dom``

3. Pass navbar in via the export ``export default withRouter (Navbar);``

4. This gets us the data from react router


## implementing a back button
---

1. There are a few methods we have access to in the this.props.history
2. For example, goBack() or goForward() and there are many others


```
import React, { Component} from 'react';
import { withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
handleLogin(){
  alert("Logged you in!");
  this.props.history.push("/food/salmon");
}

handleBack(){
  this.props.history.goBack()
}

render(){
  return (
    <div className='Navbar'>
      <button onClick={this.handleLogin}>Log in </button>
      <button onClick={this.handleBack}> goBack </button>
      <div>
  );
}

}
export default withRouter {Navbar};