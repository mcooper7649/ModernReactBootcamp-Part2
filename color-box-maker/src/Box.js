import { Component } from "react";
import './Box.css'

class Box extends Component {

render(){
let boxStyle = {
    backgroundColor: this.props.color,
    width: `${this.props.width}px`,
    height: `${this.props.height}px`
}
    return (
        <div className="box-wrapper">
            <div style={boxStyle}>
                <button className="btn" onClick={this.props.removeBox}>X</button>
            </div>
            
        </div>
    )
}
}


export default Box;

