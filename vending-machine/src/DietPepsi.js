import { Component } from "react"
import './DietPepsi.css'
import { NavLink } from 'react-router-dom'

class DietPepsi extends Component {
    render(){
        return (
            <div className="DietPepsi">
                <NavLink exact to="/">Vending Machine</NavLink>
                <NavLink exact to="/Pepsi">Pepsi</NavLink>
                <NavLink exact to="/DietPepsi">Diet Pepsi</NavLink>
                <NavLink exact to="/Water">Water</NavLink>
                <NavLink exact to="/MountainDew">Mountain Dew</NavLink>
                <h1>I'm a Diet Pepsi</h1>
            </div>
        )
    }
}

export default DietPepsi;