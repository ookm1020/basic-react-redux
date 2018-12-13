const INCREMENT = "Counter/INCREMENT";
const DECREMENT = "Counter/DECREMENT";
const SET_COLOR = "Counter/SET_COLOR";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const setColor = color => ({
  type: SET_COLOR,
  color
});

const initialState = {
  color: "black",
  number: 0
};

export const Counter = function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};
