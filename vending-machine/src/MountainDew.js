import { Component } from "react"
import './MountainDew.css'
import { NavLink } from 'react-router-dom'

class MountainDew extends Component {
    render(){
        return (
            <div className="MountainDew">
                <NavLink exact to="/">Vending Machine</NavLink>
                <NavLink exact to="/Pepsi">Pepsi</NavLink>
                <NavLink exact to="/DietPepsi">Diet Pepsi</NavLink>
                <NavLink exact to="/Water">Water</NavLink>
                <NavLink exact to="/MountainDew">Mountain Dew</NavLink>
                <h1>I'm a Mountain Dew</h1>
            </div>
        )
    }
}

export default MountainDew;