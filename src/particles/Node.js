import React from 'react';
import './particles.css'

class Node extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pos: {x:props.x, y:props.y},
            isDragging: false,
            rel: null,
        }
        this.posRef = React.createRef();
    }

    onMouseDown(e){
        this.setState({
            isDragging: true,
        });

    }

    onMouseUp(){
        this.setState({isDragging: false});
        console.log(this.posRef.current.offsetTop);

    }

    onMouseMove(e){
        if (this.state.isDragging){
            this.setState({
                pos: {x: e.pageX - 50, y: e.pageY - 50}
            })
        }
        e.stopPropagation()
        e.preventDefault()
    }
    
    render() {
        return (
            <div 
            className='nodeContainer'
            onMouseDown={(e) => this.onMouseDown(e)}
            onMouseUp={() => this.onMouseUp()}
            onMouseMove={(e) => this.onMouseMove(e)}
            style={{
                left: this.state.pos.x,
                top: this.state.pos.y
            }}

            >
            </div>
        )
    }
}

export default Node;