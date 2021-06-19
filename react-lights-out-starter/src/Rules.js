import React,{ Component } from "react";
import "./Rules.css"


class Rules extends Component{
    render(){
        return (
        <div className="rules-wrapper">
            <div>
            <i className="fas fa-arrow-down neon-blue"></i>
            <i className="fas fa-arrow-down neon-orange"></i>
            <i className="fas fa-arrow-down neon-blue"></i>
            </div>
            <h1 className="neon-blue rules-title">Rules</h1>
            <hr className="hr-line"></hr>
            <h3 className="neon-orange rules-text">Turn all the lights off.......and Have Fun</h3>
            <div>
            <i className="fas fa-arrow-up neon-orange"></i>
            <i className="fas fa-arrow-up neon-blue"></i>
            <i className="fas fa-arrow-up neon-orange"></i>
            </div>
        </div>
        )
    }
}

export default Rules;