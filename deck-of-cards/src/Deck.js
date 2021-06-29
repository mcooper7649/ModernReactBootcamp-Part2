import React, { Component } from 'react';
import './Deck.css';
import Card from './Card'
import axios from 'axios';


class Deck extends Component {

    constructor(props){
        super(props);
            this.state = {
                cardface: "",
                deck_id: "",
                alttext: "Default Alt Text",
                remaining: "52"
            };
        this.handleDraw = this.handleDraw.bind(this);
        this.drawCard = this.drawCard.bind(this);
        this.handleNew = this.handleNew.bind(this);
        
    }
   async componentDidMount(){
    {this.handleNew()}
    }
    
   async drawCard(){
        const getCard = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`
        let response =  await axios.get(getCard)
        console.log(response.data)
        this.setState({
            cardface: response.data.cards[0].image,
            alttext: `${response.data.cards[0].value} of ${response.data.cards[0].suit}`,
            remaining: response.data.remaining
        })

    }

    handleDraw(){
        this.drawCard();
    }

    async handleNew(){
        const getDeck = `https://deckofcardsapi.com/api/deck/new/shuffle`;
        let response = await axios.get(getDeck)
        let data = response.data.deck_id

        this.setState({
            deck_id: data
        })
        this.drawCard();
    }

    render(){
        return (
            
            <div>
            {this.state.remaining > 0 ? (
                <div>
                <Card drawcard={this.handleDraw} data={this.state}/>
                <button onClick={this.handleDraw}>Gimme a Card</button>
                </div>)
            : (
              <div>
              <h1>Out of Cards</h1>
              <button onClick={this.handleNew}>New Game</button>
              </div>
            )}
        </div>
        )
    }
}

export default Deck;