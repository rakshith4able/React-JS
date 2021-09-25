import React, { Component } from 'react'
import BoxForm from './BoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(box) {
        this.setState((st) => ({
            boxes: [...st.boxes, box]
        }));
    }

    remove(id) {
        const newBoxes = this.state.boxes.filter(
            (box) => {
                return box.id !== id;
            }
        );
        this.setState({ boxes: newBoxes });
    }

    render() {
        const boxes = this.state.boxes.map(
            (box) => (
                <Box width={box.width}
                    height={box.height}
                    color={box.color}
                    key={box.id}
                    id={box.id}
                    remove={() => { this.remove(box.id) }} />
            )
        );
        return (
            <div className="BoxList">
                <BoxForm create={this.create} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;