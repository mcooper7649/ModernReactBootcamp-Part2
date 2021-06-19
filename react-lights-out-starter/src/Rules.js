import React,{ Component } from "react";
import "./Rules.css"


class Rules extends Component{
    render(){
        return (
        <div className="rules-wrapper">
            <img alt="rules-gif" className="rules-img" src="https://i.gyazo.com/7a277191e25a7f180d6f08670db1a6d5.gif"></img>
            <div>
            <i className="fas fa-arrow-down neon-blue"></i>
            <i className="fas fa-arrow-down neon-orange"></i>
            <i className="fas fa-arrow-down neon-blue"></i>
            </div>
            <img alt="rules-gif" className="rules-img" src="https://i.gyazo.com/9ea0d8da36968be4ccf0b3dbc2da7d3d.gif"></img>
            <h1 className="neon-blue rules-title">Rules</h1>
            <hr className="hr-line"></hr>
            <h3 className="neon-orange rules-text">Turn all the lights off.......and Have Fun</h3>
            <img alt="rules-gif" className="rules-img" src="https://i.gyazo.com/9ea0d8da36968be4ccf0b3dbc2da7d3d.gif"></img>
            <div>
            <i className="fas fa-arrow-up neon-orange"></i>
            <i className="fas fa-arrow-up neon-blue"></i>
            <i className="fas fa-arrow-up neon-orange"></i>
            </div>
            <img alt="rules-gif" className="rules-img" src="https://i.gyazo.com/7a277191e25a7f180d6f08670db1a6d5.gif"></img>
        </div>
        )
    }
}

export default Rules;