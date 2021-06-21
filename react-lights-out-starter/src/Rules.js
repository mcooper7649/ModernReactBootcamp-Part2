import React,{ Component } from "react";
import "./Rules.css"


class Rules extends Component{
    render(){
        return (
        <div className="rules-wrapper">
            <div>
            <div className="arrows">
            <i className="fas fa-arrow-down"></i>
            <i className="fas fa-arrow-down"></i>
            <i className="fas fa-arrow-down"></i>
            </div>
            <img src="https://i.gyazo.com/64b960d2e4d5a86840a20fd396a589c5.gif" className="img-gif" alt="tutorial gif" />
            </div>
            <div className="rules-wrap2">
            <h1 className="rules-title">Rules</h1>
            <hr className="hr-line"></hr>
            <h3 className="rules-text">Turn all the lights off</h3>
            <h3 className="rules-text">Have Fun</h3>
            </div>
            <img src="https://i.gyazo.com/64b960d2e4d5a86840a20fd396a589c5.gif" className="img-gif" alt="tutorial gif" />
            <div className="arrows">
            <i className="fas fa-arrow-up"></i>
            <i className="fas fa-arrow-up"></i>
            <i className="fas fa-arrow-up"></i>
            </div>
            
        </div>
        )
    }
}

export default Rules;