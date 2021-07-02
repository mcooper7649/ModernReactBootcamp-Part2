import { Component } from "react"
import './Pepsi.css'
import { NavLink } from 'react-router-dom'

class Pepsi extends Component {
    render(){
        return (
            <div className="Pepsi">
                <NavLink exact to="/">Vending Machine</NavLink>
                <NavLink exact to="/Pepsi">Pepsi</NavLink>
                <NavLink exact to="/DietPepsi">Diet Pepsi</NavLink>
                <NavLink exact to="/Water">Water</NavLink>
                <NavLink exact to="/MountainDew">Mountain Dew</NavLink>
                <h1>I'm a pepsi</h1>
            </div>
        )
    }
}

export default Pepsi;