import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import './NewBoxForm.css';

class NewBoxForm extends Component {
constructor(props){
    super(props);
    this.state = {
        color: "",
        width: "",
        height: "" 
    }
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(evt) {
    this.setState({
        [evt.target.name]: evt.target.value 
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuidv4()};
    this.props.createBox(newBox);
    this.setState = {
        color: "",
        width: "",
        height: "" 
    }
  }
render(){
    return (
        <div>
        <h1>New Box Form</h1>
        <form className="my-form" onSubmit={this.handleSubmit}>
        <div className="form-div">
        <label htmlFor='color'>Color: </label>
          <input
            type='text'
            name='color'
            value={this.state.color}
            id='color'
            onChange={this.handleChange}
          />
        </div>
        <div className="form-div">
        <label htmlFor='width'>Width: </label>
          <input
            type='text'
            name='width'
            value={this.state.width}
            id='width'
            onChange={this.handleChange}
          />
        </div>
        <div className="form-div">
        <label htmlFor='height'>Height: </label>
          <input
            type='text'
            name='height'
            value={this.state.height}
            id='height'
            onChange={this.handleChange}
          />
        </div>
          <button>Add New Box!</button>
        </form>
      </div>
    )
}
}


export default NewBoxForm;

