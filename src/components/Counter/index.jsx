import React from "react";
import PropTypes from "prop-types";

import "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <div
        className="Counter"
        onClick={this.props.onIncrement}
        onContextMenu={e => {
          e.preventDefault();
          this.props.onDecrement();
        }}
        onDoubleClick={this.props.onSetColor}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.number}
      </div>
    );
  }
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

/* Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => {},
  onDecrement: () => {},
  onSetColor: () => {}
}; */

export default Counter;
