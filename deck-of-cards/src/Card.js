import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    static defaultProps = {
        data: {
            alttext: "Im the Default Alt Text",
            cardface: "https://deckofcardsapi.com/static/img/JD.png"
        }
    }

    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props.data.remaining)
        return (
            <div>
                <h1>I'm a {this.props.data.alttext}</h1>
                <img src={this.props.data.cardface} alt={this.props.data.alttext}></img>
            </div>
        )
    }
}

export default Card;