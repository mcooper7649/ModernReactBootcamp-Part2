import { Component } from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";


class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        };
        this.create = this.create.bind(this);
    }

    create(newBox){
        this.setState({
            boxes:[...this.state.boxes, newBox]
        })
    }

    remove(id){
        this.setState({
            boxes:this.state.boxes.filter(box => box.id !== id)
        })
    }
render(){
    return (
        <div>
            <NewBoxForm  createBox={this.create} />
            {this.state.boxes.map(boxes => {
                return (
                    <Box 
                    key={boxes.id} 
                    id={boxes.id} 
                    {...boxes } 
                    removeBox={()=> this.remove(boxes.id)}

                    />)
            })}
        </div>
    )
}
}


export default BoxList;

