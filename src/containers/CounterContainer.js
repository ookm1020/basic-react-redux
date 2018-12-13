import Counter from "../components/Counter";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";
import { increment, decrement, setColor } from "../store/modules/Counter";

const mapStateToProps = ({ Counter }) => {
  return {
    color: Counter.color,
    number: Counter.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSetColor: () => {
      const color = getRandomColor();
      dispatch(setColor(color));
    }
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
