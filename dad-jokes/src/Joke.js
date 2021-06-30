import { Component } from 'react';

class Joke extends Component {
    render(){
        return (
            <div className="joke">
                <h1 className="joke-h1">{this.props.data[0].joke}</h1>
                <h2 className="joke-h1">{this.props.data[0].answer}</h2>
            </div>
        )
    }
}

export default Joke;