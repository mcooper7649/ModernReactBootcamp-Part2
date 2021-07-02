import { Component } from "react"
import './Water.css'
import { NavLink } from 'react-router-dom'
                                
class Water extends Component {
    render(){
        return (
            <div className="Water">
                <NavLink exact to="/">Vending Machine</NavLink>
                <NavLink exact to="/Pepsi">Pepsi</NavLink>
                <NavLink exact to="/DietPepsi">Diet Pepsi</NavLink>
                <NavLink exact to="/Water">Water</NavLink>
                <NavLink exact to="/MountainDew">Mountain Dew</NavLink>
                <h1>I'm a Water</h1>
            </div>
        )
    }
}

export default Water;