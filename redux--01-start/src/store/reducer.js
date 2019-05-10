const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        // push affects the original state, not a good practice
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    default:
      return state;
  }
  // if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1
  //   };
  // }
  // if (action.type === "ADD") {
  //   return {
  //     counter: state.counter + action.value
  //   };
  // }
  // if (action.type === "SUBTRACT") {
  //   return {
  //     counter: state.counter - action.value
  //   };
  // }
};

export default reducer;
