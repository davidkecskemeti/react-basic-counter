import React, {Component} from "react";
import CounterButton from "./CounterButton";
import './Counter.css'

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }

    render = () => {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decremenet} by={1}/>
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decremenet} by={5}/>
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decremenet} by={10}/>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="resetButton" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    };

    increment = (by) => {
        this.setState((prevState) => {
            return {counter: prevState.counter + by}
        })
    }

    decremenet = (by) => {
        this.setState((prevState) => {
            return {counter: prevState.counter - by}
        })
    }

    reset = () => {
        this.setState(() => {
            return {counter: 0}
        })
    }
}

export default Counter;