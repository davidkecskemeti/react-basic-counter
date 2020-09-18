import React, {Component} from "react";
import PropTypes from 'prop-types';

class CounterButton extends Component {

    render = () => {
        return (
            <div className="counterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    };
}

CounterButton.protoTypes = {
    by: PropTypes.number
}

CounterButton.defaultProprs = {
    by: 1
}

export default CounterButton;