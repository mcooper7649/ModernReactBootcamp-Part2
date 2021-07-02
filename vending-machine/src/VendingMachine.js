import { Component } from "react";
import { Link } from 'react-router-dom'
import './VendingMachine.css'

class VendingMachine extends Component {
    constructor(props){
        super(props)
    }


render(){
    return(
        <div>
        <div className="machine-wrapper"></div>
        <div>
        <h1>Hello I'm a Vending Machine, What would you like today?</h1>
        <Link exact to="./Pepsi">Pepsi</Link>
        <Link exact to="./DietPepsi">Diet Pepsi</Link>
        <Link exact to="./Water">Water</Link>
        <Link exact to="./MountainDew">Mountain Dew</Link>
        </div>
        </div>
    )
}
}

export default VendingMachine;