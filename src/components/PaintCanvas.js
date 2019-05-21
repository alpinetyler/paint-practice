import React, {Component} from 'react'
import ColorPicker from './ColorPicker'
import Square from './Square'

export default class PaintCanvas extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            selectedColor: 'white',
            mouseDown: false
        }
    }

    //this 
    changeSelectedColor = color => {

        //console.log(color)
        this.setState({
            selectedColor: color

        })
    }

    handleMouseDown = ()=>
    this.setState({mouseDown: true})

    handleMouseUp = () =>
    this.setState({mousedown: false})

    draw(){
        let squares = []
            for(let i = 0; i< 5000; i++) {
                squares.push(<Square selectedColor={this.state.selectedColor} />)
            }
        return squares
    }
    render() {
        return(
            <div>
            <ColorPicker handleColorClick = {this.changeSelectedColor} />
            <div
            onMouseDownCapture={this.handleMouseDown}
            onMouseUpCapture={this.handleMouseUp} 
 
            style={{ display: 'flex', flexWrap: 'wrap'}}>
            {this.draw()}
            </div>
            </div>
        )
    }
}