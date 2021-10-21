import { Component } from "react";

<img src= './Items/img/img1'></img>;

class ItemCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }


    increment = () => {
        this.setState({ count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1});
    }

    render() {
        return (
            <div className="ItemCount">
                <button class="btn btn-dark" onClick={this.increment} > + </button>
                <button class="btn btn-dark" onClick={this.decrement}>-</button>
                <button class="btn btn-dark" className> Restar</button>
                <h2>{this.state.count}</h2>



            </div>
             
        );
    }
}

export default ItemCount; 