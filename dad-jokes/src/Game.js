import React, { Component } from 'react';
import axios from 'axios';
import './Game.css'
import Joke from './Joke';


class Game extends Component {
    static defaultProps = {
        jokes: [
            {
                joke: "Whats the Difference Between a Jew and a Pizza?",
                answer: "The pizza doesn't scream when you put it in the oven..."
            }
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            jokes: []
        }
        this.getJoke = this.getJoke.bind(this);
        this.initializeJokes = this.initializeJokes.bind(this);
    }
    
    
    async getJoke(){
        let response = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json"}
    })
        let joke = response.data
        this.setState(previousState => ({
           jokes: previousState.jokes.push(joke)
            }))

            return {joke}
    }

    initializeJokes(){
        var jokeCount = 1;
        var repeater = setInterval(function () {
            this.getJoke()
          if (jokeCount < 10) {
              this.getJoke()
            jokeCount += 1;
            console.log(this.state.jokes)
          } else {
            clearInterval(repeater);
            console.log("Intialized...")
          }
        }, 1000);
    }
    
    async componentDidMount(){
            this.initializeJokes()
        }

        
    
        
    
    render(){
        return(
            <div>
            {this.state.loading ? (
                <div>
                <h1>Loading...</h1>
                </div>)
            : (
              <div>
              <Joke data={this.props.jokes}/>
              </div>
            )}
        </div>
        )
    }
}

export default Game;