import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css'
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';


class JokeList extends Component {
    static defaultProps = {
        numJokesToGet : 10,
        jokes: [
            {
                joke: "Whats the only flower that grows on your face?",
                answer: "Tu-lips"
            }
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            jokes: [],
        }
    }
    
    handleVote(id, delta){
        this.setState(st => ({
            jokes: st.jokes.map(j => 
                j.id === id ? {...j, votes: j.votes + delta} : j 
            )
            }));
        }
    

  
    
    async componentDidMount(){
    let jokes = [];
    while(jokes.length < this.props.numJokesToGet){
        let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json"}
    })
        jokes.push({id: uuidv4(), text: res.data.joke, votes: 0 });
    }  
    this.setState({
        jokes: jokes
    })
    }

        
    
        
    
    render(){
        return(
            <div className="JokeList">
            {this.state.loading ? (
                <div>
                <h1>Loading...</h1>
                </div>)
            : (
              <div className="JokeList">
              <div className="JokeList-sidebar">
              <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
              <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
              <button className="Jokelist-getmore">New Joke</button>
              </div>
              <div className="JokeList-Jokes">
              {this.state.jokes.map(j => {
                 return <Joke key={j.id} text={j.text} votes={j.votes} />
              })}
              {/* <Joke data={this.props.jokes}/> */}
              </div>
              
              </div>
            )}
        </div>
        )
    }
}

export default JokeList;